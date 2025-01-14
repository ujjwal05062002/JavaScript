// make a calculator

var operand1 = Number(prompt("Enter the first operand : "));
var operand2 = Number(prompt("Enter the second operand : "));
var operator = prompt(`
    Select '+' for addition
    Select '-' for subtraction
    Select '*' for multiplication
    Select '/' for divison
    Select '%' for remainder
    `);

var result;

switch (operator) {
  case "+":
    result = operand1 + operand2;
    break;
  case "-":
    result = operand1 - operand2;
    break;
  case "*":
    result = operand1 * operand2;
    break;
  case "/":
    result = operand2 / operand1;
    break;
  case "%":
    result = operand2 % operand1;
    break;
  default:
    console.log("Invalid Input");
}

document.write(result)
