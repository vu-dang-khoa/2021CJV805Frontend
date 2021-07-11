import React, {useContext} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import context from '../context/Context';
import '../assets/css/DetailPage.css';
import '../assets/css/App.css';

const DetailPage = (props) => {
    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);

    return (
        <div className="mainDiv">
            <Header/>
            <table>
                <tr>
                    <td>
                        <div className="detail-wrapper">
                            <img src={props.item.image} alt='image'></img>
                        </div>
                    </td>
                    <td>
                        <div className="detail-wrapper">
                            <h4 className="movie-title">{props.item.title}</h4>
                            <br>
                            </br>
                            <p>{props.item.description}</p>
                        </div>
                        
                    </td>
                </tr>
            </table>
            <div className="detail-wrapper" id="buttons-wrapper">
            <button className="buy-rent-button">
                    <b>Buy : ${props.item.buy}</b>
                </button>
                <button className="buy-rent-button">
                    <b>Rent : ${props.item.rent}</b>
                </button>
                </div>
            <Footer/>
            
        </div>
    )
}

export default DetailPage;
