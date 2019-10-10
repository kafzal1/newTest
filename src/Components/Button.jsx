import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="Button">
      <button>{props.value}</button>
    </div>
  );
}

export default Button;
