import React from 'react';
import CartContext from '../contexts/cartContext';

function Cart() {
  const { cartItems, setCartItems} = React.useContext(CartContext);

  return (
    <div>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index}>
            <h2>{item.optionName}</h2>
            <p>Collection: {item.collectionName}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
