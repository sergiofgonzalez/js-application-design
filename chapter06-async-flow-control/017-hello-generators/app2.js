"use strict";

function* numbers() {
  yield "zero";
  yield "one";
  yield "two";
  yield "three";
  yield "four";
  yield "five";
}

/* manual iteration */
/*
var iterator = numbers();
var item = iterator.next();
while (!item.done) {
  console.log(item.value);
  item = iterator.next();
}
*/

/* using for..of syntax */
for (var number of numbers()) {
  console.log(number);
}
