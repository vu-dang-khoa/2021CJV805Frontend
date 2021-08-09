import React, {useContext, useState} from 'react';
import Poster from './Poster';
import context from '../context/Context.js';

import '../assets/css/ContentTable.css';

const ContentTable = (props) => {
    

      return (
        <div>
          <table style={{margin:"auto"}}>
            
            {props.array.slice(0, props.array.length).map((item, index) => {
                return (<tr>
                            <td><Poster className="grid-item" item={item[0]}/></td>
                            <td><Poster className="grid-item" item={item[1]}/></td>
                            <td><Poster className="grid-item" item={item[2]}/></td>
                            <td><Poster className="grid-item" item={item[3]}/></td>
                        </tr>)
                
               
          

            })}

          </table>
        </div>
      );
}

export default ContentTable
