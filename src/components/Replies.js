import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Replies = ({ reply, replySubmitHandler }) => {
  const [replyOpen, setReplyOpen] = useState(false);
  const [replyTextarea, setReplyTextarea] = useState("");

  const replyOpenChange = function () {
    if (replyOpen === false) {
      setReplyOpen(true);
    } else if (replyOpen === true) {
      setReplyOpen(false);
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
    replySubmitHandler(obj);
    setReplyTextarea("");
  };

  return (
    <div key={reply.id}>
      <h1>{reply.name}</h1>
      <p>{reply.reply}</p>
      <span className="reply-span-section" onClick={replyOpenChange}>
        reply
      </span>
      {replyOpen && (
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
    </div>
  );
};

export default Replies;
