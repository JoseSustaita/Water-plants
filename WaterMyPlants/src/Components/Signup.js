import React, { useState } from "react";

export default function Signup(props) {
  const [userInput, setUserInput] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="LoginForm">
      <h2>Signup for Water My Plants</h2>
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
        <input
          type="text"
          name="phonenumber"
          placeholder="Phone Number"
          value={userInput.password}
          onChange={handleChange}
        />
        <button>Signup</button>
      </form>
    </div>
  );
}
