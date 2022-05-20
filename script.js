let operandHolder = 0;
let newOperandHolder = 0;
let savedOperand;
let operator;
let result;

// hide divs to the left of screen
document.getElementById("operator").style.display = "none";
document.getElementById("oldOperand").style.display = "none";

// Get input
const input = (id) => {
  //   Check if it's an operator
  if (id == "*" || id == "+" || id == "-" || id == "/" || id == "mod") {
    setOperator(id);
  } else if (id == "calc") {
    calc(savedOperand, newOperandHolder, operator);
  } else if (id == "cls") {
    clear();
  } else {
    setOperand(id);
  }
};

const setOperand = (id) => {
  // concatenate new id to operands and convert to int
  operandHolder = operandHolder + `${id}`;
  newOperandHolder = parseFloat(operandHolder);
  //   Update display
  document.querySelector("#newOperand").innerHTML = newOperandHolder;
};

const setOperator = (id) => {
  operator = id;

  // save operand
  savedOperand = newOperandHolder;

  //   reset current operand to 0
  newOperandHolder = 0;
  operandHolder = 0;

  //   update display
  document.querySelector("#newOperand").innerHTML = newOperandHolder;
  document.querySelector("#oldOperand").innerHTML = savedOperand;
  document.getElementById("oldOperand").style.display = "block";

  // Display operator
  document.querySelector("#operator").innerHTML = operator;
  document.getElementById("operator").style.display = "block";
};

const calc = (savedOperand, newOperandHolder, operator) => {
  console.log("operator", operator);
  let a = parseFloat(savedOperand);
  let b = parseFloat(newOperandHolder);

  if (operator == "*") {
    result = a * b;
  } else if (operator == "/") {
    result = a / b;
  } else if (operator == "+") {
    result = a + b;
  } else if (operator == "-") {
    result = a - b;
  } else if (operator == "mod") {
    result = a % b;
  }

  document.querySelector("#result").innerHTML = result;
};

const clear = () => {
  // reset everything
  newOperandHolder = 0;
  operandHolder = 0;
  result = 0;
  document.getElementById("operator").style.display = "none";
  document.getElementById("oldOperand").style.display = "none";
  document.querySelector("#newOperand").innerHTML = newOperandHolder;
  document.querySelector("#result").innerHTML = result;
};
