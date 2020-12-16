import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sign_in from "./Sign_In";
import Admin from "./Admin";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/">
            <Sign_in />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
