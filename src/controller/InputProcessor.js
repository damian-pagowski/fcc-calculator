module.exports = {
  handleDigit: function(stateCopy, buttonValue) {
    if (stateCopy.lastInput == "equals") return stateCopy;
    if (!(stateCopy.lastInput == "leadingZero" && buttonValue == 0)) {
      let formula = stateCopy.init
        ? "".concat(buttonValue)
        : stateCopy.formula.concat(buttonValue);
      let display =
        stateCopy.lastInput == "digit" && !stateCopy.init
          ? stateCopy.display.concat(buttonValue)
          : "".concat(buttonValue);
      return {
        formula,
        init: false,
        display,
        lastInput: "digit",
        currentOperation: null,
        operatorsUsed: 0,
      };
    }
    console.log(JSON.stringify(stateCopy));
    return stateCopy;
  },
  handleDot: function(stateCopy) {
    let formula = "";
    let operator = ".";
    if (stateCopy.lastInput == "dot") return stateCopy;
    if (stateCopy.isDecimal) return stateCopy;
    if (stateCopy.lastInput == "equals") {
      formula = "0".concat(operator);
    } else {
      formula = stateCopy.formula.concat(operator);
    }

    if (stateCopy.lastInput == "operator") {
      formula = stateCopy.formula.concat("0").concat(operator);
    }
    return {
      init: false,
      formula,
      display: ".",
      lastInput: "dot",
      isDecimal: true,
      operatorsUsed: 0,
      currentOperation: operator,
    };
  },
  handleClear: function() {
    return {
      init: true,
      formula: "0",
      display: "0",
      lastInput: "leadingZero",
      isDecimal: false,
      currentOperation: null,
      operatorsUsed: 0,
    };
  },

  handleEquals: function(stateCopy) {
    if (stateCopy.lastInput == "equals") return stateCopy;
    let display = null;
    try {
      display = eval(stateCopy.formula);
    } catch (e) {
      console.log("Error while evaluating expression: " + e);
    }
    let formula = display ? `${stateCopy.formula} = ${display}` : "ERROR";
    return {
      formula,
      display,
      lastInput: "equals",
      isDecimal: false,
      currentOperation: null,
      operatorsUsed: 0,
    };
  },

  handleOperator: function(stateCopy, buttonValue) {
    if (stateCopy.lastInput == "equals") return stateCopy;
    let formula;
    let operatorsUsed;
    let currentOperation = buttonValue;

    if (stateCopy.lastInput == "operator") {
      // if previous is operator , current minus
      // add to operator list
      // else - just overwrite
      formula = removeLastChars(
        stateCopy.formula,
        stateCopy.operatorsUsed
      ).concat(buttonValue);
      operatorsUsed = 1;
    } else {
      formula = stateCopy.formula.concat(buttonValue);
      operatorsUsed = 1;
    }

    return {
      formula,
      display: buttonValue,
      lastInput: "operator",
      isDecimal: false,
      currentOperation,
      operatorsUsed,
    };
  },
};

function replaceLastChar(str, lastChar) {
  let newStr = removeLastChars(str, 1);
  return newStr.concat(lastChar);
}

function removeLastChars(str, numberOfChar) {
  return str.substring(0, str.length - numberOfChar);
}
