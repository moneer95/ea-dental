// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SK);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const { updateStockValue, updateStocTicketValue, addBookingTime, getProductPrice, getCourseTicketPrice } = require('./firebaseConfig');
const { enrollUser, createOrder } = require('./interactions')
const  getShippingPrice = require('./shippingPricing')
const { transporter } = require('./utils')

    
const { createPurchaseOrder, createCourseOrder, createTicketOrder, createBooking } = require('./interactions-frappe')

const app = express();


app.use(cors());
app.use(express.json()); // Add this line to parse JSON body
app.use(bodyParser.json()); // Middleware to parse JSON bodies



const YOUR_DOMAIN = 'https://v1.ea-dental.com';

let products = []
let tickets = []
let courses = []
let bookings = []
let weight = 0

app.post(`/create-checkout-session`, async (req, res) => {
  const {choices, choices1, cartItems} = req.body; // This will contain the array of objects

  console.log(choices)
  console.log(choices1)
  console.log(cartItems)

  try {
    const products = [];
    const tickets = [];
    const courses = [];
    const bookings = [];
    let weight = 0;

    // Get prices for all cart items
    const prices = await Promise.all(cartItems.map(async (item, idx) => {
      let price = 0;

      if (item.quantity) {
        products.push({ 'id': item.id, 'quantity': item.quantity, 'choiceId': item.choiceId[0], 'optionName': item.optionName });
        weight += (choices[idx].weight * 1000) * item.quantity; // converted to grams 
        price = await getProductPrice(item.id, item.choiceId[0]);
      }

      if (choices[idx].inStock && !item.quantity) {
        tickets.push({ 'ticketName': item.optionName, 'choiceId': item.choiceId[0], 'collectionName': item.category, 'docID': item.docID, 'shoppingOptionIdx': item.shoppingOption, 'choiceName': choices[idx].name + (choices1[idx] ? choices1[idx].name : ""), 'courseName': item.optionName });
        price = await getCourseTicketPrice(item.category, item.docID, item.shoppingOption, item.choiceId[0]);
      }

      if (!choices[idx].inStock && !item.dateTime) {
        courses.push({ courseName: item.optionName, choiceName: choices[idx].name + (choices1[idx] ? choices1[idx].name : "") });
        price = await getCourseTicketPrice(item.category, item.docID, item.shoppingOption, item.choiceId[0]);
      }

      if (item.dateTime && item.choiceId[0]) {
        bookings.push({ 'collectionName': item.collectionName, 'optionName': item.optionName, 'dateTime': item.dateTime, 'choiceId': item.choiceId[0] });
        price = choices[idx].price;
      }

      return price;
    }));

    // Create line items for Stripe
    const line_items = cartItems.map((item, idx) => ({
      price_data: {
        currency: 'GBP',
        product_data: {
          name: item.optionName + " " + courseOrTicketChoice, //add option name to the displayed name in checkout
        },
        unit_amount: prices[idx] * 100, // Amount in the smallest currency unit (e.g., pence for GBP)
      },
      quantity: item?.quantity || 1,
    }));

    // Create Stripe session
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items,
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['GB'],
      },
      phone_number_collection: {
        enabled: true,
      },
      ...(weight && {
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: getShippingPrice(weight)[0], currency: 'GBP' },
              display_name: 'Royal Mail 1st Class',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 1 },
                maximum: { unit: 'business_day', value: 1 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: getShippingPrice(weight)[1], currency: 'GBP' },
              display_name: 'Royal Mail 2nd Class',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 1 },
                maximum: { unit: 'business_day', value: 2 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: getShippingPrice(weight)[2], currency: 'GBP' },
              display_name: 'Royal Mail Special Delivery Guaranteed by 1pm',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 1 },
                maximum: { unit: 'business_day', value: 1 },
              },
            },
          },
        ]
      }),
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    res.send({ clientSecret: session.client_secret });
  } catch (e) {
    console.error("Something went wrong", e);
  }


}

);












app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log(session.status)

  
  if (session.payment_status === 'paid') {    

    //use courses array
    if(courses.length){
      console.log(1111111)

      createCourseOrder(session.customer_details.email, session.customer_details.name, session.customer_details.phone, (session.customer_details.address.country + session.customer_details.address.city + session.customer_details.address.line1), courses)
      
      try{
        enrollUser(session.customer_details.email, session.customer_details.name.split(' ')[0], session.customer_details.name.split(' ')[1] || '-', courses)
      }
      catch(e){
        sendEnrollIsuueEmail(session.customer_details.email, courses)
      }
    
    }
    courses = []
      
    if(products.length){
      console.log(222222)
      //create the order on frappe
      createPurchaseOrder(session.customer_details.email, session.customer_details.name, session.customer_details.phone, (session.customer_details.address.country + session.customer_details.address.city + session.customer_details.address.line1), session.total_details.amount_shipping, products)
      
      //use products array
      for(i = 0; i < products.length; i++){
        updateStockValue(products[i].id, products[i].quantity, products[i].choiceId) //the func return weight of the product
      }

      createOrder(session.customer_details.email, session.customer_details.name, session.customer_details.phone, session.customer_details.address.country, session.customer_details.address.city, session.customer_details.address.line1, session.customer_details.address.line2, session.customer_details.address.postal_code, weight)
      
    }
    products = [] // delete the array after updating stock
    weight = 0

    if(tickets.length){
      console.log(333333)
      createTicketOrder(session.customer_details.email, session.customer_details.name, session.customer_details.phone, tickets)
      
      // enroll in the course on moodle
      try{
        enrollUser(session.customer_details.email, session.customer_details.name.split(' ')[0], session.customer_details.name.split(' ')[1] || '-', tickets)
      }
      catch(e){
        sendEnrollIsuueEmail(session.customer_details.email, tickets)
      }
      
      //use tickets array
      for(i = 0; i < tickets.length; i++){
        let ticket = tickets[i]
        updateStocTicketValue( ticket.collectionName, ticket.docID, ticket.shoppingOptionIdx, ticket.choiceId )
      }
    }
    tickets = []


    if(bookings.length){
      console.log(444444)
      createBooking(session.customer_details.email, session.customer_details.name, session.customer_details.phone, bookings)

      for(i = 0; i < bookings.length; i++){
        let booking = bookings[i]
        addBookingTime(booking.collectionName, booking.dateTime, booking.choiceId)
        .then(() => console.log('Booking time added'))
        .catch(err => console.error('Error adding booking time:', err));  
      }
    }
    bookings = []

    // console.log(session.customer_details)


  }

  res.send({
    status: session.status,
    customer_email: session.customer_details.email,
    payment_status: session.payment_status
  });
});




function sendEnrollIsuueEmail(userEmail, array){
  let mailOptions = {
      from: '"Sender Name" <mnyrskyk@gmail>',  // Sender address
      to: 'info@ea-dental.com',                      // List of receivers
      subject: `Student Enrollment Issue`,                               // Subject line
      text: `Stuednt With this Email ${userEmail}, hasn't successfully enrolled in his course ${JSON.parse(array)}` // Plain text body
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
    });
    
}


app.listen(4242, () => console.log('Running on port 4242'));

