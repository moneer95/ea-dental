import React from "react"
import logoText from "../assets/images/homePage/logo-text.png"

export default function Footer() {
    return (
        <footer className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <img src={logoText} alt="EA Dental Logo" className="footer-logo" />
              <p><i className="fas fa-map-marker-alt"></i> EA Dental, P.O. HA5 3HR, Pinner, England</p>
              <p><i className="fas fa-envelope"></i> Email: info@ea-dental.com</p>
              <p><i className="fas fa-phone-alt"></i> Phone: +44 (0)744 793 1179</p>
              <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Courses</a>
                <a href="#">Products</a>
                <a href="#">Venue</a>
                <a href="#">Recruitment</a>
              </div>
            </div>
            <div className="footer-right">
              <div className="subscribe-box">
                <h3>Ask a question</h3>
                <p>Stay up to date with the latest news, announcements, and articles.</p>
                <form>
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © EA Dental, All rights reserved.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </footer>
      );
    
}