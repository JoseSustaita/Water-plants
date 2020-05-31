import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import PlantForm from "./PlantForm";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const PlantList = (props) => {
  const [plants, setPlants] = useState([]);

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
              updatePlants={setPlants}
              id={item.id}
            />
          );
        })}
      </Container>
      <PlantForm props={props} plants={plants} updatePlants={setPlants} />
    </div>
  );
};
export default PlantList;
