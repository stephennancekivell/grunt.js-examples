module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			src: {
				files: ['src/*.less'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			},
			html: {
				files: ['src/*.html'],
				tasks: ['preprocess'],
				options: {
					livereload: true
				}
			}
		},
		less: {
			src: {
				files: {
					'target/style.css': 'src/style.less'
				}
			}
		},
		preprocess: {
			index: {
				src: 'src/index.html',
				dest: 'target/index.html'
			}
		},
		env: {
			dev: {
				NODE_ENV: 'DEVELOPMENT'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-env');
	grunt.loadNpmTasks('grunt-preprocess');

	grunt.registerTask('go', ['less', 'env:dev', 'preprocess', 'watch']);
	grunt.registerTask('dist', ['less', 'preprocess']);
};