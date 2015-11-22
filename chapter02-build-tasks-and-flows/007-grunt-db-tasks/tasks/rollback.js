"use strict";

//var path = require("path");
var _ = require("underscore");

module.exports = function(grunt) {
  grunt.registerTask("db-rollback", "Rolls back the latest database schema change", function() {
    var connect = require("./lib/connect.js");
    var util = require("./lib/util.js");
    var v = require("./lib/v.js");

    var done = this.async();

    var options = this.options({});

    connect(options.credentials, rollback);

    function rollback(connection) {
      grunt.log.write("Switching to `" + options.db + "` db...");
      connection.query("USE " + options.db, function(err) {
        util.handle(err);

        // join scripts directory with globbing pattern
//        var down = path.join(options.scripts, "**/*.down.sql");

        // get a list of applied scripts
        v.getApplied(connection, function(records) {
          var latest = _.pluck(records, "file").pop();

          if (!latest) {
            grunt.log.writeln("Nothing to rollback.");
            done();
          } else {
            // find the matching rollback script
            var file = latest.replace(/\.up\.sql$/i, ".down.sql");

            // if the file doesn't exist, we can't roll back
            if (!grunt.file.exists(file)) {
              grunt.fatal("Rollback script not found: `" + file + "`");
            }

            grunt.log.write("Applying rollback for `" + file + "`...");

            // read the script.down.sql file
            var sql = grunt.file.read(file);

            connection.query(sql, function(err) {
              util.handle(err);
              v.rollback(connection, latest, function() {
                done();
              });
            });
          }
        });
      });
    }
  });
};
