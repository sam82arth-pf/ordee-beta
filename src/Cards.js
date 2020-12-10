import React,{useState} from "react";
import Cardsflip from "./Cardsflip";



function Cards(){
 
  const cardInfo = [
    {
      title: 'Table 1',
      text:"hello there",
    },
    {
      title: "Table 2",
      text: "hello there",
    },
    {
      title: "Table 3",
      text: "hello there",
    },
    {
        title: "Table 4",
        text: "hello there",
      },
      {
        title: "Table 5",
        text: "hello there",
      },
      {
        title: "Table 6",
        text: "hello there",
      },
      {
        title: "Table 7",
        text: "hello there",
      },
      {
        title: "Table 8",
        text: "hello there",
      },
    ];
  
    return <div className="grid">
        {cardInfo.map((card,index) => {
               return<Cardsflip key={index} card={card}/>
        })
    }
    </div>
  };
  
  export default Cards;