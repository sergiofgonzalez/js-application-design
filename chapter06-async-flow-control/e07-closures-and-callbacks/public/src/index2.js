"use strict";

var async = require("async");

var sayHello = function () {
  if (true === true) {
    console.log("Hello!");
    return;
  }

  console.log("This is dead code");
  return;
};

sayHello();
sayHello();
sayHello();
console.log("========================================");

// this provokes an error
async.series([
    function sayHelloAsync(next) {
      if (true === true) {
        console.log("sayHelloAsync: Hello!");
        next(null, "Hello!");
        return;
      }

      console.log("sayHelloAsync: dead code!");
      next("dead code!");
      return;
    }
  ],
  function done(err, results) {
    if (err) {
      console.log("done: err:", err);
    } else {
      console.log("done: OK :", results);
    }
  });
