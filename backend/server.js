// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SK);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const updateStockValue = require('./firebaseConfig')

const app = express();


let x = 1

app.use(cors());
app.use(express.json()); // Add this line to parse JSON body
app.use(bodyParser.json()); // Middleware to parse JSON bodies



const YOUR_DOMAIN = 'http://localhost:5173';

products = []

app.post('/create-checkout-session', async (req, res) => {
  const {choices, cartItems} = req.body; // This will contain the array of objects

  console.log(choices)
  console.log(cartItems)

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: cartItems.map((item, idx) => {
     
      // add product to products list
      item.quantity ? products.push({'id': item.id, 'quantity': item.quantity, 'choiceId': item.choiceId[0]}) : null

      return {
        price_data: {
          currency: 'GBP',
          product_data: {
            name: item.optionName + (choices[idx].name == 'default' ? '' : ` ${choices[idx].name}`), //add option name to the displayed name in checkout
          },
          unit_amount: choices[idx].price * 100, // Amount in the smallest currency unit (e.g., cents for USD)
        },
        quantity: item?.quantity || 1,
      }
  }),
    mode: 'payment',
    shipping_address_collection: {
      allowed_countries: ['GB'], // Collect shipping address for specified countries
    },
    phone_number_collection: {
      enabled: true,
    },
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  console.log(JSON.stringify({products}))
  res.send({clientSecret: session.client_secret});
}

);

app.get('/session-status', async (req, res) => {
  console.log(x++)
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log(session.status)

  
  if (session.payment_status === 'paid') {

    for(i = 0; i < products.length; i++){
      updateStockValue(products[i].id, products[i].quantity, products[i].choiceId)
      console.log('----------------')
    }
    products = []

    console.log(session.customer_details)


    // Execute the curl command
    const curlCommand = `curl -g "http://54.147.16.59/moodle/webservice/rest/server.php?wstoken=${process.env.CREATE_USER_TOKEN}&wsfunction=core_user_create_users&moodlewsrestformat=json&users[0][username]=${session.customer_details.email}&users[0][firstname]=${session.customer_details.name.split(' ')[0]}&users[0][lastname]=${session.customer_details.name.split(' ')[1] || '..'}&users[0][email]=${session.customer_details.email}&users[0][password]=${generatePassword(session.customer_details.name)}"`;

    exec(curlCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing curl: ${error}`);
        return;
      }
      console.log(`Curl output: ${stdout}`);
      console.error(`Curl error output: ${stderr}`);
    });
  }

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
    payment_status: session.payment_status
  });
});


app.listen(4242, () => console.log('Running on port 4242'));





// generate password
function generatePassword(name) {
  const specialCharacters = "!@#$%&*+.";
  const digits = "0123456789";

  // Select two random digits
  let digit1 = digits[Math.floor(Math.random() * digits.length)];
  let digit2 = digits[Math.floor(Math.random() * digits.length)];

  // Select one random special character
  let specialChar = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  // Combine them to form a suffix
  let suffix = digit1 + digit2 + specialChar;

  //get first or last name
  name = name.split(' ')[Math.floor(Math.random() * 2)]
  //title it
  name = name.charAt(0).toUpperCase() + name.slice(1)

  // Add the suffix to the name
  const pass = name + suffix

  return pass
  }
