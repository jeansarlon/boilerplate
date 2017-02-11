/* Watch Task
 * -------------------- */
'use strict';
var gulp       = require('gulp');

module.exports =  gulp.task('watch', function() {
   gulp.watch('source/js/**/*.js', ['webpack']);
   gulp.watch('source/sass/**/*.scss', ['styles']);
   gulp.watch('source/img/*', ['image-compression']);
});
