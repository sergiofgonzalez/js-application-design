"use strict";

var async = require("async");

var numbers = [];
var min;

async.series([
  function(next) {
    populateNumbers();
    next();
  },
  function(next) {
    console.log(numbers);
    next();
  },
  function(next) {
    min = numbers.reduce(function(minCandidate, number) {
      return Math.min(minCandidate, number);
    }, 99);
    if (min % 2 === 0) {
      next("Min is an even number: " + min);
    } else {
      next(null, min);
    }
  }
], done);

function done(err, results) {
  if (err) {
    console.log("An error was found:", err);
  } else {
    console.log(results);
  }
}

function populateNumbers() {
  for (var i = 0; i < 4; i++) {
    numbers.push(Math.floor((Math.random() * 10) + 1));
  }
}
