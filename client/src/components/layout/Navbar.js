import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-content">
                    <h1 className="nav-logo">
                    <Link to="/">
                        <a href="!#">Student Hub</a>
                    </Link>
                </h1>
                <ul className="nav-links">
                    <li>
                    <Link to="/">
                        <a href="!#">About</a>
                    </Link>
                    </li>
                    <li>
                    <Link to="/register">
                        <a href="!#">Sign Up</a>
                    </Link>
                    </li>
                    <li>
                    <Link to="/">
                        <a href="!#">Login</a>
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
