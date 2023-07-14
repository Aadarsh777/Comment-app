import React, { useState } from "react";
// import Reply from "./Reply";

const replies = [
  {
    name: "Aadarsh Raj",
    reply: "it is a reply",
  },
];

const Comment = ({ com }) => {
  const [open, setOpen] = useState(false);
  const [replyTextarea, setReplyTextarea] = useState("");

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

  const replySubmit = function () {
    replies.push({ name: "Adarsh Raj", reply: replyTextarea });
  };

  return (
    <div className="comments-section-div">
      <h1 className="comments-h1">{com.name}</h1>
      <p className="comments-p">{com.comment}</p>
      <div className="comments-vote">
        <span className="comments-upVote">{com.upVote} Upvote</span>
        <span className="comments-downVote">{com.downVote} DownVote</span>
        <span className="reply-button" onClick={replyComment}>
          reply
        </span>
      </div>
      {open && (
        <div>
          <form onSubmit={replySubmit}>
            <textarea
              onChange={textchange}
              cols="20"
              rows="10"
              value={replyTextarea}
            ></textarea>
            <button type="submit">Reply</button>
          </form>
        </div>
      )}
      {open && replies.length > 0 && (
        <div>
          {replies.map((reply) => (
            <div>
              <h1>{reply.name}</h1>
              <p>{reply.reply}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
