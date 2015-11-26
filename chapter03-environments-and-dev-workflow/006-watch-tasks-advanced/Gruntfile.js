"use strict";

module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
        build: "build"
    },

    jshint: {
      app: {
        src: ["public/js/**/*.js"],
        options: {
          jshintrc: "public/js/.jshintrc"
        }
      },
      build: {
        src: ["Gruntfile.js"],
        options: {
          jshintrc: ".jshintrc"
        }
      }
    },

    copy: {
      js_debug: {
        expand: true,
        cwd: "public",
        src: ["**/*.js"],
        dest: "build"
      },

      html_debug: {
        expand: true,
        cwd: "public",
        src: ["**/*.html"],
        dest: "build"
      }
    },

    watch: {
      /* lint js files as they change, and then copy them to the build dir */
      js: {
        files: ["public/**/*.js"],
        tasks: ["jshint:app", "copy:js_debug"]
      },

      /* copy html files as they change */
      html: {
        files: ["public/**/*.html"],
        tasks: ["copy:html_debug"]
      },

      rebuild: {
        files: ["Gruntfile.js"],
        tasks: ["jshint:build", "build:debug"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("build:debug", "lint and create a debug build", ["clean", "jshint", "copy"]);
  grunt.registerTask("dev", "Creating automatic builds and watching changes", ["build:debug", "watch"]);
};
