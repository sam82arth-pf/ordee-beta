import React,{useState,useEffect} from "react";
import Cardsflip from "./Cardsflip";
import {db} from "./firebase";


function Cards(){

    const[posts,setPosts] = useState([]);
    
    useEffect(()=>{
      db.collection('posts').onSnapshot(snapshot =>{
        setPosts(snapshot.docs.map(doc =>({
          id: doc.id,
          card: doc.data()
        })));      
      })
    },[]);
  
    return (<div className="grid">
        {posts.map(({card,id}) => {
          console.log(id);
               return<Cardsflip table={card.table} index={id}  />
        })
    }
    </div>
    )
  };
  
  export default Cards;