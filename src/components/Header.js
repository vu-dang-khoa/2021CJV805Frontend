import React from 'react';
import {Link} from "react-router-dom";
import '../assets/css/Header.css';
import logo from '../assets/img/logo.png'

const Header = (props) => {

    const logInSectionMessage = "Sign in/Sign up"
    return (
        <div className="Header">
            <div className="flex-container">
            <div className="logo"><Link to="/"><img src={logo} alt="logo"/></Link></div>
            <nav>
                <ul>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tvshows">TVShows</Link></li>
                </ul>
            </nav>
            <div className="margin-left-flex">
                <nav>
                    <ul>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
            </div>
        </div>
    )
}

export default Header
