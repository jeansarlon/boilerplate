/* Local server
 * -------------------- */
'use strict';
var gulp       = require('gulp')
,connect       = require('gulp-connect')

module.exports = gulp.task('connect', function() {
   return connect.server({
      root: './',
      port: 8080,
      livereload: true
   });
});
