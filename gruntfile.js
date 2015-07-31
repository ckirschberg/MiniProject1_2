module.exports = function(grunt) {

    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            //compile the less files into a css file.
            less: {
                compile: {
                    options: {
                        yuicompress: true
                    },
                    files: {
                        'app/dist/myStyles.css' : 'app/myStyles.less',
                        'app/dist/form-input.css' : 'app/internships/form-input.less',
                        'app/dist/global.css' : 'app/global.less'
                    }
                }
            }

            /* minify compiled (less -> css) file. */
            ,cssmin: {
                target: {
                    files: {
                        'app/dist/myStyles.min.css': [
                            'app/dist/myStyles.css',
                            'app/dist/form-input.css',
                            'app/dist/global.css'
                        ]
                    }
                }
            }

            ,watch: {
                css: {
                    files: 'app/**/*.less',
                    tasks: ['less', 'cssmin'],
                    options: {
                        livereload: true
                    }
                }
            }

        });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['watch']);
};