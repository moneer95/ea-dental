import React from "react"
import { Link } from "react-router-dom"

import hero from "../assets/images/hero.svg"

export default function Home() {
    return (
        <div className="home-container">
            <img src={hero} alt="hero image" width='100%' />
            <h1 className="text-gradient">Get our Plans & Pass your Exams.</h1>
            <p className="fs-6 ls-5">Embark on a transformative journey with our Dental Academy. Add purpose to your career by joining a community dedicated to excellence in dental education.</p>
            <Link to="categories">Find your van</Link>
        </div>
    )
};