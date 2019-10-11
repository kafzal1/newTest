import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className={["Button", ...props.type].join(" ")}>
      <button value={props.value} onClick={props.onClick}>
        {props.value}
      </button>
    </div>
  );
}

export default Button;
//{["Button", ...props.type].join(" ")}
