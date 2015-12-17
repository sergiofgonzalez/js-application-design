"use strict";

function averageFactory() {
  var sum = 0;
  var count = 0;
  return function(num) {
    sum += num;
    count++;
    return sum / count;
  };
}

/* this implementation cannot be hacked */
var averageHacked = averageFactory();
console.log(averageHacked.sum);


/* tests */
var average = averageFactory();
console.log("average(1):", average(1)); // 1
console.log("average(5):", average(5)); // 3
console.log("average(3):", average(3)); // 3
printSeparator();

function printSeparator() {
  console.log("==============================================");
}
