import React, { useEffect, useState } from "react";
import Logout from "../auth/Logout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

const UserProfile = () => {
  const loggedInUserId = localStorage.getItem("loggedInUserId");

  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const { logout } = useAuth();
  const { login } = useAuth();

  useEffect(() => {
    const currentUser = async () => {
      if (loggedInUserId === null) {
        logout();
      } else {
        login();
      }

      try {
        // const url = `http://localhost:8000/getUsers/${loggedInUserId}`
        const url = `https://blog-server-seven-nu.vercel.app/getUsers/${loggedInUserId}`;
        const response = await axios.get(url);

        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    currentUser();
  }, [loggedInUserId, navigate, logout, login]);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="container text-center">
      <h2>Your Profile</h2>
      <p>{user.username}</p>
      <p>{user.email}</p>

      <div className="d-flex flex-column gap-2 w-25 align-items-center">
        <Link to="/create-blog" className="btn btn-success">
          Create Blog
        </Link>

        <Logout />
      </div>
    </div>
  );
};

export default UserProfile;
