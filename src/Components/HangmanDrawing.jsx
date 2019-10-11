import React, { Component } from "react";

class HangmanDrawing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      segments: [
        <line
          key="strike1"
          x1="0"
          y1="0"
          x2="0"
          y2="120"
          stroke="black"
          stroke-width="3"
        />,
        <line
          key="strike2"
          x1="0"
          y1="0"
          x2="60"
          y2="0"
          stroke="black"
          stroke-width="3"
        />,
        <line
          key="strike4"
          x1="60"
          y1="0"
          x2="60"
          y2="15"
          stroke="black"
          stroke-width="3"
        />,
        <circle
          key="strike3"
          cx="60"
          cy="30"
          r="15"
          stroke="black"
          stroke-width="3"
        />,
        <line
          key="strike5"
          x1="60"
          y1="45"
          x2="60"
          y2="90"
          stroke="black"
          stroke-width="3"
        />,
        <line
          key="strike6"
          x1="35"
          y1="60"
          x2="85"
          y2="60"
          stroke="black"
          stroke-width="3"
        />,
        <line
          key="strike7"
          x1="60"
          y1="90"
          x2="35"
          y2="120"
          stroke="black"
          stroke-width="3"
        />,
        <line
          key="strike8"
          x1="60"
          y1="90"
          x2="85"
          y2="120"
          stroke="black"
          stroke-width="3"
        />
      ]
    };
  }

  render() {
    return (
      <div className="hangman">
        <svg>{this.state.segments.slice(0, this.props.strike)}</svg>
      </div>
    );
  }
}

export default HangmanDrawing;
