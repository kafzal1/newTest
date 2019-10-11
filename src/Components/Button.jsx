import React from "react";
import "./Button.css";

function Button(props) {
  console.log(props.flags, "<-- Button");
  return (
    <div className="Button">
      <button>{props.value}</button>
    </div>
  );
}

export default Button;
