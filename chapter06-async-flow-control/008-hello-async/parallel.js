"use strict";

var async = require("async");


async.parallel([
  function(next) {
    console.log("Executing Task #1");
    next(checkError("Task #1"),  {status: "ok", results: "Results of Task #1"});
  },
  function(next) {
    console.log("Executing Task #2");
    next(checkError("Task #2"),  {status: "ok", results: "Results of Task #2"});
  },
  function(next) {
    console.log("Executing Task #3");
    next(checkError("Task #3"),  {status: "ok", results: "Results of Task #3"});
  }
], done);

function checkError(taskName) {
  if (Math.floor((Math.random() * 10) + 1) < 4) {
    return "An error has occurred on " + taskName;
  }
}

function done(err, results) {
  if (err) {
    console.log("===============================");
    console.log("An error was found:", err);
    console.log("Results:", results); // should not query this for meaningful results
    console.log("===============================");
  } else {
    console.log(results);
  }
}
