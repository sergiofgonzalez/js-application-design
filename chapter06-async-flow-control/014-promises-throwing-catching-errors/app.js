"use strict";

function delay(t) {
  function wait(fulfill) {
    if (t < 1) {
      throw new Error("Delay must be greater than zero"); // instead of reject
    }
    setTimeout(function later() {
      console.log("Resolving after " + t + " msecs.");
      fulfill(t);
    }, t);
  }

  return new Promise(wait);
}

Promise
  .all([delay(0), delay(400)])
  .then(function resolved(results) {
    throw new Error("I dislike the result!", results);
  })
  .catch(function errored(error) {
    console.log(".catch reports: ", error.message);
  });
