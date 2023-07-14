import React from "react";
import "./CommentBox.css";

const CommentBox = ({ allComments }) => {
  return (
    <div className="comment-section">
      <form className="comment-form" action="post">
        <input
          className="comment-input"
          type="text"
          placeholder="Enter your name"
        />
        <textarea
          className="comment-textarea"
          placeholder="Write your comment here"
          cols="30"
          rows="30"
        ></textarea>
        <button type="submit" className="comment-button">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
