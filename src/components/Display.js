import React from "react";

export default function Display(props) {
  return (
    <div id="display-area">
      <div id="formula" className="ellipsis"> {props.formula}</div>
      <div id="display" className="ellipsis"> {props.display}</div>
    </div>
  );
}
