import React from "react";
import "./Comments.css";
import Comment from "./Comment";

const Comments = ({ allComments }) => {
  allComments.sort((a, b) => b.upVote - a.upVote);
  return (
    <div className="comments-section">
      {allComments.map((com) => (
        <Comment key={com.id} com={com} />
      ))}
    </div>
  );
};

export default Comments;
