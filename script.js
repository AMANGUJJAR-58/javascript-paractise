// assignment#7:
// 1. Write a js program to find maximum between two numbers.

// prompt the user to enter two numbers
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
// function that finds the maximum between two numbers
function findMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
// call the function and print the result to the console
var max = findMax(num1, num2);
console.log("The maximum between " + num1 + " and " + num2 + " is " + max + ".");

