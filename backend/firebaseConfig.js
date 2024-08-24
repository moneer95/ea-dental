
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('/Users/monirskaik/Desktop/ea-dental-36bd1-firebase-adminsdk-janpv-cc74a5db82.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();



async function updateStocTicketValue(collectionName, docID, shoppingOptionIdx, choiceId) {

    const itemRef = db.collection(collectionName).doc(docID)
    // get choices arr value
    const item = await itemRef.get();
    // console.log(item.data())
    const choices = item.data().shoppingOptions[shoppingOptionIdx].choices

      updatedStock = [...choices]
      updatedStock[0][choiceId].inStock -= 1

    try {
      const res = await itemRef.update({
        choices: updatedStock
      });
      
      console.log('Document successfully updated!', res);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }
  


  async function updateStockValue(id, quantity, choiceId) {
    quantity = quantity || 1

    const itemRef = db.collection('products').doc(id)

      // get choices arr value
  
      const item = await itemRef.get();
      const choices = item.data().choices

      let updatedStock = [...choices]
      updatedStock[0][choiceId].inStock -= quantity
      
      let weight = updatedStock[0][choiceId].weight * 1000 //product weight in grams

    try {
      const res = await itemRef.update({
        choices: updatedStock
      });
      
      console.log('Document successfully updated!', res);
      return weight;

    } catch (error) {
      console.error('Error updating document:', error);
    }
  }


  async function addBookingTime(collectionName, startDate, choiceId) {
    
    const duration = parseInt(choiceId, 10) + 1;
    const startSelectedDate = startDate;
    const endDate = startSelectedDate + ( duration * 60 * 60 * 1000 ) - ( 60 * 60 ) // add the duration in milleseconds the minutes the additional three seconds;

    const data = {
      startDate: startDate,
      endDate: endDate 
    };
    
    // Add a new document in collection "cities" with ID 'LA'
    const res = await db.collection(collectionName).add(data);
    console.log('Added document with ID: ', res.id);

  }
  



  module.exports = {
    updateStockValue,
    addBookingTime,
    updateStocTicketValue
  };
// module.exports = updateStocTicketValue
  
  