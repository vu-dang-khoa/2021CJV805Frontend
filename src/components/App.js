import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Slideshow from './Slideshow.js';

import Context from '../context/Context.js';

import Homepage from '../pages/Homepage';
import MoviesPage from '../pages/MoviesPage';
import SigninPage from '../pages/SigninPage.js';
import SignupPage from '../pages/SignupPage.js';
import DetailPage from '../pages/DetailPage';

import '../assets/css/App.css';



const App = () => {

  const fetchPostersInOrder = ()=>{
    let promises = [];
       for (let i=0;i<moviesInfo.length;i++) {
            promises.push(()=>{
  
            });
       }
       return Promise.all(promises);
  }
  
  const [moviesInfo,setMoviesInfo] = useState([]);
  const [moviePosters,setMoviePosters] = useState([]);
  const [tvshowsInfo,setTvshowsInfo] = useState([]);
  const [tvshowPosters,setTvshowPosters] = useState([]);
    fetch("http://localhost:5000/movies").then(res=>{
      var temp = res.clone();
      return temp.json();
    }).then(json=>{
      if (moviesInfo.length==0 || moviePosters.length==0){
        setMoviesInfo(json);
      }else {
        return Promise.reject("filled");
      }
      

    }).then(()=>{
      for (let i=0;i<moviesInfo.length;i++){
        var tempTitle= moviesInfo[i].title.replace(/\s/g, "");
        
        var tempURL = "http://localhost:5000/moviePosters/" + tempTitle + ".jpg";
        
        fetch(tempURL).then((res)=>{
          return res.blob();
        }).then((image)=>{
          if (moviePosters.length<moviesInfo.length){
            var outside = URL.createObjectURL(image);
          var temp = moviePosters;
          temp.push(outside);
          setMoviePosters(temp);
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }).catch(err=>{
      console.log(err);
    })

    fetch("http://localhost:5000/tvshows").then(res=>{
      return res.json();
    }).then(json=>{
      if (tvshowsInfo.length==0 || tvshowPosters.length==0){
        setTvshowsInfo(json);
      }else {
        return Promise.reject("filled");
      }
      
    }).then(()=>{
      for (let i=0;i<tvshowsInfo.length;i++){
        var tempTitle= tvshowsInfo[i].title.replace(/\s/g, "");

        var tempURL = "http://localhost:5000/tvshowPosters/" + tempTitle + ".jpg";
        
        fetch(tempURL).then((res)=>{
          return res.blob();
        }).then((image)=>{
          if (tvshowPosters.length<tvshowsInfo.length){
            var outside = URL.createObjectURL(image);
            var temp = tvshowPosters;
            temp.push(outside);
            setTvshowPosters(temp);
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }).catch(err=>{
      console.log(err);
    })
  
    


  return (

      <Router>
      
      
        <Switch>

        <Context.Provider value={{moviesInfo,setMoviesInfo,moviePosters,setMoviePosters,tvshowsInfo,setTvshowsInfo,tvshowPosters,setTvshowPosters}} >

          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/movies">
            <MoviesPage/>
          </Route>
          <Route path="/tvshows">
            
          </Route>
          <Route exact path="/signin">
            <SigninPage/>
          </Route>
          <Route exact path="/signup">
            <SignupPage/>
          </Route>
          
          {moviesInfo.map((item, index) => (
          <Route path={"/"+item.title.replace(/\s/g, "")}>
              <DetailPage image={moviePosters[index]} info={item}/>
          </Route>
            ))}
          </Context.Provider>
        </Switch>
      </Router>
      

  )
}

export default App
