"use strict";

var delay = require("./lib/delay.js");

/*
  Sync callback, or more formally a function passed to a higher order function.

  Those are normally pushed into the call stack

*/
[1, 2, 3, 4, 5].forEach(function (elem) {
  console.log("elem:", elem);
});

console.log("==========================================");


/* Sync callbacks can be easily transformed into async callbacks */
function asyncForEach(array, cb) {
  array.forEach(function (elem) {
    setTimeout(cb.bind(null, elem), 0);
  });
}

asyncForEach([1, 2, 3, 4, 5], function (item) {
  console.log("item:", item);
});

console.log("==========================================");

/*
  Previous async example seems the same as the sync, but not quite:
    in the sync example, calls are pushed directly on the top of the call stack,
    while in the second, calls are placed in the Callback queue and therefore,
    are not blocking!!
*/

// Let's compare when the processing of each element takes some time...


var count = 0;
setInterval(function () {
  console.log(count++);
}, 500);

[1, 2, 3, 4, 5].forEach(function (elem) {
  delay(2500);
  console.log("sync elem:", elem);
});

console.log("==========================================");

asyncForEach([1, 2, 3, 4, 5], function (item) {
  delay(2500);
  console.log("async item:", item);
});

console.log("==========================================");


// Well, it's not very clear, but the thing is that when you do it async, you're
// not blocking the call stack
