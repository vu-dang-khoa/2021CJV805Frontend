import React, {useContext, useState} from 'react';
import context from '../context/Context.js';
import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/App.css';
import '../assets/css/Signup.css';

const SignupForm = () => {

    const {user,setUser} = useContext(context);
    var [formData, setFormData] = useState({role:"employee"});

    const handleSubmit = (e) => {
        e.preventDefault();       
        
          fetch("https://agile-mountain-03205.herokuapp.com/users",{
            mode: 'cors',
            method: 'POST',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify(formData),
            
          }).then(res=>{
            var temp = res.clone();
            console.log(res.status);
            if (!res.ok){
                res.json().then((errorJson)=>{
                    window.alert(errorJson.message);
                })
            }else {
                res.json().then((json)=>{
                    window.alert(json.message);
                })
            }
            return temp.json();
              
          }).then((json)=>{
            console.log(json.message);
          }).catch(err=>{
            console.log(err);
          })
    };

      const setFirstName = (e) => {
        formData.firstName=e.target.value;
      };
      const setLastName = (e) => {
        formData.lastName=e.target.value;
      };
      const setEmail = (e) => {
        formData.email=e.target.value;
      };
      const setUsername = (e) => {
        formData.username=e.target.value;
      };
      const setPassword = (e) => {
        formData.password=e.target.value;
      };
    return (
        <div className="login"> 
            <h2 className="title"> CREATE NEW ACCOUNT </h2>
            <form onSubmit={handleSubmit}>
   
    

                <input type="text" className="text-inline" name="firstname" placeholder="first name" onChange={setFirstName}/>
                <input type="text" className="text-inline" name="lastname" placeholder="last name" onChange={setLastName}/>
                
                <br/>
    
                <br/>

                <input type="text" className="text" name="email" placeholder="email" onChange={setEmail}/>
                
                <br/>

                <input type="text" className="text" name="username" placeholder="username" onChange={setUsername}/>
                
                <br/>

                <input type="password" className="text" name="password" placeholder="password" onChange={setPassword}/>
                
                <br/>

                
                <label for="checkbox-1-1"><a className="term-and-policy" href="#" onClick="return false;">Terms and Policies</a></label>
    
                <button className="signin">
                    <b>Sign Up</b>
                </button>


                <hr/>
            </form>

            </div>
    )
}

export default SignupForm
