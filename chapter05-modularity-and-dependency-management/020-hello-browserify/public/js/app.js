"use strict";

console.log("hello, browserify!!!");

var text = require("./lib/text.js");
var result = text("foo bar");

console.log(result);
