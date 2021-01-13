import React, { useState} from "react";
import { Link } from "react-router-dom";
import "./LoginForm.css";
import { auth } from "./firebase";
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
    <div>
      <input
        type="email"
        placeholder="Enter Email for Password recovery"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={Send__link}>Send Reset Link</button>
      <button>
        <Link to="/">Back to Sign-in</Link>
      </button>
    </div>
  );
}

export default Password__reset;