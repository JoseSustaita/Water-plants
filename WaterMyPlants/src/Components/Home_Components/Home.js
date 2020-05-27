import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Planted Parenthood</h1>
      <Link to="/Login">Click Here To Get Started!</Link>
    </div>
  );
};

export default Home;
