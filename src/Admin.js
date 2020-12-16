import React from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import "./Admin.css";
import Navbar from'./Navbar'

function admin() {
  return (
    <div>
       <Navbar/>
      <div className="Admin__Title">
        <h1>Hey Palash,Admin features to be added soon....</h1>
      </div>
    </div>
  );
}

export default admin;