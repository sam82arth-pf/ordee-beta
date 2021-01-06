import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { Link } from "react-router-dom";
import './Navbar.css';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Sidebardata } from './Sidebardata';
import { Button, Input } from "@material-ui/core";
import {IconContext} from 'react-icons';



function Navbar({username}) {
  const[sidebar,setSidebar] = useState(false);
  const[name,setName]=useState('');
  

  const showSidebar =() =>setSidebar(!sidebar);

  useEffect(()=>{
    db.collection('Restaurant').doc(username.uid).onSnapshot(snapshot =>{
      setName(snapshot.data().Name)  
    })
  },[name]);


  const Button_OnClick=(event)=>{
    event.preventDefault();
    return db.collection('Restaurant').doc(username.uid).collection("tables").add({
      table:'hey',
    })
  }



    return (
      
      <IconContext.Provider value={{color: '#fff'}}>
        <nav className="navbar" >
          <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
          
          </Link>
          <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
            <ul className = 'nav-menu-items'>
              <li className='navbar-toggle'>
                <Link to ='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose onClick={showSidebar}/>
                </Link>
              </li>
              {Sidebardata.map((item,index) =>{
                return(
                  <li key={index} className={item.cName}>
                      <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                      </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
           
           <img 
             className="navicon" 
             src={"./ordee2.png"} 
             alt="" 
             onClick={() => auth.signOut()}
             />
             
             
            <Link>
            <img
              className="user_icon"
              src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png"
              alt=""
              onClick={() => auth.signOut()}
            />
            
            <h1 className="name">{name}</h1>
            
            </Link>
            <Button onClick={Button_OnClick}>Hii</Button>
            
        </nav>
        </IconContext.Provider>
        
    );
}

export default Navbar
