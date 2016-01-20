"use strict";

function* sentences() {
  yield "going places";
  console.log("this can wait");
  yield "yay! done";
}


var iterator = sentences();
console.log(iterator.next().value);
