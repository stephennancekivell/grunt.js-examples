module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			src: {
				files: ['*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		},
		less: {
			src: {
				files: {
					'style.css': './style.less'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.registerTask('go', ['less', 'watch']);
};