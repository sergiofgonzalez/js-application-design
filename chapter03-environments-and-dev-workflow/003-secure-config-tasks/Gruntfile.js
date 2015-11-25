"use strict";

var util = require("util");
var path = require("path");

// obtain current working directory
var cwd = process.cwd();


/* The private key will be stored in a directory that is ignored by Git */
var pemkey = function(name) {
  var filename = util.format("private/%s.pem", name);
  return path.join(cwd, filename);
};

module.exports = function(grunt) {

  /* Grunt config object */
  grunt.initConfig({
    clean: {
      private: "private"
    },

    jshint: {
      options: {
        jshintrc: true
      },
      me: ["Gruntfile.js"]
    },

    "pem_gen": {
      dev: { pem: pemkey("dev") },          // generates private/dev.pem
      staging: { pem: pemkey("staging") }   // generates private/staging.pem
    },

    "pem_encrypt": {
      dev: { pem: pemkey("dev"), pemstore: "secure/dev-config-encrypted", rawstore: "private/dev-config" },
      staging: { pem: pemkey("staging"), pemstore: "secure/staging-config-encrypted", rawstore: "private/staging-config" }
    },

    "pem_decrypt": {
      dev: { pem: pemkey("dev"), pemstore: "secure/dev-config-encrypted", rawstore: "private/dev-config-clear" },
      staging: { pem: pemkey("staging"), pemstore: "secure/staging-config-encrypted", rawstore: "private/staging-config-clear" }
    }
  });

  /* Task registration */
  grunt.registerTask("default", "Run `grunt` without arguments to lint `Gruntfile.js`", ["jshint:me"]);


  /* npm plugins */
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-pemcrypt");
};
