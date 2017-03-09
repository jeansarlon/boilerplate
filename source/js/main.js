'use strict';
/*
* Default Requires
* =================================
*/
// window.jQuery = window.$ = require('jQuery');
require('../../node_modules/simpleskeletoncss/dist/js/simpleskeleton.min.js')
import all from '../sass/style.scss';
/*
* You Requires
* =================================
*/

import Example from './components/example'
require('./vendor/velocity.min.js')

/*
* You Code here
* =================================
*/

let elem = "jnjhn"

let example = new Example({element: elem});

example.foo()
