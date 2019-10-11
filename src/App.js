import "./App.css";
import React, { Component } from "react";

import Panel from "./Components/Panel";
import Question from "./Components/Question";

class App extends Component {
  state = {
    guessWord: "Random Word",
    charSetSelection: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    matchedChars: []
  };

  render() {
    return (
      <div className="App">
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
    if (this.state.guessWord.indexOf(char) !== -1) {
      this.setState(currentState => {
        return { matchedChars: [...currentState.matchedChars, char] };
      });
    }
  };
}

export default App;
