"use strict";

/* global thing */

var simple = require("./lib/simple.js");
// console.log(something.foo); // error: something is not defined

console.log(thing.foo);

console.log(simple.bar);

console.log(__dirname);
