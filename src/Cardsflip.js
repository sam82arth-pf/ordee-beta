import React,{useState} from 'react'
import './Cards.css';
import {db} from './firebase';



function Cardflip({table,index,user}) {
    
    
        if(table === 'bill'){
           return <img className="bill"
                 src={"./bill.gif"}
                 alt=""/>
         }
    
    const deletes = () => {
        db.collection("Restaurant").doc(user.uid).collection("tables").doc(index)
          .update('table','')
      };      
    return (
        <div >
            <div 
        className={`card ${(table.length > 0 ) ? 'flip' : ''}`}
        onClick={deletes}
        >
         <div className = 'front' >
            <h3>No orders</h3>
         </div>
         <div className = 'back'  >
           {table}
       </div>
        </div>
        </div>
    )
}

export default Cardflip;