import React from 'react'

import '../assets/css/Signin.css';

const SigninForm = () => {
    return (
        <div className="login">
            <h2 className="title"> SIGN IN </h2>
            <form>
   
    

                <input type="text" className="text" name="username"/>
                <span>username</span>

                <br/>
    
                <br/>

                <input type="password" className="text" name="password"/>
                <span>password</span>
                <br/>

                <input type="checkbox" id="checkbox-1-1" className="custom-checkbox" />
                <label for="checkbox-1-1">Keep me Signed in</label>
    
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
