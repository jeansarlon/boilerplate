'use strict';

var gulp = require('gulp')
	,fs = require('fs')
	,tasks = fs.readdirSync('./gulp/tasks/')
	,path = require('path')
   ,connect       = require('gulp-connect');

tasks.forEach(function(task) {
	if (task != '.DS_Store') {
		require(path.join(__dirname, 'tasks', task));
	}
});

gulp.task('connect:before', ['watch']);
