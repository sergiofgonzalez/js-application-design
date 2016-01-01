"use strict";

function sayHelloFunctionScope(name) {
  if (name.length % 2 === 0) {
    var result = name.toUpperCase();
  } else {
    result = name.toLowerCase();
  }
  return result;
}



function sayHelloBlockScope(name) {
  if (name.length % 2 === 0) {
    let result = name.toUpperCase();
  } else {
    result = name.toLowerCase(); // <- Error: result is not defined!
  }
  return result;
}

console.log("Function Scope: ", sayHelloFunctionScope("Jessica"));
console.log("Block Scope: ", sayHelloBlockScope("Jessica"));
