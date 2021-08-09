import React, {useState, useContext} from 'react';
import {Link} from "react-router-dom";

import Header from '../components/Header.js';
import Slideshow from '../components/Slideshow.js';
import FeaturedSection from '../components/FeaturedSection.js';
import Footer from '../components/Footer.js';

import context from '../context/Context.js';

import '../assets/css/App.css';


const Homepage = () => {
    
    const {user,setUser} = useContext(context);
    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);
    var [featuredMoviesInfo,setFeaturedMoviesInfo] = useState([]);
    var [featuredTvshowsInfo,setFeaturedTvshowsInfo] = useState([]);
    const [heroSectionArray,setHeroSectionArray] = useState([]);
    const [contentSectionArray,setContentSectionArray] = useState([]);
    


        if (featuredMoviesInfo.length==0){
            fetch("https://agile-mountain-03205.herokuapp.com/movies/featured",{
                mode: 'cors'
              }).then(res=>{
                console.log("---------------------------------\n"+"-------------------------------------------------------------")
                console.log(res);
              var temp = res.clone();
              return temp.json();
            }).then(json=>{
                featuredMoviesInfo=json.body;
                setFeaturedMoviesInfo(json.body);
                console.log(featuredMoviesInfo);
            }).catch(err=>{
              console.log(err);
            })
          }
    
        if (featuredTvshowsInfo.length==0){
            fetch("https://agile-mountain-03205.herokuapp.com/tvshows/featured",{
                mode: 'cors'
              }).then(res=>{
            var temp = res.clone();
            return temp.json();
            }).then(json=>{
                featuredTvshowsInfo=json.body;
                setFeaturedTvshowsInfo(json.body);
            }).catch(err=>{
              console.log(err);
            })
        }
    
    
 
    
    
    
    
    
    
    
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
            <div className="wrapper" >
            <h3>Featured movies section</h3>
            <FeaturedSection array={featuredMoviesInfo}/>
            </div>
            <div className="wrapper">
            <h3>Featured TV Shows section</h3>
            <FeaturedSection array={featuredTvshowsInfo}/>
            </div>
            <div className="wrapper">
            <h3>Content section(cinema spotlight)</h3>
            <p>
                Random shows are featured here
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
