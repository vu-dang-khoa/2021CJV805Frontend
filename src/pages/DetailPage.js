import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../assets/css/DetailPage.css';
import '../assets/css/App.css';

const DetailPage = (props) => {
    console.log(props.image);
    return (
        <div className="mainDiv">
            <Header/>
            <table>
                <tr>
                    <td>
                        <div className="detail-wrapper">
                            <img src={props.image} alt='image'></img>
                        </div>
                    </td>
                    <td>
                        <div className="detail-wrapper">
                            <p>{props.info.title}</p>
                        </div>
                        
                    </td>
                </tr>
            </table>
            <Footer/>
            
        </div>
    )
}

export default DetailPage;
