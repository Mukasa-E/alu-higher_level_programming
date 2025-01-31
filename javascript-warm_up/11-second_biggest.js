#!/usr/bin/node

const args = process.argv.slice(2);

if (args.length === 0 || args.length === 1) {
  console.log(0);
  process.exit(0);
}

const numbers = args.map(Number);
const sortedNumbers = numbers.sort((a, b) => b - a);
const secondLargest = sortedNumbers[1];

console.log(secondLargest);
