"use strict";


console.log("1: hello!");
setTimeout(function sayHello() {
  console.log("2: Hello");
}, 0); // this does not mean that it will be executed next: the call stack may not be empty
console.log("3: Hi!");
