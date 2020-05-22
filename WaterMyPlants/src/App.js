//Imports
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

//Component Links
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Login />
      </div>
    </Router>
  );
}

export default App;
