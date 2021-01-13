import React,{useState} from 'react'
import './Cards.css';
import {db} from './firebase';



function Cardflip({table,index,user}) {
    
    const deletes = () => {
        db.collection("Restaurant").doc(user.uid).collection("tables").doc(index)
          .update('table','')
      }; 

        if(table === 'bill' ||table==="hey can i get the bill"){
           return <img className="bill"
                 src={"./bill.jpeg"}
                 alt=""
                 onClick={deletes}/>
         }else if(table === 'waiter'){
            return <img className="bill"
            src={"./waiter.jpeg"}
            alt=""
            onClick={deletes}/>
         }
    
        
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