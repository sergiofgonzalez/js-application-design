"use strict";


function multiply(a, b) {
  return a * b;
}

function square(n) {
  return multiply(n, n);
}

function printSquare(n) {
  console.log("Computing 5^2...");
  var squared = square(n);
  console.log(squared);
}
printSquare(5);
