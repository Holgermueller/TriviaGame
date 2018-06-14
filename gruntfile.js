module.exports = function(grunt){
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    './assets/css/style.css': './assets/css/style.less'
                }
            }
        }, watch: {
            files: ['assets/**/*.less'],
            tasks: ['less'],
            options: {
                spawn: false,
                reload: true,
                livereload: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
};