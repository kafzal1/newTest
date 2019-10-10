import React from "react";
import Row from "./Row";
import "./Panel.css";

function Panel(props) {
  let setSelector = props.setSelector.split("");
  const col = props.setColumn;
  const row = Math.ceil(setSelector.length / col);
  const rowArray = [];

  for (let index = 0; index < row; index++) {
    rowArray.push(setSelector.slice(index * col, (index + 1) * col).join(""));
  }

  return (
    <div className="Panel" onClick={wordToCompare}>
      {rowArray.map((row, i) => (
        <Row key={i} word={row} />
      ))}
    </div>
  );
}

const wordToCompare = event => {
  if (typeof event.target.value === "string")
    console.log(event.target.innerText, "<--- another event within div ");
};

export default Panel;
