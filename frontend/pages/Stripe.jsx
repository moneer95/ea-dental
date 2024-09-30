import React, { useCallback, useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import { EmbeddedCheckoutProvider, EmbeddedCheckout } from '@stripe/react-stripe-js';
import { Navigate } from "react-router-dom";
import CartContext from '../contexts/cartContext';

const YOUR_DOMAIN = 'https://v1.ea-dental.com/'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test secret API key.
const stripePromise = loadStripe("pk_test_51PVRD2K1xhAcvKUPeT1r8QlJpG8hrUXsClTWtFoymbO8ih5AVaZUbO0Vk8hZMeNjJc8Z4D37cD8JcNC3ol6tB2BE00iVv3cBYB");

export const CheckoutForm = () => {

  const { cartItems } = React.useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [clientSecret, setClientSecret] = useState(null);
  
  

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch(`${YOUR_DOMAIN}/create-checkout-session`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        choices: cartItems.map(item => item.choices[0][item.choiceId[0]]),
        choices1: cartItems.map(item => item.choices[1] ? item.choices[1][item.choiceId[1]] : null),
        cartItems
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
        setLoading(false);  // Cart items and client secret have been loaded
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error);
        setLoading(false);  // Set loading to false even if there’s an error
      })
  }, [cartItems]);

  
  // useEffect to ensure cart items are loaded before proceeding with checkout
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      fetchClientSecret();
    } else {
      setLoading(false);  // No cart items found
    }
  }, [cartItems, fetchClientSecret]);

    // Conditional rendering based on loading state
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (!clientSecret) {
      return <div>Loading Data...</div>;
    }
  
    const options = {
      clientSecret,
    };
  

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}

export const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');



  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`${YOUR_DOMAIN}/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return (
      <Navigate to="/checkout" />
    )
  }

  if (status === 'complete') {
    return (
      <section className="success-page" id="success">
        <h2>
          Payment Successful!
        </h2>
        <h3>
          Thank you for your order! We are processing your request and will reach out soon with further details (for products, and tickets) .
        </h3>
        <div>
          <h3>
            for online courses students, you can login into your account on our moodle learning platform.
          </h3>
          <button className="moodle-login" onClick={() => window.location.href = 'http://54.147.16.59/moodle/my/'}>
            login
          </button>
        </div>
        <h3>
          If you have any questions, please email <a href="mailto:info@ea-dental.com">info@ea-dental.com</a>.
        </h3>
      </section>
    )
  }

  return null;
}