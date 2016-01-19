"use strict";

var emitter = require("./emitter.js");

var thing = emitter();

thing.on("change", function changed() {
  console.log("thing changed");
});

thing.on("change", function changedValue(oldValue, newValue) {
  console.log("`change`: " + oldValue + " => " + newValue);
});

thing.on("change", function doAfterSomeDelay() {
  setTimeout(function printMessage() {
    console.log("Delayed message registered for `change` event");
  }, 3000);
});

thing.emit("change", "java", "JavaScript");
console.log("-- as implemented synchronously, this will not appear until all registered listeners have finished");
