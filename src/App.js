import "./App.css";
import React, { Component } from "react";
import Row from "./Components/Row";
import Panel from "./Components/Panel";

class App extends Component {
  state = {
    guessWord: "Random Word",
    charSetSelection: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  };

  render() {
    return (
      <div className="App">
        <Row id="guessingWord" word={this.state.guessWord} />
        <Panel setSelector={this.state.charSetSelection} setColumn={13} />
      </div>
    );
  }
}

export default App;
