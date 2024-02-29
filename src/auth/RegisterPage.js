import React, { useState } from 'react';
import axios from "axios";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8000/register";
    axios.post(url, { username, email, password }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert("Account created successfully!");
      }
    });

    setUsername("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="container pt-5 d-flex justify-content-center">
      <form className="form-control w-75 p-3">
        <h3 className="text-center">Create an account</h3>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Create a username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="email" className="mt-3">
          Email:
        </label>
        <input
          type="email"
          placeholder="Enter email"
          className="form-control"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" className="mt-3">
          Password:
        </label>
        <input
          type="password"
          placeholder="Enter password"
          className="form-control"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="sumit"
          className="btn btn-success mt-3"
          onClick={handleSubmit}
        >
          Create account
        </button>

        <h6 className="mt-3">
          Already have an account? <a href="/login">Login</a>
        </h6>
      </form>
    </div>
  );
}

export default RegisterPage