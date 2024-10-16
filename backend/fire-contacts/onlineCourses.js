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
                      name: "14th-18th of October online",
                      price: 1050,
                      date: "14-10-2024",
                      inStock: 15
                  },
              "1": 
                  {
                      name: "18-22 of November online",
                      price: 1050,
                      date: "18-11-2024",
                      inStock: 15
                  },
              "2": 
                  {
                      name: "2-6 of December online",
                      price: 1050,
                      date: "2-12-2024",
                      inStock: 15

                  },
              "3": 
                  {
                      name: "9-13 of December online",
                      price: 1050,
                      date: "13-9-2024",
                      inStock: 15
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
                name: "ORE2 Dental Treatment Planning Videos Subscription",
                docID: 'ore2',
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
                name: "ORE2 Theory course notes + Videos 10 DTP cases",
                docID: 'ore2',
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
                name: "ORE2 Dental Manikin Videos Subscription",
                docID: 'ore2',
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