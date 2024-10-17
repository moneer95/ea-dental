// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SK);
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const { updateStockValue, updateStocTicketValue, addBookingTime, getProductPrice, getCourseTicketPrice, saveClientArrays, getClientArrays, deleteSession } = require('./firebaseConfig');
const { enrollUser, createOrder } = require('./interactions')
const  getShippingPrice = require('./shippingPricing')
const { transporter } = require('./utils')
const { getDicountFromCompination } = require('./discounts')


    
const { createPurchaseOrder, createCourseOrder, createTicketOrder, createBooking } = require('./interactions-frappe')

const app = express();


app.use(cors());
app.use(express.json()); // Add this line to parse JSON body
app.use(bodyParser.json()); // Middleware to parse JSON bodies


const YOUR_DOMAIN = 'https://ea-dental.com';



app.post(`/create-checkout-session`, async (req, res) => {

  let products = []
  let tickets = []
  let courses = []
  let bookings = []
  let weight = 0

  const {choices, choices1, cartItems} = req.body; // This will contain the array of objects

  console.log(choices)
  console.log(choices1)
  console.log(cartItems)

  try{
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: await Promise.all( 
          
          cartItems.map( async (item, idx) => {

          let price = 0
  
          // add product to products arr
          if(item.quantity){
            products.push({'id': item.id, 'quantity': item.quantity, 'choiceId': item.choiceId[0], 'optionName': item.optionName});
            weight += (choices[idx].weight * 1000) * item.quantity // converted to grams 
            price = await getProductPrice( item.id, item.choiceId[0])
          }
                  
          // add option name for courses and tickets
          const courseOrTicketChoice = choices[idx].name != "default" ? choices[idx].name : ""
          const courseSecondChoice = choices1[idx] ? choices1[idx].name : ""
  
          // add ticket to tickets arr
          if(choices[idx].inStock && !item.quantity){
            console.log(choices[idx].inStock && !item.quantity)
            tickets.push({'ticketName': item.optionName, 'choiceId': item.choiceId[0], 'collectionName': item.category, 'docID': item.docID, 'shoppingOptionIdx': item.shoppingOption, 'orderDate': choices[idx].date || "", 'choiceName': (courseOrTicketChoice + courseSecondChoice), 'courseName': item.optionName}) //category the same as collection name 
            price = await getCourseTicketPrice(item.category, item.docID, item.shoppingOption, item.choiceId[0])
          }
  
          
          // add online courses to courses arr
          if(!choices[idx].inStock && !item.dateTime){
            courses.push({courseName: item.optionName, choiceName: (courseOrTicketChoice + courseSecondChoice) })
            
            price = await getCourseTicketPrice(item.category, item.docID, item.shoppingOption, item.choiceId[0])
          }
          
          // Call addBookingTime here
          if (item.dateTime && item.choiceId[0]) {
            bookings.push({'collectionName': item.collectionName, 'optionName': item.optionName, 'dateTime': item.dateTime, 'choiceId': item.choiceId[0] })
            price = choices[idx].price
          }
  
          return {
            price_data: {
              currency: 'GBP',
              product_data: {
                name: item.optionName + " " + courseOrTicketChoice, //add option name to the displayed name in checkout
              },
              unit_amount: price * 100, // Amount in the smallest currency unit (e.g., cents for USD)
            },
            quantity: item?.quantity || 1,
          }
      })
      ),
      mode: 'payment',
      shipping_address_collection: {
        allowed_countries: ['GB'], // Collect shipping address for specified countries
      },
      allow_promotion_codes: true,
      phone_number_collection: {
        enabled: true,  // <--- this enables phone number collection
      }, 
      discounts: [{
        discount_data: {
          fixed_amount: {
            amount: getDicountFromCompination(tickets),
            currency: 'GBP',
          },
        },
      }],   
      ...(weight && {
        shipping_options: [
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: 0, currency: 'GBP' },
              display_name: 'Collect From Venue',
              delivery_estimate: {
                minimum: { unit: 'business_day', value: 1 },
                maximum: { unit: 'business_day', value: 1 },
              },
            },
          },
          {
            shipping_rate_data: {
              type: 'fixed_amount',
              fixed_amount: { amount: getShippingPrice(weight)[0], currency: 'GBP' },
              display_name: 'Royal Mail 1nd Class',
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
              display_name: 'Royal Mail OLP	Royal Mail Special Delivery Guaranteed by 1pm - £750 Compensation',
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
      // console.log(JSON.stringify({products}))
      res.send({
        clientSecret: session.client_secret
      });

      saveClientArrays(        
        session.id,
        products,
        tickets,
        courses,
        bookings,
        weight
      )
  }
  catch(e){
    console.log("somthing went error", console.log(e));
  }

}

);












app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
  console.log(session.status)

  const { products, tickets, courses, bookings, weight } = await getClientArrays(session.id)


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
      
    if(products.length){
      console.log(222222)
      //create the order on frappe
      createPurchaseOrder(session.customer_details.email, session.customer_details.name, session.customer_details.phone, (session.customer_details.address.country + session.customer_details.address.city + session.customer_details.address.line1), session.total_details.amount_shipping, products)
      .then(res => (createOrder(session.customer_details.email, session.customer_details.name, session.customer_details.phone, session.customer_details.address.country, session.customer_details.address.city, session.customer_details.address.line1, session.customer_details.address.line2, session.customer_details.address.postal_code, weight, res.data.name))
    )
      
      //use products array
      for(i = 0; i < products.length; i++){
        updateStockValue(products[i].id, products[i].quantity, products[i].choiceId) //the func return weight of the product
      }
      
    }


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

    // console.log(session.customer_details)


  }

  deleteSession(session.id) //delete the session data from firebase so no one can use it


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

