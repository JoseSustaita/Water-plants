import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./Components/Signup";
function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <Route path="/Signup" component={Signup}>
          <Signup />
        </Route>
      </div>
    </Router>
  );
}

export default App;
