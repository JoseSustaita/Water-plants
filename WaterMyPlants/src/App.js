import React, {useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Components/Nav_Components/Theme";

//Component links
import Login from "./Components/Login_Components/Login";
import Signup from "./Components/Login_Components/Signup";
import PlantCreation from "./Components/Plant_Components/PlantCreation";
import Plants from "./Components/Plant_Components/Plants";
import Home from "./Components/Home_Components/Home";
import HomeAllPlants from "./Components/Home_Components/HomeAllPlants";
import SearchAppBar from "./Components/Nav_Components/Nav";

function App() {

    const [newPlants, setNewPlant] = useState([
        {
        id: Date.now(),
        plantName: " Ficus ",
        species: " woody trees",
        care: " 2 weekly ",
        happiness: " comfortable ",
        description: " tall slim plant"
        }
    ]);

    const loadPlants = (plant) =>{
        setNewPlant(...newPlants, plant)
    }

  return (
      /* <Router>
       *   <div className="App">
       *     <Switch>
       *       <Route exact path="/" component={Login} />
       *       <Route exact path="/Signup" component={Signup} />
       *       <Route exact path="/PlantCreation" component={PlantCreation} />
       *     </Switch>
      *     <PlantCreation loadPlants={loadPlants}/>
      *     <Plants newPlants={newPlants}/>
      *   </div>
      * </Router> */
    <ThemeProvider theme={Theme}>
      <Router>
        <SearchAppBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <Route exact path="/HomeAllPlants" component={HomeAllPlants} />
            <Route exact path="/PlantCreation" component={PlantCreation} />
            <Route exact path="/Plants" component={Plants} />
          </Switch>
        <PlantCreation loadPlants={loadPlants}/>
          <Plants newPlants={newPlants}/>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
