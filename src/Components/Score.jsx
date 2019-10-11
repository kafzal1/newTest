import React from "react";
import "./Score.css";

function Score(props) {
  return (
    <div className="Scoring">
      <h1>Scores:{props.score}</h1>
    </div>
  );
}

export default Score;
