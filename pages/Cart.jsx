import React from 'react';
import CartContext from '../contexts/cartContext';

import { FaTrash } from 'react-icons/fa'; // Font Awesome
import { MdDelete } from 'react-icons/md'; // Material Design



function Cart() {
  const { cartItems, setCartItems } = React.useContext(CartContext);


  function handleChoiceChange(event, iIndex){
    setCartItems(prevItems => {
      let updatedItems =  [...prevItems];
      updatedItems[iIndex] = { ...updatedItems[iIndex], choiceId: event.target.value };
      return updatedItems
    } )
  }

  return (
    <div className='cart-container'>
      {cartItems.length ? (
        cartItems.map((item, iIndex) => (
          <div key={iIndex} className='cart-item'>
            <h2 className='cart-item-title'>{item.optionName}</h2>
            <p className='cart-item-catego'>Category: {item.collectionName}</p>
            <h3 className='cart-delete-button'><FaTrash/></h3>
              {Object.keys(item.choices).length > 1
               ? <select value={cartItems[iIndex].choiceId} onChange={(event) => handleChoiceChange(event, iIndex)} className='cart-choices'>
                {Object.keys(item.choices).map((choice, cIndex)  => {
                return <option
                        key={Object.keys(item.choices)[cIndex]}
                        value={Object.keys(item.choices)[cIndex]}
                       >
                        {item.choices[choice].name}
                       </option>
               }               
               )}
              </select>

               : null
              }
            <h4 className='cart-item-price'>price: {item.choices[cartItems[iIndex].choiceId].price}</h4>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}


export default Cart;
