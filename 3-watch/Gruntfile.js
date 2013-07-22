module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			dist: {
				files: {
					'app.min.js': ['app.js']
				}
			}
		},
		watch: {
			src: {
				files: ['app.js'],
				tasks: ['jshint', 'uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('go', ['uglify', 'watch']);
};