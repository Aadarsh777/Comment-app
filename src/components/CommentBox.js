import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./CommentBox.css";

const CommentBox = ({ changeallComments }) => {
  const [commentName, setCommentName] = useState("");
  const [actualComment, setActualComment] = useState("");

  const [allComments, setAllComments] = useState([
    {
      id: uuidv4(),
      name: "Aadarsh",
      comment: "Very Nice!",
      upVote: 1,
      downVote: 0,
    },
    {
      id: uuidv4(),
      name: "Sonu",
      comment: "Very Bad!",
      upVote: 2,
      downVote: 0,
    },
  ]);

  const nameChange = (e) => {
    setCommentName(e.target.value);
  };

  const commentChange = (e) => {
    setActualComment(e.target.value);
  };

  const commentSubmit = (e) => {
    e.preventDefault();
    const ide = uuidv4();
    localStorage.setItem("ide", ide);
    const obj = {
      id: localStorage.getItem("ide"),
      name: commentName,
      comment: actualComment,
      upVote: 0,
      downVote: 0,
    };
    setAllComments([...allComments, obj]);
    changeallComments(obj);
    setActualComment("");
    setCommentName("");
  };

  return (
    <div className="comment-section">
      <form onSubmit={commentSubmit} className="comment-form" action="post">
        <input
          className="comment-input"
          type="text"
          onChange={nameChange}
          value={commentName}
          placeholder="Enter your name"
        />
        <textarea
          className="comment-textarea"
          placeholder="Write your comment here"
          cols="30"
          rows="30"
          onChange={commentChange}
          value={actualComment}
        ></textarea>

        <button type="submit" className="comment-button">
          Comment
        </button>
      </form>
    </div>
  );
};

export default CommentBox;
