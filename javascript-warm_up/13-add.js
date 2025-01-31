#!/usr/bin/node

function add (a, b) {
  return a + b;
}

module.exports = { add };

if (require.main === module) {
  console.log(add(3, 5));
}
