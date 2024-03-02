import axios from "axios";
import React, { useState, useEffect } from "react";
// import { useAuth } from '../auth/AuthContext';

const HomePage = () => {
  // const { isLoggedIn } = useAuth();

  // const initialLikes = parseInt(localStorage.getItem(`likes_`)) || 0;

  // const [likes, setLikes] = useState(initialLikes);
  // const [hasLiked, setHasLiked] = useState(false);

  // useEffect(() => {
  //   localStorage.setItem(`likes_`, likes.toString());
  // }, [likes]);

  // const like = () => {
  //   if (!isLoggedIn) {
  //     alert("You must be logged in to like posts");
  //   } else {
  //     if (!hasLiked) {
  //       setLikes(likes + 1);
  //       setHasLiked(true);
  //     }
  //   }
  // }

  // const disLike = () => {
  //   if (!isLoggedIn) {
  //     alert("You must be logged in to dislike posts");
  //   } else {
  //     if (hasLiked) {
  //       setLikes(likes - 1);
  //       setHasLiked(false);
  //     }
  //   }
  // }

  // const comment = () => {

  // }

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/get-blogs");
        setBlogs(response.data);
      } catch (error) {
        alert(error);
      }
    }

    getBlogs();
  }, []);

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
              <b>{blog.date}</b>
            </p>
          </div>
        ))}
      </div>

      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginTop: 20,
        }}
      >
        <div
          className="bg-light"
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: 20,
            borderRadius: 14,
          }}
        >
          <h5>
            Rooney admits Man Utd players "weren't having" Moyes as Keane claims
            stars showed lack of "respect"
          </h5>

          <p>
            Former Man Utd captain Roy Keane and Wayne Rooney agree that the Red
            Devils players “weren't having” David Moyes when he was appointed
            Sir Alex Ferguson's successor. Moyes signed a six-year contract at
            Old Trafford as he was chosen to be the next manager up after
            legendary boss Ferguson retired in 2013.
          </p>

          <div style={{ display: "flex", gap: 10 }}>
            {hasLiked ? (
              <button
                onClick={disLike}
                style={{ cursor: "pointer", padding: 2, borderRadius: 50 }}
              >
                D
              </button>
            ) : (
              <button
                onClick={like}
                style={{ cursor: "pointer", padding: 2, borderRadius: 50 }}
              >
                L
              </button>
            )}
            <span>{likes}</span>

            <button onClick={comment}>Comment</button>
          </div> 
        </div>

        <div
          className="bg-light"
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: 20,
            borderRadius: 14,
          }}
        >
          <h5>
            Rooney admits Man Utd players "weren't having" Moyes as Keane claims
            stars showed lack of "respect"
          </h5>

          <p>
            Former Man Utd captain Roy Keane and Wayne Rooney agree that the Red
            Devils players “weren't having” David Moyes when he was appointed
            Sir Alex Ferguson's successor. Moyes signed a six-year contract at
            Old Trafford as he was chosen to be the next manager up after
            legendary boss Ferguson retired in 2013.
          </p>
        </div>

        <div
          className="bg-light"
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: 20,
            borderRadius: 14,
          }}
        >
          <h5>
            Rooney admits Man Utd players "weren't having" Moyes as Keane claims
            stars showed lack of "respect"
          </h5>

          <p>
            Former Man Utd captain Roy Keane and Wayne Rooney agree that the Red
            Devils players “weren't having” David Moyes when he was appointed
            Sir Alex Ferguson's successor. Moyes signed a six-year contract at
            Old Trafford as he was chosen to be the next manager up after
            legendary boss Ferguson retired in 2013.
          </p>
        </div>

        <div
          className="bg-light"
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: 20,
            borderRadius: 14,
          }}
        >
          <h5>
            Rooney admits Man Utd players "weren't having" Moyes as Keane claims
            stars showed lack of "respect"
          </h5>

          <p>
            Former Man Utd captain Roy Keane and Wayne Rooney agree that the Red
            Devils players “weren't having” David Moyes when he was appointed
            Sir Alex Ferguson's successor. Moyes signed a six-year contract at
            Old Trafford as he was chosen to be the next manager up after
            legendary boss Ferguson retired in 2013.
          </p>
        </div>

        <div
          className="bg-light"
          style={{
            textAlign: "left",
            cursor: "pointer",
            padding: 20,
            borderRadius: 14,
          }}
        >
          <h5>
            Rooney admits Man Utd players "weren't having" Moyes as Keane claims
            stars showed lack of "respect"
          </h5>

          <p>
            Former Man Utd captain Roy Keane and Wayne Rooney agree that the Red
            Devils players “weren't having” David Moyes when he was appointed
            Sir Alex Ferguson's successor. Moyes signed a six-year contract at
            Old Trafford as he was chosen to be the next manager up after
            legendary boss Ferguson retired in 2013.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;