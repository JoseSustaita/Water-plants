import React, { useState } from "react";

const AllPlants = () => {
  const [form, setFormState] = useState({});

  const formSubmit = (e) => {
    e.preventDefualt();
  };

  const handleClick = () => {};
  return (
    <div>
      <form onSubmit={(e) => formSubmit(e)}>
        <label htmlFor="Home Dropdown" />
        <select>
          <option>Happiness (Low - High)</option>
          <option>Maintenance (High - Low)</option>
          <option>Recently Added</option>
          <option>Plant Name (A-Z)</option>
        </select>

        <label htmlFor="Add A Plant Button" />
        <button>Add A Plant</button>

        {/* Default Plants */}
        <label htmlFor="Planty McPlant" />
        <img
          src="https://images.unsplash.com/photo-1554324583-a7bc536d9836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          alt="Planty McPlant"
        />

        <label htmlFor="Jolly Green Giant" />
        <img
          src="https://www.ourhouseplants.com/imgs-content/green-umbrella-plant-Schefflera.jpg"
          alt="Jolly Green Giant"
        />

        <label htmlFor="Klaus" />
        <img
          src="https://images.unsplash.com/photo-1559695656-b516dfde97bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
          alt="Klaus"
        />

        <label htmlFor="Hattie" />
        <img src="" alt="" />

        <label htmlFor="Virginia" />
        <img
          src="https://images.unsplash.com/photo-1587565146071-b19880f5f0ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Virginia"
        />

        <label htmlFor="baby palm tree" />
        <img
          src="https://images.unsplash.com/photo-1519524725531-6e0a85b52e85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="baby palm tree"
        />
      </form>
    </div>
  );
};

export default AllPlants;
