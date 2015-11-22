"use strict";

var path = require("path");
var async = require("async");

module.exports = function(grunt) {
  grunt.registerTask("db-seed", "Populates a database with seed data", function() {
    var connect = require("./lib/connect.js");
    var util = require("./lib/util.js");

    var done = this.async();

    var options = this.options({});

    connect(options.credentials, seed);

    function seed(connection) {
      grunt.log.write("Switching to `" + options.db + "`...");

      connection.query("USE " + options.db, function(err) {
        util.handle(err);

        var seeds = path.join(options.scripts, "**/*.seed.sql");

        var files = grunt.file.expand(seeds);

        grunt.log.writeln(files.length ? files.length : "no", "seed script(s) found.");

        // loop through the update scripts in series
        async.eachSeries(files, function(file, next) {
          grunt.log.write("Applying `" + file + "`...");

          var sql = grunt.file.read(file);

          connection.query(sql, function(err) {
            util.handle(err);
            next();
          });
        }, function() {
          done();
        });
      });
    }
  });
};
