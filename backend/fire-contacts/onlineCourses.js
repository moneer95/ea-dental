const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('/Users/monirskaik/Desktop/ea-dental-36bd1-firebase-adminsdk-janpv-cc74a5db82.json');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();


async function ORE2Comperehensive() {

    const itemRef = db.collection('ore').doc('ore2')

  
      const item = await itemRef.get();
    
      shoppingOptions = [
                {
                    choices: [
                        {
                        "0": 
                            {
                                "name": "30th of September to 4th of October",
                                "price": 564 
                            },
                        "1": 
                            {
                                "name": "14th of October to 18th of October",
                                "price": 564
                            },
                        "2": 
                            {
                                "name": "16-20 of September",
                                "price": 564
                            },
                        "3": 
                            {
                                "name": "14-18 of October",
                                "price": 564
                            },
                        "4": 
                            {
                                "name": "18-22 of November",
                                "price": 564
                            },
                        "5": 
                            {
                                "name": "2-6 of December",
                                "price": 564
                            },
                        "6": 
                            {
                                "name": "19-20 of December",
                                "price": 564
                            }    
                        },
                        {
                        "0": 
                            {
                                "name": "18th September 2024"                              
                            },
                        "1": 
                            {
                                "name": "2nd of October"                           
                            },
                        "2": 
                            {
                                "name": "16th of October"                               
                            },
                        "3": 
                            {
                                "name": "18-22 of November"                               
                            },
                        "4": 
                            {
                                "name": "2-6 of December"                            
                            },
                        "5": 
                            {
                                "name": "19-20 of December"
                            }
                        } 
                    ],
                descrip: "<div> <div> <div> <div> <div> <div> <div> <h3>ORE 2 COMPREHENSIVE ONLINE COURSE</h3> </div> </div> </div> <div> <div> <div> <h3>Introducing ORE 2 Online Course: Your Step-by-Step Path to Comprehensive ORE Preparation</h3> </div> </div> </div> <div> <div> <div> <h4>Designed for candidates with no prior ORE experience, our ORE 2 online course brings you the ultimate convenience of learning from the comfort of your own home. But that's not all – we offer unprecedented flexibility. You can choose to attend some of your sessions in person, allowing you to tailor your learning experience to your needs.</h4> </div> </div> </div> <div> <div> <div> <h3><u>Requirements:</u></h3> </div> </div> </div> <div> <div> <h4>1. Adequate internet speed 2. Speaker 3. Video camera</h4> </div> </div> <div> <div> <h3><strong><u>Course Schedule:</u></strong></h3> <h4><strong><span>Day One:</span><br><span>Dental Treatment Planning (9 am to 6 pm)</span></strong></h4> <ul> <li><h4><span>Pain cases</span></h4></li> <li><h4><span>Periodontal diseases</span></h4></li> </ul> <h4><strong><span>Day Two:</span><br><span>Dental Treatment Planning: (9 am to 6 pm)</span></strong></h4> <ul> <li><h4><span>Denture cases</span></h4></li> <li><h4><span>Tooth surface loss and oral medicine</span></h4></li> </ul> <h4><span>Day Three :<br>(9 am to 1 pm)</span></h4> <ul> <li><h4><span>Medical emergency</span></h4></li> </ul> <h4><span>Day Four:<br>(9 am to 6 pm)</span></h4> <ul> <li><h4><span>Actor OSCEs (Covering a total of 45 stations)</span></h4></li> </ul> <h4><span>Day Five</span><br><span>(9 am to 1 pm)</span></h4> <ul> <li><h4>Written OSCEs 2 pm to 4 pm: Skilled OSCEs demos</h4></li> </ul> </div> </div> <div> <div> <h4><span>In-person Sessions</span></h4> <ul> <li><h4><strong>Skilled OSCEs and Medical Emergency Practice</strong></h4></li> </ul> <h4>Choose your suitable date and embark on your journey to ORE success!</h4> </div> </div> <div> <div> <h4>At EA Dental, we are committed to your success. Our ORE 2 online course combines top-notch instruction, flexibility, and personalized support to ensure you are fully prepared for the ORE exam. Join us on this educational journey and take the first step towards a successful dental career in the UK.</h4> </div> </div> <div> <div> <h3>Join our ORE 2 online course today and unlock your path to success!</h3> </div> </div> </li> </ul> </div> </div> </div> </div> </div> </div>",
                name: "ORE2 Comprehensive Online Course"
            },
            {
                choices: [
                    {
                    "0": 
                        {
                            "name": "default",
                            "price": 150 
                        }
                    }
                ],
                descrip: "<div> <div> <h3>Description</h3> <p><strong>Welcome to the esteemed EA Dental Academy!</strong></p> <p>We extend our heartfelt congratulations on your subscription to the ORE2 learning platform. Your subscription will be valid for a <strong>period of 18 months</strong>, granting you exclusive access to <strong>10 comprehensive dental treatment planning cases.</strong></p> <p>These meticulously crafted DTP cases have been thoughtfully developed in strict accordance with the guidelines set forth by the General Dental Council (GDC) for the DTP component. To commence your journey through these cases, please begin by watching the enlightening DTP introduction video.</p> <p>The Diagnostic and Treatment Planning exercise (DTP) is of significant importance, taking place on day 3 of the exam and lasting a total of 55 minutes. This exercise involves engaging with a trained actor who will provide a detailed history (not subjected to examination), along with essential supplementary information such as photographs, radiographs, study models, or results of other specialized tests. The exercise may encompass various aspects of clinical dentistry.</p> <p><strong>Prior to your exam, it is imperative that you thoroughly acquaint yourself with the DTP guidance provided by the GDC.</strong> For detailed information, please refer to the following link: <a href=\"https://orepart2.org.uk/wp-content/uploads/dtpguidance.pdf\" target=\"_new\" rel=\"noopener\">DTP Guidance</a></p> <p><strong>To enhance your preparation, we kindly request you to watch the GDC DTP video, which is a valuable resource for your exam preparation:</strong> <a href=\"https://orepart2.org.uk/dtp-guidance-video/\" target=\"_new\" rel=\"noopener\">GDC DTP Video</a></p> <p><strong>Please take note of the following important information:</strong></p> <ul> <li>Your EA Dental account can only be accessed from a single electronic device at any given time. <strong>Multiple logins from the same account will result in deactivation of your subscription.</strong></li> <li>Sharing your login details with another individual will be detected by our website, rendering your subscription invalid. Such actions are subject to termination in accordance with our terms and conditions.</li> <li>We strictly prohibit the unauthorized downloading, circulation, or sharing of our course materials. Engaging in such activities is not only illegal but also subject to immediate termination of your subscription and potential legal repercussions.</li> </ul> <p>Once again, we extend our warmest congratulations on embarking upon this enriching educational journey with EA Dental Academy. We wish you the utmost success and look forward to witnessing your growth and accomplishments in the field of dentistry.</p> </div> </div>",
                name: "ORE2 Dental Treatment Planning Videos Subscription"
            },
            {
                choices: [
                    {
                    "0": 
                        {
                            "name": "default",
                            "price": 260 
                        }
                    }
                ],
                descrip: "<p><strong>(Online Platform Only – accessible for 18 months from enrollment)</strong><br> There are four components to Part 2 of the ORE:&nbsp;</p> <p><strong>An operative test on a dental manikin (DM)</strong></p> <p>Candidates are required to perform three procedures over a period of three hours. These procedures primarily involve the preparation and restoration of teeth, but may also include other procedures where appropriate simulation can allow assessment of operative skills.&nbsp;</p> <p>DM guidance is available on the <a href=\"http://www.orepart2.org.uk/index.php/guidance\">exam centre’s website here</a>.&nbsp;</p> <p><strong>An objective structured clinical examination (OSCE)</strong></p> <p>This is where candidates visit a series of ‘stations’ which test their clinical skills. These may include history-taking and assessment, communication skills (such as an explanation of problems and treatment plans), judgement and decision making, ethics and attitudes, and clinical examination. The series of stations may cover aspects of the following:&nbsp; behavioural sciences, human disease, law, ethics and professionalism, clinical dentistry, restorative dentistry, paediatric dentistry, orthodontics, preventive dentistry, dental public health, comprehensive oral care, oral surgery, oral medicine, oral pathology and oral microbiology, dental radiology and imaging.&nbsp;&nbsp;</p> <p>OSCE guidance is available on the <a href=\"http://www.orepart2.org.uk/index.php/guidance\">exam centre’s website here</a>.&nbsp;</p> <p><strong>A diagnostic and treatment planning exercise (DTP)</strong></p> <p>This involves an actor who will provide an appropriate history (but will not be examined), together with relevant additional information such as photographs, radiographs, study models or results of other special tests. The exercise may involve any of the above aspects of clinical dentistry.</p> <p>DTP guidance is available on the <a href=\"http://www.orepart2.org.uk/index.php/guidance\">exam centre’s website here</a>.</p> <p><strong>A practical examination in medical emergencies (ME)</strong></p> <p>This assessment consists of two parts:</p> <ul> <li>a structured scenario-based oral</li> <li>demonstration of single handed basic life support. This will include cardiopulmonary resuscitation using a resuscitation manikin</li> </ul> <p>ME guidance is available on the <a href=\"http://www.orepart2.org.uk/index.php/guidance\">exam centre’s website here</a>.</p> <p><strong>You will be allowed four attempts for Part 2.</strong></p>",
                name: "ORE2 Theory course notes + Videos 10 DTP cases"
            },
            {
                choices: [
                    {
                    "0": 
                        {
                            "name": "default",
                            "price": 450 
                        }
                    }
                ],
                descrip: "<div> <h1>ORE/LDS Manikin Exam Prep Platform</h1> <h2>Ace Your ORE/LDS Manikin Exam with Confidence!</h2> <p>Enroll Today with a One-Time Payment and Unlock Unlimited Access to Our Comprehensive Course Videos!</p> <h3>What’s Included:</h3> <ul> <li> <strong>Extensive Video Library:</strong> Master every aspect of the ORE/LDS manikin exam with our expertly crafted instructional videos. </li> <li> <strong>Exclusive Tutor Support:</strong> Join our private WhatsApp group for continuous guidance. A dedicated tutor will follow up on your progress every two days, and you can post unlimited practice exercises for personalized feedback. </li> <li> <strong>Lifetime Access:</strong> Pay once and keep learning until you pass. No recurring fees, no expiration dates! </li> </ul> <h3>Manikin Exam Course Content</h3> <h4>Fixed Prosthodontics</h4> <ul> <li>Veneer (11 - 21)</li> <li>Central Incisor Index (11 - 21)</li> <li>PFM Central (11 - 21)</li> <li>Canine Index (13 - 23)</li> <li>Canine PFM (13 - 23)</li> <li>PFM Premolar (15 - 25)</li> <li>Molar Index (16 - 26)</li> <li>Full Gold Crown (16 - 26)</li> <li>Temporary Crown (36)</li> <li>Impression (Two Stage)</li> </ul> <h4>Endodontics</h4> <ul> <li>Access Opening (26)</li> <li>Endodontic Cleaning & Shaping + Obturation (21)</li> </ul> <h4>Operative Dentistry</h4> <ul> <li>Class I Cavity Preparation (14 - 24 - 15 - 25)</li> <li>Class I Cavity Preparation (14 - 24 - 15 - 25)</li> <li>Class II Cavity Preparation MO (16 - 26)</li> <li>Class II Cavity Preparation MOD (15 - 25)</li> <li>Class III Cavity Preparation</li> <li>Class IV Cavity Preparation – Composite Filling</li> <li>Class V Cavity Preparation</li> <li>Class VI Cavity Preparation (15 - 25) – Composite Filling</li> <li>Amalgam Filling (Mobile 45)</li> </ul> <h4>Removable Prosthodontics</h4> <ul> <li>Rest Seats</li> </ul> <h3>Why Choose Us?</h3> <ul> <li><strong>One-Time Payment:</strong> Get lifetime access with just one payment. No hidden costs, no monthly fees.</li> <li><strong>Unlimited Practice:</strong> Share and receive feedback on unlimited exercises every day.</li> <li><strong>Expert Support:</strong> Regular follow-ups by experienced tutors ensure you stay on track.</li> </ul> </div> <div class=\"wistia_responsive_padding\" style=\"padding:56.25% 0 0 0;position:relative;\"><div class=\"wistia_responsive_wrapper\" style=\"height:100%;left:0;position:absolute;top:0;width:100%;\"><iframe src=\"https://fast.wistia.net/embed/iframe/ieoa7fqp64?seo=false&videoFoam=true\" title=\"CLASS 3 Video\" allow=\"autoplay; fullscreen\" allowtransparency=\"true\" frameborder=\"0\" scrolling=\"no\" class=\"wistia_embed\" name=\"wistia_embed\" msallowfullscreen width=\"100%\" height=\"100%\"></iframe></div></div> <script src=\"https://fast.wistia.net/assets/external/E-v1.js\" async></script>",
                name: "ORE2 Dental Manikin Videos Subscription"
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




  async function ore2InPerson() {

    const itemRef = db.collection('ore').doc('oret')

      const item = await itemRef.get();
      // console.log(item.data().shoppingOptions[5].choices)
    
      shoppingOptions = [
        {
          descrip: '<p>This course is a step by step guide towards your ORE2 preparation with continuous online support until you pass your exam. Boost your confidence and alleviate your stress.</p>  <p style="text-align: center;"><em><strong>We offer guided support for our ORE & LDS students <span style="font-size: 16px; color: #ff0000;">BEFORE, DURING </span><span style="font-size: 16px;">and </span><span style="font-size: 16px; color: #ff0000;">AFTER</span><span style="font-size: 16px;"> attending their ORE course sessions.</span></strong></em></p>  <p>All our instructors are professional dentists with years of experience teaching ORE and LDS courses in the United Kingdom.</p>  <p><strong><u>Course details:</u></strong></p>  <p><strong>Day 1&nbsp;</strong></p> <p><strong>Dental treatment planning:</strong> runs from 9:00am – 6:00pm</p> <ul>   <li>Pain cases</li>   <li>Periodontal disease</li>   <li>Relevant actor OSCE’s</li> </ul> <p>Covers all sections of DTP: (History taking/ Investigations/ X-ray report/ Presentation)</p>  <p><strong>Day 2</strong></p> <p><strong>Dental treatment planning </strong>runs from 9:00am – 6:00pm</p> <ul>   <li>Restorative dentistry</li>   <li>Dentures</li>   <li>Relevant actor OSCE’s</li> </ul> <p>All sections of DTP covered including: (History taking/ Investigations/ X-ray report/ Presentation)</p>  <p><strong>Day 3 </strong></p> <p><strong>Dental treatment planning</strong> runs from 9:00am – 1:00pm</p> <ul>   <li>Tooth Surface loss</li>   <li>Oral Medicine</li>   <li>Relevant actor OSCE’s</li> </ul> <p>Medical Emergencies: 2:00pm – 6:00pm</p> <p>(BLS/ All Possible Medical Emergencies: (Asthma/ Anaphylaxis/ Adrenocortical insufficiency/ Angina/ Myocardial infarction/ Epilepsy/ Stroke/ Choking/ Hypoglycemia/ Vasovagal syncope/ Bleeding/ Needlestick injury)</p> <p>Including training on all available equipment (BLS/ Oxygen cylinder/ Face mask/ Spacer/ Oropharyngeal airway/ Intramuscular injection/Epipen/Anapen)</p>  <p><strong>Day 4 </strong></p> <p>OSCE’s run from 9:00am – 6:00pm and cover:</p> <p>I. In-depth discussion of <strong>ALL</strong> skilled OSCE’s</p> <p>II. In-depth discussion of all written OSCE’s</p>  <p><strong>Day 5&nbsp;</strong></p> <p>Actor OSCE’s run from 9:00am – 6:00pm</p> <p><strong>Course times: 9:00am – 6:00pm</strong></p> <p><strong>Lunch and refreshments will be provided</strong></p> <p>Course materials will be provided at each session.</p> <p>*Courses are non-refundable</p>  <p><strong>Course location: Westbury House, 23-25 Bridge Street, Pinner HA5 3HR</strong></p>',
          docID: 'oret',
          name: 'ORE2 (Five days comprehensive course)',
          choices: [
            {
              '0': { price: 1050, name: '16 September - 20 September', inStock: 10 },
              '1': { price: 1050, name: '30 September - 4 October', inStock: 10 },
              '2': { price: 1050, name: '14 October - 18 October', inStock: 10 },
              '3': { price: 1050, name: '18 November - 22 November', inStock: 10 },
              '4': { price: 1050, name: '2 November - 6 November', inStock: 10 },
              '5': { price: 1050, name: '16 December 20 December', inStock: 10 },
              '6': { price: 1050, name: '25 December 29 December', inStock: 10 }
            }
          ],
          collectionName: 'ore'
        },
        {
          descrip: '<h3 style="text-align: center;">If you are looking to increase your dental manikin skills in preparation for ORE2, why not join our ORE2 comprehensive <span style="color: #ff0000;">Three days</span> dental manikin course with study plan and daily online feedback support on social media WhatsApp.</h3> <div style="border-color:#e7e4e2;"></div>  <p><strong><u>ORE2 Dental Manikin Training</u></strong><br>Three days comprehensive dental manikin course with daily online support until you pass your exam.</p> <p><strong><u>Who this course is for?</u></strong><br>This course is for overseas qualified dentists who have already completed their ORE Part 1 examination and are preparing for ORE2 practical examination.</p> <p><strong><u>What does the course include?</u></strong><br>• Three full days of dental manikin teaching<br>• Lectures and demonstrations of each exercise intraorally<br>• Detailed course notes<br>• Continuous online support until you pass your exam<br>• Lunch and refreshments<br>• Study plan<br>• 24 hours verifiable CPD</p> <p><strong><u>Course venue:</u></strong><br>• Frasaco dental manikin similar to the exam facility<br>• All provided dental instruments closely resemble the exam</p> <p><strong><u>Aims and objectives</u></strong></p> <p>The course will provide detailed lectures and practical hands-on training to allow participants to further develop their operative skills and knowledge to build their confidence in preparation for the ORE Part 2 Dental Manikin examination. Delegates will be under constant supervision of skilled staff who are on hand to answer questions, offer advice, and give individual demonstrations.</p> <p><strong><u>Learning outcomes</u></strong></p> <p>After attending this course, participants should be able to assess in which areas they need to improve and reinforce their practice at home before sitting the examination.</p> <p><strong><u>Quality controls</u></strong></p> <p>All participants are asked to partake in a mock exam and submit written feedback via a questionnaire at the end of the course, which is used to monitor the course’s teaching quality.</p>  <p><strong>Day 1:</strong></p> <p><strong><u>Morning session: 9 am to 1 pm</u></strong></p> <p>Anterior PFM crown preparations:</p> <ul>   <li>Central incisor PFM</li>   <li>Canine PFM</li>   <li>Labial Venner</li> </ul> <p>(GDC Consortium guidelines / Instruments and equipment/ Operator position/ Hands on practice)</p> <p><strong><u>Afternoon session: 2 pm to 6 pm</u></strong></p> <p>Operative preparations:</p> <ul>   <li>Class I cavity preparation</li>   <li>Class I with palatal extension</li>   <li>Class III cavity preparation</li>   <li>Class V cavity preparation</li>   <li>Impression (Two and Single stage)</li> </ul> <p>(GDC Consortium guidelines / Instruments and equipment/ Operator position/ Hands on practice)</p>  <p><strong><u>DAY 2:</u></strong></p> <p><strong><u>Morning session: 9 am to 1 pm</u></strong></p> <p>Posterior crown preparations:</p> <ul>   <li>FGC</li>   <li>Premolar PFM</li> </ul> <p>(GDC Consortium guidelines / Instruments and equipment/ Operator position/ Hands on practice)</p> <p><strong><u>Afternoon session: 2 pm to 6 pm</u></strong></p> <p>Operative preparations:</p> <ul>   <li>Class II (MO- DO- MOD)</li>   <li>Class IV + Composite build up</li>   <li>Temporary crown</li>   <li>Rest seat preparation</li>   <li>Amalgam filling</li> </ul> <p>(GDC Consortium guidelines / Instruments and equipment/ Operator position/ Hands on practice)</p>  <p><strong><u>Day 3:</u></strong></p> <p><strong><u>Morning session: 9 am to 1 pm</u></strong></p> <p><u>Restoration:</u></p> <ul>   <li>MOD Premolar</li>   <li>Class IV + Posterior cusp build up (Premolar)</li> </ul> <p>(GDC Consortium guidelines / Instruments and equipment/ Operator position/ Hands on practice)</p> <p><strong><u>Afternoon session: 2 pm to 6 pm</u></strong></p> <ul>   <li>Rubber dam</li>   <li>Root canal treatment</li>   <li>Access opening</li>   <li>Class IV + Posterior cusp build up (Molar)</li> </ul> <p>(GDC Consortium guidelines / Instruments and equipment/ Operator position/ Hands on practice)</p>',
          docID: 'oret',
          name: '3-Days Manikin ORE2',
          choices: [
            {
              '0': {
                price: 1500,
                name: '21 September - 23 September | Dr Ahmed AlKhalily | 9:00am - 6:00pm',
                inStock: 10
              },
              '1': {
                price: 1500,
                name: '28 September - 30 September | Dr Ahmed Shahla | 9:00am - 6:00pm',
                inStock: 0
              },
              '2': {
                price: 1500,
                name: '5 October - 7 October | Dr Shahla | 9:00am - 6:00pm',
                inStock: 10
              },
              '3': {
                price: 1500,
                name: '19 October - 21 October | Dr Shahla | 9:00am - 6:00pm',
                inStock: 10
              },
              '4': {
                price: 1500,
                name: '16 November - 18 November',
                inStock: 10
              },
              '5': {
                price: 1500,
                name: '7 December - 9 December',
                inStock: 10
              },
              '6': {
                price: 1500,
                name: '14 December - 16 December',
                inStock: 10
              },
              '7': {
                price: 1500,
                name: '21 December - 23 December',
                inStock: 10
              }
            }
          ],
          collectionName: 'ore'
        },
        {
          descrip: '<h4 style="font-size: 18px; line-height: 1.67;"><strong>Aims:</strong><br> To provide training in adult and pediatric basic life support and advice on equipment and drugs.</h4> <p>The training will provide an efficient and safe evaluation of patients presenting at the Dental Practice, with a wide spectrum of patient-related emergencies. The candidate will also refine and demonstrate those skills and elaborate further on how they will be put into practice and used effectively.</p> <p>With the wide range of clinical experience and “hands-on” teaching sessions, the candidates will develop and demonstrate an ability to perform a variety of medical emergency treatments in practice.</p>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>Objectives:</strong></h4> <p>By the end of the training session, the participants should be able to:</p> <ul>     <li>Identify at-risk and seriously ill patients using the ABCDE approach.</li>     <li>Describe how to take a blood glucose measurement from a patient.</li>     <li>Identify the appropriate drugs to use in an emergency.</li>     <li>Complete a progress assessment on the ABCDE approach.</li>     <li>Carry out an initial assessment of an unconscious patient.</li>     <li>Identify the appropriate help required.</li>     <li>Place the patient into the recovery position.</li>     <li>Monitor the patient using the ABCDE approach.</li>     <li>Describe the safe administration of oxygen.</li>     <li>Be aware of the treatment for choking.</li>     <li>Identify the most suitable method of establishing an airway depending on the clinical status of a patient.</li>     <li>Identify when to carry out basic life support.</li>     <li>Explain how to carry out basic life support.</li>     <li>Practice basic life support skills on adults and children.</li>     <li>Safely use an automated external defibrillator (AED).</li>     <li>Develop a standardized approach to managing a sick or critically ill patient.</li>     <li>Develop confidence and competence as a team member in initiating basic life support and the safe use of an AED.</li>     <li>Consolidate all the aspects of the self-instructed learning program.</li>     <li>Enable the safe handover of the patient to the ambulance team.</li> </ul>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>Learning outcomes:</strong></h4> <p>Develop competence in demonstrating resuscitation techniques, handling emergencies, and providing immediate management of anaphylactic reaction, hypoglycemia, upper respiratory obstruction, cardiac arrest, seizures, vasovagal attack, inhalation or ingestion of foreign bodies, and hemorrhage.</p> <p>Be familiar with the principles of first aid and the approach to symptom-based diagnosis.</p> <p>Please note that upon attendance and successful completion of the course, a certificate stating 4 verifiable hours of CPD will be issued to the candidate.</p>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>This one-day course covers:</strong></h4> <ul>     <li>Basic life support</li>     <li>All possible medical emergencies</li>     <li>Asthma</li>     <li>Anaphylaxis</li>     <li>Adrenocortical insufficiency</li>     <li>Angina</li>     <li>Myocardial infarction</li>     <li>Epilepsy</li>     <li>Stroke</li>     <li>Choking</li>     <li>Hypoglycemia</li>     <li>Vasovagal syncope</li>     <li>Bleeding</li>     <li>Needlestick injury</li> </ul> <p>Training on all available equipment:</p> <ul>     <li>BLS</li>     <li>Oxygen cylinder</li>     <li>Face mask</li>     <li>Spacer</li>     <li>Oropharyngeal airway</li>     <li>Intramuscular injection</li>     <li>Epipen/Anapen</li>     <li>All basic medication</li> </ul> <p>Mock Examination:</p> <ul>     <li>Basic Life Support & Medical Examination</li>     <li>One-to-one feedback and evaluation</li>     <li>Study material will be provided at the end of the session</li>     <li>Challenge yourself on timing, efficiency, and accuracy and we will be there to guide you throughout the course</li> </ul> <p><strong>Course timing: 9:00 am – 5:00 pm</strong></p>  <p>Don’t hesitate to join our full-day Medical Emergency course that will answer all your questions.<br> We’ll help you achieve confidence in both the practical and theoretical aspects of Medical Emergencies.</p> ',
          docID: 'oret',
          name: 'ORE2 Medical Emergencies',
          choices: [
            {
              '0': { price: 300, name: '18 September | 9:00am - 1:00pm', inStock: 10 },
              '1': { price: 300, name: '2 October | 9:00am - 1:00pm', inStock: 10 },
              '2': { price: 300, name: '16 October | 9:00am - 1:00pm', inStock: 10 },
              '3': { price: 300, name: '20 November | 9:00am - 1:00pm', inStock: 10 },
              '4': { price: 300, name: '4 December | 9:00am - 1:00pm', inStock: 10 },
              '5': { price: 300, name: '18 December | 9:00am - 1:00pm', inStock: 10 },
              '6': { price: 300, name: '27 December | 9:00am - 1:00pm', inStock: 10 }
            }
          ],
          collectionName: 'ore'
        },
        {
          descrip: '<h3 style="margin: 0; font-size: 24px; line-height: 1.4;">Why waste time trying to figure out what to do with DTP? Join our two-day intensive DTP course for an unbeatable price and it will definitely help put you on the right track.</h3> <div style="border-color:#e7e4e2;"></div>  <p><strong>Aims:</strong></p> <ol>     <li>Prepare the candidates for the DTP component of the ORE2 examination.</li>     <li>Familiarize participants with the DTP set-up, process, and content.</li>     <li>Help participants identify gaps in their skill and knowledge base as appropriate to the exam.</li> </ol>  <p><strong>Objectives:</strong></p> <p>In-depth discussion of various dental topics:</p> <ol>     <li>Pain history taking and management</li>     <li>Oral lesions history and management</li>     <li>TMJ disorders History and management</li>     <li>Paediatric dentistry (Nursing caries/fluoride/fissure sealant)</li>     <li>Dental traumatology</li>     <li>Orthodontics (Impacted canine/supernumerary teeth/removable appliance)</li> </ol>  <p><strong>Learning outcomes:</strong></p> <ol>     <li>Update the theoretical knowledge in restorative and paediatric dentistry.</li>     <li>Gain confidence in practice dental treatment, planning cases.</li>     <li>Gain skills in history taking and requesting special investigations</li>     <li>Improve dentist-patient communication skills</li>     <li>Gain skills in managing anxious, angry patients and breaking bad news</li> </ol>  <p>Upon successful completion of course attendance, a verifiable CPD certificate of 6 Hours will be issued to all candidates who post feedback on the website and on the FREE ORE feedback page.</p>  <h4 style="font-size: 18px; line-height: 1.67;"><strong>This three-day course covers:</strong></h4>  <p><strong>First day:</strong></p> <ul>     <li>Pain Cases</li>     <li>Periodontal diseases</li>     <li>Dentures</li>     <li>Restorative Dentistry</li> </ul>  <p><strong>Second day:</strong></p> <ul>     <li>Removable/fixed prosthodontics operative dentistry/Endodontics</li>     <li>Tooth Surface loss</li>     <li>Oral Medicine</li>     <li>All sections of DTP covered including history taking, investigations, X-ray report and presentation</li>     <li>Full DTP mock cases practice at the end of the session.</li> </ul>  <p><strong>Course timing: 9:00 am – 5:00 pm</strong></p> <p>The order in which topics are covered may vary.</p> <p>*Courses are non-refundable</p>  <div style="text-align: center; margin-top: 20px;">     <a href="#book-now" style="display: inline-block; padding: 10px 20px; background-color: #0355a6; color: #ffffff; text-transform: uppercase; text-decoration: none;">Book Now</a> </div>',
          docID: 'oret',
          name: 'ORE2 Two DTP Days',
          choices: [
            {
                '0': { price: 600, name: '16 September - 17 September', inStock: 10 },
                '1': { price: 600, name: '30 September - 1 October', inStock: 10 },
                '2': { price: 600, name: '14 October - 15 October', inStock: 10 },
                '3': { price: 600, name: '18 November - 19 November', inStock: 10 },
                '4': { price: 600, name: '2 November - 3 November', inStock: 10 },
                '5': { price: 600, name: '16 December 17 December', inStock: 10 },
                '6': { price: 600, name: '25 December 26 December', inStock: 10 }
            }
          ],
            collectionName: 'ore'
        },
        {
          descrip: '<p><strong><u>Join our two full day OSCE’s course and benefit from an in-depth explanation, one to one evaluation, and extended online resources to follow up your future progress until your exam.</u></strong></p>  <p><strong><u>ORE 2 – Objective Structured Clinical Reasoning</u></strong></p>  <p><strong>This full one day course includes:</strong></p> <ul>     <li>Written OSCE’s</li>     <li>Skilled OSCE’s</li>     <li>Actor OSCE’s</li> </ul>  <p>In a simulated exam condition, challenge yourself by completing:</p> <p><strong>70 OSCE’s</strong></p>  <p>Study material will be provided on completion.</p> <p>Challenge yourself on <strong>timing, efficiency, and accuracy</strong> and we’ll be there to guide you all the way.</p>  <p><strong>Course times: 9:00 am – 5:00 pm</strong></p>  <p><strong>Aims:</strong></p> <ol>     <li>Prepare the candidate for the OSCE’s component of the ORE2 examination.</li>     <li>Familiarize participants with the OSCE set-up, process, and content.</li>     <li>Help participants identify gaps in their skills and knowledge appropriate to the exam.</li> </ol>  <p><strong><u>Objectives:</u></strong></p> <p>In-depth discussion of fifteen actor stations:</p> <ol>     <li>Pain (history and management)</li>     <li>Oral lesions (history and management)</li>     <li>TMJ disorders (history and management)</li>     <li>Periodontal disease</li>     <li>Pediatric dentistry (nursing caries/fluoride/fissure sealants)</li>     <li>Dental traumatology</li>     <li>Orthodontics (impacted canines/supernumerary teeth/removable appliances)</li> </ol>  <p>In-depth discussion of multiple skilled/written OSCE’s:</p> <ol>     <li>Suturing</li>     <li>IOPA arrangement</li>     <li>Intramuscular injection</li>     <li>Radiographic film holders</li>     <li>Handwashing</li>     <li>Denture analysis</li>     <li>Splinting</li>     <li>Rubber dam placement</li>     <li>Surveying</li>     <li>Partial denture design</li> </ol>  <p><u><strong>Learning outcomes:</strong></u></p> <ol>     <li>Cover a total of 70 OSCE stations.</li>     <li>Gain confidence in performing essential skilled OSCE stations.</li>     <li>Gain confidence in handling challenging actor OSCE stations (management of angry patients, breaking bad news, and staff disciplinary procedures).</li>     <li>Discussion of recent updates in radiography, restorative, and pediatric dentistry guidelines.</li>     <li>Gain basic skills in history taking and clinical examination.</li> </ol>  <p>Please note that upon attendance and successful completion of the course, a certificate showing 16 verifiable hours of CPD will be issued to all candidates.</p> <p>*Courses are non-refundable.</p>  <p><strong>Course location: (TO BE CONFIRMED)</strong></p>',
          docID: 'oret',
          name: 'ORE2 Two Days OSCE',
          choices: [
            {
                '0': { price: 500, name: '19 September - 20 September', inStock: 10 },
                '1': { price: 500, name: '3 October - 4 October', inStock: 10 },
                '2': { price: 500, name: '17 October - 18 October', inStock: 10 },
                '3': { price: 500, name: '21 November - 22 November', inStock: 10 },
                '4': { price: 500, name: '5 November - 6 November', inStock: 10 },
                '5': { price: 500, name: '19 December 20 December', inStock: 10 },
                '6': { price: 500, name: '28 December 29 December', inStock: 10 }
            }
          ],
          collectionName: 'ore'
        },
        {
          descrip: '<div class="fusion-column-wrapper fusion-flex-column-wrapper-legacy">     <div class="fusion-text fusion-text-2" style="--awb-text-transform:none;">         <p><strong><span style="text-decoration: underline;">Join our 1-Day Medical Emergencies (ME) & Skilled OSCEs Course</span></strong></p>         <p><strong><span style="text-decoration: underline;">ORE 2 – Objective Structured Clinical Examinations (OSCE)</span></strong></p>         <p><strong>This full one day course includes:</strong></p>         <ul>             <li>Medical Emergencies (ME) scenarios</li>             <li>Skilled OSCE stations</li>             <li>Hands-on practice sessions</li>         </ul>         <p>In a simulated exam condition challenge yourself by completing:</p>         <p><strong>70 OSCE stations</strong></p>         <p>Study material will be provided on completion.</p>         <p>Challenge yourself on <strong>timing, efficiency, and accuracy</strong> and we’ll be there to guide you all the way.</p>         <p><strong>Course times: 9:00am – 5:00pm</strong></p>          <h4><strong>Aims:</strong></h4>         <ol>             <li>Prepare candidates for the Medical Emergencies (ME) and Skilled OSCE components of the ORE2 examination.</li>             <li>Familiarize participants with the ME and OSCE set-up, processes, and content.</li>             <li>Help participants identify and address gaps in their skills and knowledge.</li>         </ol>          <h4><strong>Objectives:</strong></h4>         <p>In-depth discussion of various medical emergency scenarios and skilled OSCE stations:</p>         <ol>             <li>Anaphylaxis management</li>             <li>Hypoglycemia management</li>             <li>Cardiac arrest response</li>             <li>Safe administration of emergency drugs</li>             <li>Use of oxygen cylinders and defibrillators</li>             <li>Suturing techniques</li>             <li>Intramuscular injection</li>             <li>Radiographic film holder usage</li>             <li>Rubber dam placement</li>         </ol>          <h4><strong>Learning outcomes:</strong></h4>         <ol>             <li>Master 70 OSCE stations, gaining confidence in performing essential skills and managing emergency situations.</li>             <li>Improve history-taking and clinical examination skills.</li>             <li>Learn to manage complex patient interactions and emergency scenarios effectively.</li>         </ol>          <p>Please note that upon attendance and successful completion of the course, a certificate showing 8 verifiable hours of CPD will be issued to all candidates.</p>         <p>*Courses are non-refundable.</p>         <p><strong>Course location: (TO BE CONFIRMED)</strong></p>     </div> </div>',
          docID: 'oret',
          name: '1-Day ME & Skilled OSCEs',
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


  ORE2Comperehensive()