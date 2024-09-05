import React, {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';


import hero from "../../assets/images/logo.png"
import { courses, products, testimonials, faqs } from "./HomeArrays"
import star from "../../assets/images/homePage/star.svg"
import vision from "../../assets/images/homePage/vision.png"
import mission from "../../assets/images/homePage/mission.png"
import ceo from "../../assets/images/homePage/dr_ebtisam.webp"

export default function Home() {
    const navigate = useNavigate()
    return (
        <div className="home-wraper">
        <div class="grid-container">
            <div class="content">
                <div className="badges">
                    <span onClick={() => navigate('/categories?type=courses')} class="new-course">New Course Launched</span>
                    <span onClick={() => navigate('/products')} class="explore-prods">
                        Explore our Products
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                        <path d="M3.58325 8.50004H12.9166M12.9166 8.50004L8.24992 3.83337M12.9166 8.50004L8.24992 13.1667" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <p class="heading">Elevate your <span class="highlight">Dental Career</span> in the UK with our High-quality Dental Courses</p>
                <p class="subtext">Embark on a transformative journey with our Dental Academy. Add purpose to your career by joining a community dedicated to excellence in dental education.</p>
                <div class="buttons flex">
                    <button 
                      class="view-courses dark-btn"
                      onClick={() => navigate('/categories?type=courses')}
                    >
                      View Courses
                    </button>
                    <button 
                      class="view-products light-btn"
                      onClick={() => navigate('/products')}
                    >
                      View Products
                    </button>
                </div>
            </div>
            <div class="hero-logo">
                <img src={hero} alt="EA Dental Academy Logo" />
            </div>
        </div>

        <Courses />

        <Products />

        <MissionVision />

        <CompanyInfo />

        <Testimonials />

        <FAQ />

    </div>
    )
 

};


const Courses = () => {
    const navigate = useNavigate()

    return (
      <div className="courses-container">
        <h1>
          Explore our <span>Courses...</span>
        </h1>
        <p>Trusted by Professionals across the UK</p>
  
        <div className="courses-grid text-center">
          {courses.map((course, index) => (
            <div 
              className="course-item"
              onClick={() => navigate(course.to)}
            >
                <div >
                    <div>
                        <img src={course.image} alt={course.title} />
                    </div>
                </div>
                <div>
                    <h3>
                        {course.title}
                        <div className="rating flex">
                        {<img src={star} alt="" />}
                        {<img src={star} alt="" />}
                        {<img src={star} alt="" />}
                        {<img src={star} alt="" />}
                        {<img src={star} alt="" />}
                    </div>
                    </h3>

                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };




const Products = () => {
    const navigate = useNavigate()

    return (
        <div className="products-container">
        <h1>
            Explore our <span>ORE2 & LDS3 Products...</span>
        </h1>
        <p>Trusted by Professionals across the UK</p>

        <div className="products-grid text-center">
            {products.map((product, index) => (
            <div 
              className="product-item"
              onClick={() => navigate(`/products#${product.to}`)}
            >
                <div >
                    <div>
                        <img src={product.image} alt={product.title} />
                    </div>
                </div>
                <div className="product-title">
                    <h3>{product.title}</h3>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};



const MissionVision = () => {
  return (
    <div className="mission-vision-container">
      <div className="text-section">
        <div className="mission">
          <h2>Our Mission<span className="dot">.</span></h2>
          <p>
            We are dedicated to empowering dentists to reach their full potential
            and enhance their skills. We accomplish this by offering a blend of
            advanced instruction and intensive courses.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision<span className="dot">.</span></h2>
          <p>
            This objective becomes attainable through our diverse selection of
            affordable and high-quality courses, encompassing all aspects of the
            examination.
          </p>
        </div>
      </div>
      <div className="image-section">
        <div className="image-wrapper">
            <img src={vision} alt="Dental Image 1" className="image1"/>
            <img src={mission} alt="Dental Image 2" className="image2"/>
        </div>  
      </div>
    </div>
  );
};


const CompanyInfo = () => {
  return (
    <div className="company-info-container">
      <h1>
        Company Information<span className="dot">.</span>
      </h1>
      <p className="intro-text">
        We take immense pride in our successful track record having guided numerous students to attain their GDC registration and currently practicing dentistry in the UK.
      </p>

      <div className="info-card">
        <img src={ceo} alt="CEO/President" className="ceo-image"/>
        <div className="info-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="ceo-name">
            <strong>Ebtisam El Hamalawy</strong><br/>
            CEO/President
          </p>
        </div>
      </div>
    </div>
  );
};


const Testimonials = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
  };  

  return (
    <div className="testimonials-container">
      <div className="testimonials-text">
        <h1>testimonials with we work<span className="dot">.</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid.</p>
        <a href="https://www.google.com/maps/place/EA+Dental+Academy/@51.5943662,-0.3860595,17z/data=!3m1!5s0x48766cabc297c70d:0x52d06ae18b14c9b5!4m14!1m5!8m4!1e1!2s103763502108805699057!3m1!1e1!3m7!1s0x48760fd58dfaaaab:0x50b5be7373bee3ec!8m2!3d51.5943662!4d-0.3834846!9m1!1b1!16s%2Fg%2F11hcym52mm?entry=ttu&g_ep=EgoyMDI0MDkwMi4xIKXMDSoASAFQAw%3D%3D" target="blank" className="view-all">
          View all <span className="arrow">→</span>
        </a>
      </div>

      <div className="testimonial-slider">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-content">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.text}</p>
                <div className="quote-icon">
                  <svg viewBox="0 0 24 24">
                    <path d="M9 17h1V7H5v10h4v4h2v-4zm7 0h1V7h-5v10h4v4h2v-4z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            <span>{faq.question}</span>
            <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};


