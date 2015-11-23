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

  /* Task aliases */

  grunt.registerTask("build:debug",   "Simulates the workflow for `build` task, `debug` target", ["jshint:client", "jshint:support", "dummy:build:debug"]);
  grunt.registerTask("build:release", "Simulates the workflow for `build` task, `debug` target", ["jshint:support", "dummy:build:release"]);

  grunt.registerTask("dummy", "Dummy task for demonstration purposes", function(arg1, arg2) {
    if (arguments.length === 0) {
      grunt.log.writeln(">> " + this.name + " -> invoked with no args");
    } else {
      grunt.log.writeln(">> " + this.name + ":" + arg1 + ":" + arg2);
    }
  });

  /* npm plugins */
  grunt.loadNpmTasks("grunt-contrib-jshint");
};
