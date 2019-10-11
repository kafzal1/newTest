import React from "react";
import Row from "./Row";
import "./Panel.css";

function Panel(props) {
  let setSelector = props.setSelector.split("");
  const col = props.setColumn;
  const row = Math.ceil(setSelector.length / col);
  const rowArray = [];

  console.log(props.flag);
  let flags = props.flag;
  for (let index = 0; index < row; index++) {
    rowArray.push(setSelector.slice(index * col, (index + 1) * col).join(""));
  }

  return (
    <div className="Panel" onClick={props.characterComparison}>
      {rowArray.map((row, i) => (
        <Row key={i} word={row} flag={flags} />
      ))}
    </div>
  );
}

export default Panel;
