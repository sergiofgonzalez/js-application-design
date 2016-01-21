"use strict";

function httpGet() {
  function simulatedLengthyDataRetrieval(fulfill) {
    setTimeout(function returnDataAfterDelay() {
      fulfill(["bacon", "lettuce", "crispy bacon"]);
    }, 5000);
  }

  return new Promise(simulatedLengthyDataRetrieval);
}

function informUserRequestInProgress() {
  console.log("Retrieving data from the server...");
}

Promise.all([httpGet(), informUserRequestInProgress()])
  .then(function complete(results) {
    console.log(results[0].join(", "));
  })
  .catch(function errored(error) {
    console.log("Error found: ", error.message);
  });
