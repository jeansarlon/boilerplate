'use strict';

var codebase = '../codebase';

module.exports = {
	sassTask: {
		sassImport : './app/scss/ionic.app.scss',
		dest: './www/css/'
	},
	
	scripts: 		[
		'./app/config.js',
		codebase + '/www/js/scripts.js',
		codebase + '/www/js/app.js',
		codebase + '/www/js/factories.js',
		codebase + '/www/js/blogApp.js',
		codebase + '/www/js/directives/iframeSrc.js',
		codebase + '/www/js/directives/iframePostSrc.js',
		codebase + '/www/js/directives/compile.js',
		codebase + '/www/js/controllers/appController.js',
		codebase + '/www/js/controllers/storeController.js',
		codebase + '/www/js/controllers/homeController.js',
		codebase + '/www/js/controllers/blogController.js',
		codebase + '/www/js/controllers/facebookController.js',
		codebase + '/www/js/controllers/twitterController.js',
		codebase + '/www/js/controllers/videosController.js',
		codebase + '/www/js/controllers/videoController.js',
		codebase + '/www/js/controllers/blogPostController.js',
		codebase + '/www/js/controllers/randomController.js',
		codebase + '/www/js/controllers/TopThumbsUpController.js',
		codebase + '/www/js/controllers/secretController.js',
		codebase + '/www/js/services.js',
	],
	
	app: {
		styles :{
			src:	['./app/scss/**/*.scss'],
		},
		templates: {
			base:	 './app/templates',
			src: ['./app/templates/**/*'],
			dest:  './www/templates'
			
		},
		scripts: {
			base:	 './app/js',
			src: ['./app/js/**/*'],
			dest:  './www/js'
			
		}
	},
	
	base: {
		styles :{
			src: [codebase + '/scss/**/*'],
		},
		scripts: {
			base:	 '/www/js/',
			src: [codebase + '/www/js/**/*'],
			dest:  './www/js'
		},
		templates: {
			base:	 '/www/templates',
			src: [codebase + '/www/templates/**/*'],
			dest:  './www/templates'
		},
	}
};
