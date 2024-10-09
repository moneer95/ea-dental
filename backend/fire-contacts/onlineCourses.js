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
              descrip: '<p>This course is a step by step guide towards your ORE2 preparation with continuous online support until you pass your exam. Boost your confidence and alleviate your stress.</p>  <p style="text-align: center;"><em><strong>We offer guided support for our ORE & LDS students <span style="font-size: 16px; color: #ff0000;">BEFORE, DURING </span><span style="font-size: 16px;">and </span><span style="font-size: 16px; color: #ff0000;">AFTER</span><span style="font-size: 16px;"> attending their ORE course sessions.</span></strong></em></p>  <p>All our instructors are professional dentists with years of experience teaching ORE and LDS courses in the United Kingdom.</p>  <p><strong><u>Course details:</u></strong></p>  <p><strong>Day 1&nbsp;</strong></p> <p><strong>Dental treatment planning:</strong> runs from 9:00am – 6:00pm</p> <ul>   <li>Pain cases</li>   <li>Periodontal disease</li>   <li>Relevant actor OSCE’s</li> </ul> <p>Covers all sections of DTP: (History taking/ Investigations/ X-ray report/ Presentation)</p>  <p><strong>Day 2</strong></p> <p><strong>Dental treatment planning </strong>runs from 9:00am – 6:00pm</p> <ul>   <li>Restorative dentistry</li>   <li>Dentures</li>   <li>Relevant actor OSCE’s</li> </ul> <p>All sections of DTP covered including: (History taking/ Investigations/ X-ray report/ Presentation)</p>  <p><strong>Day 3 </strong></p> <p><strong>Dental treatment planning</strong> runs from 9:00am – 1:00pm</p> <ul>   <li>Tooth Surface loss</li>   <li>Oral Medicine</li>   <li>Relevant actor OSCE’s</li> </ul> <p>Medical Emergencies: 2:00pm – 6:00pm</p> <p>(BLS/ All Possible Medical Emergencies: (Asthma/ Anaphylaxis/ Adrenocortical insufficiency/ Angina/ Myocardial infarction/ Epilepsy/ Stroke/ Choking/ Hypoglycemia/ Vasovagal syncope/ Bleeding/ Needlestick injury)</p> <p>Including training on all available equipment (BLS/ Oxygen cylinder/ Face mask/ Spacer/ Oropharyngeal airway/ Intramuscular injection/Epipen/Anapen)</p>  <p><strong>Day 4 </strong></p> <p>OSCE’s run from 9:00am – 6:00pm and cover:</p> <p>I. In-depth discussion of <strong>ALL</strong> skilled OSCE’s</p> <p>II. In-depth discussion of all written OSCE’s</p>  <p><strong>Day 5&nbsp;</strong></p> <p>Actor OSCE’s run from 9:00am – 6:00pm</p> <p><strong>Course times: 9:00am – 6:00pm</strong></p> <p><strong>Lunch and refreshments will be provided</strong></p> <p>Course materials will be provided at each session.</p> <p>*Courses are non-refundable</p>  <p><strong>Course location: Westbury House, 23-25 Bridge Street, Pinner HA5 3HR</strong></p>',
              docID: 'oret',
              name: 'ORE2 Comprehensive Online Course',
              choices: [
                {
                  '0': { price: 1050, name: '14 October - 18 October', inStock: 10, date: "14-10-2024" },
                  '1': { price: 1050, name: '18 November - 22 November', inStock: 10, date: "18-11-2024" },
                  '2': { price: 1050, name: '2 December - 6 December', inStock: 10, date: "2-12-2024" },
                  '3': { price: 1050, name: '9 December - 13 December', inStock: 10, date: "9-12-2024" },
                  '4': { price: 1050, name: '20 January - 24 January', inStock: 10, date: "20-1-2025" },
                  '5': { price: 1050, name: '27 January - 31 January', inStock: 10, date: "27-1-2025" }
                }
              ],
              collectionName: 'ore'
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






  ORE2Comperehensive()