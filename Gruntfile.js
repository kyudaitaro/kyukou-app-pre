var site = require('./settings/site');

module.exports = function (grunt) {
  'use strict';

  grunt.util.linefeed = '\n';

  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'kyukou-app/scripts/lib',
          layout: 'byComponent',
          install: true,
          verbose: true,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },
    jade: {
      compile: {
        options: {
          data: {
            site: site,
            page: {
              title: site.name,
              description: site.description,
              keywords: site.keywords
            }
          }
        },
        files: {
          "kyukou-app/index.html": "views/index.jade"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-jade');

  grunt.registerTask('build', ['bower', 'jade']);
  grunt.registerTask('default', ['build']);
};
