/* Task for building the Sass files
 * -------------------- */
'use strict';
var gulp       = require('gulp')

const outputPath = "./node_modules/simpleskeletoncss/source/sass/"


module.exports = gulp.task('sassColor', function() {
   return gulp.src('source/sass/config.scss')
   .pipe(gulp.dest(outputPath));
});
