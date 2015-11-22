"use strict";

module.exports = function(grunt) {
  grunt.registerTask("db-create", "Creates an empty database for the first time", function() {
    var connect = require("./lib/connect.js");
    var util = require("./lib/util.js");

    // tell Grunt we'll let them know when we're done
    var done = this.async();

    // Get the configuration from `initConfig`
    var options = this.options({});

    connect(options.credentials, create);

    function create(connection) {
      grunt.log.write("Creating `" + options.db + "` database on `" + options.credentials.host + "`...");

      connection.query("CREATE DATABASE IF NOT EXISTS " + options.db, function(err) {
        util.handle(err);

        // tell Grunt we're done
        done();
      });
    }
  });
};
