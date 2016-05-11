'use strict';

module.exports = function (grunt) {
	var pkg = require('../package.json');

	grunt.registerMultiTask('mangony', pkg.description, function () {
		var Mangony = require('mangony');
		var options = this.options({
			assets: '', // Assets directory
			collections: [],
			compileStaticFiles: true,
			cwd: 'src', // Set the current directory
			debug: false,
			dest: 'app', // Set the destination path
			devServer: {
				start: false,
				port: 3000,
				express: null
			},
			exportData: false, // Export the complete data stack as JSON file
			ext: '.html', // Extension of destination files
			flatten: false, // Flatten the destination directory
			helpers: false, // Custom helpers files - globbing supported (example: 'helpers/*.js')
			types: { // All standard types should be defined in here
				data: { // Data type (JSON, HJSON)
					createDeepIds: false, // Create custom IDs with sub directories included
					pathDelimiter: false, // Provide a custom delimiter for path slashes
					dir: '', // Directory of data files, will be used in watcher
					files: [] // Array of data files - globbing supported
				},
				partials: { // Partials type (hbs files)
					createDeepIds: false, // Create custom IDs with sub directories included
					pathDelimiter: false, // Provide a custom delimiter for path slashes
					dir: '', // Directory of files - will be used in watcher
					files: [] // Array of files -  globbing supported
				},
				layouts: { // layouts type (hbs files)
					createDeepIds: false, // Create custom IDs with sub directories included
					pathDelimiter: false, // Provide a custom delimiter for path slashes
					dir: '', // Directory of files - will be used in watcher
					files: [] // Array of files -  globbing supported
				},
				pages: { // pages type (hbs files)
					createDeepIds: true, // Create custom IDs with sub directories included
					pathDelimiter: false, // Provide a custom delimiter for path slashes
					dir: '', // Directory of files - will be used in watcher
					files: [] // Array of files -  globbing supported
				}
			},
			watch: false // Enable an own watcher instance for all types
		});
		var done = this.async();
		var mangony = new Mangony(options);
		var _this = this;

		mangony
			.render()
			.then(function () {
				done();
			});
	});
};
