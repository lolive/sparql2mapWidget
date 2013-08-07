module.exports = function(grunt) {
// Project configuration.
  grunt.initConfig({
   jade:{
    html:{
     options:{pretty: true, client: false},
     files:{"..": ['templates/jade/*.jade']}
    }
   }
  }); 

  grunt.loadNpmTasks('grunt-jade');

}
