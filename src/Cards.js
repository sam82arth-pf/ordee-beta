import React,{useState,useEffect} from "react";
import Cardsflip from "./Cardsflip";
import {db} from "./firebase";

function Cards({user}){

    const[posts,setPosts] = useState([]);
    
    useEffect(()=>{
      db.collection('Restaurant').doc(user.uid).collection("tables").onSnapshot(snapshot =>{
        setPosts(snapshot.docs.map(docu =>({
          id: docu.id,
          card: docu.data()
        })));      
      })
    },[]);
  
    return (<div className="grid">
        {posts.map(({card,id}) => {
               return<Cardsflip table={card.table} index={id} user={user}  />
        })
    }
    </div>
    )
  };
  
  export default Cards;