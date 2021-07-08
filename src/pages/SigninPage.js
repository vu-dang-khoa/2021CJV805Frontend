import React from 'react'

import Header from '../components/Header';

import '../assets/css/App.css';
import '../assets/css/Signin.css';

import SigninForm from '../components/SigninForm';

const Signin = () => {
    return (
        <div className="mainDiv">
            <Header/>
            <SigninForm/>

        </div>
    )
}

export default Signin
