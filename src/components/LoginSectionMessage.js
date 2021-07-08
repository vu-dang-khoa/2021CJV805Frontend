import React from 'react';
import '../assets/css/Header.css';;

const LoginSectionMessage = (props) => {
    return (
        <div className="margin-left-flex">
            <a href={props.link}>{props.message}</a>
        </div>
    )
}

export default LoginSectionMessage
