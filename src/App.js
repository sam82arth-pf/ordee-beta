import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Admin";
import LoginForm from './LoginForm';


import Password_Reset from './Password__reset'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/Password__Reset">
            <Password_Reset/>
          </Route>
          <Route path="/">
            <LoginForm/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
