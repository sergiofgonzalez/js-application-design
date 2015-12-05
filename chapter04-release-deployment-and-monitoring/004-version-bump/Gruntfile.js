"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    bump: {
      options: {
        commit: false,
        createTag: false,
        push: false
      }
    },

    jshint: {
      options: {
        jshintrc: true // search for .jshintrc files relative to the files being linted
      },
      build: {
        src: ["Gruntfile.js"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-bump");
  grunt.loadNpmTasks("grunt-contrib-jshint");

  grunt.registerTask("default", "lint `Gruntfile`", ["jshint:build"]);
};
