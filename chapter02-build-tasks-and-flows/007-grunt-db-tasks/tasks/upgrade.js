"use strict";

var path = require("path");
var async = require("async");
var _ = require("underscore");

module.exports = function(grunt) {
  grunt.registerTask("db-upgrade", "Executes and reverts database schema changes", function() {
    var connect = require("./lib/connect.js");
    var util = require("./lib/util.js");
    var v = require("./lib/v.js");

    var done = this.async();

    var options = this.options({});

    connect(options.credentials, upgrade);

    function upgrade(connection) {
      grunt.log.write("Switching to `" + options.db + "` db...");
      connection.query("USE " + options.db, function(err) {
        util.handle(err);

        // join scripts directory with globbing pattern
        var up = path.join(options.scripts, "**/*.up.sql");

        // expand the pattern
        var unapplied = grunt.file.expand(up);

        // get a list of applied scripts
        v.getApplied(connection, function(records) {
          var applied = _.pluck(records, "file");

          // remove already applied scripts from the list
          var updates = unapplied.filter(function(script) {
            return applied.indexOf(script) === -1;
          });

          grunt.log.writeln(updates.length ? updates.length : "no", "upgrade script(s) pending");

          // loop through the update scripts in series
          async.eachSeries(updates, function(file, next) {
            grunt.log.write("Applying `" + file + "`...");

            var sql = grunt.file.read(file);

            connection.query(sql, function(err) {
              util.handle(err);

              // update the versioning table
              v.upgrade(connection, file, function() {
                next();
              });
            });
          }, function() {
            done();
          });
        });
      });
    }
  });
};
