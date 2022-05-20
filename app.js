// const calc = (id) => {
//   console.log(id);
//   document.querySelector("#operand1").innerHTML = id;
// };

//   get all numbers
const numberButtons = document.querySelectorAll("[data-number]");
console.log("numberButtons", numberButtons);

//   get all operators
const operationButtons = document.querySelectorAll("[data-operator]");
console.log("operationButtons", operationButtons);

//   Get previous and current input
const oldOperand = document.querySelector("[oldOperand]");
const newOperand = document.querySelector("[newOperand]");

class Calculator {
  constructor(oldOperand, newOperand) {
    this.oldOperand = oldOperand;
    this.newOperand = newOperand;
    this.reset();
  }

  // reset function
  reset() {
    this.oldOperand = "";
    this.newOperand = "";
    this.operation = undefined;
  }

  //   delete function
  delete() {
    this.newOperand = this.newOperand.toString().slice(0, -1);
  }

  //   Add new number to calculate
  addNumber(num) {
    if (num === "." && this.newOperand.includes(".")) return;
    this.newOperand = this.newOperand.toString() + num.toString();
  }

  // operation to be done operator selected
  chooseOperation(operation) {
    if (this.newOperand === "") return;
    if (this.oldOperand !== "") {
      this.compute();
    }
    this.operation = operation;
    this.oldOperand = this.newOperand;
    this.newOperand = "";
  }

  //   calculate
  calc() {
    let computation;
    const prev = parseFloat(this.oldOperand);
    const current = parseFloat(this.newOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      case "%":
        computation = prev % current;
        break;
      default:
        return;
    }
    this.newOperand = computation;
    this.operation = undefined;
    this.oldOperand = "";
  }

  //   update DOM
  update() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(
      this.newOperand
    );
    if (this.operation != null) {
      this.previousOperandTextElement.innerText = `${this.getDisplayNumber(
        this.oldOperand
      )} ${this.operation}`;
    } else {
      this.previousOperandTextElement.innerText = "";
    }
  }
}

const calculator = new Calculator(oldOperand, newOperand);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.addNumber(button.innerText);
    calculator.update();
  });
});
