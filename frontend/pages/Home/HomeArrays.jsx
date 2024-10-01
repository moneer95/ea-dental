import group1 from "../../assets/images/homePage/group-1.svg"
import group2 from "../../assets/images/homePage/group-2.svg"
import group3 from "../../assets/images/homePage/group-3.svg"
import group4 from "../../assets/images/homePage/group-4.svg"

import product1 from "../../assets/images/homePage/product1.png"
import product2 from "../../assets/images/homePage/product2.png"
import product3 from "../../assets/images/homePage/product3.png"
import product4 from "../../assets/images/homePage/product4.png"
import product5 from "../../assets/images/homePage/product5.png"
import product7 from "../../assets/images/homePage/product7.png"
import product8 from "../../assets/images/homePage/product8.png"
import product10 from "../../assets/images/homePage/product10.png"
import product11 from "../../assets/images/homePage/product11.png"
import product12 from "../../assets/images/homePage/product12.jpeg"
import product13 from "../../assets/images/homePage/product13.png"

import student1 from "../../assets/images/homePage/student1.jpeg"
import student2 from "../../assets/images/homePage/student2.png"
import student3 from "../../assets/images/homePage/student3.png"
import student4 from "../../assets/images/homePage/student4.png"
import student5 from "../../assets/images/homePage/student5.png"

