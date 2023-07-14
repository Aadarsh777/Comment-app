import React, { useState } from "react";
import "./Comments.css";
import Comment from "./Comment";



const Comments = ({allComments}) => {
  return (
    <div className="comments-section">
      {allComments.map((com) => (
        <Comment com={com} />
      ))}
    </div>
  );
};

export default Comments;
