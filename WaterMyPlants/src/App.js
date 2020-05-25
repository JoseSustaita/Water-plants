import React, {useState} from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./Components/Signup";
import PlantCreation from "./Components/Plant_Components/PlantCreation";
import Plants from "./Components/Plant_Components/Plants"

function App() {

    const [newPlants, setNewPlant] = useState({

        id: Date.now(),
        plantName: " ",
        species: " ",
        care: " ",
        Happiness: " ",
        discription: " "

    });

    const loadPlants = (plant) =>{
        setNewPlant(...newPlants, plant)
    }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/PlantCreation" component={PlantCreation} />
        </Switch>
        {/* How  to pass a funtion on App to a component without using the component */}
        <PlantCreation loadPlants={loadPlants}/>
        <Plants plants={newPlants}/>
      </div>
    </Router>
  );
}

export default App;
