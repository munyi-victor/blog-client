import axios from "axios";
import React, { useState, useEffect } from "react";
import { useAuth } from '../auth/AuthContext';

import {differenceInMilliseconds, formatDistanceToNow } from 'date-fns';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [date, setDate] = useState(null);

  const loggedInUserId = localStorage.getItem("loggedInUserId");
  const { login } = useAuth();

  useEffect(() => {
    const getBlogs = async () => {
      if (loggedInUserId !== null){
        login();
      }

      try {
        // const url = "http://localhost:8000/get-blogs";
        const url = "https://blog-server-seven-nu.vercel.app/get-blogs";
        const response = await axios.get(url);
        setBlogs(response.data);
      } catch (error) {
        alert(error);
      }
    }

    getBlogs();
  }, [loggedInUserId, login]);

  if (blogs === null) {
    return <div>Loading...</div>;
  }

  blogs.forEach(blog => {
    const pDate = new Date(blog.date);
    setDate(pDate);
  })

  const elapsedTime = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div className="container text-center p-2 w-75">
      <h3>Get the Latest News Here</h3>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginTop: 20,
        }}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-light"
            style={{
              textAlign: "left",
              cursor: "pointer",
              padding: 20,
              borderRadius: 14,
            }}
          >
            <h5>{blog.title}</h5>
            <p>{blog.body}</p>
            <p>
              <b>{elapsedTime}</b>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;