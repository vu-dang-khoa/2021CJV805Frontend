import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Slideshow from './Slideshow.js';

import Context from '../context/Context.js';

import Homepage from '../pages/Homepage';
import ListingPage from '../pages/ListingPage.js';
import SigninPage from '../pages/SigninPage.js';
import SignupPage from '../pages/SignupPage.js';
import DetailPage from '../pages/DetailPage';

import '../assets/css/App.css';




const App = () => {

  
  var [moviesInfo,setMoviesInfo] = useState([]);
  var [moviePosters,setMoviePosters] = useState([]);
  var [tvshowsInfo,setTvshowsInfo] = useState([]);
  var [tvshowPosters,setTvshowPosters] = useState([]);

  //movies
  if (moviesInfo.length==0){
    fetch("https://frozen-eyrie-11666.herokuapp.com/movies").then(res=>{
      var temp = res.clone();
      return temp.json();
    }).then(json=>{
      moviesInfo=json;
      console.log(json);
      setMoviesInfo(json);
    }).then(()=>{
      var moviesURLArray = [];

      for (let i=0;i<moviesInfo.length;i++){
        var tempTitle= moviesInfo[i].title.replace(/\s/g, "");
        var tempURL = "https://frozen-eyrie-11666.herokuapp.com/moviePosters/" + tempTitle + ".jpg";
        moviesURLArray.push(tempURL);
      }
      return moviesURLArray;
    }).then((moviesURLArray)=>{
      for (let i=0;i<moviesURLArray.length;i++){
        fetch(moviesURLArray[i]).then((res)=>{
          return res.blob();
        }).then((image)=>{
            var outside = URL.createObjectURL(image);
            moviesInfo[i].image=outside;
        }).then(()=>{
          var temp = [];
          for (let i=0;i<moviesInfo.length;i++){
            temp.push(moviesInfo[i].image);
          }
          return temp;
        }).then((temp)=>{
          moviePosters=temp;
          setMoviePosters(temp);
        }).catch(err=>{
          console.log(err);
        })
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  //tvshows
  if (tvshowsInfo.length==0){
    fetch("https://frozen-eyrie-11666.herokuapp.com/tvshows").then(res=>{
      var temp = res.clone();
      return temp.json();
    }).then(json=>{
      tvshowsInfo=json;
      setTvshowsInfo(json);
    }).then(()=>{
      var tvshowsURLArray = [];

      for (let i=0;i<tvshowsInfo.length;i++){
        var tempTitle= tvshowsInfo[i].title.replace(/\s/g, "");
        var tempURL = "https://frozen-eyrie-11666.herokuapp.com/tvshowPosters/" + tempTitle + ".jpg";
        tvshowsURLArray.push(tempURL);
      }
      return tvshowsURLArray;
    }).then((tvshowsURLArray)=>{
      for (let i=0;i<tvshowsURLArray.length;i++){
        fetch(tvshowsURLArray[i]).then((res)=>{
          return res.blob();
        }).then((image)=>{
            var outside = URL.createObjectURL(image);
            tvshowsInfo[i].image=outside;
        }).then(()=>{
          var temp = [];
          for (let i=0;i<tvshowsInfo.length;i++){
            temp.push(tvshowsInfo[i].image);
          }
          return temp;
        }).then((temp)=>{
          tvshowPosters=temp;
          setTvshowPosters(temp);
        }).catch(err=>{
          console.log(err);
        })
      }
    }).catch(err=>{
      console.log(err);
    })
  }


    
  return (

      <Router>
      
      
        <Switch>

        <Context.Provider value={{moviesInfo,setMoviesInfo,moviePosters,setMoviePosters,tvshowsInfo,setTvshowsInfo,tvshowPosters,setTvshowPosters}} >

          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route exact path="/movies">
            <ListingPage array={moviesInfo}/>
          </Route>
          <Route exact path="/tvshows">
            <ListingPage array={tvshowsInfo}/>
          </Route>
          <Route exact path="/signin">
            <SigninPage/>
          </Route>
          <Route exact path="/signup">
            <SignupPage/>
          </Route>
          
          {moviesInfo.map((item, index) => (
          <Route path={"/movies/"+item.id}>
              <DetailPage item={item}/>
          </Route>
            ))}
          {tvshowsInfo.map((item, index) => (
          <Route path={"/tvshows/"+item.id}>
              <DetailPage item={item}/>
          </Route>
            ))}
          </Context.Provider>
        </Switch>
      </Router>
      

  )
}

export default App
