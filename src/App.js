import { Fragment, useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import CommentBox from "./components/CommentBox";
import Comments from "./components/Comments";

function App() {
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
  const changeallComments = (obj) => {
    setAllComments([...allComments, obj]);
  };

  return (
    <Fragment>
      <CommentBox changeallComments={changeallComments} />
      <Comments allComments={allComments} />
    </Fragment>
  );
}

export default App;
