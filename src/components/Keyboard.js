import React from "react";
import Key from "./Key";
export default function Keyboard(props) {
  const buttons = props.data;
  const handler = props.handler;
  return (
    <div className="parent">
      <div className="div1"></div>
      <div className="div2"></div>
      <div className="div3">
        <Key button={buttons["clear"]} handler={handler}/>
      </div>
      <div className="div4">
        <Key button={buttons["multiply"]} handler={handler}/>
      </div>
      <div className="div5">
        <Key button={buttons["seven"]} handler={handler}/>
      </div>
      <div className="div6">
        <Key button={buttons["eight"]} handler={handler}/>
      </div>
      <div className="div7">
        <Key button={buttons["nine"]} handler={handler}/>
      </div>
      <div className="div8">
        <Key button={buttons["divide"]} handler={handler}/>
      </div>
      <div className="div9">
        <Key button={buttons["four"]} handler={handler}/>
      </div>
      <div className="div10">
        <Key button={buttons["five"]} handler={handler}/>
      </div>
      <div className="div11">
        <Key button={buttons["six"]} handler={handler}/>
      </div>
      <div className="div12">
        <Key button={buttons["one"]}  handler={handler}/>
      </div>
      <div className="div13">
        <Key button={buttons["two"]}  handler={handler}/>
      </div>
      <div className="div14">
        <Key button={buttons["three"]} handler={handler}/>
      </div>
      <div className="div15">
        <Key button={buttons["subtract"]} handler={handler}/>
      </div>
      <div className="div16">
        <Key button={buttons["add"]}  handler={handler}/>
      </div>
      <div className="div17"> </div>
      <div className="div18">
        <Key button={buttons["zero"]} handler={handler}/>
      </div>
      <div className="div19">
        <Key button={buttons["decimal"]} handler={handler}/>
      </div>
      <div className="div20">
        <Key button={buttons["equals"]}  handler={handler}/>
      </div>
    </div>
  );
}
