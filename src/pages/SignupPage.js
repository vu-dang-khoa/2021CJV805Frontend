import React from 'react';
import Header from '../components/Header';
import SignupForm from '../components/SignupForm';

import '../assets/css/App.css';

const SignupPage = () => {
    return (
        <div className="mainDiv">
            <Header/>
            <SignupForm/>
            
        </div>
    )
}

export default SignupPage
