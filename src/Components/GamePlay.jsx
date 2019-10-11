import React from "react";
import Panel from "./Panel";
import Question from "./Question";
import Score from "./Score";
import HangmanDrawing from "./HangmanDrawing";

function GamePlay(props) {
  return (
    <div className="App">
      <h1 className="intro">Hangman</h1>
      <p>Guess the word!</p>
      <HangmanDrawing strike={7 - props.score} />
      <Score score={props.score} />
      <Question
        word={props.word}
        matched={props.matched}
        notMatched={props.notMatched}
      />
      <Panel
        onClick={props.onClick}
        setSelector={props.setSelector}
        setColumn={props.setColumn}
        matched={props.matched}
        notMatched={props.notMatched}
      />
    </div>
  );
}

export default GamePlay;
