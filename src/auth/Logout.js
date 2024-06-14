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
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Logout
      </Link>
  );
}

export default Logout;