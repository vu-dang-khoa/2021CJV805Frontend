import React, {useContext, useState} from 'react';
import context from '../context/Context.js';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import ContentTable from '../components/ContentTable.js';

import '../assets/css/ListingPage.css';

const ListingPage = (props) => {

    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const {moviePosters,setMoviePosters} = useContext(context);
    const {tvshowPosters,setTvshowPosters} = useContext(context);
    var [contentTableArray,setContentTableArray] = useState([]);

    var temp = [];
    var title= "title";
    if (window.location.href.includes("movies")){
        title="Movies Listing :";
    }
    else {
        title="TV Shows Listing :";
    }
    if (contentTableArray.length==0){
        var currentArray=[-1];
        for (let i=0;i<props.array.length;i++){
        if (i%4==0){
            temp.push([]);
            currentArray++;
        }
        temp[currentArray].push(props.array[i]);
        contentTableArray = temp;
        
    }
    
    
    

    }

    return (
        <div className="mainDiv">
            <Header/>
            <h1 className="listing-title">{title}</h1>
            {contentTableArray ? <ContentTable key = {contentTableArray.length} array={contentTableArray}/> : null}
            <Footer/>

            
            
        </div>
        
    )
}

export default ListingPage;
