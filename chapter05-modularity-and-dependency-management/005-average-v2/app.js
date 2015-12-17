"use strict";

function average(nums) {
  var numArray = [];
  if (nums instanceof Array) {
    numArray = nums;
  } else {
    Array.prototype.forEach.call(arguments, function(arg) {
      numArray.push(arg);
    });
  }
  var total = numArray.reduce(function(acc, elem) {
    return acc + elem;
  }, 0);

  return total / numArray.length;
}


/* tests */
console.log("average([1]):", average([1])); // 1
console.log("average([1, 5]):", average([1, 5])); // 3
console.log("average([1, 5, 3]):", average([1, 5, 3])); // 3
printSeparator();

console.log("average(1):", average(1)); // 1
console.log("average(1, 5):", average(1, 5)); // 3
console.log("average(1, 5, 3):", average(1, 5, 3)); // 3
printSeparator();


function printSeparator() {
  console.log("==============================================");
}
