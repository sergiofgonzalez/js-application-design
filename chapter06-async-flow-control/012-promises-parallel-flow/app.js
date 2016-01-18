"use strict";

function delay(t) {
  function wait(fulfill) {
    setTimeout(function delayedPrint() {
      console.log("Resolving after " + t + " msec");
      fulfill(t);
    }, t);
  }

  return new Promise(wait);
}

Promise.all([delay(7000), delay(3000), delay(5000)])
  .then(function complete(results) {
    console.log(results);
    return delay(Math.min.apply(Math, results));
  })
  .then(function syncTask() {
    console.log("Now, we can proceed to do things in series...");
  });
