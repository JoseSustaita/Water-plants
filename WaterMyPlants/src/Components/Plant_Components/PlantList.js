// Import React, useEffect, and useState
import React, { useEffect, useState } from "react";
// Import PlantCard Component
import PlantCard from "./PlantCard";
import PlantForm from "./PlantForm";
// Import Styled Components
import styled from "styled-components";
// Import Axios
import axios from "axios";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlantList = (props) => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [plants, setPlants] = useState([]);

  // API Request
  useEffect(() => {
    axios
      .get(`https://preston-plant.herokuapp.com/api/plants/`)
      .then((response) => {
        const plants = response.data;
        console.log("These are the plants: ", plants);
        setPlants(plants);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Plants</h1>
      <Container>
        {plants.map((item) => {
          return (
            <PlantCard
              key={item.nickname}
              name={item.nickname}
              water={item.water}
              species={item.species}
            />
          );
        })}
      </Container>
      <PlantForm props={props} plants={plants} updatePlants={setPlants} />
    </div>
  );
};
export default PlantList;
