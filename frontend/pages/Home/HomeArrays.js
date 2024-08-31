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
      image: student1
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