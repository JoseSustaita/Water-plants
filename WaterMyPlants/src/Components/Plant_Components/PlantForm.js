import React, { useState } from "react";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../../Utils/axiosWithAuth";

const PlantForm = ({ props, plants, updatePlants }) => {
  const [plant, setNewPlant] = useState([
    {
      nickname: "",
      species: "",
      water: 0,
    },
  ]);

  const addPlant = (e) => {
    e.preventDefault();

    console.log(plant);

    axiosWithAuth()
      .post("https://preston-plant.herokuapp.com/api/plants/", plant)
      .then((res) => {
        axiosWithAuth()
          .get("https://preston-plant.herokuapp.com/api/plants/")
          .then((res) => {
            updatePlants(res.data);
          });
      });
  };
  const handleChange = (e) => {
    setNewPlant({ ...plant, [e.target.name]: e.target.value });
  };
  console.log(plant);
  return (
    <div className="colors-wrap">
      <form className="add-row" onSubmit={addPlant}>
        <label>
          Enter New Plant:
          <input type="text" name="nickname" onChange={handleChange} />
        </label>
        <label>
          Species:
          <input type="text" name="species" onChange={handleChange} />
        </label>
        <label>
          After how many days does it need to be watered:
          <input type="text" name="water" onChange={handleChange} />
        </label>
        <div className="button-row">
          <button type="submit">Add New Plant</button>
        </div>
      </form>
    </div>
  );
};

export default PlantForm;
