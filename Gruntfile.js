const sass = require('node-sass');

module.exports = function(grunt) {

    grunt.initConfig({
        sass: {
            dist: {
                src: 'src/styles/main.scss',
                dest: 'dist/build.css'
            }
        },
        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
            }
        },
        copy: {
            main: {
                files :[{
                    expand: true,
                    flatten: true,
                    src: ['src/index.html', 'src/scripts/main.js'],
                    dest: 'dist/',
                    filter: 'isFile'
                }
            ]
            }
        }
    });
  
    grunt.loadNpmTasks('grunt-node-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['watch']);

  
};