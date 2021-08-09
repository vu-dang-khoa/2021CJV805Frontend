import React, {useState, useContext} from 'react';
import context from '../context/Context.js';

import Header from '../components/Header';
import SignupForm from '../components/SignupForm';
import Footer from '../components/Footer.js';

import '../assets/css/App.css';

const SignupPage = () => {
    const {user,setUser} = useContext(context);

    return (
        <div className="mainDiv">
            <Header/>
            <SignupForm/>
            <Footer/>
        </div>
    )
}

export default SignupPage
