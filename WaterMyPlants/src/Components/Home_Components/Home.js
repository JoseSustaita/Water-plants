import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

const Home = () => {
  const backgroundStyle = {
    color: "Green",
  };
  return (
    <div style={backgroundStyle}>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome To Plants Watered</h1>
          <Button variant="primary">Get Started</Button>
          <h2>Never Forget To Water Your Plants Again</h2>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
