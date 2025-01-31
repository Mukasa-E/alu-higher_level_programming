#!/usr/bin/node

const fs = require('fs');

// Get file paths from command-line arguments
const fileA = process.argv[2];
const fileB = process.argv[3];
const fileC = process.argv[4];

// Read the contents of fileA and fileB
const contentA = fs.readFileSync(fileA, 'utf8');
const contentB = fs.readFileSync(fileB, 'utf8');

// Concatenate the contents
const concatenatedContent = contentA + contentB;

// Write the result to fileC
fs.writeFileSync(fileC, concatenatedContent);
