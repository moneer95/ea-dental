import React from 'react';
import CartContext from '../contexts/cartContext';

import { FaTrash } from 'react-icons/fa'; // Font Awesome
import { MdDelete } from 'react-icons/md'; // Material Design
import { useNavigate } from 'react-router-dom';



function Cart() {
  const { cartItems, setCartItems } = React.useContext(CartContext);
  const navigate = useNavigate();


  function handleChoiceChange(event, iIndex, cIndex){
    setCartItems(prevItems => {
      let updatedItems =  [...prevItems];

      let updatedChoiceId = [...updatedItems[iIndex].choiceId];
      updatedChoiceId[cIndex] = event.target.value;
      
      updatedItems[iIndex] = { ...updatedItems[iIndex], choiceId: updatedChoiceId };
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

              { Object.keys(item.choices[0]).length > 1 &&
              item.choices.map( (choice, cIndex) => {
              return <select value={cartItems[iIndex].choiceId[cIndex]} onChange={(event) => handleChoiceChange(event, iIndex, cIndex)} className={`fs-8 cart-choices${cIndex}`}>
                  {Object.entries(choice).map( (option, oIndex)  => {
                return <option
                        key={oIndex}
                        value={oIndex}
                       >
                        {option[1].name}
                       </option>
               }               
               )}
              </select>

              } )

              }
            <h4 className='cart-item-price'>price: {item.choices[0][cartItems[iIndex].choiceId[0]].price}£</h4>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      {
        cartItems.length
        ?<button className='checkout-button fs-7' onClick={() => navigate('/checkout')}>Check Out</button>
        :null
      } 

    </div>
  );
}


export default Cart;
