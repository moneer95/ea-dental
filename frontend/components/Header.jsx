import React, {useState} from "react"
import { Link, NavLink } from "react-router-dom"

import logo from "../assets/images/ea-dental-logo.png"
import cartIcon from "../assets/images/cart-icon.svg"
import sandwich from "../assets/images/homePage/sandwich.svg"


export default function Header() {
    const activeStyles = {
        color: '#F36611',
        fontWeight: 600,
        borderRadius: 'var(--radius-xs, 4px)',
        background: 'var(--Error-50, #FEF3F2)',
        padding: 'var(--spacing-md, 8px) var(--spacing-lg, 12px)',
    }

    const [isToggled, setIsToggled] = useState(true);

    // Function to handle the toggle action
    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
    };

    
    return (
        <header>
            <img className="logo" src={logo} alt="logo"/>
            <nav className="navbar primary-navigation">
                <button 
                    onClick={handleToggle}
                    className="toggle-btn"
                >
                    <img src={sandwich} alt="toggle navigation" />
                </button>
            <ul 
                className={isToggled ? "toggled-nav nav-list" : "un-toggled-nav nav-list"}
                data-visible={isToggled ? "true" : "false"}
            >
                <li>
                    <NavLink 
                        to="/"
                        className="nav-link"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="categories?type=courses"
                        className="nav-link"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Courses
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/products"
                        className="nav-link"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/venue"
                        className="nav-link"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Venue
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/recruiment"
                        className="nav-link"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Recruitment
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/faq"
                        className="nav-link"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        FAQ
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/contact"
                        className="nav-link"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
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