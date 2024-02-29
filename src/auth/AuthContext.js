import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const checkAuth = useCallback(async () => {
    try {
      const url = "http://localhost:8000/checkAuth";

      const response = await axios.get(url);

      setIsLoggedIn(response.data.isAuthenticated);

      if (response.data.isAuthenticated) {
        const userData = await fetchUserData();
        setUser(userData);
      }
    } catch (error) {
      console.error("Error checking authentication status: ", error.message);
    }
  }, []);
  
  const fetchUserData = async () => {
    try {
      const url = "http://localhost:8000/userData";
      const response = await axios.get(url);

      return response.data;
    } catch (error) {
      alert("Error fetching user data", error.message);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await checkAuth();
    }
    fetchData();
  }, [checkAuth]);


  const login = () => {
    setIsLoggedIn(true);
  }  

  const logout = async () => {
    try {
      const url = "http://localhost:8000/logout";

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
      value={{ isLoggedIn, user, login, logout, checkAuth }}
    >{children}</AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
}