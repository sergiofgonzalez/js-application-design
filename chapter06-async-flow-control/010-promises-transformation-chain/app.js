"use strict";

var promise = new Promise(function logic(fulfill) {
  fulfill('{"username": "sergio.f.gonzalez"}'); // jshint ignore: line
});

promise.then(function parse(value) {
  return JSON.parse(value);
}).then(function print(value) {
  console.log(value.username);
});
