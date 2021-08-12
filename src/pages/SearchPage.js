import React, {useContext, useState} from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import "../assets/css/App.css";
import "../assets/css/SearchPage.css";
import Poster from '../components/Poster.js';
import { remove } from 'lodash';
import "../assets/css/DetailPage.css";
import context from "../context/Context.js";
import {Link} from "react-router-dom";

const SearchPage = () => {

    const {user,setUser} = useContext(context);
    var [searchResult, setSearchResult] = useState([]);
    var [formData, setFormData] = useState([]);

    

    const removeDuplicate = (array)=>{
        var temp = array;
        for (let i=0;i<array.length-1;i++){
            for (let j=1;j<array.length;j++){
                if (array[i]._id==array[j]._id){
                    array.splice(j,1);
                }
            }
        }
        return temp;
    }

    const handleChange = (e) => {
        setFormData(e.target.value);
      };
    
      const handleSubmit = (e) => {
          var temp = [];
          e.preventDefault();
            setSearchResult([]);
            fetch("https://agile-mountain-03205.herokuapp.com/movies/searchTitle?contain="+encodeURI(formData),{
              mode: 'cors'
            }).then(res=>{
              var temp = res.clone();
              return temp.json();
            }).then(json=>{
                return removeDuplicate(json.body);
            }).then(body=>{
                temp = body;
            }).then(()=>{
                fetch("https://agile-mountain-03205.herokuapp.com/tvshows/searchTitle?contain="+encodeURI(formData),{
              mode: 'cors'
            }).then((res)=>{
                var temp = res.clone();
                return temp.json();
            }).then(json=>{
                return removeDuplicate(json.body);
            }).then(body=>{
                temp = temp.concat(body);
                setSearchResult(temp);
            })
            }).catch(err=>{
              console.log(err);
            })
          document.getElementById('myForm').reset();
      };
      
    return (
        <div className="mainDiv">
            <Header/>
            <div style={{minHeight:"400px"}}>
            <div style={{paddingTop:"2em"}}>
                <form className="inline-block no-padding" onSubmit={handleSubmit} id="myForm" >
                    <input type="text" className="search-bar" name="contain" placeholder="Type here to search" onChange={handleChange}/>
                    <button type="submit" className="submit">Search</button>
                </form>

            </div>
            {searchResult.map((item, index) => (
            <Link to={"/"+item.category+"/"+item._id}>
            <div>
                <table>
                <tr>
                    <td>
                        <div className="detail-wrapper">
                            <img src={item.smallPoster} alt='image'></img>
                        </div>
                    </td>
                    <td>
                        <div className="detail-wrapper transparent-grey-bg">
                            <h4 className="movie-title" style={{paddingTop:"2em"}}>{item.title}</h4>
                            <br>
                            </br>
                            <p>{item.description}</p>
                        </div>
                        
                    </td>
                </tr>
            </table>

                
            </div>
            </Link>
                
        ))}
            </div>
            
            

            <Footer/>
        </div>
    )
}

export default SearchPage
