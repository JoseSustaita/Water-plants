//Imports
import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

//Component Links
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import homeAllPlants from "./Components/HomeAllPlants";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/HomeAllPlants">Home</Link>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/HomeAllPlants" component={homeAllPlants} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
