import React, {useContext, useState} from 'react';
import context from '../context/Context.js';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../assets/css/App.css";


const PersonalPage = () => {

    const {user,setUser} = useContext(context);

    
    return (
        <div className="mainDiv">
            <Header/>
                
                <div style={{paddingLeft:"3em",paddingTop:"3em"}}>
                    <h2>Personal Info</h2>
                    <br/>
                    <p>First Name : {user.firstName}</p>
                    <br/>
                    <p>Last Name : {user.lastName}</p>
                    <br/>
                    <p>Email : {user.email}</p>
                    <br/>
                    <p>Username : {user.username}</p>
                    <br/>
                </div>

            <Footer/>
            
        </div>
    )
}

export default PersonalPage
