
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('/Users/apple/Desktop/ea-dental-36bd1-firebase-adminsdk-janpv-8ab0822521-1.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();



async function updateStockValue(id, quantity, choiceId) {
    quantity = quantity || 1

    const itemRef = db.collection('products').doc(id)

      // get choices arr value
  
      const item = await itemRef.get();
      const choices = item.data().choices

      updatedStock = [...choices]
      updatedStock[0][choiceId].inStock -= quantity

    try {
      const res = await itemRef.update({
        choices: updatedStock
      });
      
      console.log('Document successfully updated!', res);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }
  
  updateStockValue('78', 29, 1)

module.exports = updateStockValue
  
  