import React from 'react';
import '../assets/css/Footer.css';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <p className="footer-item">FAQ</p>
                <p className="footer-item">Misc</p>
                <p className="footer-item">Privacy</p>
                <p className="footer-item">Account</p>
            </div>
            <div className="footer-section">
                <p className="footer-item">Help center</p>
                <p className="footer-item">Job</p>
                <p className="footer-item">Terms of use</p>
                <p className="footer-item">Contact us</p>
            </div>
            
             <div className="line">
                 
             </div>
             <div>
            <small>
                
                The db.json is deployed in a seperate heroku app <a className = "inline-block" href="https://frozen-eyrie-11666.herokuapp.com/">link</a>. <p>Adding [/movies] or [/tvshows] for json or adding /[movie-name.jpg](example /Inception.jpg) for image</p>
                 db.json contains titles and descriptions of movies and tv shows<br></br>
            <br></br>Creator of this app : Khoa Vu, id 127735207</small>
            </div>
            
            
        </footer>
    )
}

export default Footer
