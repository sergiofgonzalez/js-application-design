"use strict";

var grunt = require("grunt");
var util = require("./util.js");

function ensure(connection, done) {
  var query = "CREATE TABLE IF NOT EXISTS __v" +
              "(  " +
              "  file VARCHAR(2000), " +
              "  applied bit(1) " +
              ");";

  grunt.log.write("Checking __v table...");

  // make sure the version table exists, create otherwise
  connection.query(query, function(err) {
    util.handle(err);
    done();
  });
}

module.exports = {
  getApplied: function(connection, done) {
    ensure(connection, function() {
      grunt.log.write("Querying __v...");

      connection.query("SELECT file FROM __v WHERE applied = 1", function(err, results) {
        util.handle(err);
        done(results);
      });
    });
  },

  upgrade: function(connection, file, done) {
    grunt.log.write("Updating __v...");

    var sql = "INSERT INTO __v (file, applied) VALUES (?, 1)";

    connection.query(sql, [file], function(err) {
      util.handle(err);
      done();
    });
  },

  rollback: function(connection, file, done) {
    grunt.log.write("Updating __v...");

    var sql = "DELETE FROM __v WHERE file = ?";

    connection.query(sql, [file], function(err) {
      util.handle(err);
      done();
    });
  }
};
