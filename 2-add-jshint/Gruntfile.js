module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: {
					'app.min.js': ['app.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};