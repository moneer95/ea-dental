import React from 'react';
import CartContext from '../contexts/cartContext';

import { FaTrash } from 'react-icons/fa'; // Font Awesome
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

  function deleteItem(iIndex){
    // console.log(iIndex)
    setCartItems(prevItems => {
      let updatedItems = [...prevItems]
      updatedItems.splice(iIndex, 1)

      return updatedItems
    })
  }

  return (
    <div className='cart-container'>
      {cartItems.length ? (
        cartItems.map((item, iIndex) => {

          const quantity = item?.quantity || 1
          const price = item.choices[0][cartItems[iIndex].choiceId[0]].price * quantity

          return <div key={iIndex} className='cart-item'>
            <h2 className='cart-item-title'>{item.optionName}</h2>
            <p className='cart-item-catego'>Category: <span className='capital'>{item.category}</span> </p>
            <button onClick={() => deleteItem(iIndex)} className='cart-delete-button fs-7'> <i><FaTrash/></i> </button>


              { (Object.keys(item.choices[0]).length > 1 && (item.quantity == undefined)) &&
              item.choices.map( (choice, cIndex) => {
              return <select value={cartItems[iIndex].choiceId[cIndex]} onChange={(event) => handleChoiceChange(event, iIndex, cIndex)} className={`fs-8 cart-choices${cIndex}`}>
                  {Object.entries(choice).map( (option, oIndex)  => {
                  
                  //check if the item has stock prob and check
                  let isEventFull = item.choices[0][oIndex]?.inStock > 0 ? false : true //check if the event is full
                  
                  if(item.choices[0][oIndex]?.inStock === undefined){
                    isEventFull = false
                  }

                  return <option
                          key={oIndex}
                          value={oIndex}
                          disabled={isEventFull}
                         >
                          { (isEventFull ?<> <strong> ** Event Full ** </strong> {option[1].name} </> :  option[1].name) } 
                        </option>
               }               
               )}
              </select>

              } )

              }
              {/* {console.log(item)} */}
            <h4 className='cart-item-price'> Quantity: {quantity} <span className='fw-5'> | </span> Price: £{Number.isInteger(price) ? price : price.toFixed(2)}</h4>
          </div>
        })
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
