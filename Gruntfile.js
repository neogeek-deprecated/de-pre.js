module.exports = function (grunt) {

    'use strict';

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jslint: {

            client: {
                src: ['de-pre.js'],
                directives: {
                    browser: true,
                    globals: {
                        'define': true,
                        'module': true
                    }
                }
            }

        },

        uglify: {

            my_target: {
                options: {
                    mangle: true,
                    report: 'gzip',
                    banner: '/*!\n * <%= pkg.name %> v<%= pkg.version %> <%= grunt.template.today("isoDateTime") %>\n * https://github.com/neogeek/de-pre.js\n * \n * Copyright (c) <%= grunt.template.today("yyyy") %> Scott Doxey\n * Released under the MIT license.\n */\n'
                },
                files: {
                    'de-pre.min.js': ['de-pre.js']
                }
            }

        },

        jasmine: {
            test: {
                src: 'de-pre.min.js',
                options: {
                    specs: 'tests/*.js',
                    vendor: [
                        'http://cdn.jsdelivr.net/jquery/2.1.1/jquery.min.js'
                    ]
                }
            }
        },

        watch: {

            default: {
                files: ['de-pre.js'],
                tasks: ['jslint', 'uglify']
            }

        }

    });

    grunt.registerTask('default', [ 'jslint', 'uglify' ]);
    grunt.registerTask('test', [ 'jasmine' ]);

};
