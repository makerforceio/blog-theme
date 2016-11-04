module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'inline'
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.scss',
          'assets/css/ie-lte-8.css': 'assets/sass/ie-lte-8.scss'
        }
      }
    },
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({ browsers: 'last 2 versions' })
        ]
      },
      dist: {
        src: 'assets/css/*.css'
      }
    },
    watch: {
      css: {
        files: 'assets/sass/**/*',
        tasks: ['sass', 'postcss']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['sass', 'postcss']);
}
