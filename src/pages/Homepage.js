import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";

import Header from '../components/Header.js';
import Slideshow from '../components/Slideshow.js';
import FeaturedSection from '../components/FeaturedSection.js';
import Footer from '../components/Footer.js';

import context from '../context/Context.js';

import '../assets/css/App.css';
import MoviesPage from './MoviesPage.js';


const Homepage = () => {
    
    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);
    const [heroSectionArray,setHeroSectionArray] = useState(moviePosters.slice(0,6).concat(tvshowPosters.slice(0,6)));
    if (heroSectionArray.length == 0 ){
        setTimeout(()=>{
            setHeroSectionArray(moviePosters.slice(0,6).concat(tvshowPosters.slice(0,6)));
        },1000);
        
    }
    return (
        <div className="mainDiv">
            <Header/>
            <div className="wrapper">
            <h3>Hero section</h3>
            <Slideshow array={heroSectionArray}/>
            </div>
            <div className="wrapper">
            <h3>Featured movies section</h3>
            <FeaturedSection array={moviePosters.slice(0,6)}/>
            </div>
            <div className="wrapper">
            <h3>Featured TV Shows section</h3>
            <FeaturedSection array={tvshowPosters.slice(0,6)}/>
            </div>
            <div className="wrapper">
            <h3>Content section(cinema spotlight)</h3>
            <p>
                Section features some rather exciting shows but not enough so as to be a part of the feature section above 
            </p>
            <FeaturedSection array={tvshowPosters.slice(7,11)}/>
            </div>
            <Footer/>

            <Link to="/DarkKnight">Test</Link>
            
        </div>
        
    )
}

export default Homepage
