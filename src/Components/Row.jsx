import React from "react";
import "./Button.css";
import Button from "./Button";

function Row(props) {
  return (
    <div className="Row">
      {props.word.split("").map((char, i) => (
        <Button key={i} value={char} flags={props.flag} />
      ))}
    </div>
  );
}

export default Row;
