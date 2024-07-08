import React from "react"
import { Link } from "react-router-dom"

import hero from "../assets/images/hero.jpg"
import vision from "../assets/images/FRONT-PAGE.webp"

export default function Home() {
    return (
        <div className="home-container">
            <img src={hero} alt="hero image" className="hero-img" width='100%'/>
            <h1 className="main-question">Elevate Your Dental Career in the UK with our High-Quality Dental Courses!</h1>
            <p className="fs-6 ls-5">Embark on a transformative journey with our Dental Academy. Add purpose to your career by joining a community dedicated to excellence in dental education.</p>
            <Link to="categories?type=courses" className="fs-6">Explore our Courses & Products</Link>
            <img src={vision} alt="vision" width="70%" style={{marginTop: '4rem'}}/>
        </div>
    )
};