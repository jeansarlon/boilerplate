'use strict';
window.jQuery = window.$ = require('jQuery');
import Example from './components/example'
require('./vendor/velocity.min.js')
require('./components/cards')
require('./components/base')



$(document).ready(function() {
   let example

   $('body').each(function(i, elem) {
      example = new Example({element: elem});
   });
   example.foo()
});
