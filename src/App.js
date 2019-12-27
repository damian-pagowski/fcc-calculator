import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

const ip = require("./controller/InputProcessor");
const data = {
  zero: { id: "zero", label: "0", val: "0" },
  one: { id: "one", label: "1", val: 1 },
  two: { id: "two", label: "2", val: 2 },
  three: { id: "three", label: "3", val: 3 },
  four: { id: "four", label: "4", val: 4 },
  five: { id: "five", label: "5", val: 5 },
  six: { id: "six", label: "6", val: 6 },
  seven: { id: "seven", label: "7", val: 7 },
  eight: { id: "eight", label: "8", val: 8 },
  nine: { id: "nine", label: "9", val: 9 },
  clear: { id: "clear", label: "<", clear: true },
  multiply: { id: "multiply", label: "*", operator: "*" },
  divide: { id: "divide", label: "/", operator: "/" },
  subtract: { id: "subtract", label: "-", operator: "-" },
  add: { id: "add", label: "+", operator: "+" },
  decimal: { id: "decimal", label: ".", operator: "." },
  equals: { id: "equals", label: "=", equals: true },
};
class App extends React.Component {
  state = {
    init: true,
    formula: "0",
    display: "0",
    lastInput: "leadingZero",
    currentOperation: null,
    isDecimal: false,
    operatorsUsed: 0,
  };

  keyPressHandler = buttonId => {
    const button = data[buttonId];
    console.log("CLICKED - ID: " + JSON.stringify(button));

    if (button) {
      if (button.val) {
        this.setState(ip.handleDigit({ ...this.state }, button.val));
      }
      if (button.clear) {
        this.setState(ip.handleClear());
      }
      if (button.operator == ".") {
        this.setState(ip.handleDot({ ...this.state }));
      }

      if (button.operator && button.operator != ".") {
        this.setState(ip.handleOperator({ ...this.state }, button.operator));
      }
      if (button.equals) {
        this.setState(ip.handleEquals({ ...this.state }));
      }
    }
  };

  render() {
    return (
      <div className="App" id="app-container">
        <h1 id="title">Hipster Vintage Calc</h1>
        <Display display={this.state.display} formula={this.state.formula} />
        <Keyboard data={data} handler={this.keyPressHandler} />
      </div>
    );
  }
}

export default App;
