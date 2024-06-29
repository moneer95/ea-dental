// This is your test secret API key.
const stripe = require('stripe')('sk_test_51PVRD2K1xhAcvKUPUmROPyTxMKMf6wvbNvJzbI3V2Hb28MEjbyW54sAifxvep58oCQXpeBuYAmQu118P2I1vnBgW00H1HmD2KL');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // Add this line to parse JSON body

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1PX0nDK1xhAcvKUP6Ic3enTP',
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });

  res.send({clientSecret: session.client_secret});
});

app.get('/session-status', async (req, res) => {
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

app.listen(4242, () => console.log('Running on port 4242'));