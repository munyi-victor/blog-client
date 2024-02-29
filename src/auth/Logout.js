import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Logout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  }
  return (
      <Link
        to="/"
        className="text-white text-decoration-none fs-4"
        onClick={handleLogout}
      >
        Logout
      </Link>
  );
}

export default Logout;