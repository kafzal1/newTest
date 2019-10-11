import "./App.css";
import React, { Component } from "react";

import Panel from "./Components/Panel";
import Question from "./Components/Question";
import Score from "./Components/Score";
import HangmanDrawing from "./Components/HangmanDrawing";

class App extends Component {
  state = {
    guessWord: "Word",
    charSetSelection: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    matchedChars: [],
    score: 0,
    strike: 9
  };

  render() {
    return (
      <div className="App">
        <h1 className="intro">Hangman</h1>
        <p>Guess the word!</p>
        <HangmanDrawing strike={this.state.strike} />
        <Score score={this.state.score} />
        <Question
          word={this.state.guessWord}
          matched={this.state.matchedChars}
        />
        <Panel
          onClick={this.checkValidity}
          setSelector={this.state.charSetSelection}
          setColumn={13}
          matched={this.state.matchedChars}
        />
      </div>
    );
  }
  checkValidity = event => {
    const char = event.target.innerText.toLowerCase();
    if (this.state.guessWord.toLowerCase().indexOf(char) !== -1) {
      if (this.state.matchedChars.indexOf(char) === -1)
        this.setState(currentState => {
          return {
            matchedChars: [...currentState.matchedChars, char],
            score: currentState.score + 1
          };
        });
    }
  };
}

export default App;
