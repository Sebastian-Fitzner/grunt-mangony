module.exports = function (grunt) {

	'use strict';

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({
		clean: {
			tests: ['tmp']
		},

		mangony: {
			options: {
				cwd: 'test/fixtures',
				dest: 'test/expected',
				types: {
					data: {
						dir: 'data',
						files: [
							'**/*'
						]
					},
					partials: {
						dir: 'partials',
						files: [
							'**/*.hbs'
						]
					},
					pages: {
						dir: 'pages',
						files: [
							'**/*.hbs'
						]
					},
					layouts: {
						dir: 'layouts',
						files: [
							'**/*.hbs'
						]
					}
				},
				helpers: [
					'helpers/*.js'
				]
			},
			dev: {
				options: {
					compileStaticFiles: false,
					devServer: {
						start: true
					},
					watch: true
				}
			},
			dist: {
				options: {
					compileStaticFiles: true,
					watch: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-mangony');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('test', ['clean', 'mangony:dev']);
	grunt.registerTask('build', ['clean', 'mangony:dist']);
	grunt.registerTask('default', ['test']);

};