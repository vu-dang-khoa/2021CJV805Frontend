import React, {useState, useContext} from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import context from '../context/Context';
import '../assets/css/DetailPage.css';
import '../assets/css/App.css';

const DetailPage = (props) => {

    const {user,setUser} = useContext(context);
    const {moviesInfo,setMoviesInfo} = useContext(context);
    const {tvshowsInfo,setTvshowsInfo} = useContext(context);
    const [show,setShow] = useState({});

    if(show._id==undefined){

            fetch("https://agile-mountain-03205.herokuapp.com/"+props.item.category+"/"+props.item._id,{
              mode: 'cors'
            }).then(res=>{
              var temp = res.clone();
              return temp.json();
            }).then(json=>{
              setShow(json.body[0]);
            }).then(()=>{
            }).catch(err=>{
              console.log(err);
            })
          
    }
    
    return (
        <div className="mainDiv" >
            <div style={{backgroundImage: `url(${show.largePoster})`,maxWidth:"100%",display:"inline-block"}}>
            <Header/>
            <table>
                <tr>
                    <td>
                        <div className="detail-wrapper">
                            <img src={show.smallPoster} alt='image'></img>
                        </div>
                    </td>
                    <td>
                        <div className="detail-wrapper transparent-grey-bg">
                            <h4 className="movie-title" style={{paddingTop:"2em"}}>{show.title}</h4>
                            <br>
                            </br>
                            <p>{show.description}</p>
                            <p>Rating : {show.rating}/5</p>
                        </div>
                        
                    </td>
                </tr>
            </table>
            <div className="detail-wrapper" id="buttons-wrapper">
            <button className="buy-rent-button">
                    <b>Buy : ${show.buy}</b>
                </button>
                <button className="buy-rent-button">
                    <b>Rent : ${show.rent}</b>
                </button>
                </div>
            <Footer/>

            </div>
            
            
        </div>
    )
}

export default DetailPage;
