module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          implementation: require('sass'),
          outputStyle: 'compressed',
          sourceMap: true
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.scss',
          'partials/style-amp.hbs': 'assets/sass/style-amp.scss',
          'assets/css/ie-lte-8.css': 'assets/sass/ie-lte-8.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'assets/sass/**/*',
        tasks: ['sass']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['sass']);
}
