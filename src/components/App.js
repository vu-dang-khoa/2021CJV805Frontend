import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Context from '../context/Context.js';

import Homepage from '../pages/Homepage';
import ListingPage from '../pages/ListingPage.js';
import SigninPage from '../pages/SigninPage.js';
import SignupPage from '../pages/SignupPage.js';
import DetailPage from '../pages/DetailPage';
import SearchPage from '../pages/SearchPage';
import PersonalPage from '../pages/PersonalPage.js';

import '../assets/css/App.css';



const App = () => {
 
  var [isLoggedIn, setIsLoggedIn] = useState(false);
  var [user,setUser] = useState([]);
  var [moviesInfo,setMoviesInfo] = useState([]);
  var [moviePosters,setMoviePosters] = useState([]);
  var [tvshowsInfo,setTvshowsInfo] = useState([]);
  var [tvshowPosters,setTvshowPosters] = useState([]);

  setInterval(()=>{
    if (moviesInfo.length==0){
      fetch("https://agile-mountain-03205.herokuapp.com/movies",{
        mode: 'cors'
      }).then(res=>{
        var temp = res.clone();
        return temp.json();
      }).then(json=>{
        moviesInfo=json.body;
        setMoviesInfo(json.body);
      }).catch(err=>{
        console.log(err);
      })
    }
  
    //tvshows
    if (tvshowsInfo.length==0){
      fetch("https://agile-mountain-03205.herokuapp.com/tvshows",{
        mode: 'cors'
      }).then(res=>{
        var temp = res.clone();
        return temp.json();
      }).then(json=>{
        tvshowsInfo=json.body;
        setTvshowsInfo(json.body);
      }).catch(err=>{
        console.log(err);
      })
    }
  },2000)
  //movies
  


    
  return (

      <Router>
      
      
        <Switch>

        <Context.Provider value={{moviesInfo,setMoviesInfo,tvshowsInfo,setTvshowsInfo,user,setUser, isLoggedIn, setIsLoggedIn}} >

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
          <Route exact path="/search">
            <SearchPage/>
          </Route>
          <Route exact path="/personal">
            <PersonalPage/>
          </Route>
          
          {moviesInfo.map((item, index) => (
          <Route path={"/movies/"+item._id}>
              <DetailPage item={item}/>
          </Route>
            ))}
          {tvshowsInfo.map((item, index) => (
          <Route path={"/tvshows/"+item._id}>
              <DetailPage item={item}/>
          </Route>
            ))}
          
          </Context.Provider>
        </Switch>
      </Router>
      

  )
}

export default App
