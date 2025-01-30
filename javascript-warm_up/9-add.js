#!/usr/bin/node

function add (a, b) {
  console.log(a + b);
}

// Example usage:
const num1 = parseInt(process.argv[2], 10);
const num2 = parseInt(process.argv[3], 10);

if (isNaN(num1) || isNaN(num2)) {
  console.log('Please provide two valid integers as arguments.');
} else {
  add(num1, num2);
}
