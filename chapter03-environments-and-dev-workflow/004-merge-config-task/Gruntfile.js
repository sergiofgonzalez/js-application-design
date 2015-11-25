"use strict";

module.exports = function(grunt) {

  /* Grunt config object */
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      me: ["Gruntfile.js"],
      app: ["**/*.js", "!node_modules/**/*.js", "!Gruntfile.js"]
    }
  });

  /* Task registration */
  grunt.registerTask("default", "Run `grunt` without arguments to lint `Gruntfile.js`", ["jshint:me"]);

  /* npm plugins */
  grunt.loadNpmTasks("grunt-contrib-jshint");
};
