#!/usr/bin/node

const myObject = {
  type: 'object',
  value: 12
};

// Log the object before adding the `incr` function
console.log(myObject);

myObject.incr = function () {
  this.value++;
};

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);

myObject.incr();
console.log(myObject);
