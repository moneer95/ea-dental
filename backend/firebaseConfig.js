
const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { transporter } = require('./utils')

const serviceAccount = require('./ea-dental-36bd1-firebase-adminsdk-janpv-cc74a5db82.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();



async function updateStocTicketValue(collectionName, docID, shoppingOptionIdx, choiceId) {

    const itemRef = db.collection(collectionName).doc(docID)
    // get choices arr value
    const item = await itemRef.get();
    // console.log(item.data())
    const shoppingOptions = item.data().shoppingOptions

      shoppingOptions[shoppingOptionIdx].choices[0][choiceId].inStock -= 1


    try {
      const res = await itemRef.update({
        shoppingOptions: shoppingOptions
      });
      
      console.log('Ticket Stock successfully updated!', res);
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }
  


  async function updateStockValue(id, quantity, choiceId) {
    quantity = quantity || 1

    if( id == '100' ){
      await updateKitStockValue(id);
      return;
    }

    const itemRef = db.collection('products').doc(id)

      // get choices arr value
      const item = await itemRef.get();
      const choices = item.data().choices

      let updatedStock = [...choices]
      updatedStock[0][choiceId].inStock -= quantity

      if(updatedStock[0][choiceId].inStock < 5){
        sendStockEmail(item.name, updatedStock[0][choiceId].name, updatedStock[0][choiceId].inStock)
      }
      
      let weight = updatedStock[0][choiceId].weight * 1000 //product weight in grams
      console.log(weight)
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



  async function updateKitStockValue(id) {

    const itemRef = db.collection('products').doc(id)
    
    // get choices arr value
    const kit = await itemRef.get();
    const kitIDs = kit.data().ids
    
    
    for(i = 0; i < kitIDs.length; i++){
      const id = (kitIDs[i].id).toString()
      const choiceId = kitIDs[i].choiceId
      const quantity = kitIDs[i].quantity

      
      const itemRef = db.collection('products').doc(id)
      console.log(itemRef)
      
      // get choices arr value
      const item = await itemRef.get();
      const choices = item.data().choices

      let updatedStock = [...choices]
      updatedStock[0][choiceId].inStock -= quantity
      
      // let weight = updatedStock[0][choiceId].weight * 1000 

      try {
          const res = await itemRef.update({
          choices: updatedStock
        });
        
        console.log('Document successfully updated!', res);
        // return weight;

      } catch (error) {
        console.error('Error updating document:', error);
      }
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
    
    
    const res = await db.collection(collectionName).add(data);
    console.log('Added document with ID: ', res.id);

  }

  async function getProductPrice(docID, choiceId) {

    docID = docID.toString()

    const itemRef = db.collection("products").doc(docID)
    // get choices arr value
    const item = await itemRef.get();
    
    const price = await item.data().choices[0][choiceId].price
    
    return price
  }  


  async function getCourseTicketPrice(collectionName, docID, shoppingOptionIdx, choiceId) {

    const itemRef = db.collection(collectionName).doc(docID)
    // get choices arr value
    const item = await itemRef.get();
    // console.log(item.data())
    const price = item.data().shoppingOptions[shoppingOptionIdx].choices[0][choiceId].price

    return price
  }



  async function saveClientArrays( session_id, products, tickets, courses, bookings, weight ) {
    
    const data = {
      products,
      tickets, 
      courses, 
      bookings, 
      weight
    }

    const res = await db.collection('clientsData').doc(session_id).set(data, { merge: true });

    console.log('Added document with ID: ', res);

  }



  async function getClientArrays(session_id) {

    const itemRef = db.collection("clientsData").doc(session_id)
    // get choices arr value
    const item = await itemRef.get();
    
    const {
      products,
      tickets, 
      courses, 
      bookings, 
      weight
    } = item.data()
    
    return { products, tickets, courses, bookings, weight };
  }  


  async function deleteSession(session_id) {
    
    const res = await db.collection('clientsData').doc(session_id).delete();

  }



  function sendStockEmail(prodName, prodChoice, stockValue){
    let mailOptions = {
        from: '"Sender Name" <mnyrskyk@gmail>',  // Sender address
        to: 'info@ea-dental.com',                      // List of receivers
        subject: `Low Stock Value !!`,                               // Subject line
        text: `Low Stock Value For ${prodName + ' ' + prodChoice}, the current value is ${stockValue}` // Plain text body
      };
      
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
      });
      
}



  module.exports = {
    updateStockValue,
    addBookingTime,
    updateStocTicketValue,
    getProductPrice,
    getCourseTicketPrice,
    saveClientArrays,
    getClientArrays,
    deleteSession
  };
// module.exports = updateStocTicketValue
  

