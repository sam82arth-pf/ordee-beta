import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import "./LoginForm.css";
import { Link, Redirect } from "react-router-dom";
import Cards from "./Cards";
import Navbar from "./Navbar";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const container = document.getElementById("container");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const Login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
  };
  const SignUp = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection("Restaurant").doc(cred.user.uid).set({
          Name: username,
          Phone: phone,
          Email: email,
        });
      })
      .catch((error) => alert(error.message));
  };

  const signUpButton = () => {
    container.classList.add("right-panel-active");
  };

  const signInButton = () => {
    container.classList.remove("right-panel-active");
  };

  return (
    <div>
      {user ? (
        user.email === "a@g.com" ? (
          <Redirect to="/Admin" />
        ) : (
          <div className="LoginForm__mains">
            <Navbar username={user} />
            <Cards user={user} />
          </div>
        )
      ) : (
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>

              <input
                type="text"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={SignUp}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a>Forgot your password?</a>
              <button onClick={Login}>Sign in</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn" onClick={signInButton}>
                  {/*check for id here as refreshing the page does not support animation and displays error */}
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello,</h1>
                <p>Enter your personal details and get on board with us</p>
                <button className="ghost" id="container" onClick={signUpButton}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default LoginForm;
