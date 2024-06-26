function add() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function multiply() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function divide() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest() {
  const principal = parseFloat(prompt("Enter the principal amount:"));
  const rate = parseFloat(prompt("Enter the rate of interest:"));
  const time = parseFloat(prompt("Enter the time period:"));
  const interest = (principal * rate * time) / 100;
  alert("The simple interest is: " + interest);
}
