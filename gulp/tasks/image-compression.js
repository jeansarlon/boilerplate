/* image-compression Task
 * -------------------- */
'use strict';
var gulp       = require('gulp')
,changed        = require('gulp-changed')
,imagemin       = require('gulp-imagemin')
,pngquant       = require('imagemin-pngquant');


module.exports = gulp.task('image-compression', function () {
   return gulp.src('source/img/*')
   .pipe(changed('dist/img'))
   .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
   }))
   .pipe(gulp.dest('dist/img'));
});
