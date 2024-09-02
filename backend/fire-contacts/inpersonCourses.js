const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('/Users/monirskaik/Desktop/ea-dental-36bd1-firebase-adminsdk-janpv-cc74a5db82.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();


async function threeInOneMock() {

    const itemRef = db.collection('mocks').doc('ore3')

  
      const item = await itemRef.get();
    
      shoppingOptions = [
                {
                    choices: [{
                        "0": 
                            {
                                "name": "28 August 2024 | 8:00am - 5:30pm",
                                "price": 564 ,
                                "inStock": 5                   
                            },
                        "1": 
                            {
                                "name": "29 August 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "2": 
                            {
                                "name": "30 August 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "3": 
                            {
                                "name": "2 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "4": 
                            {
                                "name": "3 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "5": 
                            {
                                "name": "4 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "6": 
                            {
                                "name": "5 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "7": 
                            {
                                "name": "6 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "8": 
                            {
                                "name": "9 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "9": 
                            {
                                "name": "28 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "10": 
                            {
                                "name": "29 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "11": 
                            {
                                "name": "30 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "12": 
                            {
                                "name": "31 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            }
                }],
                descrip: "<div><ul><li>One full DTP mock case.</li><li>All sections of DTP covered including:(History taking/ Investigations/ X-ray report/ Presentation)</li><li>All medical emergency scenarios and BLS – equipment – Medical Emergency scenario medications.<ul><li>&nbsp;Basic life support</li><li>All medical emergencies</li><li>Asthma</li><li>Anaphylaxis</li><li>Adrenocortical insufficiency</li><li>Angina</li><li>Myocardial infarction</li><li>Epilepsy</li><li>Stroke</li><li>Choking</li><li>Hypoglycemia</li><li>Vasovagal syncope</li><li>Bleeding</li><li>Needlestick injury</li></ul></li><li>Training on all available equipment:<ul><li>BLS</li><li>Oxygen cylinder</li><li>Face mask</li><li>Spacer</li><li>Oropharyngeal airway</li><li>Intramuscular injection</li><li>Epipen/Anapen</li><li>All basic medication</li></ul></li><li>25 OSCE stations (actor, skilled and written stations).</li><li>All skilled OSCE’s included.</li></ul><p><strong>From: 1:30 pm to 6:00 pm</strong></p><p><strong>An Intense revision covering Treatment planning of 20 Important DTP cases – Medical Emergency scenarios and OSCE’s</strong></p><p>We accept a maximum of five students per session to ensure maximum benefit</p><p><strong>Lunch is provided</strong></p><p><strong>Course time:</strong> 8:30 am – 6:00 pm</p><p>*Courses are non-refundable</p><h4><span><b>How to Book:</b></span></h4><p><strong>You can easily and conveniently book online the course and date you would like to attend below.</strong></p><p><strong>If you prefer to speak to someone before you make your booking, please contact us&nbsp;</strong><strong><a href=\"https://ea-dental.com/contact-us/\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.&nbsp;</strong></p><p><strong>All our courses are very popular so please make your booking well in advance to avoid disappointment.&nbsp;</strong></p><h4><span><strong>Course Location: <a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=23-25-bridge-street\">23-25 Bridge Street</a>,&nbsp;<a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=pinner-ha5-3hr\">Pinner HA5 3HR</a>,&nbsp;<a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=westbury-house\">Westbury House</a></strong></span></h4></div>",
                name: "ORE2 3-in-1 Mock Sessions",
                collectionName: "mocks",
                docID: "ore3"
            }
        ]
    
    
    try {
      const res = await itemRef.update({
        shoppingOptions: shoppingOptions
      });
      console.log('Document successfully updated!', res);

    } catch (error) {
      console.error('Error updating document:', error);
    }
  }


  async function revisionMockSession() {

    const itemRef = db.collection('mocks').doc('ore3')

      // get choices arr value
  
      const item = await itemRef.get();
    //   const choices = item.data().shoppingOptions[0].choices
    
      shoppingOptions = [
                {
                    choices: [{
                        "0": 
                            {
                                "name": "28 August 2024 | 8:00am - 5:30pm | Dr. Thomas Anderson",
                                "price": 564 ,
                                "inStock": 5                   
                            },
                        "1": 
                            {
                                "name": "29 August 2024 | 8:00am - 5:30pm | Dr. Laura Martinez",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "2": 
                            {
                                "name": "30 August 2024 | 8:00am - 5:30pm | Dr. David Lee",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "3": 
                            {
                                "name": "2 September 2024 | 8:00am - 5:30pm | Dr. Jennifer Taylor",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "4": 
                            {
                                "name": "3 September 2024 | 8:00am - 5:30pm | Dr. Christopher Moore",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "5": 
                            {
                                "name": "4 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "6": 
                            {
                                "name": "5 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "7": 
                            {
                                "name": "6 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "8": 
                            {
                                "name": "9 September 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "9": 
                            {
                                "name": "28 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "10": 
                            {
                                "name": "29 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "11": 
                            {
                                "name": "30 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            },
                        "12": 
                            {
                                "name": "31 October 2024 | 8:00am - 5:30pm",
                                "price": 564,
                                "inStock": 5                   
                            }
                }],
                descrip: "<div><ul><li>One full DTP mock case.</li><li>All sections of DTP covered including:(History taking/ Investigations/ X-ray report/ Presentation)</li><li>All medical emergency scenarios and BLS – equipment – Medical Emergency scenario medications.<ul><li>&nbsp;Basic life support</li><li>All medical emergencies</li><li>Asthma</li><li>Anaphylaxis</li><li>Adrenocortical insufficiency</li><li>Angina</li><li>Myocardial infarction</li><li>Epilepsy</li><li>Stroke</li><li>Choking</li><li>Hypoglycemia</li><li>Vasovagal syncope</li><li>Bleeding</li><li>Needlestick injury</li></ul></li><li>Training on all available equipment:<ul><li>BLS</li><li>Oxygen cylinder</li><li>Face mask</li><li>Spacer</li><li>Oropharyngeal airway</li><li>Intramuscular injection</li><li>Epipen/Anapen</li><li>All basic medication</li></ul></li><li>25 OSCE stations (actor, skilled and written stations).</li><li>All skilled OSCE’s included.</li></ul><p><strong>From: 1:30 pm to 6:00 pm</strong></p><p><strong>An Intense revision covering Treatment planning of 20 Important DTP cases – Medical Emergency scenarios and OSCE’s</strong></p><p>We accept a maximum of five students per session to ensure maximum benefit</p><p><strong>Lunch is provided</strong></p><p><strong>Course time:</strong> 8:30 am – 6:00 pm</p><p>*Courses are non-refundable</p><h4><span><b>How to Book:</b></span></h4><p><strong>You can easily and conveniently book online the course and date you would like to attend below.</strong></p><p><strong>If you prefer to speak to someone before you make your booking, please contact us&nbsp;</strong><strong><a href=\"https://ea-dental.com/contact-us/\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.&nbsp;</strong></p><p><strong>All our courses are very popular so please make your booking well in advance to avoid disappointment.&nbsp;</strong></p><h4><span><strong>Course Location: <a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=23-25-bridge-street\">23-25 Bridge Street</a>,&nbsp;<a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=pinner-ha5-3hr\">Pinner HA5 3HR</a>,&nbsp;<a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=westbury-house\">Westbury House</a></strong></span></h4></div>",
                name: "ORE2 Mock Sessions"
            }
        ]
    
    
    try {
      const res = await itemRef.update({
        shoppingOptions: shoppingOptions
      });
      console.log('Document successfully updated!', res);

    } catch (error) {
      console.error('Error updating document:', error);
    }
  }




  

  threeInOneMock()