import React from 'react'
import Navbar from './Navbar'
import { db } from "./firebase";
import { Button } from "@material-ui/core";


function Settings({username}) {

  const Add_Card=(event)=>{
    event.preventDefault();
    return db.collection('Restaurant').doc(username.uid).collection("tables").add({
      table:'Hey',
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
