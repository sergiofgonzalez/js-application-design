module.exports = function(grunt) {
  'use strict';

  /* specific options for db_x tasks */
  var dbOptions = require('./db.json');

  /* configuration */
  grunt.initConfig({
    jshint: {
      grunt: ['Gruntfile.js']
    },
    timestamp: {
      options: {
        file: '.timestamp'
      }
    },
    clean: {
      timestamp: ['<%= timestamp.options.file %>']
    },
    'db-create': { options: dbOptions},
    'db-upgrade': { options: dbOptions},
    'db-rollback': { options: dbOptions},
    'db-seed': { options: dbOptions}
  });

  /* task registration */
  grunt.registerTask('default', 'The default task lints configured JavaScript files', ['jshint']);

  grunt.registerTask('timestamp', 'Creates a file with a timestamp', function() {
    grunt.config.requires('timestamp.options.file');

    var options = this.options();

    grunt.log.write('>> Creating timestamp on `' + options.file + '`: ');

    var timestamp = new Date();
    var contents = timestamp.toString();
    grunt.file.write(options.file, contents);

    grunt.log.writeln('OK');
  });

  grunt.registerTask('db-setup', 'Create, update and seed a new database', ['db-create', 'db-upgrade', 'db-seed']);

  /* npm plugins */
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');

  /* custom tasks */
  grunt.loadTasks('./tasks');
};
