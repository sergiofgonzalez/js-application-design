"use strict";

/*
  The result should be number, 2 or 3, but it really is undefined, undefined
  because of hoisting
*/


var value = 2;

test();

function test() {
  console.log(typeof value); // -> undefined
  console.log(value);        // -> undefined
  var value = 3;
}
