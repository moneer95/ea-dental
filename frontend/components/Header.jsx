import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/Untitled design (1).png"

export default function Header() {
    const activeStyles = {
        backgroundColor: '#FF914D',
        // textDecoration: 'underline',

        // color: 'whitesmoke',
    }
    
    function fakeLogOut() {
        localStorage.removeItem("loggedin")
    }
    
    return (
        <header className="header">
            <Link  to="/" className="logo-div">
                <img className="logo" src={logo} alt="logo"/>
                <span className="fs-3">EA-DENTAL</span>
            </Link>
            <nav>
                <NavLink 
                    to="host"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink 
                    to="about"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink 
                    to="categories"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Courses
                </NavLink>
                <NavLink 
                    to="cart"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Cart
                </NavLink>
                <Link to="login" className="login-link">
                    <img 
                        src="../assets/images/avatar-icon.png" 
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
            </nav>
        </header>
    )
}