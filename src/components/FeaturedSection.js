import React from 'react';
import "../assets/css/FeaturedSection.css"

const FeaturedSection = (props) => {
    var images = props.array
    return (
        <div className = "container">
            <div className= "inner-container">
            <table>
                <tr>
                {images.map((item, index) => (
            

                <td><img className = 'featuredItem' src={item} alt = {index}></img></td>
                ))}
                </tr>
            </table>
            </div>
            
        </div>
    )
}

export default FeaturedSection
