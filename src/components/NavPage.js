import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../auth/AuthContext';
import prof from "../assets/images/logo192.png";

const NavPage = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <nav className="nav py-1 d-flex shadow">
        <Link to="/" className="text-white text-decoration-none fs-4">
          Home
        </Link>

        {/* 
        <Link
            to="/"
            className="text-white text-decoration-none fs-4"
            onClick={logout}
          >
            Logout
          </Link>

        <div className='d-flex'>
          <Link to="/login" className="text-white text-decoration-none fs-3">
            Login
          </Link>
          <Link to="/register" className="text-white text-decoration-none fs-3">
            Register
          </Link>
        </div> */}

        {isLoggedIn ? (
          <div className="d-flex">
            <Link
              to="/profile"
              className="text-white text-decoration-none fs-4"
            >
              <img
                src={prof}
                alt="profile pic"
                width={34}
                height={34}
                style={{ border: "1px solid black", borderRadius: "17px" }}
              />
            </Link>
          </div>
        ) : (
          <div className="d-flex">
            <Link to="/login" className="text-white text-decoration-none fs-5">
              Login
            </Link>
            <Link
              to="/register"
              className="text-white text-decoration-none fs-5"
            >
              Register
            </Link>
          </div>
        )}
      </nav>

      <div></div>
    </div>
  );
};

export default NavPage;