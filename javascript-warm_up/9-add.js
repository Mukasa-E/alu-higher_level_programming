#!/usr/bin/node

// Function to add two integers
function add (a, b) {
  return a + b;
}

const args = process.argv.slice(2);

if (args.length !== 2 || isNaN(args[0]) || isNaN(args[1])) {
  console.log('Usage: ./add.js <integer1> <integer2>');
} else {
  const num1 = parseInt(args[0], 10);
  const num2 = parseInt(args[1], 10);
  console.log(add(num1, num2));
}
