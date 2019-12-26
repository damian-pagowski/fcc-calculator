import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Display from "./components/Display";

const data = {
  zero: { id: "zero", label: "0", val: 0 },
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
    displayContent: "",
    current: "",
  };

  keyPressHandler = e => {
    const buttonId = e.target.id;
    console.log("CLICKED - ID: " + e.target.id);
    const button = data[buttonId];

    if (button) {
      if (button.val) {
        let updatedWithValue = this.state.displayContent.concat(button.val);
        this.setState({
          displayContent: updatedWithValue,
          current: button.val,
        });
        console.log(JSON.stringify(this.state));
      }
      if (button.operator) {
        let updatedWithOperator = this.state.displayContent.concat(
          button.operator
        );
        this.setState({
          displayContent: updatedWithOperator,
          current: button.operator,
        });
      }
      if (button.clear) {
        this.setState({
          displayContent: "",
          current: "",
        });
      }
      if (button.equals) {
        let result = null;
        try {
          result = eval(this.state.displayContent);
        } catch (e) {}

        let toDisplay = result
          ? `${this.state.displayContent} = ${result}`
          : "ERROR";
        this.setState({ displayContent: toDisplay, current: "" });
      }
    }
  };

  render() {
    return (
      <div className="App" id="app-container">
        <Display content={this.state.displayContent} />
        <Keyboard data={data} handler={this.keyPressHandler} />
      </div>
    );
  }
}

export default App;
