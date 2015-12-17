"use strict";

function Average() {
  this.count = 0;
  this.total = 0;
}

Average.prototype.add = function(num) {
  this.count++;
  this.total += num;
};

Average.prototype.calc = function() {
  return this.total / this.count;
};

/*
  This is a clean approach, but nothing prevents the client from accessing
  the internal data of the object.
*/
var averageHack = new Average();
averageHack.add(1);
averageHack.add(2);
averageHack.add(3);
console.log("added: 1, 2, 3:", averageHack.calc());
printSeparator();

// hacking
averageHack.total += 100;
console.log("after hack: ", averageHack.calc());

/* tests */
var avg = new Average();
console.log("Initially must be NaN:", avg.calc()); // NaN

avg.add(1);
console.log("Added 1:", avg.calc()); // 1

avg.add(5);
console.log("Added 5:", avg.calc()); // 3

avg.add(3);
console.log("Added 3:", avg.calc()); // 3

function printSeparator() {
  console.log("==============================================");
}
