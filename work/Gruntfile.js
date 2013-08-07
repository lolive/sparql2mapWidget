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
   },

   watch: {
    jade: {
     files: ['templates/jade/*.jade', 'templates/jade/includes/*.jade'],
     tasks: ['jade']
    },
    sass: {
     files: 'templates/scss/*scss',
     tasks: ['sass']
    }
   }

  }); 

  grunt.loadNpmTasks('grunt-jade');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

}
