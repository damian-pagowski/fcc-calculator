import React from "react";

export default function Key(props) {
  return (
    <a href="#" class="myButton" id={props.button.id} onClick={() => props.handler(props.button.id)}>
      <div className="button-text">{props.button.label}</div>
    </a>
  );
}
