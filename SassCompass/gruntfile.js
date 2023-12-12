module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify:{
      my_target:{
        files:{
          //archivo JS destino: archivos JS para comprimir
          // '_/js/script.js':['_/components/js/script.js', '_/components/js/other.js']
        '_/js/script.js':['_/components/js/*.js']
        }
      }
    },
    compass:{
      dev:{
        options:{
          config:'config.rb'
        }
      }
    },
    watch:{
      options: {livereload: true},
      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify']
      },
      html:{
        files: ['*.html']
      },
      sass:{
        files: ['_/components/css/*.scss'],
        tasks: ['compass:dev']
      }
    }
  })
  //sirve para especificar el 'watch' que deseamos ver
  grunt.registerTask('default', 'watch');
}
