module.exports = function(grunt) {
  'use strict';

  /* configuration */
  grunt.initConfig({
    jshint: {
      grunt: ['Gruntfile.js']
    },
    timestamp: {
      options: {
        file: '.my-timestamp-file'
      }
    },
    clean: {
      timestamp: ['.my-timestamp-file']
    }
  });

  /* task registration */
  grunt.registerTask('default', 'The default task lints configured JavaScript files', ['jshint']);

  grunt.registerTask('timestamp', 'Creates a file with a timestamp', function() {
    var options = this.options({
      file: '.timestamp'
    });

    grunt.log.write('>> Creating timestamp on `' + options.file + '`: ');

    var timestamp = new Date();
    var contents = timestamp.toString();
    grunt.file.write(options.file, contents);

    grunt.log.writeln('OK');
  });

  /* npm plugins */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
