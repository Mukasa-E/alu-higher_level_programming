#!/usr/bin/node

// Import the list from 100-data.js
const { list } = require('./100-data');

// Compute the new array using map
const newList = list.map((value, index) => value * index);

// Print both arrays
console.log(list);
console.log(newList);
