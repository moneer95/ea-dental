import React from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/ea-dental-logo.png"

export default function Header() {
    const activeStyles = {
        backgroundColor: '#f36613',
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
                {/* <span className="fs-3">EA-DENTAL</span> */}
            </Link>
            <nav>
                <NavLink 
                    to="/"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                <NavLink 
                    end
                    to="categories?type=courses"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Courses
                </NavLink>
                <NavLink 
                    to="/products"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    PRODUCTS
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