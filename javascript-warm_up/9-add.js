function add (a, b) {
  console.log(a + b);
}

const num1 = parseFloat(process.argv[2]);
const num2 = parseFloat(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log(NaN);
} else {
  add(num1, num2);
}
