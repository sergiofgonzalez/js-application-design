"use strict";

module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      app: ["src/app"],
      tests: ["test/build"]
    },
    browserify: {
      app: {
        src: ["src/qotd.js"],
        dest: "src/build/bundle.js",
        options: {
          debug: true
        }
      },
      tests: {
        src: ["test/*.js"],
        dest: "test/build/test-bundle.js",
        options: {
          debug: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("build", ["clean:app", "browserify:app"]);
  grunt.registerTask("build-tests", ["clean:tests", "browserify:tests"]);
};
