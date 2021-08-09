import React, {useState, useContext} from 'react';
import context from '../context/Context.js';


import Header from '../components/Header';
import Footer from '../components/Footer.js';

import '../assets/css/App.css';
import '../assets/css/Signin.css';

import SigninForm from '../components/SigninForm';

const Signin = () => {
    const {user,setUser} = useContext(context);

    return (
        <div className="mainDiv">
            <Header/>
            <SigninForm/>
            <Footer/>
        </div>
    )
}

export default Signin
