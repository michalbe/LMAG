module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js'],
      options: {
        ignores: ['lib/main.linked.js']
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js', ],
        tasks: ['jshint']
      }
    },
    resolveDependencies: {
      source: {
        src: 'index.html',
        dest: 'index.final.html'
      },
      options: {
        namespace: 'LMAG',
        build: {
          enabled: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-dependency-resolver');
  
  grunt.registerTask('default', ['jshint', 'resolveDependencies']);
};