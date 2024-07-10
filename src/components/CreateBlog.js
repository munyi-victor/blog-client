import React, { useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createNewPost = async (e) => {
    e.preventDefault();

    try {
      // const url = "http://localhost:8000/create-blog";
      const url = "https://blog-server-seven-nu.vercel.app/create-blog";

      const response = await axios.post(url, { title, body });
      if (response.data.success) {
        alert("Your blog was published successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      alert(error);
    }

    
    setTitle("");
    setBody("");
  }

  return (
    <div className="create-blog text-center pt-2">
      <h3>Create new blog</h3>

      <div style={{ marginTop: "30px" }}>
        <form onSubmit={createNewPost} style={{display:"flex", flexDirection:"column", gap:20, margin:"0 10vw"}}>
          <textarea
            rows={1}
            style={{ width: "80vw", borderRadius: 14, padding: "10px" }}
            placeholder="Your blog title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows={10}
            style={{
              width: "80vw",
              borderRadius: 14,
              padding: "10px",
              marginTop: "10px",
            }}
            placeholder="Your blog content"
            required
            onChange={(e) => setBody(e.target.value)}
          />

          <input
            type="submit"
            value={"Publish"}
            className=" text-decoration-none fs-5"
            style={{  
              backgroundColor: "white",
              color: "#28a775",
              padding: "2px 6px",
              borderRadius: 12,
              width:"200px"
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;