"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
        build: "build"
    },

    jshint: {
      options: {
        jshintrc: true
      },
      me: ["Gruntfile.js"],
      app: ["public/**/*.js", "!node_modules"]
    },

    copy: {
      debug: {
        expand: true,
        cwd: "public",
        src: "**/*.js",
        dest: "build/js"
      },
    },

    watch: {
      rebuild: {
        files: ["public/**/*"],
        tasks: ["build:debug"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("build:debug", "lint and create a debug build", ["clean", "jshint", "copy:debug"]);
  grunt.registerTask("dev", "Creating automatic builds and watching changes", ["build:debug", "watch"]);
};
