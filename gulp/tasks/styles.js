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
,sourcemaps    = require('gulp-sourcemaps')
,merge         = require('merge-stream')
,sassGlob      = require('gulp-sass-glob')
,concat        = require('gulp-concat');
// ,concatCss     = require('gulp-concat-css');



module.exports = gulp.task('styles', function() {
   var format = argv.production ? 'compressed' : 'expanded';
   var simpleCss = "./node_modules/simpleskeletoncss/source/sass/style.scss"
   merge(
      gulp.src(simpleCss)
      // .pipe(gulpif(!argv.production, sourcemaps.init()))
      // .pipe(sassGlob())
      .pipe(sass({
         outputStyle: 'expanded'
      }).on('error', sass.logError))
      .pipe(postcss([
         lost()
      ]))
      .on('error', function(err) {
         console.error(err.message);
      })
      .pipe(autoprefixer({
         browsers: ['last 8 versions', 'ie 8', 'ie 9']
      })),
      gulp.src('source/sass/style.scss')
      .pipe(gulpif(!argv.production, sourcemaps.init()))
      .pipe(sassGlob())
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
   )
   .pipe(concat('all.css'))
   // .pipe(concatCss("bundle.css"))
   .pipe(gulp.dest('dist/css/'))
   .pipe(connect.reload());
});
