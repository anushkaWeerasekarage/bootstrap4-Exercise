'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);
    

    //configure sass(css preprocessor) tasks
    grunt.initConfig({
        sass: {
            dist: {
                'css/styles.css' : 'css/styles.scss'
            }
        },
        watch: {
            files: 'css/*.scss',
            tasks : ['sass']
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['css/*.scss', '*.html', 'js/*.js']
                },
                options: {
                    watchtask: true,
                    server: {
                        baseDir: './'
                    }
                }
            }
        }
    });
    grunt.registerTask('css', ['sass']);
    grunt.registerTask('default', ['browserSync', 'watch']);
    
};
