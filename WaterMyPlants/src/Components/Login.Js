import React, { useState } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post("/api/login", userInput)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("#");
      })
      .catch((err) => {
        console.log(err);
        alert("Incorrect Login try again or create an account!");
      });
  };
  return (
    <div className="LoginForm">
      <h2>Login to Water My Plants</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userInput.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userInput.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      <Link to="/Signup">{"Don't have an account? Sign Up"}</Link>
    </div>
  );
};
export default Login;
