/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(2);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.1.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-04-28T16:01Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//
	
	var arr = [];
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		// Use the correct document accordingly with window argument (sandbox)
		document = window.document,
	
		version = "2.1.4",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function( callback, args ) {
			return jQuery.each( this, callback, args );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map(this, function( elem, i ) {
				return callback.call( elem, i, elem );
			}));
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor(null);
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
			// Only deal with non-null/undefined values
			if ( (options = arguments[ i ]) != null ) {
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type(obj) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		},
	
		isPlainObject: function( obj ) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			if ( obj.constructor &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
	
			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call(obj) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;
	
			code = jQuery.trim( code );
	
			if ( code ) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf("use strict") === 1 ) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {
				// Otherwise, avoid the DOM node creation, insertion
				// and removal by using an indirect global eval
					indirect( code );
				}
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		// args is for internal usage only
		each: function( obj, callback, args ) {
			var value,
				i = 0,
				length = obj.length,
				isArray = isArraylike( obj );
	
			if ( args ) {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.apply( obj[ i ], args );
	
						if ( value === false ) {
							break;
						}
					}
				}
	
			// A special, fast, case for the most common use of each
			} else {
				if ( isArray ) {
					for ( ; i < length; i++ ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				} else {
					for ( i in obj ) {
						value = callback.call( obj[ i ], i, obj[ i ] );
	
						if ( value === false ) {
							break;
						}
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArraylike( Object(arr) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var value,
				i = 0,
				length = elems.length,
				isArray = isArraylike( elems ),
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});
	
	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	});
	
	function isArraylike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		if ( obj.nodeType === 1 && length ) {
			return true;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.0-pre
	 * http://sizzlejs.com/
	 *
	 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2014-12-16
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace( "w", "w#" ),
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + characterEncoding + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + characterEncoding + ")" ),
			"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
			"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;
	
		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
	
		context = context || document;
		results = results || [];
		nodeType = context.nodeType;
	
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		if ( !seed && documentIsHTML ) {
	
			// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
				// Speed-up: Sizzle("#ID")
				if ( (m = match[1]) ) {
					if ( nodeType === 9 ) {
						elem = context.getElementById( m );
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document (jQuery #6963)
						if ( elem && elem.parentNode ) {
							// Handle the case where IE, Opera, and Webkit return items
							// by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}
					} else {
						// Context is not a document
						if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
							contains( context, elem ) && elem.id === m ) {
							results.push( elem );
							return results;
						}
					}
	
				// Speed-up: Sizzle("TAG")
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;
	
				// Speed-up: Sizzle(".CLASS")
				} else if ( (m = match[3]) && support.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}
	
			// QSA path
			if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
				nid = old = expando;
				newContext = context;
				newSelector = nodeType !== 1 && selector;
	
				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					groups = tokenize( selector );
	
					if ( (old = context.getAttribute("id")) ) {
						nid = old.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", nid );
					}
					nid = "[id='" + nid + "'] ";
	
					i = groups.length;
					while ( i-- ) {
						groups[i] = nid + toSelector( groups[i] );
					}
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
					newSelector = groups.join(",");
				}
	
				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch(qsaError) {
					} finally {
						if ( !old ) {
							context.removeAttribute("id");
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = attrs.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// If no document and documentElement is available, return
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Set our document
		document = doc;
		docElem = doc.documentElement;
		parent = doc.defaultView;
	
		// Support: IE>8
		// If iframe document is assigned to "document" variable and if iframe has been reloaded,
		// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
		// IE6-8 do not support the defaultView property so parent will be undefined
		if ( parent && parent !== parent.top ) {
			// IE11 does not have attachEvent, so all must suffer
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Support tests
		---------------------------------------------------------------------- */
		documentIsHTML = !isXML( doc );
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( doc.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( doc.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					return m && m.parentNode ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\f]' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = doc.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully does not implement inclusive descendent
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === doc ? -1 :
					b === doc ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return doc;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, outerCache, node, diff, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[ expando ] || (parent[ expando ] = {});
								cache = outerCache[ type ] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										outerCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							// Use previously-cached element index if available
							} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
								diff = cache[1];
	
							// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
										// Cache the index of each encountered element
										if ( useCache ) {
											(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
										}
	
										if ( node === elem ) {
											break;
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
							if ( (oldCache = outerCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context !== document && context;
				}
	
				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context, xml ) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// Apply set filters to unmatched elements
				matchedCount += i;
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is no seed and only one group
		if ( match.length === 1 ) {
	
			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			});
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			});
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
		});
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	};
	
	jQuery.fn.extend({
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter(function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				}) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow(this, selector || [], false) );
		},
		not: function( selector ) {
			return this.pushStack( winnow(this, selector || [], true) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	});
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && (match[1] || !context) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[1] ) {
						context = context instanceof jQuery ? context[0] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[1],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[2] );
	
						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {
							// Inject the element directly into the jQuery object
							this.length = 1;
							this[0] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || rootjQuery ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof rootjQuery.ready !== "undefined" ?
					rootjQuery.ready( selector ) :
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.extend({
		dir: function( elem, dir, until ) {
			var matched = [],
				truncate = until !== undefined;
	
			while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
				if ( elem.nodeType === 1 ) {
					if ( truncate && jQuery( elem ).is( until ) ) {
						break;
					}
					matched.push( elem );
				}
			}
			return matched;
		},
	
		sibling: function( n, elem ) {
			var matched = [];
	
			for ( ; n; n = n.nextSibling ) {
				if ( n.nodeType === 1 && n !== elem ) {
					matched.push( n );
				}
			}
	
			return matched;
		}
	});
	
	jQuery.fn.extend({
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter(function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[i] ) ) {
						return true;
					}
				}
			});
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
					// Always skip document fragments
					if ( cur.nodeType < 11 && (pos ?
						pos.index(cur) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector(cur, selectors)) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.unique(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter(selector)
			);
		}
	});
	
	function sibling( cur, dir ) {
		while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each({
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return jQuery.dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return jQuery.dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return jQuery.dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return jQuery.dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return jQuery.sibling( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.unique( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	});
	var rnotwhite = (/\S+/g);
	
	
	
	// String to Object options format cache
	var optionsCache = {};
	
	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions( options ) {
		var object = optionsCache[ options ] = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		});
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			( optionsCache[ options ] || createOptions( options ) ) :
			jQuery.extend( {}, options );
	
		var // Last fire value (for non-forgettable lists)
			memory,
			// Flag to know if list was already fired
			fired,
			// Flag to know if list is currently firing
			firing,
			// First callback to fire (used internally by add and fireWith)
			firingStart,
			// End of the loop when firing
			firingLength,
			// Index of currently firing callback (modified by remove if needed)
			firingIndex,
			// Actual callback list
			list = [],
			// Stack of fire calls for repeatable lists
			stack = !options.once && [],
			// Fire callbacks
			fire = function( data ) {
				memory = options.memory && data;
				fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for ( ; list && firingIndex < firingLength; firingIndex++ ) {
					if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
						memory = false; // To prevent further calls using add
						break;
					}
				}
				firing = false;
				if ( list ) {
					if ( stack ) {
						if ( stack.length ) {
							fire( stack.shift() );
						}
					} else if ( memory ) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			// Actual Callbacks object
			self = {
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
						// First, we save the current length
						var start = list.length;
						(function add( args ) {
							jQuery.each( args, function( _, arg ) {
								var type = jQuery.type( arg );
								if ( type === "function" ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && type !== "string" ) {
									// Inspect recursively
									add( arg );
								}
							});
						})( arguments );
						// Do we need to add the callbacks to the
						// current firing batch?
						if ( firing ) {
							firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
						} else if ( memory ) {
							firingStart = start;
							fire( memory );
						}
					}
					return this;
				},
				// Remove a callback from the list
				remove: function() {
					if ( list ) {
						jQuery.each( arguments, function( _, arg ) {
							var index;
							while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
								list.splice( index, 1 );
								// Handle firing indexes
								if ( firing ) {
									if ( index <= firingLength ) {
										firingLength--;
									}
									if ( index <= firingIndex ) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
				},
				// Remove all callbacks from the list
				empty: function() {
					list = [];
					firingLength = 0;
					return this;
				},
				// Have the list do nothing anymore
				disable: function() {
					list = stack = memory = undefined;
					return this;
				},
				// Is it disabled?
				disabled: function() {
					return !list;
				},
				// Lock the list in its current state
				lock: function() {
					stack = undefined;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				// Is it locked?
				locked: function() {
					return !stack;
				},
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( list && ( !fired || stack ) ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						if ( firing ) {
							stack.push( args );
						} else {
							fire( args );
						}
					}
					return this;
				},
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend({
	
		Deferred: function( func ) {
			var tuples = [
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks("memory") ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred(function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[1] ](function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.done( newDefer.resolve )
											.fail( newDefer.reject )
											.progress( newDefer.notify );
									} else {
										newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
									}
								});
							});
							fns = null;
						}).promise();
					},
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[1] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(function() {
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[0] ] = function() {
					deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[0] + "With" ] = list.fireWith;
			});
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject )
							.progress( updateFunc( i, progressContexts, progressValues ) );
					} else {
						--remaining;
					}
				}
			}
	
			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	});
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	});
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if ( document.readyState === "complete" ) {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout( jQuery.ready );
	
			} else {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed, false );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed, false );
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[0], key ) : emptyGet;
	};
	
	
	/**
	 * Determines whether an object can have data
	 */
	jQuery.acceptData = function( owner ) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty( this.cache = {}, 0, {
			get: function() {
				return {};
			}
		});
	
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	Data.accepts = jQuery.acceptData;
	
	Data.prototype = {
		key: function( owner ) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if ( !Data.accepts( owner ) ) {
				return 0;
			}
	
			var descriptor = {},
				// Check if the owner object already has a cache key
				unlock = owner[ this.expando ];
	
			// If not, create one
			if ( !unlock ) {
				unlock = Data.uid++;
	
				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[ this.expando ] = { value: unlock };
					Object.defineProperties( owner, descriptor );
	
				// Support: Android<4
				// Fallback to a less secure definition
				} catch ( e ) {
					descriptor[ this.expando ] = unlock;
					jQuery.extend( owner, descriptor );
				}
			}
	
			// Ensure the cache object
			if ( !this.cache[ unlock ] ) {
				this.cache[ unlock ] = {};
			}
	
			return unlock;
		},
		set: function( owner, data, value ) {
			var prop,
				// There may be an unlock assigned to this node,
				// if there is no entry for this "owner", create one inline
				// and set the unlock as though an owner entry had always existed
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if ( jQuery.isEmptyObject( cache ) ) {
					jQuery.extend( this.cache[ unlock ], data );
				// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for ( prop in data ) {
						cache[ prop ] = data[ prop ];
					}
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[ this.key( owner ) ];
	
			return key === undefined ?
				cache : cache[ key ];
		},
		access: function( owner, key, value ) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					((key && typeof key === "string") && value === undefined) ) {
	
				stored = this.get( owner, key );
	
				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase(key) );
			}
	
			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				unlock = this.key( owner ),
				cache = this.cache[ unlock ];
	
			if ( key === undefined ) {
				this.cache[ unlock ] = {};
	
			} else {
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );
					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}
	
				i = name.length;
				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}
		},
		hasData: function( owner ) {
			return !jQuery.isEmptyObject(
				this.cache[ owner[ this.expando ] ] || {}
			);
		},
		discard: function( owner ) {
			if ( owner[ this.expando ] ) {
				delete this.cache[ owner[ this.expando ] ];
			}
		}
	};
	var data_priv = new Data();
	
	var data_user = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch( e ) {}
	
				// Make sure we set the data so it isn't changed later
				data_user.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend({
		hasData: function( elem ) {
			return data_user.hasData( elem ) || data_priv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return data_user.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			data_user.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return data_priv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			data_priv.remove( elem, name );
		}
	});
	
	jQuery.fn.extend({
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = data_user.get( elem );
	
					if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice(5) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						data_priv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each(function() {
					data_user.set( this, key );
				});
			}
	
			return access( this, function( value ) {
				var data,
					camelKey = jQuery.camelCase( key );
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each(function() {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get( this, camelKey );
	
					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set( this, camelKey, value );
	
					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf("-") !== -1 && data !== undefined ) {
						data_user.set( this, key, value );
					}
				});
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each(function() {
				data_user.remove( this, key );
			});
		}
	});
	
	
	jQuery.extend({
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = data_priv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = data_priv.access( elem, type, jQuery.makeArray(data) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return data_priv.get( elem, key ) || data_priv.access( elem, key, {
				empty: jQuery.Callbacks("once memory").add(function() {
					data_priv.remove( elem, [ type + "queue", key ] );
				})
			});
		}
	});
	
	jQuery.fn.extend({
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[0], type );
			}
	
			return data === undefined ?
				this :
				this.each(function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[0] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				});
		},
		dequeue: function( type ) {
			return this.each(function() {
				jQuery.dequeue( this, type );
			});
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = data_priv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	});
	var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
		};
	
	var rcheckableType = (/^(?:checkbox|radio)$/i);
	
	
	
	(function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;
	
	
	
	support.focusinBubbles = "onfocusin" in window;
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !(events = elemData.events) ) {
				events = elemData.events = {};
			}
			if ( !(eventHandle = elemData.handle) ) {
				eventHandle = elemData.handle = function( e ) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join(".")
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !(handlers = events[ type ]) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = data_priv.hasData( elem ) && data_priv.get( elem );
	
			if ( !elemData || !(events = elemData.events) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[t] ) || [];
				type = origType = tmp[1];
				namespaces = ( tmp[2] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
				data_priv.remove( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf(".") >= 0 ) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === (elem.ownerDocument || document) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
					jQuery.acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
								.apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( (event.result = ret) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.disabled !== true || event.type !== "click" ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) >= 0 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
			}
	
			return handlerQueue;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}
	
			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		simulate: function( type, elem, event, bubble ) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true,
					originalEvent: {}
				}
			);
			if ( bubble ) {
				jQuery.event.trigger( e, null, elem );
			} else {
				jQuery.event.dispatch.call( elem, e );
			}
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle, false );
		}
	};
	
	jQuery.Event = function( src, props ) {
		// Allow instantiation without the 'new' keyword
		if ( !(this instanceof jQuery.Event) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && e.preventDefault ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && e.stopPropagation ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	});
	
	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if ( !support.focusinBubbles ) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
					jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
				};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = data_priv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						data_priv.remove( doc, fix );
	
					} else {
						data_priv.access( doc, fix, attaches );
					}
				}
			};
		});
	}
	
	jQuery.fn.extend({
	
		on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
			var origFn, type;
	
			// Types can be a map of types/handlers
			if ( typeof types === "object" ) {
				// ( types-Object, selector, data )
				if ( typeof selector !== "string" ) {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for ( type in types ) {
					this.on( type, selector, data, types[ type ], one );
				}
				return this;
			}
	
			if ( data == null && fn == null ) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if ( fn == null ) {
				if ( typeof selector === "string" ) {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if ( fn === false ) {
				fn = returnFalse;
			} else if ( !fn ) {
				return this;
			}
	
			if ( one === 1 ) {
				origFn = fn;
				fn = function( event ) {
					// Can use an empty set, since event contains the info
					jQuery().off( event );
					return origFn.apply( this, arguments );
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
			}
			return this.each( function() {
				jQuery.event.add( this, types, fn, data, selector );
			});
		},
		one: function( types, selector, data, fn ) {
			return this.on( types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each(function() {
				jQuery.event.remove( this, types, fn, selector );
			});
		},
	
		trigger: function( type, data ) {
			return this.each(function() {
				jQuery.event.trigger( type, data, this );
			});
		},
		triggerHandler: function( type, data ) {
			var elem = this[0];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	});
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		rtagName = /<([\w:]+)/,
		rhtml = /<|&#?\w+;/,
		rnoInnerhtml = /<(?:script|style|link)/i,
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptType = /^$|\/(?:java|ecma)script/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	
		// We have to close these tags to support XHTML (#13200)
		wrapMap = {
	
			// Support: IE9
			option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
			thead: [ 1, "<table>", "</table>" ],
			col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
			tr: [ 2, "<table><tbody>", "</tbody></table>" ],
			td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
			_default: [ 0, "", "" ]
		};
	
	// Support: IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName("tbody")[0] ||
				elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute("type");
		}
	
		return elem;
	}
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			data_priv.set(
				elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( data_priv.hasData( src ) ) {
			pdataOld = data_priv.access( src );
			pdataCur = data_priv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( data_user.hasData( src ) ) {
			udataOld = data_user.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			data_user.set( dest, udataCur );
		}
	}
	
	function getAll( context, tag ) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
				context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	jQuery.extend({
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		buildFragment: function( elems, context, scripts, selection ) {
			var elem, tmp, tag, wrap, contains, j,
				fragment = context.createDocumentFragment(),
				nodes = [],
				i = 0,
				l = elems.length;
	
			for ( ; i < l; i++ ) {
				elem = elems[ i ];
	
				if ( elem || elem === 0 ) {
	
					// Add nodes directly
					if ( jQuery.type( elem ) === "object" ) {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
					// Convert non-html into a text node
					} else if ( !rhtml.test( elem ) ) {
						nodes.push( context.createTextNode( elem ) );
	
					// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild( context.createElement("div") );
	
						// Deserialize a standard representation
						tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
						wrap = wrapMap[ tag ] || wrapMap._default;
						tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];
	
						// Descend through wrappers to the right content
						j = wrap[ 0 ];
						while ( j-- ) {
							tmp = tmp.lastChild;
						}
	
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( nodes, tmp.childNodes );
	
						// Remember the top-level container
						tmp = fragment.firstChild;
	
						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}
	
			// Remove wrapper from fragment
			fragment.textContent = "";
	
			i = 0;
			while ( (elem = nodes[ i++ ]) ) {
	
				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
					continue;
				}
	
				contains = jQuery.contains( elem.ownerDocument, elem );
	
				// Append to fragment
				tmp = getAll( fragment.appendChild( elem ), "script" );
	
				// Preserve script evaluation history
				if ( contains ) {
					setGlobalEval( tmp );
				}
	
				// Capture executables
				if ( scripts ) {
					j = 0;
					while ( (elem = tmp[ j++ ]) ) {
						if ( rscriptType.test( elem.type || "" ) ) {
							scripts.push( elem );
						}
					}
				}
			}
	
			return fragment;
		},
	
		cleanData: function( elems ) {
			var data, elem, type, key,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
				if ( jQuery.acceptData( elem ) ) {
					key = elem[ data_priv.expando ];
	
					if ( key && (data = data_priv.cache[ key ]) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
						if ( data_priv.cache[ key ] ) {
							// Discard any remaining `private` data
							delete data_priv.cache[ key ];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[ elem[ data_user.expando ] ];
			}
		}
	});
	
	jQuery.fn.extend({
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each(function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					});
			}, null, value, arguments.length );
		},
	
		append: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			});
		},
	
		prepend: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			});
		},
	
		before: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			});
		},
	
		after: function() {
			return this.domManip( arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			});
		},
	
		remove: function( selector, keepData /* Internal Use Only */ ) {
			var elem,
				elems = selector ? jQuery.filter( selector, this ) : this,
				i = 0;
	
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( !keepData && elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem ) );
				}
	
				if ( elem.parentNode ) {
					if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
						setGlobalEval( getAll( elem, "script" ) );
					}
					elem.parentNode.removeChild( elem );
				}
			}
	
			return this;
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; (elem = this[i]) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map(function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			});
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = value.replace( rxhtmlTag, "<$1></$2>" );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var arg = arguments[ 0 ];
	
			// Make the changes, replacing each context element with the new content
			this.domManip( arguments, function( elem ) {
				arg = this.parentNode;
	
				jQuery.cleanData( getAll( this ) );
	
				if ( arg ) {
					arg.replaceChild( elem, this );
				}
			});
	
			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},
	
		detach: function( selector ) {
			return this.remove( selector, true );
		},
	
		domManip: function( args, callback ) {
	
			// Flatten any nested arrays
			args = concat.apply( [], args );
	
			var fragment, first, scripts, hasScripts, node, doc,
				i = 0,
				l = this.length,
				set = this,
				iNoClone = l - 1,
				value = args[ 0 ],
				isFunction = jQuery.isFunction( value );
	
			// We can't cloneNode fragments that contain checked, in WebKit
			if ( isFunction ||
					( l > 1 && typeof value === "string" &&
						!support.checkClone && rchecked.test( value ) ) ) {
				return this.each(function( index ) {
					var self = set.eq( index );
					if ( isFunction ) {
						args[ 0 ] = value.call( this, index, self.html() );
					}
					self.domManip( args, callback );
				});
			}
	
			if ( l ) {
				fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
				first = fragment.firstChild;
	
				if ( fragment.childNodes.length === 1 ) {
					fragment = first;
				}
	
				if ( first ) {
					scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
					hasScripts = scripts.length;
	
					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for ( ; i < l; i++ ) {
						node = fragment;
	
						if ( i !== iNoClone ) {
							node = jQuery.clone( node, true, true );
	
							// Keep references to cloned scripts for later restoration
							if ( hasScripts ) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge( scripts, getAll( node, "script" ) );
							}
						}
	
						callback.call( this[ i ], node, i );
					}
	
					if ( hasScripts ) {
						doc = scripts[ scripts.length - 1 ].ownerDocument;
	
						// Reenable scripts
						jQuery.map( scripts, restoreScript );
	
						// Evaluate executable scripts on first document insertion
						for ( i = 0; i < hasScripts; i++ ) {
							node = scripts[ i ];
							if ( rscriptType.test( node.type || "" ) &&
								!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {
	
								if ( node.src ) {
									// Optional AJAX dependency, but won't run scripts if not present
									if ( jQuery._evalUrl ) {
										jQuery._evalUrl( node.src );
									}
								} else {
									jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
								}
							}
						}
					}
				}
			}
	
			return this;
		}
	});
	
	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	});
	
	
	var iframe,
		elemdisplay = {};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var style,
			elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			// getDefaultComputedStyle might be reliably used only on attached element
			display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?
	
				// Use of this method is a temporary fix (more like optimization) until something better comes along,
				// since it was removed from specification and supported only in FF
				style.display : jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = (/^margin/);
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			if ( elem.ownerDocument.defaultView.opener ) {
				return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
			}
	
			return window.getComputedStyle( elem, null );
		};
	
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
		}
	
		if ( computed ) {
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
			// Support: IE
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply( this, arguments );
			}
		};
	}
	
	
	(function() {
		var pixelPositionVal, boxSizingReliableVal,
			docElem = document.documentElement,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		if ( !div.style ) {
			return;
		}
	
		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
			"position:absolute";
		container.appendChild( div );
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
				"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
				"border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild( container );
	
			var divStyle = window.getComputedStyle( div, null );
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";
	
			docElem.removeChild( container );
		}
	
		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if ( window.getComputedStyle ) {
			jQuery.extend( support, {
				pixelPosition: function() {
	
					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function() {
					if ( boxSizingReliableVal == null ) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function() {
	
					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
						marginDiv = div.appendChild( document.createElement( "div" ) );
	
					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
						// Support: Firefox<29, Android 2.3
						// Vendor-prefix box-sizing
						"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
						"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild( container );
	
					ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );
	
					docElem.removeChild( container );
					div.removeChild( marginDiv );
	
					return ret;
				}
			});
		}
	})();
	
	
	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var
		// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
		rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( style, name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in style ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
			origName = name,
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in style ) {
				return name;
			}
		}
	
		return origName;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
			// If we already have the right measurement, avoid augmentation
			4 :
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test(val) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = data_priv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	jQuery.extend({
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && (ret = rrelNum.exec( value )) ) {
					value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number, add 'px' to the (except for certain CSS properties)
				if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
					value += "px";
				}
	
				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
					style[ name ] = value;
				}
	
			} else {
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
			}
			return val;
		}
	});
	
	jQuery.each([ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
						jQuery.swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						}) :
						getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	});
	
	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return jQuery.swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split(" ") : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	});
	
	jQuery.fn.extend({
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each(function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			});
		}
	});
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				if ( tween.elem[ tween.prop ] != null &&
					(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		}
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
		rrun = /queueHooks$/,
		animationPrefilters = [ defaultPrefilter ],
		tweeners = {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value ),
					target = tween.cur(),
					parts = rfxnum.exec( value ),
					unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
					// Starting value computation is required for potential unit mismatches
					start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
						rfxnum.exec( jQuery.css( tween.elem, prop ) ),
					scale = 1,
					maxIterations = 20;
	
				if ( start && start[ 3 ] !== unit ) {
					// Trust units reported by jQuery.css
					unit = unit || start[ 3 ];
	
					// Make sure we update the tween properties later on
					parts = parts || [];
	
					// Iteratively approximate from a nonzero starting point
					start = +target || 1;
	
					do {
						// If previous iteration zeroed out, double until we get *something*.
						// Use string for doubling so we don't accidentally see scale as unchanged below
						scale = scale || ".5";
	
						// Adjust and apply
						start = start / scale;
						jQuery.style( tween.elem, prop, start + unit );
	
					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
					} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
				}
	
				// Update tween properties
				if ( parts ) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;
					// If a +=/-= token was provided, we're doing a relative animation
					tween.end = parts[ 1 ] ?
						start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
						+parts[ 2 ];
				}
	
				return tween;
			} ]
		};
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function() {
			fxNow = undefined;
		});
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( (tween = collection[ index ].call( animation, prop, value )) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = data_priv.get( elem, "fxshow" );
	
		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always(function() {
				// Ensure the complete handler is called before this completes
				anim.always(function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				});
			});
		}
	
		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always(function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			});
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access( elem, "fxshow", {} );
			}
	
			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done(function() {
					jQuery( elem ).hide();
				});
			}
			anim.done(function() {
				var prop;
	
				data_priv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			});
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = animationPrefilters.length,
			deferred = jQuery.Deferred().always( function() {
				// Don't match elem in the :animated selector
				delete tick.elem;
			}),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ]);
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise({
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, { specialEasing: {} }, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			}),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			})
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.split(" ");
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				tweeners[ prop ] = tweeners[ prop ] || [];
				tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				animationPrefilters.unshift( callback );
			} else {
				animationPrefilters.push( callback );
			}
		}
	});
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend({
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate({ opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || data_priv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each(function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = data_priv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			});
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each(function() {
				var index,
					data = data_priv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			});
		}
	});
	
	jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	});
	
	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	});
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	};
	
	
	(function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend({
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each(function() {
				jQuery.removeAttr( this, name );
			});
		}
	});
	
	jQuery.extend({
		attr: function( elem, name, value ) {
			var hooks, ret,
				nType = elem.nodeType;
	
			// don't get/set attributes on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === strundefined ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
	
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
	
				} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
					return ret;
	
				} else {
					elem.setAttribute( name, value + "" );
					return value;
				}
	
			} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
				return ret;
	
			} else {
				ret = jQuery.find.attr( elem, name );
	
				// Non-existent attributes return null, we normalize to undefined
				return ret == null ?
					undefined :
					ret;
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( (name = attrNames[i++]) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
						// Set corresponding property to false
						elem[ propName ] = false;
					}
	
					elem.removeAttribute( name );
				}
			}
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	});
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i;
	
	jQuery.fn.extend({
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each(function() {
				delete this[ jQuery.propFix[ name ] || name ];
			});
		}
	});
	
	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
	
		prop: function( elem, name, value ) {
			var ret, hooks, notxml,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			notxml = nType !== 1 || !jQuery.isXMLDoc( elem );
	
			if ( notxml ) {
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
					ret :
					( elem[ name ] = value );
	
			} else {
				return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
					ret :
					elem[ name ];
			}
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
					return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
						elem.tabIndex :
						-1;
				}
			}
		}
	});
	
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}
	
	jQuery.each([
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	});
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	jQuery.fn.extend({
		addClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).addClass( value.call( this, j, this.className ) );
				});
			}
	
			if ( proceed ) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						" "
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, clazz, j, finalValue,
				proceed = arguments.length === 0 || typeof value === "string" && value,
				i = 0,
				len = this.length;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( j ) {
					jQuery( this ).removeClass( value.call( this, j, this.className ) );
				});
			}
			if ( proceed ) {
				classes = ( value || "" ).match( rnotwhite ) || [];
	
				for ( ; i < len; i++ ) {
					elem = this[ i ];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( elem.className ?
						( " " + elem.className + " " ).replace( rclass, " " ) :
						""
					);
	
					if ( cur ) {
						j = 0;
						while ( (clazz = classes[j++]) ) {
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim( cur ) : "";
						if ( elem.className !== finalValue ) {
							elem.className = finalValue;
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each(function( i ) {
					jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
				});
			}
	
			return this.each(function() {
				if ( type === "string" ) {
					// Toggle individual class names
					var className,
						i = 0,
						self = jQuery( this ),
						classNames = value.match( rnotwhite ) || [];
	
					while ( (className = classNames[ i++ ]) ) {
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( type === strundefined || type === "boolean" ) {
					if ( this.className ) {
						// store className if set
						data_priv.set( this, "__className__", this.className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
				}
			});
		},
	
		hasClass: function( selector ) {
			var className = " " + selector + " ",
				i = 0,
				l = this.length;
			for ( ; i < l; i++ ) {
				if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
					return true;
				}
			}
	
			return false;
		}
	});
	
	
	
	
	var rreturn = /\r/g;
	
	jQuery.fn.extend({
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[0];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
						// Handle most common string cases
						ret.replace(rreturn, "") :
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each(function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					});
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			});
		}
	});
	
	jQuery.extend({
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						jQuery.trim( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// IE6-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});
	
	// Radios and checkboxes getter/setter
	jQuery.each([ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	});
	
	jQuery.fn.extend({
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		},
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
		}
	});
	
	
	var nonce = jQuery.now();
	
	var rquery = (/\?/);
	
	
	
	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Document location
		ajaxLocation = window.location.href,
	
		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
				// For each dataType in the dataTypeExpression
				while ( (dataType = dataTypes[i++]) ) {
					// Prepend if requested
					if ( dataType[0] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						(structure[ dataType ] = structure[ dataType ] || []).unshift( func );
	
					// Otherwise append
					} else {
						(structure[ dataType ] = structure[ dataType ] || []).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			});
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend({
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
				// URL without anti-cache param
				cacheURL,
				// Response headers
				responseHeadersString,
				responseHeaders,
				// timeout handle
				timeoutTimer,
				// Cross-domain detection vars
				parts,
				// To know if global events are to be dispatched
				fireGlobals,
				// Loop variable
				i,
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
				// Callbacks context
				callbackContext = s.context || s,
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks("once memory"),
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
				// The jqXHR state
				state = 0,
				// Default abort message
				strAbort = "canceled",
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( (match = rheaders.exec( responseHeadersString )) ) {
									responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger("ajaxStart");
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
					s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = setTimeout(function() {
						jqXHR.abort("timeout");
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	});
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};
	
	
	jQuery.fn.extend({
		wrapAll: function( html ) {
			var wrap;
	
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapAll( html.call(this, i) );
				});
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map(function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				}).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each(function( i ) {
					jQuery( this ).wrapInner( html.call(this, i) );
				});
			}
	
			return this.each(function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			});
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each(function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
			});
		},
	
		unwrap: function() {
			return this.parent().each(function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			}).end();
		}
	});
	
	
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
				}
			});
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			});
	
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend({
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map(function() {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			})
			.filter(function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			})
			.map(function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						}) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			}).get();
		}
	});
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest();
		} catch( e ) {}
	};
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSuccessStatus = {
			// file protocol always yields status code 0, assume 200
			0: 200,
			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]();
			}
		});
	}
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport(function( options ) {
		var callback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;
	
					xhr.open( options.type, options.url, options.async, options.username, options.password );
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers["X-Requested-With"] ) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								delete xhrCallbacks[ id ];
								callback = xhr.onload = xhr.onerror = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
									complete(
										// file: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
										// Support: IE9
										// Accessing binary-data responseText throws an exception
										// (#11426)
										typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined,
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");
	
					// Create the abort callback
					callback = xhrCallbacks[ id ] = callback("abort");
	
					try {
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	});
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	});
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	});
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	});
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always(function() {
				// Restore preexisting value
				window[ callbackName ] = overwritten;
	
				// Save back as free
				if ( s[ callbackName ] ) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			});
	
			// Delegate to script
			return "script";
		}
	});
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}
	
		parsed = jQuery.buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf(" ");
	
		if ( off >= 0 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax({
				url: url,
	
				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			}).complete( callback && function( jqXHR, status ) {
				self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
			});
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	});
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
	
	
	
	
	var docElem = window.document.documentElement;
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf("auto") > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
				options = options.call( elem, i, curOffset );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend({
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each(function( i ) {
						jQuery.offset.setOffset( this, options, i );
					});
			}
	
			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if ( typeof elem.getBoundingClientRect !== strundefined ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		offsetParent: function() {
			return this.map(function() {
				var offsetParent = this.offsetParent || docElem;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || docElem;
			});
		}
	});
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : window.pageXOffset,
						top ? val : window.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	});
	
	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	});
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		});
	});
	
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	var
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( typeof noGlobal === strundefined ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	
	
	return jQuery;
	
	}));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _style = __webpack_require__(8);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _example = __webpack_require__(30);
	
	var _example2 = _interopRequireDefault(_example);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	__webpack_require__(3);
	
	__webpack_require__(31);
	
	var elem = "jnjhn";
	
	var example = new _example2.default({ element: elem });
	
	example.foo();

/***/ },
/* 3 */
/***/ function(module, exports) {

	!function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(1),e.exports=n(3)},function(e,t,n){var r,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,r){"object"===n(e)&&"object"===n(e.exports)?e.exports=t.document?r(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return r(e)}:r(t)}("undefined"!=typeof window?window:void 0,function(o,a){function s(e){var t="length"in e&&e.length,n=ie.type(e);return"function"!==n&&!ie.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function u(e,t,n){if(ie.isFunction(t))return ie.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return ie.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(pe.test(t))return ie.filter(t,e,n);t=ie.filter(t,e)}return ie.grep(e,function(e){return J.call(t,e)>=0!==n})}function l(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function c(e){var t=xe[e]={};return ie.each(e.match(ve)||[],function(e,n){t[n]=!0}),t}function f(){ne.removeEventListener("DOMContentLoaded",f,!1),o.removeEventListener("load",f,!1),ie.ready()}function p(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=ie.expando+p.uid++}function d(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ke,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Se.test(n)?ie.parseJSON(n):n)}catch(i){}Ce.set(e,t,n)}else n=void 0;return n}function h(){return!0}function g(){return!1}function m(){try{return ne.activeElement}catch(e){}}function y(e,t){return ie.nodeName(e,"table")&&ie.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function v(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function x(e){var t=We.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n=0,r=e.length;n<r;n++)Te.set(e[n],"globalEval",!t||Te.get(t[n],"globalEval"))}function w(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Te.hasData(e)&&(o=Te.access(e),a=Te.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)ie.event.add(t,i,l[i][n])}Ce.hasData(e)&&(s=Ce.access(e),u=ie.extend({},s),Ce.set(t,u))}}function T(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&ie.nodeName(e,t)?ie.merge([e],n):n}function C(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ae.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function S(e,t){var n,r=ie(t.createElement(e)).appendTo(t.body),i=o.getDefaultComputedStyle&&(n=o.getDefaultComputedStyle(r[0]))?n.display:ie.css(r[0],"display");return r.detach(),i}function k(e){var t=ne,n=Xe[e];return n||(n=S(e,t),"none"!==n&&n||(ze=(ze||ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=ze[0].contentDocument,t.write(),t.close(),n=S(e,t),ze.detach()),Xe[e]=n),n}function N(e,t,n){var r,i,o,a,s=e.style;return n=n||Ye(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||ie.contains(e.ownerDocument,e)||(a=ie.style(e,t)),Ue.test(a)&&_e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function E(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function j(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=et.length;i--;)if(t=et[i]+n,t in e)return t;return r}function A(e,t,n){var r=Qe.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function D(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=ie.css(e,n+Ee[o],!0,i)),r?("content"===n&&(a-=ie.css(e,"padding"+Ee[o],!0,i)),"margin"!==n&&(a-=ie.css(e,"border"+Ee[o]+"Width",!0,i))):(a+=ie.css(e,"padding"+Ee[o],!0,i),"padding"!==n&&(a+=ie.css(e,"border"+Ee[o]+"Width",!0,i)));return a}function P(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ye(e),a="border-box"===ie.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(i=N(e,t,o),(i<0||null==i)&&(i=e.style[t]),Ue.test(i))return i;r=a&&(te.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+D(e,t,n||(a?"border":"content"),r,o)+"px"}function L(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)r=e[a],r.style&&(o[a]=Te.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&je(r)&&(o[a]=Te.access(r,"olddisplay",k(r.nodeName)))):(i=je(r),"none"===n&&i||Te.set(r,"olddisplay",i?n:ie.css(r,"display"))));for(a=0;a<s;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function q(){return setTimeout(function(){tt=void 0}),tt=ie.now()}function F(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=Ee[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function O(e,t,n){for(var r,i=(st[t]||[]).concat(st["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function R(e,t,n){var r,i,o,a,s,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&je(e),g=Te.get(e,"fxshow");n.queue||(s=ie._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,ie.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=ie.css(e,"display"),c="none"===l?Te.get(e,"olddisplay")||k(e.nodeName):l,"inline"===c&&"none"===ie.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],rt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||ie.style(e,r)}else l=void 0;if(ie.isEmptyObject(p))"inline"===("none"===l?k(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=Te.access(e,"fxshow",{}),o&&(g.hidden=!h),h?ie(e).show():f.done(function(){ie(e).hide()}),f.done(function(){var t;Te.remove(e,"fxshow");for(t in p)ie.style(e,t,p[t])});for(r in p)a=O(h?g[r]:0,r,f),r in g||(g[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function V(e,t){var n,r,i,o,a;for(n in e)if(r=ie.camelCase(n),i=t[r],o=e[n],ie.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=ie.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function M(e,t,n){var r,i,o=0,a=at.length,s=ie.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=tt||q(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ie.extend({},t),opts:ie.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:tt||q(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ie.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(V(c,l.opts.specialEasing);o<a;o++)if(r=at[o].call(l,e,c,l.opts))return r;return ie.map(c,O,l),ie.isFunction(l.opts.start)&&l.opts.start.call(e,l),ie.fx.timer(ie.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function $(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ve)||[];if(ie.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function W(e,t,n,r){function i(s){var u;return o[s]=!0,ie.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===St;return i(t.dataTypes[0])||!o["*"]&&i("*")}function I(e,t){var n,r,i=ie.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ie.extend(!0,e,r),e}function B(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function z(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function X(e,t,r,i){var o;if(ie.isArray(t))ie.each(t,function(t,o){r||At.test(e)?i(e,o):X(e+"["+("object"===("undefined"==typeof o?"undefined":n(o))?t:"")+"]",o,r,i)});else if(r||"object"!==ie.type(t))i(e,t);else for(o in t)X(e+"["+o+"]",t[o],r,i)}function _(e){return ie.isWindow(e)?e:9===e.nodeType&&e.defaultView}var U=[],Y=U.slice,G=U.concat,Q=U.push,J=U.indexOf,Z={},K=Z.toString,ee=Z.hasOwnProperty,te={},ne=o.document,re="2.1.4",ie=function Bt(e,t){return new Bt.fn.init(e,t)},oe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,se=/-([\da-z])/gi,ue=function(e,t){return t.toUpperCase()};ie.fn=ie.prototype={jquery:re,constructor:ie,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=ie.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ie.each(this,e,t)},map:function(e){return this.pushStack(ie.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:U.sort,splice:U.splice},ie.extend=ie.fn.extend=function(){var e,t,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[u]||{},u++),"object"===("undefined"==typeof s?"undefined":n(s))||ie.isFunction(s)||(s={}),u===l&&(s=this,u--);u<l;u++)if(null!=(e=arguments[u]))for(t in e)r=s[t],i=e[t],s!==i&&(c&&i&&(ie.isPlainObject(i)||(o=ie.isArray(i)))?(o?(o=!1,a=r&&ie.isArray(r)?r:[]):a=r&&ie.isPlainObject(r)?r:{},s[t]=ie.extend(c,a,i)):void 0!==i&&(s[t]=i));return s},ie.extend({expando:"jQuery"+(re+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ie.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!ie.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===ie.type(e)&&!e.nodeType&&!ie.isWindow(e)&&!(e.constructor&&!ee.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"===("undefined"==typeof e?"undefined":n(e))||"function"==typeof e?Z[K.call(e)]||"object":"undefined"==typeof e?"undefined":n(e)},globalEval:function(e){var t,n=eval;e=ie.trim(e),e&&(1===e.indexOf("use strict")?(t=ne.createElement("script"),t.text=e,ne.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(se,ue)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=s(e);if(n){if(a)for(;i<o&&(r=t.apply(e[i],n),r!==!1);i++);else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a)for(;i<o&&(r=t.call(e[i],i,e[i]),r!==!1);i++);else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(oe,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(s(Object(e))?ie.merge(n,"string"==typeof e?[e]:e):Q.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:J.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=s(e),u=[];if(a)for(;i<o;i++)r=t(e[i],i,n),null!=r&&u.push(r);else for(i in e)r=t(e[i],i,n),null!=r&&u.push(r);return G.apply([],u)},guid:1,proxy:function zt(e,t){var n,r,zt;if("string"==typeof t&&(n=e[t],t=e,e=n),ie.isFunction(e))return r=Y.call(arguments,2),zt=function(){return e.apply(t||this,r.concat(Y.call(arguments)))},zt.guid=e.guid=e.guid||ie.guid++,zt},now:Date.now,support:te}),ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Z["[object "+t+"]"]=t.toLowerCase()});var le=function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,d,h,g;if((t?t.ownerDocument||t:$)!==L&&P(t),t=t||L,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!r&&q){if(11!==s&&(i=ve.exec(e)))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&V(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!F||!F.test(e))){if(d=f=M,h=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=k(e),(f=t.getAttribute("id"))?d=f.replace(be,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=xe.test(e)&&c(t.parentNode)||t,g=l.join(",")}if(g)try{return Z.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return E(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[M]=!0,e}function i(e){var t=L.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||U)-(~e.sourceIndex||U);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[M]||(t[M]={}),(s=u[r])&&s[0]===W&&s[1]===o)return l[2]=s[2];if(u[r]=l,l[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function y(e,t,n,i,o,a){return i&&!i[M]&&(i=y(i)),o&&!o[M]&&(o=y(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,y=r||g(t||"*",s.nodeType?[s]:s,[]),v=!e||!r&&t?y:m(y,p,e,s,u),x=n?o||(r?e:h||i)?[]:a:v;if(n&&n(v,x,s,u),i)for(l=m(x,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(v[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(v[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=m(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):Z.apply(a,x)})}function v(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=T.relative[e[s].type])c=[d(h(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[M]){for(r=++s;r<i&&!T.relative[e[r].type];r++);return y(s>1&&h(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<r&&v(e.slice(s,r)),r<i&&v(e=e.slice(r)),r<i&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",g=r&&[],y=[],v=j,x=r||o&&T.find.TAG("*",l),b=W+=null==v?1:Math.random()||.1,w=x.length;for(l&&(j=a!==L&&a);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){u.push(c);break}l&&(W=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,y,a,s);if(r){if(d>0)for(;h--;)g[h]||y[h]||(y[h]=Q.call(u));y=m(y)}Z.apply(u,y),l&&!r&&y.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(W=b,j=v),g};return i?r(a):a}var b,w,T,C,S,k,N,E,j,A,D,P,L,H,q,F,O,R,V,M="sizzle"+1*new Date,$=e.document,W=0,I=0,B=n(),z=n(),X=n(),_=function(e,t){return e===t&&(D=!0),0},U=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,Z=G.push,K=G.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),fe=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(ae),de=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ye=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xe=/[+~]/,be=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){P()};try{Z.apply(G=K.call($.childNodes),$.childNodes),G[$.childNodes.length].nodeType}catch(Se){Z={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},P=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),q=!S(r),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ye.test(r.getElementsByClassName),w.getById=i(function(e){return H.appendChild(e).id=M,!r.getElementsByName||!r.getElementsByName(M).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&q){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){if(q)return t.getElementsByClassName(e)},O=[],F=[],(w.qsa=ye.test(r.querySelectorAll))&&(i(function(e){H.appendChild(e).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+M+"-]").length||F.push("~="),e.querySelectorAll(":checked").length||F.push(":checked"),e.querySelectorAll("a#"+M+"+*").length||F.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=ye.test(R=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),O.push("!=",ae)}),F=F.length&&new RegExp(F.join("|")),O=O.length&&new RegExp(O.join("|")),t=ye.test(H.compareDocumentPosition),V=t||ye.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},_=t?function(e,t){if(e===t)return D=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===$&&V($,e)?-1:t===r||t.ownerDocument===$&&V($,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return D=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,u=[e],l=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:A?ee(A,e)-ee(A,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?a(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},r):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&P(e),n=n.replace(fe,"='$1']"),w.matchesSelector&&q&&(!O||!O.test(n))&&(!F||!F.test(n)))try{var r=R.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&P(e),V(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&P(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!q):void 0;return void 0!==r?r:w.attributes||!q?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(D=!w.detectDuplicates,A=!w.sortStable&&e.slice(0),e.sort(_),D){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[M]||(m[M]={}),l=c[e]||[],d=l[0]===W&&l[1],p=l[0]===W&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[W,d,p];break}}else if(v&&(l=(t[M]||(t[M]={}))[e])&&l[0]===W)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[M]||(f[M]={}))[e]=[W,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[M]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(ue,"$1"));return i[M]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=s(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,k=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){r&&!(i=le.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length));for(a in T.filter)!(i=he[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):z(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=v(t[n]),o[M]?r.push(o):i.push(o);o=X(e,x(i,r)),o.selector=e}return o},E=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&k(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&q&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(we,Te),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(we,Te),xe.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n;break}}return(l||N(e,f))(r,t,!q,n,xe.test(e)&&c(t.parentNode)||t),n},w.sortStable=M.split("").sort(_).join("")===M,w.detectDuplicates=!!D,P(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue;
	}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(o);ie.find=le,ie.expr=le.selectors,ie.expr[":"]=ie.expr.pseudos,ie.unique=le.uniqueSort,ie.text=le.getText,ie.isXMLDoc=le.isXML,ie.contains=le.contains;var ce=ie.expr.match.needsContext,fe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,pe=/^.[^:#\[\.,]*$/;ie.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ie.find.matchesSelector(r,e)?[r]:[]:ie.find.matches(e,ie.grep(t,function(e){return 1===e.nodeType}))},ie.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(ie(e).filter(function(){for(t=0;t<n;t++)if(ie.contains(i[t],this))return!0}));for(t=0;t<n;t++)ie.find(e,i[t],r);return r=this.pushStack(n>1?ie.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(u(this,e||[],!1))},not:function(e){return this.pushStack(u(this,e||[],!0))},is:function(e){return!!u(this,"string"==typeof e&&ce.test(e)?ie(e):e||[],!1).length}});var de,he=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ge=ie.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:he.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||de).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof ie?t[0]:t,ie.merge(this,ie.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ne,!0)),fe.test(n[1])&&ie.isPlainObject(t))for(n in t)ie.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=ne.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=ne,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ie.isFunction(e)?"undefined"!=typeof de.ready?de.ready(e):e(ie):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),ie.makeArray(e,this))};ge.prototype=ie.fn,de=ie(ne);var me=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};ie.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&ie(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),ie.fn.extend({has:function(e){var t=ie(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ie.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=ce.test(e)||"string"!=typeof e?ie(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&ie.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ie.unique(o):o)},index:function(e){return e?"string"==typeof e?J.call(ie(e),this[0]):J.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ie.unique(ie.merge(this.get(),ie(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ie.each({parent:function Xt(e){var Xt=e.parentNode;return Xt&&11!==Xt.nodeType?Xt:null},parents:function(e){return ie.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ie.dir(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return ie.dir(e,"nextSibling")},prevAll:function(e){return ie.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ie.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ie.dir(e,"previousSibling",n)},siblings:function(e){return ie.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ie.sibling(e.firstChild)},contents:function(e){return e.contentDocument||ie.merge([],e.childNodes)}},function(e,t){ie.fn[e]=function(n,r){var i=ie.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ie.filter(r,i)),this.length>1&&(ye[e]||ie.unique(i),me.test(e)&&i.reverse()),this.pushStack(i)}});var ve=/\S+/g,xe={};ie.Callbacks=function(e){e="string"==typeof e?xe[e]||c(e):ie.extend({},e);var t,n,r,i,o,a,s=[],u=!e.once&&[],l=function p(l){for(t=e.memory&&l,n=!0,a=i||0,i=0,o=s.length,r=!0;s&&a<o;a++)if(s[a].apply(l[0],l[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,s&&(u?u.length&&p(u.shift()):t?s=[]:f.disable())},f={add:function(){if(s){var n=s.length;!function a(t){ie.each(t,function(t,n){var r=ie.type(n);"function"===r?e.unique&&f.has(n)||s.push(n):n&&n.length&&"string"!==r&&a(n)})}(arguments),r?o=s.length:t&&(i=n,l(t))}return this},remove:function(){return s&&ie.each(arguments,function(e,t){for(var n;(n=ie.inArray(t,s,n))>-1;)s.splice(n,1),r&&(n<=o&&o--,n<=a&&a--)}),this},has:function(e){return e?ie.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],o=0,this},disable:function(){return s=u=t=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,t||f.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!s||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},ie.extend({Deferred:function(e){var t=[["resolve","done",ie.Callbacks("once memory"),"resolved"],["reject","fail",ie.Callbacks("once memory"),"rejected"],["notify","progress",ie.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ie.Deferred(function(n){ie.each(t,function(t,o){var a=ie.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&ie.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?ie.extend(e,r):r}},i={};return r.pipe=r.then,ie.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Y.call(arguments),a=o.length,s=1!==a||e&&ie.isFunction(e.promise)?a:0,u=1===s?e:ie.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Y.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&ie.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}});var be;ie.fn.ready=function(e){return ie.ready.promise().done(e),this},ie.extend({isReady:!1,readyWait:1,holdReady:function(e){e?ie.readyWait++:ie.ready(!0)},ready:function(e){(e===!0?--ie.readyWait:ie.isReady)||(ie.isReady=!0,e!==!0&&--ie.readyWait>0||(be.resolveWith(ne,[ie]),ie.fn.triggerHandler&&(ie(ne).triggerHandler("ready"),ie(ne).off("ready"))))}}),ie.ready.promise=function(e){return be||(be=ie.Deferred(),"complete"===ne.readyState?setTimeout(ie.ready):(ne.addEventListener("DOMContentLoaded",f,!1),o.addEventListener("load",f,!1))),be.promise(e)},ie.ready.promise();var we=ie.access=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===ie.type(n)){i=!0;for(s in n)ie.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ie.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ie(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o};ie.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},p.uid=1,p.accepts=ie.acceptData,p.prototype={key:function(e){if(!p.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=p.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,ie.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(ie.isEmptyObject(o))ie.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,ie.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(void 0===t)this.cache[o]={};else{ie.isArray(t)?r=t.concat(t.map(ie.camelCase)):(i=ie.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(ve)||[])),n=r.length;for(;n--;)delete a[r[n]]}},hasData:function(e){return!ie.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var Te=new p,Ce=new p,Se=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ke=/([A-Z])/g;ie.extend({hasData:function(e){return Ce.hasData(e)||Te.hasData(e)},data:function(e,t,n){return Ce.access(e,t,n)},removeData:function(e,t){Ce.remove(e,t)},_data:function(e,t,n){return Te.access(e,t,n)},_removeData:function(e,t){Te.remove(e,t)}}),ie.fn.extend({data:function _t(e,t){var r,i,_t,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(_t=Ce.get(o),1===o.nodeType&&!Te.get(o,"hasDataAttrs"))){for(r=a.length;r--;)a[r]&&(i=a[r].name,0===i.indexOf("data-")&&(i=ie.camelCase(i.slice(5)),d(o,i,_t[i])));Te.set(o,"hasDataAttrs",!0)}return _t}return"object"===("undefined"==typeof e?"undefined":n(e))?this.each(function(){Ce.set(this,e)}):we(this,function(t){var n,r=ie.camelCase(e);if(o&&void 0===t){if(n=Ce.get(o,e),void 0!==n)return n;if(n=Ce.get(o,r),void 0!==n)return n;if(n=d(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=Ce.get(this,r);Ce.set(this,r,t),e.indexOf("-")!==-1&&void 0!==n&&Ce.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ce.remove(this,e)})}}),ie.extend({queue:function Ut(e,t,n){var Ut;if(e)return t=(t||"fx")+"queue",Ut=Te.get(e,t),n&&(!Ut||ie.isArray(n)?Ut=Te.access(e,t,ie.makeArray(n)):Ut.push(n)),Ut||[]},dequeue:function(e,t){t=t||"fx";var n=ie.queue(e,t),r=n.length,i=n.shift(),o=ie._queueHooks(e,t),a=function(){ie.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Te.get(e,n)||Te.access(e,n,{empty:ie.Callbacks("once memory").add(function(){Te.remove(e,[t+"queue",n])})})}}),ie.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ie.queue(this[0],e):void 0===t?this:this.each(function(){var n=ie.queue(this,e,t);ie._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ie.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ie.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ie.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=Te.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ee=["Top","Right","Bottom","Left"],je=function(e,t){return e=t||e,"none"===ie.css(e,"display")||!ie.contains(e.ownerDocument,e)},Ae=/^(?:checkbox|radio)$/i;!function(){var e=ne.createDocumentFragment(),t=e.appendChild(ne.createElement("div")),n=ne.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),te.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",te.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var De="undefined";te.focusinBubbles="onfocusin"in o;var Pe=/^key/,Le=/^(?:mouse|pointer|contextmenu)|click/,He=/^(?:focusinfocus|focusoutblur)$/,qe=/^([^.]*)(?:\.(.+)|)$/;ie.event={global:{},add:function(e,t,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=Te.get(e);if(y)for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=ie.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(t){return("undefined"==typeof ie?"undefined":n(ie))!==De&&ie.event.triggered!==t.type?ie.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ve)||[""],c=t.length;c--;)u=qe.exec(t[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),h&&(p=ie.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=ie.event.special[h]||{},f=ie.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ie.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),ie.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=Te.hasData(e)&&Te.get(e);if(m&&(u=m.events)){for(t=(t||"").match(ve)||[""],l=t.length;l--;)if(s=qe.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ie.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||ie.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)ie.event.remove(e,d+t[l],n,r,!0);ie.isEmptyObject(u)&&(delete m.handle,Te.remove(e,"events"))}},trigger:function(e,t,r,i){var a,s,u,l,c,f,p,d=[r||ne],h=ee.call(e,"type")?e.type:e,g=ee.call(e,"namespace")?e.namespace.split("."):[];if(s=u=r=r||ne,3!==r.nodeType&&8!==r.nodeType&&!He.test(h+ie.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=h.indexOf(":")<0&&"on"+h,e=e[ie.expando]?e:new ie.Event(h,"object"===("undefined"==typeof e?"undefined":n(e))&&e),e.isTrigger=i?2:3,e.namespace=g.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:ie.makeArray(t,[e]),p=ie.event.special[h]||{},i||!p.trigger||p.trigger.apply(r,t)!==!1)){if(!i&&!p.noBubble&&!ie.isWindow(r)){for(l=p.delegateType||h,He.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(r.ownerDocument||ne)&&d.push(u.defaultView||u.parentWindow||o)}for(a=0;(s=d[a++])&&!e.isPropagationStopped();)e.type=a>1?l:p.bindType||h,f=(Te.get(s,"events")||{})[e.type]&&Te.get(s,"handle"),f&&f.apply(s,t),f=c&&s[c],f&&f.apply&&ie.acceptData(s)&&(e.result=f.apply(s,t),e.result===!1&&e.preventDefault());return e.type=h,i||e.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),t)!==!1||!ie.acceptData(r)||c&&ie.isFunction(r[h])&&!ie.isWindow(r)&&(u=r[c],u&&(r[c]=null),ie.event.triggered=h,r[h](),ie.event.triggered=void 0,u&&(r[c]=u)),e.result}},dispatch:function(e){e=ie.event.fix(e);var t,n,r,i,o,a=[],s=Y.call(arguments),u=(Te.get(this,"events")||{})[e.type]||[],l=ie.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=ie.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((ie.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;n<s;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?ie(i,this).index(u)>=0:ie.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||ne,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[ie.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Le.test(i)?this.mouseHooks:Pe.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new ie.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=ne),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==m()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===m()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&ie.nodeName(this,"input"))return this.click(),!1},_default:function(e){return ie.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=ie.extend(new ie.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ie.event.trigger(i,null,t):ie.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ie.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},ie.Event=function(e,t){return this instanceof ie.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?h:g):this.type=e,t&&ie.extend(this,t),this.timeStamp=e&&e.timeStamp||ie.now(),void(this[ie.expando]=!0)):new ie.Event(e,t)},ie.Event.prototype={isDefaultPrevented:g,isPropagationStopped:g,isImmediatePropagationStopped:g,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=h,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=h,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=h,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},ie.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ie.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||ie.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),te.focusinBubbles||ie.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ie.event.simulate(t,e.target,ie.event.fix(e),!0)};ie.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Te.access(r,t);i||r.addEventListener(e,n,!0),Te.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Te.access(r,t)-1;i?Te.access(r,t,i):(r.removeEventListener(e,n,!0),Te.remove(r,t))}}}),ie.fn.extend({on:function(e,t,r,i,o){var a,s;if("object"===("undefined"==typeof e?"undefined":n(e))){"string"!=typeof t&&(r=r||t,t=void 0);for(s in e)this.on(s,t,r,e[s],o);return this}if(null==r&&null==i?(i=t,r=t=void 0):null==i&&("string"==typeof t?(i=r,r=void 0):(i=r,r=t,t=void 0)),i===!1)i=g;else if(!i)return this;return 1===o&&(a=i,i=function(e){return ie().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=ie.guid++)),this.each(function(){ie.event.add(this,e,i,r,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ie(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"===("undefined"==typeof e?"undefined":n(e))){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&"function"!=typeof t||(r=t,t=void 0),r===!1&&(r=g),this.each(function(){ie.event.remove(this,e,r,t)})},trigger:function(e,t){return this.each(function(){ie.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ie.event.trigger(e,t,n,!0)}});var Fe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Oe=/<([\w:]+)/,Re=/<|&#?\w+;/,Ve=/<(?:script|style|link)/i,Me=/checked\s*(?:[^=]|=\s*.checked.)/i,$e=/^$|\/(?:java|ecma)script/i,We=/^true\/(.*)/,Ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Be={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Be.optgroup=Be.option,Be.tbody=Be.tfoot=Be.colgroup=Be.caption=Be.thead,Be.th=Be.td,ie.extend({clone:function Yt(e,t,n){var r,i,o,a,Yt=e.cloneNode(!0),s=ie.contains(e.ownerDocument,e);if(!(te.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ie.isXMLDoc(e)))for(a=T(Yt),o=T(e),r=0,i=o.length;r<i;r++)C(o[r],a[r]);if(t)if(n)for(o=o||T(e),a=a||T(Yt),r=0,i=o.length;r<i;r++)w(o[r],a[r]);else w(e,Yt);return a=T(Yt,"script"),a.length>0&&b(a,!s&&T(e,"script")),Yt},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if(i=e[p],i||0===i)if("object"===ie.type(i))ie.merge(f,i.nodeType?[i]:i);else if(Re.test(i)){for(o=o||c.appendChild(t.createElement("div")),a=(Oe.exec(i)||["",""])[1].toLowerCase(),s=Be[a]||Be._default,o.innerHTML=s[1]+i.replace(Fe,"<$1></$2>")+s[2],l=s[0];l--;)o=o.lastChild;ie.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||ie.inArray(i,r)===-1)&&(u=ie.contains(i.ownerDocument,i),o=T(c.appendChild(i),"script"),u&&b(o),n))for(l=0;i=o[l++];)$e.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=ie.event.special,a=0;void 0!==(n=e[a]);a++){if(ie.acceptData(n)&&(i=n[Te.expando],i&&(t=Te.cache[i]))){if(t.events)for(r in t.events)o[r]?ie.event.remove(n,r):ie.removeEvent(n,r,t.handle);Te.cache[i]&&delete Te.cache[i]}delete Ce.cache[n[Ce.expando]]}}}),ie.fn.extend({text:function(e){return we(this,function(e){return void 0===e?ie.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?ie.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||ie.cleanData(T(n)),n.parentNode&&(t&&ie.contains(n.ownerDocument,n)&&b(T(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ie.cleanData(T(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ie.clone(this,e,t)})},html:function(e){return we(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ve.test(e)&&!Be[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Fe,"<$1></$2>");try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(ie.cleanData(T(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,ie.cleanData(T(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=G.apply([],e);var n,r,i,o,a,s,u=0,l=this.length,c=this,f=l-1,p=e[0],d=ie.isFunction(p);if(d||l>1&&"string"==typeof p&&!te.checkClone&&Me.test(p))return this.each(function(n){var r=c.eq(n);d&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=ie.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=ie.map(T(n,"script"),v),o=i.length;u<l;u++)a=n,u!==f&&(a=ie.clone(a,!0,!0),o&&ie.merge(i,T(a,"script"))),t.call(this[u],a,u);if(o)for(s=i[i.length-1].ownerDocument,ie.map(i,x),u=0;u<o;u++)a=i[u],$e.test(a.type||"")&&!Te.access(a,"globalEval")&&ie.contains(s,a)&&(a.src?ie._evalUrl&&ie._evalUrl(a.src):ie.globalEval(a.textContent.replace(Ie,"")))}return this}}),ie.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ie.fn[e]=function(e){for(var n,r=[],i=ie(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),ie(i[a])[t](n),Q.apply(r,n.get());return this.pushStack(r)}});var ze,Xe={},_e=/^margin/,Ue=new RegExp("^("+Ne+")(?!px)[a-z%]+$","i"),Ye=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):o.getComputedStyle(e,null)};!function(){function e(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",r.appendChild(i);var e=o.getComputedStyle(a,null);t="1%"!==e.top,n="4px"===e.width,r.removeChild(i)}var t,n,r=ne.documentElement,i=ne.createElement("div"),a=ne.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",te.clearCloneStyle="content-box"===a.style.backgroundClip,i.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",i.appendChild(a),o.getComputedStyle&&ie.extend(te,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return null==n&&e(),n},reliableMarginRight:function(){var e,t=a.appendChild(ne.createElement("div"));return t.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",a.style.width="1px",r.appendChild(i),e=!parseFloat(o.getComputedStyle(t,null).marginRight),r.removeChild(i),a.removeChild(t),e}}))}(),ie.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var Ge=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+Ne+")(.*)$","i"),Je=new RegExp("^([+-])=("+Ne+")","i"),Ze={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},et=["Webkit","O","Moz","ms"];ie.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=N(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function Gt(e,t,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=ie.camelCase(t),Gt=e.style;return t=ie.cssProps[u]||(ie.cssProps[u]=j(Gt,u)),s=ie.cssHooks[t]||ie.cssHooks[u],void 0===r?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:Gt[t]:(a="undefined"==typeof r?"undefined":n(r),"string"===a&&(o=Je.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ie.css(e,t)),a="number"),null!=r&&r===r&&("number"!==a||ie.cssNumber[u]||(r+="px"),te.clearCloneStyle||""!==r||0!==t.indexOf("background")||(Gt[t]="inherit"),s&&"set"in s&&void 0===(r=s.set(e,r,i))||(Gt[t]=r)),void 0)}},css:function(e,t,n,r){var i,o,a,s=ie.camelCase(t);return t=ie.cssProps[s]||(ie.cssProps[s]=j(e.style,s)),a=ie.cssHooks[t]||ie.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=N(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),n===!0||ie.isNumeric(o)?o||0:i):i}}),ie.each(["height","width"],function(e,t){ie.cssHooks[t]={get:function(e,n,r){if(n)return Ge.test(ie.css(e,"display"))&&0===e.offsetWidth?ie.swap(e,Ze,function(){return P(e,t,r)}):P(e,t,r)},set:function(e,n,r){var i=r&&Ye(e);return A(e,n,r?D(e,t,r,"border-box"===ie.css(e,"boxSizing",!1,i),i):0)}}}),ie.cssHooks.marginRight=E(te.reliableMarginRight,function(e,t){if(t)return ie.swap(e,{display:"inline-block"},N,[e,"marginRight"])}),ie.each({margin:"",padding:"",border:"Width"},function(e,t){ie.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ee[r]+t]=o[r]||o[r-2]||o[0];return i}},_e.test(e)||(ie.cssHooks[e+t].set=A)}),ie.fn.extend({css:function(e,t){return we(this,function(e,t,n){var r,i,o={},a=0;if(ie.isArray(t)){for(r=Ye(e),i=t.length;a<i;a++)o[t[a]]=ie.css(e,t[a],!1,r);return o}return void 0!==n?ie.style(e,t,n):ie.css(e,t)},e,t,arguments.length>1)},show:function(){return L(this,!0)},hide:function(){return L(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){je(this)?ie(this).show():ie(this).hide()})}}),ie.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ie.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=ie.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ie.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ie.fx.step[e.prop]?ie.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ie.cssProps[e.prop]]||ie.cssHooks[e.prop])?ie.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ie.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ie.fx=H.prototype.init,ie.fx.step={};var tt,nt,rt=/^(?:toggle|show|hide)$/,it=new RegExp("^(?:([+-])=|)("+Ne+")([a-z%]*)$","i"),ot=/queueHooks$/,at=[R],st={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=it.exec(t),o=i&&i[3]||(ie.cssNumber[e]?"":"px"),a=(ie.cssNumber[e]||"px"!==o&&+r)&&it.exec(ie.css(n.elem,e)),s=1,u=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,ie.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};ie.Animation=ie.extend(M,{tweener:function(e,t){ie.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],st[n]=st[n]||[],st[n].unshift(t)},prefilter:function(e,t){t?at.unshift(e):at.push(e)}}),ie.speed=function(e,t,r){var i=e&&"object"===("undefined"==typeof e?"undefined":n(e))?ie.extend({},e):{complete:r||!r&&t||ie.isFunction(e)&&e,duration:e,easing:r&&t||t&&!ie.isFunction(t)&&t};return i.duration=ie.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in ie.fx.speeds?ie.fx.speeds[i.duration]:ie.fx.speeds._default,
	null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){ie.isFunction(i.old)&&i.old.call(this),i.queue&&ie.dequeue(this,i.queue)},i},ie.fn.extend({fadeTo:function(e,t,n,r){return this.filter(je).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ie.isEmptyObject(e),o=ie.speed(t,n,r),a=function(){var t=M(this,ie.extend({},e),o);(i||Te.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ie.timers,a=Te.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||ie.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Te.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ie.timers,a=r?r.length:0;for(n.finish=!0,ie.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ie.each(["toggle","show","hide"],function(e,t){var n=ie.fn[t];ie.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(F(t,!0),e,r,i)}}),ie.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ie.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ie.timers=[],ie.fx.tick=function(){var e,t=0,n=ie.timers;for(tt=ie.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||ie.fx.stop(),tt=void 0},ie.fx.timer=function(e){ie.timers.push(e),e()?ie.fx.start():ie.timers.pop()},ie.fx.interval=13,ie.fx.start=function(){nt||(nt=setInterval(ie.fx.tick,ie.fx.interval))},ie.fx.stop=function(){clearInterval(nt),nt=null},ie.fx.speeds={slow:600,fast:200,_default:400},ie.fn.delay=function(e,t){return e=ie.fx?ie.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=ne.createElement("input"),t=ne.createElement("select"),n=t.appendChild(ne.createElement("option"));e.type="checkbox",te.checkOn=""!==e.value,te.optSelected=n.selected,t.disabled=!0,te.optDisabled=!n.disabled,e=ne.createElement("input"),e.value="t",e.type="radio",te.radioValue="t"===e.value}();var ut,lt,ct=ie.expr.attrHandle;ie.fn.extend({attr:function(e,t){return we(this,ie.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ie.removeAttr(this,e)})}}),ie.extend({attr:function(e,t,r){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return n(e.getAttribute)===De?ie.prop(e,t,r):(1===a&&ie.isXMLDoc(e)||(t=t.toLowerCase(),i=ie.attrHooks[t]||(ie.expr.match.bool.test(t)?lt:ut)),void 0===r?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=ie.find.attr(e,t),null==o?void 0:o):null!==r?i&&"set"in i&&void 0!==(o=i.set(e,r,t))?o:(e.setAttribute(t,r+""),r):void ie.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ve);if(o&&1===e.nodeType)for(;n=o[i++];)r=ie.propFix[n]||n,ie.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!te.radioValue&&"radio"===t&&ie.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),lt={set:function(e,t,n){return t===!1?ie.removeAttr(e,n):e.setAttribute(n,n),n}},ie.each(ie.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ct[t]||ie.find.attr;ct[t]=function(e,t,r){var i,o;return r||(o=ct[t],ct[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ct[t]=o),i}});var ft=/^(?:input|select|textarea|button)$/i;ie.fn.extend({prop:function(e,t){return we(this,ie.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ie.propFix[e]||e]})}}),ie.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!ie.isXMLDoc(e),o&&(t=ie.propFix[t]||t,i=ie.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||ft.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),te.optSelected||(ie.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),ie.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ie.propFix[this.toLowerCase()]=this});var pt=/[\t\r\n\f]/g;ie.fn.extend({addClass:function(e){var t,n,r,i,o,a,s="string"==typeof e&&e,u=0,l=this.length;if(ie.isFunction(e))return this.each(function(t){ie(this).addClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ve)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(pt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=ie.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(ie.isFunction(e))return this.each(function(t){ie(this).removeClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ve)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(pt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?ie.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var r="undefined"==typeof e?"undefined":n(e);return"boolean"==typeof t&&"string"===r?t?this.addClass(e):this.removeClass(e):ie.isFunction(e)?this.each(function(n){ie(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===r)for(var t,n=0,i=ie(this),o=e.match(ve)||[];t=o[n++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else r!==De&&"boolean"!==r||(this.className&&Te.set(this,"__className__",this.className),this.className=this.className||e===!1?"":Te.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(pt," ").indexOf(t)>=0)return!0;return!1}});var dt=/\r/g;ie.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=ie.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ie(this).val()):e,null==i?i="":"number"==typeof i?i+="":ie.isArray(i)&&(i=ie.map(i,function(e){return null==e?"":e+""})),t=ie.valHooks[this.type]||ie.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=ie.valHooks[i.type]||ie.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(dt,""):null==n?"":n)}}}),ie.extend({valHooks:{option:{get:function(e){var t=ie.find.attr(e,"value");return null!=t?t:ie.trim(ie.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(n=r[u],(n.selected||u===i)&&(te.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ie.nodeName(n.parentNode,"optgroup"))){if(t=ie(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=ie.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=ie.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ie.each(["radio","checkbox"],function(){ie.valHooks[this]={set:function(e,t){if(ie.isArray(t))return e.checked=ie.inArray(ie(e).val(),t)>=0}},te.checkOn||(ie.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ie.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ie.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ht=ie.now(),gt=/\?/;ie.parseJSON=function(e){return JSON.parse(e+"")},ie.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||ie.error("Invalid XML: "+e),t};var mt=/#.*$/,yt=/([?&])_=[^&]*/,vt=/^(.*?):[ \t]*([^\r\n]*)$/gm,xt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,bt=/^(?:GET|HEAD)$/,wt=/^\/\//,Tt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ct={},St={},kt="*/".concat("*"),Nt=o.location.href,Et=Tt.exec(Nt.toLowerCase())||[];ie.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nt,type:"GET",isLocal:xt.test(Et[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":kt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ie.parseJSON,"text xml":ie.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?I(I(e,ie.ajaxSettings),t):I(ie.ajaxSettings,e)},ajaxPrefilter:$(Ct),ajaxTransport:$(St),ajax:function(e,t){function r(e,t,n,r){var s,l,f,v,x,w=t;2!==b&&(b=2,u&&clearTimeout(u),i=void 0,a=r||"",T.readyState=e>0?4:0,s=e>=200&&e<300||304===e,n&&(v=B(p,T,n)),v=z(p,v,T,s),s?(p.ifModified&&(x=T.getResponseHeader("Last-Modified"),x&&(ie.lastModified[o]=x),x=T.getResponseHeader("etag"),x&&(ie.etag[o]=x)),204===e||"HEAD"===p.type?w="nocontent":304===e?w="notmodified":(w=v.state,l=v.data,f=v.error,s=!f)):(f=w,!e&&w||(w="error",e<0&&(e=0))),T.status=e,T.statusText=(t||w)+"",s?g.resolveWith(d,[l,w,T]):g.rejectWith(d,[T,w,f]),T.statusCode(y),y=void 0,c&&h.trigger(s?"ajaxSuccess":"ajaxError",[T,p,s?l:f]),m.fireWith(d,[T,w]),c&&(h.trigger("ajaxComplete",[T,p]),--ie.active||ie.event.trigger("ajaxStop")))}"object"===("undefined"==typeof e?"undefined":n(e))&&(t=e,e=void 0),t=t||{};var i,o,a,s,u,l,c,f,p=ie.ajaxSetup({},t),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?ie(d):ie.event,g=ie.Deferred(),m=ie.Callbacks("once memory"),y=p.statusCode||{},v={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=vt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)y[t]=[y[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,p.url=((e||p.url||Nt)+"").replace(mt,"").replace(wt,Et[1]+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=ie.trim(p.dataType||"*").toLowerCase().match(ve)||[""],null==p.crossDomain&&(l=Tt.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===Et[1]&&l[2]===Et[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(Et[3]||("http:"===Et[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=ie.param(p.data,p.traditional)),W(Ct,p,t,T),2===b)return T;c=ie.event&&p.global,c&&0===ie.active++&&ie.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!bt.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(gt.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=yt.test(o)?o.replace(yt,"$1_="+ht++):o+(gt.test(o)?"&":"?")+"_="+ht++)),p.ifModified&&(ie.lastModified[o]&&T.setRequestHeader("If-Modified-Since",ie.lastModified[o]),ie.etag[o]&&T.setRequestHeader("If-None-Match",ie.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+kt+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===b))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=W(St,p,t,T)){T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},p.timeout));try{b=1,i.send(v,r)}catch(C){if(!(b<2))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return ie.get(e,t,n,"json")},getScript:function(e,t){return ie.get(e,void 0,t,"script")}}),ie.each(["get","post"],function(e,t){ie[t]=function(e,n,r,i){return ie.isFunction(n)&&(i=i||r,r=n,n=void 0),ie.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),ie._evalUrl=function(e){return ie.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ie.fn.extend({wrapAll:function(e){var t;return ie.isFunction(e)?this.each(function(t){ie(this).wrapAll(e.call(this,t))}):(this[0]&&(t=ie(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return ie.isFunction(e)?this.each(function(t){ie(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ie(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ie.isFunction(e);return this.each(function(n){ie(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ie.nodeName(this,"body")||ie(this).replaceWith(this.childNodes)}).end()}}),ie.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},ie.expr.filters.visible=function(e){return!ie.expr.filters.hidden(e)};var jt=/%20/g,At=/\[\]$/,Dt=/\r?\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;ie.param=function(e,t){var n,r=[],i=function(e,t){t=ie.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=ie.ajaxSettings&&ie.ajaxSettings.traditional),ie.isArray(e)||e.jquery&&!ie.isPlainObject(e))ie.each(e,function(){i(this.name,this.value)});else for(n in e)X(n,e[n],t,i);return r.join("&").replace(jt,"+")},ie.fn.extend({serialize:function(){return ie.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ie.prop(this,"elements");return e?ie.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ie(this).is(":disabled")&&Lt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!Ae.test(e))}).map(function(e,t){var n=ie(this).val();return null==n?null:ie.isArray(n)?ie.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}}),ie.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Ht=0,qt={},Ft={0:200,1223:204},Ot=ie.ajaxSettings.xhr();o.attachEvent&&o.attachEvent("onunload",function(){for(var e in qt)qt[e]()}),te.cors=!!Ot&&"withCredentials"in Ot,te.ajax=Ot=!!Ot,ie.ajaxTransport(function(e){var t;if(te.cors||Ot&&!e.crossDomain)return{send:function(n,r){var i,o=e.xhr(),a=++Ht;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete qt[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Ft[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=qt[a]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(s){if(t)throw s}},abort:function(){t&&t()}}}),ie.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ie.globalEval(e),e}}}),ie.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ie.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=ie("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),ne.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Rt=[],Vt=/(=)\?(?=&|$)|\?\?/;ie.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rt.pop()||ie.expando+"_"+ht++;return this[e]=!0,e}}),ie.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,a,s=e.jsonp!==!1&&(Vt.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=ie.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Vt,"$1"+r):e.jsonp!==!1&&(e.url+=(gt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||ie.error(r+" was not called"),a[0]},e.dataTypes[0]="json",i=o[r],o[r]=function(){a=arguments},n.always(function(){o[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Rt.push(r)),a&&ie.isFunction(i)&&i(a[0]),a=i=void 0}),"script"}),ie.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ne;var r=fe.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ie.buildFragment([e],t,i),i&&i.length&&ie(i).remove(),ie.merge([],r.childNodes))};var Mt=ie.fn.load;ie.fn.load=function(e,t,r){if("string"!=typeof e&&Mt)return Mt.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=ie.trim(e.slice(u)),e=e.slice(0,u)),ie.isFunction(t)?(r=t,t=void 0):t&&"object"===("undefined"==typeof t?"undefined":n(t))&&(o="POST"),s.length>0&&ie.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){a=arguments,s.html(i?ie("<div>").append(ie.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},ie.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ie.fn[t]=function(e){return this.on(t,e)}}),ie.expr.filters.animated=function(e){return ie.grep(ie.timers,function(t){return e===t.elem}).length};var $t=o.document.documentElement;ie.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=ie.css(e,"position"),f=ie(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=ie.css(e,"top"),u=ie.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),ie.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},ie.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ie.offset.setOffset(this,e,t)});var t,r,i=this[0],o={top:0,left:0},a=i&&i.ownerDocument;if(a)return t=a.documentElement,ie.contains(t,i)?(n(i.getBoundingClientRect)!==De&&(o=i.getBoundingClientRect()),r=_(a),{top:o.top+r.pageYOffset-t.clientTop,left:o.left+r.pageXOffset-t.clientLeft}):o},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===ie.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ie.nodeName(e[0],"html")||(r=e.offset()),r.top+=ie.css(e[0],"borderTopWidth",!0),r.left+=ie.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-ie.css(n,"marginTop",!0),left:t.left-r.left-ie.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||$t;e&&!ie.nodeName(e,"html")&&"static"===ie.css(e,"position");)e=e.offsetParent;return e||$t})}}),ie.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ie.fn[e]=function(r){return we(this,function(e,r,i){var a=_(e);return void 0===i?a?a[t]:e[r]:void(a?a.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length,null)}}),ie.each(["top","left"],function(e,t){ie.cssHooks[t]=E(te.pixelPosition,function(e,n){if(n)return n=N(e,t),Ue.test(n)?ie(e).position()[t]+"px":n})}),ie.each({Height:"height",Width:"width"},function(e,t){ie.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){ie.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return we(this,function(t,n,r){var i;return ie.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?ie.css(t,n,a):ie.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),ie.fn.size=function(){return this.length},ie.fn.andSelf=ie.fn.addBack,r=[],i=function(){return ie}.apply(t,r),!(void 0!==i&&(e.exports=i));var Wt=o.jQuery,It=o.$;return ie.noConflict=function(e){return o.$===ie&&(o.$=It),e&&o.jQuery===ie&&(o.jQuery=Wt),ie},("undefined"==typeof a?"undefined":n(a))===De&&(o.jQuery=o.$=ie),ie})}).call(t,n(2)(e))},function(e,t){"use strict";e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){"use strict";window.jQuery=window.$=n(4),n(5),n(6),n(7)},function(e,t,n){var r,i;(function(e){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,r){"object"===n(e)&&"object"===n(e.exports)?e.exports=t.document?r(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return r(e)}:r(t)}("undefined"!=typeof window?window:void 0,function(o,a){function s(e){var t="length"in e&&e.length,n=ie.type(e);return"function"!==n&&!ie.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function u(e,t,n){if(ie.isFunction(t))return ie.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return ie.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(pe.test(t))return ie.filter(t,e,n);t=ie.filter(t,e)}return ie.grep(e,function(e){return J.call(t,e)>=0!==n})}function l(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function c(e){var t=xe[e]={};return ie.each(e.match(ve)||[],function(e,n){t[n]=!0}),t}function f(){ne.removeEventListener("DOMContentLoaded",f,!1),o.removeEventListener("load",f,!1),ie.ready()}function p(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=ie.expando+p.uid++}function d(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ke,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:Se.test(n)?ie.parseJSON(n):n)}catch(i){}Ce.set(e,t,n)}else n=void 0;return n}function h(){return!0}function g(){return!1}function m(){try{return ne.activeElement}catch(e){}}function y(e,t){return ie.nodeName(e,"table")&&ie.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function v(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function x(e){var t=We.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function b(e,t){for(var n=0,r=e.length;n<r;n++)Te.set(e[n],"globalEval",!t||Te.get(t[n],"globalEval"))}function w(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Te.hasData(e)&&(o=Te.access(e),a=Te.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)ie.event.add(t,i,l[i][n])}Ce.hasData(e)&&(s=Ce.access(e),u=ie.extend({},s),Ce.set(t,u))}}function T(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&ie.nodeName(e,t)?ie.merge([e],n):n}function C(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ae.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function S(e,t){var n,r=ie(t.createElement(e)).appendTo(t.body),i=o.getDefaultComputedStyle&&(n=o.getDefaultComputedStyle(r[0]))?n.display:ie.css(r[0],"display");return r.detach(),i}function k(e){var t=ne,n=Xe[e];return n||(n=S(e,t),"none"!==n&&n||(ze=(ze||ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=ze[0].contentDocument,t.write(),t.close(),n=S(e,t),ze.detach()),Xe[e]=n),n}function N(e,t,n){var r,i,o,a,s=e.style;return n=n||Ye(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||ie.contains(e.ownerDocument,e)||(a=ie.style(e,t)),Ue.test(a)&&_e.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function E(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function j(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=et.length;i--;)if(t=et[i]+n,t in e)return t;return r}function A(e,t,n){var r=Qe.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function D(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;o<4;o+=2)"margin"===n&&(a+=ie.css(e,n+Ee[o],!0,i)),r?("content"===n&&(a-=ie.css(e,"padding"+Ee[o],!0,i)),"margin"!==n&&(a-=ie.css(e,"border"+Ee[o]+"Width",!0,i))):(a+=ie.css(e,"padding"+Ee[o],!0,i),"padding"!==n&&(a+=ie.css(e,"border"+Ee[o]+"Width",!0,i)));return a}function P(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ye(e),a="border-box"===ie.css(e,"boxSizing",!1,o);if(i<=0||null==i){if(i=N(e,t,o),(i<0||null==i)&&(i=e.style[t]),Ue.test(i))return i;r=a&&(te.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+D(e,t,n||(a?"border":"content"),r,o)+"px"}function L(e,t){for(var n,r,i,o=[],a=0,s=e.length;a<s;a++)r=e[a],r.style&&(o[a]=Te.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&je(r)&&(o[a]=Te.access(r,"olddisplay",k(r.nodeName)))):(i=je(r),"none"===n&&i||Te.set(r,"olddisplay",i?n:ie.css(r,"display"))));for(a=0;a<s;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function q(){return setTimeout(function(){tt=void 0}),tt=ie.now()}function F(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=Ee[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function O(e,t,n){for(var r,i=(st[t]||[]).concat(st["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function R(e,t,n){var r,i,o,a,s,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&je(e),g=Te.get(e,"fxshow");n.queue||(s=ie._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,ie.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=ie.css(e,"display"),c="none"===l?Te.get(e,"olddisplay")||k(e.nodeName):l,"inline"===c&&"none"===ie.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],rt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||ie.style(e,r)}else l=void 0;if(ie.isEmptyObject(p))"inline"===("none"===l?k(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=Te.access(e,"fxshow",{}),o&&(g.hidden=!h),h?ie(e).show():f.done(function(){ie(e).hide()}),f.done(function(){var t;Te.remove(e,"fxshow");for(t in p)ie.style(e,t,p[t])});for(r in p)a=O(h?g[r]:0,r,f),r in g||(g[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function V(e,t){var n,r,i,o,a;for(n in e)if(r=ie.camelCase(n),i=t[r],o=e[n],ie.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=ie.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function M(e,t,n){var r,i,o=0,a=at.length,s=ie.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=tt||q(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ie.extend({},t),opts:ie.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:tt||q(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ie.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(V(c,l.opts.specialEasing);o<a;o++)if(r=at[o].call(l,e,c,l.opts))return r;return ie.map(c,O,l),ie.isFunction(l.opts.start)&&l.opts.start.call(e,l),ie.fx.timer(ie.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function $(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(ve)||[];if(ie.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function W(e,t,n,r){function i(s){var u;return o[s]=!0,ie.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===St;return i(t.dataTypes[0])||!o["*"]&&i("*")}function I(e,t){var n,r,i=ie.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ie.extend(!0,e,r),e}function B(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function z(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function X(e,t,r,i){var o;if(ie.isArray(t))ie.each(t,function(t,o){r||At.test(e)?i(e,o):X(e+"["+("object"===("undefined"==typeof o?"undefined":n(o))?t:"")+"]",o,r,i)});else if(r||"object"!==ie.type(t))i(e,t);else for(o in t)X(e+"["+o+"]",t[o],r,i)}function _(e){return ie.isWindow(e)?e:9===e.nodeType&&e.defaultView}var U=[],Y=U.slice,G=U.concat,Q=U.push,J=U.indexOf,Z={},K=Z.toString,ee=Z.hasOwnProperty,te={},ne=o.document,re="2.1.4",ie=function Bt(e,t){return new Bt.fn.init(e,t)},oe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,ae=/^-ms-/,se=/-([\da-z])/gi,ue=function(e,t){
	return t.toUpperCase()};ie.fn=ie.prototype={jquery:re,constructor:ie,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?e<0?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=ie.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ie.each(this,e,t)},map:function(e){return this.pushStack(ie.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:U.sort,splice:U.splice},ie.extend=ie.fn.extend=function(){var e,t,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[u]||{},u++),"object"===("undefined"==typeof s?"undefined":n(s))||ie.isFunction(s)||(s={}),u===l&&(s=this,u--);u<l;u++)if(null!=(e=arguments[u]))for(t in e)r=s[t],i=e[t],s!==i&&(c&&i&&(ie.isPlainObject(i)||(o=ie.isArray(i)))?(o?(o=!1,a=r&&ie.isArray(r)?r:[]):a=r&&ie.isPlainObject(r)?r:{},s[t]=ie.extend(c,a,i)):void 0!==i&&(s[t]=i));return s},ie.extend({expando:"jQuery"+(re+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ie.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!ie.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===ie.type(e)&&!e.nodeType&&!ie.isWindow(e)&&!(e.constructor&&!ee.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"===("undefined"==typeof e?"undefined":n(e))||"function"==typeof e?Z[K.call(e)]||"object":"undefined"==typeof e?"undefined":n(e)},globalEval:function(e){var t,n=eval;e=ie.trim(e),e&&(1===e.indexOf("use strict")?(t=ne.createElement("script"),t.text=e,ne.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(ae,"ms-").replace(se,ue)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=s(e);if(n){if(a)for(;i<o&&(r=t.apply(e[i],n),r!==!1);i++);else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a)for(;i<o&&(r=t.call(e[i],i,e[i]),r!==!1);i++);else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(oe,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(s(Object(e))?ie.merge(n,"string"==typeof e?[e]:e):Q.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:J.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=s(e),u=[];if(a)for(;i<o;i++)r=t(e[i],i,n),null!=r&&u.push(r);else for(i in e)r=t(e[i],i,n),null!=r&&u.push(r);return G.apply([],u)},guid:1,proxy:function zt(e,t){var n,r,zt;if("string"==typeof t&&(n=e[t],t=e,e=n),ie.isFunction(e))return r=Y.call(arguments,2),zt=function(){return e.apply(t||this,r.concat(Y.call(arguments)))},zt.guid=e.guid=e.guid||ie.guid++,zt},now:Date.now,support:te}),ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Z["[object "+t+"]"]=t.toLowerCase()});var le=function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,d,h,g;if((t?t.ownerDocument||t:$)!==L&&P(t),t=t||L,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n;if(!r&&q){if(11!==s&&(i=ve.exec(e)))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&V(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&w.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(w.qsa&&(!F||!F.test(e))){if(d=f=M,h=t,g=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=k(e),(f=t.getAttribute("id"))?d=f.replace(be,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=xe.test(e)&&c(t.parentNode)||t,g=l.join(",")}if(g)try{return Z.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return E(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[M]=!0,e}function i(e){var t=L.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||U)-(~e.sourceIndex||U);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[M]||(t[M]={}),(s=u[r])&&s[0]===W&&s[1]===o)return l[2]=s[2];if(u[r]=l,l[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function y(e,t,n,i,o,a){return i&&!i[M]&&(i=y(i)),o&&!o[M]&&(o=y(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,y=r||g(t||"*",s.nodeType?[s]:s,[]),v=!e||!r&&t?y:m(y,p,e,s,u),x=n?o||(r?e:h||i)?[]:a:v;if(n&&n(v,x,s,u),i)for(l=m(x,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(v[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(v[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=m(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):Z.apply(a,x)})}function v(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=T.relative[e[s].type])c=[d(h(c),n)];else{if(n=T.filter[e[s].type].apply(null,e[s].matches),n[M]){for(r=++s;r<i&&!T.relative[e[r].type];r++);return y(s>1&&h(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<r&&v(e.slice(s,r)),r<i&&v(e=e.slice(r)),r<i&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",g=r&&[],y=[],v=j,x=r||o&&T.find.TAG("*",l),b=W+=null==v?1:Math.random()||.1,w=x.length;for(l&&(j=a!==L&&a);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){u.push(c);break}l&&(W=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,y,a,s);if(r){if(d>0)for(;h--;)g[h]||y[h]||(y[h]=Q.call(u));y=m(y)}Z.apply(u,y),l&&!r&&y.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(W=b,j=v),g};return i?r(a):a}var b,w,T,C,S,k,N,E,j,A,D,P,L,H,q,F,O,R,V,M="sizzle"+1*new Date,$=e.document,W=0,I=0,B=n(),z=n(),X=n(),_=function(e,t){return e===t&&(D=!0),0},U=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,Z=G.push,K=G.slice,ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=new RegExp("^"+ne+"*,"+ne+"*"),ce=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),fe=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(ae),de=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re.replace("w","w*")+")"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},ge=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ye=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xe=/[+~]/,be=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){P()};try{Z.apply(G=K.call($.childNodes),$.childNodes),G[$.childNodes.length].nodeType}catch(Se){Z={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},P=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==L&&9===r.nodeType&&r.documentElement?(L=r,H=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),q=!S(r),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ye.test(r.getElementsByClassName),w.getById=i(function(e){return H.appendChild(e).id=M,!r.getElementsByName||!r.getElementsByName(M).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&q){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){if(q)return t.getElementsByClassName(e)},O=[],F=[],(w.qsa=ye.test(r.querySelectorAll))&&(i(function(e){H.appendChild(e).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+M+"-]").length||F.push("~="),e.querySelectorAll(":checked").length||F.push(":checked"),e.querySelectorAll("a#"+M+"+*").length||F.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=ye.test(R=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),O.push("!=",ae)}),F=F.length&&new RegExp(F.join("|")),O=O.length&&new RegExp(O.join("|")),t=ye.test(H.compareDocumentPosition),V=t||ye.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},_=t?function(e,t){if(e===t)return D=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===$&&V($,e)?-1:t===r||t.ownerDocument===$&&V($,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return D=!0,0;var n,i=0,o=e.parentNode,s=t.parentNode,u=[e],l=[t];if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:A?ee(A,e)-ee(A,t):0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?a(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},r):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&P(e),n=n.replace(fe,"='$1']"),w.matchesSelector&&q&&(!O||!O.test(n))&&(!F||!F.test(n)))try{var r=R.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&P(e),V(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&P(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!q):void 0;return void 0!==r?r:w.attributes||!q?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(D=!w.detectDuplicates,A=!w.sortStable&&e.slice(0),e.sort(_),D){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return A=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(s?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){for(c=m[M]||(m[M]={}),l=c[e]||[],d=l[0]===W&&l[1],p=l[0]===W&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[W,d,p];break}}else if(v&&(l=(t[M]||(t[M]={}))[e])&&l[0]===W)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[M]||(f[M]={}))[e]=[W,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[M]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(ue,"$1"));return i[M]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do if(n=q?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return ge.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=s(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,k=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=T.preFilter;s;){r&&!(i=le.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length));for(a in T.filter)!(i=he[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):z(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=v(t[n]),o[M]?r.push(o):i.push(o);o=X(e,x(i,r)),o.selector=e}return o},E=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&k(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&w.getById&&9===t.nodeType&&q&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(we,Te),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[s=a.type]);)if((u=T.find[s])&&(r=u(a.matches[0].replace(we,Te),xe.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n;break}}return(l||N(e,f))(r,t,!q,n,xe.test(e)&&c(t.parentNode)||t),n},w.sortStable=M.split("").sort(_).join("")===M,w.detectDuplicates=!!D,P(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(o);ie.find=le,ie.expr=le.selectors,ie.expr[":"]=ie.expr.pseudos,ie.unique=le.uniqueSort,ie.text=le.getText,ie.isXMLDoc=le.isXML,ie.contains=le.contains;var ce=ie.expr.match.needsContext,fe=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,pe=/^.[^:#\[\.,]*$/;ie.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ie.find.matchesSelector(r,e)?[r]:[]:ie.find.matches(e,ie.grep(t,function(e){return 1===e.nodeType}))},ie.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(ie(e).filter(function(){for(t=0;t<n;t++)if(ie.contains(i[t],this))return!0}));for(t=0;t<n;t++)ie.find(e,i[t],r);return r=this.pushStack(n>1?ie.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(u(this,e||[],!1))},not:function(e){return this.pushStack(u(this,e||[],!0))},is:function(e){return!!u(this,"string"==typeof e&&ce.test(e)?ie(e):e||[],!1).length}});var de,he=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ge=ie.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:he.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||de).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof ie?t[0]:t,ie.merge(this,ie.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:ne,!0)),fe.test(n[1])&&ie.isPlainObject(t))for(n in t)ie.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=ne.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=ne,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ie.isFunction(e)?"undefined"!=typeof de.ready?de.ready(e):e(ie):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),ie.makeArray(e,this))};ge.prototype=ie.fn,de=ie(ne);var me=/^(?:parents|prev(?:Until|All))/,ye={children:!0,contents:!0,next:!0,prev:!0};ie.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&ie(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),ie.fn.extend({has:function(e){var t=ie(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ie.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=ce.test(e)||"string"!=typeof e?ie(e,t||this.context):0;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&ie.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ie.unique(o):o)},index:function(e){return e?"string"==typeof e?J.call(ie(e),this[0]):J.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ie.unique(ie.merge(this.get(),ie(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ie.each({parent:function Xt(e){var Xt=e.parentNode;return Xt&&11!==Xt.nodeType?Xt:null},parents:function(e){return ie.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ie.dir(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return ie.dir(e,"nextSibling")},prevAll:function(e){return ie.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ie.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ie.dir(e,"previousSibling",n)},siblings:function(e){return ie.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ie.sibling(e.firstChild)},contents:function(e){return e.contentDocument||ie.merge([],e.childNodes)}},function(e,t){ie.fn[e]=function(n,r){var i=ie.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ie.filter(r,i)),this.length>1&&(ye[e]||ie.unique(i),me.test(e)&&i.reverse()),this.pushStack(i)}});var ve=/\S+/g,xe={};ie.Callbacks=function(e){e="string"==typeof e?xe[e]||c(e):ie.extend({},e);var t,n,r,i,o,a,s=[],u=!e.once&&[],l=function p(l){for(t=e.memory&&l,n=!0,a=i||0,i=0,o=s.length,r=!0;s&&a<o;a++)if(s[a].apply(l[0],l[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,s&&(u?u.length&&p(u.shift()):t?s=[]:f.disable())},f={add:function(){if(s){var n=s.length;!function a(t){ie.each(t,function(t,n){var r=ie.type(n);"function"===r?e.unique&&f.has(n)||s.push(n):n&&n.length&&"string"!==r&&a(n)})}(arguments),r?o=s.length:t&&(i=n,l(t))}return this},remove:function(){return s&&ie.each(arguments,function(e,t){for(var n;(n=ie.inArray(t,s,n))>-1;)s.splice(n,1),r&&(n<=o&&o--,n<=a&&a--)}),this},has:function(e){return e?ie.inArray(e,s)>-1:!(!s||!s.length)},empty:function(){return s=[],o=0,this},disable:function(){return s=u=t=void 0,this},disabled:function(){return!s},lock:function(){return u=void 0,t||f.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!s||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},ie.extend({Deferred:function(e){var t=[["resolve","done",ie.Callbacks("once memory"),"resolved"],["reject","fail",ie.Callbacks("once memory"),"rejected"],["notify","progress",ie.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ie.Deferred(function(n){ie.each(t,function(t,o){var a=ie.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&ie.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?ie.extend(e,r):r}},i={};return r.pipe=r.then,ie.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Y.call(arguments),a=o.length,s=1!==a||e&&ie.isFunction(e.promise)?a:0,u=1===s?e:ie.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Y.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);i<a;i++)o[i]&&ie.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s;return s||u.resolveWith(r,o),u.promise()}});var be;ie.fn.ready=function(e){return ie.ready.promise().done(e),this},ie.extend({isReady:!1,readyWait:1,holdReady:function(e){e?ie.readyWait++:ie.ready(!0)},ready:function(e){(e===!0?--ie.readyWait:ie.isReady)||(ie.isReady=!0,e!==!0&&--ie.readyWait>0||(be.resolveWith(ne,[ie]),ie.fn.triggerHandler&&(ie(ne).triggerHandler("ready"),ie(ne).off("ready"))))}}),ie.ready.promise=function(e){return be||(be=ie.Deferred(),"complete"===ne.readyState?setTimeout(ie.ready):(ne.addEventListener("DOMContentLoaded",f,!1),o.addEventListener("load",f,!1))),be.promise(e)},ie.ready.promise();var we=ie.access=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===ie.type(n)){i=!0;for(s in n)ie.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ie.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ie(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o};ie.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},p.uid=1,p.accepts=ie.acceptData,p.prototype={key:function(e){if(!p.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=p.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,ie.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(ie.isEmptyObject(o))ie.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,ie.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o];if(void 0===t)this.cache[o]={};else{ie.isArray(t)?r=t.concat(t.map(ie.camelCase)):(i=ie.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(ve)||[])),n=r.length;for(;n--;)delete a[r[n]]}},hasData:function(e){return!ie.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var Te=new p,Ce=new p,Se=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ke=/([A-Z])/g;ie.extend({hasData:function(e){return Ce.hasData(e)||Te.hasData(e)},data:function(e,t,n){return Ce.access(e,t,n)},removeData:function(e,t){Ce.remove(e,t)},_data:function(e,t,n){return Te.access(e,t,n)},_removeData:function(e,t){Te.remove(e,t)}}),ie.fn.extend({data:function _t(e,t){var r,i,_t,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(_t=Ce.get(o),1===o.nodeType&&!Te.get(o,"hasDataAttrs"))){for(r=a.length;r--;)a[r]&&(i=a[r].name,0===i.indexOf("data-")&&(i=ie.camelCase(i.slice(5)),d(o,i,_t[i])));Te.set(o,"hasDataAttrs",!0)}return _t}return"object"===("undefined"==typeof e?"undefined":n(e))?this.each(function(){Ce.set(this,e)}):we(this,function(t){var n,r=ie.camelCase(e);if(o&&void 0===t){if(n=Ce.get(o,e),void 0!==n)return n;if(n=Ce.get(o,r),void 0!==n)return n;if(n=d(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=Ce.get(this,r);Ce.set(this,r,t),e.indexOf("-")!==-1&&void 0!==n&&Ce.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ce.remove(this,e)})}}),ie.extend({queue:function Ut(e,t,n){var Ut;if(e)return t=(t||"fx")+"queue",Ut=Te.get(e,t),n&&(!Ut||ie.isArray(n)?Ut=Te.access(e,t,ie.makeArray(n)):Ut.push(n)),Ut||[]},dequeue:function(e,t){t=t||"fx";var n=ie.queue(e,t),r=n.length,i=n.shift(),o=ie._queueHooks(e,t),a=function(){ie.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire();
	},_queueHooks:function(e,t){var n=t+"queueHooks";return Te.get(e,n)||Te.access(e,n,{empty:ie.Callbacks("once memory").add(function(){Te.remove(e,[t+"queue",n])})})}}),ie.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ie.queue(this[0],e):void 0===t?this:this.each(function(){var n=ie.queue(this,e,t);ie._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ie.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ie.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ie.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=Te.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Ne=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ee=["Top","Right","Bottom","Left"],je=function(e,t){return e=t||e,"none"===ie.css(e,"display")||!ie.contains(e.ownerDocument,e)},Ae=/^(?:checkbox|radio)$/i;!function(){var e=ne.createDocumentFragment(),t=e.appendChild(ne.createElement("div")),n=ne.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),te.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",te.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var De="undefined";te.focusinBubbles="onfocusin"in o;var Pe=/^key/,Le=/^(?:mouse|pointer|contextmenu)|click/,He=/^(?:focusinfocus|focusoutblur)$/,qe=/^([^.]*)(?:\.(.+)|)$/;ie.event={global:{},add:function(e,t,r,i,o){var a,s,u,l,c,f,p,d,h,g,m,y=Te.get(e);if(y)for(r.handler&&(a=r,r=a.handler,o=a.selector),r.guid||(r.guid=ie.guid++),(l=y.events)||(l=y.events={}),(s=y.handle)||(s=y.handle=function(t){return("undefined"==typeof ie?"undefined":n(ie))!==De&&ie.event.triggered!==t.type?ie.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(ve)||[""],c=t.length;c--;)u=qe.exec(t[c])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),h&&(p=ie.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=ie.event.special[h]||{},f=ie.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ie.expr.match.needsContext.test(o),namespace:g.join(".")},a),(d=l[h])||(d=l[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,s)!==!1||e.addEventListener&&e.addEventListener(h,s,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),ie.event.global[h]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=Te.hasData(e)&&Te.get(e);if(m&&(u=m.events)){for(t=(t||"").match(ve)||[""],l=t.length;l--;)if(s=qe.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ie.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||ie.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)ie.event.remove(e,d+t[l],n,r,!0);ie.isEmptyObject(u)&&(delete m.handle,Te.remove(e,"events"))}},trigger:function(e,t,r,i){var a,s,u,l,c,f,p,d=[r||ne],h=ee.call(e,"type")?e.type:e,g=ee.call(e,"namespace")?e.namespace.split("."):[];if(s=u=r=r||ne,3!==r.nodeType&&8!==r.nodeType&&!He.test(h+ie.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),c=h.indexOf(":")<0&&"on"+h,e=e[ie.expando]?e:new ie.Event(h,"object"===("undefined"==typeof e?"undefined":n(e))&&e),e.isTrigger=i?2:3,e.namespace=g.join("."),e.namespace_re=e.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=r),t=null==t?[e]:ie.makeArray(t,[e]),p=ie.event.special[h]||{},i||!p.trigger||p.trigger.apply(r,t)!==!1)){if(!i&&!p.noBubble&&!ie.isWindow(r)){for(l=p.delegateType||h,He.test(l+h)||(s=s.parentNode);s;s=s.parentNode)d.push(s),u=s;u===(r.ownerDocument||ne)&&d.push(u.defaultView||u.parentWindow||o)}for(a=0;(s=d[a++])&&!e.isPropagationStopped();)e.type=a>1?l:p.bindType||h,f=(Te.get(s,"events")||{})[e.type]&&Te.get(s,"handle"),f&&f.apply(s,t),f=c&&s[c],f&&f.apply&&ie.acceptData(s)&&(e.result=f.apply(s,t),e.result===!1&&e.preventDefault());return e.type=h,i||e.isDefaultPrevented()||p._default&&p._default.apply(d.pop(),t)!==!1||!ie.acceptData(r)||c&&ie.isFunction(r[h])&&!ie.isWindow(r)&&(u=r[c],u&&(r[c]=null),ie.event.triggered=h,r[h](),ie.event.triggered=void 0,u&&(r[c]=u)),e.result}},dispatch:function(e){e=ie.event.fix(e);var t,n,r,i,o,a=[],s=Y.call(arguments),u=(Te.get(this,"events")||{})[e.type]||[],l=ie.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=ie.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)e.namespace_re&&!e.namespace_re.test(o.namespace)||(e.handleObj=o,e.data=o.data,r=((ie.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target;if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;n<s;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?ie(i,this).index(u)>=0:ie.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||ne,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[ie.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=Le.test(i)?this.mouseHooks:Pe.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new ie.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=ne),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==m()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===m()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&ie.nodeName(this,"input"))return this.click(),!1},_default:function(e){return ie.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=ie.extend(new ie.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ie.event.trigger(i,null,t):ie.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ie.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},ie.Event=function(e,t){return this instanceof ie.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?h:g):this.type=e,t&&ie.extend(this,t),this.timeStamp=e&&e.timeStamp||ie.now(),void(this[ie.expando]=!0)):new ie.Event(e,t)},ie.Event.prototype={isDefaultPrevented:g,isPropagationStopped:g,isImmediatePropagationStopped:g,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=h,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=h,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=h,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},ie.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ie.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||ie.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),te.focusinBubbles||ie.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ie.event.simulate(t,e.target,ie.event.fix(e),!0)};ie.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Te.access(r,t);i||r.addEventListener(e,n,!0),Te.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Te.access(r,t)-1;i?Te.access(r,t,i):(r.removeEventListener(e,n,!0),Te.remove(r,t))}}}),ie.fn.extend({on:function(e,t,r,i,o){var a,s;if("object"===("undefined"==typeof e?"undefined":n(e))){"string"!=typeof t&&(r=r||t,t=void 0);for(s in e)this.on(s,t,r,e[s],o);return this}if(null==r&&null==i?(i=t,r=t=void 0):null==i&&("string"==typeof t?(i=r,r=void 0):(i=r,r=t,t=void 0)),i===!1)i=g;else if(!i)return this;return 1===o&&(a=i,i=function(e){return ie().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=ie.guid++)),this.each(function(){ie.event.add(this,e,i,r,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ie(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"===("undefined"==typeof e?"undefined":n(e))){for(o in e)this.off(o,t,e[o]);return this}return t!==!1&&"function"!=typeof t||(r=t,t=void 0),r===!1&&(r=g),this.each(function(){ie.event.remove(this,e,r,t)})},trigger:function(e,t){return this.each(function(){ie.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ie.event.trigger(e,t,n,!0)}});var Fe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Oe=/<([\w:]+)/,Re=/<|&#?\w+;/,Ve=/<(?:script|style|link)/i,Me=/checked\s*(?:[^=]|=\s*.checked.)/i,$e=/^$|\/(?:java|ecma)script/i,We=/^true\/(.*)/,Ie=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Be={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Be.optgroup=Be.option,Be.tbody=Be.tfoot=Be.colgroup=Be.caption=Be.thead,Be.th=Be.td,ie.extend({clone:function Yt(e,t,n){var r,i,o,a,Yt=e.cloneNode(!0),s=ie.contains(e.ownerDocument,e);if(!(te.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ie.isXMLDoc(e)))for(a=T(Yt),o=T(e),r=0,i=o.length;r<i;r++)C(o[r],a[r]);if(t)if(n)for(o=o||T(e),a=a||T(Yt),r=0,i=o.length;r<i;r++)w(o[r],a[r]);else w(e,Yt);return a=T(Yt,"script"),a.length>0&&b(a,!s&&T(e,"script")),Yt},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if(i=e[p],i||0===i)if("object"===ie.type(i))ie.merge(f,i.nodeType?[i]:i);else if(Re.test(i)){for(o=o||c.appendChild(t.createElement("div")),a=(Oe.exec(i)||["",""])[1].toLowerCase(),s=Be[a]||Be._default,o.innerHTML=s[1]+i.replace(Fe,"<$1></$2>")+s[2],l=s[0];l--;)o=o.lastChild;ie.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||ie.inArray(i,r)===-1)&&(u=ie.contains(i.ownerDocument,i),o=T(c.appendChild(i),"script"),u&&b(o),n))for(l=0;i=o[l++];)$e.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=ie.event.special,a=0;void 0!==(n=e[a]);a++){if(ie.acceptData(n)&&(i=n[Te.expando],i&&(t=Te.cache[i]))){if(t.events)for(r in t.events)o[r]?ie.event.remove(n,r):ie.removeEvent(n,r,t.handle);Te.cache[i]&&delete Te.cache[i]}delete Ce.cache[n[Ce.expando]]}}}),ie.fn.extend({text:function(e){return we(this,function(e){return void 0===e?ie.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?ie.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||ie.cleanData(T(n)),n.parentNode&&(t&&ie.contains(n.ownerDocument,n)&&b(T(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(ie.cleanData(T(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ie.clone(this,e,t)})},html:function(e){return we(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ve.test(e)&&!Be[(Oe.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Fe,"<$1></$2>");try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(ie.cleanData(T(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,ie.cleanData(T(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=G.apply([],e);var n,r,i,o,a,s,u=0,l=this.length,c=this,f=l-1,p=e[0],d=ie.isFunction(p);if(d||l>1&&"string"==typeof p&&!te.checkClone&&Me.test(p))return this.each(function(n){var r=c.eq(n);d&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=ie.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=ie.map(T(n,"script"),v),o=i.length;u<l;u++)a=n,u!==f&&(a=ie.clone(a,!0,!0),o&&ie.merge(i,T(a,"script"))),t.call(this[u],a,u);if(o)for(s=i[i.length-1].ownerDocument,ie.map(i,x),u=0;u<o;u++)a=i[u],$e.test(a.type||"")&&!Te.access(a,"globalEval")&&ie.contains(s,a)&&(a.src?ie._evalUrl&&ie._evalUrl(a.src):ie.globalEval(a.textContent.replace(Ie,"")))}return this}}),ie.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ie.fn[e]=function(e){for(var n,r=[],i=ie(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),ie(i[a])[t](n),Q.apply(r,n.get());return this.pushStack(r)}});var ze,Xe={},_e=/^margin/,Ue=new RegExp("^("+Ne+")(?!px)[a-z%]+$","i"),Ye=function(e){return e.ownerDocument.defaultView.opener?e.ownerDocument.defaultView.getComputedStyle(e,null):o.getComputedStyle(e,null)};!function(){function e(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",r.appendChild(i);var e=o.getComputedStyle(a,null);t="1%"!==e.top,n="4px"===e.width,r.removeChild(i)}var t,n,r=ne.documentElement,i=ne.createElement("div"),a=ne.createElement("div");a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",te.clearCloneStyle="content-box"===a.style.backgroundClip,i.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",i.appendChild(a),o.getComputedStyle&&ie.extend(te,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return null==n&&e(),n},reliableMarginRight:function(){var e,t=a.appendChild(ne.createElement("div"));return t.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",t.style.marginRight=t.style.width="0",a.style.width="1px",r.appendChild(i),e=!parseFloat(o.getComputedStyle(t,null).marginRight),r.removeChild(i),a.removeChild(t),e}}))}(),ie.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var Ge=/^(none|table(?!-c[ea]).+)/,Qe=new RegExp("^("+Ne+")(.*)$","i"),Je=new RegExp("^([+-])=("+Ne+")","i"),Ze={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"},et=["Webkit","O","Moz","ms"];ie.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=N(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function Gt(e,t,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=ie.camelCase(t),Gt=e.style;return t=ie.cssProps[u]||(ie.cssProps[u]=j(Gt,u)),s=ie.cssHooks[t]||ie.cssHooks[u],void 0===r?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:Gt[t]:(a="undefined"==typeof r?"undefined":n(r),"string"===a&&(o=Je.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ie.css(e,t)),a="number"),null!=r&&r===r&&("number"!==a||ie.cssNumber[u]||(r+="px"),te.clearCloneStyle||""!==r||0!==t.indexOf("background")||(Gt[t]="inherit"),s&&"set"in s&&void 0===(r=s.set(e,r,i))||(Gt[t]=r)),void 0)}},css:function(e,t,n,r){var i,o,a,s=ie.camelCase(t);return t=ie.cssProps[s]||(ie.cssProps[s]=j(e.style,s)),a=ie.cssHooks[t]||ie.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=N(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),n===!0||ie.isNumeric(o)?o||0:i):i}}),ie.each(["height","width"],function(e,t){ie.cssHooks[t]={get:function(e,n,r){if(n)return Ge.test(ie.css(e,"display"))&&0===e.offsetWidth?ie.swap(e,Ze,function(){return P(e,t,r)}):P(e,t,r)},set:function(e,n,r){var i=r&&Ye(e);return A(e,n,r?D(e,t,r,"border-box"===ie.css(e,"boxSizing",!1,i),i):0)}}}),ie.cssHooks.marginRight=E(te.reliableMarginRight,function(e,t){if(t)return ie.swap(e,{display:"inline-block"},N,[e,"marginRight"])}),ie.each({margin:"",padding:"",border:"Width"},function(e,t){ie.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ee[r]+t]=o[r]||o[r-2]||o[0];return i}},_e.test(e)||(ie.cssHooks[e+t].set=A)}),ie.fn.extend({css:function(e,t){return we(this,function(e,t,n){var r,i,o={},a=0;if(ie.isArray(t)){for(r=Ye(e),i=t.length;a<i;a++)o[t[a]]=ie.css(e,t[a],!1,r);return o}return void 0!==n?ie.style(e,t,n):ie.css(e,t)},e,t,arguments.length>1)},show:function(){return L(this,!0)},hide:function(){return L(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){je(this)?ie(this).show():ie(this).hide()})}}),ie.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ie.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.options.duration?this.pos=t=ie.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ie.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ie.fx.step[e.prop]?ie.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ie.cssProps[e.prop]]||ie.cssHooks[e.prop])?ie.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ie.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ie.fx=H.prototype.init,ie.fx.step={};var tt,nt,rt=/^(?:toggle|show|hide)$/,it=new RegExp("^(?:([+-])=|)("+Ne+")([a-z%]*)$","i"),ot=/queueHooks$/,at=[R],st={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=it.exec(t),o=i&&i[3]||(ie.cssNumber[e]?"":"px"),a=(ie.cssNumber[e]||"px"!==o&&+r)&&it.exec(ie.css(n.elem,e)),s=1,u=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,ie.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};ie.Animation=ie.extend(M,{tweener:function(e,t){ie.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;r<i;r++)n=e[r],st[n]=st[n]||[],st[n].unshift(t)},prefilter:function(e,t){t?at.unshift(e):at.push(e)}}),ie.speed=function(e,t,r){var i=e&&"object"===("undefined"==typeof e?"undefined":n(e))?ie.extend({},e):{complete:r||!r&&t||ie.isFunction(e)&&e,duration:e,easing:r&&t||t&&!ie.isFunction(t)&&t};return i.duration=ie.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in ie.fx.speeds?ie.fx.speeds[i.duration]:ie.fx.speeds._default,null!=i.queue&&i.queue!==!0||(i.queue="fx"),i.old=i.complete,i.complete=function(){ie.isFunction(i.old)&&i.old.call(this),i.queue&&ie.dequeue(this,i.queue)},i},ie.fn.extend({fadeTo:function(e,t,n,r){return this.filter(je).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ie.isEmptyObject(e),o=ie.speed(t,n,r),a=function(){var t=M(this,ie.extend({},e),o);(i||Te.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ie.timers,a=Te.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||ie.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Te.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ie.timers,a=r?r.length:0;for(n.finish=!0,ie.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ie.each(["toggle","show","hide"],function(e,t){var n=ie.fn[t];ie.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(F(t,!0),e,r,i)}}),ie.each({slideDown:F("show"),slideUp:F("hide"),slideToggle:F("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ie.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ie.timers=[],ie.fx.tick=function(){var e,t=0,n=ie.timers;for(tt=ie.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||ie.fx.stop(),tt=void 0},ie.fx.timer=function(e){ie.timers.push(e),e()?ie.fx.start():ie.timers.pop()},ie.fx.interval=13,ie.fx.start=function(){nt||(nt=setInterval(ie.fx.tick,ie.fx.interval))},ie.fx.stop=function(){clearInterval(nt),nt=null},ie.fx.speeds={slow:600,fast:200,_default:400},ie.fn.delay=function(e,t){return e=ie.fx?ie.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=ne.createElement("input"),t=ne.createElement("select"),n=t.appendChild(ne.createElement("option"));e.type="checkbox",te.checkOn=""!==e.value,te.optSelected=n.selected,t.disabled=!0,te.optDisabled=!n.disabled,e=ne.createElement("input"),e.value="t",e.type="radio",te.radioValue="t"===e.value}();var ut,lt,ct=ie.expr.attrHandle;ie.fn.extend({attr:function(e,t){return we(this,ie.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ie.removeAttr(this,e)})}}),ie.extend({attr:function(e,t,r){var i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return n(e.getAttribute)===De?ie.prop(e,t,r):(1===a&&ie.isXMLDoc(e)||(t=t.toLowerCase(),i=ie.attrHooks[t]||(ie.expr.match.bool.test(t)?lt:ut)),void 0===r?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=ie.find.attr(e,t),null==o?void 0:o):null!==r?i&&"set"in i&&void 0!==(o=i.set(e,r,t))?o:(e.setAttribute(t,r+""),r):void ie.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ve);if(o&&1===e.nodeType)for(;n=o[i++];)r=ie.propFix[n]||n,ie.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!te.radioValue&&"radio"===t&&ie.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),lt={set:function(e,t,n){return t===!1?ie.removeAttr(e,n):e.setAttribute(n,n),n}},ie.each(ie.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ct[t]||ie.find.attr;ct[t]=function(e,t,r){var i,o;return r||(o=ct[t],ct[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ct[t]=o),i}});var ft=/^(?:input|select|textarea|button)$/i;ie.fn.extend({prop:function(e,t){return we(this,ie.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ie.propFix[e]||e]})}}),ie.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!ie.isXMLDoc(e),o&&(t=ie.propFix[t]||t,i=ie.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||ft.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),te.optSelected||(ie.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),ie.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ie.propFix[this.toLowerCase()]=this});var pt=/[\t\r\n\f]/g;ie.fn.extend({addClass:function(e){var t,n,r,i,o,a,s="string"==typeof e&&e,u=0,l=this.length;if(ie.isFunction(e))return this.each(function(t){ie(this).addClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ve)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(pt," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=ie.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(ie.isFunction(e))return this.each(function(t){ie(this).removeClass(e.call(this,t,this.className))});if(s)for(t=(e||"").match(ve)||[];u<l;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(pt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?ie.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var r="undefined"==typeof e?"undefined":n(e);return"boolean"==typeof t&&"string"===r?t?this.addClass(e):this.removeClass(e):ie.isFunction(e)?this.each(function(n){ie(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===r)for(var t,n=0,i=ie(this),o=e.match(ve)||[];t=o[n++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else r!==De&&"boolean"!==r||(this.className&&Te.set(this,"__className__",this.className),this.className=this.className||e===!1?"":Te.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;n<r;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(pt," ").indexOf(t)>=0)return!0;return!1}});var dt=/\r/g;ie.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=ie.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ie(this).val()):e,null==i?i="":"number"==typeof i?i+="":ie.isArray(i)&&(i=ie.map(i,function(e){return null==e?"":e+""})),t=ie.valHooks[this.type]||ie.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=ie.valHooks[i.type]||ie.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(dt,""):null==n?"":n)}}}),ie.extend({valHooks:{option:{get:function(e){var t=ie.find.attr(e,"value");return null!=t?t:ie.trim(ie.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||i<0,a=o?null:[],s=o?i+1:r.length,u=i<0?s:o?i:0;u<s;u++)if(n=r[u],(n.selected||u===i)&&(te.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!ie.nodeName(n.parentNode,"optgroup"))){if(t=ie(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=ie.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=ie.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),ie.each(["radio","checkbox"],function(){ie.valHooks[this]={set:function(e,t){if(ie.isArray(t))return e.checked=ie.inArray(ie(e).val(),t)>=0}},te.checkOn||(ie.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ie.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ie.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ht=ie.now(),gt=/\?/;ie.parseJSON=function(e){return JSON.parse(e+"")},ie.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||ie.error("Invalid XML: "+e),t};var mt=/#.*$/,yt=/([?&])_=[^&]*/,vt=/^(.*?):[ \t]*([^\r\n]*)$/gm,xt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,bt=/^(?:GET|HEAD)$/,wt=/^\/\//,Tt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ct={},St={},kt="*/".concat("*"),Nt=o.location.href,Et=Tt.exec(Nt.toLowerCase())||[];ie.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Nt,type:"GET",isLocal:xt.test(Et[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":kt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ie.parseJSON,"text xml":ie.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?I(I(e,ie.ajaxSettings),t):I(ie.ajaxSettings,e)},ajaxPrefilter:$(Ct),ajaxTransport:$(St),ajax:function(e,t){function r(e,t,n,r){var s,l,f,v,x,w=t;2!==b&&(b=2,u&&clearTimeout(u),i=void 0,a=r||"",T.readyState=e>0?4:0,s=e>=200&&e<300||304===e,n&&(v=B(p,T,n)),v=z(p,v,T,s),s?(p.ifModified&&(x=T.getResponseHeader("Last-Modified"),x&&(ie.lastModified[o]=x),x=T.getResponseHeader("etag"),x&&(ie.etag[o]=x)),204===e||"HEAD"===p.type?w="nocontent":304===e?w="notmodified":(w=v.state,
	l=v.data,f=v.error,s=!f)):(f=w,!e&&w||(w="error",e<0&&(e=0))),T.status=e,T.statusText=(t||w)+"",s?g.resolveWith(d,[l,w,T]):g.rejectWith(d,[T,w,f]),T.statusCode(y),y=void 0,c&&h.trigger(s?"ajaxSuccess":"ajaxError",[T,p,s?l:f]),m.fireWith(d,[T,w]),c&&(h.trigger("ajaxComplete",[T,p]),--ie.active||ie.event.trigger("ajaxStop")))}"object"===("undefined"==typeof e?"undefined":n(e))&&(t=e,e=void 0),t=t||{};var i,o,a,s,u,l,c,f,p=ie.ajaxSetup({},t),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?ie(d):ie.event,g=ie.Deferred(),m=ie.Callbacks("once memory"),y=p.statusCode||{},v={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=vt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(b<2)for(t in e)y[t]=[y[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,p.url=((e||p.url||Nt)+"").replace(mt,"").replace(wt,Et[1]+"//"),p.type=t.method||t.type||p.method||p.type,p.dataTypes=ie.trim(p.dataType||"*").toLowerCase().match(ve)||[""],null==p.crossDomain&&(l=Tt.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]===Et[1]&&l[2]===Et[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(Et[3]||("http:"===Et[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=ie.param(p.data,p.traditional)),W(Ct,p,t,T),2===b)return T;c=ie.event&&p.global,c&&0===ie.active++&&ie.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!bt.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(gt.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=yt.test(o)?o.replace(yt,"$1_="+ht++):o+(gt.test(o)?"&":"?")+"_="+ht++)),p.ifModified&&(ie.lastModified[o]&&T.setRequestHeader("If-Modified-Since",ie.lastModified[o]),ie.etag[o]&&T.setRequestHeader("If-None-Match",ie.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+kt+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===b))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=W(St,p,t,T)){T.readyState=1,c&&h.trigger("ajaxSend",[T,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},p.timeout));try{b=1,i.send(v,r)}catch(C){if(!(b<2))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return ie.get(e,t,n,"json")},getScript:function(e,t){return ie.get(e,void 0,t,"script")}}),ie.each(["get","post"],function(e,t){ie[t]=function(e,n,r,i){return ie.isFunction(n)&&(i=i||r,r=n,n=void 0),ie.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),ie._evalUrl=function(e){return ie.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ie.fn.extend({wrapAll:function(e){var t;return ie.isFunction(e)?this.each(function(t){ie(this).wrapAll(e.call(this,t))}):(this[0]&&(t=ie(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return ie.isFunction(e)?this.each(function(t){ie(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ie(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ie.isFunction(e);return this.each(function(n){ie(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ie.nodeName(this,"body")||ie(this).replaceWith(this.childNodes)}).end()}}),ie.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},ie.expr.filters.visible=function(e){return!ie.expr.filters.hidden(e)};var jt=/%20/g,At=/\[\]$/,Dt=/\r?\n/g,Pt=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;ie.param=function(e,t){var n,r=[],i=function(e,t){t=ie.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=ie.ajaxSettings&&ie.ajaxSettings.traditional),ie.isArray(e)||e.jquery&&!ie.isPlainObject(e))ie.each(e,function(){i(this.name,this.value)});else for(n in e)X(n,e[n],t,i);return r.join("&").replace(jt,"+")},ie.fn.extend({serialize:function(){return ie.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ie.prop(this,"elements");return e?ie.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ie(this).is(":disabled")&&Lt.test(this.nodeName)&&!Pt.test(e)&&(this.checked||!Ae.test(e))}).map(function(e,t){var n=ie(this).val();return null==n?null:ie.isArray(n)?ie.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}}),ie.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Ht=0,qt={},Ft={0:200,1223:204},Ot=ie.ajaxSettings.xhr();o.attachEvent&&o.attachEvent("onunload",function(){for(var e in qt)qt[e]()}),te.cors=!!Ot&&"withCredentials"in Ot,te.ajax=Ot=!!Ot,ie.ajaxTransport(function(e){var t;if(te.cors||Ot&&!e.crossDomain)return{send:function(n,r){var i,o=e.xhr(),a=++Ht;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete qt[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Ft[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=qt[a]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(s){if(t)throw s}},abort:function(){t&&t()}}}),ie.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ie.globalEval(e),e}}}),ie.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ie.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=ie("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),ne.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Rt=[],Vt=/(=)\?(?=&|$)|\?\?/;ie.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Rt.pop()||ie.expando+"_"+ht++;return this[e]=!0,e}}),ie.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,a,s=e.jsonp!==!1&&(Vt.test(e.url)?"url":"string"==typeof e.data&&!(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=ie.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Vt,"$1"+r):e.jsonp!==!1&&(e.url+=(gt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return a||ie.error(r+" was not called"),a[0]},e.dataTypes[0]="json",i=o[r],o[r]=function(){a=arguments},n.always(function(){o[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Rt.push(r)),a&&ie.isFunction(i)&&i(a[0]),a=i=void 0}),"script"}),ie.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||ne;var r=fe.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ie.buildFragment([e],t,i),i&&i.length&&ie(i).remove(),ie.merge([],r.childNodes))};var Mt=ie.fn.load;ie.fn.load=function(e,t,r){if("string"!=typeof e&&Mt)return Mt.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=ie.trim(e.slice(u)),e=e.slice(0,u)),ie.isFunction(t)?(r=t,t=void 0):t&&"object"===("undefined"==typeof t?"undefined":n(t))&&(o="POST"),s.length>0&&ie.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){a=arguments,s.html(i?ie("<div>").append(ie.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,a||[e.responseText,t,e])}),this},ie.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ie.fn[t]=function(e){return this.on(t,e)}}),ie.expr.filters.animated=function(e){return ie.grep(ie.timers,function(t){return e===t.elem}).length};var $t=o.document.documentElement;ie.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=ie.css(e,"position"),f=ie(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=ie.css(e,"top"),u=ie.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),ie.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},ie.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ie.offset.setOffset(this,e,t)});var t,r,i=this[0],o={top:0,left:0},a=i&&i.ownerDocument;if(a)return t=a.documentElement,ie.contains(t,i)?(n(i.getBoundingClientRect)!==De&&(o=i.getBoundingClientRect()),r=_(a),{top:o.top+r.pageYOffset-t.clientTop,left:o.left+r.pageXOffset-t.clientLeft}):o},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===ie.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ie.nodeName(e[0],"html")||(r=e.offset()),r.top+=ie.css(e[0],"borderTopWidth",!0),r.left+=ie.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-ie.css(n,"marginTop",!0),left:t.left-r.left-ie.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||$t;e&&!ie.nodeName(e,"html")&&"static"===ie.css(e,"position");)e=e.offsetParent;return e||$t})}}),ie.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ie.fn[e]=function(r){return we(this,function(e,r,i){var a=_(e);return void 0===i?a?a[t]:e[r]:void(a?a.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length,null)}}),ie.each(["top","left"],function(e,t){ie.cssHooks[t]=E(te.pixelPosition,function(e,n){if(n)return n=N(e,t),Ue.test(n)?ie(e).position()[t]+"px":n})}),ie.each({Height:"height",Width:"width"},function(e,t){ie.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){ie.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return we(this,function(t,n,r){var i;return ie.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?ie.css(t,n,a):ie.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),ie.fn.size=function(){return this.length},ie.fn.andSelf=ie.fn.addBack,r=[],i=function(){return ie}.apply(t,r),!(void 0!==i&&(e.exports=i));var Wt=o.jQuery,It=o.$;return ie.noConflict=function(e){return o.$===ie&&(o.$=It),e&&o.jQuery===ie&&(o.jQuery=Wt),ie},("undefined"==typeof a?"undefined":n(a))===De&&(o.jQuery=o.$=ie),ie})}).call(t,n(2)(e))},function(e,t,n){var r,i;(function(e){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};jQuery.Velocity?console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity."):(!function(e){function t(e){var t=e.length,r=n.type(e);return"function"!==r&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function c(e,t){return new c.fn.init(e,t)};n.isWindow=function(e){return null!=e&&e==e.window},n.type=function(e){return null==e?e+"":"object"==("undefined"==typeof e?"undefined":o(e))||"function"==typeof e?i[s.call(e)]||"object":"undefined"==typeof e?"undefined":o(e)},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!a.call(e,"constructor")&&!a.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}for(t in e);return void 0===t||a.call(e,t)},n.each=function(e,n,r){var i,o=0,a=e.length,s=t(e);if(r){if(s)for(;a>o&&(i=n.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=n.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=n.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=n.call(e[o],o,e[o]),i===!1)break;return e},n.data=function(e,t,i){if(void 0===i){var o=e[n.expando],a=o&&r[o];if(void 0===t)return a;if(a&&t in a)return a[t]}else if(void 0!==t){var o=e[n.expando]||(e[n.expando]=++n.uuid);return r[o]=r[o]||{},r[o][t]=i,i}},n.removeData=function(e,t){var i=e[n.expando],o=i&&r[i];o&&n.each(t,function(e,t){delete o[t]})},n.extend=function(){var e,t,r,i,a,s,u=arguments[0]||{},l=1,c=arguments.length,f=!1;for("boolean"==typeof u&&(f=u,u=arguments[l]||{},l++),"object"!=("undefined"==typeof u?"undefined":o(u))&&"function"!==n.type(u)&&(u={}),l===c&&(u=this,l--);c>l;l++)if(null!=(a=arguments[l]))for(i in a)e=u[i],r=a[i],u!==r&&(f&&r&&(n.isPlainObject(r)||(t=n.isArray(r)))?(t?(t=!1,s=e&&n.isArray(e)?e:[]):s=e&&n.isPlainObject(e)?e:{},u[i]=n.extend(f,s,r)):void 0!==r&&(u[i]=r));return u},n.queue=function(e,r,i){function o(e,n){var r=n||[];return null!=e&&(t(Object(e))?!function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e}(r,"string"==typeof e?[e]:e):[].push.call(r,e)),r}if(e){r=(r||"fx")+"queue";var a=n.data(e,r);return i?(!a||n.isArray(i)?a=n.data(e,r,o(i)):a.push(i),a):a||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var i=n.queue(r,t),o=i.shift();"inprogress"===o&&(o=i.shift()),o&&("fx"===t&&i.unshift("inprogress"),o.call(r,function(){n.dequeue(r,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),r=this.offset(),i=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:n(e).offset();return r.top-=parseFloat(t.style.marginTop)||0,r.left-=parseFloat(t.style.marginLeft)||0,e.style&&(i.top+=parseFloat(e.style.borderTopWidth)||0,i.left+=parseFloat(e.style.borderLeftWidth)||0),{top:r.top-i.top,left:r.left-i.left}}};var r={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var i={},a=i.hasOwnProperty,s=i.toString,u="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<u.length;l++)i["[object "+u[l]+"]"]=u[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(a){"object"==o(e)&&"object"==o(e.exports)?e.exports=a():(r=a,i="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==i&&(e.exports=i)))}(function(){return function(e,t,n,r){function i(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r}function a(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function s(e){var t=d.data(e,"velocity");return null===t?r:t}function u(e){return function(t){return Math.round(t*e)*(1/e)}}function l(e,n,r,i){function o(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function s(e){return 3*e}function u(e,t,n){return((o(t,n)*e+a(t,n))*e+s(t))*e}function l(e,t,n){return 3*o(t,n)*e*e+2*a(t,n)*e+s(t)}function c(t,n){for(var i=0;g>i;++i){var o=l(n,e,r);if(0===o)return n;var a=u(n,e,r)-t;n-=a/o}return n}function f(){for(var t=0;x>t;++t)C[t]=u(t*b,e,r)}function p(t,n,i){var o,a,s=0;do a=n+(i-n)/2,o=u(a,e,r)-t,o>0?i=a:n=a;while(Math.abs(o)>y&&++s<v);return a}function d(t){for(var n=0,i=1,o=x-1;i!=o&&C[i]<=t;++i)n+=b;--i;var a=(t-C[i])/(C[i+1]-C[i]),s=n+a*b,u=l(s,e,r);return u>=m?c(t,s):0==u?s:p(t,n,n+b)}function h(){S=!0,(e!=n||r!=i)&&f()}var g=4,m=.001,y=1e-7,v=10,x=11,b=1/(x-1),w="Float32Array"in t;if(4!==arguments.length)return!1;for(var T=0;4>T;++T)if("number"!=typeof arguments[T]||isNaN(arguments[T])||!isFinite(arguments[T]))return!1;e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0);var C=w?new Float32Array(x):new Array(x),S=!1,k=function(t){return S||h(),e===n&&r===i?t:0===t?0:1===t?1:u(d(t),n,i)};k.getControlPoints=function(){return[{x:e,y:n},{x:r,y:i}]};var N="generateBezier("+[e,n,r,i]+")";return k.toString=function(){return N},k}function c(e,t){var n=e;return m.isString(e)?b.Easings[e]||(n=!1):n=m.isArray(e)&&1===e.length?u.apply(null,e):m.isArray(e)&&2===e.length?w.apply(null,e.concat([t])):!(!m.isArray(e)||4!==e.length)&&l.apply(null,e),n===!1&&(n=b.Easings[b.defaults.easing]?b.defaults.easing:x),n}function f(e){if(e){var t=(new Date).getTime(),n=b.State.calls.length;n>1e4&&(b.State.calls=i(b.State.calls));for(var o=0;n>o;o++)if(b.State.calls[o]){var a=b.State.calls[o],u=a[0],l=a[2],c=a[3],h=!!c,g=null;c||(c=b.State.calls[o][3]=t-16);for(var y=Math.min((t-c)/l.duration,1),v=0,x=u.length;x>v;v++){var w=u[v],C=w.element;if(s(C)){var k=!1;if(l.display!==r&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var N=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];d.each(N,function(e,t){T.setPropertyValue(C,"display",t)})}T.setPropertyValue(C,"display",l.display)}l.visibility!==r&&"hidden"!==l.visibility&&T.setPropertyValue(C,"visibility",l.visibility);for(var E in w)if("element"!==E){var j,A=w[E],D=m.isString(A.easing)?b.Easings[A.easing]:A.easing;if(1===y)j=A.endValue;else{var P=A.endValue-A.startValue;if(j=A.startValue+P*D(y,l,P),!h&&j===A.currentValue)continue}if(A.currentValue=j,"tween"===E)g=j;else{if(T.Hooks.registered[E]){var L=T.Hooks.getRoot(E),H=s(C).rootPropertyValueCache[L];H&&(A.rootPropertyValue=H)}var q=T.setPropertyValue(C,E,A.currentValue+(0===parseFloat(j)?"":A.unitType),A.rootPropertyValue,A.scrollData);T.Hooks.registered[E]&&(s(C).rootPropertyValueCache[L]=T.Normalizations.registered[L]?T.Normalizations.registered[L]("extract",null,q[1]):q[1]),"transform"===q[0]&&(k=!0)}}l.mobileHA&&s(C).transformCache.translate3d===r&&(s(C).transformCache.translate3d="(0px, 0px, 0px)",k=!0),k&&T.flushTransformCache(C)}}l.display!==r&&"none"!==l.display&&(b.State.calls[o][2].display=!1),l.visibility!==r&&"hidden"!==l.visibility&&(b.State.calls[o][2].visibility=!1),l.progress&&l.progress.call(a[1],a[1],y,Math.max(0,c+l.duration-t),c,g),1===y&&p(o)}}b.State.isTicking&&S(f)}function p(e,t){if(!b.State.calls[e])return!1;for(var n=b.State.calls[e][0],i=b.State.calls[e][1],o=b.State.calls[e][2],a=b.State.calls[e][4],u=!1,l=0,c=n.length;c>l;l++){var f=n[l].element;if(t||o.loop||("none"===o.display&&T.setPropertyValue(f,"display",o.display),"hidden"===o.visibility&&T.setPropertyValue(f,"visibility",o.visibility)),o.loop!==!0&&(d.queue(f)[1]===r||!/\.velocityQueueEntryFlag/i.test(d.queue(f)[1]))&&s(f)){s(f).isAnimating=!1,s(f).rootPropertyValueCache={};var p=!1;d.each(T.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=s(f).transformCache[t];s(f).transformCache[t]!==r&&new RegExp("^\\("+n+"[^.]").test(i)&&(p=!0,delete s(f).transformCache[t])}),o.mobileHA&&(p=!0,delete s(f).transformCache.translate3d),p&&T.flushTransformCache(f),T.Values.removeClass(f,"velocity-animating")}if(!t&&o.complete&&!o.loop&&l===c-1)try{o.complete.call(i,i)}catch(h){setTimeout(function(){throw h},1)}a&&o.loop!==!0&&a(i),s(f)&&o.loop===!0&&!t&&(d.each(s(f).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360),/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),b(f,"reverse",{loop:!0,delay:o.delay})),o.queue!==!1&&d.dequeue(f,o.queue)}b.State.calls[e]=!1;for(var g=0,m=b.State.calls.length;m>g;g++)if(b.State.calls[g]!==!1){u=!0;break}u===!1&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var d,h=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return r}(),g=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,r=(new Date).getTime();return n=Math.max(0,16-(r-e)),e=r+n,setTimeout(function(){t(r+n)},n)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},isNodeList:function(e){return"object"==("undefined"==typeof e?"undefined":o(e))&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==r&&(0===e.length||"object"==o(e[0])&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},y=!1;if(e.fn&&e.fn.jquery?(d=e,y=!0):d=t.Velocity.Utilities,8>=h&&!y)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(7>=h)return void(jQuery.fn.velocity=jQuery.fn.animate);var v=400,x="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:d,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:v,easing:x,begin:r,complete:r,progress:r,display:r,visibility:r,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){d.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:2,patch:2},debug:!1};t.pageYOffset!==r?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");var w=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),a=t(n,.5*r,o),s=t(n,r,a),u=1/6*(i.dx+2*(o.dx+a.dx)+s.dx),l=1/6*(i.dv+2*(o.dv+a.dv)+s.dv);return n.x=n.x+u*r,n.v=n.v+l*r,n}return function r(e,t,i){var o,a,s,u={x:-1,v:0,tension:null,friction:null},l=[0],c=0,f=1e-4,p=.016;for(e=parseFloat(e)||500,t=parseFloat(t)||20,i=i||null,u.tension=e,u.friction=t,o=null!==i,o?(c=r(e,t),a=c/i*p):a=p;s=n(s||u,a),l.push(1+s.x),c+=16,Math.abs(s.x)>f&&Math.abs(s.v)>f;);return o?function(e){return l[e*(l.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},d.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var T=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<T.Lists.colors.length;e++){var t="color"===T.Lists.colors[e]?"0 0 0 1":"255 255 255 1";T.Hooks.templates[T.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,r,i;if(h)for(n in T.Hooks.templates){r=T.Hooks.templates[n],i=r[0].split(" ");var o=r[1].match(T.RegEx.valueSplit);"Color"===i[0]&&(i.push(i.shift()),o.push(o.shift()),T.Hooks.templates[n]=[i.join(" "),o.join(" ")])}for(n in T.Hooks.templates){r=T.Hooks.templates[n],i=r[0].split(" ");for(var e in i){var a=n+i[e],s=e;T.Hooks.registered[a]=[n,s]}}},getRoot:function(e){var t=T.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return T.RegEx.valueUnwrap.test(t)&&(t=t.match(T.RegEx.valueUnwrap)[1]),T.Values.isCSSNullValue(t)&&(t=T.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=T.Hooks.registered[e];if(n){var r=n[0],i=n[1];return t=T.Hooks.cleanRootPropertyValue(r,t),t.toString().match(T.RegEx.valueSplit)[i]}return t},injectValue:function(e,t,n){var r=T.Hooks.registered[e];if(r){var i,o,a=r[0],s=r[1];return n=T.Hooks.cleanRootPropertyValue(a,n),i=n.toString().match(T.RegEx.valueSplit),i[s]=t,o=i.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var r;return T.RegEx.wrappedValueAlreadyExtracted.test(n)?r=n:(r=n.toString().match(T.RegEx.valueUnwrap),r=r?r[1].replace(/,(\s+)?/g," "):n),r;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return b.State.isFirefox?"filter":"-webkit-filter";case"extract":var r=parseFloat(n);if(!r&&0!==r){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);r=i?i[1]:0}return r;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(8>=h)switch(e){case"name":return"filter";case"extract":var r=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=r?r[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":return n;case"inject":return n}}},register:function(){9>=h||b.State.isGingerbread||(T.Lists.transformsBase=T.Lists.transformsBase.concat(T.Lists.transforms3D));for(var e=0;e<T.Lists.transformsBase.length;e++)!function(){var t=T.Lists.transformsBase[e];T.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return"transform";case"extract":return s(n)===r||s(n).transformCache[t]===r?/^scale/i.test(t)?1:0:s(n).transformCache[t].replace(/[()]/g,"");case"inject":var o=!1;switch(t.substr(0,t.length-1)){case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case"scal":case"scale":b.State.isAndroid&&s(n).transformCache[t]===r&&1>i&&(i=1),o=!/(\d)$/i.test(i);break;case"skew":o=!/(deg|\d)$/i.test(i);break;case"rotate":o=!/(deg|\d)$/i.test(i)}return o||(s(n).transformCache[t]="("+i+")"),s(n).transformCache[t]}}}();for(var e=0;e<T.Lists.colors.length;e++)!function(){var t=T.Lists.colors[e];T.Normalizations.registered[t]=function(e,n,i){switch(e){case"name":return t;case"extract":var o;if(T.RegEx.wrappedValueAlreadyExtracted.test(i))o=i;else{var a,s={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(i)?a=s[i]!==r?s[i]:s.black:T.RegEx.isHex.test(i)?a="rgb("+T.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(a=s.black),o=(a||i).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return 8>=h||3!==o.split(" ").length||(o+=" 1"),o;case"inject":return 8>=h?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(8>=h?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(h||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,r=t.length;r>n;n++){var i;if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[i]))return b.State.prefixMatches[e]=i,[i,!0]}return[e,!1]}},Values:{hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,r){return t+t+n+n+r+r}),t=r.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,i,o){function a(e,n){function i(){l&&T.setPropertyValue(e,"display","none")}var u=0;if(8>=h)u=d.css(e,n);else{var l=!1;if(/^(width|height)$/.test(n)&&0===T.getPropertyValue(e,"display")&&(l=!0,T.setPropertyValue(e,"display",T.Values.getDisplayType(e))),!o){if("height"===n&&"border-box"!==T.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(T.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(T.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(T.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(T.getPropertyValue(e,"paddingBottom"))||0);return i(),c}if("width"===n&&"border-box"!==T.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(T.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(T.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(T.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(T.getPropertyValue(e,"paddingRight"))||0);
	return i(),f}}var p;p=s(e)===r?t.getComputedStyle(e,null):s(e).computedStyle?s(e).computedStyle:s(e).computedStyle=t.getComputedStyle(e,null),"borderColor"===n&&(n="borderTopColor"),u=9===h&&"filter"===n?p.getPropertyValue(n):p[n],(""===u||null===u)&&(u=e.style[n]),i()}if("auto"===u&&/^(top|right|bottom|left)$/i.test(n)){var g=a(e,"position");("fixed"===g||"absolute"===g&&/top|left/i.test(n))&&(u=d(e).position()[n]+"px")}return u}var u;if(T.Hooks.registered[n]){var l=n,c=T.Hooks.getRoot(l);i===r&&(i=T.getPropertyValue(e,T.Names.prefixCheck(c)[0])),T.Normalizations.registered[c]&&(i=T.Normalizations.registered[c]("extract",e,i)),u=T.Hooks.extractValue(l,i)}else if(T.Normalizations.registered[n]){var f,p;f=T.Normalizations.registered[n]("name",e),"transform"!==f&&(p=a(e,T.Names.prefixCheck(f)[0]),T.Values.isCSSNullValue(p)&&T.Hooks.templates[n]&&(p=T.Hooks.templates[n][1])),u=T.Normalizations.registered[n]("extract",e,p)}if(!/^[\d-]/.test(u))if(s(e)&&s(e).isSVG&&T.Names.SVGAttribute(n))if(/^(height|width)$/i.test(n))try{u=e.getBBox()[n]}catch(g){u=0}else u=e.getAttribute(n);else u=a(e,T.Names.prefixCheck(n)[0]);return T.Values.isCSSNullValue(u)&&(u=0),b.debug>=2&&console.log("Get "+n+": "+u),u},setPropertyValue:function(e,n,r,i,o){var a=n;if("scroll"===n)o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?t.scrollTo(r,o.alternateValue):t.scrollTo(o.alternateValue,r);else if(T.Normalizations.registered[n]&&"transform"===T.Normalizations.registered[n]("name",e))T.Normalizations.registered[n]("inject",e,r),a="transform",r=s(e).transformCache[n];else{if(T.Hooks.registered[n]){var u=n,l=T.Hooks.getRoot(n);i=i||T.getPropertyValue(e,l),r=T.Hooks.injectValue(u,r,i),n=l}if(T.Normalizations.registered[n]&&(r=T.Normalizations.registered[n]("inject",e,r),n=T.Normalizations.registered[n]("name",e)),a=T.Names.prefixCheck(n)[0],8>=h)try{e.style[a]=r}catch(c){b.debug&&console.log("Browser does not support ["+r+"] for ["+a+"]")}else s(e)&&s(e).isSVG&&T.Names.SVGAttribute(n)?e.setAttribute(n,r):e.style[a]=r;b.debug>=2&&console.log("Set "+n+" ("+a+"): "+r)}return[a,r]},flushTransformCache:function(e){function t(t){return parseFloat(T.getPropertyValue(e,t))}var n="";if((h||b.State.isAndroid&&!b.State.isChrome)&&s(e).isSVG){var r={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};d.each(s(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),r[e]&&(n+=e+"("+r[e].join(" ")+") ",delete r[e])})}else{var i,o;d.each(s(e).transformCache,function(t){return i=s(e).transformCache[t],"transformPerspective"===t?(o=i,!0):(9===h&&"rotateZ"===t&&(t="rotate"),void(n+=t+i+" "))}),o&&(n="perspective"+o+" "+n)}T.setPropertyValue(e,"transform",n)}};T.Hooks.register(),T.Normalizations.register(),b.hook=function(e,t,n){var i=r;return e=a(e),d.each(e,function(e,o){if(s(o)===r&&b.init(o),n===r)i===r&&(i=b.CSS.getPropertyValue(o,t));else{var a=b.CSS.setPropertyValue(o,t,n);"transform"===a[0]&&b.CSS.flushTransformCache(o),i=a}}),i};var C=function k(){function e(){return o?E.promise||null:u}function i(){function e(e){function l(e,t){var n=r,i=r,s=r;return m.isArray(e)?(n=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||T.RegEx.isHex.test(e[1])?s=e[1]:(m.isString(e[1])&&!T.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(i=t?e[1]:c(e[1],a.duration),e[2]!==r&&(s=e[2]))):n=e,t||(i=i||a.easing),m.isFunction(n)&&(n=n.call(o,C,w)),m.isFunction(s)&&(s=s.call(o,C,w)),[n||0,i,s]}function p(e,t){var n,r;return r=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=T.Values.getUnitType(e)),[r,n]}function v(){var e={myParent:o.parentNode||n.body,position:T.getPropertyValue(o,"position"),fontSize:T.getPropertyValue(o,"fontSize")},r=e.position===q.lastPosition&&e.myParent===q.lastParent,i=e.fontSize===q.lastFontSize;q.lastParent=e.myParent,q.lastPosition=e.position,q.lastFontSize=e.fontSize;var a=100,u={};if(i&&r)u.emToPx=q.lastEmToPx,u.percentToPxWidth=q.lastPercentToPxWidth,u.percentToPxHeight=q.lastPercentToPxHeight;else{var l=s(o).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");b.init(l),e.myParent.appendChild(l),d.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(l,t,"hidden")}),b.CSS.setPropertyValue(l,"position",e.position),b.CSS.setPropertyValue(l,"fontSize",e.fontSize),b.CSS.setPropertyValue(l,"boxSizing","content-box"),d.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(l,t,a+"%")}),b.CSS.setPropertyValue(l,"paddingLeft",a+"em"),u.percentToPxWidth=q.lastPercentToPxWidth=(parseFloat(T.getPropertyValue(l,"width",null,!0))||1)/a,u.percentToPxHeight=q.lastPercentToPxHeight=(parseFloat(T.getPropertyValue(l,"height",null,!0))||1)/a,u.emToPx=q.lastEmToPx=(parseFloat(T.getPropertyValue(l,"paddingLeft"))||1)/a,e.myParent.removeChild(l)}return null===q.remToPx&&(q.remToPx=parseFloat(T.getPropertyValue(n.body,"fontSize"))||16),null===q.vwToPx&&(q.vwToPx=parseFloat(t.innerWidth)/100,q.vhToPx=parseFloat(t.innerHeight)/100),u.remToPx=q.remToPx,u.vwToPx=q.vwToPx,u.vhToPx=q.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(u),o),u}if(a.begin&&0===C)try{a.begin.call(h,h)}catch(x){setTimeout(function(){throw x},1)}if("scroll"===j){var S,k,N,A=/^x$/i.test(a.axis)?"Left":"Top",D=parseFloat(a.offset)||0;a.container?m.isWrapped(a.container)||m.isNode(a.container)?(a.container=a.container[0]||a.container,S=a.container["scroll"+A],N=S+d(o).position()[A.toLowerCase()]+D):a.container=null:(S=b.State.scrollAnchor[b.State["scrollProperty"+A]],k=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===A?"Top":"Left")]],N=d(o).offset()[A.toLowerCase()]+D),u={scroll:{rootPropertyValue:!1,startValue:S,currentValue:S,endValue:N,unitType:"",easing:a.easing,scrollData:{container:a.container,direction:A,alternateValue:k}},element:o},b.debug&&console.log("tweensContainer (scroll): ",u.scroll,o)}else if("reverse"===j){if(!s(o).tweensContainer)return void d.dequeue(o,a.queue);"none"===s(o).opts.display&&(s(o).opts.display="auto"),"hidden"===s(o).opts.visibility&&(s(o).opts.visibility="visible"),s(o).opts.loop=!1,s(o).opts.begin=null,s(o).opts.complete=null,y.easing||delete a.easing,y.duration||delete a.duration,a=d.extend({},s(o).opts,a);var P=d.extend(!0,{},s(o).tweensContainer);for(var L in P)if("element"!==L){var H=P[L].startValue;P[L].startValue=P[L].currentValue=P[L].endValue,P[L].endValue=H,m.isEmptyObject(y)||(P[L].easing=a.easing),b.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(P[L]),o)}u=P}else if("start"===j){var P;s(o).tweensContainer&&s(o).isAnimating===!0&&(P=s(o).tweensContainer),d.each(g,function(e,t){if(RegExp("^"+T.Lists.colors.join("$|^")+"$").test(e)){var n=l(t,!0),i=n[0],o=n[1],a=n[2];if(T.RegEx.isHex.test(i)){for(var s=["Red","Green","Blue"],u=T.Values.hexToRgb(i),c=a?T.Values.hexToRgb(a):r,f=0;f<s.length;f++){var p=[u[f]];o&&p.push(o),c!==r&&p.push(c[f]),g[e+s[f]]=p}delete g[e]}}});for(var O in g){var R=l(g[O]),V=R[0],M=R[1],$=R[2];O=T.Names.camelCase(O);var W=T.Hooks.getRoot(O),I=!1;if(s(o).isSVG||"tween"===W||T.Names.prefixCheck(W)[1]!==!1||T.Normalizations.registered[W]!==r){(a.display!==r&&null!==a.display&&"none"!==a.display||a.visibility!==r&&"hidden"!==a.visibility)&&/opacity|filter/.test(O)&&!$&&0!==V&&($=0),a._cacheValues&&P&&P[O]?($===r&&($=P[O].endValue+P[O].unitType),I=s(o).rootPropertyValueCache[W]):T.Hooks.registered[O]?$===r?(I=T.getPropertyValue(o,W),$=T.getPropertyValue(o,O,I)):I=T.Hooks.templates[W][1]:$===r&&($=T.getPropertyValue(o,O));var B,z,X,_=!1;if(B=p(O,$),$=B[0],X=B[1],B=p(O,V),V=B[0].replace(/^([+-\/*])=/,function(e,t){return _=t,""}),z=B[1],$=parseFloat($)||0,V=parseFloat(V)||0,"%"===z&&(/^(fontSize|lineHeight)$/.test(O)?(V/=100,z="em"):/^scale/.test(O)?(V/=100,z=""):/(Red|Green|Blue)$/i.test(O)&&(V=V/100*255,z="")),/[\/*]/.test(_))z=X;else if(X!==z&&0!==$)if(0===V)z=X;else{i=i||v();var U=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch(X){case"%":$*="x"===U?i.percentToPxWidth:i.percentToPxHeight;break;case"px":break;default:$*=i[X+"ToPx"]}switch(z){case"%":$*=1/("x"===U?i.percentToPxWidth:i.percentToPxHeight);break;case"px":break;default:$*=1/i[z+"ToPx"]}}switch(_){case"+":V=$+V;break;case"-":V=$-V;break;case"*":V=$*V;break;case"/":V=$/V}u[O]={rootPropertyValue:I,startValue:$,currentValue:$,endValue:V,unitType:z,easing:M},b.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(u[O]),o)}else b.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}u.element=o}u.element&&(T.Values.addClass(o,"velocity-animating"),F.push(u),""===a.queue&&(s(o).tweensContainer=u,s(o).opts=a),s(o).isAnimating=!0,C===w-1?(b.State.calls.push([F,h,a,null,E.resolver]),b.State.isTicking===!1&&(b.State.isTicking=!0,f())):C++)}var i,o=this,a=d.extend({},b.defaults,y),u={};switch(s(o)===r&&b.init(o),parseFloat(a.delay)&&a.queue!==!1&&d.queue(o,a.queue,function(e){b.velocityQueueEntryFlag=!0,s(o).delayTimer={setTimeout:setTimeout(e,parseFloat(a.delay)),next:e}}),a.duration.toString().toLowerCase()){case"fast":a.duration=200;break;case"normal":a.duration=v;break;case"slow":a.duration=600;break;default:a.duration=parseFloat(a.duration)||1}b.mock!==!1&&(b.mock===!0?a.duration=a.delay=1:(a.duration*=parseFloat(b.mock)||1,a.delay*=parseFloat(b.mock)||1)),a.easing=c(a.easing,a.duration),a.begin&&!m.isFunction(a.begin)&&(a.begin=null),a.progress&&!m.isFunction(a.progress)&&(a.progress=null),a.complete&&!m.isFunction(a.complete)&&(a.complete=null),a.display!==r&&null!==a.display&&(a.display=a.display.toString().toLowerCase(),"auto"===a.display&&(a.display=b.CSS.Values.getDisplayType(o))),a.visibility!==r&&null!==a.visibility&&(a.visibility=a.visibility.toString().toLowerCase()),a.mobileHA=a.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,a.queue===!1?a.delay?setTimeout(e,a.delay):e():d.queue(o,a.queue,function(t,n){return n===!0?(E.promise&&E.resolver(h),!0):(b.velocityQueueEntryFlag=!0,void e(t))}),""!==a.queue&&"fx"!==a.queue||"inprogress"===d.queue(o)[0]||d.dequeue(o)}var o,u,l,h,g,y,x=arguments[0]&&(arguments[0].p||d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(o=!1,l=0,h=this,u=this):(o=!0,l=1,h=x?arguments[0].elements||arguments[0].e:arguments[0]),h=a(h)){x?(g=arguments[0].properties||arguments[0].p,y=arguments[0].options||arguments[0].o):(g=arguments[l],y=arguments[l+1]);var w=h.length,C=0;if(!/^(stop|finish)$/i.test(g)&&!d.isPlainObject(y)){var S=l+1;y={};for(var N=S;N<arguments.length;N++)m.isArray(arguments[N])||!/^(fast|normal|slow)$/i.test(arguments[N])&&!/^\d/.test(arguments[N])?m.isString(arguments[N])||m.isArray(arguments[N])?y.easing=arguments[N]:m.isFunction(arguments[N])&&(y.complete=arguments[N]):y.duration=arguments[N]}var E={promise:null,resolver:null,rejecter:null};o&&b.Promise&&(E.promise=new b.Promise(function(e,t){E.resolver=e,E.rejecter=t}));var j;switch(g){case"scroll":j="scroll";break;case"reverse":j="reverse";break;case"finish":case"stop":d.each(h,function(e,t){s(t)&&s(t).delayTimer&&(clearTimeout(s(t).delayTimer.setTimeout),s(t).delayTimer.next&&s(t).delayTimer.next(),delete s(t).delayTimer)});var A=[];return d.each(b.State.calls,function(e,t){t&&d.each(t[1],function(n,i){var o=y===r?"":y;return o!==!0&&t[2].queue!==o&&(y!==r||t[2].queue!==!1)||void d.each(h,function(n,r){r===i&&((y===!0||m.isString(y))&&(d.each(d.queue(r,m.isString(y)?y:""),function(e,t){m.isFunction(t)&&t(null,!0)}),d.queue(r,m.isString(y)?y:"",[])),"stop"===g?(s(r)&&s(r).tweensContainer&&o!==!1&&d.each(s(r).tweensContainer,function(e,t){t.endValue=t.currentValue}),A.push(e)):"finish"===g&&(t[2].duration=1))})})}),"stop"===g&&(d.each(A,function(e,t){p(t,!0)}),E.promise&&E.resolver(h)),e();default:if(!d.isPlainObject(g)||m.isEmptyObject(g)){if(m.isString(g)&&b.Redirects[g]){var D=d.extend({},y),P=D.duration,L=D.delay||0;return D.backwards===!0&&(h=d.extend(!0,[],h).reverse()),d.each(h,function(e,t){parseFloat(D.stagger)?D.delay=L+parseFloat(D.stagger)*e:m.isFunction(D.stagger)&&(D.delay=L+D.stagger.call(t,e,w)),D.drag&&(D.duration=parseFloat(P)||(/^(callout|transition)/.test(g)?1e3:v),D.duration=Math.max(D.duration*(D.backwards?1-e/w:(e+1)/w),.75*D.duration,200)),b.Redirects[g].call(t,t,D||{},e,w,h,E.promise?E:r)}),e()}var H="Velocity: First argument ("+g+") was not a property map, a known action, or a registered redirect. Aborting.";return E.promise?E.rejecter(new Error(H)):console.log(H),e()}j="start"}var q={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},F=[];d.each(h,function(e,t){m.isNode(t)&&i.call(t)});var O,D=d.extend({},b.defaults,y);if(D.loop=parseInt(D.loop),O=2*D.loop-1,D.loop)for(var R=0;O>R;R++){var V={delay:D.delay,progress:D.progress};R===O-1&&(V.display=D.display,V.visibility=D.visibility,V.complete=D.complete),k(h,"reverse",V)}return e()}};b=d.extend(C,b),b.animate=C;var S=t.requestAnimationFrame||g;return b.State.isMobile||n.hidden===r||n.addEventListener("visibilitychange",function(){n.hidden?(S=function(e){return setTimeout(function(){e(!0)},16)},f()):S=t.requestAnimationFrame||g}),e.Velocity=b,e!==t&&(e.fn.velocity=C,e.fn.velocity.defaults=b.defaults),d.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,n,i,o,a,s){var u=d.extend({},n),l=u.begin,c=u.complete,f={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},p={};u.display===r&&(u.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),u.begin=function(){l&&l.call(a,a);for(var n in f){p[n]=e.style[n];var r=b.CSS.getPropertyValue(e,n);f[n]="Down"===t?[r,0]:[0,r]}p.overflow=e.style.overflow,e.style.overflow="hidden"},u.complete=function(){for(var t in p)e.style[t]=p[t];c&&c.call(a,a),s&&s.resolver(a)},b(e,f,u)}}),d.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,n,i,o,a,s){var u=d.extend({},n),l={opacity:"In"===t?1:0},c=u.complete;u.complete=i!==o-1?u.begin=null:function(){c&&c.call(a,a),s&&s.resolver(a)},u.display===r&&(u.display="In"===t?"auto":"none"),b(this,l,u)}}),b}(window.jQuery||window.Zepto||window,window,document)}))}).call(t,n(2)(e))},function(e,t){"use strict";!function(e){e(document).ready(function(){e(document).on("click.card",".card",function(t){e(this).find("> .card-reveal").length&&(e(t.target).is(e(".card-reveal .card-title"))||e(t.target).is(e(".card-reveal .card-title i"))?e(this).find(".card-reveal").velocity({translateY:0},{duration:225,queue:!1,easing:"easeInOutQuad",complete:function(){e(this).css({display:"none"})}}):(e(t.target).is(e(".card .activator"))||e(t.target).is(e(".card .activator i")))&&(e(t.target).closest(".card").css("overflow","hidden"),e(this).find(".card-reveal").css({display:"block"}).velocity("stop",!1).velocity({translateY:"-100%"},{duration:300,queue:!1,easing:"easeInOutQuad"})))})})}(jQuery)},function(e,t){"use strict";!function(e){e(document).ready(function(){e(document).on("change",'.file-field input[type="file"]',function(){for(var t=e(this).closest(".file-field"),n=t.find("input.file-path"),r=e(this)[0].files,i=[],o=0;o<r.length;o++)i.push(r[o].name);n.val(i.join(", ")),n.trigger("change")})})}(jQuery)}]);

/***/ },
/* 4 */,
/* 5 */,
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./style.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/resolve-url-loader/index.js!../../node_modules/sass-loader/lib/loader.js?sourceMap!./style.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n * Import of Sass files\n * -----------------------------------------------------------------------------\n */\n\n/** Import of simpleskeletoncss\n  * ---------------------------\n  */\n\n/**\n * Import of Sass files\n * -----------------------------------------------------------------------------\n */\n\n/* Helpers\n * -------------------- */\n\n.materialize-red {\n  background-color: #e51c23 !important;\n}\n\n.materialize-red-text {\n  color: #e51c23 !important;\n}\n\n.materialize-red.lighten-5 {\n  background-color: #fdeaeb !important;\n}\n\n.materialize-red-text.text-lighten-5 {\n  color: #fdeaeb !important;\n}\n\n.materialize-red.lighten-4 {\n  background-color: #f8c1c3 !important;\n}\n\n.materialize-red-text.text-lighten-4 {\n  color: #f8c1c3 !important;\n}\n\n.materialize-red.lighten-3 {\n  background-color: #f3989b !important;\n}\n\n.materialize-red-text.text-lighten-3 {\n  color: #f3989b !important;\n}\n\n.materialize-red.lighten-2 {\n  background-color: #ee6e73 !important;\n}\n\n.materialize-red-text.text-lighten-2 {\n  color: #ee6e73 !important;\n}\n\n.materialize-red.lighten-1 {\n  background-color: #ea454b !important;\n}\n\n.materialize-red-text.text-lighten-1 {\n  color: #ea454b !important;\n}\n\n.materialize-red.darken-1 {\n  background-color: #d0181e !important;\n}\n\n.materialize-red-text.text-darken-1 {\n  color: #d0181e !important;\n}\n\n.materialize-red.darken-2 {\n  background-color: #b9151b !important;\n}\n\n.materialize-red-text.text-darken-2 {\n  color: #b9151b !important;\n}\n\n.materialize-red.darken-3 {\n  background-color: #a21318 !important;\n}\n\n.materialize-red-text.text-darken-3 {\n  color: #a21318 !important;\n}\n\n.materialize-red.darken-4 {\n  background-color: #8b1014 !important;\n}\n\n.materialize-red-text.text-darken-4 {\n  color: #8b1014 !important;\n}\n\n.red {\n  background-color: #F44336 !important;\n}\n\n.red-text {\n  color: #F44336 !important;\n}\n\n.red.lighten-5 {\n  background-color: #FFEBEE !important;\n}\n\n.red-text.text-lighten-5 {\n  color: #FFEBEE !important;\n}\n\n.red.lighten-4 {\n  background-color: #FFCDD2 !important;\n}\n\n.red-text.text-lighten-4 {\n  color: #FFCDD2 !important;\n}\n\n.red.lighten-3 {\n  background-color: #EF9A9A !important;\n}\n\n.red-text.text-lighten-3 {\n  color: #EF9A9A !important;\n}\n\n.red.lighten-2 {\n  background-color: #E57373 !important;\n}\n\n.red-text.text-lighten-2 {\n  color: #E57373 !important;\n}\n\n.red.lighten-1 {\n  background-color: #EF5350 !important;\n}\n\n.red-text.text-lighten-1 {\n  color: #EF5350 !important;\n}\n\n.red.darken-1 {\n  background-color: #E53935 !important;\n}\n\n.red-text.text-darken-1 {\n  color: #E53935 !important;\n}\n\n.red.darken-2 {\n  background-color: #D32F2F !important;\n}\n\n.red-text.text-darken-2 {\n  color: #D32F2F !important;\n}\n\n.red.darken-3 {\n  background-color: #C62828 !important;\n}\n\n.red-text.text-darken-3 {\n  color: #C62828 !important;\n}\n\n.red.darken-4 {\n  background-color: #B71C1C !important;\n}\n\n.red-text.text-darken-4 {\n  color: #B71C1C !important;\n}\n\n.red.accent-1 {\n  background-color: #FF8A80 !important;\n}\n\n.red-text.text-accent-1 {\n  color: #FF8A80 !important;\n}\n\n.red.accent-2 {\n  background-color: #FF5252 !important;\n}\n\n.red-text.text-accent-2 {\n  color: #FF5252 !important;\n}\n\n.red.accent-3 {\n  background-color: #FF1744 !important;\n}\n\n.red-text.text-accent-3 {\n  color: #FF1744 !important;\n}\n\n.red.accent-4 {\n  background-color: #D50000 !important;\n}\n\n.red-text.text-accent-4 {\n  color: #D50000 !important;\n}\n\n.pink {\n  background-color: #e91e63 !important;\n}\n\n.pink-text {\n  color: #e91e63 !important;\n}\n\n.pink.lighten-5 {\n  background-color: #fce4ec !important;\n}\n\n.pink-text.text-lighten-5 {\n  color: #fce4ec !important;\n}\n\n.pink.lighten-4 {\n  background-color: #f8bbd0 !important;\n}\n\n.pink-text.text-lighten-4 {\n  color: #f8bbd0 !important;\n}\n\n.pink.lighten-3 {\n  background-color: #f48fb1 !important;\n}\n\n.pink-text.text-lighten-3 {\n  color: #f48fb1 !important;\n}\n\n.pink.lighten-2 {\n  background-color: #f06292 !important;\n}\n\n.pink-text.text-lighten-2 {\n  color: #f06292 !important;\n}\n\n.pink.lighten-1 {\n  background-color: #ec407a !important;\n}\n\n.pink-text.text-lighten-1 {\n  color: #ec407a !important;\n}\n\n.pink.darken-1 {\n  background-color: #d81b60 !important;\n}\n\n.pink-text.text-darken-1 {\n  color: #d81b60 !important;\n}\n\n.pink.darken-2 {\n  background-color: #c2185b !important;\n}\n\n.pink-text.text-darken-2 {\n  color: #c2185b !important;\n}\n\n.pink.darken-3 {\n  background-color: #ad1457 !important;\n}\n\n.pink-text.text-darken-3 {\n  color: #ad1457 !important;\n}\n\n.pink.darken-4 {\n  background-color: #880e4f !important;\n}\n\n.pink-text.text-darken-4 {\n  color: #880e4f !important;\n}\n\n.pink.accent-1 {\n  background-color: #ff80ab !important;\n}\n\n.pink-text.text-accent-1 {\n  color: #ff80ab !important;\n}\n\n.pink.accent-2 {\n  background-color: #ff4081 !important;\n}\n\n.pink-text.text-accent-2 {\n  color: #ff4081 !important;\n}\n\n.pink.accent-3 {\n  background-color: #f50057 !important;\n}\n\n.pink-text.text-accent-3 {\n  color: #f50057 !important;\n}\n\n.pink.accent-4 {\n  background-color: #c51162 !important;\n}\n\n.pink-text.text-accent-4 {\n  color: #c51162 !important;\n}\n\n.purple {\n  background-color: #9c27b0 !important;\n}\n\n.purple-text {\n  color: #9c27b0 !important;\n}\n\n.purple.lighten-5 {\n  background-color: #f3e5f5 !important;\n}\n\n.purple-text.text-lighten-5 {\n  color: #f3e5f5 !important;\n}\n\n.purple.lighten-4 {\n  background-color: #e1bee7 !important;\n}\n\n.purple-text.text-lighten-4 {\n  color: #e1bee7 !important;\n}\n\n.purple.lighten-3 {\n  background-color: #ce93d8 !important;\n}\n\n.purple-text.text-lighten-3 {\n  color: #ce93d8 !important;\n}\n\n.purple.lighten-2 {\n  background-color: #ba68c8 !important;\n}\n\n.purple-text.text-lighten-2 {\n  color: #ba68c8 !important;\n}\n\n.purple.lighten-1 {\n  background-color: #ab47bc !important;\n}\n\n.purple-text.text-lighten-1 {\n  color: #ab47bc !important;\n}\n\n.purple.darken-1 {\n  background-color: #8e24aa !important;\n}\n\n.purple-text.text-darken-1 {\n  color: #8e24aa !important;\n}\n\n.purple.darken-2 {\n  background-color: #7b1fa2 !important;\n}\n\n.purple-text.text-darken-2 {\n  color: #7b1fa2 !important;\n}\n\n.purple.darken-3 {\n  background-color: #6a1b9a !important;\n}\n\n.purple-text.text-darken-3 {\n  color: #6a1b9a !important;\n}\n\n.purple.darken-4 {\n  background-color: #4a148c !important;\n}\n\n.purple-text.text-darken-4 {\n  color: #4a148c !important;\n}\n\n.purple.accent-1 {\n  background-color: #ea80fc !important;\n}\n\n.purple-text.text-accent-1 {\n  color: #ea80fc !important;\n}\n\n.purple.accent-2 {\n  background-color: #e040fb !important;\n}\n\n.purple-text.text-accent-2 {\n  color: #e040fb !important;\n}\n\n.purple.accent-3 {\n  background-color: #d500f9 !important;\n}\n\n.purple-text.text-accent-3 {\n  color: #d500f9 !important;\n}\n\n.purple.accent-4 {\n  background-color: #aa00ff !important;\n}\n\n.purple-text.text-accent-4 {\n  color: #aa00ff !important;\n}\n\n.deep-purple {\n  background-color: #673ab7 !important;\n}\n\n.deep-purple-text {\n  color: #673ab7 !important;\n}\n\n.deep-purple.lighten-5 {\n  background-color: #ede7f6 !important;\n}\n\n.deep-purple-text.text-lighten-5 {\n  color: #ede7f6 !important;\n}\n\n.deep-purple.lighten-4 {\n  background-color: #d1c4e9 !important;\n}\n\n.deep-purple-text.text-lighten-4 {\n  color: #d1c4e9 !important;\n}\n\n.deep-purple.lighten-3 {\n  background-color: #b39ddb !important;\n}\n\n.deep-purple-text.text-lighten-3 {\n  color: #b39ddb !important;\n}\n\n.deep-purple.lighten-2 {\n  background-color: #9575cd !important;\n}\n\n.deep-purple-text.text-lighten-2 {\n  color: #9575cd !important;\n}\n\n.deep-purple.lighten-1 {\n  background-color: #7e57c2 !important;\n}\n\n.deep-purple-text.text-lighten-1 {\n  color: #7e57c2 !important;\n}\n\n.deep-purple.darken-1 {\n  background-color: #5e35b1 !important;\n}\n\n.deep-purple-text.text-darken-1 {\n  color: #5e35b1 !important;\n}\n\n.deep-purple.darken-2 {\n  background-color: #512da8 !important;\n}\n\n.deep-purple-text.text-darken-2 {\n  color: #512da8 !important;\n}\n\n.deep-purple.darken-3 {\n  background-color: #4527a0 !important;\n}\n\n.deep-purple-text.text-darken-3 {\n  color: #4527a0 !important;\n}\n\n.deep-purple.darken-4 {\n  background-color: #311b92 !important;\n}\n\n.deep-purple-text.text-darken-4 {\n  color: #311b92 !important;\n}\n\n.deep-purple.accent-1 {\n  background-color: #b388ff !important;\n}\n\n.deep-purple-text.text-accent-1 {\n  color: #b388ff !important;\n}\n\n.deep-purple.accent-2 {\n  background-color: #7c4dff !important;\n}\n\n.deep-purple-text.text-accent-2 {\n  color: #7c4dff !important;\n}\n\n.deep-purple.accent-3 {\n  background-color: #651fff !important;\n}\n\n.deep-purple-text.text-accent-3 {\n  color: #651fff !important;\n}\n\n.deep-purple.accent-4 {\n  background-color: #6200ea !important;\n}\n\n.deep-purple-text.text-accent-4 {\n  color: #6200ea !important;\n}\n\n.indigo {\n  background-color: #3f51b5 !important;\n}\n\n.indigo-text {\n  color: #3f51b5 !important;\n}\n\n.indigo.lighten-5 {\n  background-color: #e8eaf6 !important;\n}\n\n.indigo-text.text-lighten-5 {\n  color: #e8eaf6 !important;\n}\n\n.indigo.lighten-4 {\n  background-color: #c5cae9 !important;\n}\n\n.indigo-text.text-lighten-4 {\n  color: #c5cae9 !important;\n}\n\n.indigo.lighten-3 {\n  background-color: #9fa8da !important;\n}\n\n.indigo-text.text-lighten-3 {\n  color: #9fa8da !important;\n}\n\n.indigo.lighten-2 {\n  background-color: #7986cb !important;\n}\n\n.indigo-text.text-lighten-2 {\n  color: #7986cb !important;\n}\n\n.indigo.lighten-1 {\n  background-color: #5c6bc0 !important;\n}\n\n.indigo-text.text-lighten-1 {\n  color: #5c6bc0 !important;\n}\n\n.indigo.darken-1 {\n  background-color: #3949ab !important;\n}\n\n.indigo-text.text-darken-1 {\n  color: #3949ab !important;\n}\n\n.indigo.darken-2 {\n  background-color: #303f9f !important;\n}\n\n.indigo-text.text-darken-2 {\n  color: #303f9f !important;\n}\n\n.indigo.darken-3 {\n  background-color: #283593 !important;\n}\n\n.indigo-text.text-darken-3 {\n  color: #283593 !important;\n}\n\n.indigo.darken-4 {\n  background-color: #1a237e !important;\n}\n\n.indigo-text.text-darken-4 {\n  color: #1a237e !important;\n}\n\n.indigo.accent-1 {\n  background-color: #8c9eff !important;\n}\n\n.indigo-text.text-accent-1 {\n  color: #8c9eff !important;\n}\n\n.indigo.accent-2 {\n  background-color: #536dfe !important;\n}\n\n.indigo-text.text-accent-2 {\n  color: #536dfe !important;\n}\n\n.indigo.accent-3 {\n  background-color: #3d5afe !important;\n}\n\n.indigo-text.text-accent-3 {\n  color: #3d5afe !important;\n}\n\n.indigo.accent-4 {\n  background-color: #304ffe !important;\n}\n\n.indigo-text.text-accent-4 {\n  color: #304ffe !important;\n}\n\n.blue {\n  background-color: #2196F3 !important;\n}\n\n.blue-text {\n  color: #2196F3 !important;\n}\n\n.blue.lighten-5 {\n  background-color: #E3F2FD !important;\n}\n\n.blue-text.text-lighten-5 {\n  color: #E3F2FD !important;\n}\n\n.blue.lighten-4 {\n  background-color: #BBDEFB !important;\n}\n\n.blue-text.text-lighten-4 {\n  color: #BBDEFB !important;\n}\n\n.blue.lighten-3 {\n  background-color: #90CAF9 !important;\n}\n\n.blue-text.text-lighten-3 {\n  color: #90CAF9 !important;\n}\n\n.blue.lighten-2 {\n  background-color: #64B5F6 !important;\n}\n\n.blue-text.text-lighten-2 {\n  color: #64B5F6 !important;\n}\n\n.blue.lighten-1 {\n  background-color: #42A5F5 !important;\n}\n\n.blue-text.text-lighten-1 {\n  color: #42A5F5 !important;\n}\n\n.blue.darken-1 {\n  background-color: #1E88E5 !important;\n}\n\n.blue-text.text-darken-1 {\n  color: #1E88E5 !important;\n}\n\n.blue.darken-2 {\n  background-color: #1976D2 !important;\n}\n\n.blue-text.text-darken-2 {\n  color: #1976D2 !important;\n}\n\n.blue.darken-3 {\n  background-color: #1565C0 !important;\n}\n\n.blue-text.text-darken-3 {\n  color: #1565C0 !important;\n}\n\n.blue.darken-4 {\n  background-color: #0D47A1 !important;\n}\n\n.blue-text.text-darken-4 {\n  color: #0D47A1 !important;\n}\n\n.blue.accent-1 {\n  background-color: #82B1FF !important;\n}\n\n.blue-text.text-accent-1 {\n  color: #82B1FF !important;\n}\n\n.blue.accent-2 {\n  background-color: #448AFF !important;\n}\n\n.blue-text.text-accent-2 {\n  color: #448AFF !important;\n}\n\n.blue.accent-3 {\n  background-color: #2979FF !important;\n}\n\n.blue-text.text-accent-3 {\n  color: #2979FF !important;\n}\n\n.blue.accent-4 {\n  background-color: #2962FF !important;\n}\n\n.blue-text.text-accent-4 {\n  color: #2962FF !important;\n}\n\n.light-blue {\n  background-color: #03a9f4 !important;\n}\n\n.light-blue-text {\n  color: #03a9f4 !important;\n}\n\n.light-blue.lighten-5 {\n  background-color: #e1f5fe !important;\n}\n\n.light-blue-text.text-lighten-5 {\n  color: #e1f5fe !important;\n}\n\n.light-blue.lighten-4 {\n  background-color: #b3e5fc !important;\n}\n\n.light-blue-text.text-lighten-4 {\n  color: #b3e5fc !important;\n}\n\n.light-blue.lighten-3 {\n  background-color: #81d4fa !important;\n}\n\n.light-blue-text.text-lighten-3 {\n  color: #81d4fa !important;\n}\n\n.light-blue.lighten-2 {\n  background-color: #4fc3f7 !important;\n}\n\n.light-blue-text.text-lighten-2 {\n  color: #4fc3f7 !important;\n}\n\n.light-blue.lighten-1 {\n  background-color: #29b6f6 !important;\n}\n\n.light-blue-text.text-lighten-1 {\n  color: #29b6f6 !important;\n}\n\n.light-blue.darken-1 {\n  background-color: #039be5 !important;\n}\n\n.light-blue-text.text-darken-1 {\n  color: #039be5 !important;\n}\n\n.light-blue.darken-2 {\n  background-color: #0288d1 !important;\n}\n\n.light-blue-text.text-darken-2 {\n  color: #0288d1 !important;\n}\n\n.light-blue.darken-3 {\n  background-color: #0277bd !important;\n}\n\n.light-blue-text.text-darken-3 {\n  color: #0277bd !important;\n}\n\n.light-blue.darken-4 {\n  background-color: #01579b !important;\n}\n\n.light-blue-text.text-darken-4 {\n  color: #01579b !important;\n}\n\n.light-blue.accent-1 {\n  background-color: #80d8ff !important;\n}\n\n.light-blue-text.text-accent-1 {\n  color: #80d8ff !important;\n}\n\n.light-blue.accent-2 {\n  background-color: #40c4ff !important;\n}\n\n.light-blue-text.text-accent-2 {\n  color: #40c4ff !important;\n}\n\n.light-blue.accent-3 {\n  background-color: #00b0ff !important;\n}\n\n.light-blue-text.text-accent-3 {\n  color: #00b0ff !important;\n}\n\n.light-blue.accent-4 {\n  background-color: #0091ea !important;\n}\n\n.light-blue-text.text-accent-4 {\n  color: #0091ea !important;\n}\n\n.cyan {\n  background-color: #00bcd4 !important;\n}\n\n.cyan-text {\n  color: #00bcd4 !important;\n}\n\n.cyan.lighten-5 {\n  background-color: #e0f7fa !important;\n}\n\n.cyan-text.text-lighten-5 {\n  color: #e0f7fa !important;\n}\n\n.cyan.lighten-4 {\n  background-color: #b2ebf2 !important;\n}\n\n.cyan-text.text-lighten-4 {\n  color: #b2ebf2 !important;\n}\n\n.cyan.lighten-3 {\n  background-color: #80deea !important;\n}\n\n.cyan-text.text-lighten-3 {\n  color: #80deea !important;\n}\n\n.cyan.lighten-2 {\n  background-color: #4dd0e1 !important;\n}\n\n.cyan-text.text-lighten-2 {\n  color: #4dd0e1 !important;\n}\n\n.cyan.lighten-1 {\n  background-color: #26c6da !important;\n}\n\n.cyan-text.text-lighten-1 {\n  color: #26c6da !important;\n}\n\n.cyan.darken-1 {\n  background-color: #00acc1 !important;\n}\n\n.cyan-text.text-darken-1 {\n  color: #00acc1 !important;\n}\n\n.cyan.darken-2 {\n  background-color: #0097a7 !important;\n}\n\n.cyan-text.text-darken-2 {\n  color: #0097a7 !important;\n}\n\n.cyan.darken-3 {\n  background-color: #00838f !important;\n}\n\n.cyan-text.text-darken-3 {\n  color: #00838f !important;\n}\n\n.cyan.darken-4 {\n  background-color: #006064 !important;\n}\n\n.cyan-text.text-darken-4 {\n  color: #006064 !important;\n}\n\n.cyan.accent-1 {\n  background-color: #84ffff !important;\n}\n\n.cyan-text.text-accent-1 {\n  color: #84ffff !important;\n}\n\n.cyan.accent-2 {\n  background-color: #18ffff !important;\n}\n\n.cyan-text.text-accent-2 {\n  color: #18ffff !important;\n}\n\n.cyan.accent-3 {\n  background-color: #00e5ff !important;\n}\n\n.cyan-text.text-accent-3 {\n  color: #00e5ff !important;\n}\n\n.cyan.accent-4 {\n  background-color: #00b8d4 !important;\n}\n\n.cyan-text.text-accent-4 {\n  color: #00b8d4 !important;\n}\n\n.teal {\n  background-color: #009688 !important;\n}\n\n.teal-text {\n  color: #009688 !important;\n}\n\n.teal.lighten-5 {\n  background-color: #e0f2f1 !important;\n}\n\n.teal-text.text-lighten-5 {\n  color: #e0f2f1 !important;\n}\n\n.teal.lighten-4 {\n  background-color: #b2dfdb !important;\n}\n\n.teal-text.text-lighten-4 {\n  color: #b2dfdb !important;\n}\n\n.teal.lighten-3 {\n  background-color: #80cbc4 !important;\n}\n\n.teal-text.text-lighten-3 {\n  color: #80cbc4 !important;\n}\n\n.teal.lighten-2 {\n  background-color: #4db6ac !important;\n}\n\n.teal-text.text-lighten-2 {\n  color: #4db6ac !important;\n}\n\n.teal.lighten-1 {\n  background-color: #26a69a !important;\n}\n\n.teal-text.text-lighten-1 {\n  color: #26a69a !important;\n}\n\n.teal.darken-1 {\n  background-color: #00897b !important;\n}\n\n.teal-text.text-darken-1 {\n  color: #00897b !important;\n}\n\n.teal.darken-2 {\n  background-color: #00796b !important;\n}\n\n.teal-text.text-darken-2 {\n  color: #00796b !important;\n}\n\n.teal.darken-3 {\n  background-color: #00695c !important;\n}\n\n.teal-text.text-darken-3 {\n  color: #00695c !important;\n}\n\n.teal.darken-4 {\n  background-color: #004d40 !important;\n}\n\n.teal-text.text-darken-4 {\n  color: #004d40 !important;\n}\n\n.teal.accent-1 {\n  background-color: #a7ffeb !important;\n}\n\n.teal-text.text-accent-1 {\n  color: #a7ffeb !important;\n}\n\n.teal.accent-2 {\n  background-color: #64ffda !important;\n}\n\n.teal-text.text-accent-2 {\n  color: #64ffda !important;\n}\n\n.teal.accent-3 {\n  background-color: #1de9b6 !important;\n}\n\n.teal-text.text-accent-3 {\n  color: #1de9b6 !important;\n}\n\n.teal.accent-4 {\n  background-color: #00bfa5 !important;\n}\n\n.teal-text.text-accent-4 {\n  color: #00bfa5 !important;\n}\n\n.green {\n  background-color: #4CAF50 !important;\n}\n\n.green-text {\n  color: #4CAF50 !important;\n}\n\n.green.lighten-5 {\n  background-color: #E8F5E9 !important;\n}\n\n.green-text.text-lighten-5 {\n  color: #E8F5E9 !important;\n}\n\n.green.lighten-4 {\n  background-color: #C8E6C9 !important;\n}\n\n.green-text.text-lighten-4 {\n  color: #C8E6C9 !important;\n}\n\n.green.lighten-3 {\n  background-color: #A5D6A7 !important;\n}\n\n.green-text.text-lighten-3 {\n  color: #A5D6A7 !important;\n}\n\n.green.lighten-2 {\n  background-color: #81C784 !important;\n}\n\n.green-text.text-lighten-2 {\n  color: #81C784 !important;\n}\n\n.green.lighten-1 {\n  background-color: #66BB6A !important;\n}\n\n.green-text.text-lighten-1 {\n  color: #66BB6A !important;\n}\n\n.green.darken-1 {\n  background-color: #43A047 !important;\n}\n\n.green-text.text-darken-1 {\n  color: #43A047 !important;\n}\n\n.green.darken-2 {\n  background-color: #388E3C !important;\n}\n\n.green-text.text-darken-2 {\n  color: #388E3C !important;\n}\n\n.green.darken-3 {\n  background-color: #2E7D32 !important;\n}\n\n.green-text.text-darken-3 {\n  color: #2E7D32 !important;\n}\n\n.green.darken-4 {\n  background-color: #1B5E20 !important;\n}\n\n.green-text.text-darken-4 {\n  color: #1B5E20 !important;\n}\n\n.green.accent-1 {\n  background-color: #B9F6CA !important;\n}\n\n.green-text.text-accent-1 {\n  color: #B9F6CA !important;\n}\n\n.green.accent-2 {\n  background-color: #69F0AE !important;\n}\n\n.green-text.text-accent-2 {\n  color: #69F0AE !important;\n}\n\n.green.accent-3 {\n  background-color: #00E676 !important;\n}\n\n.green-text.text-accent-3 {\n  color: #00E676 !important;\n}\n\n.green.accent-4 {\n  background-color: #00C853 !important;\n}\n\n.green-text.text-accent-4 {\n  color: #00C853 !important;\n}\n\n.light-green {\n  background-color: #8bc34a !important;\n}\n\n.light-green-text {\n  color: #8bc34a !important;\n}\n\n.light-green.lighten-5 {\n  background-color: #f1f8e9 !important;\n}\n\n.light-green-text.text-lighten-5 {\n  color: #f1f8e9 !important;\n}\n\n.light-green.lighten-4 {\n  background-color: #dcedc8 !important;\n}\n\n.light-green-text.text-lighten-4 {\n  color: #dcedc8 !important;\n}\n\n.light-green.lighten-3 {\n  background-color: #c5e1a5 !important;\n}\n\n.light-green-text.text-lighten-3 {\n  color: #c5e1a5 !important;\n}\n\n.light-green.lighten-2 {\n  background-color: #aed581 !important;\n}\n\n.light-green-text.text-lighten-2 {\n  color: #aed581 !important;\n}\n\n.light-green.lighten-1 {\n  background-color: #9ccc65 !important;\n}\n\n.light-green-text.text-lighten-1 {\n  color: #9ccc65 !important;\n}\n\n.light-green.darken-1 {\n  background-color: #7cb342 !important;\n}\n\n.light-green-text.text-darken-1 {\n  color: #7cb342 !important;\n}\n\n.light-green.darken-2 {\n  background-color: #689f38 !important;\n}\n\n.light-green-text.text-darken-2 {\n  color: #689f38 !important;\n}\n\n.light-green.darken-3 {\n  background-color: #558b2f !important;\n}\n\n.light-green-text.text-darken-3 {\n  color: #558b2f !important;\n}\n\n.light-green.darken-4 {\n  background-color: #33691e !important;\n}\n\n.light-green-text.text-darken-4 {\n  color: #33691e !important;\n}\n\n.light-green.accent-1 {\n  background-color: #ccff90 !important;\n}\n\n.light-green-text.text-accent-1 {\n  color: #ccff90 !important;\n}\n\n.light-green.accent-2 {\n  background-color: #b2ff59 !important;\n}\n\n.light-green-text.text-accent-2 {\n  color: #b2ff59 !important;\n}\n\n.light-green.accent-3 {\n  background-color: #76ff03 !important;\n}\n\n.light-green-text.text-accent-3 {\n  color: #76ff03 !important;\n}\n\n.light-green.accent-4 {\n  background-color: #64dd17 !important;\n}\n\n.light-green-text.text-accent-4 {\n  color: #64dd17 !important;\n}\n\n.lime {\n  background-color: #cddc39 !important;\n}\n\n.lime-text {\n  color: #cddc39 !important;\n}\n\n.lime.lighten-5 {\n  background-color: #f9fbe7 !important;\n}\n\n.lime-text.text-lighten-5 {\n  color: #f9fbe7 !important;\n}\n\n.lime.lighten-4 {\n  background-color: #f0f4c3 !important;\n}\n\n.lime-text.text-lighten-4 {\n  color: #f0f4c3 !important;\n}\n\n.lime.lighten-3 {\n  background-color: #e6ee9c !important;\n}\n\n.lime-text.text-lighten-3 {\n  color: #e6ee9c !important;\n}\n\n.lime.lighten-2 {\n  background-color: #dce775 !important;\n}\n\n.lime-text.text-lighten-2 {\n  color: #dce775 !important;\n}\n\n.lime.lighten-1 {\n  background-color: #d4e157 !important;\n}\n\n.lime-text.text-lighten-1 {\n  color: #d4e157 !important;\n}\n\n.lime.darken-1 {\n  background-color: #c0ca33 !important;\n}\n\n.lime-text.text-darken-1 {\n  color: #c0ca33 !important;\n}\n\n.lime.darken-2 {\n  background-color: #afb42b !important;\n}\n\n.lime-text.text-darken-2 {\n  color: #afb42b !important;\n}\n\n.lime.darken-3 {\n  background-color: #9e9d24 !important;\n}\n\n.lime-text.text-darken-3 {\n  color: #9e9d24 !important;\n}\n\n.lime.darken-4 {\n  background-color: #827717 !important;\n}\n\n.lime-text.text-darken-4 {\n  color: #827717 !important;\n}\n\n.lime.accent-1 {\n  background-color: #f4ff81 !important;\n}\n\n.lime-text.text-accent-1 {\n  color: #f4ff81 !important;\n}\n\n.lime.accent-2 {\n  background-color: #eeff41 !important;\n}\n\n.lime-text.text-accent-2 {\n  color: #eeff41 !important;\n}\n\n.lime.accent-3 {\n  background-color: #c6ff00 !important;\n}\n\n.lime-text.text-accent-3 {\n  color: #c6ff00 !important;\n}\n\n.lime.accent-4 {\n  background-color: #aeea00 !important;\n}\n\n.lime-text.text-accent-4 {\n  color: #aeea00 !important;\n}\n\n.yellow {\n  background-color: #ffeb3b !important;\n}\n\n.yellow-text {\n  color: #ffeb3b !important;\n}\n\n.yellow.lighten-5 {\n  background-color: #fffde7 !important;\n}\n\n.yellow-text.text-lighten-5 {\n  color: #fffde7 !important;\n}\n\n.yellow.lighten-4 {\n  background-color: #fff9c4 !important;\n}\n\n.yellow-text.text-lighten-4 {\n  color: #fff9c4 !important;\n}\n\n.yellow.lighten-3 {\n  background-color: #fff59d !important;\n}\n\n.yellow-text.text-lighten-3 {\n  color: #fff59d !important;\n}\n\n.yellow.lighten-2 {\n  background-color: #fff176 !important;\n}\n\n.yellow-text.text-lighten-2 {\n  color: #fff176 !important;\n}\n\n.yellow.lighten-1 {\n  background-color: #ffee58 !important;\n}\n\n.yellow-text.text-lighten-1 {\n  color: #ffee58 !important;\n}\n\n.yellow.darken-1 {\n  background-color: #fdd835 !important;\n}\n\n.yellow-text.text-darken-1 {\n  color: #fdd835 !important;\n}\n\n.yellow.darken-2 {\n  background-color: #fbc02d !important;\n}\n\n.yellow-text.text-darken-2 {\n  color: #fbc02d !important;\n}\n\n.yellow.darken-3 {\n  background-color: #f9a825 !important;\n}\n\n.yellow-text.text-darken-3 {\n  color: #f9a825 !important;\n}\n\n.yellow.darken-4 {\n  background-color: #f57f17 !important;\n}\n\n.yellow-text.text-darken-4 {\n  color: #f57f17 !important;\n}\n\n.yellow.accent-1 {\n  background-color: #ffff8d !important;\n}\n\n.yellow-text.text-accent-1 {\n  color: #ffff8d !important;\n}\n\n.yellow.accent-2 {\n  background-color: #ffff00 !important;\n}\n\n.yellow-text.text-accent-2 {\n  color: #ffff00 !important;\n}\n\n.yellow.accent-3 {\n  background-color: #ffea00 !important;\n}\n\n.yellow-text.text-accent-3 {\n  color: #ffea00 !important;\n}\n\n.yellow.accent-4 {\n  background-color: #ffd600 !important;\n}\n\n.yellow-text.text-accent-4 {\n  color: #ffd600 !important;\n}\n\n.amber {\n  background-color: #ffc107 !important;\n}\n\n.amber-text {\n  color: #ffc107 !important;\n}\n\n.amber.lighten-5 {\n  background-color: #fff8e1 !important;\n}\n\n.amber-text.text-lighten-5 {\n  color: #fff8e1 !important;\n}\n\n.amber.lighten-4 {\n  background-color: #ffecb3 !important;\n}\n\n.amber-text.text-lighten-4 {\n  color: #ffecb3 !important;\n}\n\n.amber.lighten-3 {\n  background-color: #ffe082 !important;\n}\n\n.amber-text.text-lighten-3 {\n  color: #ffe082 !important;\n}\n\n.amber.lighten-2 {\n  background-color: #ffd54f !important;\n}\n\n.amber-text.text-lighten-2 {\n  color: #ffd54f !important;\n}\n\n.amber.lighten-1 {\n  background-color: #ffca28 !important;\n}\n\n.amber-text.text-lighten-1 {\n  color: #ffca28 !important;\n}\n\n.amber.darken-1 {\n  background-color: #ffb300 !important;\n}\n\n.amber-text.text-darken-1 {\n  color: #ffb300 !important;\n}\n\n.amber.darken-2 {\n  background-color: #ffa000 !important;\n}\n\n.amber-text.text-darken-2 {\n  color: #ffa000 !important;\n}\n\n.amber.darken-3 {\n  background-color: #ff8f00 !important;\n}\n\n.amber-text.text-darken-3 {\n  color: #ff8f00 !important;\n}\n\n.amber.darken-4 {\n  background-color: #ff6f00 !important;\n}\n\n.amber-text.text-darken-4 {\n  color: #ff6f00 !important;\n}\n\n.amber.accent-1 {\n  background-color: #ffe57f !important;\n}\n\n.amber-text.text-accent-1 {\n  color: #ffe57f !important;\n}\n\n.amber.accent-2 {\n  background-color: #ffd740 !important;\n}\n\n.amber-text.text-accent-2 {\n  color: #ffd740 !important;\n}\n\n.amber.accent-3 {\n  background-color: #ffc400 !important;\n}\n\n.amber-text.text-accent-3 {\n  color: #ffc400 !important;\n}\n\n.amber.accent-4 {\n  background-color: #ffab00 !important;\n}\n\n.amber-text.text-accent-4 {\n  color: #ffab00 !important;\n}\n\n.orange {\n  background-color: #ff9800 !important;\n}\n\n.orange-text {\n  color: #ff9800 !important;\n}\n\n.orange.lighten-5 {\n  background-color: #fff3e0 !important;\n}\n\n.orange-text.text-lighten-5 {\n  color: #fff3e0 !important;\n}\n\n.orange.lighten-4 {\n  background-color: #ffe0b2 !important;\n}\n\n.orange-text.text-lighten-4 {\n  color: #ffe0b2 !important;\n}\n\n.orange.lighten-3 {\n  background-color: #ffcc80 !important;\n}\n\n.orange-text.text-lighten-3 {\n  color: #ffcc80 !important;\n}\n\n.orange.lighten-2 {\n  background-color: #ffb74d !important;\n}\n\n.orange-text.text-lighten-2 {\n  color: #ffb74d !important;\n}\n\n.orange.lighten-1 {\n  background-color: #ffa726 !important;\n}\n\n.orange-text.text-lighten-1 {\n  color: #ffa726 !important;\n}\n\n.orange.darken-1 {\n  background-color: #fb8c00 !important;\n}\n\n.orange-text.text-darken-1 {\n  color: #fb8c00 !important;\n}\n\n.orange.darken-2 {\n  background-color: #f57c00 !important;\n}\n\n.orange-text.text-darken-2 {\n  color: #f57c00 !important;\n}\n\n.orange.darken-3 {\n  background-color: #ef6c00 !important;\n}\n\n.orange-text.text-darken-3 {\n  color: #ef6c00 !important;\n}\n\n.orange.darken-4 {\n  background-color: #e65100 !important;\n}\n\n.orange-text.text-darken-4 {\n  color: #e65100 !important;\n}\n\n.orange.accent-1 {\n  background-color: #ffd180 !important;\n}\n\n.orange-text.text-accent-1 {\n  color: #ffd180 !important;\n}\n\n.orange.accent-2 {\n  background-color: #ffab40 !important;\n}\n\n.orange-text.text-accent-2 {\n  color: #ffab40 !important;\n}\n\n.orange.accent-3 {\n  background-color: #ff9100 !important;\n}\n\n.orange-text.text-accent-3 {\n  color: #ff9100 !important;\n}\n\n.orange.accent-4 {\n  background-color: #ff6d00 !important;\n}\n\n.orange-text.text-accent-4 {\n  color: #ff6d00 !important;\n}\n\n.deep-orange {\n  background-color: #ff5722 !important;\n}\n\n.deep-orange-text {\n  color: #ff5722 !important;\n}\n\n.deep-orange.lighten-5 {\n  background-color: #fbe9e7 !important;\n}\n\n.deep-orange-text.text-lighten-5 {\n  color: #fbe9e7 !important;\n}\n\n.deep-orange.lighten-4 {\n  background-color: #ffccbc !important;\n}\n\n.deep-orange-text.text-lighten-4 {\n  color: #ffccbc !important;\n}\n\n.deep-orange.lighten-3 {\n  background-color: #ffab91 !important;\n}\n\n.deep-orange-text.text-lighten-3 {\n  color: #ffab91 !important;\n}\n\n.deep-orange.lighten-2 {\n  background-color: #ff8a65 !important;\n}\n\n.deep-orange-text.text-lighten-2 {\n  color: #ff8a65 !important;\n}\n\n.deep-orange.lighten-1 {\n  background-color: #ff7043 !important;\n}\n\n.deep-orange-text.text-lighten-1 {\n  color: #ff7043 !important;\n}\n\n.deep-orange.darken-1 {\n  background-color: #f4511e !important;\n}\n\n.deep-orange-text.text-darken-1 {\n  color: #f4511e !important;\n}\n\n.deep-orange.darken-2 {\n  background-color: #e64a19 !important;\n}\n\n.deep-orange-text.text-darken-2 {\n  color: #e64a19 !important;\n}\n\n.deep-orange.darken-3 {\n  background-color: #d84315 !important;\n}\n\n.deep-orange-text.text-darken-3 {\n  color: #d84315 !important;\n}\n\n.deep-orange.darken-4 {\n  background-color: #bf360c !important;\n}\n\n.deep-orange-text.text-darken-4 {\n  color: #bf360c !important;\n}\n\n.deep-orange.accent-1 {\n  background-color: #ff9e80 !important;\n}\n\n.deep-orange-text.text-accent-1 {\n  color: #ff9e80 !important;\n}\n\n.deep-orange.accent-2 {\n  background-color: #ff6e40 !important;\n}\n\n.deep-orange-text.text-accent-2 {\n  color: #ff6e40 !important;\n}\n\n.deep-orange.accent-3 {\n  background-color: #ff3d00 !important;\n}\n\n.deep-orange-text.text-accent-3 {\n  color: #ff3d00 !important;\n}\n\n.deep-orange.accent-4 {\n  background-color: #dd2c00 !important;\n}\n\n.deep-orange-text.text-accent-4 {\n  color: #dd2c00 !important;\n}\n\n.brown {\n  background-color: #795548 !important;\n}\n\n.brown-text {\n  color: #795548 !important;\n}\n\n.brown.lighten-5 {\n  background-color: #efebe9 !important;\n}\n\n.brown-text.text-lighten-5 {\n  color: #efebe9 !important;\n}\n\n.brown.lighten-4 {\n  background-color: #d7ccc8 !important;\n}\n\n.brown-text.text-lighten-4 {\n  color: #d7ccc8 !important;\n}\n\n.brown.lighten-3 {\n  background-color: #bcaaa4 !important;\n}\n\n.brown-text.text-lighten-3 {\n  color: #bcaaa4 !important;\n}\n\n.brown.lighten-2 {\n  background-color: #a1887f !important;\n}\n\n.brown-text.text-lighten-2 {\n  color: #a1887f !important;\n}\n\n.brown.lighten-1 {\n  background-color: #8d6e63 !important;\n}\n\n.brown-text.text-lighten-1 {\n  color: #8d6e63 !important;\n}\n\n.brown.darken-1 {\n  background-color: #6d4c41 !important;\n}\n\n.brown-text.text-darken-1 {\n  color: #6d4c41 !important;\n}\n\n.brown.darken-2 {\n  background-color: #5d4037 !important;\n}\n\n.brown-text.text-darken-2 {\n  color: #5d4037 !important;\n}\n\n.brown.darken-3 {\n  background-color: #4e342e !important;\n}\n\n.brown-text.text-darken-3 {\n  color: #4e342e !important;\n}\n\n.brown.darken-4 {\n  background-color: #3e2723 !important;\n}\n\n.brown-text.text-darken-4 {\n  color: #3e2723 !important;\n}\n\n.blue-grey {\n  background-color: #607d8b !important;\n}\n\n.blue-grey-text {\n  color: #607d8b !important;\n}\n\n.blue-grey.lighten-5 {\n  background-color: #eceff1 !important;\n}\n\n.blue-grey-text.text-lighten-5 {\n  color: #eceff1 !important;\n}\n\n.blue-grey.lighten-4 {\n  background-color: #cfd8dc !important;\n}\n\n.blue-grey-text.text-lighten-4 {\n  color: #cfd8dc !important;\n}\n\n.blue-grey.lighten-3 {\n  background-color: #b0bec5 !important;\n}\n\n.blue-grey-text.text-lighten-3 {\n  color: #b0bec5 !important;\n}\n\n.blue-grey.lighten-2 {\n  background-color: #90a4ae !important;\n}\n\n.blue-grey-text.text-lighten-2 {\n  color: #90a4ae !important;\n}\n\n.blue-grey.lighten-1 {\n  background-color: #78909c !important;\n}\n\n.blue-grey-text.text-lighten-1 {\n  color: #78909c !important;\n}\n\n.blue-grey.darken-1 {\n  background-color: #546e7a !important;\n}\n\n.blue-grey-text.text-darken-1 {\n  color: #546e7a !important;\n}\n\n.blue-grey.darken-2 {\n  background-color: #455a64 !important;\n}\n\n.blue-grey-text.text-darken-2 {\n  color: #455a64 !important;\n}\n\n.blue-grey.darken-3 {\n  background-color: #37474f !important;\n}\n\n.blue-grey-text.text-darken-3 {\n  color: #37474f !important;\n}\n\n.blue-grey.darken-4 {\n  background-color: #263238 !important;\n}\n\n.blue-grey-text.text-darken-4 {\n  color: #263238 !important;\n}\n\n.grey {\n  background-color: #9e9e9e !important;\n}\n\n.grey-text {\n  color: #9e9e9e !important;\n}\n\n.grey.lighten-5 {\n  background-color: #fafafa !important;\n}\n\n.grey-text.text-lighten-5 {\n  color: #fafafa !important;\n}\n\n.grey.lighten-4 {\n  background-color: #f5f5f5 !important;\n}\n\n.grey-text.text-lighten-4 {\n  color: #f5f5f5 !important;\n}\n\n.grey.lighten-3 {\n  background-color: #eeeeee !important;\n}\n\n.grey-text.text-lighten-3 {\n  color: #eeeeee !important;\n}\n\n.grey.lighten-2 {\n  background-color: #e0e0e0 !important;\n}\n\n.grey-text.text-lighten-2 {\n  color: #e0e0e0 !important;\n}\n\n.grey.lighten-1 {\n  background-color: #bdbdbd !important;\n}\n\n.grey-text.text-lighten-1 {\n  color: #bdbdbd !important;\n}\n\n.grey.darken-1 {\n  background-color: #757575 !important;\n}\n\n.grey-text.text-darken-1 {\n  color: #757575 !important;\n}\n\n.grey.darken-2 {\n  background-color: #616161 !important;\n}\n\n.grey-text.text-darken-2 {\n  color: #616161 !important;\n}\n\n.grey.darken-3 {\n  background-color: #424242 !important;\n}\n\n.grey-text.text-darken-3 {\n  color: #424242 !important;\n}\n\n.grey.darken-4 {\n  background-color: #212121 !important;\n}\n\n.grey-text.text-darken-4 {\n  color: #212121 !important;\n}\n\n.black {\n  background-color: #000000 !important;\n}\n\n.black-text {\n  color: #000000 !important;\n}\n\n.white {\n  background-color: #FFFFFF !important;\n}\n\n.white-text {\n  color: #FFFFFF !important;\n}\n\n.transparent {\n  background-color: transparent !important;\n}\n\n.transparent-text {\n  color: transparent !important;\n}\n\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Set default font family to sans-serif.\n * 2. Prevent iOS and IE text size adjust after device orientation change,\n *    without disabling user zoom.\n */\n\nhtml {\n  font-family: sans-serif;\n  /* 1 */\n  -ms-text-size-adjust: 100%;\n  /* 2 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n\n/**\n * Remove default margin.\n */\n\nbody {\n  margin: 0;\n}\n\n/* HTML5 display definitions\n   ========================================================================== */\n\n/**\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\n * and Firefox.\n * Correct `block` display not defined for `main` in IE 11.\n */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n/**\n * 1. Correct `inline-block` display not defined in IE 8/9.\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n */\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  /* 1 */\n  vertical-align: baseline;\n  /* 2 */\n}\n\n/**\n * Prevent modern browsers from displaying `audio` without controls.\n * Remove excess height in iOS 5 devices.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Address `[hidden]` styling not present in IE 8/9/10.\n * Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n */\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n/* Links\n   ========================================================================== */\n\n/**\n * Remove the gray background color from active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * Improve readability of focused elements when they are also in an\n * active/hover state.\n */\n\na:active,\na:hover {\n  outline: 0;\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n */\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n/**\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n */\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n/**\n * Address styling not present in Safari and Chrome.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Address variable `h1` font-size and margin within `section` and `article`\n * contexts in Firefox 4+, Safari, and Chrome.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/**\n * Address styling not present in IE 8/9.\n */\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n/**\n * Address inconsistent and variable font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove border when inside `a` element in IE 8/9/10.\n */\n\nimg {\n  border: 0;\n}\n\n/**\n * Correct overflow not hidden in IE 9/10/11.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Address margin not present in IE 8/9 and Safari.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * Address differences between Firefox and other browsers.\n */\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n/**\n * Contain overflow in all browsers.\n */\n\npre {\n  overflow: auto;\n}\n\n/**\n * Address odd `em`-unit font size rendering in all browsers.\n */\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\n * styling of `select`, unless a `border` property is set.\n */\n\n/**\n * 1. Correct color not being inherited.\n *    Known issue: affects color of disabled elements.\n * 2. Correct font properties not being inherited.\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n  margin: 0;\n  /* 3 */\n}\n\n/**\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\n */\n\nbutton {\n  overflow: visible;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n * Correct `select` style inheritance in Firefox.\n */\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/**\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n *    and `video` controls.\n * 2. Correct inability to style clickable `input` types in iOS.\n * 3. Improve usability and consistency of cursor style between image-type\n *    `input` and others.\n */\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  /* 2 */\n  cursor: pointer;\n  /* 3 */\n}\n\n/**\n * Re-set default cursor for disabled elements.\n */\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n/**\n * Remove inner padding and border in Firefox 4+.\n */\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n/**\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\n * the UA stylesheet.\n */\n\ninput {\n  line-height: normal;\n}\n\n/**\n * It's recommended that you don't attempt to style these elements.\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\n *\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\n * 2. Remove excess padding in IE 8/9/10.\n */\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\n * `font-size` values of the `input`, it causes the cursor style of the\n * decrement button to change from `default` to `text`.\n */\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n */\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  box-sizing: content-box;\n  /* 2 */\n}\n\n/**\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\n * Safari (but not Chrome) clips the cancel button when the search input has\n * padding (and `textfield` appearance).\n */\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * Define consistent border, margin, and padding.\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\n */\n\nlegend {\n  border: 0;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n\n/**\n * Remove default vertical scrollbar in IE 8/9/10/11.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * Don't inherit the `font-weight` (applied by a rule above).\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n */\n\noptgroup {\n  font-weight: bold;\n}\n\n/* Tables\n   ========================================================================== */\n\n/**\n * Remove most spacing between table cells.\n */\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n/**\n * Media Queries\n * -----------------------------------------------------------------------------\n * A simple mixin for using media queries. Change the values to\n * fit your sites needs.\n *\n * Usage:\n *\n *      header {\n *          @include bp-small() {\n *              display: none;\n *          }\n *          @include bp-huge() {\n *              display: block;\n *          }\n *      }\n */\n\n/**\n * Font size\n * -----------------------------------------------------------------------------\n * This mixin will take a pixel value and convert it into a em value\n * with a pixel fallback.\n *\n * Usage:\n *\n *      p {\n *          @include font-size(16px)\n *      }\n *\n * Output:\n *\n *      p {\n *          font-size: 16px;\n *          font-size: 1em;\n *      }\n */\n\n/**\n * Expand element outside its container\n * -----------------------------------------------------------------------------\n * This mixin will force an element to expand full width even if it has\n * a container. See demo here: http://codepen.io/sebastianekstrom/pen/vNjOao/\n *\n * Usage:\n *\n *      img {\n *          @include expand-full-width(16px)\n *      }\n *\n */\n\n/**\n * Vertical align\n * -----------------------------------------------------------------------------\n * Vertical align any element by using top: 50% with the combination of\n * translateY(-50%). This will push the element 50% down from its parent,\n * as well as pushing itself down 50% of its own height. This will cause\n * the element to vertically align.\n *\n * Usage:\n *\n *      .logotype {\n *          @include vertical-align();\n *      }\n *\n *      .logotype--absolute {\n *          @include vertical-align(absolute);\n *      }\n *\n */\n\n/**\n * Visually hide an element\n * -----------------------------------------------------------------------------\n * This placeholder selector will visually hide an element while\n * still make it accessible for screenreaders.\n *\n * Usage:\n *\n *      p {\n *          @extend %visually-hidden;\n *      }\n *\n */\n\n.visually-hidden {\n  position: absolute !important;\n  overflow: hidden;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  border: 0;\n  clip: rect(1px, 1px, 1px, 1px);\n}\n\n/**\n * Clearfix\n * -----------------------------------------------------------------------------\n * A solid clearfix by Nicolas Gallagher.\n * Source: (http://nicolasgallagher.com/micro-clearfix-hack/)\n *\n * Usage:\n *\n *      p {\n *          @extend %clearfix;\n *      }\n *\n */\n\n.clearfix {\n  *zoom: 1;\n}\n\n.clearfix:before {\n  content: ' ';\n  display: table;\n}\n\n.clearfix:after {\n  content: ' ';\n  display: table;\n  clear: both;\n}\n\n/**\n * flex-misc\n * -----------------------------------------------------------------------------\n *\n */\n\n/**\n* Output media queries in the <body> element for JS-hooks\n* -----------------------------------------------------------------------------\n* More info here: http://zerosixthree.se/detecting-media-queries-with-javascript/\n*/\n\n/* Mixin that will print out the breakpoint names\n * -------------------- */\n\n/* Print our breakpoint names as a pseudo element on the body element\n * -------------------- */\n\n@media only screen and (min-width: 20em) {\n  body:after {\n    content: \"bp-small\";\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 40em) {\n  body:after {\n    content: \"bp-medium\";\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 60em) {\n  body:after {\n    content: \"bp-large\";\n    display: none;\n  }\n}\n\n@media only screen and (min-width: 80em) {\n  body:after {\n    content: \"bp-xl\";\n    display: none;\n  }\n}\n\n/* Components\n * -------------------- */\n\n.container {\n  margin: 0 auto;\n  max-width: calc(1200px + 80px);\n  width: 90%;\n}\n\n@media only screen and (min-width: 601px) {\n  .container {\n    width: 85%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .container {\n    width: 70%;\n  }\n}\n\n.container .row {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n\n.section {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.section.no-pad {\n  padding: 0;\n}\n\n.section.no-pad-bot {\n  padding-bottom: 0;\n}\n\n.section.no-pad-top {\n  padding-top: 0;\n}\n\n.row {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 20px;\n}\n\n.row:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.row .col {\n  float: left;\n  box-sizing: border-box;\n  padding: 0 0.75rem;\n  min-height: 1px;\n}\n\n.row .col[class*=\"pull-\"],\n.row .col[class*=\"push-\"] {\n  position: relative;\n}\n\n.row .col.s1 {\n  width: 8.33333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s2 {\n  width: 16.66667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s3 {\n  width: 25%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s4 {\n  width: 33.33333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s5 {\n  width: 41.66667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s6 {\n  width: 50%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s7 {\n  width: 58.33333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s8 {\n  width: 66.66667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s9 {\n  width: 75%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s10 {\n  width: 83.33333%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s11 {\n  width: 91.66667%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.s12 {\n  width: 100%;\n  margin-left: auto;\n  left: auto;\n  right: auto;\n}\n\n.row .col.offset-s1 {\n  margin-left: 8.33333%;\n}\n\n.row .col.pull-s1 {\n  right: 8.33333%;\n}\n\n.row .col.push-s1 {\n  left: 8.33333%;\n}\n\n.row .col.offset-s2 {\n  margin-left: 16.66667%;\n}\n\n.row .col.pull-s2 {\n  right: 16.66667%;\n}\n\n.row .col.push-s2 {\n  left: 16.66667%;\n}\n\n.row .col.offset-s3 {\n  margin-left: 25%;\n}\n\n.row .col.pull-s3 {\n  right: 25%;\n}\n\n.row .col.push-s3 {\n  left: 25%;\n}\n\n.row .col.offset-s4 {\n  margin-left: 33.33333%;\n}\n\n.row .col.pull-s4 {\n  right: 33.33333%;\n}\n\n.row .col.push-s4 {\n  left: 33.33333%;\n}\n\n.row .col.offset-s5 {\n  margin-left: 41.66667%;\n}\n\n.row .col.pull-s5 {\n  right: 41.66667%;\n}\n\n.row .col.push-s5 {\n  left: 41.66667%;\n}\n\n.row .col.offset-s6 {\n  margin-left: 50%;\n}\n\n.row .col.pull-s6 {\n  right: 50%;\n}\n\n.row .col.push-s6 {\n  left: 50%;\n}\n\n.row .col.offset-s7 {\n  margin-left: 58.33333%;\n}\n\n.row .col.pull-s7 {\n  right: 58.33333%;\n}\n\n.row .col.push-s7 {\n  left: 58.33333%;\n}\n\n.row .col.offset-s8 {\n  margin-left: 66.66667%;\n}\n\n.row .col.pull-s8 {\n  right: 66.66667%;\n}\n\n.row .col.push-s8 {\n  left: 66.66667%;\n}\n\n.row .col.offset-s9 {\n  margin-left: 75%;\n}\n\n.row .col.pull-s9 {\n  right: 75%;\n}\n\n.row .col.push-s9 {\n  left: 75%;\n}\n\n.row .col.offset-s10 {\n  margin-left: 83.33333%;\n}\n\n.row .col.pull-s10 {\n  right: 83.33333%;\n}\n\n.row .col.push-s10 {\n  left: 83.33333%;\n}\n\n.row .col.offset-s11 {\n  margin-left: 91.66667%;\n}\n\n.row .col.pull-s11 {\n  right: 91.66667%;\n}\n\n.row .col.push-s11 {\n  left: 91.66667%;\n}\n\n.row .col.offset-s12 {\n  margin-left: 100%;\n}\n\n.row .col.pull-s12 {\n  right: 100%;\n}\n\n.row .col.push-s12 {\n  left: 100%;\n}\n\n@media only screen and (min-width: 601px) {\n  .row .col.m1 {\n    width: 8.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m2 {\n    width: 16.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m4 {\n    width: 33.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m5 {\n    width: 41.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m7 {\n    width: 58.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m8 {\n    width: 66.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m10 {\n    width: 83.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m11 {\n    width: 91.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.m12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.offset-m1 {\n    margin-left: 8.33333%;\n  }\n\n  .row .col.pull-m1 {\n    right: 8.33333%;\n  }\n\n  .row .col.push-m1 {\n    left: 8.33333%;\n  }\n\n  .row .col.offset-m2 {\n    margin-left: 16.66667%;\n  }\n\n  .row .col.pull-m2 {\n    right: 16.66667%;\n  }\n\n  .row .col.push-m2 {\n    left: 16.66667%;\n  }\n\n  .row .col.offset-m3 {\n    margin-left: 25%;\n  }\n\n  .row .col.pull-m3 {\n    right: 25%;\n  }\n\n  .row .col.push-m3 {\n    left: 25%;\n  }\n\n  .row .col.offset-m4 {\n    margin-left: 33.33333%;\n  }\n\n  .row .col.pull-m4 {\n    right: 33.33333%;\n  }\n\n  .row .col.push-m4 {\n    left: 33.33333%;\n  }\n\n  .row .col.offset-m5 {\n    margin-left: 41.66667%;\n  }\n\n  .row .col.pull-m5 {\n    right: 41.66667%;\n  }\n\n  .row .col.push-m5 {\n    left: 41.66667%;\n  }\n\n  .row .col.offset-m6 {\n    margin-left: 50%;\n  }\n\n  .row .col.pull-m6 {\n    right: 50%;\n  }\n\n  .row .col.push-m6 {\n    left: 50%;\n  }\n\n  .row .col.offset-m7 {\n    margin-left: 58.33333%;\n  }\n\n  .row .col.pull-m7 {\n    right: 58.33333%;\n  }\n\n  .row .col.push-m7 {\n    left: 58.33333%;\n  }\n\n  .row .col.offset-m8 {\n    margin-left: 66.66667%;\n  }\n\n  .row .col.pull-m8 {\n    right: 66.66667%;\n  }\n\n  .row .col.push-m8 {\n    left: 66.66667%;\n  }\n\n  .row .col.offset-m9 {\n    margin-left: 75%;\n  }\n\n  .row .col.pull-m9 {\n    right: 75%;\n  }\n\n  .row .col.push-m9 {\n    left: 75%;\n  }\n\n  .row .col.offset-m10 {\n    margin-left: 83.33333%;\n  }\n\n  .row .col.pull-m10 {\n    right: 83.33333%;\n  }\n\n  .row .col.push-m10 {\n    left: 83.33333%;\n  }\n\n  .row .col.offset-m11 {\n    margin-left: 91.66667%;\n  }\n\n  .row .col.pull-m11 {\n    right: 91.66667%;\n  }\n\n  .row .col.push-m11 {\n    left: 91.66667%;\n  }\n\n  .row .col.offset-m12 {\n    margin-left: 100%;\n  }\n\n  .row .col.pull-m12 {\n    right: 100%;\n  }\n\n  .row .col.push-m12 {\n    left: 100%;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .row .col.l1 {\n    width: 8.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l2 {\n    width: 16.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l3 {\n    width: 25%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l4 {\n    width: 33.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l5 {\n    width: 41.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l6 {\n    width: 50%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l7 {\n    width: 58.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l8 {\n    width: 66.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l9 {\n    width: 75%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l10 {\n    width: 83.33333%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l11 {\n    width: 91.66667%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.l12 {\n    width: 100%;\n    margin-left: auto;\n    left: auto;\n    right: auto;\n  }\n\n  .row .col.offset-l1 {\n    margin-left: 8.33333%;\n  }\n\n  .row .col.pull-l1 {\n    right: 8.33333%;\n  }\n\n  .row .col.push-l1 {\n    left: 8.33333%;\n  }\n\n  .row .col.offset-l2 {\n    margin-left: 16.66667%;\n  }\n\n  .row .col.pull-l2 {\n    right: 16.66667%;\n  }\n\n  .row .col.push-l2 {\n    left: 16.66667%;\n  }\n\n  .row .col.offset-l3 {\n    margin-left: 25%;\n  }\n\n  .row .col.pull-l3 {\n    right: 25%;\n  }\n\n  .row .col.push-l3 {\n    left: 25%;\n  }\n\n  .row .col.offset-l4 {\n    margin-left: 33.33333%;\n  }\n\n  .row .col.pull-l4 {\n    right: 33.33333%;\n  }\n\n  .row .col.push-l4 {\n    left: 33.33333%;\n  }\n\n  .row .col.offset-l5 {\n    margin-left: 41.66667%;\n  }\n\n  .row .col.pull-l5 {\n    right: 41.66667%;\n  }\n\n  .row .col.push-l5 {\n    left: 41.66667%;\n  }\n\n  .row .col.offset-l6 {\n    margin-left: 50%;\n  }\n\n  .row .col.pull-l6 {\n    right: 50%;\n  }\n\n  .row .col.push-l6 {\n    left: 50%;\n  }\n\n  .row .col.offset-l7 {\n    margin-left: 58.33333%;\n  }\n\n  .row .col.pull-l7 {\n    right: 58.33333%;\n  }\n\n  .row .col.push-l7 {\n    left: 58.33333%;\n  }\n\n  .row .col.offset-l8 {\n    margin-left: 66.66667%;\n  }\n\n  .row .col.pull-l8 {\n    right: 66.66667%;\n  }\n\n  .row .col.push-l8 {\n    left: 66.66667%;\n  }\n\n  .row .col.offset-l9 {\n    margin-left: 75%;\n  }\n\n  .row .col.pull-l9 {\n    right: 75%;\n  }\n\n  .row .col.push-l9 {\n    left: 75%;\n  }\n\n  .row .col.offset-l10 {\n    margin-left: 83.33333%;\n  }\n\n  .row .col.pull-l10 {\n    right: 83.33333%;\n  }\n\n  .row .col.push-l10 {\n    left: 83.33333%;\n  }\n\n  .row .col.offset-l11 {\n    margin-left: 91.66667%;\n  }\n\n  .row .col.pull-l11 {\n    right: 91.66667%;\n  }\n\n  .row .col.push-l11 {\n    left: 91.66667%;\n  }\n\n  .row .col.offset-l12 {\n    margin-left: 100%;\n  }\n\n  .row .col.pull-l12 {\n    right: 100%;\n  }\n\n  .row .col.push-l12 {\n    left: 100%;\n  }\n}\n\n.flex {\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  display: flex;\n}\n\n.flex-inline {\n  display: -ms-inline-flexbox;\n  display: -webkit-inline-flex;\n  display: inline-flex;\n}\n\n/*\n * Fixes initial flex-shrink value in IE10\n */\n\n.flex > *,\n.flex-inline > * {\n  -ms-flex-negative: 1;\n}\n\n/* Alignment\n ========================================================================== */\n\n/*\n * Vertical alignment\n * Default value is `stretch`\n */\n\n.flex-top {\n  -ms-flex-align: start;\n  -webkit-align-items: flex-start;\n  align-items: flex-start;\n}\n\n.flex-middle {\n  -ms-flex-align: center;\n  -webkit-align-items: center;\n  align-items: center;\n}\n\n.flex-bottom {\n  -ms-flex-align: end;\n  -webkit-align-items: flex-end;\n  align-items: flex-end;\n}\n\n/*\n * Horizontal alignment\n * Default value is `flex-start`\n */\n\n.flex-center {\n  -ms-flex-pack: center;\n  -webkit-justify-content: center;\n  justify-content: center;\n}\n\n.flex-right {\n  -ms-flex-pack: end;\n  -webkit-justify-content: flex-end;\n  justify-content: flex-end;\n}\n\n.flex-space-between {\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-between;\n  justify-content: space-between;\n}\n\n.flex-space-around {\n  -ms-flex-pack: distribute;\n  -webkit-justify-content: space-around;\n  justify-content: space-around;\n}\n\n/* Direction\n ========================================================================== */\n\n.flex-row-reverse {\n  -ms-flex-direction: row-reverse;\n  -webkit-flex-direction: row-reverse;\n  flex-direction: row-reverse;\n}\n\n.flex-column {\n  -ms-flex-direction: column;\n  -webkit-flex-direction: column;\n  flex-direction: column;\n}\n\n.flex-column-reverse {\n  -ms-flex-direction: column-reverse;\n  -webkit-flex-direction: column-reverse;\n  flex-direction: column-reverse;\n}\n\n/* Wrap\n ========================================================================== */\n\n.flex-nowrap {\n  -ms-flex-wrap: nowrap;\n  -webkit-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n}\n\n.flex-wrap {\n  -ms-flex-wrap: wrap;\n  -webkit-flex-wrap: wrap;\n  flex-wrap: wrap;\n}\n\n.flex-wrap-reverse {\n  -ms-flex-wrap: wrap-reverse;\n  -webkit-flex-wrap: wrap-reverse;\n  flex-wrap: wrap-reverse;\n}\n\n/*\n * Horizontal alignment\n * Default value is `stretch`\n */\n\n.flex-wrap-top {\n  -ms-flex-line-pack: start;\n  -webkit-align-content: flex-start;\n  align-content: flex-start;\n}\n\n.flex-wrap-middle {\n  -ms-flex-line-pack: center;\n  -webkit-align-content: center;\n  align-content: center;\n}\n\n.flex-wrap-bottom {\n  -ms-flex-line-pack: end;\n  -webkit-align-content: flex-end;\n  align-content: flex-end;\n}\n\n.flex-wrap-space-between {\n  -ms-flex-line-pack: justify;\n  -webkit-align-content: space-between;\n  align-content: space-between;\n}\n\n.flex-wrap-space-around {\n  -ms-flex-line-pack: distribute;\n  -webkit-align-content: space-around;\n  align-content: space-around;\n}\n\n/* Item ordering\n ========================================================================== */\n\n/*\n * Default is 0\n */\n\n.flex-order-first {\n  -ms-flex-order: -1;\n  -webkit-order: -1;\n  order: -1;\n}\n\n.flex-order-last {\n  -ms-flex-order: 99;\n  -webkit-order: 99;\n  order: 99;\n}\n\n/* Phone landscape and bigger */\n\n@media only screen and (min-width: 480px) {\n  .flex-order-first-small {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n\n  .flex-order-last-small {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n\n/* Tablet and bigger */\n\n@media only screen and (min-width: 601px) {\n  .flex-order-first-medium {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n\n  .flex-order-last-medium {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n\n/* Desktop and bigger */\n\n@media only screen and (min-width: 993px) {\n  .flex-order-first-large {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n\n  .flex-order-last-large {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n\n/* Large screen and bigger */\n\n@media only screen and (min-width: 1201px) {\n  .flex-order-first-xlarge {\n    -ms-flex-order: -1;\n    -webkit-order: -1;\n    order: -1;\n  }\n\n  .flex-order-last-xlarge {\n    -ms-flex-order: 99;\n    -webkit-order: 99;\n    order: 99;\n  }\n}\n\n/* Item dimensions\n ========================================================================== */\n\n/*\n * Initial: 0 1 auto\n * Content dimensions, but shrinks\n */\n\n/*\n * No Flex: 0 0 auto\n * Content dimensions\n */\n\n.flex-item-none {\n  -ms-flex: none;\n  -webkit-flex: none;\n  flex: none;\n}\n\n/*\n * Relative Flex: 1 1 auto\n * Space is allocated considering content\n * 1. Fixes flex-shrink value in IE10\n */\n\n.flex-item-auto {\n  -ms-flex: auto;\n  -webkit-flex: auto;\n  flex: auto;\n  /* 1 */\n  -ms-flex-negative: 1;\n}\n\n/*\n * Absolute Flex: 1 1 0%\n * Space is allocated solely based on flex\n */\n\n.flex-item-1 {\n  -ms-flex: 1;\n  -webkit-flex: 1;\n  flex: 1;\n}\n\n.btn,\n.btn-large,\n.btn-flat {\n  border: none;\n  border-radius: 2px;\n  display: inline-block;\n  height: 36px;\n  line-height: 36px;\n  padding: 0 2rem;\n  text-transform: uppercase;\n  vertical-align: middle;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.btn-flat.disabled,\n.btn-flat:disabled,\n.btn-flat[disabled],\n.btn-floating.disabled,\n.btn-floating:disabled,\n.btn-floating[disabled],\n.btn-large.disabled,\n.btn-large:disabled,\n.btn-large[disabled],\n.btn.disabled,\n.disabled.btn-large,\n.btn:disabled,\n.btn-large:disabled,\n.btn[disabled],\n[disabled].btn-large {\n  pointer-events: none;\n  background-color: #DFDFDF !important;\n  box-shadow: none;\n  color: #9F9F9F !important;\n  cursor: default;\n}\n\n.btn-flat.disabled:hover,\n.btn-flat:disabled:hover,\n.btn-flat[disabled]:hover,\n.btn-floating.disabled:hover,\n.btn-floating:disabled:hover,\n.btn-floating[disabled]:hover,\n.btn-large.disabled:hover,\n.btn-large:disabled:hover,\n.btn-large[disabled]:hover,\n.btn.disabled:hover,\n.disabled.btn-large:hover,\n.btn:disabled:hover,\n.btn-large:disabled:hover,\n.btn[disabled]:hover,\n[disabled].btn-large:hover {\n  background-color: #DFDFDF !important;\n  color: #9F9F9F !important;\n}\n\n.btn,\n.btn-large,\n.btn-flat,\n.btn-floating,\n.btn-large {\n  outline: 0;\n}\n\n.btn i,\n.btn-large i,\n.btn-flat i,\n.btn-floating i,\n.btn-large i {\n  font-size: 1.3rem;\n  line-height: inherit;\n}\n\n.btn:focus,\n.btn-large:focus,\n.btn-floating:focus {\n  background-color: #ab154c;\n}\n\n.btn,\n.btn-large {\n  text-decoration: none;\n  color: #fff;\n  background-color: #d81b60;\n  text-align: center;\n  letter-spacing: 0.5px;\n  transition: 0.2s ease-out;\n  cursor: pointer;\n}\n\n.btn:hover,\n.btn-large:hover {\n  background-color: #e4286d;\n}\n\n.btn-floating {\n  display: inline-block;\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  padding: 0;\n  background-color: #d81b60;\n  border-radius: 50%;\n  transition: 0.3s;\n  cursor: pointer;\n  vertical-align: middle;\n}\n\n.btn-floating:hover {\n  background-color: #d81b60;\n}\n\n.btn-floating:before {\n  border-radius: 0;\n}\n\n.btn-floating.btn-large {\n  width: 56px;\n  height: 56px;\n}\n\n.btn-floating.btn-large i {\n  line-height: 56px;\n}\n\n.btn-floating.halfway-fab {\n  position: absolute;\n  right: 24px;\n  bottom: 0;\n  transform: translateY(50%);\n}\n\n.btn-floating.halfway-fab.left {\n  right: auto;\n  left: 24px;\n}\n\n.btn-floating i {\n  width: inherit;\n  display: inline-block;\n  text-align: center;\n  color: #fff;\n  font-size: 1.6rem;\n  line-height: 40px;\n}\n\nbutton.btn-floating {\n  border: none;\n}\n\n.fixed-action-btn {\n  position: fixed;\n  right: 23px;\n  bottom: 23px;\n  padding-top: 15px;\n  margin-bottom: 0;\n  z-index: 998;\n}\n\n.fixed-action-btn.active ul {\n  visibility: visible;\n}\n\n.fixed-action-btn.horizontal {\n  padding: 0 0 0 15px;\n}\n\n.fixed-action-btn.horizontal ul {\n  text-align: right;\n  right: 64px;\n  top: 50%;\n  transform: translateY(-50%);\n  height: 100%;\n  left: auto;\n  width: 500px;\n  /*width 100% only goes to width of button container */\n}\n\n.fixed-action-btn.horizontal ul li {\n  display: inline-block;\n  margin: 15px 15px 0 0;\n}\n\n.fixed-action-btn.toolbar {\n  padding: 0;\n  height: 56px;\n}\n\n.fixed-action-btn.toolbar.active > a i {\n  opacity: 0;\n}\n\n.fixed-action-btn.toolbar ul {\n  display: flex;\n  top: 0;\n  bottom: 0;\n}\n\n.fixed-action-btn.toolbar ul li {\n  flex: 1;\n  display: inline-block;\n  margin: 0;\n  height: 100%;\n  transition: none;\n}\n\n.fixed-action-btn.toolbar ul li a {\n  display: block;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background-color: transparent;\n  box-shadow: none;\n  color: #fff;\n  line-height: 56px;\n  z-index: 1;\n}\n\n.fixed-action-btn.toolbar ul li a i {\n  line-height: inherit;\n}\n\n.fixed-action-btn ul {\n  left: 0;\n  right: 0;\n  text-align: center;\n  position: absolute;\n  bottom: 64px;\n  margin: 0;\n  visibility: hidden;\n}\n\n.fixed-action-btn ul li {\n  margin-bottom: 15px;\n}\n\n.fixed-action-btn ul a.btn-floating {\n  opacity: 0;\n}\n\n.fixed-action-btn .fab-backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: 40px;\n  height: 40px;\n  background-color: #d81b60;\n  border-radius: 50%;\n  transform: scale(0);\n}\n\n.btn-flat {\n  box-shadow: none;\n  background-color: transparent;\n  color: #343434;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.btn-flat:active,\n.btn-flat:focus {\n  background-color: transparent;\n}\n\n.btn-flat:focus,\n.btn-flat:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: none;\n}\n\n.btn-flat:active {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.btn-flat.disabled {\n  background-color: transparent !important;\n  color: #b3b3b3 !important;\n  cursor: default;\n}\n\n.btn-large {\n  height: 54px;\n  line-height: 54px;\n}\n\n.btn-large i {\n  font-size: 1.6rem;\n}\n\n.btn-block {\n  display: block;\n}\n\n/**\n * Forms\n * -----------------------------------------------------------------------------\n */\n\ninput[type=text],\ninput[type=search],\ninput[type=url],\ninput[type=email],\ninput[type=number],\ntextarea {\n  width: 100%;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nselect:focus {\n  outline: 1px solid #fce7ee;\n}\n\nbutton:focus {\n  outline: none;\n  background-color: #e4246a;\n}\n\nlabel {\n  font-size: 0.8rem;\n  color: #9e9e9e;\n}\n\n/* Text Inputs + Textarea\n   ========================================================================== */\n\n/* Style Placeholders */\n\n::-webkit-input-placeholder {\n  color: #d1d1d1;\n}\n\n:-moz-placeholder {\n  /* Firefox 18- */\n  color: #d1d1d1;\n}\n\n::-moz-placeholder {\n  /* Firefox 19+ */\n  color: #d1d1d1;\n}\n\n:-ms-input-placeholder {\n  color: #d1d1d1;\n}\n\n/* Text inputs */\n\ninput:not([type]),\ninput[type=text],\ninput[type=password],\ninput[type=email],\ninput[type=url],\ninput[type=time],\ninput[type=date],\ninput[type=datetime],\ninput[type=datetime-local],\ninput[type=tel],\ninput[type=number],\ninput[type=search],\ntextarea.materialize-textarea {\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  border-radius: 0;\n  outline: none;\n  height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  box-shadow: none;\n  box-sizing: content-box;\n  transition: all 0.3s;\n}\n\ninput:not([type]):disabled,\ninput:not([type])[readonly=\"readonly\"],\ninput[type=text]:disabled,\ninput[type=text][readonly=\"readonly\"],\ninput[type=password]:disabled,\ninput[type=password][readonly=\"readonly\"],\ninput[type=email]:disabled,\ninput[type=email][readonly=\"readonly\"],\ninput[type=url]:disabled,\ninput[type=url][readonly=\"readonly\"],\ninput[type=time]:disabled,\ninput[type=time][readonly=\"readonly\"],\ninput[type=date]:disabled,\ninput[type=date][readonly=\"readonly\"],\ninput[type=datetime]:disabled,\ninput[type=datetime][readonly=\"readonly\"],\ninput[type=datetime-local]:disabled,\ninput[type=datetime-local][readonly=\"readonly\"],\ninput[type=tel]:disabled,\ninput[type=tel][readonly=\"readonly\"],\ninput[type=number]:disabled,\ninput[type=number][readonly=\"readonly\"],\ninput[type=search]:disabled,\ninput[type=search][readonly=\"readonly\"],\ntextarea.materialize-textarea:disabled,\ntextarea.materialize-textarea[readonly=\"readonly\"] {\n  color: rgba(0, 0, 0, 0.26);\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.26);\n}\n\ninput:not([type]):disabled + label,\ninput:not([type])[readonly=\"readonly\"] + label,\ninput[type=text]:disabled + label,\ninput[type=text][readonly=\"readonly\"] + label,\ninput[type=password]:disabled + label,\ninput[type=password][readonly=\"readonly\"] + label,\ninput[type=email]:disabled + label,\ninput[type=email][readonly=\"readonly\"] + label,\ninput[type=url]:disabled + label,\ninput[type=url][readonly=\"readonly\"] + label,\ninput[type=time]:disabled + label,\ninput[type=time][readonly=\"readonly\"] + label,\ninput[type=date]:disabled + label,\ninput[type=date][readonly=\"readonly\"] + label,\ninput[type=datetime]:disabled + label,\ninput[type=datetime][readonly=\"readonly\"] + label,\ninput[type=datetime-local]:disabled + label,\ninput[type=datetime-local][readonly=\"readonly\"] + label,\ninput[type=tel]:disabled + label,\ninput[type=tel][readonly=\"readonly\"] + label,\ninput[type=number]:disabled + label,\ninput[type=number][readonly=\"readonly\"] + label,\ninput[type=search]:disabled + label,\ninput[type=search][readonly=\"readonly\"] + label,\ntextarea.materialize-textarea:disabled + label,\ntextarea.materialize-textarea[readonly=\"readonly\"] + label {\n  color: rgba(0, 0, 0, 0.26);\n}\n\ninput:not([type]):focus:not([readonly]),\ninput[type=text]:focus:not([readonly]),\ninput[type=password]:focus:not([readonly]),\ninput[type=email]:focus:not([readonly]),\ninput[type=url]:focus:not([readonly]),\ninput[type=time]:focus:not([readonly]),\ninput[type=date]:focus:not([readonly]),\ninput[type=datetime]:focus:not([readonly]),\ninput[type=datetime-local]:focus:not([readonly]),\ninput[type=tel]:focus:not([readonly]),\ninput[type=number]:focus:not([readonly]),\ninput[type=search]:focus:not([readonly]),\ntextarea.materialize-textarea:focus:not([readonly]) {\n  border-bottom: 1px solid #d81b60;\n  box-shadow: 0 1px 0 0 #d81b60;\n}\n\ninput:not([type]):focus:not([readonly]) + label,\ninput[type=text]:focus:not([readonly]) + label,\ninput[type=password]:focus:not([readonly]) + label,\ninput[type=email]:focus:not([readonly]) + label,\ninput[type=url]:focus:not([readonly]) + label,\ninput[type=time]:focus:not([readonly]) + label,\ninput[type=date]:focus:not([readonly]) + label,\ninput[type=datetime]:focus:not([readonly]) + label,\ninput[type=datetime-local]:focus:not([readonly]) + label,\ninput[type=tel]:focus:not([readonly]) + label,\ninput[type=number]:focus:not([readonly]) + label,\ninput[type=search]:focus:not([readonly]) + label,\ntextarea.materialize-textarea:focus:not([readonly]) + label {\n  color: #d81b60;\n}\n\ninput:not([type]).valid,\ninput:not([type]):focus.valid,\ninput[type=text].valid,\ninput[type=text]:focus.valid,\ninput[type=password].valid,\ninput[type=password]:focus.valid,\ninput[type=email].valid,\ninput[type=email]:focus.valid,\ninput[type=url].valid,\ninput[type=url]:focus.valid,\ninput[type=time].valid,\ninput[type=time]:focus.valid,\ninput[type=date].valid,\ninput[type=date]:focus.valid,\ninput[type=datetime].valid,\ninput[type=datetime]:focus.valid,\ninput[type=datetime-local].valid,\ninput[type=datetime-local]:focus.valid,\ninput[type=tel].valid,\ninput[type=tel]:focus.valid,\ninput[type=number].valid,\ninput[type=number]:focus.valid,\ninput[type=search].valid,\ninput[type=search]:focus.valid,\ntextarea.materialize-textarea.valid,\ntextarea.materialize-textarea:focus.valid {\n  border-bottom: 1px solid #4CAF50;\n  box-shadow: 0 1px 0 0 #4CAF50;\n}\n\ninput:not([type]).valid + label:after,\ninput:not([type]):focus.valid + label:after,\ninput[type=text].valid + label:after,\ninput[type=text]:focus.valid + label:after,\ninput[type=password].valid + label:after,\ninput[type=password]:focus.valid + label:after,\ninput[type=email].valid + label:after,\ninput[type=email]:focus.valid + label:after,\ninput[type=url].valid + label:after,\ninput[type=url]:focus.valid + label:after,\ninput[type=time].valid + label:after,\ninput[type=time]:focus.valid + label:after,\ninput[type=date].valid + label:after,\ninput[type=date]:focus.valid + label:after,\ninput[type=datetime].valid + label:after,\ninput[type=datetime]:focus.valid + label:after,\ninput[type=datetime-local].valid + label:after,\ninput[type=datetime-local]:focus.valid + label:after,\ninput[type=tel].valid + label:after,\ninput[type=tel]:focus.valid + label:after,\ninput[type=number].valid + label:after,\ninput[type=number]:focus.valid + label:after,\ninput[type=search].valid + label:after,\ninput[type=search]:focus.valid + label:after,\ntextarea.materialize-textarea.valid + label:after,\ntextarea.materialize-textarea:focus.valid + label:after {\n  content: attr(data-success);\n  color: #4CAF50;\n  opacity: 1;\n}\n\ninput:not([type]).invalid,\ninput:not([type]):focus.invalid,\ninput[type=text].invalid,\ninput[type=text]:focus.invalid,\ninput[type=password].invalid,\ninput[type=password]:focus.invalid,\ninput[type=email].invalid,\ninput[type=email]:focus.invalid,\ninput[type=url].invalid,\ninput[type=url]:focus.invalid,\ninput[type=time].invalid,\ninput[type=time]:focus.invalid,\ninput[type=date].invalid,\ninput[type=date]:focus.invalid,\ninput[type=datetime].invalid,\ninput[type=datetime]:focus.invalid,\ninput[type=datetime-local].invalid,\ninput[type=datetime-local]:focus.invalid,\ninput[type=tel].invalid,\ninput[type=tel]:focus.invalid,\ninput[type=number].invalid,\ninput[type=number]:focus.invalid,\ninput[type=search].invalid,\ninput[type=search]:focus.invalid,\ntextarea.materialize-textarea.invalid,\ntextarea.materialize-textarea:focus.invalid {\n  border-bottom: 1px solid #F44336;\n  box-shadow: 0 1px 0 0 #F44336;\n}\n\ninput:not([type]).invalid + label:after,\ninput:not([type]):focus.invalid + label:after,\ninput[type=text].invalid + label:after,\ninput[type=text]:focus.invalid + label:after,\ninput[type=password].invalid + label:after,\ninput[type=password]:focus.invalid + label:after,\ninput[type=email].invalid + label:after,\ninput[type=email]:focus.invalid + label:after,\ninput[type=url].invalid + label:after,\ninput[type=url]:focus.invalid + label:after,\ninput[type=time].invalid + label:after,\ninput[type=time]:focus.invalid + label:after,\ninput[type=date].invalid + label:after,\ninput[type=date]:focus.invalid + label:after,\ninput[type=datetime].invalid + label:after,\ninput[type=datetime]:focus.invalid + label:after,\ninput[type=datetime-local].invalid + label:after,\ninput[type=datetime-local]:focus.invalid + label:after,\ninput[type=tel].invalid + label:after,\ninput[type=tel]:focus.invalid + label:after,\ninput[type=number].invalid + label:after,\ninput[type=number]:focus.invalid + label:after,\ninput[type=search].invalid + label:after,\ninput[type=search]:focus.invalid + label:after,\ntextarea.materialize-textarea.invalid + label:after,\ntextarea.materialize-textarea:focus.invalid + label:after {\n  content: attr(data-error);\n  color: #F44336;\n  opacity: 1;\n}\n\ninput:not([type]).validate + label,\ninput[type=text].validate + label,\ninput[type=password].validate + label,\ninput[type=email].validate + label,\ninput[type=url].validate + label,\ninput[type=time].validate + label,\ninput[type=date].validate + label,\ninput[type=datetime].validate + label,\ninput[type=datetime-local].validate + label,\ninput[type=tel].validate + label,\ninput[type=number].validate + label,\ninput[type=search].validate + label,\ntextarea.materialize-textarea.validate + label {\n  width: 100%;\n  pointer-events: none;\n}\n\ninput:not([type]) + label:after,\ninput[type=text] + label:after,\ninput[type=password] + label:after,\ninput[type=email] + label:after,\ninput[type=url] + label:after,\ninput[type=time] + label:after,\ninput[type=date] + label:after,\ninput[type=datetime] + label:after,\ninput[type=datetime-local] + label:after,\ninput[type=tel] + label:after,\ninput[type=number] + label:after,\ninput[type=search] + label:after,\ntextarea.materialize-textarea + label:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 60px;\n  opacity: 0;\n  transition: .2s opacity ease-out, .2s color ease-out;\n}\n\n.input-field {\n  position: relative;\n  margin-top: 1rem;\n}\n\n.input-field.inline {\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: 5px;\n}\n\n.input-field.inline input,\n.input-field.inline .select-dropdown {\n  margin-bottom: 1rem;\n}\n\n.input-field.col label {\n  left: 0.75rem;\n}\n\n.input-field.col .prefix ~ label,\n.input-field.col .prefix ~ .validate ~ label {\n  width: calc(100% - 3rem - 1.5rem);\n}\n\n.input-field label {\n  color: #9e9e9e;\n  position: absolute;\n  top: 0.8rem;\n  left: 0;\n  font-size: 1rem;\n  cursor: text;\n  transition: .2s ease-out;\n}\n\n.input-field label:not(.label-icon).active {\n  font-size: 0.8rem;\n  transform: translateY(-140%);\n}\n\n.input-field .prefix {\n  position: absolute;\n  width: 3rem;\n  font-size: 2rem;\n  transition: color .2s;\n}\n\n.input-field .prefix.active {\n  color: #d81b60;\n}\n\n.input-field .prefix ~ input,\n.input-field .prefix ~ textarea,\n.input-field .prefix ~ label,\n.input-field .prefix ~ .validate ~ label,\n.input-field .prefix ~ .autocomplete-content {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.input-field .prefix ~ label {\n  margin-left: 3rem;\n}\n\n@media only screen and (max-width: 992px) {\n  .input-field .prefix ~ input {\n    width: 86%;\n    width: calc(100% - 3rem);\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .input-field .prefix ~ input {\n    width: 80%;\n    width: calc(100% - 3rem);\n  }\n}\n\n/* Search Field */\n\n.input-field input[type=search] {\n  display: block;\n  line-height: inherit;\n  padding-left: 4rem;\n  width: calc(100% - 4rem);\n}\n\n.input-field input[type=search]:focus {\n  background-color: #fff;\n  border: 0;\n  box-shadow: none;\n  color: #444;\n}\n\n.input-field input[type=search]:focus + label i,\n.input-field input[type=search]:focus ~ .mdi-navigation-close,\n.input-field input[type=search]:focus ~ .material-icons {\n  color: #444;\n}\n\n.input-field input[type=search] + label {\n  left: 1rem;\n}\n\n.input-field input[type=search] ~ .mdi-navigation-close,\n.input-field input[type=search] ~ .material-icons {\n  position: absolute;\n  top: 0;\n  right: 1rem;\n  color: transparent;\n  cursor: pointer;\n  font-size: 2rem;\n  transition: .3s color;\n}\n\n/* Textarea */\n\ntextarea {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent;\n}\n\ntextarea.materialize-textarea {\n  overflow-y: hidden;\n  /* prevents scroll bar flash */\n  padding: .8rem 0 1.6rem 0;\n  /* prevents text jump on Enter keypress */\n  resize: none;\n  min-height: 3rem;\n}\n\n.hiddendiv {\n  display: none;\n  white-space: pre-wrap;\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  /* future version of deprecated 'word-wrap' */\n  padding-top: 1.2rem;\n  /* prevents text jump on Enter keypress */\n}\n\n/* Autocomplete */\n\n.autocomplete-content {\n  margin-top: -20px;\n  display: block;\n  opacity: 1;\n  position: static;\n}\n\n.autocomplete-content li .highlight {\n  color: #444;\n}\n\n.autocomplete-content li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n}\n\n/* Radio Buttons\n   ========================================================================== */\n\n[type=\"radio\"]:not(:checked),\n[type=\"radio\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n\n[type=\"radio\"]:not(:checked) + label,\n[type=\"radio\"]:checked + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  transition: .28s ease;\n  -khtml-user-select: none;\n  /* webkit (konqueror) browsers */\n  user-select: none;\n}\n\n[type=\"radio\"] + label:before,\n[type=\"radio\"] + label:after {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  margin: 4px;\n  width: 16px;\n  height: 16px;\n  z-index: 0;\n  transition: .28s ease;\n}\n\n/* Unchecked styles */\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after,\n[type=\"radio\"]:checked + label:before,\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border-radius: 50%;\n}\n\n[type=\"radio\"]:not(:checked) + label:before,\n[type=\"radio\"]:not(:checked) + label:after {\n  border: 2px solid #5a5a5a;\n}\n\n[type=\"radio\"]:not(:checked) + label:after {\n  transform: scale(0);\n}\n\n/* Checked styles */\n\n[type=\"radio\"]:checked + label:before {\n  border: 2px solid transparent;\n}\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:before,\n[type=\"radio\"].with-gap:checked + label:after {\n  border: 2px solid #d81b60;\n}\n\n[type=\"radio\"]:checked + label:after,\n[type=\"radio\"].with-gap:checked + label:after {\n  background-color: #d81b60;\n}\n\n[type=\"radio\"]:checked + label:after {\n  transform: scale(1.02);\n}\n\n/* Radio With gap */\n\n[type=\"radio\"].with-gap:checked + label:after {\n  transform: scale(0.5);\n}\n\n/* Focused styles */\n\n[type=\"radio\"].tabbed:focus + label:before {\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n}\n\n/* Disabled Radio With gap */\n\n[type=\"radio\"].with-gap:disabled:checked + label:before {\n  border: 2px solid rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"].with-gap:disabled:checked + label:after {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n/* Disabled style */\n\n[type=\"radio\"]:disabled:not(:checked) + label:before,\n[type=\"radio\"]:disabled:checked + label:before {\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled + label {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled:not(:checked) + label:before {\n  border-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"radio\"]:disabled:checked + label:after {\n  background-color: rgba(0, 0, 0, 0.26);\n  border-color: #BDBDBD;\n}\n\n/* Checkboxes\n   ========================================================================== */\n\n/* CUSTOM CSS CHECKBOXES */\n\nform p {\n  margin-bottom: 10px;\n  text-align: left;\n}\n\nform p:last-child {\n  margin-bottom: 0;\n}\n\n/* Remove default checkbox */\n\n[type=\"checkbox\"]:not(:checked),\n[type=\"checkbox\"]:checked {\n  position: absolute;\n  left: -9999px;\n  opacity: 0;\n}\n\n[type=\"checkbox\"] {\n  /* checkbox aspect */\n}\n\n[type=\"checkbox\"] + label {\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  display: inline-block;\n  height: 25px;\n  line-height: 25px;\n  font-size: 1rem;\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -khtml-user-select: none;\n  /* webkit (konqueror) browsers */\n  -ms-user-select: none;\n  /* IE10+ */\n}\n\n[type=\"checkbox\"] + label:before,\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 18px;\n  height: 18px;\n  z-index: 0;\n  border: 2px solid #5a5a5a;\n  border-radius: 1px;\n  margin-top: 2px;\n  transition: .2s;\n}\n\n[type=\"checkbox\"]:not(.filled-in) + label:after {\n  border: 0;\n  transform: scale(0);\n}\n\n[type=\"checkbox\"]:not(:checked):disabled + label:before {\n  border: none;\n  background-color: rgba(0, 0, 0, 0.26);\n}\n\n[type=\"checkbox\"].tabbed:focus + label:after {\n  transform: scale(1);\n  border: 0;\n  border-radius: 50%;\n  box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"]:checked + label:before {\n  top: -4px;\n  left: -5px;\n  width: 12px;\n  height: 22px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #d81b60;\n  border-bottom: 2px solid #d81b60;\n  transform: rotate(40deg);\n  backface-visibility: hidden;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:checked:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.26);\n}\n\n/* Indeterminate checkbox */\n\n[type=\"checkbox\"]:indeterminate + label:before {\n  top: -11px;\n  left: -12px;\n  width: 10px;\n  height: 22px;\n  border-top: none;\n  border-left: none;\n  border-right: 2px solid #d81b60;\n  border-bottom: none;\n  transform: rotate(90deg);\n  backface-visibility: hidden;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"]:indeterminate:disabled + label:before {\n  border-right: 2px solid rgba(0, 0, 0, 0.26);\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in + label:after {\n  border-radius: 2px;\n}\n\n[type=\"checkbox\"].filled-in + label:before,\n[type=\"checkbox\"].filled-in + label:after {\n  content: '';\n  left: 0;\n  position: absolute;\n  /* .1s delay is for check animation */\n  transition: border .25s, background-color .25s, width .20s .1s, height .20s .1s, top .20s .1s, left .20s .1s;\n  z-index: 1;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:before {\n  width: 0;\n  height: 0;\n  border: 3px solid transparent;\n  left: 6px;\n  top: 10px;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 20% 40%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:not(:checked) + label:after {\n  height: 20px;\n  width: 20px;\n  background-color: transparent;\n  border: 2px solid #5a5a5a;\n  top: 0px;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in:checked + label:before {\n  top: 0;\n  left: 1px;\n  width: 8px;\n  height: 13px;\n  border-top: 2px solid transparent;\n  border-left: 2px solid transparent;\n  border-right: 2px solid #fff;\n  border-bottom: 2px solid #fff;\n  -webkit-transform: rotateZ(37deg);\n  transform: rotateZ(37deg);\n  -webkit-transform-origin: 100% 100%;\n  transform-origin: 100% 100%;\n}\n\n[type=\"checkbox\"].filled-in:checked + label:after {\n  top: 0;\n  width: 20px;\n  height: 20px;\n  border: 2px solid #d81b60;\n  background-color: #d81b60;\n  z-index: 0;\n}\n\n[type=\"checkbox\"].filled-in.tabbed:focus + label:after {\n  border-radius: 2px;\n  border-color: #5a5a5a;\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n[type=\"checkbox\"].filled-in.tabbed:checked:focus + label:after {\n  border-radius: 2px;\n  background-color: #d81b60;\n  border-color: #d81b60;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:before {\n  background-color: transparent;\n  border: 2px solid transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:not(:checked) + label:after {\n  border-color: transparent;\n  background-color: #BDBDBD;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:before {\n  background-color: transparent;\n}\n\n[type=\"checkbox\"].filled-in:disabled:checked + label:after {\n  background-color: #BDBDBD;\n  border-color: #BDBDBD;\n}\n\n/* Switch\n   ========================================================================== */\n\n.switch,\n.switch * {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -khtml-user-select: none;\n  -ms-user-select: none;\n}\n\n.switch label {\n  cursor: pointer;\n}\n\n.switch label input[type=checkbox] {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch label input[type=checkbox]:checked + .lever {\n  background-color: #de94af;\n}\n\n.switch label input[type=checkbox]:checked + .lever:after {\n  background-color: #d81b60;\n  left: 24px;\n}\n\n.switch label .lever {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  width: 40px;\n  height: 15px;\n  background-color: #818181;\n  border-radius: 15px;\n  margin-right: 10px;\n  transition: background 0.3s ease;\n  vertical-align: middle;\n  margin: 0 16px;\n}\n\n.switch label .lever:after {\n  content: \"\";\n  position: absolute;\n  display: inline-block;\n  width: 21px;\n  height: 21px;\n  background-color: #F1F1F1;\n  border-radius: 21px;\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4);\n  left: -5px;\n  top: -3px;\n  transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease;\n}\n\ninput[type=checkbox]:checked:not(:disabled) ~ .lever:active::after,\ninput[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(216, 27, 96, 0.1);\n}\n\ninput[type=checkbox]:not(:disabled) ~ .lever:active:after,\ninput[type=checkbox]:not(:disabled).tabbed:focus ~ .lever::after {\n  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.4), 0 0 0 15px rgba(0, 0, 0, 0.08);\n}\n\n.switch input[type=checkbox][disabled] + .lever {\n  cursor: default;\n}\n\n.switch label input[type=checkbox][disabled] + .lever:after,\n.switch label input[type=checkbox][disabled]:checked + .lever:after {\n  background-color: #BDBDBD;\n}\n\n/* Select Field\n   ========================================================================== */\n\nselect {\n  display: none;\n}\n\nselect.browser-default {\n  display: block;\n}\n\nselect {\n  background-color: rgba(255, 255, 255, 0.9);\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #f2f2f2;\n  border-radius: 2px;\n  height: 3rem;\n}\n\n.select-label {\n  position: absolute;\n}\n\n.select-wrapper {\n  position: relative;\n}\n\n.select-wrapper input.select-dropdown {\n  position: relative;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  border-bottom: 1px solid #9e9e9e;\n  outline: none;\n  height: 3rem;\n  line-height: 3rem;\n  width: 100%;\n  font-size: 1rem;\n  margin: 0 0 20px 0;\n  padding: 0;\n  display: block;\n}\n\n.select-wrapper span.caret {\n  color: initial;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  height: 10px;\n  margin: auto 0;\n  font-size: 10px;\n  line-height: 10px;\n}\n\n.select-wrapper span.caret.disabled {\n  color: rgba(0, 0, 0, 0.26);\n}\n\n.select-wrapper + label {\n  position: absolute;\n  top: -14px;\n  font-size: 0.8rem;\n}\n\nselect:disabled {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-wrapper input.select-dropdown:disabled {\n  color: rgba(0, 0, 0, 0.3);\n  cursor: default;\n  -webkit-user-select: none;\n  /* webkit (safari, chrome) browsers */\n  -moz-user-select: none;\n  /* mozilla browsers */\n  -ms-user-select: none;\n  /* IE10+ */\n  border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n}\n\n.select-wrapper i {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.select-dropdown li.disabled,\n.select-dropdown li.disabled > span,\n.select-dropdown li.optgroup {\n  color: rgba(0, 0, 0, 0.3);\n  background-color: transparent;\n}\n\n.prefix ~ .select-wrapper {\n  margin-left: 3rem;\n  width: 92%;\n  width: calc(100% - 3rem);\n}\n\n.prefix ~ label {\n  margin-left: 3rem;\n}\n\n.select-dropdown li img {\n  height: 40px;\n  width: 40px;\n  margin: 5px 15px;\n  float: right;\n}\n\n.select-dropdown li.optgroup {\n  border-top: 1px solid #eee;\n}\n\n.select-dropdown li.optgroup.selected > span {\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.select-dropdown li.optgroup > span {\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.select-dropdown li.optgroup ~ li.optgroup-option {\n  padding-left: 1rem;\n}\n\n/* File Input\n   ========================================================================== */\n\n.file-field {\n  position: relative;\n}\n\n.file-field .file-path-wrapper {\n  overflow: hidden;\n  padding-left: 10px;\n}\n\n.file-field input.file-path {\n  width: 100%;\n}\n\n.file-field .btn,\n.file-field .btn-large {\n  float: left;\n  height: 3rem;\n  line-height: 3rem;\n}\n\n.file-field span {\n  cursor: pointer;\n}\n\n.file-field input[type=file] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n\n/* Range\n   ========================================================================== */\n\n.range-field {\n  position: relative;\n}\n\ninput[type=range],\ninput[type=range] + .thumb {\n  cursor: pointer;\n}\n\ninput[type=range] {\n  position: relative;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  width: 100%;\n  margin: 15px 0;\n  padding: 0;\n}\n\ninput[type=range]:focus {\n  outline: none;\n}\n\ninput[type=range] + .thumb {\n  position: absolute;\n  border: none;\n  height: 0;\n  width: 0;\n  border-radius: 50%;\n  background-color: #d81b60;\n  top: 10px;\n  margin-left: -6px;\n  transform-origin: 50% 50%;\n  transform: rotate(-45deg);\n}\n\ninput[type=range] + .thumb .value {\n  display: block;\n  width: 30px;\n  text-align: center;\n  color: #d81b60;\n  font-size: 0;\n  transform: rotate(45deg);\n}\n\ninput[type=range] + .thumb.active {\n  border-radius: 50% 50% 50% 0;\n}\n\ninput[type=range] + .thumb.active .value {\n  color: #fff;\n  margin-left: -1px;\n  margin-top: 8px;\n  font-size: 10px;\n}\n\ninput[type=range] {\n  -webkit-appearance: none;\n}\n\ninput[type=range]::-webkit-slider-runnable-track {\n  height: 3px;\n  background: #c2c0c2;\n  border: none;\n}\n\ninput[type=range]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background-color: #d81b60;\n  transform-origin: 50% 50%;\n  margin: -5px 0 0 0;\n  transition: .3s;\n}\n\ninput[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ccc;\n}\n\ninput[type=range] {\n  /* fix for FF unable to apply focus style bug  */\n  border: 1px solid white;\n  /*required for proper track sizing in FF*/\n}\n\ninput[type=range]::-moz-range-track {\n  height: 3px;\n  background: #ddd;\n  border: none;\n}\n\ninput[type=range]::-moz-range-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #d81b60;\n  margin-top: -5px;\n}\n\ninput[type=range]:-moz-focusring {\n  outline: 1px solid #fff;\n  outline-offset: -1px;\n}\n\ninput[type=range]:focus::-moz-range-track {\n  background: #ccc;\n}\n\ninput[type=range]::-ms-track {\n  height: 3px;\n  background: transparent;\n  border-color: transparent;\n  border-width: 6px 0;\n  /*remove default tick marks*/\n  color: transparent;\n}\n\ninput[type=range]::-ms-fill-lower {\n  background: #777;\n}\n\ninput[type=range]::-ms-fill-upper {\n  background: #ddd;\n}\n\ninput[type=range]::-ms-thumb {\n  border: none;\n  height: 14px;\n  width: 14px;\n  border-radius: 50%;\n  background: #d81b60;\n}\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #888;\n}\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #ccc;\n}\n\n.card-panel {\n  transition: box-shadow 0.25s;\n  padding: 20px;\n  margin: 0.5rem 0 1rem;\n  border-radius: 2px;\n  background-color: #fff;\n}\n\n.card {\n  position: relative;\n  margin: 0.5rem 0 1rem;\n  background-color: #fff;\n  transition: box-shadow 0.25s;\n  border-radius: 2px;\n}\n\n.card .card-title {\n  font-size: 24px;\n  font-weight: 300;\n}\n\n.card .card-title.activator {\n  cursor: pointer;\n}\n\n.card.large,\n.card.medium,\n.card.small {\n  position: relative;\n}\n\n.card.large .card-image,\n.card.medium .card-image,\n.card.small .card-image {\n  max-height: 60%;\n  overflow: hidden;\n}\n\n.card.large .card-image + .card-content,\n.card.medium .card-image + .card-content,\n.card.small .card-image + .card-content {\n  max-height: 40%;\n}\n\n.card.large .card-content,\n.card.medium .card-content,\n.card.small .card-content {\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.card.large .card-action,\n.card.medium .card-action,\n.card.small .card-action {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.card.small {\n  height: 300px;\n}\n\n.card.medium {\n  height: 400px;\n}\n\n.card.large {\n  height: 500px;\n}\n\n.card.horizontal {\n  display: flex;\n}\n\n.card.horizontal.large .card-image,\n.card.horizontal.medium .card-image,\n.card.horizontal.small .card-image {\n  height: 100%;\n  max-height: none;\n  overflow: visible;\n}\n\n.card.horizontal.large .card-image img,\n.card.horizontal.medium .card-image img,\n.card.horizontal.small .card-image img {\n  height: 100%;\n}\n\n.card.horizontal .card-image {\n  max-width: 50%;\n}\n\n.card.horizontal .card-image img {\n  border-radius: 2px 0 0 2px;\n  max-width: 100%;\n  width: auto;\n}\n\n.card.horizontal .card-stacked {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  position: relative;\n}\n\n.card.horizontal .card-stacked .card-content {\n  flex-grow: 1;\n}\n\n.card.sticky-action .card-action {\n  z-index: 2;\n}\n\n.card.sticky-action .card-reveal {\n  z-index: 1;\n  padding-bottom: 64px;\n}\n\n.card .card-image {\n  position: relative;\n}\n\n.card .card-image img {\n  display: block;\n  border-radius: 2px 2px 0 0;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.card .card-image .card-title {\n  color: #fff;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  padding: 20px;\n}\n\n.card .card-content {\n  padding: 20px;\n  border-radius: 0 0 2px 2px;\n}\n\n.card .card-content p {\n  margin: 0;\n  color: inherit;\n}\n\n.card .card-content .card-title {\n  line-height: 48px;\n}\n\n.card .card-action {\n  position: relative;\n  background-color: inherit;\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\n  padding: 20px;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {\n  color: #ffab40;\n  margin-right: 20px;\n  transition: color 0.3s ease;\n  text-transform: uppercase;\n}\n\n.card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {\n  color: #ffd8a6;\n}\n\n.card .card-reveal {\n  padding: 20px;\n  position: absolute;\n  background-color: #fff;\n  width: 100%;\n  overflow-y: auto;\n  left: 0;\n  top: 100%;\n  height: 100%;\n  z-index: 3;\n  display: none;\n}\n\n.card .card-reveal .card-title {\n  cursor: pointer;\n  display: block;\n}\n\na {\n  text-decoration: none;\n}\n\nhtml {\n  line-height: 1.5;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: normal;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n@media only screen and (min-width: 0) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-width: 992px) {\n  html {\n    font-size: 14.5px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  html {\n    font-size: 15px;\n  }\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 400;\n  line-height: 1.1;\n}\n\nh1 a,\nh2 a,\nh3 a,\nh4 a,\nh5 a,\nh6 a {\n  font-weight: inherit;\n}\n\nh1 {\n  font-size: 4.2rem;\n  line-height: 110%;\n  margin: 2.1rem 0 1.68rem 0;\n}\n\nh2 {\n  font-size: 3.56rem;\n  line-height: 110%;\n  margin: 1.78rem 0 1.424rem 0;\n}\n\nh3 {\n  font-size: 2.92rem;\n  line-height: 110%;\n  margin: 1.46rem 0 1.168rem 0;\n}\n\nh4 {\n  font-size: 2.28rem;\n  line-height: 110%;\n  margin: 1.14rem 0 0.912rem 0;\n}\n\nh5 {\n  font-size: 1.64rem;\n  line-height: 110%;\n  margin: 0.82rem 0 0.656rem 0;\n}\n\nh6 {\n  font-size: 1rem;\n  line-height: 110%;\n  margin: 0.5rem 0 0.4rem 0;\n}\n\nem {\n  font-style: italic;\n}\n\nstrong {\n  font-weight: 500;\n}\n\nsmall {\n  font-size: 75%;\n}\n\n.light,\nfooter.page-footer .footer-copyright {\n  font-weight: 300;\n}\n\n.thin {\n  font-weight: 200;\n}\n\n.flow-text {\n  font-weight: 300;\n}\n\n@media only screen and (min-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n@media only screen and (min-width: 390px) {\n  .flow-text {\n    font-size: 1.224rem;\n  }\n}\n\n@media only screen and (min-width: 420px) {\n  .flow-text {\n    font-size: 1.248rem;\n  }\n}\n\n@media only screen and (min-width: 450px) {\n  .flow-text {\n    font-size: 1.272rem;\n  }\n}\n\n@media only screen and (min-width: 480px) {\n  .flow-text {\n    font-size: 1.296rem;\n  }\n}\n\n@media only screen and (min-width: 510px) {\n  .flow-text {\n    font-size: 1.32rem;\n  }\n}\n\n@media only screen and (min-width: 540px) {\n  .flow-text {\n    font-size: 1.344rem;\n  }\n}\n\n@media only screen and (min-width: 570px) {\n  .flow-text {\n    font-size: 1.368rem;\n  }\n}\n\n@media only screen and (min-width: 600px) {\n  .flow-text {\n    font-size: 1.392rem;\n  }\n}\n\n@media only screen and (min-width: 630px) {\n  .flow-text {\n    font-size: 1.416rem;\n  }\n}\n\n@media only screen and (min-width: 660px) {\n  .flow-text {\n    font-size: 1.44rem;\n  }\n}\n\n@media only screen and (min-width: 690px) {\n  .flow-text {\n    font-size: 1.464rem;\n  }\n}\n\n@media only screen and (min-width: 720px) {\n  .flow-text {\n    font-size: 1.488rem;\n  }\n}\n\n@media only screen and (min-width: 750px) {\n  .flow-text {\n    font-size: 1.512rem;\n  }\n}\n\n@media only screen and (min-width: 780px) {\n  .flow-text {\n    font-size: 1.536rem;\n  }\n}\n\n@media only screen and (min-width: 810px) {\n  .flow-text {\n    font-size: 1.56rem;\n  }\n}\n\n@media only screen and (min-width: 840px) {\n  .flow-text {\n    font-size: 1.584rem;\n  }\n}\n\n@media only screen and (min-width: 870px) {\n  .flow-text {\n    font-size: 1.608rem;\n  }\n}\n\n@media only screen and (min-width: 900px) {\n  .flow-text {\n    font-size: 1.632rem;\n  }\n}\n\n@media only screen and (min-width: 930px) {\n  .flow-text {\n    font-size: 1.656rem;\n  }\n}\n\n@media only screen and (min-width: 960px) {\n  .flow-text {\n    font-size: 1.68rem;\n  }\n}\n\n@media only screen and (max-width: 360px) {\n  .flow-text {\n    font-size: 1.2rem;\n  }\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Thin), url(" + __webpack_require__(10) + ");\n  src: url(" + __webpack_require__(10) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(11) + ") format(\"woff2\"), url(" + __webpack_require__(12) + ") format(\"woff\"), url(" + __webpack_require__(13) + ") format(\"truetype\");\n  font-weight: 200;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Light), url(" + __webpack_require__(14) + ");\n  src: url(" + __webpack_require__(14) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(15) + ") format(\"woff2\"), url(" + __webpack_require__(16) + ") format(\"woff\"), url(" + __webpack_require__(17) + ") format(\"truetype\");\n  font-weight: 300;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: local(Roboto Regular), url(" + __webpack_require__(18) + ");\n  src: url(" + __webpack_require__(18) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(19) + ") format(\"woff2\"), url(" + __webpack_require__(20) + ") format(\"woff\"), url(" + __webpack_require__(21) + ") format(\"truetype\");\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(22) + ");\n  src: url(" + __webpack_require__(22) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(23) + ") format(\"woff2\"), url(" + __webpack_require__(24) + ") format(\"woff\"), url(" + __webpack_require__(25) + ") format(\"truetype\");\n  font-weight: 500;\n}\n\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + __webpack_require__(26) + ");\n  src: url(" + __webpack_require__(26) + ") format(\"embedded-opentype\"), url(" + __webpack_require__(27) + ") format(\"woff2\"), url(" + __webpack_require__(28) + ") format(\"woff\"), url(" + __webpack_require__(29) + ") format(\"truetype\");\n  font-weight: 700;\n}\n\nnav {\n  color: #fff;\n  background-color: #0D47A1;\n  width: 100%;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav.nav-extended {\n  height: auto;\n}\n\nnav.nav-extended .nav-wrapper {\n  min-height: 56px;\n  height: auto;\n}\n\nnav.nav-extended .nav-content {\n  position: relative;\n  line-height: normal;\n}\n\nnav a {\n  color: #fff;\n}\n\nnav [class*=\"mdi-\"],\nnav [class^=\"mdi-\"],\nnav i,\nnav i.material-icons {\n  display: block;\n  font-size: 24px;\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .nav-wrapper {\n  position: relative;\n  height: 100%;\n}\n\n@media only screen and (min-width: 993px) {\n  nav a.button-collapse {\n    display: none;\n  }\n}\n\nnav .button-collapse {\n  float: left;\n  position: relative;\n  z-index: 1;\n  height: 56px;\n  margin: 0 18px;\n}\n\nnav .button-collapse i {\n  height: 56px;\n  line-height: 56px;\n}\n\nnav .brand-logo {\n  position: absolute;\n  color: #fff;\n  display: inline-block;\n  font-size: 2.1rem;\n  padding: 0;\n  white-space: nowrap;\n}\n\nnav .brand-logo.center {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n@media only screen and (max-width: 992px) {\n  nav .brand-logo {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  nav .brand-logo.left,\n  nav .brand-logo.right {\n    padding: 0;\n    transform: none;\n  }\n\n  nav .brand-logo.left {\n    left: 0.5rem;\n  }\n\n  nav .brand-logo.right {\n    right: 0.5rem;\n    left: auto;\n  }\n}\n\nnav .brand-logo.right {\n  right: 0.5rem;\n  padding: 0;\n}\n\nnav .brand-logo [class*=\"mdi-\"],\nnav .brand-logo [class^=\"mdi-\"],\nnav .brand-logo i,\nnav .brand-logo i.material-icons {\n  float: left;\n  margin-right: 15px;\n}\n\nnav .nav-title {\n  display: inline-block;\n  font-size: 32px;\n  padding: 28px 0;\n}\n\nnav ul {\n  margin: 0;\n}\n\nnav ul li {\n  transition: background-color 0.3s;\n  float: left;\n  padding: 0;\n}\n\nnav ul li.active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul a {\n  transition: background-color 0.3s;\n  font-size: 1rem;\n  color: #fff;\n  display: block;\n  padding: 0 15px;\n  cursor: pointer;\n}\n\nnav ul a.btn,\nnav ul a.btn-large,\nnav ul a.btn-flat,\nnav ul a.btn-floating,\nnav ul a.btn-large {\n  margin-top: -2px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\nnav ul a.btn > .material-icons,\nnav ul a.btn-large > .material-icons,\nnav ul a.btn-flat > .material-icons,\nnav ul a.btn-floating > .material-icons,\nnav ul a.btn-large > .material-icons {\n  height: inherit;\n  line-height: inherit;\n}\n\nnav ul a:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\nnav ul.left {\n  float: left;\n}\n\nnav form {\n  height: 100%;\n}\n\nnav .input-field {\n  margin: 0;\n  height: 100%;\n}\n\nnav .input-field input {\n  height: 100%;\n  font-size: 1.2rem;\n  border: none;\n  padding-left: 2rem;\n}\n\nnav .input-field input:focus,\nnav .input-field input[type=date]:valid,\nnav .input-field input[type=email]:valid,\nnav .input-field input[type=password]:valid,\nnav .input-field input[type=text]:valid,\nnav .input-field input[type=url]:valid {\n  border: none;\n  box-shadow: none;\n}\n\nnav .input-field label {\n  top: 0;\n  left: 0;\n}\n\nnav .input-field label i {\n  color: rgba(255, 255, 255, 0.7);\n  transition: color 0.3s;\n}\n\nnav .input-field label.active i {\n  color: #fff;\n}\n\n.navbar-fixed {\n  position: relative;\n  height: 56px;\n  z-index: 997;\n}\n\n.navbar-fixed nav {\n  position: fixed;\n}\n\n@media only screen and (min-width: 601px) {\n  nav.nav-extended .nav-wrapper {\n    min-height: 64px;\n  }\n\n  nav,\n  nav .nav-wrapper i,\n  nav a.button-collapse,\n  nav a.button-collapse i {\n    height: 64px;\n    line-height: 64px;\n  }\n\n  .navbar-fixed {\n    height: 64px;\n  }\n}\n\n/**\n * Base print styling\n * -----------------------------------------------------------------------------\n * Source: http://html5boilerplate.com/\n */\n\n@media print {\n  * {\n    background: transparent !important;\n    color: #000000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a {\n    text-decoration: underline;\n  }\n\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]:after {\n    content: \"(\" attr(href) \")\";\n  }\n\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  a[href^='#']:after,\n  a[href^='javascript:']:after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr {\n    page-break-inside: avoid;\n  }\n\n  img {\n    page-break-inside: avoid;\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n\n/* Global\n * -------------------- */\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*:after,\n*:before {\n  box-sizing: inherit;\n}\n\nul:not(.browser-default) {\n  padding-left: 0;\n  list-style-type: none;\n}\n\nul:not(.browser-default) li {\n  list-style-type: none;\n}\n\na {\n  color: #039be5;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.valign-wrapper {\n  display: flex;\n  align-items: center;\n}\n\n.valign-wrapper .valign {\n  display: block;\n}\n\n.z-depth-0 {\n  box-shadow: none !important;\n}\n\n.z-depth-1,\n.btn,\n.btn-large,\n.btn-floating,\n.card-panel,\n.card,\nnav {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n}\n\n.z-depth-1-half,\n.btn:hover,\n.btn-large:hover,\n.btn-floating:hover {\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\n}\n\n.z-depth-2 {\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\n}\n\n.z-depth-3 {\n  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);\n}\n\n.z-depth-4 {\n  box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);\n}\n\n.z-depth-5 {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n}\n\n.hoverable {\n  transition: box-shadow 0.25s;\n  box-shadow: 0;\n}\n\n.hoverable:hover {\n  transition: box-shadow 0.25s;\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.divider {\n  height: 1px;\n  overflow: hidden;\n  background-color: #e0e0e0;\n}\n\nblockquote {\n  margin: 20px 0;\n  padding-left: 1.5rem;\n  border-left: 5px solid #0D47A1;\n}\n\ni {\n  line-height: inherit;\n}\n\ni.left {\n  float: left;\n  margin-right: 15px;\n}\n\ni.right {\n  float: right;\n  margin-left: 15px;\n}\n\ni.tiny {\n  font-size: 1rem;\n}\n\ni.small {\n  font-size: 2rem;\n}\n\ni.medium {\n  font-size: 4rem;\n}\n\ni.large {\n  font-size: 6rem;\n}\n\nimg.responsive-img,\nvideo.responsive-video {\n  max-width: 100%;\n  height: auto;\n}\n\n.parallax-container {\n  position: relative;\n  overflow: hidden;\n  height: 500px;\n}\n\n.parallax {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: -1;\n}\n\n.parallax img {\n  display: none;\n  position: absolute;\n  left: 50%;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  transform: translateX(-50%);\n}\n\n/*********************\n  Transition Classes\n**********************/\n\nul.staggered-list li {\n  opacity: 0;\n}\n\n.fade-in {\n  opacity: 0;\n  transform-origin: 0 50%;\n}\n\n/*********************\n  Media Query Classes\n**********************/\n\n@media only screen and (max-width: 600px) {\n  .hide-on-small-and-down,\n  .hide-on-small-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .hide-on-med-and-down {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .hide-on-med-and-up {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .hide-on-med-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .hide-on-large-only {\n    display: none !important;\n  }\n}\n\n@media only screen and (min-width: 993px) {\n  .show-on-large {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 600px) and (max-width: 992px) {\n  .show-on-medium {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .show-on-small {\n    display: block !important;\n  }\n}\n\n@media only screen and (min-width: 601px) {\n  .show-on-medium-and-up {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 992px) {\n  .show-on-medium-and-down {\n    display: block !important;\n  }\n}\n\n@media only screen and (max-width: 600px) {\n  .center-on-small-only {\n    text-align: center;\n  }\n}\n\nfooter.page-footer {\n  margin-top: 20px;\n  padding-top: 20px;\n  background-color: #0D47A1;\n}\n\nfooter.page-footer .footer-copyright {\n  overflow: hidden;\n  height: 50px;\n  line-height: 50px;\n  color: rgba(255, 255, 255, 0.8);\n  background-color: rgba(51, 51, 51, 0.08);\n}\n\ntable,\ntd,\nth {\n  border: none;\n}\n\ntable {\n  width: 100%;\n  display: table;\n}\n\ntable.bordered > tbody > tr,\ntable.bordered > thead > tr {\n  border-bottom: 1px solid #d0d0d0;\n}\n\ntable.striped > tbody > tr:nth-child(odd) {\n  background-color: #f2f2f2;\n}\n\ntable.striped > tbody > tr > td {\n  border-radius: 0;\n}\n\ntable.highlight > tbody > tr {\n  transition: background-color 0.25s ease;\n}\n\ntable.highlight > tbody > tr:hover {\n  background-color: #f2f2f2;\n}\n\ntable.centered tbody tr td,\ntable.centered thead tr th {\n  text-align: center;\n}\n\nthead {\n  border-bottom: 1px solid #d0d0d0;\n}\n\ntd,\nth {\n  padding: 15px 5px;\n  display: table-cell;\n  text-align: left;\n  vertical-align: middle;\n  border-radius: 2px;\n}\n\n@media only screen and (max-width: 992px) {\n  table.responsive-table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n    display: block;\n    position: relative;\n    /* sort out borders */\n  }\n\n  table.responsive-table td:empty:before {\n    content: '\\A0';\n  }\n\n  table.responsive-table td,\n  table.responsive-table th {\n    margin: 0;\n    vertical-align: top;\n  }\n\n  table.responsive-table th {\n    text-align: left;\n  }\n\n  table.responsive-table thead {\n    display: block;\n    float: left;\n  }\n\n  table.responsive-table thead tr {\n    display: block;\n    padding: 0 10px 0 0;\n  }\n\n  table.responsive-table thead tr th::before {\n    content: \"\\A0\";\n  }\n\n  table.responsive-table tbody {\n    display: block;\n    width: auto;\n    position: relative;\n    overflow-x: auto;\n    white-space: nowrap;\n  }\n\n  table.responsive-table tbody tr {\n    display: inline-block;\n    vertical-align: top;\n  }\n\n  table.responsive-table th {\n    display: block;\n    text-align: right;\n  }\n\n  table.responsive-table td {\n    display: block;\n    min-height: 1.25em;\n    text-align: left;\n  }\n\n  table.responsive-table tr {\n    padding: 0 10px;\n  }\n\n  table.responsive-table thead {\n    border: 0;\n    border-right: 1px solid #d0d0d0;\n  }\n\n  table.responsive-table.bordered th {\n    border-bottom: 0;\n    border-left: 0;\n  }\n\n  table.responsive-table.bordered td {\n    border-left: 0;\n    border-right: 0;\n    border-bottom: 0;\n  }\n\n  table.responsive-table.bordered tr {\n    border: 0;\n  }\n\n  table.responsive-table.bordered tbody tr {\n    border-right: 1px solid #d0d0d0;\n  }\n}\n\n.collection {\n  margin: 0.5rem 0 1rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 2px;\n  overflow: hidden;\n  position: relative;\n}\n\n.collection .collection-item {\n  background-color: #fff;\n  line-height: 1.5rem;\n  padding: 10px 20px;\n  margin: 0;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.collection .collection-item.avatar {\n  min-height: 84px;\n  padding-left: 72px;\n  position: relative;\n}\n\n.collection .collection-item.avatar .circle {\n  position: absolute;\n  width: 42px;\n  height: 42px;\n  overflow: hidden;\n  left: 15px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.collection .collection-item.avatar i.circle {\n  font-size: 18px;\n  line-height: 42px;\n  color: #fff;\n  background-color: #999;\n  text-align: center;\n}\n\n.collection .collection-item.avatar .title {\n  font-size: 16px;\n}\n\n.collection .collection-item.avatar p {\n  margin: 0;\n}\n\n.collection .collection-item.avatar .secondary-content {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n}\n\n.collection .collection-item:last-child {\n  border-bottom: none;\n}\n\n.collection .collection-item.active {\n  background-color: #d81b60;\n  color: white;\n}\n\n.collection .collection-item.active .secondary-content {\n  color: #fff;\n}\n\n.collection a.collection-item {\n  display: block;\n  transition: 0.25s;\n  color: #d81b60;\n}\n\n.collection a.collection-item:not(.active):hover {\n  background-color: #ddd;\n}\n\n.collection.with-header .collection-header {\n  background-color: #fff;\n  border-bottom: 1px solid #e0e0e0;\n  padding: 10px 20px;\n}\n\n.collection.with-header .collection-item {\n  padding-left: 30px;\n}\n\n.collection.with-header .collection-item.avatar {\n  padding-left: 72px;\n}\n\n.secondary-content {\n  float: right;\n  color: #d81b60;\n}\n\n.collapsible .collection {\n  margin: 0;\n  border: none;\n}\n\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n\n.video-container embed,\n.video-container iframe,\n.video-container object {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.progress {\n  position: relative;\n  height: 4px;\n  display: block;\n  width: 100%;\n  background-color: #f8c7d9;\n  border-radius: 2px;\n  margin: 0.5rem 0 1rem 0;\n  overflow: hidden;\n}\n\n.progress .determinate {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: #d81b60;\n  transition: width .3s linear;\n}\n\n.progress .indeterminate {\n  background-color: #d81b60;\n}\n\n.progress .indeterminate:before {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.progress .indeterminate:after {\n  content: '';\n  position: absolute;\n  background-color: inherit;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  will-change: left, right;\n  animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n  animation-delay: 1.15s;\n}\n\n@keyframes indeterminate {\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n}\n\n@keyframes indeterminate-short {\n  0% {\n    left: -200%;\n    right: 100%;\n  }\n\n  60% {\n    left: 107%;\n    right: -8%;\n  }\n\n  100% {\n    left: 107%;\n    right: -8%;\n  }\n}\n\n/*******************\n  Utility Classes\n*******************/\n\n.hide {\n  display: none !important;\n}\n\n.left-align {\n  text-align: left;\n}\n\n.right-align {\n  text-align: right;\n}\n\n.center,\n.center-align {\n  text-align: center;\n}\n\n.left {\n  float: left !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.no-select,\ninput[type=range],\ninput[type=range] + .thumb {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.circle {\n  border-radius: 50%;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.truncate {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.no-padding {\n  padding: 0 !important;\n}\n\n*[class*=\"darken-\"] {\n  color: #fff !important;\n}\n\n/** Import of components\n * ---------------------------\n */\n\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dfe56a876d0282555d1e2458e278060f.eot";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "954bbdeb86483e4ffea00c4591530ece.woff2";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "7500519de3d82e33d1587f8042e2afcb.woff";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "94998475f6aea65f558494802416c1cf.ttf";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a990f611f2305dc12965f186c2ef2690.eot";

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "69f8a0617ac472f78e45841323a3df9e.woff2";

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "3b813c2ae0d04909a33a18d792912ee7.woff";

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "46e48ce0628835f68a7369d0254e4283.ttf";

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "30799efa5bf74129468ad4e257551dc3.eot";

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "2751ee43015f9884c3642f103b7f70c9.woff2";

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ba3dcd8903e3d0af5de7792777f8ae0d.woff";

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "df7b648ce5356ea1ebce435b3459fd60.ttf";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "4d9f3f9e5195e7b074bb63ba4ce42208.eot";

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "574fd0b50367f886d359e8264938fc37.woff2";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fc78759e93a6cac50458610e3d9d63a0.woff";

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "894a2ede85a483bf9bedefd4db45cdb9.ttf";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "ecdd509cadbf1ea78b8d2e31ec52328c.eot";

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "39b2c3031be6b4ea96e2e3e95d307814.woff2";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "dc81817def276b4f21395f7ea5e88dcd.woff";

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e31fcf1885e371e19f5786c2bdfeae1b.ttf";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	var Example = void 0;
	
	Example = function Example(options) {
	   this.$element = $(options.element);
	
	   this.init();
	};
	Example.prototype.init = function () {
	   if (this.$element.length === 0) {
	      return;
	   }
	   this.foo();
	};
	Example.prototype.foo = function () {
	   console.log('bar');
	};
	
	module.exports = Example;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/*! VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
	/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
	jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (e) {
	  function t(e) {
	    var t = e.length,
	        a = r.type(e);return "function" === a || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
	  }if (!e.jQuery) {
	    var r = function r(e, t) {
	      return new r.fn.init(e, t);
	    };r.isWindow = function (e) {
	      return null != e && e == e.window;
	    }, r.type = function (e) {
	      return null == e ? e + "" : "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "function" == typeof e ? n[i.call(e)] || "object" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    }, r.isArray = Array.isArray || function (e) {
	      return "array" === r.type(e);
	    }, r.isPlainObject = function (e) {
	      var t;if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e)) return !1;try {
	        if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf")) return !1;
	      } catch (a) {
	        return !1;
	      }for (t in e) {}return void 0 === t || o.call(e, t);
	    }, r.each = function (e, r, a) {
	      var n,
	          o = 0,
	          i = e.length,
	          s = t(e);if (a) {
	        if (s) for (; i > o && (n = r.apply(e[o], a), n !== !1); o++) {} else for (o in e) {
	          if (n = r.apply(e[o], a), n === !1) break;
	        }
	      } else if (s) for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++) {} else for (o in e) {
	        if (n = r.call(e[o], o, e[o]), n === !1) break;
	      }return e;
	    }, r.data = function (e, t, n) {
	      if (void 0 === n) {
	        var o = e[r.expando],
	            i = o && a[o];if (void 0 === t) return i;if (i && t in i) return i[t];
	      } else if (void 0 !== t) {
	        var o = e[r.expando] || (e[r.expando] = ++r.uuid);return a[o] = a[o] || {}, a[o][t] = n, n;
	      }
	    }, r.removeData = function (e, t) {
	      var n = e[r.expando],
	          o = n && a[n];o && r.each(t, function (e, t) {
	        delete o[t];
	      });
	    }, r.extend = function () {
	      var e,
	          t,
	          a,
	          n,
	          o,
	          i,
	          s = arguments[0] || {},
	          l = 1,
	          u = arguments.length,
	          c = !1;for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != (typeof s === "undefined" ? "undefined" : _typeof(s)) && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++) {
	        if (null != (o = arguments[l])) for (n in o) {
	          e = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, i = e && r.isArray(e) ? e : []) : i = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
	        }
	      }return s;
	    }, r.queue = function (e, a, n) {
	      function o(e, r) {
	        var a = r || [];return null != e && (t(Object(e)) ? !function (e, t) {
	          for (var r = +t.length, a = 0, n = e.length; r > a;) {
	            e[n++] = t[a++];
	          }if (r !== r) for (; void 0 !== t[a];) {
	            e[n++] = t[a++];
	          }return e.length = n, e;
	        }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a;
	      }if (e) {
	        a = (a || "fx") + "queue";var i = r.data(e, a);return n ? (!i || r.isArray(n) ? i = r.data(e, a, o(n)) : i.push(n), i) : i || [];
	      }
	    }, r.dequeue = function (e, t) {
	      r.each(e.nodeType ? [e] : e, function (e, a) {
	        t = t || "fx";var n = r.queue(a, t),
	            o = n.shift();"inprogress" === o && (o = n.shift()), o && ("fx" === t && n.unshift("inprogress"), o.call(a, function () {
	          r.dequeue(a, t);
	        }));
	      });
	    }, r.fn = r.prototype = { init: function init(e) {
	        if (e.nodeType) return this[0] = e, this;throw new Error("Not a DOM node.");
	      }, offset: function offset() {
	        var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : { top: 0, left: 0 };return { top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0), left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0) };
	      }, position: function position() {
	        function e() {
	          for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;) {
	            e = e.offsetParent;
	          }return e || document;
	        }var t = this[0],
	            e = e.apply(t),
	            a = this.offset(),
	            n = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : r(e).offset();return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), { top: a.top - n.top, left: a.left - n.left };
	      } };var a = {};r.expando = "velocity" + new Date().getTime(), r.uuid = 0;for (var n = {}, o = n.hasOwnProperty, i = n.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++) {
	      n["[object " + s[l] + "]"] = s[l].toLowerCase();
	    }r.fn.init.prototype = r.fn, e.Velocity = { Utilities: r };
	  }
	}(window), function (e) {
	  "object" == ( false ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : e();
	}(function () {
	  return function (e, t, r, a) {
	    function n(e) {
	      for (var t = -1, r = e ? e.length : 0, a = []; ++t < r;) {
	        var n = e[t];n && a.push(n);
	      }return a;
	    }function o(e) {
	      return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e;
	    }function i(e) {
	      var t = f.data(e, "velocity");return null === t ? a : t;
	    }function s(e) {
	      return function (t) {
	        return Math.round(t * e) * (1 / e);
	      };
	    }function l(e, r, a, n) {
	      function o(e, t) {
	        return 1 - 3 * t + 3 * e;
	      }function i(e, t) {
	        return 3 * t - 6 * e;
	      }function s(e) {
	        return 3 * e;
	      }function l(e, t, r) {
	        return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
	      }function u(e, t, r) {
	        return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
	      }function c(t, r) {
	        for (var n = 0; m > n; ++n) {
	          var o = u(r, e, a);if (0 === o) return r;var i = l(r, e, a) - t;r -= i / o;
	        }return r;
	      }function p() {
	        for (var t = 0; b > t; ++t) {
	          w[t] = l(t * x, e, a);
	        }
	      }function f(t, r, n) {
	        var o,
	            i,
	            s = 0;do {
	          i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i;
	        } while (Math.abs(o) > h && ++s < v);return i;
	      }function d(t) {
	        for (var r = 0, n = 1, o = b - 1; n != o && w[n] <= t; ++n) {
	          r += x;
	        }--n;var i = (t - w[n]) / (w[n + 1] - w[n]),
	            s = r + i * x,
	            l = u(s, e, a);return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
	      }function g() {
	        V = !0, (e != r || a != n) && p();
	      }var m = 4,
	          y = .001,
	          h = 1e-7,
	          v = 10,
	          b = 11,
	          x = 1 / (b - 1),
	          S = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var P = 0; 4 > P; ++P) {
	        if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P])) return !1;
	      }e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);var w = S ? new Float32Array(b) : new Array(b),
	          V = !1,
	          C = function C(t) {
	        return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
	      };C.getControlPoints = function () {
	        return [{ x: e, y: r }, { x: a, y: n }];
	      };var T = "generateBezier(" + [e, r, a, n] + ")";return C.toString = function () {
	        return T;
	      }, C;
	    }function u(e, t) {
	      var r = e;return m.isString(e) ? b.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r;
	    }function c(e) {
	      if (e) {
	        var t = new Date().getTime(),
	            r = b.State.calls.length;r > 1e4 && (b.State.calls = n(b.State.calls));for (var o = 0; r > o; o++) {
	          if (b.State.calls[o]) {
	            var s = b.State.calls[o],
	                l = s[0],
	                u = s[2],
	                d = s[3],
	                g = !!d,
	                y = null;d || (d = b.State.calls[o][3] = t - 16);for (var h = Math.min((t - d) / u.duration, 1), v = 0, x = l.length; x > v; v++) {
	              var P = l[v],
	                  V = P.element;if (i(V)) {
	                var C = !1;if (u.display !== a && null !== u.display && "none" !== u.display) {
	                  if ("flex" === u.display) {
	                    var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];f.each(T, function (e, t) {
	                      S.setPropertyValue(V, "display", t);
	                    });
	                  }S.setPropertyValue(V, "display", u.display);
	                }u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);for (var k in P) {
	                  if ("element" !== k) {
	                    var A,
	                        F = P[k],
	                        j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;if (1 === h) A = F.endValue;else {
	                      var E = F.endValue - F.startValue;if (A = F.startValue + E * j(h, u, E), !g && A === F.currentValue) continue;
	                    }if (F.currentValue = A, "tween" === k) y = A;else {
	                      if (S.Hooks.registered[k]) {
	                        var H = S.Hooks.getRoot(k),
	                            N = i(V).rootPropertyValueCache[H];N && (F.rootPropertyValue = N);
	                      }var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0);
	                    }
	                  }
	                }u.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V);
	              }
	            }u.display !== a && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, y), 1 === h && p(o);
	          }
	        }
	      }b.State.isTicking && w(c);
	    }function p(e, t) {
	      if (!b.State.calls[e]) return !1;for (var r = b.State.calls[e][0], n = b.State.calls[e][1], o = b.State.calls[e][2], s = b.State.calls[e][4], l = !1, u = 0, c = r.length; c > u; u++) {
	        var p = r[u].element;if (t || o.loop || ("none" === o.display && S.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && i(p)) {
	          i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};var d = !1;f.each(S.Lists.transforms3D, function (e, t) {
	            var r = /^scale/.test(t) ? 1 : 0,
	                n = i(p).transformCache[t];i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete i(p).transformCache[t]);
	          }), o.mobileHA && (d = !0, delete i(p).transformCache.translate3d), d && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating");
	        }if (!t && o.complete && !o.loop && u === c - 1) try {
	          o.complete.call(n, n);
	        } catch (g) {
	          setTimeout(function () {
	            throw g;
	          }, 1);
	        }s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && (f.each(i(p).tweensContainer, function (e, t) {
	          /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
	        }), b(p, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && f.dequeue(p, o.queue);
	      }b.State.calls[e] = !1;for (var m = 0, y = b.State.calls.length; y > m; m++) {
	        if (b.State.calls[m] !== !1) {
	          l = !0;break;
	        }
	      }l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
	    }var f,
	        d = function () {
	      if (r.documentMode) return r.documentMode;for (var e = 7; e > 4; e--) {
	        var t = r.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
	      }return a;
	    }(),
	        g = function () {
	      var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
	        var r,
	            a = new Date().getTime();return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function () {
	          t(a + r);
	        }, r);
	      };
	    }(),
	        m = { isString: function isString(e) {
	        return "string" == typeof e;
	      }, isArray: Array.isArray || function (e) {
	        return "[object Array]" === Object.prototype.toString.call(e);
	      }, isFunction: function isFunction(e) {
	        return "[object Function]" === Object.prototype.toString.call(e);
	      }, isNode: function isNode(e) {
	        return e && e.nodeType;
	      }, isNodeList: function isNodeList(e) {
	        return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == _typeof(e[0]) && e[0].nodeType > 0);
	      }, isWrapped: function isWrapped(e) {
	        return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
	      }, isSVG: function isSVG(e) {
	        return t.SVGElement && e instanceof t.SVGElement;
	      }, isEmptyObject: function isEmptyObject(e) {
	        for (var t in e) {
	          return !1;
	        }return !0;
	      } },
	        y = !1;if (e.fn && e.fn.jquery ? (f = e, y = !0) : f = t.Velocity.Utilities, 8 >= d && !y) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= d) return void (jQuery.fn.velocity = jQuery.fn.animate);var h = 400,
	        v = "swing",
	        b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: r.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: f, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: h, easing: v, begin: a, complete: a, progress: a, display: a, visibility: a, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(e) {
	        f.data(e, "velocity", { isSVG: m.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
	      }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var x = function () {
	      function e(e) {
	        return -e.tension * e.x - e.friction * e.v;
	      }function t(t, r, a) {
	        var n = { x: t.x + a.dx * r, v: t.v + a.dv * r, tension: t.tension, friction: t.friction };return { dx: n.v, dv: e(n) };
	      }function r(r, a) {
	        var n = { dx: r.v, dv: e(r) },
	            o = t(r, .5 * a, n),
	            i = t(r, .5 * a, o),
	            s = t(r, a, i),
	            l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
	            u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);return r.x = r.x + l * a, r.v = r.v + u * a, r;
	      }return function a(e, t, n) {
	        var o,
	            i,
	            s,
	            l = { x: -1, v: 0, tension: null, friction: null },
	            u = [0],
	            c = 0,
	            p = 1e-4,
	            f = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (c = a(e, t), i = c / n * f) : i = f; s = r(s || l, i), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p;) {}return o ? function (e) {
	          return u[e * (u.length - 1) | 0];
	        } : c;
	      };
	    }();b.Easings = { linear: function linear(e) {
	        return e;
	      }, swing: function swing(e) {
	        return .5 - Math.cos(e * Math.PI) / 2;
	      }, spring: function spring(e) {
	        return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
	      } }, f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
	      b.Easings[t[0]] = l.apply(null, t[1]);
	    });var S = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
	          for (var e = 0; e < S.Lists.colors.length; e++) {
	            var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t];
	          }var r, a, n;if (d) for (r in S.Hooks.templates) {
	            a = S.Hooks.templates[r], n = a[0].split(" ");var o = a[1].match(S.RegEx.valueSplit);"Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), S.Hooks.templates[r] = [n.join(" "), o.join(" ")]);
	          }for (r in S.Hooks.templates) {
	            a = S.Hooks.templates[r], n = a[0].split(" ");for (var e in n) {
	              var i = r + n[e],
	                  s = e;S.Hooks.registered[i] = [r, s];
	            }
	          }
	        }, getRoot: function getRoot(e) {
	          var t = S.Hooks.registered[e];return t ? t[0] : e;
	        }, cleanRootPropertyValue: function cleanRootPropertyValue(e, t) {
	          return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t;
	        }, extractValue: function extractValue(e, t) {
	          var r = S.Hooks.registered[e];if (r) {
	            var a = r[0],
	                n = r[1];return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[n];
	          }return t;
	        }, injectValue: function injectValue(e, t, r) {
	          var a = S.Hooks.registered[e];if (a) {
	            var n,
	                o,
	                i = a[0],
	                s = a[1];return r = S.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(S.RegEx.valueSplit), n[s] = t, o = n.join(" ");
	          }return r;
	        } }, Normalizations: { registered: { clip: function clip(e, t, r) {
	            switch (e) {case "name":
	                return "clip";case "extract":
	                var a;return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;case "inject":
	                return "rect(" + r + ")";}
	          }, blur: function blur(e, t, r) {
	            switch (e) {case "name":
	                return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
	                var a = parseFloat(r);if (!a && 0 !== a) {
	                  var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);a = n ? n[1] : 0;
	                }return a;case "inject":
	                return parseFloat(r) ? "blur(" + r + ")" : "none";}
	          }, opacity: function opacity(e, t, r) {
	            if (8 >= d) switch (e) {case "name":
	                return "filter";case "extract":
	                var a = r.toString().match(/alpha\(opacity=(.*)\)/i);return r = a ? a[1] / 100 : 1;case "inject":
	                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";} else switch (e) {case "name":
	                return "opacity";case "extract":
	                return r;case "inject":
	                return r;}
	          } }, register: function register() {
	          9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));for (var e = 0; e < S.Lists.transformsBase.length; e++) {
	            !function () {
	              var t = S.Lists.transformsBase[e];S.Normalizations.registered[t] = function (e, r, n) {
	                switch (e) {case "name":
	                    return "transform";case "extract":
	                    return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");case "inject":
	                    var o = !1;switch (t.substr(0, t.length - 1)) {case "translate":
	                        o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);break;case "scal":case "scale":
	                        b.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);break;case "skew":
	                        o = !/(deg|\d)$/i.test(n);break;case "rotate":
	                        o = !/(deg|\d)$/i.test(n);}return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];}
	              };
	            }();
	          }for (var e = 0; e < S.Lists.colors.length; e++) {
	            !function () {
	              var t = S.Lists.colors[e];S.Normalizations.registered[t] = function (e, r, n) {
	                switch (e) {case "name":
	                    return t;case "extract":
	                    var o;if (S.RegEx.wrappedValueAlreadyExtracted.test(n)) o = n;else {
	                      var i,
	                          s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : S.RegEx.isHex.test(n) ? i = "rgb(" + S.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
	                    }return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;case "inject":
	                    return 8 >= d ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
	              };
	            }();
	          }
	        } }, Names: { camelCase: function camelCase(e) {
	          return e.replace(/-(\w)/g, function (e, t) {
	            return t.toUpperCase();
	          });
	        }, SVGAttribute: function SVGAttribute(e) {
	          var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
	        }, prefixCheck: function prefixCheck(e) {
	          if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, a = t.length; a > r; r++) {
	            var n;if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
	              return e.toUpperCase();
	            }), m.isString(b.State.prefixElement.style[n])) return b.State.prefixMatches[e] = n, [n, !0];
	          }return [e, !1];
	        } }, Values: { hexToRgb: function hexToRgb(e) {
	          var t,
	              r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
	              a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(r, function (e, t, r, a) {
	            return t + t + r + r + a + a;
	          }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
	        }, isCSSNullValue: function isCSSNullValue(e) {
	          return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
	        }, getUnitType: function getUnitType(e) {
	          return (/^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
	          );
	        }, getDisplayType: function getDisplayType(e) {
	          var t = e && e.tagName.toString().toLowerCase();return (/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
	          );
	        }, addClass: function addClass(e, t) {
	          e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
	        }, removeClass: function removeClass(e, t) {
	          e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
	        } }, getPropertyValue: function getPropertyValue(e, r, n, o) {
	        function s(e, r) {
	          function n() {
	            u && S.setPropertyValue(e, "display", "none");
	          }var l = 0;if (8 >= d) l = f.css(e, r);else {
	            var u = !1;if (/^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (u = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
	              if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
	                var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);return n(), c;
	              }if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
	                var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);return n(), p;
	              }
	            }var g;g = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === l || null === l) && (l = e.style[r]), n();
	          }if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
	            var m = s(e, "position");("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (l = f(e).position()[r] + "px");
	          }return l;
	        }var l;if (S.Hooks.registered[r]) {
	          var u = r,
	              c = S.Hooks.getRoot(u);n === a && (n = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (n = S.Normalizations.registered[c]("extract", e, n)), l = S.Hooks.extractValue(u, n);
	        } else if (S.Normalizations.registered[r]) {
	          var p, g;p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g);
	        }if (!/^[\d-]/.test(l)) if (i(e) && i(e).isSVG && S.Names.SVGAttribute(r)) {
	          if (/^(height|width)$/i.test(r)) try {
	            l = e.getBBox()[r];
	          } catch (m) {
	            l = 0;
	          } else l = e.getAttribute(r);
	        } else l = s(e, S.Names.prefixCheck(r)[0]);return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l;
	      }, setPropertyValue: function setPropertyValue(e, r, a, n, o) {
	        var s = r;if ("scroll" === r) o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e)) S.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];else {
	          if (S.Hooks.registered[r]) {
	            var l = r,
	                u = S.Hooks.getRoot(r);n = n || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, n), r = u;
	          }if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], 8 >= d) try {
	            e.style[s] = a;
	          } catch (c) {
	            b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
	          } else i(e) && i(e).isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
	        }return [s, a];
	      }, flushTransformCache: function flushTransformCache(e) {
	        function t(t) {
	          return parseFloat(S.getPropertyValue(e, t));
	        }var r = "";if ((d || b.State.isAndroid && !b.State.isChrome) && i(e).isSVG) {
	          var a = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };f.each(i(e).transformCache, function (e) {
	            /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
	          });
	        } else {
	          var n, o;f.each(i(e).transformCache, function (t) {
	            return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void (r += t + n + " "));
	          }), o && (r = "perspective" + o + " " + r);
	        }S.setPropertyValue(e, "transform", r);
	      } };S.Hooks.register(), S.Normalizations.register(), b.hook = function (e, t, r) {
	      var n = a;return e = o(e), f.each(e, function (e, o) {
	        if (i(o) === a && b.init(o), r === a) n === a && (n = b.CSS.getPropertyValue(o, t));else {
	          var s = b.CSS.setPropertyValue(o, t, r);"transform" === s[0] && b.CSS.flushTransformCache(o), n = s;
	        }
	      }), n;
	    };var P = function P() {
	      function e() {
	        return s ? k.promise || null : l;
	      }function n() {
	        function e(e) {
	          function p(e, t) {
	            var r = a,
	                n = a,
	                i = a;return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? i = e[1] : (m.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), m.isFunction(r) && (r = r.call(o, V, w)), m.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i];
	          }function d(e, t) {
	            var r, a;return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
	              return r = e, "";
	            }), r || (r = S.Values.getUnitType(e)), [a, r];
	          }function h() {
	            var e = { myParent: o.parentNode || r.body, position: S.getPropertyValue(o, "position"), fontSize: S.getPropertyValue(o, "fontSize") },
	                a = e.position === L.lastPosition && e.myParent === L.lastParent,
	                n = e.fontSize === L.lastFontSize;L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;var s = 100,
	                l = {};if (n && a) l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;else {
	              var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function (e, t) {
	                b.CSS.setPropertyValue(u, t, "hidden");
	              }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
	                b.CSS.setPropertyValue(u, t, s + "%");
	              }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u);
	            }return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
	          }if (s.begin && 0 === V) try {
	            s.begin.call(g, g);
	          } catch (x) {
	            setTimeout(function () {
	              throw x;
	            }, 1);
	          }if ("scroll" === A) {
	            var P,
	                C,
	                T,
	                F = /^x$/i.test(s.axis) ? "Left" : "Top",
	                j = parseFloat(s.offset) || 0;s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, P = s.container["scroll" + F], T = P + f(o).position()[F.toLowerCase()] + j) : s.container = null : (P = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o).offset()[F.toLowerCase()] + j), l = { scroll: { rootPropertyValue: !1, startValue: P, currentValue: P, endValue: T, unitType: "", easing: s.easing, scrollData: { container: s.container, direction: F, alternateValue: C } }, element: o }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
	          } else if ("reverse" === A) {
	            if (!i(o).tweensContainer) return void f.dequeue(o, s.queue);"none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, i(o).opts, s);var E = f.extend(!0, {}, i(o).tweensContainer);for (var H in E) {
	              if ("element" !== H) {
	                var N = E[H].startValue;E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v) || (E[H].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o);
	              }
	            }l = E;
	          } else if ("start" === A) {
	            var E;i(o).tweensContainer && i(o).isAnimating === !0 && (E = i(o).tweensContainer), f.each(y, function (e, t) {
	              if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
	                var r = p(t, !0),
	                    n = r[0],
	                    o = r[1],
	                    i = r[2];if (S.RegEx.isHex.test(n)) {
	                  for (var s = ["Red", "Green", "Blue"], l = S.Values.hexToRgb(n), u = i ? S.Values.hexToRgb(i) : a, c = 0; c < s.length; c++) {
	                    var f = [l[c]];o && f.push(o), u !== a && f.push(u[c]), y[e + s[c]] = f;
	                  }delete y[e];
	                }
	              }
	            });for (var z in y) {
	              var O = p(y[z]),
	                  q = O[0],
	                  $ = O[1],
	                  M = O[2];z = S.Names.camelCase(z);var I = S.Hooks.getRoot(z),
	                  B = !1;if (i(o).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
	                (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o, I), M = S.getPropertyValue(o, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o, z));var W,
	                    G,
	                    Y,
	                    D = !1;if (W = d(z, M), M = W[0], Y = W[1], W = d(z, q), q = W[0].replace(/^([+-\/*])=/, function (e, t) {
	                  return D = t, "";
	                }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D)) G = Y;else if (Y !== G && 0 !== M) if (0 === q) G = Y;else {
	                  n = n || h();var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";switch (Y) {case "%":
	                      M *= "x" === Q ? n.percentToPxWidth : n.percentToPxHeight;break;case "px":
	                      break;default:
	                      M *= n[Y + "ToPx"];}switch (G) {case "%":
	                      M *= 1 / ("x" === Q ? n.percentToPxWidth : n.percentToPxHeight);break;case "px":
	                      break;default:
	                      M *= 1 / n[G + "ToPx"];}
	                }switch (D) {case "+":
	                    q = M + q;break;case "-":
	                    q = M - q;break;case "*":
	                    q = M * q;break;case "/":
	                    q = M / q;}l[z] = { rootPropertyValue: B, startValue: M, currentValue: M, endValue: q, unitType: G, easing: $ }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o);
	              } else b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
	            }l.element = o;
	          }l.element && (S.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (b.State.calls.push([R, g, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++);
	        }var n,
	            o = this,
	            s = f.extend({}, b.defaults, v),
	            l = {};switch (i(o) === a && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function (e) {
	          b.velocityQueueEntryFlag = !0, i(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(s.delay)), next: e };
	        }), s.duration.toString().toLowerCase()) {case "fast":
	            s.duration = 200;break;case "normal":
	            s.duration = h;break;case "slow":
	            s.duration = 600;break;default:
	            s.duration = parseFloat(s.duration) || 1;}b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function (t, r) {
	          return r === !0 ? (k.promise && k.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void e(t));
	        }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o);
	      }var s,
	          l,
	          d,
	          g,
	          y,
	          v,
	          x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));if (m.isWrapped(this) ? (s = !1, d = 0, g = this, l = this) : (s = !0, d = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = o(g)) {
	        x ? (y = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (y = arguments[d], v = arguments[d + 1]);var w = g.length,
	            V = 0;if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(v)) {
	          var C = d + 1;v = {};for (var T = C; T < arguments.length; T++) {
	            m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v.easing = arguments[T] : m.isFunction(arguments[T]) && (v.complete = arguments[T]) : v.duration = arguments[T];
	          }
	        }var k = { promise: null, resolver: null, rejecter: null };s && b.Promise && (k.promise = new b.Promise(function (e, t) {
	          k.resolver = e, k.rejecter = t;
	        }));var A;switch (y) {case "scroll":
	            A = "scroll";break;case "reverse":
	            A = "reverse";break;case "finish":case "stop":
	            f.each(g, function (e, t) {
	              i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer);
	            });var F = [];return f.each(b.State.calls, function (e, t) {
	              t && f.each(t[1], function (r, n) {
	                var o = v === a ? "" : v;return o === !0 || t[2].queue === o || v === a && t[2].queue === !1 ? void f.each(g, function (r, a) {
	                  a === n && ((v === !0 || m.isString(v)) && (f.each(f.queue(a, m.isString(v) ? v : ""), function (e, t) {
	                    m.isFunction(t) && t(null, !0);
	                  }), f.queue(a, m.isString(v) ? v : "", [])), "stop" === y ? (i(a) && i(a).tweensContainer && o !== !1 && f.each(i(a).tweensContainer, function (e, t) {
	                    t.endValue = t.currentValue;
	                  }), F.push(e)) : "finish" === y && (t[2].duration = 1));
	                }) : !0;
	              });
	            }), "stop" === y && (f.each(F, function (e, t) {
	              p(t, !0);
	            }), k.promise && k.resolver(g)), e();default:
	            if (!f.isPlainObject(y) || m.isEmptyObject(y)) {
	              if (m.isString(y) && b.Redirects[y]) {
	                var j = f.extend({}, v),
	                    E = j.duration,
	                    H = j.delay || 0;return j.backwards === !0 && (g = f.extend(!0, [], g).reverse()), f.each(g, function (e, t) {
	                  parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / w : (e + 1) / w), .75 * j.duration, 200)), b.Redirects[y].call(t, t, j || {}, e, w, g, k.promise ? k : a);
	                }), e();
	              }var N = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
	            }A = "start";}var L = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
	            R = [];f.each(g, function (e, t) {
	          m.isNode(t) && n.call(t);
	        });var z,
	            j = f.extend({}, b.defaults, v);if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop) for (var O = 0; z > O; O++) {
	          var q = { delay: j.delay, progress: j.progress };O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g, "reverse", q);
	        }return e();
	      }
	    };b = f.extend(P, b), b.animate = P;var w = t.requestAnimationFrame || g;return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function () {
	      r.hidden ? (w = function w(e) {
	        return setTimeout(function () {
	          e(!0);
	        }, 16);
	      }, c()) : w = t.requestAnimationFrame || g;
	    }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function (e, t) {
	      b.Redirects["slide" + t] = function (e, r, n, o, i, s) {
	        var l = f.extend({}, r),
	            u = l.begin,
	            c = l.complete,
	            p = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
	            d = {};l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function () {
	          u && u.call(i, i);for (var r in p) {
	            d[r] = e.style[r];var a = b.CSS.getPropertyValue(e, r);p[r] = "Down" === t ? [a, 0] : [0, a];
	          }d.overflow = e.style.overflow, e.style.overflow = "hidden";
	        }, l.complete = function () {
	          for (var t in d) {
	            e.style[t] = d[t];
	          }c && c.call(i, i), s && s.resolver(i);
	        }, b(e, p, l);
	      };
	    }), f.each(["In", "Out"], function (e, t) {
	      b.Redirects["fade" + t] = function (e, r, n, o, i, s) {
	        var l = f.extend({}, r),
	            u = { opacity: "In" === t ? 1 : 0 },
	            c = l.complete;l.complete = n !== o - 1 ? l.begin = null : function () {
	          c && c.call(i, i), s && s.resolver(i);
	        }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, u, l);
	      };
	    }), b;
	  }(window.jQuery || window.Zepto || window, window, document);
	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(32)(module)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map