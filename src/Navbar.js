import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
           <Link to="/Login">
           <img 
             className="navicon" 
             src={"./ordee2.png"} 
             alt="" />
           </Link>
          
            <Link>
            <img
              className="user_icon"
              src="https://www.searchpng.com/wp-content/uploads/2019/02/Profile-ICon.png"
              alt=""
              /*onClick={() => auth.signOut() */
            />
            </Link>
        </nav>
    );
}

export default Navbar
