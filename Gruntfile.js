module.exports = function(grunt) {

  // // Project configuration.
  // grunt.initConfig({
  //   pkg: grunt.file.readJSON('package.json'),
  //   default: function
  // });

  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('Working...').ok();
  });
};