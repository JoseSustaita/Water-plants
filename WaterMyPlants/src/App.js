import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Component links
import Login from "./Components/Login_Components/Login";
import Signup from "./Components/Login_Components/Signup";
import PlantCreation from "./Components/Plant_Components/PlantCreation";
import Home from "./Components/Home_Components/Home";
import HomeAllPlants from "./Components/Home_Components/HomeAllPlants";
import SearchAppBar from "./Components/Nav_Components/Nav";

function App() {
  return (
    <Router>
      <SearchAppBar />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/HomeAllPlants" component={HomeAllPlants} />
          <Route exact path="/PlantCreation" component={PlantCreation} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
