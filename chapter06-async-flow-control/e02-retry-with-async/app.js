"use strict";

var request = require("./lib/state-machine.js");
var async = require("async");

var count = 0;

async.whilst(
  function test() {
    var currentState = request();
    console.log("in test: state=" + currentState + ", count=" + count);
    return count < 5 && currentState !== "Finished";
  },
  function logic(cb) {
    count++;
    setTimeout(function () {
      cb(null, count);
    }, 2500);
  },
  function done(err, result) {
    console.log(result * 2500 + " msecs have passed; result=" + result);
  }
);
