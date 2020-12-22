import React,{useState} from 'react'
import './Cards.css';
import {db} from './firebase'



function Cardflip({card}) {
    const[flip,setFlip] = useState(false);


    return (
        <div>
            <div 
        className={`card ${(card.text.length > 0 ) ? 'flip' : ''}`}
         onClick={() =>{setFlip(!flip)}}
        >
         <div className = 'front'>
             {card.title}
         </div>
         <div className = 'back'  >
             {card.text}
             
       </div>
        </div>
        </div>
    )
}

export default Cardflip;