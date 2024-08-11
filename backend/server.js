// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SK);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const updateStockValue = require('./firebaseConfig')
const enrollUser = require('./interactions')
const addBookingTime = require('./firebaseConfig')

const app = express();



app.use(cors());
app.use(express.json()); // Add this line to parse JSON body
app.use(bodyParser.json()); // Middleware to parse JSON bodies



const YOUR_DOMAIN = 'http://localhost:5173';

let products = []
let tickets = []
let courses = []

app.post('/create-checkout-session', async (req, res) => {
  const {choices, cartItems} = req.body; // This will contain the array of objects

  console.log(choices)
  console.log(cartItems)

  try{
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: cartItems.map((item, idx) => {
       
        // add product to products arr
        item.quantity ? products.push({'id': item.id, 'quantity': item.quantity, 'choiceId': item.choiceId[0]}) : null
        
        // add ticket to tickets arr
        choices[idx].inStock && !item.quantity ? tickets.push({'ticketName': item.optionName, 'date': item.choiceId[0]}) : null
        
        // add online courses to courses arr
        !choices[idx].inStock ? courses.push({'courseName': item.optionName}) : null
        
        // Call addBookingTime here
        if (item.dateTime && item.choiceId[0]) {
          addBookingTime('MEBookings', item.dateTime, item.choiceId[0])
            .then(() => console.log('Booking time added'))
            .catch(err => console.error('Error adding booking time:', err));
        }       
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
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 500, currency: 'GBP' },
            display_name: 'Standard Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 5 },
              maximum: { unit: 'business_day', value: 7 },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: { amount: 1500, currency: 'GBP' },
            display_name: 'Express Shipping',
            delivery_estimate: {
              minimum: { unit: 'business_day', value: 1 },
              maximum: { unit: 'business_day', value: 2 },
            },
          },
        },
      ],
  
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
      // console.log(JSON.stringify({products}))
      res.send({clientSecret: session.client_secret});
  }
  catch{
    console.log("somthing went error");
  }

}

);

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log(session.status)

  
  if (session.payment_status === 'paid') {

    courses.length ? () => enrollUser(session.customer_details.email, session.customer_details.name.split(' ')[0], session.customer_details.name.split(' ')[1] || '-', courses) : null
    courses = []

    for(i = 0; i < products.length; i++){
      updateStockValue(products[i].id, products[i].quantity, products[i].choiceId)
      console.log('----------------')
    }
    products = [] // delete the array after updating stock

    console.log(session.customer_details)


  }

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
    payment_status: session.payment_status
  });
});


app.listen(4242, () => console.log('Running on port 4242'));

