"use strict";

var promiseForAnEvenNumber = new Promise(function(fulfill, reject) {
  console.log("Scheduling for a later execution...");
  setTimeout(function later() {
    if (Math.floor(Math.random() * 10) % 2 === 0) {
      fulfill("An even number was given");
    } else {
      reject("An odd number was given");
    }
  }, 2000);
});

promiseForAnEvenNumber.then(function sucess(result) {
  console.log("promise was fulfilled: " + result);
  return "fulfilled";
}, function failure(result) {
  console.log("promise was rejected: " + result);
});


promiseForAnEvenNumber.then(function success(result) {
  console.log("Another callback that gets called when promise is fulfilled: " + result);
});

// syntactic sugar for .then(null, function failure(result))
promiseForAnEvenNumber.catch(function failure(result) {
  console.log("Another callback that gets called when promise is rejected:" + result);
});
