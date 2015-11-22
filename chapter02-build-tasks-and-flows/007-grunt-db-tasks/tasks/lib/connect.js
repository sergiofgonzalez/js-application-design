"use strict";

var grunt = require("grunt");

module.exports = function(credentials, done) {
  var mysql = require("mysql");
  var util = require("./util.js");

  // create a connection to MySQL using the provided credentials
  var connection = mysql.createConnection(credentials);

  grunt.log.write("Connecting to MySQL...");

  connection.connect(function(err) {
    util.handle(err);

  // return the connection to our callee
    done(connection);
  });
};
