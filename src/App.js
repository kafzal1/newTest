import "./App.css";
import React, { Component } from "react";
import Row from "./Components/Row";
import Panel from "./Components/Panel";

class App extends Component {
  state = {
    guessWord: "Random Word",
    charSetSelection: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    matchedChars: []
  };

  render() {
    console.log(this.state.matchedChars);
    return (
      <div className="App">
        <Row
          id="guessingWord"
          name="question"
          word={this.state.guessWord}
          matched={this.state.matchedChars}
        />
        <Panel
          onClick={this.checkValidity}
          setSelector={this.state.charSetSelection}
          setColumn={13}
        />
      </div>
    );
  }
  checkValidity = event => {
    const char = event.target.innerText.toLowerCase();
    if (this.state.guessWord.indexOf(char) !== -1) {
      // console.log(char + "Matches in " + this.state.guessWord);
      this.setState(currentState => {
        return { matchedChars: [...currentState.matchedChars, char] };
      });
    }
  };
}

export default App;
