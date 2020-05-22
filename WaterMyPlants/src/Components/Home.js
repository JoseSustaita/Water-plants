import React, { useState } from "react";

const Home = () => {
  return (
    <div>
      <form>
        <label htmlFor="Home-Dropdown" />
        <select>
          <option>Happiness (Low - High)</option>
          <option>Maintenance (High - Low)</option>
          <option>Recently Added</option>
          <option>Plant Name (A-Z)</option>
        </select>
      </form>
    </div>
  );
};

export default Home;
