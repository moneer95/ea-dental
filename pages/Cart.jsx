import React from 'react';
import CartContext from '../contexts/cartContext';

function Cart() {
  const { cartItems, setCartItems } = React.useContext(CartContext);

  return (
    <div style={styles.cartContainer}>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <div key={index} style={styles.cartItem}>
            <h2 style={styles.itemTitle}>{item.optionName}</h2>
            <p style={styles.itemCollection}>Collection: {item.collectionName}</p>
          </div>
        ))
      ) : (
        <p style={styles.emptyCart}>Your cart is empty.</p>
      )}
    </div>
  );
}

const styles = {
  cartContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
  },
  cartItem: {
    backgroundColor: '#ffffff',
    padding: '15px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #e0e0e0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  itemTitle: {
    color: '#FFA500', // Orange color for titles
    margin: '0 0 10px 0',
  },
  itemCollection: {
    color: '#6A5ACD', // Blue color for collection names
    margin: '0',
  },
  emptyCart: {
    color: '#6A5ACD', // Blue color for the empty cart message
    textAlign: 'center',
    fontSize: '18px',
  },
};

export default Cart;
