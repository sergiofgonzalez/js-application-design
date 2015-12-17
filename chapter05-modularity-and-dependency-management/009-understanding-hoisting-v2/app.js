"use strict";

var value;

function test() {
  console.log(typeof value); // -> undefined
  console.log(value);        // -> undefined
  var value = 3;
}

value = 2;

test();
