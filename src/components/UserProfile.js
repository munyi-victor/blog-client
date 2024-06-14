import React from "react";
// import { useAuth } from "../auth/AuthContext";
import Logout from "../auth/Logout";
import { Link } from "react-router-dom";

const UserProfile = () => {
  // const { isLoggedIn, user } = useAuth();

  // useEffect(() => {
  //   checkAuth();
  // }, [checkAuth]);

  // console.log(user);

  // if (!isLoggedIn) {
  //   return <p>You must be logged in to view your profile.</p>;
  // }

  // if (!user) {
  //   return <p>Loading user data...</p>;
  // }

  // if (!user.profile) {
  //   return <p>User profile data is not available.</p>;
  // }

  return (
    <div className="container text-center">
      <h2>Your Profile</h2>
      {/* <p>Name: {user.profile.name}</p> */}

      <div className="d-flex flex-column gap-2 w-25 align-items-center">
        <Link
          to="/create-blog"
          className="btn btn-success"
        >
          Create Blog
        </Link>

        <Logout />
      </div>
    </div>
  );
};

export default UserProfile;
