"use strict";

var flow = require("./flow.js");

flow(function* iterator(next) {
  console.log("fetching food types...");
  var types = yield get;
  console.log("waiting around...");
  yield setTimeout(next, 2000);
  console.log(types.join(", "));
  console.log("done!!!");
});

function get(next) {
  setTimeout(function later() {
    next(null, ["bacon", "lettuce", "crispy bacon"]);
  }, 1000);
}

console.log("Executing async flow for retrieving data...");
console.log("Nothing more to do in main thread");
