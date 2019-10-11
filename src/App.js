import "./App.css";
import React, { Component } from "react";
import Row from "./Components/Row";
import Panel from "./Components/Panel";

class App extends Component {
  state = {
    guessWord: "Random Word",
    charSetSelection: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    flag: false
  };

  render() {
    return (
      <div className="App">
        <Row id="guessingWord" word={this.state.guessWord} />
        <Panel
          setSelector={this.state.charSetSelection}
          setColumn={13}
          characterComparison={this.characterComparison}
          flag={this.state.flag}
        />
      </div>
    );
  }

  characterComparison = event => {
    if (typeof event.target.value === "string")
      // if (
      //   this.state.guessWord
      //     .toLocaleLowerCase()
      //     .contains(event.target.innerText)
      // )
      console.log(
        event.target.innerText,
        "<--- another event within div ",
        this.state.guessWord.toUpperCase().includes(event.target.innerText)
      );
    this.setState({
      flag: this.state.guessWord.toUpperCase().includes(event.target.innerText)
    });
  };
}

export default App;
