import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8000/login";

      const response = await axios.post(url, { username, password });

      if (response.data.success) {
        alert("Logged in successsfully");

        login();
        navigate("/");        
        
        // const userData = await fetchUserData();
        // setUser(userData);
      }
    } catch (error) {
      alert(error.response.data.message);
    }    
  };

  return (
    <div className="container pt-5 d-flex justify-content-center">
      <form className="form-control w-75 p-3">
        <h3 className="text-center">Log in</h3>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          required
          onChange={(e) => setUsername(e.target.value)}
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
          Log in
        </button>

        <h6 className="mt-3">
          Don't have an account? <a href="/register">Register</a>
        </h6>
      </form>
    </div>
  );
};

export default LoginPage;
