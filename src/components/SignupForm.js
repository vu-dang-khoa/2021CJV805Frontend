import React from 'react'
import Header from '../components/Header';

import '../assets/css/App.css';
import '../assets/css/Signup.css';

const SignupForm = () => {
    return (
        <div className="login">
            <h2 className="title"> CREATE NEW ACCOUNT </h2>
            <form>
   
    

                <input type="text" className="text-inline" name="firstname" placeholder="first name"/>
                <input type="text" className="text-inline" name="lastname" placeholder="last name"/>
                
                <br/>
    
                <br/>

                <input type="password" className="text" name="email" placeholder="email"/>
                
                <br/>

                <input type="password" className="text" name="password" placeholder="password"/>
                
                <br/>

                <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                <label for="checkbox-1-1">I certify that i am at least 18 years old and that i agree to the <a className="term-and-policy" href="#" onClick="return false;">Terms and Policies</a></label>
    
                <button className="signin">
                    <b>Sign Up</b>
                </button>


                <hr/>
            </form>

            </div>
    )
}

export default SignupForm
