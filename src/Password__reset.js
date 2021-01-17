import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./Password_reset.css";
import { auth } from "./firebase";
import Navbar from './Navbar.js';

function Password__reset() {
  const [email, setEmail] = useState("");

  const Send__link = (event) => {
    event.preventDefault();

    if (email !== "") {
      auth
        .sendPasswordResetEmail(email)
        .then(function () {
          alert("Password reset link sent");
        })
        .catch((error) => alert(error.message));
    } else {
      window.alert("Email field empty");
    }
  };
  return (
    <div className="fp">
      <input id="test"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <button onClick={Send__link}>Send Reset Link</button>
      <br></br>
      <button> 
        <Link to="/">
          <a1>Back to Sign in</a1>
          </Link>
      </button>
    </div>
  );
}

export default Password__reset;
