import React from "react"
import { Link, NavLink } from "react-router-dom"

import logo from "../assets/images/ea-dental-logo.png"
import cartIcon from "../assets/images/cart-icon.svg"


export default function Header() {
    const activeStyles = {
        color: '#F36611',
        fontWeight: 600,
        borderRadius: 'var(--radius-xs, 4px)',
        background: 'var(--Error-50, #FEF3F2)',
        
        padding: 'var(--spacing-md, 8px) var(--spacing-lg, 12px)',

    }
    
    return (
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav className="navbar">
                <NavLink 
                    to="/"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Home
                </NavLink>
                <NavLink 
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
                    to="/venue"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Venue
                </NavLink>
                <NavLink 
                    to="/recruiment"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Recruiment
                </NavLink>
                <NavLink 
                    to="/recruiment"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    FAQ
                </NavLink>
                <NavLink 
                    to="/recruiment"
                    className="nav-link"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    Contact
                </NavLink>
            </nav>
            <div className="user-actions">
                <Link to="login" className="light-btn">
                    Login
                </Link>
                <NavLink 
                    to="cart"
                    className="dark-btn"
                    style={({isActive}) => isActive ? activeStyles : null}
                >
                    <img src={cartIcon} alt="cart icon" />
                    Cart
                </NavLink>
            </div>
        </header>
    )
}