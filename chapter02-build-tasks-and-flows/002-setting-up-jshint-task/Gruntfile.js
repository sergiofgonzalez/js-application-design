module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    /* task: jshint */
    jshint: ['Gruntfile.js']
  });

  /* loading plugins */
  grunt.loadNpmTasks('grunt-contrib-jshint');

  /* default task */
  grunt.registerTask('default', ['jshint']);
};