export const courses = [
    {
      title: 'ORE Courses',
      image: group1, 
      rating: 5,
      to: "/categories/ore"
    },
    {
      title: 'LDS Courses',
      image: group2, 
      rating: 5,
      to: "/categories/lds"
    },
    {
      title: 'Revision Sessions',
      image: group3, 
      rating: 5,
      to: "/categories/revisions"
    },
    {
      title: 'Mock Exams',
      image: group4, 
      rating: 5,
      to: "/categories/mocks"
    },
  ];

  export const products = [
    {
      title: 'Instruments',
      image: product13,
      to: "Instruments" 
    },
    {
      title: 'Endodontics',
      image: product5,
      to: "Endodontics" 
    },
    {
      title: 'Restorative',
      image: product3,
      to: "Restorative" 
    },
    {
      title: 'Burs',
      image: product10,
      to: "Burs" 
    },
    {
      title: 'Equipment',
      image: product8,
      to: "Equipment" 
    },
    {
      title: 'Impression Materials',
      image: product7,
      to: "ImpressionMaterials" 
    },
    {
      title: 'Kits',
      image: product11,
      to: "Kits" 
    }
  ];



  

  export const testimonials = [
    {
      name: "Visakh R Nair",
      text: "I attended a one day mock session for OSCE, DTP and ME with EA Dental and it was super helpful for me to crack the ORE part 2 exam in my first attempt. It gave me an idea of what to expect in a real exam and how to effectively deal with time management. Dr. Ebtisam is kind, super supportive and was always there to clear all my doubts. Thanks a lot Dr. Ebtisam for all the help. I recommend this course to all ORE aspirants.",
      image: student1
    },
    {
      name: 'Apil Basnet',
      text: "EBitassam is the hacker of ORE exams by all her experience. Sitting at her own institution EA dental academy, she knows what exactly is coming in the exams be it osces, or manikin or dtp and medical even a few emergencies cases. I have never seen tutor like her and her team with Dr Ahmed and Dr Shahleh are the best for manikin. I can\'t express my gratitude to them on words, you have to witness yourself.Thank you EA dental team. 🙏",
      image: student2
    },
    {
      name: 'Tina Israni',
      text: "I recently attended the ORE mock exam and crash course by Dr. Ebtisam at EA Dental, and I highly recommend it. The hands-on experience with skilled OSCEs and the use of the ME manikin were both incredibly helpful in improving my technique and confidence. The online revision lectures were comprehensive and easy to follow. Dr. Ebtisam and her team provided helpful predictions and support pre-exam, ensuring I focused on the most critical areas. Overall, this course exceeded my expectations and greatly contributed to my success in the exam.",
      image: student3
    },
    {
      name: 'Hamza Adeel',
      text: "I took the EA dental Manikin and Theory academy. The Theory from EA is the best, there is no comparison to anywhere else. Just make sure to take the revision lectures before the exam. Dr Ebtissam is extremely helpful. I would not have been able to practice for manikin before the exam had it not been for her generosity and understanding. The mocks are very well made and professional, I recommend taking them 100% as they gave me a lot of confidence going into the exam.",
      image: student5
    },
    {
      name: 'Areej Saad',
      text: "Honestly it is one of the best courses it gives you all the support needed for the exam. It also gives you an exact reflection of how the exam is which really helps. In regards to the manikin part of the course there’s always a very efficient and fast response for the preps which help improve your skills. Regarding the theory you are provided with all the needed materials which are very reliable and also they teach the right way to approach it. I personally would recommend this course 100% for the ORE part 2 exam.",
      image: student4
    }
  ]

  export const faqs = [
    {question: <a>What’s is the structure of ORE 1?</a>, answer: <div className="faq-answer" data-tab="1" role="region">It consists of two computer-based exam papers:
      <ul>
      <li>Paper A covers clinically applied dental science and clinically applied human disease.</li>
      <li>Paper B covers aspects of clinical dentistry, including law and ethics and health and safety.</li>
      </ul>
      Each paper lasts three hours and is made up of multiple short answer questions (extended matching questions and single best answer questions).</div>}, {'question': <a>Where is the exam based and how much does it cost?</a>, 'answer': <div className="faq-answer" data-tab="2" role="region">The Part 1 exam is held at King’s College London and costs £806. Please note, the exam fee is not normally refundable.</div>}, {'question': <a>When is the ORE conducted?</a>, 'answer': <div className="faq-answer" data-tab="3" role="region">Check the below link for all future exam dates:
      
      <a href="https://www.gdc-uk.org/registration/overseas-registration-exam/ore-part-1">https://www.gdc-uk.org/registration/overseas-registration-exam/ore-part-1</a></div>}, {'question': <a>How can I apply for the exam?</a>, 'answer': <div className="faq-answer" data-tab="4" role="region">To apply for the exam, please follow these steps:
      <ol>
      <li>Visit the GDC (General Dental Council) website. You can access their website by typing “GDC” into your preferred search engine.</li>
      <li>Navigate to the ORE section. Look for the tab or menu option related to the Overseas Registration Exam (ORE) on the GDC website.</li>
      <li>Access the application form. Within the ORE1 section, you should find a link or button to download the ORE application form. Click on it to initiate the download.</li>
      <li>Review the guidance document. Along with the application form, there should be an attached guidance document. It contains important instructions and explanations on how to complete the application accurately. Take the time to carefully read through it.</li>
      <li>Complete the application form. Open the downloaded application form and fill in the required information. Ensure that you provide accurate and up-to-date details as requested.</li>
      <li>Submit the application. Once you have completed the application form, follow the instructions provided to submit it to the GDC. This will involve mailing it to the designated address. Refer to the guidance document or the GDC website for specific submission instructions.</li>
      <li>Await confirmation and further instructions. The GDC will review your application and communicate with you regarding the next steps in the process usually within 6 weeks. Be patient during this period and check your email regularly for any updates or requests for additional documentation.</li>
      </ol>
      For more detailed information and to access the ORE application form, I recommend visiting the official GDC website and navigating to the ORE section. The link you provided (<a href="https://www.gdc-uk.org/registration/overseas-registration-exam/applying-for-ore">https://www.gdc-uk.org/registration/overseas-registration-exam/applying-for-ore</a>) should direct you to the specific page with relevant details.
      
      Best of luck with your application, and I hope you successfully embark on your journey towards the ORE exam</div>}, {'question': <a>Where is the exam based and how much does it cost?</a>, 'answer': <div className="faq-answer" data-tab="5" role="region"><p>The Part 1 exam is held at King’s College London and costs £806. Please note, the exam fee is not normally refundable.</p></div>}, {'question': <a>What’s is the difference between ORE &amp; LDS?</a>, 'answer': <div className="faq-answer" data-tab="6" role="region"><p><strong>ORE vs. LDS—Unlocking Your Dental Future!</strong></p><p>When it comes to obtaining the coveted GDC number and practicing dentistry in the UK, both the ORE (Overseas Registration Exam) and LDS (Licentiate Dental Surgery) exams offer a similar outcome. Let’s dive deeper into the unique features of each exam and the added benefits they bring:</p><p>ORE: The ORE, conducted by the esteemed General Dental Council (GDC), is a rigorous exam that assesses your knowledge and skills in dentistry. Successfully completing the ORE grants you the right to practice dentistry in the UK. It serves as your gateway to a thriving dental career, enabling you to pursue your passion and contribute to the oral health of patients. For more comprehensive information on the ORE, please refer to the link provided.</p><p>LDS: The LDS exam, administered by the prestigious Royal College of Surgeons, not only grants you the right to practice dentistry in the UK but also bestows you with an additional title—Licentiate Dental Surgery (LDS). This distinguished title signifies your achievement and dedication to the field of dentistry, enhancing your professional standing. For a deeper understanding of the LDS exam, please consult the link provided.</p></div>}, {'question': <a>Do you recommend I book ORE or LDS?</a>, 'answer': <div className="faq-answer" data-tab="7" role="region"><strong>Level Up Your Opportunities: Choose ORE for Maximum Access and Success!</strong>
      
      When it comes to booking your exam, we highly recommend setting your sights on the ORE (Overseas Registration Exam). Why, you ask? Well, let us unveil the advantages that make ORE the ultimate choice for aspiring dental professionals like yourself.
      
      First and foremost, ORE exams are conducted more frequently, giving you greater flexibility in selecting a date that suits your schedule. With more opportunities throughout the year, you can plan your preparation and revision with ease.
      
      Not only that, but ORE also accepts a larger number of candidates per exam. This means your chances of securing a spot and advancing towards your dream career are significantly higher compared to the LDS (Licentiate Dental Surgery) exam.</div>}, {'question': <a>How long do I need to prepare for the exam?</a>, 'answer': <div className="faq-answer" data-tab="8" role="region">The road to exam success begins with proper planning. Depending on your background, we recommend allocating the ideal amount of time to maximize your chances of acing the ORE1 exam.
      
      If you’ve completed your BDS in English, buckle up for a focused 10-week journey. Our comprehensive curriculum covers both basic sciences and clinical dental subjects, ensuring you’re well-prepared to conquer every challenge.
      
      For non-native English speakers or those new to dentistry in English, we suggest extending your preparation time to a solid 20 weeks. This allows ample opportunity to revise and become comfortable with clinical case-based scenarios, guaranteeing your confidence on exam day.
      
      Don’t leave your success to chance—invest in the right timeframe to unleash your full potential. Start your countdown to triumph today!</div>}, {'question': <a> Which books do you recommend I use for ORE- LDS preparation?</a>, 'answer': <div className="faq-answer" data-tab="9" role="region">For ORE-1 / LDS-1 preparation, I recommend the following books:
      <ol>
      <li><strong><u>Oxford Handbook of Applied Dental Sciences:</u></strong> This book provides a comprehensive overview of the applied dental sciences, covering topics such as anatomy, physiology, pathology, pharmacology, and more. It serves as a valuable reference for the basic science subjects tested in the ORE exam.</li>
      <li><strong><u>Oxford Handbook of Clinical Dentistry (7th edition): </u></strong>This handbook is a popular resource among dental students and practitioners. It offers practical guidance and concise information on clinical topics relevant to dentistry. It covers various specialties and provides clinical tips and guidelines.</li>
      <li><strong><u>Scully’s Medical Problems in Dentistry (7th edition):</u></strong> This book focuses on medical conditions that can impact dental treatment. It provides insights into the management of patients with medical issues, helping you develop a comprehensive understanding of dental care in the context of various medical conditions.</li>
      <li><strong><u>Master Dentistry: Volume 1:</u></strong> This book covers essential dental knowledge and clinical skills required for general dental practice. It provides a structured approach to different topics, including restorative dentistry, periodontology, endodontics, and more.</li>
      <li><strong><u>Master Dentistry: Volume 2:</u></strong> Building upon the first volume, this book delves deeper into advanced topics in dentistry, including prosthodontics, orthodontics, oral medicine, and oral surgery. It offers detailed explanations and practical tips for these specialized areas.</li>
      <li><strong><u>Essentials of Dental Radiography and Radiology:</u></strong> Radiography and radiology play a crucial role in dental practice. This book provides an understanding of dental imaging techniques, interpretation of radiographs, and the diagnostic process related to oral and maxillofacial radiology.</li>
      </ol>
      These books serve as valuable resources to supplement your ORE-1 preparation. Remember to consult the official exam syllabus and guidelines to ensure you cover all the necessary topics effectively. Additionally, it can be helpful to access online resources, practice questions, and mock exams to further enhance your preparation.</div>}, {'question': <a>How does ORE and LDS preparation differ?</a>, 'answer': <div className="faq-answer" data-tab="10" role="region">When it comes to preparing for the ORE (Overseas Registration Exam) and LDS (Licentiate Dental Surgery) exams, there are a few key differences to consider. While the dental subjects you need to revise for both exams are the same, the focus and scope of each exam vary slightly:
      
      <strong><u>ORE Preparation:</u></strong> To excel in the ORE exam, you will need to cover both basic science subjects and clinical dental subjects. This means your preparation will encompass a broad range of topics, including subjects like anatomy, pathology, pharmacology, dental materials, and more. The ORE exam evaluates your knowledge and skills across various areas of dentistry, ensuring you have a comprehensive understanding of the field.
      
      <strong><u>LDS Preparation:</u></strong> On the other hand, LDS exam preparation places a greater emphasis on clinical dental subjects. While the core dental subjects remain the same, LDS specifically focuses on evaluating your knowledge and competence in clinical aspects of dentistry. Notably, you won’t need to study physiology or embryology when preparing for LDS1, as these topics are not included in the exam</div>}, {'question': <a>Do I need to enrol onto a preparatory course for ORE1 or LDS1?</a>, 'answer': <div className="faq-answer" data-tab="11" role="region">While many students opt for self-study, we know the secret to skyrocketing your success lies in our preparatory course.
      
      Say goodbye to information overload and hello to targeted, effective revision. Our course equips you with insider knowledge on the exam’s question patterns, empowering you to prioritize the right topics. No more wasting time on irrelevant material!
      
      Join the ranks of successful students who’ve streamlined their studies and achieved outstanding results. Enroll now to unlock the key to exam mastery and take charge of your future.</div>}, {'question': <a>I am not comfortable studying from the online platform, can I get the notes printed as a hard copy?</a>, 'answer': <div className="faq-answer" data-tab="12" role="region">Absolutely! We understand that studying from printed materials can provide a more comfortable and convenient learning experience. You have the option to purchase the notes as a hard copy.
      
      Please note that the hard copy version will reflect the most updated version available at the time of your purchase. We regularly update our notes every 6 months to align with the latest exam topics, ensuring you have the most relevant and current information. However, please be aware that purchasing a hard copy means you won’t have access to the continuous updates beyond your purchase date.
      
      When acquiring the hard copy, you can choose between a colored or black and white version based on your preference. For further details and to make your selection, kindly click on the link provided.
      
      Alternatively, if you prefer to have access to continuous updates and the convenience of an online platform, we recommend considering an online subscription for the course notes. This option will grant you uninterrupted access to all updates throughout your subscription duration.
      
      Choose the option that suits your study style and preferences, and embark on your journey towards ORE1 success with confidence!</div>},
      {
        question: 'What exactly does EA Dental do?',
        answer:
          '',
      },
      {
        question: 'How long as EA Dental been in business?',
        answer: '',
      },
      {
        question: 'What are major courses EA Dental offers?',
        answer: '',
      },
      {
        question: 'Does EA Dental sell the product to wholesale dealers?',
        answer: '',
      },  
];