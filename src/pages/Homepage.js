import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";

import Header from '../components/Header.js';
import Slideshow from '../components/Slideshow.js';
import FeaturedSection from '../components/FeaturedSection.js';
import Footer from '../components/Footer.js';

import context from '../context/Context.js';

import '../assets/css/App.css';


const Homepage = () => {
    
    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);
    const [heroSectionArray,setHeroSectionArray] = useState(moviesInfo.slice(0,6).concat(tvshowsInfo.slice(0,6)));
    const [contentSectionArray,setContentSectionArray] = useState(tvshowsInfo.slice(7,11));
    if (heroSectionArray.length == 0 ){
        setTimeout(()=>{
            setHeroSectionArray(moviesInfo.slice(0,6).concat(tvshowsInfo.slice(0,6)));
            setContentSectionArray(tvshowsInfo.slice(7,9).concat(moviesInfo.slice(8,10)));
        },2000);
        
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
            <FeaturedSection array={moviesInfo.slice(0,6)}/>
            </div>
            <div className="wrapper">
            <h3>Featured TV Shows section</h3>
            <FeaturedSection array={tvshowsInfo.slice(0,6)}/>
            </div>
            <div className="wrapper">
            <h3>Content section(cinema spotlight)</h3>
            <p>
                Section features some rather exciting shows but not enough as to be a part of the feature section above 
            </p>
            <FeaturedSection array={contentSectionArray}/>
            {contentSectionArray.map((item,index)=>{
                return (
                    <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                    </div>
                    )
            })}
            </div>
            
            <Footer/>

            
            
        </div>
        
    )
}

export default Homepage
