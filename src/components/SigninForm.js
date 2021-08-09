import React, {useContext, useState} from 'react';
import context from '../context/Context.js';
import {useHistory} from 'react-router-dom';

import '../assets/css/Signin.css';

const SigninForm = () => {

    const {isLoggedIn,setIsLoggedIn} = useContext(context);
    const {user,setUser} = useContext(context);
    var [formData, setFormData] = useState({});
    const history = useHistory();

    const setUsername = (e) => {
        formData.username=e.target.value;
      };
      const setPassword = (e) => {
        formData.password=e.target.value;
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
          fetch("https://agile-mountain-03205.herokuapp.com/auth",{
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
                    setUser(json.body[0]);
                    setIsLoggedIn(true);
                    history.push('/personal');
                })
            }
              
          }).catch(err=>{
            console.log(err);
          })
    };

    return (
        <div className="login" onSubmit={handleSubmit}>
            <h2 className="title"> SIGN IN </h2>
            <form>
   
    

                <input type="text" className="text" name="username" onChange={setUsername}/>
                <span>username</span>

                <br/>
    
                <br/>

                <input type="password" className="text" name="password" onChange={setPassword}/>
                <span>password</span>
                <br/>

    
                <button className="signin">
                    <b>Sign In</b>
                </button>


                <hr/>

                <a href="#" onClick="return false;">Forgot Password?</a>
            </form>

            </div>
    )
}

export default SigninForm
