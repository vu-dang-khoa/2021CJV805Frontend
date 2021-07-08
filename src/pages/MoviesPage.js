import React, {useContext} from 'react';
import context from '../context/Context.js';



const MoviesPage = () => {

    //const {moviesInfo,setMoviesInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    //const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);

    return (
        <div>
            <p>{moviePosters.length}</p>
        </div>
    )
}

export default MoviesPage
