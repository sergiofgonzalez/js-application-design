"use strict";

// The loop that never ends because the callback is never picked up from the callback queue, because the callback stack is never empty.

var done = false;
setTimeout(function (done) {
  console.log("changing done value to true");
  done = true;
}, 1000);


while (!done) {
  // noop
}
console.log("done");
