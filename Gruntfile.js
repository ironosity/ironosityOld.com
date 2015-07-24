module.exports = function(grunt) {
  'use strict';
  // Load all grunt tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    less: {
      compile: {
        files: [{
          expand: true,
          cwd: 'app/web/less/',
          src: ['main.less'],
          dest: 'app/web/css/',
          ext: '.css'
        }],
        options: {
          paths: ['app/web/less/'],
          dumpLineNumbers: 'comments'
        }
      }
    },

    watch: {
      less: {
        files: ['app/web/less/**/*.less'],
        tasks: ['less:compile']
      },
      transpiler : {
        files: ['app/web/script/**/*.js'],
        tasks: ['onlyModifiedFiles:es6transpiler']
      }
    }
  });

  grunt.registerTask('default', ['watch']);
}