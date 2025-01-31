#!/usr/bin/node

// Function to add two integers
function add (a, b) {
  return a + b;
}

// Parse command-line arguments
const args = process.argv.slice(2);

// Convert arguments to numbers
const num1 = Number(args[0]);
const num2 = Number(args[1]);

if (isNaN(num1) || isNaN(num2)) {
  console.log('NaN');
} else {
  console.log(add(num1, num2));
}
