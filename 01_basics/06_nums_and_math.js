const score = 400
console.log(score);  // 400

const balance = new Number(100)
console.log(balance); // [Number :100]

console.log(balance.toString()); // 100
console.log(typeof balance); // object
console.log(balance.toString().length);
console.log(balance.toFixed(1)); // 100.0

const otherNumber = 123.4567
console.log(otherNumber.toPrecision(3)); // 123
console.log(otherNumber.toPrecision(5)); // 123.46
console.log(otherNumber.toPrecision(2)); // 1.2e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000 International System
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 Indian System


// ++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-9)); //9 changes -ve to +ve
console.log(Math.round(4.3)); // 4
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.random());

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min); // this always gives morre than min and less than max value.



