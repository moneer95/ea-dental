// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PVRD2K1xhAcvKUPUmROPyTxMKMf6wvbNvJzbI3V2Hb28MEjbyW54sAifxvep58oCQXpeBuYAmQu118P2I1vnBgW00H1HmD2KL');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();


let x = 1

app.use(cors());
app.use(express.json()); // Add this line to parse JSON body
app.use(bodyParser.json()); // Middleware to parse JSON bodies



const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const data = req.body; // This will contain the array of objects
  console.log(data);
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000, // Amount in the smallest currency unit (e.g., cents for USD)
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'ore',
          },
          unit_amount: 105000, // Amount in the smallest currency unit (e.g., cents for USD)
        },
        quantity: 10,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({clientSecret: session.client_secret});
});

app.get('/session-status', async (req, res) => {
  console.log(x++)
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log(session.status)
  
  if (session.payment_status === 'paid') {
    // Execute the curl command
    const curlCommand = 'curl -g "http://127.0.0.1/webservice/rest/server.php?wstoken=60f806f2ae1b715a7900367b9d3ecbce&wsfunction=core_user_create_users&moodlewsrestformat=json&users[0][username]=mnyrjjj.doe&users[0][firstname]=hhhhhhhh&users[0][lastname]=Doe&users[0][email]=ugftttt.jjbj@example.com&users[0][password]=Password123!!"';

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