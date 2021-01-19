
import React,{useState} from 'react'
import './Cards.css';
import {db} from './firebase';
import Timer from './Timer';


function Cardflip({table,index,user}) {
    const[time,setTime] = useState({ms:0,s:0, m:0});
    
    const start=()=>{
        if(table.length > 0){
            run();
            setInterval(run , 10);
        }
         }

    var updatedMs= time.ms,updatedS = time.s, updatedM = time.m;

     const run =()=>{
        if(updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if(updatedMs === 100){
            updatedS++;
            updatedMs=0;
        }
        updatedMs++;
        return setTime({m:updatedM, s:updatedS});
    }

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
        className={`card ${(table.length > 0 ) ? 'flip' : '' }`}
        onClick={deletes} 
        >
            
         <div className = 'front' >
            <h3>No orders</h3>
         </div>
         <div className ="back" >
           {table}   
           <div className='timer'>
           {start}
            <Timer time={time}>
            </Timer>
           </div>

       </div>
        </div>
        
        </div>
    )
}

export default Cardflip;