import React, {useContext} from 'react';

import Poster from './Poster';

import context from '../context/Context.js';

import "../assets/css/FeaturedSection.css"

const FeaturedSection = (props) => {

    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);
    
    var images = props.array;
    return (
        <div className = "container">
            <div className= "inner-container">
            <table>
                <tr>
                {images.map((item, index) => (
            
                    <td><Poster className = 'featuredItem' item = {item}/></td>
                ))}
                </tr>
            </table>
            </div>
            
        </div>
    )
}

export default FeaturedSection
