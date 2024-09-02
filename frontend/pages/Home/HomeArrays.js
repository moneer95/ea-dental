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
    {
      question: 'What exactly does EA Dental do?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
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