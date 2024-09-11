import React from "react"
import { useNavigate } from "react-router-dom";

import logoText from "../assets/images/homePage/logo-text.png"
import x from "../assets/images/x.svg"
import facebook from "../assets/images/facebook.svg"
import instagram from "../assets/images/instagram.svg"

export default function Footer() {
    
    const navigate = useNavigate(); // useNavigate hook to programmatically navigate

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the form from submitting the traditional way
      navigate('/contact'); // Navigate to the Contact Us page
    };

    return (
        <footer className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <img src={logoText} alt="EA Dental Logo, best dental courses in the UK" className="footer-logo" />
              <p><i className="fas fa-map-marker-alt"></i> EA Dental, P.O. HA5 3HR, Pinner, England</p>
              <p><i className="fas fa-envelope"></i> Email: info@ea-dental.com</p>
              <p><i className="fas fa-phone-alt"></i> Phone: +44 (0)744 793 1179</p>
              <div className="footer-links">
                <a href="/">Home</a>
                <a href="/categories?type=courses">Courses</a>
                <a href="/products">Products</a>
                <a href="/venue">Venue</a>
                <a href="/recruitment">Recruitment</a>
                <a href="/contact">Contact</a>
              </div>
            </div>
            <div className="footer-right">
              <div className="subscribe-box">
                <h3>Ask a question</h3>
                <p>Stay up to date with the latest news, announcements, and articles.</p>
                <form onSubmit={handleSubmit}>
                  <button type="submit">Ask your Question</button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © EA Dental, All rights reserved.</p>
            <div className="social-icons">
              <a href="https://x.com/EaDental" target="_blank"><i className="fab fa-twitter"><img src={x} alt="ea-dental twitter" /></i></a>
              <a href="https://www.instagram.com/ea.dental/" target="_blank"><i className="fab fa-linkedin-in"><img src={instagram} alt="ea-dental instagram" /></i></a>
              <a href="https://www.facebook.com/EA.Dental.Courses/" target="_blank"><i className="fab fa-facebook-f"><img src={facebook} alt='ea-dental facebook' /></i></a>
            </div>
          </div>
        </footer>
      );
    
}