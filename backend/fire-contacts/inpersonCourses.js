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








  async function ore2Revisions() {

    const itemRef = db.collection('revisions').doc('ore')

    //   const item = await itemRef.get();
      // console.log(item.data().shoppingOptions[5].choices)

      intro = [
        {
            className: "main-question fs-4",
            introText: "Are you planning to take your ORE / LDS exam in 2024? Has it been a long time since you last did any revision and are you worried about how much you may have forgotten?"

        },
        {
            className: "warning fs-6",
            introText: "Prepare with a full-day sessions, revising medical emergencies, OSCEs, and the latest dental guidelines for your exam."

        }
      ]

      const name = "ORE2 Intensive Training Programs"
    
      shoppingOptions = [
        {
          descrip: '<h4 style="font-size: 18px; line-height: 1.67;"><strong>Aims:</strong><br> To provide training in adult and pediatric basic life support and advice on equipment and drugs.</h4> <p>The training will provide an efficient and safe evaluation of patients presenting at the Dental Practice, with a wide spectrum of patient-related emergencies. The candidate will also refine and demonstrate those skills and elaborate further on how they will be put into practice and used effectively.</p> <p>With the wide range of clinical experience and “hands-on” teaching sessions, the candidates will develop and demonstrate an ability to perform a variety of medical emergency treatments in practice.</p>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>Objectives:</strong></h4> <p>By the end of the training session, the participants should be able to:</p> <ul>     <li>Identify at-risk and seriously ill patients using the ABCDE approach.</li>     <li>Describe how to take a blood glucose measurement from a patient.</li>     <li>Identify the appropriate drugs to use in an emergency.</li>     <li>Complete a progress assessment on the ABCDE approach.</li>     <li>Carry out an initial assessment of an unconscious patient.</li>     <li>Identify the appropriate help required.</li>     <li>Place the patient into the recovery position.</li>     <li>Monitor the patient using the ABCDE approach.</li>     <li>Describe the safe administration of oxygen.</li>     <li>Be aware of the treatment for choking.</li>     <li>Identify the most suitable method of establishing an airway depending on the clinical status of a patient.</li>     <li>Identify when to carry out basic life support.</li>     <li>Explain how to carry out basic life support.</li>     <li>Practice basic life support skills on adults and children.</li>     <li>Safely use an automated external defibrillator (AED).</li>     <li>Develop a standardized approach to managing a sick or critically ill patient.</li>     <li>Develop confidence and competence as a team member in initiating basic life support and the safe use of an AED.</li>     <li>Consolidate all the aspects of the self-instructed learning program.</li>     <li>Enable the safe handover of the patient to the ambulance team.</li> </ul>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>Learning outcomes:</strong></h4> <p>Develop competence in demonstrating resuscitation techniques, handling emergencies, and providing immediate management of anaphylactic reaction, hypoglycemia, upper respiratory obstruction, cardiac arrest, seizures, vasovagal attack, inhalation or ingestion of foreign bodies, and hemorrhage.</p> <p>Be familiar with the principles of first aid and the approach to symptom-based diagnosis.</p> <p>Please note that upon attendance and successful completion of the course, a certificate stating 4 verifiable hours of CPD will be issued to the candidate.</p>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>This one-day course covers:</strong></h4> <ul>     <li>Basic life support</li>     <li>All possible medical emergencies</li>     <li>Asthma</li>     <li>Anaphylaxis</li>     <li>Adrenocortical insufficiency</li>     <li>Angina</li>     <li>Myocardial infarction</li>     <li>Epilepsy</li>     <li>Stroke</li>     <li>Choking</li>     <li>Hypoglycemia</li>     <li>Vasovagal syncope</li>     <li>Bleeding</li>     <li>Needlestick injury</li> </ul> <p>Training on all available equipment:</p> <ul>     <li>BLS</li>     <li>Oxygen cylinder</li>     <li>Face mask</li>     <li>Spacer</li>     <li>Oropharyngeal airway</li>     <li>Intramuscular injection</li>     <li>Epipen/Anapen</li>     <li>All basic medication</li> </ul> <p>Mock Examination:</p> <ul>     <li>Basic Life Support & Medical Examination</li>     <li>One-to-one feedback and evaluation</li>     <li>Study material will be provided at the end of the session</li>     <li>Challenge yourself on timing, efficiency, and accuracy and we will be there to guide you throughout the course</li> </ul> <p><strong>Course timing: 9:00 am – 5:00 pm</strong></p>  <p>Don’t hesitate to join our full-day Medical Emergency course that will answer all your questions.<br> We’ll help you achieve confidence in both the practical and theoretical aspects of Medical Emergencies.</p> ',
          docID: 'oret',
          name: 'ORE2 Medical Emergencies Masterclass',
          choices: [
            {
              '0': { price: 300, name: '2 October | 9:00am - 1:00pm', inStock: 10 },
              '1': { price: 300, name: '16 October | 9:00am - 1:00pm', inStock: 10 },
              '2': { price: 300, name: '20 November | 9:00am - 1:00pm', inStock: 10 },
              '3': { price: 300, name: '4 December | 9:00am - 1:00pm', inStock: 10 },
              '4': { price: 300, name: '18 December | 9:00am - 1:00pm', inStock: 10 },
              '5': { price: 300, name: '27 December | 9:00am - 1:00pm', inStock: 10 }
            }
          ],
          collectionName: 'ore'
        },
        {
          descrip: '<p><strong><u>Join our two full day OSCE’s course and benefit from an in-depth explanation, one to one evaluation, and extended online resources to follow up your future progress until your exam.</u></strong></p>  <p><strong><u>ORE 2 – Objective Structured Clinical Reasoning</u></strong></p>  <p><strong>This full one day course includes:</strong></p> <ul>     <li>Written OSCE’s</li>     <li>Skilled OSCE’s</li>     <li>Actor OSCE’s</li> </ul>  <p>In a simulated exam condition, challenge yourself by completing:</p> <p><strong>70 OSCE’s</strong></p>  <p>Study material will be provided on completion.</p> <p>Challenge yourself on <strong>timing, efficiency, and accuracy</strong> and we’ll be there to guide you all the way.</p>  <p><strong>Course times: 9:00 am – 5:00 pm</strong></p>  <p><strong>Aims:</strong></p> <ol>     <li>Prepare the candidate for the OSCE’s component of the ORE2 examination.</li>     <li>Familiarize participants with the OSCE set-up, process, and content.</li>     <li>Help participants identify gaps in their skills and knowledge appropriate to the exam.</li> </ol>  <p><strong><u>Objectives:</u></strong></p> <p>In-depth discussion of fifteen actor stations:</p> <ol>     <li>Pain (history and management)</li>     <li>Oral lesions (history and management)</li>     <li>TMJ disorders (history and management)</li>     <li>Periodontal disease</li>     <li>Pediatric dentistry (nursing caries/fluoride/fissure sealants)</li>     <li>Dental traumatology</li>     <li>Orthodontics (impacted canines/supernumerary teeth/removable appliances)</li> </ol>  <p>In-depth discussion of multiple skilled/written OSCE’s:</p> <ol>     <li>Suturing</li>     <li>IOPA arrangement</li>     <li>Intramuscular injection</li>     <li>Radiographic film holders</li>     <li>Handwashing</li>     <li>Denture analysis</li>     <li>Splinting</li>     <li>Rubber dam placement</li>     <li>Surveying</li>     <li>Partial denture design</li> </ol>  <p><u><strong>Learning outcomes:</strong></u></p> <ol>     <li>Cover a total of 70 OSCE stations.</li>     <li>Gain confidence in performing essential skilled OSCE stations.</li>     <li>Gain confidence in handling challenging actor OSCE stations (management of angry patients, breaking bad news, and staff disciplinary procedures).</li>     <li>Discussion of recent updates in radiography, restorative, and pediatric dentistry guidelines.</li>     <li>Gain basic skills in history taking and clinical examination.</li> </ol>  <p>Please note that upon attendance and successful completion of the course, a certificate showing 16 verifiable hours of CPD will be issued to all candidates.</p> <p>*Courses are non-refundable.</p>  <p><strong>Course location: (TO BE CONFIRMED)</strong></p>',
          docID: 'oret',
          name: 'ORE2: 2-Day OSCE Bootcamp',
          choices: [
            {
                '0': { price: 500, name: '3 October - 4 October', inStock: 10 },
                '1': { price: 500, name: '17 October - 18 October', inStock: 10 },
                '2': { price: 500, name: '21 November - 22 November', inStock: 10 },
                '3': { price: 500, name: '5 November - 6 November', inStock: 10 },
                '4': { price: 500, name: '19 December 20 December', inStock: 10 },
                '5': { price: 500, name: '28 December 29 December', inStock: 10 }
            }
          ],
          collectionName: 'ore'
        },
        {
          descrip: '<div class="fusion-column-wrapper fusion-flex-column-wrapper-legacy">     <div class="fusion-text fusion-text-2" style="--awb-text-transform:none;">         <p><strong><span style="text-decoration: underline;">Join our 1-Day Medical Emergencies (ME) & Skilled OSCEs Course</span></strong></p>         <p><strong><span style="text-decoration: underline;">ORE 2 – Objective Structured Clinical Examinations (OSCE)</span></strong></p>         <p><strong>This full one day course includes:</strong></p>         <ul>             <li>Medical Emergencies (ME) scenarios</li>             <li>Skilled OSCE stations</li>             <li>Hands-on practice sessions</li>         </ul>         <p>In a simulated exam condition challenge yourself by completing:</p>         <p><strong>70 OSCE stations</strong></p>         <p>Study material will be provided on completion.</p>         <p>Challenge yourself on <strong>timing, efficiency, and accuracy</strong> and we’ll be there to guide you all the way.</p>         <p><strong>Course times: 9:00am – 5:00pm</strong></p>          <h4><strong>Aims:</strong></h4>         <ol>             <li>Prepare candidates for the Medical Emergencies (ME) and Skilled OSCE components of the ORE2 examination.</li>             <li>Familiarize participants with the ME and OSCE set-up, processes, and content.</li>             <li>Help participants identify and address gaps in their skills and knowledge.</li>         </ol>          <h4><strong>Objectives:</strong></h4>         <p>In-depth discussion of various medical emergency scenarios and skilled OSCE stations:</p>         <ol>             <li>Anaphylaxis management</li>             <li>Hypoglycemia management</li>             <li>Cardiac arrest response</li>             <li>Safe administration of emergency drugs</li>             <li>Use of oxygen cylinders and defibrillators</li>             <li>Suturing techniques</li>             <li>Intramuscular injection</li>             <li>Radiographic film holder usage</li>             <li>Rubber dam placement</li>         </ol>          <h4><strong>Learning outcomes:</strong></h4>         <ol>             <li>Master 70 OSCE stations, gaining confidence in performing essential skills and managing emergency situations.</li>             <li>Improve history-taking and clinical examination skills.</li>             <li>Learn to manage complex patient interactions and emergency scenarios effectively.</li>         </ol>          <p>Please note that upon attendance and successful completion of the course, a certificate showing 8 verifiable hours of CPD will be issued to all candidates.</p>         <p>*Courses are non-refundable.</p>         <p><strong>Course location: (TO BE CONFIRMED)</strong></p>     </div> </div>',
          docID: 'oret',
          name: '1-Day ME & OSCE Skills Boost',
          choices: [
            {
              '0': { price: 250, name: '14 September | 09:00 AM - 06:00 PM', inStock: 10 },
              '1': { price: 250, name: '18 September | 09:00 AM - 06:00 PM', inStock: 10 }
            }
          ],
          collectionName: 'ore'
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




  ore2Revisions()