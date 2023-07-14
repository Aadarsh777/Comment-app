import React, { useState } from "react";
import "./Comments.css";
import { v4 as uuidv4 } from "uuid";
import Replies from "./Replies";

const Comment = ({ com }) => {
  const [open, setOpen] = useState(false);
  const [replyTextarea, setReplyTextarea] = useState("");
  const [replies, setReplies] = useState([
    {
      id: uuidv4(),
      name: "Aadarsh Raj",
      reply: "it is a reply",
    },
  ]);

  const [upVote, setUpvote] = useState(com.upVote);
  const [downVote, setDownVote] = useState(com.downVote);

  const upVoteChange = () => {
    let upVotes = upVote + 1;
    setUpvote(upVotes);
  };

  const downVoteChange = () => {
    let downVotes = downVote + 1;
    setDownVote(downVotes);
  };

  const replyComment = function () {
    if (open === false) {
      setOpen(true);
    } else if (open === true) {
      setOpen(false);
    }
  };

  const textchange = function (e) {
    let text = e.target.value;
    setReplyTextarea(text);
  };

  const replySubmit = function (e) {
    e.preventDefault();
    const ide = uuidv4();
    localStorage.setItem("ide", ide);
    const obj = {
      id: localStorage.getItem("ide"),
      name: "Adarsh Raj",
      reply: replyTextarea,
    };
    setReplies([...replies, obj]);
    setReplyTextarea("");
  };

  const replySubmitHandler = (obj1) => {
    setReplies([...replies, obj1]);
  };

  return (
    <div className="comments-section-div">
      <h1 className="comments-h1">{com.name}</h1>
      <p className="comments-p">{com.comment}</p>
      <div className="comments-vote">
        <span onClick={upVoteChange} className="comments-upVote">
          {upVote} Upvote
        </span>
        <span onClick={downVoteChange} className="comments-downVote">
          {downVote} DownVote
        </span>
        <span className="reply-button" onClick={replyComment}>
          reply
        </span>
      </div>
      {open && (
        <div className="reply-section">
          <form className="reply-form" onSubmit={replySubmit}>
            <textarea
              className="reply-textarea"
              onChange={textchange}
              cols="20"
              rows="10"
              value={replyTextarea}
            ></textarea>
            <button className="reply-button-section" type="submit">
              Reply
            </button>
          </form>
        </div>
      )}
      {open && replies.length > 0 && (
        <div>
          {replies.map((reply) => (
            <Replies reply={reply} replySubmitHandler={replySubmitHandler} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
