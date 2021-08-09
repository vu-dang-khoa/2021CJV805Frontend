import React, {useContext, useState} from 'react';
import context from '../context/Context.js';
import {Link} from "react-router-dom";
import '../assets/css/Header.css';
import logo from '../assets/img/logo.png'

const Header = (props) => {

    const {user,setUser} = useContext(context);
    const {isLoggedIn,setIsLoggedIn} = useContext(context);

    var myInfoText = "";
    var signInText = "Sign in";
    var signInLink = "/signin";
    var signUpText = "Sign up";
    if (isLoggedIn){
        myInfoText = "Hello "+ user.firstName;
        signInText = "Log out";
        signUpText = "";
        signInLink="/";
    }
    else {
        myInfoText = "";
        signInText = "Sign in";
        signUpText = "Sign up";
    }

    const handleLoginLogout = ()=>{
        if (isLoggedIn){
            setUser({});
            setIsLoggedIn(false);
        }
        
    }

    return (
        <div className="Header">
            <div className="flex-container">
            <div className="logo"><Link to="/"><img src={logo} alt="logo"/></Link></div>
            <nav>
                <ul>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/tvshows">TVShows</Link></li>
                    <li><Link to="/search">Search</Link></li>
                    
                </ul>
            </nav>
            <div className="margin-left-flex">
                <nav>
                    <ul>
                        <li><Link to={signInLink} onClick={handleLoginLogout}>{signInText}</Link></li>
                        <li><Link to="/signup">{signUpText}</Link></li>
                        <li><Link to="/personal">{myInfoText}</Link></li>
                        
                    </ul>
                </nav>
            </div>
            </div>
        </div>
    )
}

export default Header
