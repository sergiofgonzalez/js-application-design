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

Promise
  .all([delay(7000), delay(3000), delay(1000)])
  .then(function filterThoseQuickerThan3Secs(results) {
    return results.filter(function(item) {
      return item >= 3000;
    });
  })
  .then(function transformMultiplyBy2(results) {
    return results.map(function (item) {
      return item * 2;
    });
  })
  .then(function printFinalResults(results) {
    results.forEach(function(item, index) {
      console.log(index + ":" + item);
    });
  });
