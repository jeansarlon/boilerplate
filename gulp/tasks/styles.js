/* Task for building the Sass files
 * -------------------- */
'use strict';
var gulp       = require('gulp')
,sass          = require('gulp-sass')
,gulpif        = require('gulp-if')
,postcss       = require('gulp-postcss')
,lost          = require('lost')
,autoprefixer  = require('gulp-autoprefixer')
,connect       = require('gulp-connect')
,argv          = require('yargs').argv
,sourcemaps    = require('gulp-sourcemaps');



module.exports = gulp.task('styles', function() {
   var format = argv.production ? 'compressed' : 'expanded';

   return gulp.src('source/sass/*.scss')
   .pipe(gulpif(!argv.production, sourcemaps.init()))
   .pipe(sass({
      outputStyle: format
   }).on('error', sass.logError))
   .pipe(postcss([
      lost()
   ]))
   .on('error', function(err) {
      console.error(err.message);
   })
   .pipe(autoprefixer({
      browsers: ['last 8 versions', 'ie 8', 'ie 9']
   }))
   .pipe(gulpif(!argv.production, sourcemaps.write('.')))
   .pipe(gulp.dest('dist/css/'))
   .pipe(connect.reload());
});
