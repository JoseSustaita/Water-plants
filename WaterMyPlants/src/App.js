import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Component links
import Login from "./Components/Login_Components/Login";
import Signup from "./Components/Login_Components/Signup";
import PlantCreation from "./Components/Plant_Components/PlantCreation";
import Plants from "./Components/Plant_Components/Plants";
import Home from "./Components/Home_Components/Home";
import HomeAllPlants from "./Components/Home_Components/HomeAllPlants";

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
          <Route exact path="/HomeAllPlants" component={HomeAllPlants} />
          <Route exact path="/PlantCreation" component={PlantCreation} />
        </Switch>
        <Plants />
      </div>
    </Router>
  );
}

export default App;
