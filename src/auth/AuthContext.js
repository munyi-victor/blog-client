import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loggedInUserId = localStorage.getItem("loggedInUserId");


  const login = () => {
    if (loggedInUserId !== null) {
      setIsLoggedIn(true);
    }
    setIsLoggedIn(true);
  }  

  const logout = async () => {
    try {
      // const url = "http://localhost:8000/logout";
      const url = "https://blog-server-seven-nu.vercel.app/logout";

      const response = await axios.post(url);

      if (response.data.success) {
        alert("Logged out successfully");
        setIsLoggedIn(false);
      }
    } catch (error) {
      alert("Logout failed: ", error.response.data.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, login, logout }}
    >{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}