"use strict";

module.exports = function(grunt) {
  grunt.initConfig({

    clean : {
      build: ["build"],
    },

    critical: {
      example: {
        options: {
          base: "public",
          css: "css/styles.css"
        },
        src: "public/index.html",
        dest: "build/index.html"
      }      
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-critical");


  grunt.registerTask("build:release", "Prepares a `Release` build in `/dist`", ["clean", "critical:example"]);
};
