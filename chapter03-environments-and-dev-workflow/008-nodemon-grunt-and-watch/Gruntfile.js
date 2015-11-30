"use strict";

module.exports = function(grunt) {
  grunt.initConfig({

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
      server: {
        src: ["*.js", "!node_modules", "!Gruntfile.js"]
      },
      build: {
        src: ["Gruntfile.js"]
      }
    },

    copy: {
      js_debug: {
        expand: true,
        cwd: "public/js",
        src: "**/*.js",
        dest: "build/js"
      },

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
        tasks: ["jshint:client", "copy:js_debug"]
      },

      html: {
        files: ["public/views/**/*.html"],
        tasks: ["copy:html_debug"]
      },

      lint_server: {
        files: ["*.js", "!node_modules", "!Gruntfile.js"],
        tasks: ["jshint:server"]
      },

      rebuild: {
        files: ["Gruntfile.js"],
        tasks: ["jshint:build", "build:debug"]
      }
    },

    nodemon: {
      dev: {
        script: "app.js"
      }
    },

    concurrent: {
      dev: {
        tasks: ["nodemon", "watch"],
        options: {
          logConcurrentOutput: true
        }
      }
    }

  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-concurrent");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-nodemon");
  grunt.loadNpmTasks("grunt-contrib-watch");


  grunt.registerTask("build:debug", "lint and compile", ["clean", "jshint", "copy"]);
  grunt.registerTask("dev", "development mode", ["build:debug", "concurrent"]);
};
