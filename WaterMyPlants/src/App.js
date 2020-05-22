import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import PlantCreation from "./Components/Plant_Components/PlantCreation";
import Plants from "./Components/Plant_Components/Plants"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/PlantCreation" component={PlantCreation} />
        </Switch>
        <Plants/>
      </div>
    </Router>
  );
}

export default App;
