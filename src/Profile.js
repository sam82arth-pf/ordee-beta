import Navbar from './Navbar.js';
import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { Link, Redirect,Route } from "react-router-dom";
import './Profile.css';

function Profile({user1}){
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address1,setAddress1]=useState("");
  const [address2,setAddress2]=useState("");
  const [state,setState]=useState("");
  const [country,setCountry]=useState("");
  const [postalcode,setPostalCode]=useState("");
  const [password, setPassword] = useState("");
    return (
        <div className="profile">
            <Navbar username={user1} />
            <div className="form">
            
            <div className="name_email">
            <input
                type="username"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </div>
              <div className="contact_postal">
              <input
                type="phone"
                placeholder="Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="postalcode"
                placeholder="Postal Code"
                value={postalcode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
             
              </div>
              <div className="address">
              <input
                type="address1"
                placeholder="Address Line 1"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
               <input
                type="address2"
                placeholder="Address Line 2"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
              </div>
              <div className="state_country">
              <input
                type="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
              <input
                type="state"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
              </div>
              <div className="profile_button">
              <button>Update</button>
              </div>
             </div>
             </div>
             
        
    )
}

export default Profile;
