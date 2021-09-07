import React from "react";

import "./styles.css";

let PostsCard = ({ title, body, id }) => {
  return (
    <div id="cardPosts">
      <p className="postsId">#{id}</p>
      <p className="postsTitle">{title}</p>
      <p className="postsText">{body}</p>

    </div>
  );
};

export default PostsCard;
