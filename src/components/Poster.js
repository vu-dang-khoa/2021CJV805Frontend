import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import context from '../context/Context.js';



const Poster = (props) => {
    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);

    return (
            <Link to={"/"+props.item.category+"/"+props.item._id}><img className={props.className} src={props.item.smallPoster} alt={props.item.title.replace(/\s/g, "")}></img></Link>
    )
}

export default Poster