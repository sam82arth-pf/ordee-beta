import React,{useState,useEffect} from 'react'
import Navbar from './Navbar'
import { db } from "./firebase";
import firebase from 'firebase';
import { Button } from "@material-ui/core";


function Settings({username}) {

  const [id,setId] = useState(0);
  
  const Add_Card=(event)=>{
   setId(id + 1)
    event.preventDefault();
    return db.collection('Restaurant').doc(username.uid).collection("tables").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      table:'Hey',
      id:id
    })
    }
    return (
        <div>
        <Navbar username={username} />
        <div>
        <h1>Click to Add tables </h1>
           <Button onClick={Add_Card}>Add</Button>
        </div> 
         
        </div>
    )
}

export default Settings
