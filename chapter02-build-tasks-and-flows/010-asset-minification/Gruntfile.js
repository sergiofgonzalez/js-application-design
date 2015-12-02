"use strict";

module.exports = function(grunt) {
  grunt.initConfig({

    uglify: {
      js: {
        files: [{
          expand: true,
          cwd: "public/js",
          src: "**/*.js",
          dest: "build/js"
         }]
      }
    },

    clean : {
      build: "build"
    },

    jshint: {
      options: {
        jshintrc: true // search for .jshintrc files relative to the files being linted
      },
      client: {
        src: ["public/js/**/*.js"]
      },
      build: {
        src: ["Gruntfile.js"]
      }
    },

    copy: {

      html_debug: {
        expand: true,
        cwd: "public/views",
        src: "**/*.html",
        dest: "build/views"
      }
    },

    watch: {
      js: {
        files: ["public/js/**/*.js"],
        tasks: ["jshint:client", "concat:js"]
      },

      html: {
        files: ["public/views/**/*.html"],
        tasks: ["copy:html_debug"]
      },

      lint_client: {
        files: ["/public/js/**/*.js"],
        tasks: ["jshint:client"]
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
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");


  grunt.registerTask("build:debug", "lint and compile", ["clean", "jshint", "uglify", "copy"]);
  grunt.registerTask("dev", "development mode", ["build:debug", "watch"]);
};
