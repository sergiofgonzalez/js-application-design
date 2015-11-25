"use strict";

var nconf = require("nconf");

nconf.argv();                           // top precedence: command-line arguments
nconf.env();                            // next : OS environment variables
nconf.file("dev", "development.json");  // last: config file

module.exports = nconf.get.bind(nconf);
