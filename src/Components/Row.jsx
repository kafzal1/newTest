import React from "react";
import "./Button.css";
import Button from "./Button";

function Row(props) {
  // props.matched
  //   ? console.log(props.matched.includes(), "<--- in row")
  //   : console.log("not");
  console.log(props.matched);
  return (
    <div className="Row">
      {props.word.split("").map((char, i) => {
        // props.matched
        //   ? console.log(char, props.matched.includes(char), "<--- in row")
        //   : console.log("not");
        return props.matched ? (
          props.matched.includes(char.toLowerCase()) ? (
            <Button
              key={i}
              value={char}
              type={["matched"]}
              onClick={props.onClick}
            />
          ) : (
            <Button key={i} value={char} onClick={props.onClick} />
          )
        ) : (
          <Button key={i} value={char} onClick={props.onClick} />
        );
      })}
    </div>
  );
}

export default Row;
