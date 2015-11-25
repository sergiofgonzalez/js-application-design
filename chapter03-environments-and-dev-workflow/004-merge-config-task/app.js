"use strict";

var conf = require("./cfg");

console.log("====================================");
console.log("PORT     =>", conf("PORT"));
console.log("NODE_ENV =>", conf("NODE_ENV"));
console.log("====================================");
