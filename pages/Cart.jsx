import React from 'react';
import CartContext from '../contexts/cartContext';

function Cart() {
  const { cartItems, setCartItems } = React.useContext(CartContext);

  return (
    <div className='cart-container'>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <div key={index} className='cart-item'>
            <h2 className='cart-item-title'>{item.optionName}</h2>
            <p className='cart-item-catego'>Category: {item.collectionName}</p>
            <h3 className='mo'>momomomoomomo</h3>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}


export default Cart;
