"use strict";

module.exports = function(grunt) {
  grunt.initConfig({

    sprite: {
      icons: {
        src: "public/img/icons/*.png",
        dest: "build/img/icons.png",
        destCss: "build/css/icons.css"
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

      img: {
        files: ["public/img/icons/**/*.{png,jpg,jpeg}"],
        tasks: ["sprite:icons"]
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
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-spritesmith");


  grunt.registerTask("build:debug", "lint and compile", ["clean", "jshint", "copy", "sprite"]);
  grunt.registerTask("dev", "development mode", ["build:debug", "watch"]);
};
