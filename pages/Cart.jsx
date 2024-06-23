import React from 'react';
import CartContext from '../contexts/cartContext';

import { FaTrash } from 'react-icons/fa'; // Font Awesome
import { MdDelete } from 'react-icons/md'; // Material Design



function Cart() {
  const { cartItems, setCartItems } = React.useContext(CartContext);

  return (
    <div className='cart-container'>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <div key={index} className='cart-item'>
            <h2 className='cart-item-title'>{item.optionName}</h2>
            <p className='cart-item-catego'>Category: {item.collectionName}</p>
            <h3 className='cart-delete-button'><FaTrash/></h3>
            <select className='cart-choices'>
              <option value='12months'>12 months</option>
              <option value='3months'>3 months</option>
            </select>
            <h4 className='cart-item-price'>price: 1250$</h4>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}


export default Cart;
