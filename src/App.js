import "./App.css";
import React, { Component } from "react";

import Panel from "./Components/Panel";
import Question from "./Components/Question";
import Score from "./Components/Score";
import GamePlay from "./Components/GamePlay";
import GameOver from "./Components/GameOver";
import GameWon from "./Components/GameWon";

class App extends Component {
  state = {
    guessWord: "Word",
    charSetSelection: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    matchedChars: [],
    notMatchedChars: [],
    score: 8
  };

  render() {
    return this.state.score >= 0 ? (
      [
        this.state.matchedChars.length >= this.state.guessWord.length ? (
          <GameWon />
        ) : (
          <GamePlay
            score={this.state.score}
            word={this.state.guessWord}
            matched={this.state.matchedChars}
            notMatched={this.state.notMatchedChars}
            setSelector={this.state.charSetSelection}
            setColumn={13}
            onClick={this.checkValidity}
          />
        )
      ]
    ) : (
      <GameOver />
    );
  }
  checkValidity = event => {
    const char = event.target.innerText.toLowerCase();
    if (this.state.guessWord.toLowerCase().indexOf(char) !== -1) {
      if (this.state.matchedChars.indexOf(char) === -1)
        this.setState(currentState => {
          return {
            matchedChars: [...currentState.matchedChars, char]
          };
        });
    } else {
      this.setState(currentState => {
        console.log(" ", currentState.notMatchedChars, " <-- unmatched");
        return {
          notMatchedChars: [...currentState.notMatchedChars, char],
          score: currentState.score - 1
        };
      });
    }
  };
}

export default App;

{
  /* <GamePlay
  score={this.state.score}
  word={this.state.guessWord}
  matched={this.state.matchedChars}
  notMatched={this.state.notMatchedChars}
  setSelector={this.state.charSetSelection}
  setColumn={13}
  onClick={this.checkValidity}
/> */
}
