"use strict";

module.exports = function(grunt) {
  grunt.initConfig({

    clean : {
      build: ["build", ".tmp"],
      tmp: [".tmp"]
    },

    useminPrepare: {
      html: "public/index.html",
      options: {
        dest: "build"
      }
    },

    copy: {
      release: {
        files: [
          {
            expand: true,
            cwd: "public",
            src: ["img/*.{png,gif,jpg,jpeg}", "*.html"],
            dest: "build"
          }
        ]
      }
    },

    filerev: {
      options: {
        algorithm: "md5",
        length: 8
      },
      release: {
        src: [
            "build/img/**/*.{png,gif,jpg,jpeg}",
            "build/js/**/*.js",
            "build/css/**/*.css"
        ]
      }
    },

    usemin: {
        html: ["build/**/*.html"],
        css: ["build/css/*.css"],
        options: {
          assetsDirs: ["build"]
        }
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
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-filerev");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-usemin");


  grunt.registerTask("release", "Prepares a `Release` build in `/dist`", ["clean", "jshint", "useminPrepare", "concat:generated", "cssmin:generated", "uglify:generated", "copy", "filerev", "usemin", "clean:tmp"]);
};
