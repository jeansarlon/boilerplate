/* Webpack Task
 * -------------------- */
'use strict';
var gulp       = require('gulp')
,argv          = require('yargs').argv
,gulpif        = require('gulp-if')
,connect       = require('gulp-connect')
,sourcemaps    = require('gulp-sourcemaps')
,webpack       = require('gulp-webpack')
,wpConfig      = require('../../webpack.config.js')
,uglify        = require('gulp-uglify');


module.exports = gulp.task('webpack', function() {
   return gulp.src('source/js/main.js')
   .pipe(webpack(wpConfig ))
   .pipe(gulpif(!argv.production, sourcemaps.init({loadMaps: true})))
   .pipe(gulpif(!argv.production, sourcemaps.write('./')))
   .pipe(gulpif(argv.production, uglify()))
   .pipe(gulp.dest('./dist/js/'))
   .pipe(connect.reload());
});
