//Behzad Ghabaei
// math.js

//Function 1: square a number
let n = 4;
function square(n) { 
  return n * n; 
}
console.log("the square of " + n + " is " + square(n));

//Function 2: is a number even.

function isEven(n) { 
  return n % 2 === 0; 
}
console.log("the number " + n + " is even: " + isEven(n));

//Function 3: is the number odd

function isOdd(n) { 
  return n % 2 !== 0; 
}
console.log("the number " + n + " is odd: " + isOdd(n));

//Function 4: multiply two numbers a, b
let a = 3;
let b = 4;
function multiply(a, b) { 
  return a * b; 
}
console.log("The numbers " + a + " * " + b + " = " + multiply(a,b));

//Function 5: double a number
function double(n) {
  return n * 2;
}
console.log("Double 5: " + double(5));

//Function 6: exponentiation
let base = 2;
let exponent = 3;
function power(base, exponent) {
  return Math.pow(base, exponent);
}
console.log("The number " + base + " to the " + exponent + " power is: " + power(base, exponent));

//Function 7: powerOf
function powerOf(baseOf, exponentOf) {
  if (exponentOf == 0) {
    return 1;
  } else {
    return baseOf * powerOf(baseOf, exponentOf - 1);
  }
}
console.log(powerOf(2, 3));
// → 8

//Function 8 factorial
const fact = function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
};
console.log("factorial of " + n + " is: " + fact(n));



