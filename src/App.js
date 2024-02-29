import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from './auth/AuthContext';
import NavPage from './components/NavPage';
import LoginPage from './auth/LoginPage';
import RegisterPage from './auth/RegisterPage';
import Homepage from './components/HomePage';
import UserProfile from './components/UserProfile';
import CreateBlog from './components/CreateBlog';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <NavPage />
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route path="/profile" Component={UserProfile} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/register" Component={RegisterPage} />
          <Route path="/create-blog" Component={CreateBlog} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;