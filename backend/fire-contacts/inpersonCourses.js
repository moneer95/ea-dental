const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('/Users/monirskaik/Desktop/ea-dental-36bd1-firebase-adminsdk-janpv-cc74a5db82.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();






async function ore2InPerson() {

    const itemRef = db.collection('ore').doc('oret')

      const item = await itemRef.get();
      // console.log(item.data().shoppingOptions[5].choices)
    
      shoppingOptions = [
        {
          choices: [
              {
              "0": 
                  {
                      name: "14th-18th of October online",
                      price: 1050,
                      date: "14-10-2024"
                  },
              "1": 
                  {
                      name: "18-22 of November online",
                      price: 1050,
                      date: "18-11-2024"
                  },
              "2": 
                  {
                      name: "2-6 of December online",
                      price: 1050,
                      date: "2-12-2024"

                  },
              "3": 
                  {
                      name: "9-13 of December online",
                      price: 1050,
                      date: "13-9-2024"
                  }    
              },
              {
              "0": 
                  {
                      name: "23th October 2024 in-person",
                      date: "23-10-2024"                             
                  },
              "1": 
                  {
                      name: "15th of November in-person",
                      date: "15-11-2024"                             
                  },
              "2": 
                  {
                      name: "6th of December in-person",
                      date: "6-12-2024"                                                           
                  },
              "3": 
                  {
                      name: "11th of December in-person",
                      date: "11-12-2024"                                                           
                  },
              "4": 
                  {
                      name: "24th of January in-person",
                      date: "24-1-2025"                                                           
                  },
              "5": 
                  {
                      name: "7th of February in-person",
                      date: "7-2-2024"
                  },  
              "6":    
                  {   
                      name: "7th of March in-person",
                      date: "7-3-2024"
                  },
              "7":    
                  {   
                      name: "To be confirmed after booking",
                      date: "1-1-2050"
                  }
              } 
            ],
            descrip: "<div> <div> <div> <div> <div> <div> <div> <h3>ORE 2 COMPREHENSIVE ONLINE COURSE</h3> </div> </div> </div> <div> <div> <div> <h3>Introducing ORE 2 Online Course: Your Step-by-Step Path to Comprehensive ORE Preparation</h3> </div> </div> </div> <div> <div> <div> <h4>Designed for candidates with no prior ORE experience, our ORE 2 online course brings you the ultimate convenience of learning from the comfort of your own home. But that's not all – we offer unprecedented flexibility. You can choose to attend some of your sessions in person, allowing you to tailor your learning experience to your needs.</h4> </div> </div> </div> <div> <div> <div> <h3><u>Requirements:</u></h3> </div> </div> </div> <div> <div> <h4>1. Adequate internet speed 2. Speaker 3. Video camera</h4> </div> </div> <div> <div> <h3><strong><u>Course Schedule:</u></strong></h3> <h4><strong><span>Day One:</span><br><span>Dental Treatment Planning (9 am to 6 pm)</span></strong></h4> <ul> <li><h4><span>Pain cases</span></h4></li> <li><h4><span>Periodontal diseases</span></h4></li> </ul> <h4><strong><span>Day Two:</span><br><span>Dental Treatment Planning: (9 am to 6 pm)</span></strong></h4> <ul> <li><h4><span>Denture cases</span></h4></li> <li><h4><span>Tooth surface loss and oral medicine</span></h4></li> </ul> <h4><span>Day Three :<br>(9 am to 1 pm)</span></h4> <ul> <li><h4><span>Medical emergency</span></h4></li> </ul> <h4><span>Day Four:<br>(9 am to 6 pm)</span></h4> <ul> <li><h4><span>Actor OSCEs (Covering a total of 45 stations)</span></h4></li> </ul> <h4><span>Day Five</span><br><span>(9 am to 1 pm)</span></h4> <ul> <li><h4>Written OSCEs 2 pm to 4 pm: Skilled OSCEs demos</h4></li> </ul> </div> </div> <div> <div> <h4><span>In-person Sessions</span></h4> <ul> <li><h4><strong>Skilled OSCEs and Medical Emergency Practice</strong></h4></li> </ul> <h4>Choose your suitable date and embark on your journey to ORE success!</h4> </div> </div> <div> <div> <h4>At EA Dental, we are committed to your success. Our ORE 2 online course combines top-notch instruction, flexibility, and personalized support to ensure you are fully prepared for the ORE exam. Join us on this educational journey and take the first step towards a successful dental career in the UK.</h4> </div> </div> <div> <div> <h3>Join our ORE 2 online course today and unlock your path to success!</h3> </div> </div> </li> </ul> </div> </div> </div> </div> </div> </div>",
            name: "ORE2: Five-Day Comprehensive Online Course + One In-Person Day",
            docID: 'oret',
        },
        {
          descrip: '<div> <h3>ORE/LDS Manikin Exam Prep Platform</h3> <h4>Ace Your ORE/LDS Manikin Exam with Confidence!</h4> <p>Enroll Today with a One-Time Payment and Unlock Unlimited Access to Our Comprehensive Course Videos!</p> <h3>What’s Included:</h3> <ul> <li><strong>Extensive Video Library:</strong> Master every aspect of the ORE/LDS manikin exam with our expertly crafted instructional videos.</li> <li><strong>Exclusive Tutor Support:</strong> Join our private WhatsApp group for continuous guidance. A dedicated tutor will follow up on your progress every two days, and you can post unlimited practice exercises for personalized feedback.</li> <li><strong>Lifetime Access:</strong> Pay once and keep learning until you pass. No recurring fees, no expiration dates!</li> </ul> <h3>Manikin Exam Course Content</h3> <h4>Fixed Prosthodontics</h4> <ul> <li>Veneer (11 - 21)</li> <li>Central Incisor Index (11 - 21)</li> <li>PFM Central (11 - 21)</li> <li>Canine Index (13 - 23)</li> <li>Canine PFM (13 - 23)</li> <li>PFM Premolar (15 - 25)</li> <li>Molar Index (16 - 26)</li> <li>Full Gold Crown (16 - 26)</li> <li>Temporary Crown (36)</li> <li>Impression (Two Stage)</li> </ul> <h4>Endodontics</h4> <ul> <li>Access Opening (26)</li> <li>Endodontic Cleaning & Shaping + Obturation (21)</li> </ul> <h4>Operative Dentistry</h4> <ul> <li>Class I Cavity Preparation (14 - 24 - 15 - 25)</li> <li>Class II Cavity Preparation MO (16 - 26)</li> <li>Class II Cavity Preparation MOD (15 - 25)</li> <li>Class III Cavity Preparation</li> <li>Class IV Cavity Preparation – Composite Filling</li> <li>Class V Cavity Preparation</li> <li>Class VI Cavity Preparation (15 - 25) – Composite Filling</li> <li>Amalgam Filling (Mobile 45)</li> </ul> <h4>Removable Prosthodontics</h4> <ul> <li>Rest Seats</li> </ul> <h3>Why Choose Us?</h3> <ul> <li><strong>One-Time Payment:</strong> Get lifetime access with just one payment. No hidden costs, no monthly fees.</li> <li><strong>Unlimited Practice:</strong> Share and receive feedback on unlimited exercises every day.</li> <li><strong>Expert Support:</strong> Regular follow-ups by experienced tutors ensure you stay on track.</li> </ul> </div>',
          docID: 'oret',
          name: '3-Day ORE2 Manikin Mastery',
          choices: [
            {
              '0': {
                price: 1500,
                name: '19 October - 21 October | Dr Ahmed | 9:00am - 7:00pm',
                inStock: 10,
                date: "19-10-2024"
              },
              '1': {
                price: 1500,
                name: '16 November - 18 November | Dr Ahmed | 9:00am - 7:00pm',
                inStock: 10,
                date: "16-11-2024"
              },
              '2': {
                price: 1500,
                name: '7 December - 9 December | Dr Ahmed | 9:00am - 7:00pm',
                inStock: 10,
                date: "7-12-2024"
              },
              '3': {
                price: 1500,
                name: '14 December - 16 December',
                inStock: 10,
                date: "14-12-2024"
              },
              '4': {
                price: 1500,
                name: '21 December - 23 December | Dr Ahmed | 9:00am - 7:00pm',
                inStock: 10,
                date: "21-12-2024"
              },
              '5': {
                price: 1500,
                name: '6 January - 8 January | Dr Ahmed | 9:00am - 7:00pm',
                inStock: 10,
                date: "6-1-2025"
              },
              '6': {
                price: 1500,
                name: '13 January - 15 January | Dr Shahla | 9:00am - 7:00pm',
                inStock: 10,
                date: "13-1-2025"
              },
              
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






async function threeInOneMock() {

    const itemRef = db.collection('mocks').doc('ore3')

  
      const item = await itemRef.get();
    
      shoppingOptions = [
                {
                    choices: [{
                        "0": 
                            {
                                name: "28 October 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "1": 
                            {
                                name: "29 October 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "2": 
                            {
                                name: "30 October 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "3": 
                            {
                                name: "31 October 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "4": 
                            {
                                name: "1 November 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "5": 
                            {
                                name: "4 November 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "6": 
                            {
                                name: "6 November 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "7": 
                            {
                                name: "7 November 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "8": 
                            {
                                name: "8 November 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                        "9": 
                            {
                                name: "11 November 2024 | 8:00am - 5:30pm",
                                price: 564,
                                inStock: 0                   
                            },
                }],
                descrip: "<div><ul><li>One full DTP mock case.</li><li>All sections of DTP covered including:( History taking / Investigations / X-ray report / Presentation )</li><li>All medical emergency scenarios and BLS – equipment – Medical Emergency scenario medications.<ul><li>&nbsp;Basic life support</li><li>All medical emergencies</li><li>Asthma</li><li>Anaphylaxis</li><li>Adrenocortical insufficiency</li><li>Angina</li><li>Myocardial infarction</li><li>Epilepsy</li><li>Stroke</li><li>Choking</li><li>Hypoglycemia</li><li>Vasovagal syncope</li><li>Bleeding</li><li>Needlestick injury</li></ul></li><li>Training on all available equipment:<ul><li>BLS</li><li>Oxygen cylinder</li><li>Face mask</li><li>Spacer</li><li>Oropharyngeal airway</li><li>Intramuscular injection</li><li>Epipen/Anapen</li><li>All basic medication</li></ul></li><li>25 OSCE stations (actor, skilled and written stations).</li><li>All skilled OSCE’s included.</li></ul><p><strong>From: 1:30 pm to 6:00 pm</strong></p><p><strong>An Intense revision covering Treatment planning of 20 Important DTP cases – Medical Emergency scenarios and OSCE’s</strong></p><p>We accept a maximum of five students per session to ensure maximum benefit</p><p><strong>Lunch is provided</strong></p><p><strong>Course time:</strong> 8:30 am – 6:00 pm</p><p>*Courses are non-refundable</p><h4><span><b>How to Book:</b></span></h4><p><strong>You can easily and conveniently book online the course and date you would like to attend below.</strong></p><p><strong>If you prefer to speak to someone before you make your booking, please contact us&nbsp;</strong><strong><a href=\"https://ea-dental.com/contact-us/\" target=\"_blank\" rel=\"noopener noreferrer\">here</a>.&nbsp;</strong></p><p><strong>All our courses are very popular so please make your booking well in advance to avoid disappointment.&nbsp;</strong></p><h4><span><strong>Course Location: <a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=23-25-bridge-street\">23-25 Bridge Street</a>,&nbsp;<a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=pinner-ha5-3hr\">Pinner HA5 3HR</a>,&nbsp;<a href=\"https://ea-dental.com/wp-admin/edit.php?post_type=class&wcs-room=westbury-house\">Westbury House</a></strong></span></h4></div>",
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

    const itemRef = db.collection('mocks').doc('ore32')

  
      const item = await itemRef.get();

    //   console.log(JSON.stringify(item.data(), null, 2))
    
      shoppingOptions = [
            {
                choices: [
                    {
                    "0": {
                        price: 480,
                        name: "16 October | 8:30am - 5:00pm | Dr Shahla",
                        inStock: 10,
                        date: "16-10-2024"
                        },
                    "1": {
                        price: 480,
                        name: "26 October | 8:30am - 5:00pm | Dr Ahmed",
                        inStock: 10,
                        date: "26-10-2024"
                        },
                    "2": {
                        price: 480,
                        name: "27 October | 8:30am - 5:00pm | Dr Ahmed",
                        inStock: 10,
                        date: "27-10-2024"
                        },
                    "3": {
                        price: 480,
                        name: "2 November | 8:30am - 5:00pm | Dr Ahmed",
                        inStock: 10,
                        date: "2-11-2024"
                        },
                    "4": {
                        price: 480,
                        name: "9 November | 8:30am - 5:00pm | Dr Ahmed",
                        inStock: 10,
                        date: "9-11-2024"
                        },
                    "5": {
                        price: 480,
                        name: "10 November | 8:30am - 5:00pm | Dr Ahmed",
                        inStock: 10,
                        date: "10-11-2024"
                        }
                    },
                    
                    ],
                descrip: "<div> <h4> <strong> <u>ORE 2 Dental Manikin Training</u></strong><br>One day comprehensive dental manikin mock and revision course with daily online support until you pass your exam.</h4>     <h4 data-fontsize=\"18\" style=\"--fontSize: 18; line-height: 1.67;\" data-lineheight=\"30.06px\" class=\"fusion-responsive-typography-calculated\"><strong><u>Who this course is for?</u></strong><br>This course is for dentists who have completed a comprehensive ORE 2 practical course and are looking to refine their dental skills weeks before their exams.</h4>     <h3 data-fontsize=\"24\" style=\"--fontSize: 24; line-height: 1.4;\" data-lineheight=\"33.6px\" class=\"fusion-responsive-typography-calculated\"><strong><u>What does the course include?</u></strong><br>• One full day of dental manikin teaching<br>• Up to four demonstrations of each exercise intra-orally<br>• Detailed course notes<br>• Continuous online support until you pass your exam<br>• 8 hours verifiable CPD</h3>     <h3 style=\"--fontSize: 24; line-height: 1.4;\" data-lineheight=\"33.6px\" class=\"fusion-responsive-typography-calculated\"><strong><u>Course venue:</u></strong><br>• Frasaco dental manikin similar to the exam facility<br>• All provided dental instruments closely resemble the exam</h3>     <h3 ><u>Aims and objectives</u></h3>     <p>One day intense revision course which allows participants the freedom to select dental manikin exercises they struggle with and practice them intensely under specialist supervision to refine their skills and build their confidence in preparation for the ORE Part 2 Dental Manikin examination. Demonstrations of up to four exercises can be provided upon request. A small group of students under the supervision of skilled staff who are on hand to answer questions, offer advice, and give individual demonstrations. The staff-to-participant ratio of 1:2 allows the course to be tailored to individual needs.</p>     <h3 ><u>Anticipated outcomes</u></h3>     <p>After attending this course, participants should be able to assess in which areas they need to improve and reinforce their practice at home before sitting the examination.</p>     <h3 ><u>Teaching and assessment</u></h3>     <p>This is a skills revision course with a demonstration component. Participants are under constant supervision with staff available to give advice and demonstrations.</p>     <p><strong>Please note that participants need to provide their own Endo teeth.</strong></p>     <h3 ><u>Content</u></h3>     <p>Participants can spend the full day practicing their choice of elements from the Dental Manikin exam.</p>     <h4 class=\"fusion-responsive-typography-calculated\" data-fontsize=\"18\" data-lineheight=\"30.06px\" style=\"--fontSize: 18; line-height: 1.67;\"><strong>Ideal for exam candidates</strong></h4>     <p><strong>Course timing: 8:30 am – 5:00 pm</strong></p>     <p><strong>Course location: 177 Field end road / HA5 1QR).</strong></p>     <p>CPD certificate will be accredited upon course completion</p>     <p>*Courses are non-refundable. A minimum of 3 candidates is required for the session to run. Where sessions don’t have the minimum numbers, we reserve the right to transfer candidates to other available session dates.</p> </div>",
                name: "Revision / Mock Session: Dental Manikin",
                collectionName: "mocks",
                docID: "ore32"
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

    
      shoppingOptions = [
        {
          descrip: '<h4 style="font-size: 18px; line-height: 1.67;"><strong>Aims:</strong><br> To provide training in adult and pediatric basic life support and advice on equipment and drugs.</h4> <p>The training will provide an efficient and safe evaluation of patients presenting at the Dental Practice, with a wide spectrum of patient-related emergencies. The candidate will also refine and demonstrate those skills and elaborate further on how they will be put into practice and used effectively.</p> <p>With the wide range of clinical experience and “hands-on” teaching sessions, the candidates will develop and demonstrate an ability to perform a variety of medical emergency treatments in practice.</p>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>Objectives:</strong></h4> <p>By the end of the training session, the participants should be able to:</p> <ul>     <li>Identify at-risk and seriously ill patients using the ABCDE approach.</li>     <li>Describe how to take a blood glucose measurement from a patient.</li>     <li>Identify the appropriate drugs to use in an emergency.</li>     <li>Complete a progress assessment on the ABCDE approach.</li>     <li>Carry out an initial assessment of an unconscious patient.</li>     <li>Identify the appropriate help required.</li>     <li>Place the patient into the recovery position.</li>     <li>Monitor the patient using the ABCDE approach.</li>     <li>Describe the safe administration of oxygen.</li>     <li>Be aware of the treatment for choking.</li>     <li>Identify the most suitable method of establishing an airway depending on the clinical status of a patient.</li>     <li>Identify when to carry out basic life support.</li>     <li>Explain how to carry out basic life support.</li>     <li>Practice basic life support skills on adults and children.</li>     <li>Safely use an automated external defibrillator (AED).</li>     <li>Develop a standardized approach to managing a sick or critically ill patient.</li>     <li>Develop confidence and competence as a team member in initiating basic life support and the safe use of an AED.</li>     <li>Consolidate all the aspects of the self-instructed learning program.</li>     <li>Enable the safe handover of the patient to the ambulance team.</li> </ul>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>Learning outcomes:</strong></h4> <p>Develop competence in demonstrating resuscitation techniques, handling emergencies, and providing immediate management of anaphylactic reaction, hypoglycemia, upper respiratory obstruction, cardiac arrest, seizures, vasovagal attack, inhalation or ingestion of foreign bodies, and hemorrhage.</p> <p>Be familiar with the principles of first aid and the approach to symptom-based diagnosis.</p> <p>Please note that upon attendance and successful completion of the course, a certificate stating 4 verifiable hours of CPD will be issued to the candidate.</p>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>This one-day course covers:</strong></h4> <ul>     <li>Basic life support</li>     <li>All possible medical emergencies</li>     <li>Asthma</li>     <li>Anaphylaxis</li>     <li>Adrenocortical insufficiency</li>     <li>Angina</li>     <li>Myocardial infarction</li>     <li>Epilepsy</li>     <li>Stroke</li>     <li>Choking</li>     <li>Hypoglycemia</li>     <li>Vasovagal syncope</li>     <li>Bleeding</li>     <li>Needlestick injury</li> </ul> <p>Training on all available equipment:</p> <ul>     <li>BLS</li>     <li>Oxygen cylinder</li>     <li>Face mask</li>     <li>Spacer</li>     <li>Oropharyngeal airway</li>     <li>Intramuscular injection</li>     <li>Epipen/Anapen</li>     <li>All basic medication</li> </ul> <p>Mock Examination:</p> <ul>     <li>Basic Life Support & Medical Examination</li>     <li>One-to-one feedback and evaluation</li>     <li>Study material will be provided at the end of the session</li>     <li>Challenge yourself on timing, efficiency, and accuracy and we will be there to guide you throughout the course</li> </ul> <p><strong>Course timing: 9:00 am – 5:00 pm</strong></p>  <p>Don’t hesitate to join our full-day Medical Emergency course that will answer all your questions.<br> We’ll help you achieve confidence in both the practical and theoretical aspects of Medical Emergencies.</p> ',
          docID: 'ore',
          name: 'ORE2 Medical Emergencies Masterclass',
          choices: [
            {
              '0': { price: 300, name: '16 October | 9:00am - 1:00pm', inStock: 10, date: "16-10-2024" },
              '1': { price: 300, name: '20 November | 9:00am - 1:00pm', inStock: 10, date: "20-11-2024" },
              '2': { price: 300, name: '4 December | 9:00am - 1:00pm', inStock: 10, date: "4-12-2024" }
            }
          ],
          collectionName: 'revisions'
        },
        {
          descrip: '<p><strong><u>Join our two full day OSCE’s course and benefit from an in-depth explanation, one to one evaluation, and extended online resources to follow up your future progress until your exam.</u></strong></p>  <p><strong><u>ORE 2 – Objective Structured Clinical Reasoning</u></strong></p>  <p><strong>This full one day course includes:</strong></p> <ul>     <li>Written OSCE’s</li>     <li>Skilled OSCE’s</li>     <li>Actor OSCE’s</li> </ul>  <p>In a simulated exam condition, challenge yourself by completing:</p> <p><strong>70 OSCE’s</strong></p>  <p>Study material will be provided on completion.</p> <p>Challenge yourself on <strong>timing, efficiency, and accuracy</strong> and we’ll be there to guide you all the way.</p>  <p><strong>Course times: 9:00 am – 5:00 pm</strong></p>  <p><strong>Aims:</strong></p> <ol>     <li>Prepare the candidate for the OSCE’s component of the ORE2 examination.</li>     <li>Familiarize participants with the OSCE set-up, process, and content.</li>     <li>Help participants identify gaps in their skills and knowledge appropriate to the exam.</li> </ol>  <p><strong><u>Objectives:</u></strong></p> <p>In-depth discussion of fifteen actor stations:</p> <ol>     <li>Pain (history and management)</li>     <li>Oral lesions (history and management)</li>     <li>TMJ disorders (history and management)</li>     <li>Periodontal disease</li>     <li>Pediatric dentistry (nursing caries/fluoride/fissure sealants)</li>     <li>Dental traumatology</li>     <li>Orthodontics (impacted canines/supernumerary teeth/removable appliances)</li> </ol>  <p>In-depth discussion of multiple skilled/written OSCE’s:</p> <ol>     <li>Suturing</li>     <li>IOPA arrangement</li>     <li>Intramuscular injection</li>     <li>Radiographic film holders</li>     <li>Handwashing</li>     <li>Denture analysis</li>     <li>Splinting</li>     <li>Rubber dam placement</li>     <li>Surveying</li>     <li>Partial denture design</li> </ol>  <p><u><strong>Learning outcomes:</strong></u></p> <ol>     <li>Cover a total of 70 OSCE stations.</li>     <li>Gain confidence in performing essential skilled OSCE stations.</li>     <li>Gain confidence in handling challenging actor OSCE stations (management of angry patients, breaking bad news, and staff disciplinary procedures).</li>     <li>Discussion of recent updates in radiography, restorative, and pediatric dentistry guidelines.</li>     <li>Gain basic skills in history taking and clinical examination.</li> </ol>  <p>Please note that upon attendance and successful completion of the course, a certificate showing 16 verifiable hours of CPD will be issued to all candidates.</p> <p>*Courses are non-refundable.</p>  <p><strong>Course location: (TO BE CONFIRMED)</strong></p>',
          docID: 'ore',
          name: 'ORE2: 2-Day OSCE Bootcamp',
          choices: [
            {
                '0': { price: 500, name: '17 October - 18 October', inStock: 10, date: "17-10-2024" },
                '1': { price: 500, name: '21 November - 22 November', inStock: 10, date: "21-11-2024" },
                '2': { price: 500, name: '5 December - 6 December', inStock: 10, date: "5-12-2024" }
            }
          ],
          collectionName: 'revisions'
        },
        {
          descrip: '<div class="fusion-column-wrapper fusion-flex-column-wrapper-legacy">     <div class="fusion-text fusion-text-2" style="--awb-text-transform:none;">         <p><strong><span style="text-decoration: underline;">Join our 1-Day Medical Emergencies (ME) & Skilled OSCEs Course</span></strong></p>         <p><strong><span style="text-decoration: underline;">ORE 2 – Objective Structured Clinical Examinations (OSCE)</span></strong></p>         <p><strong>This full one day course includes:</strong></p>         <ul>             <li>Medical Emergencies (ME) scenarios</li>             <li>Skilled OSCE stations</li>             <li>Hands-on practice sessions</li>         </ul>         <p>In a simulated exam condition challenge yourself by completing:</p>         <p><strong>70 OSCE stations</strong></p>         <p>Study material will be provided on completion.</p>         <p>Challenge yourself on <strong>timing, efficiency, and accuracy</strong> and we’ll be there to guide you all the way.</p>         <p><strong>Course times: 9:00am – 5:00pm</strong></p>          <h4><strong>Aims:</strong></h4>         <ol>             <li>Prepare candidates for the Medical Emergencies (ME) and Skilled OSCE components of the ORE2 examination.</li>             <li>Familiarize participants with the ME and OSCE set-up, processes, and content.</li>             <li>Help participants identify and address gaps in their skills and knowledge.</li>         </ol>          <h4><strong>Objectives:</strong></h4>         <p>In-depth discussion of various medical emergency scenarios and skilled OSCE stations:</p>         <ol>             <li>Anaphylaxis management</li>             <li>Hypoglycemia management</li>             <li>Cardiac arrest response</li>             <li>Safe administration of emergency drugs</li>             <li>Use of oxygen cylinders and defibrillators</li>             <li>Suturing techniques</li>             <li>Intramuscular injection</li>             <li>Radiographic film holder usage</li>             <li>Rubber dam placement</li>         </ol>          <h4><strong>Learning outcomes:</strong></h4>         <ol>             <li>Master 70 OSCE stations, gaining confidence in performing essential skills and managing emergency situations.</li>             <li>Improve history-taking and clinical examination skills.</li>             <li>Learn to manage complex patient interactions and emergency scenarios effectively.</li>         </ol>          <p>Please note that upon attendance and successful completion of the course, a certificate showing 8 verifiable hours of CPD will be issued to all candidates.</p>         <p>*Courses are non-refundable.</p>         <p><strong>Course location: (TO BE CONFIRMED)</strong></p>     </div> </div>',
          docID: 'ore',
          name: '1-Day ME & OSCE Skills Boost',
          choices: [
            {
              '0': { price: 250, name: '23 October | 09:00 AM - 06:00 PM', inStock: 10, date: "23-10-2024" },
              '1': { price: 250, name: '24 October | 09:00 AM - 06:00 PM', inStock: 0, date: "24-10-2024" },
              '2': { price: 250, name: '5 November | 09:00 AM - 06:00 PM', inStock: 10, date: "5-11-2024" },
              '3': { price: 250, name: '15 November | 09:00 AM - 06:00 PM', inStock: 10, date: "15-11-2024" },
              '4': { price: 250, name: '6 December | 09:00 AM - 06:00 PM', inStock: 10, date: "6-12-2024" },
              '5': { price: 250, name: '11 December | 09:00 AM - 06:00 PM', inStock: 10, date: "11-12-2024" }
            }
          ],
          collectionName: 'revisions'
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