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
    <div className="Panel">
      {rowArray.map((row, i) => (
        <Row key={i} word={row} onClick={props.onClick} />
      ))}
    </div>
  );
}

export default Panel;
