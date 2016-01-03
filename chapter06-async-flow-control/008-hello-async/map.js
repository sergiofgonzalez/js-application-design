"use strict";

var async = require("async");

async.waterfall([
  function(next) {
    var numbers = populateNumbers();
    next(null, numbers);
  },
  function(nums, next) {
    console.log("Displaying numbers from second task:", nums);
    next(null, nums);
  },
  function(nums, next) {
    var min = nums.reduce(function(minCandidate, number) {
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
    console.log("done: An error was found:", err);
  } else {
    console.log("Displaying results from done:", results);
  }
}

function populateNumbers() {
  var numbers = [];
  for (var i = 0; i < 4; i++) {
    numbers.push(Math.floor((Math.random() * 10) + 1));
  }
  return numbers;
}
