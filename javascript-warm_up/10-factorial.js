#!/usr/bin/node

// Recursive function to compute factorial
function factorial (n) {
  if (isNaN(n)) {
    return 1;
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Parse the first command-line argument
const arg = process.argv[2];

// Convert the argument to a number
const num = Number(arg);

// Compute and print the factorial
console.log(factorial(num));
