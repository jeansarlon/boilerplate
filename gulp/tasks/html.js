/* Task for building the HTML files
 * -------------------- */
'use strict';
var gulp       = require('gulp')
,connect       = require('gulp-connect');

module.exports = gulp.task('html', function() {
   return gulp.src('./**/*.html')
   .pipe(connect.reload());
});
