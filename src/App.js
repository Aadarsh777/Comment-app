import { Fragment } from "react";
import "./App.css";
import CommentBox from "./components/CommentBox";
import Comments from "./components/Comments";

const allComments = [
  {
    name: "Aadarsh",
    comment: "Very Nice!",
    upVote: 1,
    downVote: 0,
  },
  {
    name: "Sonu",
    comment: "Very Bad!",
    upVote: 2,
    downVote: 0,
  },
];

function App() {
  return (
    <Fragment>
      <CommentBox allComments={allComments} />
      <Comments allComments={allComments} />
    </Fragment>
  );
}

export default App;
