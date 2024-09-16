// define mathematic functions in variables
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Error"; // Prevent division by zero

// button variables
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const equals = document.getElementById("equals");
const display = document.getElementById("display-value");
const clearing = document.getElementById("clear");

let currentInput = "";
let storedInput = [];
let currentOperation = null;

// update the display
const updateDisplay = () => {
  display.textContent = currentInput;
};

// clear the display
const clearDisplay = () => {
  display.textContent = "";
  currentInput = "";
  storedInput = [];
};

// handle number button clicks
const handleNumberClick = (value) => {
  currentInput += value;
  updateDisplay();
};

// handle operation button clicks
const handleOperationClick = (operation) => {
  if (currentInput !== "") {
    storedInput.push(parseFloat(currentInput));
    currentInput = "";
  }
  currentOperation = operation;
};

// handle equals button click
const handleEqualsClick = () => {
  if (currentInput !== "") {
    storedInput.push(parseFloat(currentInput));
  }
  let result;
  switch (currentOperation) {
    case add:
      result = storedInput.reduce((acc, curr) => add(acc, curr));
      break;
    case subtract:
      result = storedInput.reduce((acc, curr) => subtract(acc, curr));
      break;
    case multiply:
      result = storedInput.reduce((acc, curr) => multiply(acc, curr));
      break;
    case divide:
      result = storedInput.reduce((acc, curr) => divide(acc, curr));
      break;
    default:
      result = "Error";
  }
  display.textContent = result;
  currentInput = "";
  storedInput = [];
  currentOperation = null;
};

// Add click event listeners for operation buttons
addition.addEventListener('click', () => handleOperationClick(add));
subtraction.addEventListener('click', () => handleOperationClick(subtract));
multiplication.addEventListener('click', () => handleOperationClick(multiply));
division.addEventListener('click', () => handleOperationClick(divide));
equals.addEventListener('click', handleEqualsClick);
clearing.addEventListener('click', clearDisplay);

// Handle number button clicks
document.querySelectorAll('.numpad-container button').forEach(button => {
  button.addEventListener('click', () => {
    handleNumberClick(button.textContent);
  });
});