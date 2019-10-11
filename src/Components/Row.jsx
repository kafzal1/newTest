import React from "react";
import "./Button.css";
import Button from "./Button";

function Row(props) {
  return (
    <div className="Row">
      {props.word.split("").map((char, i) => {
        return props.matched.includes(char.toLowerCase()) ? (
          <Button
            key={i}
            value={char}
            type={["matched"]}
            onClick={props.onClick}
          />
        ) : (
          [
            props.notMatched.includes(char.toLowerCase()) ? (
              <Button
                key={i}
                value={char}
                onClick={props.onClick}
                type={["notMatched"]}
              />
            ) : (
              <Button
                key={i}
                value={char}
                onClick={props.onClick}
                type={[""]}
              />
            )
          ]
        );
      })}
    </div>
  );
}

export default Row;
