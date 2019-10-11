import React from "react";
import Row from "./Row";
import "./Question.css";
function Question(props) {
  return (
    <div className="Question">
      <Row
        id="guessingWord"
        name="question"
        word={props.word}
        matched={props.matched}
        notMatched={props.notMatched}
      />
    </div>
  );
}

export default Question;
