module.exports = function(grunt) {
// Project configuration.
  grunt.initConfig({

   jade:{
    html:{
     options:{pretty: true, client: false},
     files:{"..": ['templates/jade/*.jade']}
    }
   },

   sass: {
    compile: {
     files: {
      '../css/my.css': 'templates/scss/my.scss'
     }
    }
   }

  }); 

  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-sass');

}
