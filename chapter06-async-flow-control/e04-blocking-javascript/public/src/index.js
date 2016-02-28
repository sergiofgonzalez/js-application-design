"use strict";


var http = require("./lib/blocking-http.js");

var msg1 = http.get("http://crappy.site.com");
var msg2 = http.get("http://lousy.com");
var msg3 = http.get("http://slowest.ever.com");

console.log("Done:", msg1, msg2, msg3);
