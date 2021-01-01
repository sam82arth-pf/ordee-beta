import React,{useState} from 'react'
import './Cards.css';
import {db} from './firebase';



function Cardflip({table,index}) {

 
    const deletes = () => {
        db.collection("posts").doc(index)
          .update('table','')
      };
      
    return (
        <div >
            <div 
        className={`card ${(table.length > 0 ) ? 'flip' : ''}`}
        onClick={deletes}
        >
         <div className = 'front' >
            Table{index}
         </div>
         <div className = 'back'  >
        {table}
       </div>
        </div>
        </div>
    )
}

export default Cardflip;