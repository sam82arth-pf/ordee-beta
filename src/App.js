import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from './Cards';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/Login'>
            <h1>Login Page</h1>
          </Route>
          <Route path='/'>
            <Navbar />
            <Cards />
          </Route>
        </Switch>
      </div>
    </Router>
  
  );
}

export default App;
