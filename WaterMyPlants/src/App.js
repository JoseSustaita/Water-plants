import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
