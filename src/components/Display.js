import React from "react";

export default function Display(props) {
  return (
    <div id="display">
      <p id="display-content">{props.content}</p>
    </div>
  );
}
