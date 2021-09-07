import React, { useEffect, useState } from "react";
import PostsCard from "../../components/Cards/Post/index";
import api from "../../services/api";
import "./styles.css";

let Posts = () => {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  });

  return (
    <div className="postsContainer">
      <div id="postsCards">
        {posts ? (
          posts.map((post) => (
            <PostsCard
              key={post.id}
              body={post.body}
              title={post.title}
              id={post.id}/> ))
        ) : (  <></>
        )}
      </div>
    </div>
  );
};

export default Posts;
