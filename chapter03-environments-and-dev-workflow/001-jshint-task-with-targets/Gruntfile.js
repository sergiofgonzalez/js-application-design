module.exports = function(grunt) {

  /* Grunt config object */
  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      client: ["public/js/**/*.js"],
      support: ["Gruntfile.js"]
    }
  });

  /* Task registration */
  grunt.registerTask("default", "Run `grunt` without arguments to lint `Gruntfile.js`", ["jshint:support"]);

  /* npm plugins */
  grunt.loadNpmTasks("grunt-contrib-jshint");
};
