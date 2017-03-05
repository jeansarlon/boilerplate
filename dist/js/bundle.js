/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {

		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

		var arr = [];

		var _slice = arr.slice;

		var concat = arr.concat;

		var push = arr.push;

		var indexOf = arr.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var support = {};

		var document = window.document,
		    version = "2.1.4",
		    jQuery = function jQuery(selector, context) {
			return new jQuery.fn.init(selector, context);
		},
		    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		    rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,
		    fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};

		jQuery.fn = jQuery.prototype = {
			jquery: version,

			constructor: jQuery,

			selector: "",

			length: 0,

			toArray: function toArray() {
				return _slice.call(this);
			},

			get: function get(num) {
				return num != null ? num < 0 ? this[num + this.length] : this[num] : _slice.call(this);
			},

			pushStack: function pushStack(elems) {
				var ret = jQuery.merge(this.constructor(), elems);

				ret.prevObject = this;
				ret.context = this.context;

				return ret;
			},

			each: function each(callback, args) {
				return jQuery.each(this, callback, args);
			},

			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},

			first: function first() {
				return this.eq(0);
			},

			last: function last() {
				return this.eq(-1);
			},

			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function end() {
				return this.prevObject || this.constructor(null);
			},

			push: push,
			sort: arr.sort,
			splice: arr.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			if (typeof target === "boolean") {
				deep = target;

				target = arguments[i] || {};
				i++;
			}

			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {
				if ((options = arguments[i]) != null) {
					for (name in options) {
						src = target[name];
						copy = options[name];

						if (target === copy) {
							continue;
						}

						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							target[name] = jQuery.extend(deep, clone, copy);
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			return target;
		};

		jQuery.extend({
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			isReady: true,

			error: function error(msg) {
				throw new Error(msg);
			},

			noop: function noop() {},

			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray,

			isWindow: function isWindow(obj) {
				return obj != null && obj === obj.window;
			},

			isNumeric: function isNumeric(obj) {
				return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
			},

			isPlainObject: function isPlainObject(obj) {
				if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}

				if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}

				return true;
			},

			isEmptyObject: function isEmptyObject(obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},

			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}

				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},

			globalEval: function globalEval(code) {
				var script,
				    indirect = eval;

				code = jQuery.trim(code);

				if (code) {
					if (code.indexOf("use strict") === 1) {
						script = document.createElement("script");
						script.text = code;
						document.head.appendChild(script).parentNode.removeChild(script);
					} else {
						indirect(code);
					}
				}
			},

			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			each: function each(obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);

				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					}
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					}
				}

				return obj;
			},

			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			makeArray: function makeArray(arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArraylike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function inArray(elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},

			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				for (; j < len; j++) {
					first[i++] = second[j];
				}

				first.length = i;

				return first;
			},

			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			map: function map(elems, callback, arg) {
				var value,
				    i = 0,
				    length = elems.length,
				    isArray = isArraylike(elems),
				    ret = [];

				if (isArray) {
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				}

				return concat.apply([], ret);
			},

			guid: 1,

			proxy: function proxy(fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};

				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			now: Date.now,

			support: support
		});

		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArraylike(obj) {
			var length = "length" in obj && obj.length,
			    type = jQuery.type(obj);

			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}

			if (obj.nodeType === 1 && length) {
				return true;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle = function (window) {

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
			    setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
			    expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
			    MAX_NEGATIVE = 1 << 31,
			    hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
			    indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			    whitespace = "[\\x20\\t\\r\\n\\f]",
			    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			    identifier = characterEncoding.replace("w", "w#"),
			    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
			    rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),

				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
			    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,
			    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;

				return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
			    unloadHandler = function unloadHandler() {
				setDocument();
			};

			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);

				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ? function (target, els) {
						push_native.apply(target, slice.call(els));
					} : function (target, els) {
						var j = target.length,
						    i = 0;

						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}

				context = context || document;
				results = results || [];
				nodeType = context.nodeType;

				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				if (!seed && documentIsHTML) {
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
						if (m = match[1]) {
							if (nodeType === 9) {
								elem = context.getElementById(m);

								if (elem && elem.parentNode) {
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;
						} else if ((m = match[3]) && support.getElementsByClassName) {
							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						nid = old = expando;
						newContext = context;
						newSelector = nodeType !== 1 && selector;

						if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);

							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";

							i = groups.length;
							while (i--) {
								groups[i] = nid + toSelector(groups[i]);
							}
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							newSelector = groups.join(",");
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}

				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			function createCache() {
				var keys = [];

				function cache(key, value) {
					if (keys.push(key + " ") > Expr.cacheLength) {
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			function assert(fn) {
				var div = document.createElement("div");

				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}

					div = null;
				}
			}

			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = attrs.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

				if (diff) {
					return diff;
				}

				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			support = Sizzle.support = {};

			isXML = Sizzle.isXML = function (elem) {
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    parent,
				    doc = node ? node.ownerDocument || node : preferredDoc;

				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				document = doc;
				docElem = doc.documentElement;
				parent = doc.defaultView;

				if (parent && parent !== parent.top) {
					if (parent.addEventListener) {
						parent.addEventListener("unload", unloadHandler, false);
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", unloadHandler);
					}
				}

				documentIsHTML = !isXML(doc);

				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});

				support.getElementsByTagName = assert(function (div) {
					div.appendChild(doc.createComment(""));
					return !div.getElementsByTagName("*").length;
				});

				support.getElementsByClassName = rnative.test(doc.getElementsByClassName);

				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !doc.getElementsByName || !doc.getElementsByName(expando).length;
				});

				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var m = context.getElementById(id);

							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					delete Expr.find["ID"];

					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
					    results = context.getElementsByTagName(tag);

					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				rbuggyMatches = [];

				rbuggyQSA = [];

				if (support.qsa = rnative.test(doc.querySelectorAll)) {
					assert(function (div) {
						docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";

						if (div.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						if (!div.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (div) {
						var input = doc.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");

						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (div) {
						support.disconnectedMatch = matches.call(div, "div");

						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				hasCompare = rnative.test(docElem.compareDocumentPosition);

				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				sortOrder = hasCompare ? function (a, b) {
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;

					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
						if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					if (!aup || !bup) {
						return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					while (ap[i] === bp[i]) {
						i++;
					}

					return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return doc;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],
				    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				sortInput = null;

				return results;
			};

			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					while (node = elem[i++]) {
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}


				return ret;
			};

			Expr = Sizzle.selectors = {
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
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);

						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function CHILD(match) {
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						if (match[3]) {
							match[2] = match[4] || match[5] || "";
						} else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ? function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    outerCache,
							    node,
							    diff,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType;

							if (parent) {
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}

										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								if (forward && useCache) {
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];
								} else {
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}

								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function PSEUDO(pseudo, argument) {
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						if (fn[expando]) {
							return fn(argument);
						}

						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					"not": markFunction(function (selector) {
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);

							input[0] = null;
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					"lang": markFunction(function (lang) {
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function root(elem) {
						return elem === docElem;
					},

					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					"enabled": function enabled(elem) {
						return elem.disabled === false;
					},

					"disabled": function disabled(elem) {
						return elem.disabled === true;
					},

					"checked": function checked(elem) {
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function selected(elem) {
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					"empty": function empty(elem) {
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},

					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,

							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;

				return combinator.first ? function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} : function (elem, context, xml) {
					var oldCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
									return newCache[2] = oldCache[2];
								} else {
									outerCache[dir] = newCache;

									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
					    elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
					    matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;

					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
				    matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));

					checkContext = null;
					return ret;
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						if (matcher[expando]) {
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
					    elems = seed || byElement && Expr.find["TAG"]("*", outermost),
					    dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context !== document && context;
					}

					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						if (bySet) {
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							setMatched = condense(setMatched);
						}

						push.apply(results, setMatched);

						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					cached.selector = selector;
				}
				return cached;
			};

			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				if (match.length === 1) {
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			support.detectDuplicates = !!hasDuplicate;

			setDocument();

			support.sortDetached = assert(function (div1) {
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});

			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		}(window);

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;

		var rneedsContext = jQuery.expr.match.needsContext;

		var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;

		var risSimple = /^.[^:#\[\.,]*$/;

		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}

				qualifier = jQuery.filter(qualifier, elements);
			}

			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) >= 0 !== not;
			});
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    len = this.length,
				    ret = [],
				    self = this;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});

		var rootjQuery,
		    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context) {
			var match, elem;

			if (!selector) {
				return this;
			}

			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				if (match && (match[1] || !context)) {
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;
					} else {
						elem = document.getElementById(match[2]);

						if (elem && elem.parentNode) {
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);
				} else {
					return this.constructor(context).find(selector);
				}
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
			} else if (jQuery.isFunction(selector)) {
				return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		};

		init.prototype = jQuery.fn;

		rootjQuery = jQuery(document);

		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		    guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.extend({
			dir: function dir(elem, _dir, until) {
				var matched = [],
				    truncate = until !== undefined;

				while ((elem = elem[_dir]) && elem.nodeType !== 9) {
					if (elem.nodeType === 1) {
						if (truncate && jQuery(elem).is(until)) {
							break;
						}
						matched.push(elem);
					}
				}
				return matched;
			},

			sibling: function sibling(n, elem) {
				var matched = [];

				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						matched.push(n);
					}
				}

				return matched;
			}
		});

		jQuery.fn.extend({
			has: function has(target) {
				var targets = jQuery(target, this),
				    l = targets.length;

				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
			},

			index: function index(elem) {
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}

				return indexOf.call(this, elem.jquery ? elem[0] : elem);
			},

			add: function add(selector, context) {
				return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}

		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return jQuery.dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return jQuery.dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return jQuery.dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return jQuery.dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return jQuery.dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return jQuery.dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return jQuery.sibling(elem.firstChild);
			},
			contents: function contents(elem) {
				return elem.contentDocument || jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}

				if (this.length > 1) {
					if (!guaranteedUnique[name]) {
						jQuery.unique(matched);
					}

					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}

				return this.pushStack(matched);
			};
		});
		var rnotwhite = /\S+/g;

		var optionsCache = {};

		function createOptions(options) {
			var object = optionsCache[options] = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		jQuery.Callbacks = function (options) {
			options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

			var memory,
			    _fired,
			    firing,
			    firingStart,
			    firingLength,
			    firingIndex,
			    list = [],
			    stack = !options.once && [],
			    fire = function fire(data) {
				memory = options.memory && data;
				_fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false;
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			    self = {
				add: function add() {
					if (list) {
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									add(arg);
								}
							});
						})(arguments);

						if (firing) {
							firingLength = list.length;
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},

				remove: function remove() {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);

								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},

				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},

				empty: function empty() {
					list = [];
					firingLength = 0;
					return this;
				},

				disable: function disable() {
					list = stack = memory = undefined;
					return this;
				},

				disabled: function disabled() {
					return !list;
				},

				lock: function lock() {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},

				locked: function locked() {
					return !stack;
				},

				fireWith: function fireWith(context, args) {
					if (list && (!_fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},

				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},

				fired: function fired() {
					return !!_fired;
				}
			};

			return self;
		};

		jQuery.extend({

			Deferred: function Deferred(func) {
				var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function then() {
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];

								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},

					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};

				_promise.pipe = _promise.then;

				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];

					_promise[tuple[1]] = list.add;

					if (stateString) {
						list.add(function () {
							_state = stateString;
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}

					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				_promise.promise(deferred);

				if (func) {
					func.call(deferred, deferred);
				}

				return deferred;
			},

			when: function when(subordinate) {
				var i = 0,
				    resolveValues = _slice.call(arguments),
				    length = resolveValues.length,
				    remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
				    deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
				    updateFunc = function updateFunc(i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;

				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
						} else {
							--remaining;
						}
					}
				}

				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}

				return deferred.promise();
			}
		});

		var readyList;

		jQuery.fn.ready = function (fn) {
			jQuery.ready.promise().done(fn);

			return this;
		};

		jQuery.extend({
			isReady: false,

			readyWait: 1,

			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			ready: function ready(wait) {
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				jQuery.isReady = true;

				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				readyList.resolveWith(document, [jQuery]);

				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});

		function completed() {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
			jQuery.ready();
		}

		jQuery.ready.promise = function (obj) {
			if (!readyList) {

				readyList = jQuery.Deferred();

				if (document.readyState === "complete") {
					setTimeout(jQuery.ready);
				} else {
					document.addEventListener("DOMContentLoaded", completed, false);

					window.addEventListener("load", completed, false);
				}
			}
			return readyList.promise(obj);
		};

		jQuery.ready.promise();

		var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;

			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {
					if (raw) {
						fn.call(elems, value);
						fn = null;
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
		};

		jQuery.acceptData = function (owner) {
			return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
		};

		function Data() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function get() {
					return {};
				}
			});

			this.expando = jQuery.expando + Data.uid++;
		}

		Data.uid = 1;
		Data.accepts = jQuery.acceptData;

		Data.prototype = {
			key: function key(owner) {
				if (!Data.accepts(owner)) {
					return 0;
				}

				var descriptor = {},
				    unlock = owner[this.expando];

				if (!unlock) {
					unlock = Data.uid++;

					try {
						descriptor[this.expando] = { value: unlock };
						Object.defineProperties(owner, descriptor);
					} catch (e) {
						descriptor[this.expando] = unlock;
						jQuery.extend(owner, descriptor);
					}
				}

				if (!this.cache[unlock]) {
					this.cache[unlock] = {};
				}

				return unlock;
			},
			set: function set(owner, data, value) {
				var prop,
				    unlock = this.key(owner),
				    cache = this.cache[unlock];

				if (typeof data === "string") {
					cache[data] = value;
				} else {
					if (jQuery.isEmptyObject(cache)) {
						jQuery.extend(this.cache[unlock], data);
					} else {
						for (prop in data) {
							cache[prop] = data[prop];
						}
					}
				}
				return cache;
			},
			get: function get(owner, key) {
				var cache = this.cache[this.key(owner)];

				return key === undefined ? cache : cache[key];
			},
			access: function access(owner, key, value) {
				var stored;

				if (key === undefined || key && typeof key === "string" && value === undefined) {

					stored = this.get(owner, key);

					return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
				}

				this.set(owner, key, value);

				return value !== undefined ? value : key;
			},
			remove: function remove(owner, key) {
				var i,
				    name,
				    camel,
				    unlock = this.key(owner),
				    cache = this.cache[unlock];

				if (key === undefined) {
					this.cache[unlock] = {};
				} else {
					if (jQuery.isArray(key)) {
						name = key.concat(key.map(jQuery.camelCase));
					} else {
						camel = jQuery.camelCase(key);

						if (key in cache) {
							name = [key, camel];
						} else {
							name = camel;
							name = name in cache ? [name] : name.match(rnotwhite) || [];
						}
					}

					i = name.length;
					while (i--) {
						delete cache[name[i]];
					}
				}
			},
			hasData: function hasData(owner) {
				return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
			},
			discard: function discard(owner) {
				if (owner[this.expando]) {
					delete this.cache[owner[this.expando]];
				}
			}
		};
		var data_priv = new Data();

		var data_user = new Data();

		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /([A-Z])/g;

		function dataAttr(elem, key, data) {
			var name;

			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}

					data_user.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}

		jQuery.extend({
			hasData: function hasData(elem) {
				return data_user.hasData(elem) || data_priv.hasData(elem);
			},

			data: function data(elem, name, _data) {
				return data_user.access(elem, name, _data);
			},

			removeData: function removeData(elem, name) {
				data_user.remove(elem, name);
			},

			_data: function _data(elem, name, data) {
				return data_priv.access(elem, name, data);
			},

			_removeData: function _removeData(elem, name) {
				data_priv.remove(elem, name);
			}
		});

		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				if (key === undefined) {
					if (this.length) {
						data = data_user.get(elem);

						if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							data_priv.set(elem, "hasDataAttrs", true);
						}
					}

					return data;
				}

				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						data_user.set(this, key);
					});
				}

				return access(this, function (value) {
					var data,
					    camelKey = jQuery.camelCase(key);

					if (elem && value === undefined) {
						data = data_user.get(elem, key);
						if (data !== undefined) {
							return data;
						}

						data = data_user.get(elem, camelKey);
						if (data !== undefined) {
							return data;
						}

						data = dataAttr(elem, camelKey, undefined);
						if (data !== undefined) {
							return data;
						}

						return;
					}

					this.each(function () {
						var data = data_user.get(this, camelKey);

						data_user.set(this, camelKey, value);

						if (key.indexOf("-") !== -1 && data !== undefined) {
							data_user.set(this, key, value);
						}
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function removeData(key) {
				return this.each(function () {
					data_user.remove(this, key);
				});
			}
		});

		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = data_priv.get(elem, type);

					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = data_priv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function dequeue(elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};

				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return data_priv.get(elem, key) || data_priv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						data_priv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},

			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = data_priv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var isHidden = function isHidden(elem, el) {
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};

		var rcheckableType = /^(?:checkbox|radio)$/i;

		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");

			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();
		var strundefined =  true ? "undefined" : _typeof(undefined);

		support.focusinBubbles = "onfocusin" in window;

		var rkeyEvent = /^key/,
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
			} catch (err) {}
		}

		jQuery.event = {

			global: {},

			add: function add(elem, types, handler, data, selector) {

				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = data_priv.get(elem);

				if (!elemData) {
					return;
				}

				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
						return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}

				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					if (!type) {
						continue;
					}

					special = jQuery.event.special[type] || {};

					type = (selector ? special.delegateType : special.bindType) || type;

					special = jQuery.event.special[type] || {};

					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					jQuery.event.global[type] = true;
				}
			},

			remove: function remove(elem, types, handler, selector, mappedTypes) {

				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = data_priv.hasData(elem) && data_priv.get(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;
					data_priv.remove(elem, "events");
				}
			},

			trigger: function trigger(event, data, elem, onlyHandlers) {

				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") >= 0) {
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

					event.type = i > 1 ? bubbleType : special.bindType || type;

					handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					handle = ontype && cur[ontype];
					if (handle && handle.apply && jQuery.acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
						if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							jQuery.event.triggered = type;
							elem[type]();
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			dispatch: function dispatch(event) {
				event = jQuery.event.fix(event);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue = [],
				    args = _slice.call(arguments),
				    handlers = (data_priv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				args[0] = event;
				event.delegateTarget = this;

				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
						if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function handlers(event, _handlers) {
				var i,
				    matches,
				    sel,
				    handleObj,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;

				if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

					for (; cur !== this; cur = cur.parentNode || this) {
						if (cur.disabled !== true || event.type !== "click") {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];

								sel = handleObj.selector + " ";

								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}

				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

			fixHooks: {},

			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(event, original) {
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}

					return event;
				}
			},

			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function filter(event, original) {
					var eventDoc,
					    doc,
					    body,
					    button = original.button;

					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;

						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}

					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}

					return event;
				}
			},

			fix: function fix(event) {
				if (event[jQuery.expando]) {
					return event;
				}

				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];

				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

				event = new jQuery.Event(originalEvent);

				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}

				if (!event.target) {
					event.target = document;
				}

				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}

				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},

			special: {
				load: {
					noBubble: true
				},
				focus: {
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function trigger() {
						if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
							this.click();
							return false;
						}
					},

					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},

				beforeunload: {
					postDispatch: function postDispatch(event) {
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},

			simulate: function simulate(type, elem, event, bubble) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true,
					originalEvent: {}
				});
				if (bubble) {
					jQuery.event.trigger(e, null, elem);
				} else {
					jQuery.event.dispatch.call(elem, e);
				}
				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};

		jQuery.removeEvent = function (elem, type, handle) {
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			}
		};

		jQuery.Event = function (src, props) {
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
			} else {
				this.type = src;
			}

			if (props) {
				jQuery.extend(this, props);
			}

			this.timeStamp = src && src.timeStamp || jQuery.now();

			this[jQuery.expando] = true;
		};

		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,

			preventDefault: function preventDefault() {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;

				if (e && e.preventDefault) {
					e.preventDefault();
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (e && e.stopPropagation) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e && e.stopImmediatePropagation) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		if (!support.focusinBubbles) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};

				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = data_priv.access(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						data_priv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = data_priv.access(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							data_priv.remove(doc, fix);
						} else {
							data_priv.access(doc, fix, attaches);
						}
					}
				};
			});
		}

		jQuery.fn.extend({

			on: function on(types, selector, data, fn, one) {
				var origFn, type;

				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					if (typeof selector !== "string") {
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						this.on(type, selector, data, types[type], one);
					}
					return this;
				}

				if (data == null && fn == null) {
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {
						fn = data;
						data = undefined;
					} else {
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return this;
				}

				if (one === 1) {
					origFn = fn;
					fn = function fn(event) {
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};

					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return this.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			},
			one: function one(types, selector, data, fn) {
				return this.on(types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},

			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});

		var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    rtagName = /<([\w:]+)/,
		    rhtml = /<|&#?\w+;/,
		    rnoInnerhtml = /<(?:script|style|link)/i,
		    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptType = /^$|\/(?:java|ecma)script/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		    wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],

			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}

		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);

			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}

			return elem;
		}

		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
			}
		}

		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

			if (dest.nodeType !== 1) {
				return;
			}

			if (data_priv.hasData(src)) {
				pdataOld = data_priv.access(src);
				pdataCur = data_priv.set(dest, pdataOld);
				events = pdataOld.events;

				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}

			if (data_user.hasData(src)) {
				udataOld = data_user.access(src);
				udataCur = jQuery.extend({}, udataOld);

				data_user.set(dest, udataCur);
			}
		}

		function getAll(context, tag) {
			var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];

			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
		}

		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();

			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		jQuery.extend({
			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
					destElements = getAll(clone);
					srcElements = getAll(elem);

					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}

				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				return clone;
			},

			buildFragment: function buildFragment(elems, context, scripts, selection) {
				var elem,
				    tmp,
				    tag,
				    wrap,
				    contains,
				    j,
				    fragment = context.createDocumentFragment(),
				    nodes = [],
				    i = 0,
				    l = elems.length;

				for (; i < l; i++) {
					elem = elems[i];

					if (elem || elem === 0) {
						if (jQuery.type(elem) === "object") {
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));
						} else {
							tmp = tmp || fragment.appendChild(context.createElement("div"));

							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
							tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}

							jQuery.merge(nodes, tmp.childNodes);

							tmp = fragment.firstChild;

							tmp.textContent = "";
						}
					}
				}

				fragment.textContent = "";

				i = 0;
				while (elem = nodes[i++]) {
					if (selection && jQuery.inArray(elem, selection) !== -1) {
						continue;
					}

					contains = jQuery.contains(elem.ownerDocument, elem);

					tmp = getAll(fragment.appendChild(elem), "script");

					if (contains) {
						setGlobalEval(tmp);
					}

					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}

				return fragment;
			},

			cleanData: function cleanData(elems) {
				var data,
				    elem,
				    type,
				    key,
				    special = jQuery.event.special,
				    i = 0;

				for (; (elem = elems[i]) !== undefined; i++) {
					if (jQuery.acceptData(elem)) {
						key = elem[data_priv.expando];

						if (key && (data = data_priv.cache[key])) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
							if (data_priv.cache[key]) {
								delete data_priv.cache[key];
							}
						}
					}

					delete data_user.cache[elem[data_user.expando]];
				}
			}
		});

		jQuery.fn.extend({
			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},

			append: function append() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function prepend() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function before() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function after() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			remove: function remove(selector, keepData) {
				var elem,
				    elems = selector ? jQuery.filter(selector, this) : this,
				    i = 0;

				for (; (elem = elems[i]) != null; i++) {
					if (!keepData && elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem));
					}

					if (elem.parentNode) {
						if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
							setGlobalEval(getAll(elem, "script"));
						}
						elem.parentNode.removeChild(elem);
					}
				}

				return this;
			},

			empty: function empty() {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem, false));

						elem.textContent = "";
					}
				}

				return this;
			},

			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}

					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = value.replace(rxhtmlTag, "<$1></$2>");

						try {
							for (; i < l; i++) {
								elem = this[i] || {};

								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function replaceWith() {
				var arg = arguments[0];

				this.domManip(arguments, function (elem) {
					arg = this.parentNode;

					jQuery.cleanData(getAll(this));

					if (arg) {
						arg.replaceChild(elem, this);
					}
				});

				return arg && (arg.length || arg.nodeType) ? this : this.remove();
			},

			detach: function detach(selector) {
				return this.remove(selector, true);
			},

			domManip: function domManip(args, callback) {
				args = concat.apply([], args);

				var fragment,
				    first,
				    scripts,
				    hasScripts,
				    node,
				    doc,
				    i = 0,
				    l = this.length,
				    set = this,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);

				if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return this.each(function (index) {
						var self = set.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, self.html());
						}
						self.domManip(args, callback);
					});
				}

				if (l) {
					fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
					first = fragment.firstChild;

					if (fragment.childNodes.length === 1) {
						fragment = first;
					}

					if (first) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;

						for (; i < l; i++) {
							node = fragment;

							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);

								if (hasScripts) {
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}

							callback.call(this[i], node, i);
						}

						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;

							jQuery.map(scripts, restoreScript);

							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {

									if (node.src) {
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
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
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});

		var iframe,
		    elemdisplay = {};

		function actualDisplay(name, doc) {
			var style,
			    elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			    display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");

			elem.detach();

			return display;
		}

		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];

			if (!display) {
				display = actualDisplay(nodeName, doc);

				if (display === "none" || !display) {
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

					doc = iframe[0].contentDocument;

					doc.write();
					doc.close();

					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}

				elemdisplay[nodeName] = display;
			}

			return display;
		}
		var rmargin = /^margin/;

		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var getStyles = function getStyles(elem) {
			if (elem.ownerDocument.defaultView.opener) {
				return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
			}

			return window.getComputedStyle(elem, null);
		};

		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);

			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];
			}

			if (computed) {

				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				if (rnumnonpx.test(ret) && rmargin.test(name)) {
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret !== undefined ? ret + "" : ret;
		}

		function addGetHookIf(conditionFn, hookFn) {
			return {
				get: function get() {
					if (conditionFn()) {
						delete this.get;
						return;
					}

					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}

		(function () {
			var pixelPositionVal,
			    boxSizingReliableVal,
			    docElem = document.documentElement,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			if (!div.style) {
				return;
			}

			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
			container.appendChild(div);

			function computePixelPositionAndBoxSizingReliable() {
				div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
				div.innerHTML = "";
				docElem.appendChild(container);

				var divStyle = window.getComputedStyle(div, null);
				pixelPositionVal = divStyle.top !== "1%";
				boxSizingReliableVal = divStyle.width === "4px";

				docElem.removeChild(container);
			}

			if (window.getComputedStyle) {
				jQuery.extend(support, {
					pixelPosition: function pixelPosition() {
						computePixelPositionAndBoxSizingReliable();
						return pixelPositionVal;
					},
					boxSizingReliable: function boxSizingReliable() {
						if (boxSizingReliableVal == null) {
							computePixelPositionAndBoxSizingReliable();
						}
						return boxSizingReliableVal;
					},
					reliableMarginRight: function reliableMarginRight() {
						var ret,
						    marginDiv = div.appendChild(document.createElement("div"));

						marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
						marginDiv.style.marginRight = marginDiv.style.width = "0";
						div.style.width = "1px";
						docElem.appendChild(container);

						ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);

						docElem.removeChild(container);
						div.removeChild(marginDiv);

						return ret;
					}
				});
			}
		})();

		jQuery.swap = function (elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};

		var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

		function vendorPropName(style, name) {
			if (name in style) {
				return name;
			}

			var capName = name[0].toUpperCase() + name.slice(1),
			    origName = name,
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in style) {
					return name;
				}
			}

			return origName;
		}

		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
			    val = 0;

			for (; i < 4; i += 2) {
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			if (val <= 0 || val == null) {
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				if (rnumnonpx.test(val)) {
					return val;
				}

				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				val = parseFloat(val) || 0;
			}

			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;

			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				values[index] = data_priv.get(elem, "olddisplay");
				display = elem.style.display;
				if (show) {
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}

					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);

					if (display !== "none" || !hidden) {
						data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}

			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}

			return elements;
		}

		jQuery.extend({
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

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

			cssProps: {
				"float": "cssFloat"
			},

			style: function style(elem, name, value, extra) {
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);

					if (type === "string" && (ret = rrelNum.exec(value))) {
						value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));

						type = "number";
					}

					if (value == null || value !== value) {
						return;
					}

					if (type === "number" && !jQuery.cssNumber[origName]) {
						value += "px";
					}

					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
						style[name] = value;
					}
				} else {
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
						return ret;
					}

					return style[name];
				}
			},

			css: function css(elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
				}
				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function set(elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});

		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});

		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
					    parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;

					if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
						return tween.elem[tween.prop];
					}

					result = jQuery.css(tween.elem, tween.prop, "");

					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			}
		};

		jQuery.fx = Tween.prototype.init;

		jQuery.fx.step = {};

		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
		    rrun = /queueHooks$/,
		    animationPrefilters = [defaultPrefilter],
		    tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
				    target = tween.cur(),
				    parts = rfxnum.exec(value),
				    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
				    start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
				    scale = 1,
				    maxIterations = 20;

				if (start && start[3] !== unit) {
					unit = unit || start[3];

					parts = parts || [];

					start = +target || 1;

					do {
						scale = scale || ".5";

						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}

				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;

					tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
				}

				return tween;
			}]
		};

		function createFxNow() {
			setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };

			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (tweeners[prop] || []).concat(tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = data_priv.get(elem, "fxshow");

			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				display = jQuery.css(elem, "display");

				checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
					style.display = "inline-block";
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}

			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				} else {
					display = undefined;
				}
			}

			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = data_priv.access(elem, "fxshow", {});
				}

				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;

					data_priv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
				style.display = display;
			}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = animationPrefilters.length,
			    deferred = jQuery.Deferred().always(function () {
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
				    temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
					    length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = animationPrefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.split(" ");
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					tweeners[prop] = tweeners[prop] || [];
					tweeners[prop].unshift(callback);
				}
			},

			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					animationPrefilters.unshift(callback);
				} else {
					animationPrefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {
				return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					if (empty || data_priv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = data_priv.get(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = data_priv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					data.finish = true;

					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];

				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};

		jQuery.fx.interval = 13;

		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			clearInterval(timerId);
			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,

			_default: 400
		};

		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		};

		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			input.type = "checkbox";

			support.checkOn = input.value !== "";

			support.optSelected = opt.selected;

			select.disabled = true;
			support.optDisabled = !opt.disabled;

			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();

		var nodeHook,
		    boolHook,
		    attrHandle = jQuery.expr.attrHandle;

		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function attr(elem, name, value) {
				var hooks,
				    ret,
				    nType = elem.nodeType;

				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				if (_typeof(elem.getAttribute) === strundefined) {
					return jQuery.prop(elem, name, value);
				}

				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
				}

				if (value !== undefined) {

					if (value === null) {
						jQuery.removeAttr(elem, name);
					} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						elem.setAttribute(name, value + "");
						return value;
					}
				} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {
					ret = jQuery.find.attr(elem, name);

					return ret == null ? undefined : ret;
				}
			},

			removeAttr: function removeAttr(elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;

						if (jQuery.expr.match.bool.test(name)) {
							elem[propName] = false;
						}

						elem.removeAttribute(name);
					}
				}
			},

			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			}
		});

		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			attrHandle[name] = function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
					attrHandle[name] = handle;
				}
				return ret;
			};
		});

		var rfocusable = /^(?:input|select|textarea|button)$/i;

		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function removeProp(name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});

		jQuery.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},

			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;

				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

				if (notxml) {
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
				} else {
					return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
				}
			},

			propHooks: {
				tabIndex: {
					get: function get(elem) {
						return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
					}
				}
			}
		});

		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});

		var rclass = /[\t\r\n\f]/g;

		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    proceed = typeof value === "string" && value,
				    i = 0,
				    len = this.length;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, this.className));
					});
				}

				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							finalValue = jQuery.trim(cur);
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}

				return this;
			},

			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    proceed = arguments.length === 0 || typeof value === "string" && value,
				    i = 0,
				    len = this.length;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, this.className));
					});
				}
				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];

						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								while (cur.indexOf(" " + clazz + " ") >= 0) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							finalValue = value ? jQuery.trim(cur) : "";
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}

				return this;
			},

			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);

				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
					});
				}

				return this.each(function () {
					if (type === "string") {
						var className,
						    i = 0,
						    self = jQuery(this),
						    classNames = value.match(rnotwhite) || [];

						while (className = classNames[i++]) {
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}
					} else if (type === strundefined || type === "boolean") {
						if (this.className) {
							data_priv.set(this, "__className__", this.className);
						}

						this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
					}
				});
			},

			hasClass: function hasClass(selector) {
				var className = " " + selector + " ",
				    i = 0,
				    l = this.length;
				for (; i < l; i++) {
					if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
						return true;
					}
				}

				return false;
			}
		});

		var rreturn = /\r/g;

		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val : jQuery.trim(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;

						for (; i < max; i++) {
							option = options[i];

							if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
								value = jQuery(option).val();

								if (one) {
									return value;
								}

								values.push(value);
							}
						}

						return values;
					},

					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];
							if (option.selected = jQuery.inArray(option.value, values) >= 0) {
								optionSet = true;
							}
						}

						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});

		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});

		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			},

			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});

		var nonce = jQuery.now();

		var rquery = /\?/;

		jQuery.parseJSON = function (data) {
			return JSON.parse(data + "");
		};

		jQuery.parseXML = function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}

			try {
				tmp = new DOMParser();
				xml = tmp.parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};

		var rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		    prefilters = {},
		    transports = {},
		    allTypes = "*/".concat("*"),
		    ajaxLocation = window.location.href,
		    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

		function addToPrefiltersOrTransports(structure) {
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

				if (jQuery.isFunction(func)) {
					while (dataType = dataTypes[i++]) {
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		function ajaxHandleResponses(s, jqXHR, responses) {

			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}

				finalDataType = finalDataType || firstDataType;
			}

			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
			    dataTypes = s.dataTypes.slice();

			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			while (current) {

				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {
					if (current === "*") {

						current = prev;
					} else if (prev !== "*" && prev !== current) {
						conv = converters[prev + " " + current] || converters["* " + current];

						if (!conv) {
							for (conv2 in converters) {
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
										if (conv === true) {
											conv = converters[conv2];
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}

						if (conv !== true) {
							if (conv && s["throws"]) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
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
			active: 0,

			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",


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

				converters: {
					"* text": String,

					"text html": true,

					"text json": jQuery.parseJSON,

					"text xml": jQuery.parseXML
				},

				flatOptions: {
					url: true,
					context: true
				}
			},

			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			ajax: function ajax(url, options) {
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}

				options = options || {};

				var transport,
				    cacheURL,
				    responseHeadersString,
				    responseHeaders,
				    timeoutTimer,
				    parts,
				    fireGlobals,
				    i,
				    s = jQuery.ajaxSetup({}, options),
				    callbackContext = s.context || s,
				    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
				    deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
				    _statusCode = s.statusCode || {},
				    requestHeaders = {},
				    requestHeadersNames = {},
				    state = 0,
				    strAbort = "canceled",
				    jqXHR = {
					readyState: 0,

					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					getAllResponseHeaders: function getAllResponseHeaders() {
						return state === 2 ? responseHeadersString : null;
					},

					setRequestHeader: function setRequestHeader(name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					overrideMimeType: function overrideMimeType(type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							} else {
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;

				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

				s.type = options.method || options.type || s.method || s.type;

				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
				}

				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				if (state === 2) {
					return jqXHR;
				}

				fireGlobals = jQuery.event && s.global;

				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				s.type = s.type.toUpperCase();

				s.hasContent = !rnoContent.test(s.type);

				cacheURL = s.url;

				if (!s.hasContent) {
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;

						delete s.data;
					}

					if (s.cache === false) {
						s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}

				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
					return jqXHR.abort();
				}

				strAbort = "abort";

				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}

				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}

					if (s.async && s.timeout > 0) {
						timeoutTimer = setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {
						if (state < 2) {
							done(-1, e);
						} else {
							throw e;
						}
					}
				}

				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					if (state === 2) {
						return;
					}

					state = 2;

					if (timeoutTimer) {
						clearTimeout(timeoutTimer);
					}

					transport = undefined;

					responseHeadersString = headers || "";

					jqXHR.readyState = status > 0 ? 4 : 0;

					isSuccess = status >= 200 && status < 300 || status === 304;

					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					response = ajaxConvert(s, response, jqXHR, isSuccess);

					if (isSuccess) {
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";
						} else if (status === 304) {
							statusText = "notmodified";
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
				if (jQuery.isFunction(data)) {
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

		jQuery._evalUrl = function (url) {
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
			wrapAll: function wrapAll(html) {
				var wrap;

				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}

				if (this[0]) {
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function unwrap() {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});

		jQuery.expr.filters.hidden = function (elem) {
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
		};
		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};

		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
						add(prefix, v);
					} else {
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
				add(prefix, obj);
			}
		}

		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, value) {
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}

			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			return s.join("&").replace(r20, "+");
		};

		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		jQuery.ajaxSettings.xhr = function () {
			try {
				return new XMLHttpRequest();
			} catch (e) {}
		};

		var xhrId = 0,
		    xhrCallbacks = {},
		    xhrSuccessStatus = {
			0: 200,

			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		if (window.attachEvent) {
			window.attachEvent("onunload", function () {
				for (var key in xhrCallbacks) {
					xhrCallbacks[key]();
				}
			});
		}

		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;

		jQuery.ajaxTransport(function (options) {
			var _callback;

			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr(),
						    id = ++xhrId;

						xhr.open(options.type, options.url, options.async, options.username, options.password);

						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}

						_callback = function callback(type) {
							return function () {
								if (_callback) {
									delete xhrCallbacks[id];
									_callback = xhr.onload = xhr.onerror = null;

									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {
										complete(xhr.status, xhr.statusText);
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined, xhr.getAllResponseHeaders());
									}
								}
							};
						};

						xhr.onload = _callback();
						xhr.onerror = _callback("error");

						_callback = xhrCallbacks[id] = _callback("abort");

						try {
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {
							if (_callback) {
								throw e;
							}
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback();
						}
					}
				};
			}
		});

		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});

		jQuery.ajaxTransport("script", function (s) {
			if (s.crossDomain) {
				var script, _callback2;
				return {
					send: function send(_, complete) {
						script = jQuery("<script>").prop({
							async: true,
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", _callback2 = function callback(evt) {
							script.remove();
							_callback2 = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});
						document.head.appendChild(script[0]);
					},
					abort: function abort() {
						if (_callback2) {
							_callback2();
						}
					}
				};
			}
		});

		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

			if (jsonProp || s.dataTypes[0] === "jsonp") {
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				s.dataTypes[0] = "json";

				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				jqXHR.always(function () {
					window[callbackName] = overwritten;

					if (s[callbackName]) {
						s.jsonpCallback = originalSettings.jsonpCallback;

						oldCallbacks.push(callbackName);
					}

					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				return "script";
			}
		});

		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];

			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = jQuery.buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};

		var _load = jQuery.fn.load;

		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}

			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off >= 0) {
				selector = jQuery.trim(url.slice(off));
				url = url.slice(0, off);
			}

			if (jQuery.isFunction(params)) {
				callback = params;
				params = undefined;
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}

			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					type: type,
					dataType: "html",
					data: params
				}).done(function (responseText) {
					response = arguments;

					self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
				}).complete(callback && function (jqXHR, status) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				});
			}

			return this;
		};

		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};

		var docElem = window.document.documentElement;

		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
		}

		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {
					options = options.call(elem, i, curOffset);
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({
			offset: function offset(options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var docElem,
				    win,
				    elem = this[0],
				    box = { top: 0, left: 0 },
				    doc = elem && elem.ownerDocument;

				if (!doc) {
					return;
				}

				docElem = doc.documentElement;

				if (!jQuery.contains(docElem, elem)) {
					return box;
				}

				if (_typeof(elem.getBoundingClientRect) !== strundefined) {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				return {
					top: box.top + win.pageYOffset - docElem.clientTop,
					left: box.left + win.pageXOffset - docElem.clientLeft
				};
			},

			position: function position() {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };

				if (jQuery.css(elem, "position") === "fixed") {
					offset = elem.getBoundingClientRect();
				} else {
					offsetParent = this.offsetParent();

					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}

				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent || docElem;

					while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || docElem;
				});
			}
		});

		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});

		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});

		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {
							return elem.document.documentElement["client" + name];
						}

						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});

		jQuery.fn.size = function () {
			return this.length;
		};

		jQuery.fn.andSelf = jQuery.fn.addBack;

		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}

		var _jQuery = window.jQuery,
		    _$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		if ((typeof noGlobal === "undefined" ? "undefined" : _typeof(noGlobal)) === strundefined) {
			window.jQuery = window.$ = jQuery;
		}

		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];

			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	'use strict';

	var _example = __webpack_require__(4);

	var _example2 = _interopRequireDefault(_example);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.jQuery = window.$ = __webpack_require__(5);
	__webpack_require__(6);

	__webpack_require__(7);

	var elem = "jnjhn";

	var example = new _example2.default({ element: elem });

	example.foo();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(5),
	    Example = void 0;

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

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	(function (global, factory) {

		if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
			module.exports = global.document ? factory(global, true) : function (w) {
				if (!w.document) {
					throw new Error("jQuery requires a window with a document");
				}
				return factory(w);
			};
		} else {
			factory(global);
		}
	})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

		var arr = [];

		var _slice = arr.slice;

		var concat = arr.concat;

		var push = arr.push;

		var indexOf = arr.indexOf;

		var class2type = {};

		var toString = class2type.toString;

		var hasOwn = class2type.hasOwnProperty;

		var support = {};

		var document = window.document,
		    version = "2.1.4",
		    jQuery = function jQuery(selector, context) {
			return new jQuery.fn.init(selector, context);
		},
		    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		    rmsPrefix = /^-ms-/,
		    rdashAlpha = /-([\da-z])/gi,
		    fcamelCase = function fcamelCase(all, letter) {
			return letter.toUpperCase();
		};

		jQuery.fn = jQuery.prototype = {
			jquery: version,

			constructor: jQuery,

			selector: "",

			length: 0,

			toArray: function toArray() {
				return _slice.call(this);
			},

			get: function get(num) {
				return num != null ? num < 0 ? this[num + this.length] : this[num] : _slice.call(this);
			},

			pushStack: function pushStack(elems) {
				var ret = jQuery.merge(this.constructor(), elems);

				ret.prevObject = this;
				ret.context = this.context;

				return ret;
			},

			each: function each(callback, args) {
				return jQuery.each(this, callback, args);
			},

			map: function map(callback) {
				return this.pushStack(jQuery.map(this, function (elem, i) {
					return callback.call(elem, i, elem);
				}));
			},

			slice: function slice() {
				return this.pushStack(_slice.apply(this, arguments));
			},

			first: function first() {
				return this.eq(0);
			},

			last: function last() {
				return this.eq(-1);
			},

			eq: function eq(i) {
				var len = this.length,
				    j = +i + (i < 0 ? len : 0);
				return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
			},

			end: function end() {
				return this.prevObject || this.constructor(null);
			},

			push: push,
			sort: arr.sort,
			splice: arr.splice
		};

		jQuery.extend = jQuery.fn.extend = function () {
			var options,
			    name,
			    src,
			    copy,
			    copyIsArray,
			    clone,
			    target = arguments[0] || {},
			    i = 1,
			    length = arguments.length,
			    deep = false;

			if (typeof target === "boolean") {
				deep = target;

				target = arguments[i] || {};
				i++;
			}

			if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
				target = {};
			}

			if (i === length) {
				target = this;
				i--;
			}

			for (; i < length; i++) {
				if ((options = arguments[i]) != null) {
					for (name in options) {
						src = target[name];
						copy = options[name];

						if (target === copy) {
							continue;
						}

						if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && jQuery.isArray(src) ? src : [];
							} else {
								clone = src && jQuery.isPlainObject(src) ? src : {};
							}

							target[name] = jQuery.extend(deep, clone, copy);
						} else if (copy !== undefined) {
							target[name] = copy;
						}
					}
				}
			}

			return target;
		};

		jQuery.extend({
			expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

			isReady: true,

			error: function error(msg) {
				throw new Error(msg);
			},

			noop: function noop() {},

			isFunction: function isFunction(obj) {
				return jQuery.type(obj) === "function";
			},

			isArray: Array.isArray,

			isWindow: function isWindow(obj) {
				return obj != null && obj === obj.window;
			},

			isNumeric: function isNumeric(obj) {
				return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
			},

			isPlainObject: function isPlainObject(obj) {
				if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
					return false;
				}

				if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
					return false;
				}

				return true;
			},

			isEmptyObject: function isEmptyObject(obj) {
				var name;
				for (name in obj) {
					return false;
				}
				return true;
			},

			type: function type(obj) {
				if (obj == null) {
					return obj + "";
				}

				return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
			},

			globalEval: function globalEval(code) {
				var script,
				    indirect = eval;

				code = jQuery.trim(code);

				if (code) {
					if (code.indexOf("use strict") === 1) {
						script = document.createElement("script");
						script.text = code;
						document.head.appendChild(script).parentNode.removeChild(script);
					} else {
						indirect(code);
					}
				}
			},

			camelCase: function camelCase(string) {
				return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
			},

			nodeName: function nodeName(elem, name) {
				return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
			},

			each: function each(obj, callback, args) {
				var value,
				    i = 0,
				    length = obj.length,
				    isArray = isArraylike(obj);

				if (args) {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.apply(obj[i], args);

							if (value === false) {
								break;
							}
						}
					}
				} else {
					if (isArray) {
						for (; i < length; i++) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					} else {
						for (i in obj) {
							value = callback.call(obj[i], i, obj[i]);

							if (value === false) {
								break;
							}
						}
					}
				}

				return obj;
			},

			trim: function trim(text) {
				return text == null ? "" : (text + "").replace(rtrim, "");
			},

			makeArray: function makeArray(arr, results) {
				var ret = results || [];

				if (arr != null) {
					if (isArraylike(Object(arr))) {
						jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
					} else {
						push.call(ret, arr);
					}
				}

				return ret;
			},

			inArray: function inArray(elem, arr, i) {
				return arr == null ? -1 : indexOf.call(arr, elem, i);
			},

			merge: function merge(first, second) {
				var len = +second.length,
				    j = 0,
				    i = first.length;

				for (; j < len; j++) {
					first[i++] = second[j];
				}

				first.length = i;

				return first;
			},

			grep: function grep(elems, callback, invert) {
				var callbackInverse,
				    matches = [],
				    i = 0,
				    length = elems.length,
				    callbackExpect = !invert;

				for (; i < length; i++) {
					callbackInverse = !callback(elems[i], i);
					if (callbackInverse !== callbackExpect) {
						matches.push(elems[i]);
					}
				}

				return matches;
			},

			map: function map(elems, callback, arg) {
				var value,
				    i = 0,
				    length = elems.length,
				    isArray = isArraylike(elems),
				    ret = [];

				if (isArray) {
					for (; i < length; i++) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				} else {
					for (i in elems) {
						value = callback(elems[i], i, arg);

						if (value != null) {
							ret.push(value);
						}
					}
				}

				return concat.apply([], ret);
			},

			guid: 1,

			proxy: function proxy(fn, context) {
				var tmp, args, proxy;

				if (typeof context === "string") {
					tmp = fn[context];
					context = fn;
					fn = tmp;
				}

				if (!jQuery.isFunction(fn)) {
					return undefined;
				}

				args = _slice.call(arguments, 2);
				proxy = function proxy() {
					return fn.apply(context || this, args.concat(_slice.call(arguments)));
				};

				proxy.guid = fn.guid = fn.guid || jQuery.guid++;

				return proxy;
			},

			now: Date.now,

			support: support
		});

		jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
			class2type["[object " + name + "]"] = name.toLowerCase();
		});

		function isArraylike(obj) {
			var length = "length" in obj && obj.length,
			    type = jQuery.type(obj);

			if (type === "function" || jQuery.isWindow(obj)) {
				return false;
			}

			if (obj.nodeType === 1 && length) {
				return true;
			}

			return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
		}
		var Sizzle = function (window) {

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
			    setDocument,
			    document,
			    docElem,
			    documentIsHTML,
			    rbuggyQSA,
			    rbuggyMatches,
			    matches,
			    contains,
			    expando = "sizzle" + 1 * new Date(),
			    preferredDoc = window.document,
			    dirruns = 0,
			    done = 0,
			    classCache = createCache(),
			    tokenCache = createCache(),
			    compilerCache = createCache(),
			    sortOrder = function sortOrder(a, b) {
				if (a === b) {
					hasDuplicate = true;
				}
				return 0;
			},
			    MAX_NEGATIVE = 1 << 31,
			    hasOwn = {}.hasOwnProperty,
			    arr = [],
			    pop = arr.pop,
			    push_native = arr.push,
			    push = arr.push,
			    slice = arr.slice,
			    indexOf = function indexOf(list, elem) {
				var i = 0,
				    len = list.length;
				for (; i < len; i++) {
					if (list[i] === elem) {
						return i;
					}
				}
				return -1;
			},
			    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			    whitespace = "[\\x20\\t\\r\\n\\f]",
			    characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			    identifier = characterEncoding.replace("w", "w#"),
			    attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
			    pseudos = ":(" + characterEncoding + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + ".*" + ")\\)|)",
			    rwhitespace = new RegExp(whitespace + "+", "g"),
			    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
			    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
			    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
			    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
			    rpseudo = new RegExp(pseudos),
			    ridentifier = new RegExp("^" + identifier + "$"),
			    matchExpr = {
				"ID": new RegExp("^#(" + characterEncoding + ")"),
				"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
				"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
				"ATTR": new RegExp("^" + attributes),
				"PSEUDO": new RegExp("^" + pseudos),
				"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
				"bool": new RegExp("^(?:" + booleans + ")$", "i"),

				"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
			},
			    rinputs = /^(?:input|select|textarea|button)$/i,
			    rheader = /^h\d$/i,
			    rnative = /^[^{]+\{\s*\[native \w/,
			    rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			    rsibling = /[+~]/,
			    rescape = /'|\\/g,
			    runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
			    funescape = function funescape(_, escaped, escapedWhitespace) {
				var high = "0x" + escaped - 0x10000;

				return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 0x10000) : String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
			},
			    unloadHandler = function unloadHandler() {
				setDocument();
			};

			try {
				push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);

				arr[preferredDoc.childNodes.length].nodeType;
			} catch (e) {
				push = { apply: arr.length ? function (target, els) {
						push_native.apply(target, slice.call(els));
					} : function (target, els) {
						var j = target.length,
						    i = 0;

						while (target[j++] = els[i++]) {}
						target.length = j - 1;
					}
				};
			}

			function Sizzle(selector, context, results, seed) {
				var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}

				context = context || document;
				results = results || [];
				nodeType = context.nodeType;

				if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

					return results;
				}

				if (!seed && documentIsHTML) {
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
						if (m = match[1]) {
							if (nodeType === 9) {
								elem = context.getElementById(m);

								if (elem && elem.parentNode) {
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}
							} else {
								if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
									results.push(elem);
									return results;
								}
							}
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;
						} else if ((m = match[3]) && support.getElementsByClassName) {
							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
						nid = old = expando;
						newContext = context;
						newSelector = nodeType !== 1 && selector;

						if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
							groups = tokenize(selector);

							if (old = context.getAttribute("id")) {
								nid = old.replace(rescape, "\\$&");
							} else {
								context.setAttribute("id", nid);
							}
							nid = "[id='" + nid + "'] ";

							i = groups.length;
							while (i--) {
								groups[i] = nid + toSelector(groups[i]);
							}
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
							newSelector = groups.join(",");
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (!old) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}

				return select(selector.replace(rtrim, "$1"), context, results, seed);
			}

			function createCache() {
				var keys = [];

				function cache(key, value) {
					if (keys.push(key + " ") > Expr.cacheLength) {
						delete cache[keys.shift()];
					}
					return cache[key + " "] = value;
				}
				return cache;
			}

			function markFunction(fn) {
				fn[expando] = true;
				return fn;
			}

			function assert(fn) {
				var div = document.createElement("div");

				try {
					return !!fn(div);
				} catch (e) {
					return false;
				} finally {
					if (div.parentNode) {
						div.parentNode.removeChild(div);
					}

					div = null;
				}
			}

			function addHandle(attrs, handler) {
				var arr = attrs.split("|"),
				    i = attrs.length;

				while (i--) {
					Expr.attrHandle[arr[i]] = handler;
				}
			}

			function siblingCheck(a, b) {
				var cur = b && a,
				    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

				if (diff) {
					return diff;
				}

				if (cur) {
					while (cur = cur.nextSibling) {
						if (cur === b) {
							return -1;
						}
					}
				}

				return a ? 1 : -1;
			}

			function createInputPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === type;
				};
			}

			function createButtonPseudo(type) {
				return function (elem) {
					var name = elem.nodeName.toLowerCase();
					return (name === "input" || name === "button") && elem.type === type;
				};
			}

			function createPositionalPseudo(fn) {
				return markFunction(function (argument) {
					argument = +argument;
					return markFunction(function (seed, matches) {
						var j,
						    matchIndexes = fn([], seed.length, argument),
						    i = matchIndexes.length;

						while (i--) {
							if (seed[j = matchIndexes[i]]) {
								seed[j] = !(matches[j] = seed[j]);
							}
						}
					});
				});
			}

			function testContext(context) {
				return context && typeof context.getElementsByTagName !== "undefined" && context;
			}

			support = Sizzle.support = {};

			isXML = Sizzle.isXML = function (elem) {
				var documentElement = elem && (elem.ownerDocument || elem).documentElement;
				return documentElement ? documentElement.nodeName !== "HTML" : false;
			};

			setDocument = Sizzle.setDocument = function (node) {
				var hasCompare,
				    parent,
				    doc = node ? node.ownerDocument || node : preferredDoc;

				if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
					return document;
				}

				document = doc;
				docElem = doc.documentElement;
				parent = doc.defaultView;

				if (parent && parent !== parent.top) {
					if (parent.addEventListener) {
						parent.addEventListener("unload", unloadHandler, false);
					} else if (parent.attachEvent) {
						parent.attachEvent("onunload", unloadHandler);
					}
				}

				documentIsHTML = !isXML(doc);

				support.attributes = assert(function (div) {
					div.className = "i";
					return !div.getAttribute("className");
				});

				support.getElementsByTagName = assert(function (div) {
					div.appendChild(doc.createComment(""));
					return !div.getElementsByTagName("*").length;
				});

				support.getElementsByClassName = rnative.test(doc.getElementsByClassName);

				support.getById = assert(function (div) {
					docElem.appendChild(div).id = expando;
					return !doc.getElementsByName || !doc.getElementsByName(expando).length;
				});

				if (support.getById) {
					Expr.find["ID"] = function (id, context) {
						if (typeof context.getElementById !== "undefined" && documentIsHTML) {
							var m = context.getElementById(id);

							return m && m.parentNode ? [m] : [];
						}
					};
					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							return elem.getAttribute("id") === attrId;
						};
					};
				} else {
					delete Expr.find["ID"];

					Expr.filter["ID"] = function (id) {
						var attrId = id.replace(runescape, funescape);
						return function (elem) {
							var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
							return node && node.value === attrId;
						};
					};
				}

				Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
					if (typeof context.getElementsByTagName !== "undefined") {
						return context.getElementsByTagName(tag);
					} else if (support.qsa) {
						return context.querySelectorAll(tag);
					}
				} : function (tag, context) {
					var elem,
					    tmp = [],
					    i = 0,
					    results = context.getElementsByTagName(tag);

					if (tag === "*") {
						while (elem = results[i++]) {
							if (elem.nodeType === 1) {
								tmp.push(elem);
							}
						}

						return tmp;
					}
					return results;
				};

				Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
					if (documentIsHTML) {
						return context.getElementsByClassName(className);
					}
				};

				rbuggyMatches = [];

				rbuggyQSA = [];

				if (support.qsa = rnative.test(doc.querySelectorAll)) {
					assert(function (div) {
						docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";

						if (div.querySelectorAll("[msallowcapture^='']").length) {
							rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
						}

						if (!div.querySelectorAll("[selected]").length) {
							rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
						}

						if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
							rbuggyQSA.push("~=");
						}

						if (!div.querySelectorAll(":checked").length) {
							rbuggyQSA.push(":checked");
						}

						if (!div.querySelectorAll("a#" + expando + "+*").length) {
							rbuggyQSA.push(".#.+[+~]");
						}
					});

					assert(function (div) {
						var input = doc.createElement("input");
						input.setAttribute("type", "hidden");
						div.appendChild(input).setAttribute("name", "D");

						if (div.querySelectorAll("[name=d]").length) {
							rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
						}

						if (!div.querySelectorAll(":enabled").length) {
							rbuggyQSA.push(":enabled", ":disabled");
						}

						div.querySelectorAll("*,:x");
						rbuggyQSA.push(",.*:");
					});
				}

				if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

					assert(function (div) {
						support.disconnectedMatch = matches.call(div, "div");

						matches.call(div, "[s!='']:x");
						rbuggyMatches.push("!=", pseudos);
					});
				}

				rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
				rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

				hasCompare = rnative.test(docElem.compareDocumentPosition);

				contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
					var adown = a.nodeType === 9 ? a.documentElement : a,
					    bup = b && b.parentNode;
					return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
				} : function (a, b) {
					if (b) {
						while (b = b.parentNode) {
							if (b === a) {
								return true;
							}
						}
					}
					return false;
				};

				sortOrder = hasCompare ? function (a, b) {
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
					if (compare) {
						return compare;
					}

					compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1;

					if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {
						if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
							return -1;
						}
						if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
							return 1;
						}

						return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					}

					return compare & 4 ? -1 : 1;
				} : function (a, b) {
					if (a === b) {
						hasDuplicate = true;
						return 0;
					}

					var cur,
					    i = 0,
					    aup = a.parentNode,
					    bup = b.parentNode,
					    ap = [a],
					    bp = [b];

					if (!aup || !bup) {
						return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
					} else if (aup === bup) {
						return siblingCheck(a, b);
					}

					cur = a;
					while (cur = cur.parentNode) {
						ap.unshift(cur);
					}
					cur = b;
					while (cur = cur.parentNode) {
						bp.unshift(cur);
					}

					while (ap[i] === bp[i]) {
						i++;
					}

					return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
				};

				return doc;
			};

			Sizzle.matches = function (expr, elements) {
				return Sizzle(expr, null, null, elements);
			};

			Sizzle.matchesSelector = function (elem, expr) {
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				expr = expr.replace(rattributeQuotes, "='$1']");

				if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

					try {
						var ret = matches.call(elem, expr);

						if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
							return ret;
						}
					} catch (e) {}
				}

				return Sizzle(expr, document, null, [elem]).length > 0;
			};

			Sizzle.contains = function (context, elem) {
				if ((context.ownerDocument || context) !== document) {
					setDocument(context);
				}
				return contains(context, elem);
			};

			Sizzle.attr = function (elem, name) {
				if ((elem.ownerDocument || elem) !== document) {
					setDocument(elem);
				}

				var fn = Expr.attrHandle[name.toLowerCase()],
				    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

				return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
			};

			Sizzle.error = function (msg) {
				throw new Error("Syntax error, unrecognized expression: " + msg);
			};

			Sizzle.uniqueSort = function (results) {
				var elem,
				    duplicates = [],
				    j = 0,
				    i = 0;

				hasDuplicate = !support.detectDuplicates;
				sortInput = !support.sortStable && results.slice(0);
				results.sort(sortOrder);

				if (hasDuplicate) {
					while (elem = results[i++]) {
						if (elem === results[i]) {
							j = duplicates.push(i);
						}
					}
					while (j--) {
						results.splice(duplicates[j], 1);
					}
				}

				sortInput = null;

				return results;
			};

			getText = Sizzle.getText = function (elem) {
				var node,
				    ret = "",
				    i = 0,
				    nodeType = elem.nodeType;

				if (!nodeType) {
					while (node = elem[i++]) {
						ret += getText(node);
					}
				} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
					if (typeof elem.textContent === "string") {
						return elem.textContent;
					} else {
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							ret += getText(elem);
						}
					}
				} else if (nodeType === 3 || nodeType === 4) {
					return elem.nodeValue;
				}


				return ret;
			};

			Expr = Sizzle.selectors = {
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
					"ATTR": function ATTR(match) {
						match[1] = match[1].replace(runescape, funescape);

						match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

						if (match[2] === "~=") {
							match[3] = " " + match[3] + " ";
						}

						return match.slice(0, 4);
					},

					"CHILD": function CHILD(match) {
						match[1] = match[1].toLowerCase();

						if (match[1].slice(0, 3) === "nth") {
							if (!match[3]) {
								Sizzle.error(match[0]);
							}

							match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
							match[5] = +(match[7] + match[8] || match[3] === "odd");
						} else if (match[3]) {
							Sizzle.error(match[0]);
						}

						return match;
					},

					"PSEUDO": function PSEUDO(match) {
						var excess,
						    unquoted = !match[6] && match[2];

						if (matchExpr["CHILD"].test(match[0])) {
							return null;
						}

						if (match[3]) {
							match[2] = match[4] || match[5] || "";
						} else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
							match[0] = match[0].slice(0, excess);
							match[2] = unquoted.slice(0, excess);
						}

						return match.slice(0, 3);
					}
				},

				filter: {

					"TAG": function TAG(nodeNameSelector) {
						var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
						return nodeNameSelector === "*" ? function () {
							return true;
						} : function (elem) {
							return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
						};
					},

					"CLASS": function CLASS(className) {
						var pattern = classCache[className + " "];

						return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
							return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
						});
					},

					"ATTR": function ATTR(name, operator, check) {
						return function (elem) {
							var result = Sizzle.attr(elem, name);

							if (result == null) {
								return operator === "!=";
							}
							if (!operator) {
								return true;
							}

							result += "";

							return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
						};
					},

					"CHILD": function CHILD(type, what, argument, first, last) {
						var simple = type.slice(0, 3) !== "nth",
						    forward = type.slice(-4) !== "last",
						    ofType = what === "of-type";

						return first === 1 && last === 0 ? function (elem) {
							return !!elem.parentNode;
						} : function (elem, context, xml) {
							var cache,
							    outerCache,
							    node,
							    diff,
							    nodeIndex,
							    start,
							    dir = simple !== forward ? "nextSibling" : "previousSibling",
							    parent = elem.parentNode,
							    name = ofType && elem.nodeName.toLowerCase(),
							    useCache = !xml && !ofType;

							if (parent) {
								if (simple) {
									while (dir) {
										node = elem;
										while (node = node[dir]) {
											if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
												return false;
											}
										}

										start = dir = type === "only" && !start && "nextSibling";
									}
									return true;
								}

								start = [forward ? parent.firstChild : parent.lastChild];

								if (forward && useCache) {
									outerCache = parent[expando] || (parent[expando] = {});
									cache = outerCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = cache[0] === dirruns && cache[2];
									node = nodeIndex && parent.childNodes[nodeIndex];

									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
										if (node.nodeType === 1 && ++diff && node === elem) {
											outerCache[type] = [dirruns, nodeIndex, diff];
											break;
										}
									}
								} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
									diff = cache[1];
								} else {
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
											if (useCache) {
												(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}

								diff -= last;
								return diff === first || diff % first === 0 && diff / first >= 0;
							}
						};
					},

					"PSEUDO": function PSEUDO(pseudo, argument) {
						var args,
						    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

						if (fn[expando]) {
							return fn(argument);
						}

						if (fn.length > 1) {
							args = [pseudo, pseudo, "", argument];
							return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
								var idx,
								    matched = fn(seed, argument),
								    i = matched.length;
								while (i--) {
									idx = indexOf(seed, matched[i]);
									seed[idx] = !(matches[idx] = matched[i]);
								}
							}) : function (elem) {
								return fn(elem, 0, args);
							};
						}

						return fn;
					}
				},

				pseudos: {
					"not": markFunction(function (selector) {
						var input = [],
						    results = [],
						    matcher = compile(selector.replace(rtrim, "$1"));

						return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
							var elem,
							    unmatched = matcher(seed, null, xml, []),
							    i = seed.length;

							while (i--) {
								if (elem = unmatched[i]) {
									seed[i] = !(matches[i] = elem);
								}
							}
						}) : function (elem, context, xml) {
							input[0] = elem;
							matcher(input, null, xml, results);

							input[0] = null;
							return !results.pop();
						};
					}),

					"has": markFunction(function (selector) {
						return function (elem) {
							return Sizzle(selector, elem).length > 0;
						};
					}),

					"contains": markFunction(function (text) {
						text = text.replace(runescape, funescape);
						return function (elem) {
							return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
						};
					}),

					"lang": markFunction(function (lang) {
						if (!ridentifier.test(lang || "")) {
							Sizzle.error("unsupported lang: " + lang);
						}
						lang = lang.replace(runescape, funescape).toLowerCase();
						return function (elem) {
							var elemLang;
							do {
								if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

									elemLang = elemLang.toLowerCase();
									return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
								}
							} while ((elem = elem.parentNode) && elem.nodeType === 1);
							return false;
						};
					}),

					"target": function target(elem) {
						var hash = window.location && window.location.hash;
						return hash && hash.slice(1) === elem.id;
					},

					"root": function root(elem) {
						return elem === docElem;
					},

					"focus": function focus(elem) {
						return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
					},

					"enabled": function enabled(elem) {
						return elem.disabled === false;
					},

					"disabled": function disabled(elem) {
						return elem.disabled === true;
					},

					"checked": function checked(elem) {
						var nodeName = elem.nodeName.toLowerCase();
						return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
					},

					"selected": function selected(elem) {
						if (elem.parentNode) {
							elem.parentNode.selectedIndex;
						}

						return elem.selected === true;
					},

					"empty": function empty(elem) {
						for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
							if (elem.nodeType < 6) {
								return false;
							}
						}
						return true;
					},

					"parent": function parent(elem) {
						return !Expr.pseudos["empty"](elem);
					},

					"header": function header(elem) {
						return rheader.test(elem.nodeName);
					},

					"input": function input(elem) {
						return rinputs.test(elem.nodeName);
					},

					"button": function button(elem) {
						var name = elem.nodeName.toLowerCase();
						return name === "input" && elem.type === "button" || name === "button";
					},

					"text": function text(elem) {
						var attr;
						return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
					},

					"first": createPositionalPseudo(function () {
						return [0];
					}),

					"last": createPositionalPseudo(function (matchIndexes, length) {
						return [length - 1];
					}),

					"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
						return [argument < 0 ? argument + length : argument];
					}),

					"even": createPositionalPseudo(function (matchIndexes, length) {
						var i = 0;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"odd": createPositionalPseudo(function (matchIndexes, length) {
						var i = 1;
						for (; i < length; i += 2) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; --i >= 0;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					}),

					"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
						var i = argument < 0 ? argument + length : argument;
						for (; ++i < length;) {
							matchIndexes.push(i);
						}
						return matchIndexes;
					})
				}
			};

			Expr.pseudos["nth"] = Expr.pseudos["eq"];

			for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
				Expr.pseudos[i] = createInputPseudo(i);
			}
			for (i in { submit: true, reset: true }) {
				Expr.pseudos[i] = createButtonPseudo(i);
			}

			function setFilters() {}
			setFilters.prototype = Expr.filters = Expr.pseudos;
			Expr.setFilters = new setFilters();

			tokenize = Sizzle.tokenize = function (selector, parseOnly) {
				var matched,
				    match,
				    tokens,
				    type,
				    soFar,
				    groups,
				    preFilters,
				    cached = tokenCache[selector + " "];

				if (cached) {
					return parseOnly ? 0 : cached.slice(0);
				}

				soFar = selector;
				groups = [];
				preFilters = Expr.preFilter;

				while (soFar) {
					if (!matched || (match = rcomma.exec(soFar))) {
						if (match) {
							soFar = soFar.slice(match[0].length) || soFar;
						}
						groups.push(tokens = []);
					}

					matched = false;

					if (match = rcombinators.exec(soFar)) {
						matched = match.shift();
						tokens.push({
							value: matched,

							type: match[0].replace(rtrim, " ")
						});
						soFar = soFar.slice(matched.length);
					}

					for (type in Expr.filter) {
						if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
							matched = match.shift();
							tokens.push({
								value: matched,
								type: type,
								matches: match
							});
							soFar = soFar.slice(matched.length);
						}
					}

					if (!matched) {
						break;
					}
				}

				return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
			};

			function toSelector(tokens) {
				var i = 0,
				    len = tokens.length,
				    selector = "";
				for (; i < len; i++) {
					selector += tokens[i].value;
				}
				return selector;
			}

			function addCombinator(matcher, combinator, base) {
				var dir = combinator.dir,
				    checkNonElements = base && dir === "parentNode",
				    doneName = done++;

				return combinator.first ? function (elem, context, xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							return matcher(elem, context, xml);
						}
					}
				} : function (elem, context, xml) {
					var oldCache,
					    outerCache,
					    newCache = [dirruns, doneName];

					if (xml) {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								if (matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					} else {
						while (elem = elem[dir]) {
							if (elem.nodeType === 1 || checkNonElements) {
								outerCache = elem[expando] || (elem[expando] = {});
								if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
									return newCache[2] = oldCache[2];
								} else {
									outerCache[dir] = newCache;

									if (newCache[2] = matcher(elem, context, xml)) {
										return true;
									}
								}
							}
						}
					}
				};
			}

			function elementMatcher(matchers) {
				return matchers.length > 1 ? function (elem, context, xml) {
					var i = matchers.length;
					while (i--) {
						if (!matchers[i](elem, context, xml)) {
							return false;
						}
					}
					return true;
				} : matchers[0];
			}

			function multipleContexts(selector, contexts, results) {
				var i = 0,
				    len = contexts.length;
				for (; i < len; i++) {
					Sizzle(selector, contexts[i], results);
				}
				return results;
			}

			function condense(unmatched, map, filter, context, xml) {
				var elem,
				    newUnmatched = [],
				    i = 0,
				    len = unmatched.length,
				    mapped = map != null;

				for (; i < len; i++) {
					if (elem = unmatched[i]) {
						if (!filter || filter(elem, context, xml)) {
							newUnmatched.push(elem);
							if (mapped) {
								map.push(i);
							}
						}
					}
				}

				return newUnmatched;
			}

			function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
				if (postFilter && !postFilter[expando]) {
					postFilter = setMatcher(postFilter);
				}
				if (postFinder && !postFinder[expando]) {
					postFinder = setMatcher(postFinder, postSelector);
				}
				return markFunction(function (seed, results, context, xml) {
					var temp,
					    i,
					    elem,
					    preMap = [],
					    postMap = [],
					    preexisting = results.length,
					    elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),
					    matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
					    matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;

					if (matcher) {
						matcher(matcherIn, matcherOut, context, xml);
					}

					if (postFilter) {
						temp = condense(matcherOut, postMap);
						postFilter(temp, [], context, xml);

						i = temp.length;
						while (i--) {
							if (elem = temp[i]) {
								matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
							}
						}
					}

					if (seed) {
						if (postFinder || preFilter) {
							if (postFinder) {
								temp = [];
								i = matcherOut.length;
								while (i--) {
									if (elem = matcherOut[i]) {
										temp.push(matcherIn[i] = elem);
									}
								}
								postFinder(null, matcherOut = [], temp, xml);
							}

							i = matcherOut.length;
							while (i--) {
								if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

									seed[temp] = !(results[temp] = elem);
								}
							}
						}
					} else {
						matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
						if (postFinder) {
							postFinder(null, results, matcherOut, xml);
						} else {
							push.apply(results, matcherOut);
						}
					}
				});
			}

			function matcherFromTokens(tokens) {
				var checkContext,
				    matcher,
				    j,
				    len = tokens.length,
				    leadingRelative = Expr.relative[tokens[0].type],
				    implicitRelative = leadingRelative || Expr.relative[" "],
				    i = leadingRelative ? 1 : 0,
				    matchContext = addCombinator(function (elem) {
					return elem === checkContext;
				}, implicitRelative, true),
				    matchAnyContext = addCombinator(function (elem) {
					return indexOf(checkContext, elem) > -1;
				}, implicitRelative, true),
				    matchers = [function (elem, context, xml) {
					var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));

					checkContext = null;
					return ret;
				}];

				for (; i < len; i++) {
					if (matcher = Expr.relative[tokens[i].type]) {
						matchers = [addCombinator(elementMatcher(matchers), matcher)];
					} else {
						matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

						if (matcher[expando]) {
							j = ++i;
							for (; j < len; j++) {
								if (Expr.relative[tokens[j].type]) {
									break;
								}
							}
							return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
						}
						matchers.push(matcher);
					}
				}

				return elementMatcher(matchers);
			}

			function matcherFromGroupMatchers(elementMatchers, setMatchers) {
				var bySet = setMatchers.length > 0,
				    byElement = elementMatchers.length > 0,
				    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
					var elem,
					    j,
					    matcher,
					    matchedCount = 0,
					    i = "0",
					    unmatched = seed && [],
					    setMatched = [],
					    contextBackup = outermostContext,
					    elems = seed || byElement && Expr.find["TAG"]("*", outermost),
					    dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
					    len = elems.length;

					if (outermost) {
						outermostContext = context !== document && context;
					}

					for (; i !== len && (elem = elems[i]) != null; i++) {
						if (byElement && elem) {
							j = 0;
							while (matcher = elementMatchers[j++]) {
								if (matcher(elem, context, xml)) {
									results.push(elem);
									break;
								}
							}
							if (outermost) {
								dirruns = dirrunsUnique;
							}
						}

						if (bySet) {
							if (elem = !matcher && elem) {
								matchedCount--;
							}

							if (seed) {
								unmatched.push(elem);
							}
						}
					}

					matchedCount += i;
					if (bySet && i !== matchedCount) {
						j = 0;
						while (matcher = setMatchers[j++]) {
							matcher(unmatched, setMatched, context, xml);
						}

						if (seed) {
							if (matchedCount > 0) {
								while (i--) {
									if (!(unmatched[i] || setMatched[i])) {
										setMatched[i] = pop.call(results);
									}
								}
							}

							setMatched = condense(setMatched);
						}

						push.apply(results, setMatched);

						if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

							Sizzle.uniqueSort(results);
						}
					}

					if (outermost) {
						dirruns = dirrunsUnique;
						outermostContext = contextBackup;
					}

					return unmatched;
				};

				return bySet ? markFunction(superMatcher) : superMatcher;
			}

			compile = Sizzle.compile = function (selector, match) {
				var i,
				    setMatchers = [],
				    elementMatchers = [],
				    cached = compilerCache[selector + " "];

				if (!cached) {
					if (!match) {
						match = tokenize(selector);
					}
					i = match.length;
					while (i--) {
						cached = matcherFromTokens(match[i]);
						if (cached[expando]) {
							setMatchers.push(cached);
						} else {
							elementMatchers.push(cached);
						}
					}

					cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

					cached.selector = selector;
				}
				return cached;
			};

			select = Sizzle.select = function (selector, context, results, seed) {
				var i,
				    tokens,
				    token,
				    type,
				    find,
				    compiled = typeof selector === "function" && selector,
				    match = !seed && tokenize(selector = compiled.selector || selector);

				results = results || [];

				if (match.length === 1) {
					tokens = match[0] = match[0].slice(0);
					if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

						context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
						if (!context) {
							return results;
						} else if (compiled) {
							context = context.parentNode;
						}

						selector = selector.slice(tokens.shift().value.length);
					}

					i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
					while (i--) {
						token = tokens[i];

						if (Expr.relative[type = token.type]) {
							break;
						}
						if (find = Expr.find[type]) {
							if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
								tokens.splice(i, 1);
								selector = seed.length && toSelector(tokens);
								if (!selector) {
									push.apply(results, seed);
									return results;
								}

								break;
							}
						}
					}
				}

				(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
				return results;
			};

			support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

			support.detectDuplicates = !!hasDuplicate;

			setDocument();

			support.sortDetached = assert(function (div1) {
				return div1.compareDocumentPosition(document.createElement("div")) & 1;
			});

			if (!assert(function (div) {
				div.innerHTML = "<a href='#'></a>";
				return div.firstChild.getAttribute("href") === "#";
			})) {
				addHandle("type|href|height|width", function (elem, name, isXML) {
					if (!isXML) {
						return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
					}
				});
			}

			if (!support.attributes || !assert(function (div) {
				div.innerHTML = "<input/>";
				div.firstChild.setAttribute("value", "");
				return div.firstChild.getAttribute("value") === "";
			})) {
				addHandle("value", function (elem, name, isXML) {
					if (!isXML && elem.nodeName.toLowerCase() === "input") {
						return elem.defaultValue;
					}
				});
			}

			if (!assert(function (div) {
				return div.getAttribute("disabled") == null;
			})) {
				addHandle(booleans, function (elem, name, isXML) {
					var val;
					if (!isXML) {
						return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
					}
				});
			}

			return Sizzle;
		}(window);

		jQuery.find = Sizzle;
		jQuery.expr = Sizzle.selectors;
		jQuery.expr[":"] = jQuery.expr.pseudos;
		jQuery.unique = Sizzle.uniqueSort;
		jQuery.text = Sizzle.getText;
		jQuery.isXMLDoc = Sizzle.isXML;
		jQuery.contains = Sizzle.contains;

		var rneedsContext = jQuery.expr.match.needsContext;

		var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;

		var risSimple = /^.[^:#\[\.,]*$/;

		function winnow(elements, qualifier, not) {
			if (jQuery.isFunction(qualifier)) {
				return jQuery.grep(elements, function (elem, i) {
					return !!qualifier.call(elem, i, elem) !== not;
				});
			}

			if (qualifier.nodeType) {
				return jQuery.grep(elements, function (elem) {
					return elem === qualifier !== not;
				});
			}

			if (typeof qualifier === "string") {
				if (risSimple.test(qualifier)) {
					return jQuery.filter(qualifier, elements, not);
				}

				qualifier = jQuery.filter(qualifier, elements);
			}

			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) >= 0 !== not;
			});
		}

		jQuery.filter = function (expr, elems, not) {
			var elem = elems[0];

			if (not) {
				expr = ":not(" + expr + ")";
			}

			return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
				return elem.nodeType === 1;
			}));
		};

		jQuery.fn.extend({
			find: function find(selector) {
				var i,
				    len = this.length,
				    ret = [],
				    self = this;

				if (typeof selector !== "string") {
					return this.pushStack(jQuery(selector).filter(function () {
						for (i = 0; i < len; i++) {
							if (jQuery.contains(self[i], this)) {
								return true;
							}
						}
					}));
				}

				for (i = 0; i < len; i++) {
					jQuery.find(selector, self[i], ret);
				}

				ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
				ret.selector = this.selector ? this.selector + " " + selector : selector;
				return ret;
			},
			filter: function filter(selector) {
				return this.pushStack(winnow(this, selector || [], false));
			},
			not: function not(selector) {
				return this.pushStack(winnow(this, selector || [], true));
			},
			is: function is(selector) {
				return !!winnow(this, typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
			}
		});

		var rootjQuery,
		    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		    init = jQuery.fn.init = function (selector, context) {
			var match, elem;

			if (!selector) {
				return this;
			}

			if (typeof selector === "string") {
				if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
					match = [null, selector, null];
				} else {
					match = rquickExpr.exec(selector);
				}

				if (match && (match[1] || !context)) {
					if (match[1]) {
						context = context instanceof jQuery ? context[0] : context;

						jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

						if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
							for (match in context) {
								if (jQuery.isFunction(this[match])) {
									this[match](context[match]);
								} else {
									this.attr(match, context[match]);
								}
							}
						}

						return this;
					} else {
						elem = document.getElementById(match[2]);

						if (elem && elem.parentNode) {
							this.length = 1;
							this[0] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}
				} else if (!context || context.jquery) {
					return (context || rootjQuery).find(selector);
				} else {
					return this.constructor(context).find(selector);
				}
			} else if (selector.nodeType) {
				this.context = this[0] = selector;
				this.length = 1;
				return this;
			} else if (jQuery.isFunction(selector)) {
				return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) : selector(jQuery);
			}

			if (selector.selector !== undefined) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray(selector, this);
		};

		init.prototype = jQuery.fn;

		rootjQuery = jQuery(document);

		var rparentsprev = /^(?:parents|prev(?:Until|All))/,
		    guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

		jQuery.extend({
			dir: function dir(elem, _dir, until) {
				var matched = [],
				    truncate = until !== undefined;

				while ((elem = elem[_dir]) && elem.nodeType !== 9) {
					if (elem.nodeType === 1) {
						if (truncate && jQuery(elem).is(until)) {
							break;
						}
						matched.push(elem);
					}
				}
				return matched;
			},

			sibling: function sibling(n, elem) {
				var matched = [];

				for (; n; n = n.nextSibling) {
					if (n.nodeType === 1 && n !== elem) {
						matched.push(n);
					}
				}

				return matched;
			}
		});

		jQuery.fn.extend({
			has: function has(target) {
				var targets = jQuery(target, this),
				    l = targets.length;

				return this.filter(function () {
					var i = 0;
					for (; i < l; i++) {
						if (jQuery.contains(this, targets[i])) {
							return true;
						}
					}
				});
			},

			closest: function closest(selectors, context) {
				var cur,
				    i = 0,
				    l = this.length,
				    matched = [],
				    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
						if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}

				return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
			},

			index: function index(elem) {
				if (!elem) {
					return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
				}

				if (typeof elem === "string") {
					return indexOf.call(jQuery(elem), this[0]);
				}

				return indexOf.call(this, elem.jquery ? elem[0] : elem);
			},

			add: function add(selector, context) {
				return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
			},

			addBack: function addBack(selector) {
				return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
			}
		});

		function sibling(cur, dir) {
			while ((cur = cur[dir]) && cur.nodeType !== 1) {}
			return cur;
		}

		jQuery.each({
			parent: function parent(elem) {
				var parent = elem.parentNode;
				return parent && parent.nodeType !== 11 ? parent : null;
			},
			parents: function parents(elem) {
				return jQuery.dir(elem, "parentNode");
			},
			parentsUntil: function parentsUntil(elem, i, until) {
				return jQuery.dir(elem, "parentNode", until);
			},
			next: function next(elem) {
				return sibling(elem, "nextSibling");
			},
			prev: function prev(elem) {
				return sibling(elem, "previousSibling");
			},
			nextAll: function nextAll(elem) {
				return jQuery.dir(elem, "nextSibling");
			},
			prevAll: function prevAll(elem) {
				return jQuery.dir(elem, "previousSibling");
			},
			nextUntil: function nextUntil(elem, i, until) {
				return jQuery.dir(elem, "nextSibling", until);
			},
			prevUntil: function prevUntil(elem, i, until) {
				return jQuery.dir(elem, "previousSibling", until);
			},
			siblings: function siblings(elem) {
				return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
			},
			children: function children(elem) {
				return jQuery.sibling(elem.firstChild);
			},
			contents: function contents(elem) {
				return elem.contentDocument || jQuery.merge([], elem.childNodes);
			}
		}, function (name, fn) {
			jQuery.fn[name] = function (until, selector) {
				var matched = jQuery.map(this, fn, until);

				if (name.slice(-5) !== "Until") {
					selector = until;
				}

				if (selector && typeof selector === "string") {
					matched = jQuery.filter(selector, matched);
				}

				if (this.length > 1) {
					if (!guaranteedUnique[name]) {
						jQuery.unique(matched);
					}

					if (rparentsprev.test(name)) {
						matched.reverse();
					}
				}

				return this.pushStack(matched);
			};
		});
		var rnotwhite = /\S+/g;

		var optionsCache = {};

		function createOptions(options) {
			var object = optionsCache[options] = {};
			jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
				object[flag] = true;
			});
			return object;
		}

		jQuery.Callbacks = function (options) {
			options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

			var memory,
			    _fired,
			    firing,
			    firingStart,
			    firingLength,
			    firingIndex,
			    list = [],
			    stack = !options.once && [],
			    fire = function fire(data) {
				memory = options.memory && data;
				_fired = true;
				firingIndex = firingStart || 0;
				firingStart = 0;
				firingLength = list.length;
				firing = true;
				for (; list && firingIndex < firingLength; firingIndex++) {
					if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
						memory = false;
						break;
					}
				}
				firing = false;
				if (list) {
					if (stack) {
						if (stack.length) {
							fire(stack.shift());
						}
					} else if (memory) {
						list = [];
					} else {
						self.disable();
					}
				}
			},
			    self = {
				add: function add() {
					if (list) {
						var start = list.length;
						(function add(args) {
							jQuery.each(args, function (_, arg) {
								var type = jQuery.type(arg);
								if (type === "function") {
									if (!options.unique || !self.has(arg)) {
										list.push(arg);
									}
								} else if (arg && arg.length && type !== "string") {
									add(arg);
								}
							});
						})(arguments);

						if (firing) {
							firingLength = list.length;
						} else if (memory) {
							firingStart = start;
							fire(memory);
						}
					}
					return this;
				},

				remove: function remove() {
					if (list) {
						jQuery.each(arguments, function (_, arg) {
							var index;
							while ((index = jQuery.inArray(arg, list, index)) > -1) {
								list.splice(index, 1);

								if (firing) {
									if (index <= firingLength) {
										firingLength--;
									}
									if (index <= firingIndex) {
										firingIndex--;
									}
								}
							}
						});
					}
					return this;
				},

				has: function has(fn) {
					return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
				},

				empty: function empty() {
					list = [];
					firingLength = 0;
					return this;
				},

				disable: function disable() {
					list = stack = memory = undefined;
					return this;
				},

				disabled: function disabled() {
					return !list;
				},

				lock: function lock() {
					stack = undefined;
					if (!memory) {
						self.disable();
					}
					return this;
				},

				locked: function locked() {
					return !stack;
				},

				fireWith: function fireWith(context, args) {
					if (list && (!_fired || stack)) {
						args = args || [];
						args = [context, args.slice ? args.slice() : args];
						if (firing) {
							stack.push(args);
						} else {
							fire(args);
						}
					}
					return this;
				},

				fire: function fire() {
					self.fireWith(this, arguments);
					return this;
				},

				fired: function fired() {
					return !!_fired;
				}
			};

			return self;
		};

		jQuery.extend({

			Deferred: function Deferred(func) {
				var tuples = [["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
				    _state = "pending",
				    _promise = {
					state: function state() {
						return _state;
					},
					always: function always() {
						deferred.done(arguments).fail(arguments);
						return this;
					},
					then: function then() {
						var fns = arguments;
						return jQuery.Deferred(function (newDefer) {
							jQuery.each(tuples, function (i, tuple) {
								var fn = jQuery.isFunction(fns[i]) && fns[i];

								deferred[tuple[1]](function () {
									var returned = fn && fn.apply(this, arguments);
									if (returned && jQuery.isFunction(returned.promise)) {
										returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
									} else {
										newDefer[tuple[0] + "With"](this === _promise ? newDefer.promise() : this, fn ? [returned] : arguments);
									}
								});
							});
							fns = null;
						}).promise();
					},

					promise: function promise(obj) {
						return obj != null ? jQuery.extend(obj, _promise) : _promise;
					}
				},
				    deferred = {};

				_promise.pipe = _promise.then;

				jQuery.each(tuples, function (i, tuple) {
					var list = tuple[2],
					    stateString = tuple[3];

					_promise[tuple[1]] = list.add;

					if (stateString) {
						list.add(function () {
							_state = stateString;
						}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
					}

					deferred[tuple[0]] = function () {
						deferred[tuple[0] + "With"](this === deferred ? _promise : this, arguments);
						return this;
					};
					deferred[tuple[0] + "With"] = list.fireWith;
				});

				_promise.promise(deferred);

				if (func) {
					func.call(deferred, deferred);
				}

				return deferred;
			},

			when: function when(subordinate) {
				var i = 0,
				    resolveValues = _slice.call(arguments),
				    length = resolveValues.length,
				    remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,
				    deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
				    updateFunc = function updateFunc(i, contexts, values) {
					return function (value) {
						contexts[i] = this;
						values[i] = arguments.length > 1 ? _slice.call(arguments) : value;
						if (values === progressValues) {
							deferred.notifyWith(contexts, values);
						} else if (! --remaining) {
							deferred.resolveWith(contexts, values);
						}
					};
				},
				    progressValues,
				    progressContexts,
				    resolveContexts;

				if (length > 1) {
					progressValues = new Array(length);
					progressContexts = new Array(length);
					resolveContexts = new Array(length);
					for (; i < length; i++) {
						if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
							resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
						} else {
							--remaining;
						}
					}
				}

				if (!remaining) {
					deferred.resolveWith(resolveContexts, resolveValues);
				}

				return deferred.promise();
			}
		});

		var readyList;

		jQuery.fn.ready = function (fn) {
			jQuery.ready.promise().done(fn);

			return this;
		};

		jQuery.extend({
			isReady: false,

			readyWait: 1,

			holdReady: function holdReady(hold) {
				if (hold) {
					jQuery.readyWait++;
				} else {
					jQuery.ready(true);
				}
			},

			ready: function ready(wait) {
				if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
					return;
				}

				jQuery.isReady = true;

				if (wait !== true && --jQuery.readyWait > 0) {
					return;
				}

				readyList.resolveWith(document, [jQuery]);

				if (jQuery.fn.triggerHandler) {
					jQuery(document).triggerHandler("ready");
					jQuery(document).off("ready");
				}
			}
		});

		function completed() {
			document.removeEventListener("DOMContentLoaded", completed, false);
			window.removeEventListener("load", completed, false);
			jQuery.ready();
		}

		jQuery.ready.promise = function (obj) {
			if (!readyList) {

				readyList = jQuery.Deferred();

				if (document.readyState === "complete") {
					setTimeout(jQuery.ready);
				} else {
					document.addEventListener("DOMContentLoaded", completed, false);

					window.addEventListener("load", completed, false);
				}
			}
			return readyList.promise(obj);
		};

		jQuery.ready.promise();

		var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
			var i = 0,
			    len = elems.length,
			    bulk = key == null;

			if (jQuery.type(key) === "object") {
				chainable = true;
				for (i in key) {
					jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
				}
			} else if (value !== undefined) {
				chainable = true;

				if (!jQuery.isFunction(value)) {
					raw = true;
				}

				if (bulk) {
					if (raw) {
						fn.call(elems, value);
						fn = null;
					} else {
						bulk = fn;
						fn = function fn(elem, key, value) {
							return bulk.call(jQuery(elem), value);
						};
					}
				}

				if (fn) {
					for (; i < len; i++) {
						fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
					}
				}
			}

			return chainable ? elems : bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
		};

		jQuery.acceptData = function (owner) {
			return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
		};

		function Data() {
			Object.defineProperty(this.cache = {}, 0, {
				get: function get() {
					return {};
				}
			});

			this.expando = jQuery.expando + Data.uid++;
		}

		Data.uid = 1;
		Data.accepts = jQuery.acceptData;

		Data.prototype = {
			key: function key(owner) {
				if (!Data.accepts(owner)) {
					return 0;
				}

				var descriptor = {},
				    unlock = owner[this.expando];

				if (!unlock) {
					unlock = Data.uid++;

					try {
						descriptor[this.expando] = { value: unlock };
						Object.defineProperties(owner, descriptor);
					} catch (e) {
						descriptor[this.expando] = unlock;
						jQuery.extend(owner, descriptor);
					}
				}

				if (!this.cache[unlock]) {
					this.cache[unlock] = {};
				}

				return unlock;
			},
			set: function set(owner, data, value) {
				var prop,
				    unlock = this.key(owner),
				    cache = this.cache[unlock];

				if (typeof data === "string") {
					cache[data] = value;
				} else {
					if (jQuery.isEmptyObject(cache)) {
						jQuery.extend(this.cache[unlock], data);
					} else {
						for (prop in data) {
							cache[prop] = data[prop];
						}
					}
				}
				return cache;
			},
			get: function get(owner, key) {
				var cache = this.cache[this.key(owner)];

				return key === undefined ? cache : cache[key];
			},
			access: function access(owner, key, value) {
				var stored;

				if (key === undefined || key && typeof key === "string" && value === undefined) {

					stored = this.get(owner, key);

					return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
				}

				this.set(owner, key, value);

				return value !== undefined ? value : key;
			},
			remove: function remove(owner, key) {
				var i,
				    name,
				    camel,
				    unlock = this.key(owner),
				    cache = this.cache[unlock];

				if (key === undefined) {
					this.cache[unlock] = {};
				} else {
					if (jQuery.isArray(key)) {
						name = key.concat(key.map(jQuery.camelCase));
					} else {
						camel = jQuery.camelCase(key);

						if (key in cache) {
							name = [key, camel];
						} else {
							name = camel;
							name = name in cache ? [name] : name.match(rnotwhite) || [];
						}
					}

					i = name.length;
					while (i--) {
						delete cache[name[i]];
					}
				}
			},
			hasData: function hasData(owner) {
				return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
			},
			discard: function discard(owner) {
				if (owner[this.expando]) {
					delete this.cache[owner[this.expando]];
				}
			}
		};
		var data_priv = new Data();

		var data_user = new Data();

		var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		    rmultiDash = /([A-Z])/g;

		function dataAttr(elem, key, data) {
			var name;

			if (data === undefined && elem.nodeType === 1) {
				name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
				data = elem.getAttribute(name);

				if (typeof data === "string") {
					try {
						data = data === "true" ? true : data === "false" ? false : data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
					} catch (e) {}

					data_user.set(elem, key, data);
				} else {
					data = undefined;
				}
			}
			return data;
		}

		jQuery.extend({
			hasData: function hasData(elem) {
				return data_user.hasData(elem) || data_priv.hasData(elem);
			},

			data: function data(elem, name, _data) {
				return data_user.access(elem, name, _data);
			},

			removeData: function removeData(elem, name) {
				data_user.remove(elem, name);
			},

			_data: function _data(elem, name, data) {
				return data_priv.access(elem, name, data);
			},

			_removeData: function _removeData(elem, name) {
				data_priv.remove(elem, name);
			}
		});

		jQuery.fn.extend({
			data: function data(key, value) {
				var i,
				    name,
				    data,
				    elem = this[0],
				    attrs = elem && elem.attributes;

				if (key === undefined) {
					if (this.length) {
						data = data_user.get(elem);

						if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
							i = attrs.length;
							while (i--) {
								if (attrs[i]) {
									name = attrs[i].name;
									if (name.indexOf("data-") === 0) {
										name = jQuery.camelCase(name.slice(5));
										dataAttr(elem, name, data[name]);
									}
								}
							}
							data_priv.set(elem, "hasDataAttrs", true);
						}
					}

					return data;
				}

				if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
					return this.each(function () {
						data_user.set(this, key);
					});
				}

				return access(this, function (value) {
					var data,
					    camelKey = jQuery.camelCase(key);

					if (elem && value === undefined) {
						data = data_user.get(elem, key);
						if (data !== undefined) {
							return data;
						}

						data = data_user.get(elem, camelKey);
						if (data !== undefined) {
							return data;
						}

						data = dataAttr(elem, camelKey, undefined);
						if (data !== undefined) {
							return data;
						}

						return;
					}

					this.each(function () {
						var data = data_user.get(this, camelKey);

						data_user.set(this, camelKey, value);

						if (key.indexOf("-") !== -1 && data !== undefined) {
							data_user.set(this, key, value);
						}
					});
				}, null, value, arguments.length > 1, null, true);
			},

			removeData: function removeData(key) {
				return this.each(function () {
					data_user.remove(this, key);
				});
			}
		});

		jQuery.extend({
			queue: function queue(elem, type, data) {
				var queue;

				if (elem) {
					type = (type || "fx") + "queue";
					queue = data_priv.get(elem, type);

					if (data) {
						if (!queue || jQuery.isArray(data)) {
							queue = data_priv.access(elem, type, jQuery.makeArray(data));
						} else {
							queue.push(data);
						}
					}
					return queue || [];
				}
			},

			dequeue: function dequeue(elem, type) {
				type = type || "fx";

				var queue = jQuery.queue(elem, type),
				    startLength = queue.length,
				    fn = queue.shift(),
				    hooks = jQuery._queueHooks(elem, type),
				    next = function next() {
					jQuery.dequeue(elem, type);
				};

				if (fn === "inprogress") {
					fn = queue.shift();
					startLength--;
				}

				if (fn) {
					if (type === "fx") {
						queue.unshift("inprogress");
					}

					delete hooks.stop;
					fn.call(elem, next, hooks);
				}

				if (!startLength && hooks) {
					hooks.empty.fire();
				}
			},

			_queueHooks: function _queueHooks(elem, type) {
				var key = type + "queueHooks";
				return data_priv.get(elem, key) || data_priv.access(elem, key, {
					empty: jQuery.Callbacks("once memory").add(function () {
						data_priv.remove(elem, [type + "queue", key]);
					})
				});
			}
		});

		jQuery.fn.extend({
			queue: function queue(type, data) {
				var setter = 2;

				if (typeof type !== "string") {
					data = type;
					type = "fx";
					setter--;
				}

				if (arguments.length < setter) {
					return jQuery.queue(this[0], type);
				}

				return data === undefined ? this : this.each(function () {
					var queue = jQuery.queue(this, type, data);

					jQuery._queueHooks(this, type);

					if (type === "fx" && queue[0] !== "inprogress") {
						jQuery.dequeue(this, type);
					}
				});
			},
			dequeue: function dequeue(type) {
				return this.each(function () {
					jQuery.dequeue(this, type);
				});
			},
			clearQueue: function clearQueue(type) {
				return this.queue(type || "fx", []);
			},

			promise: function promise(type, obj) {
				var tmp,
				    count = 1,
				    defer = jQuery.Deferred(),
				    elements = this,
				    i = this.length,
				    resolve = function resolve() {
					if (! --count) {
						defer.resolveWith(elements, [elements]);
					}
				};

				if (typeof type !== "string") {
					obj = type;
					type = undefined;
				}
				type = type || "fx";

				while (i--) {
					tmp = data_priv.get(elements[i], type + "queueHooks");
					if (tmp && tmp.empty) {
						count++;
						tmp.empty.add(resolve);
					}
				}
				resolve();
				return defer.promise(obj);
			}
		});
		var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

		var cssExpand = ["Top", "Right", "Bottom", "Left"];

		var isHidden = function isHidden(elem, el) {
			elem = el || elem;
			return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
		};

		var rcheckableType = /^(?:checkbox|radio)$/i;

		(function () {
			var fragment = document.createDocumentFragment(),
			    div = fragment.appendChild(document.createElement("div")),
			    input = document.createElement("input");

			input.setAttribute("type", "radio");
			input.setAttribute("checked", "checked");
			input.setAttribute("name", "t");

			div.appendChild(input);

			support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

			div.innerHTML = "<textarea>x</textarea>";
			support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
		})();
		var strundefined =  true ? "undefined" : _typeof(undefined);

		support.focusinBubbles = "onfocusin" in window;

		var rkeyEvent = /^key/,
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
			} catch (err) {}
		}

		jQuery.event = {

			global: {},

			add: function add(elem, types, handler, data, selector) {

				var handleObjIn,
				    eventHandle,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = data_priv.get(elem);

				if (!elemData) {
					return;
				}

				if (handler.handler) {
					handleObjIn = handler;
					handler = handleObjIn.handler;
					selector = handleObjIn.selector;
				}

				if (!handler.guid) {
					handler.guid = jQuery.guid++;
				}

				if (!(events = elemData.events)) {
					events = elemData.events = {};
				}
				if (!(eventHandle = elemData.handle)) {
					eventHandle = elemData.handle = function (e) {
						return (typeof jQuery === "undefined" ? "undefined" : _typeof(jQuery)) !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
					};
				}

				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					if (!type) {
						continue;
					}

					special = jQuery.event.special[type] || {};

					type = (selector ? special.delegateType : special.bindType) || type;

					special = jQuery.event.special[type] || {};

					handleObj = jQuery.extend({
						type: type,
						origType: origType,
						data: data,
						handler: handler,
						guid: handler.guid,
						selector: selector,
						needsContext: selector && jQuery.expr.match.needsContext.test(selector),
						namespace: namespaces.join(".")
					}, handleObjIn);

					if (!(handlers = events[type])) {
						handlers = events[type] = [];
						handlers.delegateCount = 0;

						if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
							if (elem.addEventListener) {
								elem.addEventListener(type, eventHandle, false);
							}
						}
					}

					if (special.add) {
						special.add.call(elem, handleObj);

						if (!handleObj.handler.guid) {
							handleObj.handler.guid = handler.guid;
						}
					}

					if (selector) {
						handlers.splice(handlers.delegateCount++, 0, handleObj);
					} else {
						handlers.push(handleObj);
					}

					jQuery.event.global[type] = true;
				}
			},

			remove: function remove(elem, types, handler, selector, mappedTypes) {

				var j,
				    origCount,
				    tmp,
				    events,
				    t,
				    handleObj,
				    special,
				    handlers,
				    type,
				    namespaces,
				    origType,
				    elemData = data_priv.hasData(elem) && data_priv.get(elem);

				if (!elemData || !(events = elemData.events)) {
					return;
				}

				types = (types || "").match(rnotwhite) || [""];
				t = types.length;
				while (t--) {
					tmp = rtypenamespace.exec(types[t]) || [];
					type = origType = tmp[1];
					namespaces = (tmp[2] || "").split(".").sort();

					if (!type) {
						for (type in events) {
							jQuery.event.remove(elem, type + types[t], handler, selector, true);
						}
						continue;
					}

					special = jQuery.event.special[type] || {};
					type = (selector ? special.delegateType : special.bindType) || type;
					handlers = events[type] || [];
					tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

					origCount = j = handlers.length;
					while (j--) {
						handleObj = handlers[j];

						if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
							handlers.splice(j, 1);

							if (handleObj.selector) {
								handlers.delegateCount--;
							}
							if (special.remove) {
								special.remove.call(elem, handleObj);
							}
						}
					}

					if (origCount && !handlers.length) {
						if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
							jQuery.removeEvent(elem, type, elemData.handle);
						}

						delete events[type];
					}
				}

				if (jQuery.isEmptyObject(events)) {
					delete elemData.handle;
					data_priv.remove(elem, "events");
				}
			},

			trigger: function trigger(event, data, elem, onlyHandlers) {

				var i,
				    cur,
				    tmp,
				    bubbleType,
				    ontype,
				    handle,
				    special,
				    eventPath = [elem || document],
				    type = hasOwn.call(event, "type") ? event.type : event,
				    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

				cur = tmp = elem = elem || document;

				if (elem.nodeType === 3 || elem.nodeType === 8) {
					return;
				}

				if (rfocusMorph.test(type + jQuery.event.triggered)) {
					return;
				}

				if (type.indexOf(".") >= 0) {
					namespaces = type.split(".");
					type = namespaces.shift();
					namespaces.sort();
				}
				ontype = type.indexOf(":") < 0 && "on" + type;

				event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

				event.isTrigger = onlyHandlers ? 2 : 3;
				event.namespace = namespaces.join(".");
				event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

				event.result = undefined;
				if (!event.target) {
					event.target = elem;
				}

				data = data == null ? [event] : jQuery.makeArray(data, [event]);

				special = jQuery.event.special[type] || {};
				if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
					return;
				}

				if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

					bubbleType = special.delegateType || type;
					if (!rfocusMorph.test(bubbleType + type)) {
						cur = cur.parentNode;
					}
					for (; cur; cur = cur.parentNode) {
						eventPath.push(cur);
						tmp = cur;
					}

					if (tmp === (elem.ownerDocument || document)) {
						eventPath.push(tmp.defaultView || tmp.parentWindow || window);
					}
				}

				i = 0;
				while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

					event.type = i > 1 ? bubbleType : special.bindType || type;

					handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
					if (handle) {
						handle.apply(cur, data);
					}

					handle = ontype && cur[ontype];
					if (handle && handle.apply && jQuery.acceptData(cur)) {
						event.result = handle.apply(cur, data);
						if (event.result === false) {
							event.preventDefault();
						}
					}
				}
				event.type = type;

				if (!onlyHandlers && !event.isDefaultPrevented()) {

					if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {
						if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {
							tmp = elem[ontype];

							if (tmp) {
								elem[ontype] = null;
							}

							jQuery.event.triggered = type;
							elem[type]();
							jQuery.event.triggered = undefined;

							if (tmp) {
								elem[ontype] = tmp;
							}
						}
					}
				}

				return event.result;
			},

			dispatch: function dispatch(event) {
				event = jQuery.event.fix(event);

				var i,
				    j,
				    ret,
				    matched,
				    handleObj,
				    handlerQueue = [],
				    args = _slice.call(arguments),
				    handlers = (data_priv.get(this, "events") || {})[event.type] || [],
				    special = jQuery.event.special[event.type] || {};

				args[0] = event;
				event.delegateTarget = this;

				if (special.preDispatch && special.preDispatch.call(this, event) === false) {
					return;
				}

				handlerQueue = jQuery.event.handlers.call(this, event, handlers);

				i = 0;
				while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
					event.currentTarget = matched.elem;

					j = 0;
					while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
						if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

							event.handleObj = handleObj;
							event.data = handleObj.data;

							ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

							if (ret !== undefined) {
								if ((event.result = ret) === false) {
									event.preventDefault();
									event.stopPropagation();
								}
							}
						}
					}
				}

				if (special.postDispatch) {
					special.postDispatch.call(this, event);
				}

				return event.result;
			},

			handlers: function handlers(event, _handlers) {
				var i,
				    matches,
				    sel,
				    handleObj,
				    handlerQueue = [],
				    delegateCount = _handlers.delegateCount,
				    cur = event.target;

				if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

					for (; cur !== this; cur = cur.parentNode || this) {
						if (cur.disabled !== true || event.type !== "click") {
							matches = [];
							for (i = 0; i < delegateCount; i++) {
								handleObj = _handlers[i];

								sel = handleObj.selector + " ";

								if (matches[sel] === undefined) {
									matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
								}
								if (matches[sel]) {
									matches.push(handleObj);
								}
							}
							if (matches.length) {
								handlerQueue.push({ elem: cur, handlers: matches });
							}
						}
					}
				}

				if (delegateCount < _handlers.length) {
					handlerQueue.push({ elem: this, handlers: _handlers.slice(delegateCount) });
				}

				return handlerQueue;
			},

			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

			fixHooks: {},

			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function filter(event, original) {
					if (event.which == null) {
						event.which = original.charCode != null ? original.charCode : original.keyCode;
					}

					return event;
				}
			},

			mouseHooks: {
				props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function filter(event, original) {
					var eventDoc,
					    doc,
					    body,
					    button = original.button;

					if (event.pageX == null && original.clientX != null) {
						eventDoc = event.target.ownerDocument || document;
						doc = eventDoc.documentElement;
						body = eventDoc.body;

						event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
						event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
					}

					if (!event.which && button !== undefined) {
						event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
					}

					return event;
				}
			},

			fix: function fix(event) {
				if (event[jQuery.expando]) {
					return event;
				}

				var i,
				    prop,
				    copy,
				    type = event.type,
				    originalEvent = event,
				    fixHook = this.fixHooks[type];

				if (!fixHook) {
					this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
				}
				copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

				event = new jQuery.Event(originalEvent);

				i = copy.length;
				while (i--) {
					prop = copy[i];
					event[prop] = originalEvent[prop];
				}

				if (!event.target) {
					event.target = document;
				}

				if (event.target.nodeType === 3) {
					event.target = event.target.parentNode;
				}

				return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
			},

			special: {
				load: {
					noBubble: true
				},
				focus: {
					trigger: function trigger() {
						if (this !== safeActiveElement() && this.focus) {
							this.focus();
							return false;
						}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function trigger() {
						if (this === safeActiveElement() && this.blur) {
							this.blur();
							return false;
						}
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function trigger() {
						if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
							this.click();
							return false;
						}
					},

					_default: function _default(event) {
						return jQuery.nodeName(event.target, "a");
					}
				},

				beforeunload: {
					postDispatch: function postDispatch(event) {
						if (event.result !== undefined && event.originalEvent) {
							event.originalEvent.returnValue = event.result;
						}
					}
				}
			},

			simulate: function simulate(type, elem, event, bubble) {
				var e = jQuery.extend(new jQuery.Event(), event, {
					type: type,
					isSimulated: true,
					originalEvent: {}
				});
				if (bubble) {
					jQuery.event.trigger(e, null, elem);
				} else {
					jQuery.event.dispatch.call(elem, e);
				}
				if (e.isDefaultPrevented()) {
					event.preventDefault();
				}
			}
		};

		jQuery.removeEvent = function (elem, type, handle) {
			if (elem.removeEventListener) {
				elem.removeEventListener(type, handle, false);
			}
		};

		jQuery.Event = function (src, props) {
			if (!(this instanceof jQuery.Event)) {
				return new jQuery.Event(src, props);
			}

			if (src && src.type) {
				this.originalEvent = src;
				this.type = src.type;

				this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && src.returnValue === false ? returnTrue : returnFalse;
			} else {
				this.type = src;
			}

			if (props) {
				jQuery.extend(this, props);
			}

			this.timeStamp = src && src.timeStamp || jQuery.now();

			this[jQuery.expando] = true;
		};

		jQuery.Event.prototype = {
			isDefaultPrevented: returnFalse,
			isPropagationStopped: returnFalse,
			isImmediatePropagationStopped: returnFalse,

			preventDefault: function preventDefault() {
				var e = this.originalEvent;

				this.isDefaultPrevented = returnTrue;

				if (e && e.preventDefault) {
					e.preventDefault();
				}
			},
			stopPropagation: function stopPropagation() {
				var e = this.originalEvent;

				this.isPropagationStopped = returnTrue;

				if (e && e.stopPropagation) {
					e.stopPropagation();
				}
			},
			stopImmediatePropagation: function stopImmediatePropagation() {
				var e = this.originalEvent;

				this.isImmediatePropagationStopped = returnTrue;

				if (e && e.stopImmediatePropagation) {
					e.stopImmediatePropagation();
				}

				this.stopPropagation();
			}
		};

		jQuery.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (orig, fix) {
			jQuery.event.special[orig] = {
				delegateType: fix,
				bindType: fix,

				handle: function handle(event) {
					var ret,
					    target = this,
					    related = event.relatedTarget,
					    handleObj = event.handleObj;

					if (!related || related !== target && !jQuery.contains(target, related)) {
						event.type = handleObj.origType;
						ret = handleObj.handler.apply(this, arguments);
						event.type = fix;
					}
					return ret;
				}
			};
		});

		if (!support.focusinBubbles) {
			jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {
				var handler = function handler(event) {
					jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
				};

				jQuery.event.special[fix] = {
					setup: function setup() {
						var doc = this.ownerDocument || this,
						    attaches = data_priv.access(doc, fix);

						if (!attaches) {
							doc.addEventListener(orig, handler, true);
						}
						data_priv.access(doc, fix, (attaches || 0) + 1);
					},
					teardown: function teardown() {
						var doc = this.ownerDocument || this,
						    attaches = data_priv.access(doc, fix) - 1;

						if (!attaches) {
							doc.removeEventListener(orig, handler, true);
							data_priv.remove(doc, fix);
						} else {
							data_priv.access(doc, fix, attaches);
						}
					}
				};
			});
		}

		jQuery.fn.extend({

			on: function on(types, selector, data, fn, one) {
				var origFn, type;

				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					if (typeof selector !== "string") {
						data = data || selector;
						selector = undefined;
					}
					for (type in types) {
						this.on(type, selector, data, types[type], one);
					}
					return this;
				}

				if (data == null && fn == null) {
					fn = selector;
					data = selector = undefined;
				} else if (fn == null) {
					if (typeof selector === "string") {
						fn = data;
						data = undefined;
					} else {
						fn = data;
						data = selector;
						selector = undefined;
					}
				}
				if (fn === false) {
					fn = returnFalse;
				} else if (!fn) {
					return this;
				}

				if (one === 1) {
					origFn = fn;
					fn = function fn(event) {
						jQuery().off(event);
						return origFn.apply(this, arguments);
					};

					fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
				}
				return this.each(function () {
					jQuery.event.add(this, types, fn, data, selector);
				});
			},
			one: function one(types, selector, data, fn) {
				return this.on(types, selector, data, fn, 1);
			},
			off: function off(types, selector, fn) {
				var handleObj, type;
				if (types && types.preventDefault && types.handleObj) {
					handleObj = types.handleObj;
					jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
					return this;
				}
				if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {
					for (type in types) {
						this.off(type, selector, types[type]);
					}
					return this;
				}
				if (selector === false || typeof selector === "function") {
					fn = selector;
					selector = undefined;
				}
				if (fn === false) {
					fn = returnFalse;
				}
				return this.each(function () {
					jQuery.event.remove(this, types, fn, selector);
				});
			},

			trigger: function trigger(type, data) {
				return this.each(function () {
					jQuery.event.trigger(type, data, this);
				});
			},
			triggerHandler: function triggerHandler(type, data) {
				var elem = this[0];
				if (elem) {
					return jQuery.event.trigger(type, data, elem, true);
				}
			}
		});

		var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		    rtagName = /<([\w:]+)/,
		    rhtml = /<|&#?\w+;/,
		    rnoInnerhtml = /<(?:script|style|link)/i,
		    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		    rscriptType = /^$|\/(?:java|ecma)script/i,
		    rscriptTypeMasked = /^true\/(.*)/,
		    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		    wrapMap = {
			option: [1, "<select multiple='multiple'>", "</select>"],

			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

			_default: [0, "", ""]
		};

		wrapMap.optgroup = wrapMap.option;

		wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
		wrapMap.th = wrapMap.td;

		function manipulationTarget(elem, content) {
			return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
		}

		function disableScript(elem) {
			elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
			return elem;
		}
		function restoreScript(elem) {
			var match = rscriptTypeMasked.exec(elem.type);

			if (match) {
				elem.type = match[1];
			} else {
				elem.removeAttribute("type");
			}

			return elem;
		}

		function setGlobalEval(elems, refElements) {
			var i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
			}
		}

		function cloneCopyEvent(src, dest) {
			var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

			if (dest.nodeType !== 1) {
				return;
			}

			if (data_priv.hasData(src)) {
				pdataOld = data_priv.access(src);
				pdataCur = data_priv.set(dest, pdataOld);
				events = pdataOld.events;

				if (events) {
					delete pdataCur.handle;
					pdataCur.events = {};

					for (type in events) {
						for (i = 0, l = events[type].length; i < l; i++) {
							jQuery.event.add(dest, type, events[type][i]);
						}
					}
				}
			}

			if (data_user.hasData(src)) {
				udataOld = data_user.access(src);
				udataCur = jQuery.extend({}, udataOld);

				data_user.set(dest, udataCur);
			}
		}

		function getAll(context, tag) {
			var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];

			return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
		}

		function fixInput(src, dest) {
			var nodeName = dest.nodeName.toLowerCase();

			if (nodeName === "input" && rcheckableType.test(src.type)) {
				dest.checked = src.checked;
			} else if (nodeName === "input" || nodeName === "textarea") {
				dest.defaultValue = src.defaultValue;
			}
		}

		jQuery.extend({
			clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
				var i,
				    l,
				    srcElements,
				    destElements,
				    clone = elem.cloneNode(true),
				    inPage = jQuery.contains(elem.ownerDocument, elem);

				if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
					destElements = getAll(clone);
					srcElements = getAll(elem);

					for (i = 0, l = srcElements.length; i < l; i++) {
						fixInput(srcElements[i], destElements[i]);
					}
				}

				if (dataAndEvents) {
					if (deepDataAndEvents) {
						srcElements = srcElements || getAll(elem);
						destElements = destElements || getAll(clone);

						for (i = 0, l = srcElements.length; i < l; i++) {
							cloneCopyEvent(srcElements[i], destElements[i]);
						}
					} else {
						cloneCopyEvent(elem, clone);
					}
				}

				destElements = getAll(clone, "script");
				if (destElements.length > 0) {
					setGlobalEval(destElements, !inPage && getAll(elem, "script"));
				}

				return clone;
			},

			buildFragment: function buildFragment(elems, context, scripts, selection) {
				var elem,
				    tmp,
				    tag,
				    wrap,
				    contains,
				    j,
				    fragment = context.createDocumentFragment(),
				    nodes = [],
				    i = 0,
				    l = elems.length;

				for (; i < l; i++) {
					elem = elems[i];

					if (elem || elem === 0) {
						if (jQuery.type(elem) === "object") {
							jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
						} else if (!rhtml.test(elem)) {
							nodes.push(context.createTextNode(elem));
						} else {
							tmp = tmp || fragment.appendChild(context.createElement("div"));

							tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
							wrap = wrapMap[tag] || wrapMap._default;
							tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

							j = wrap[0];
							while (j--) {
								tmp = tmp.lastChild;
							}

							jQuery.merge(nodes, tmp.childNodes);

							tmp = fragment.firstChild;

							tmp.textContent = "";
						}
					}
				}

				fragment.textContent = "";

				i = 0;
				while (elem = nodes[i++]) {
					if (selection && jQuery.inArray(elem, selection) !== -1) {
						continue;
					}

					contains = jQuery.contains(elem.ownerDocument, elem);

					tmp = getAll(fragment.appendChild(elem), "script");

					if (contains) {
						setGlobalEval(tmp);
					}

					if (scripts) {
						j = 0;
						while (elem = tmp[j++]) {
							if (rscriptType.test(elem.type || "")) {
								scripts.push(elem);
							}
						}
					}
				}

				return fragment;
			},

			cleanData: function cleanData(elems) {
				var data,
				    elem,
				    type,
				    key,
				    special = jQuery.event.special,
				    i = 0;

				for (; (elem = elems[i]) !== undefined; i++) {
					if (jQuery.acceptData(elem)) {
						key = elem[data_priv.expando];

						if (key && (data = data_priv.cache[key])) {
							if (data.events) {
								for (type in data.events) {
									if (special[type]) {
										jQuery.event.remove(elem, type);
									} else {
										jQuery.removeEvent(elem, type, data.handle);
									}
								}
							}
							if (data_priv.cache[key]) {
								delete data_priv.cache[key];
							}
						}
					}

					delete data_user.cache[elem[data_user.expando]];
				}
			}
		});

		jQuery.fn.extend({
			text: function text(value) {
				return access(this, function (value) {
					return value === undefined ? jQuery.text(this) : this.empty().each(function () {
						if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
							this.textContent = value;
						}
					});
				}, null, value, arguments.length);
			},

			append: function append() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.appendChild(elem);
					}
				});
			},

			prepend: function prepend() {
				return this.domManip(arguments, function (elem) {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						var target = manipulationTarget(this, elem);
						target.insertBefore(elem, target.firstChild);
					}
				});
			},

			before: function before() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this);
					}
				});
			},

			after: function after() {
				return this.domManip(arguments, function (elem) {
					if (this.parentNode) {
						this.parentNode.insertBefore(elem, this.nextSibling);
					}
				});
			},

			remove: function remove(selector, keepData) {
				var elem,
				    elems = selector ? jQuery.filter(selector, this) : this,
				    i = 0;

				for (; (elem = elems[i]) != null; i++) {
					if (!keepData && elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem));
					}

					if (elem.parentNode) {
						if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
							setGlobalEval(getAll(elem, "script"));
						}
						elem.parentNode.removeChild(elem);
					}
				}

				return this;
			},

			empty: function empty() {
				var elem,
				    i = 0;

				for (; (elem = this[i]) != null; i++) {
					if (elem.nodeType === 1) {
						jQuery.cleanData(getAll(elem, false));

						elem.textContent = "";
					}
				}

				return this;
			},

			clone: function clone(dataAndEvents, deepDataAndEvents) {
				dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
				deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

				return this.map(function () {
					return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
				});
			},

			html: function html(value) {
				return access(this, function (value) {
					var elem = this[0] || {},
					    i = 0,
					    l = this.length;

					if (value === undefined && elem.nodeType === 1) {
						return elem.innerHTML;
					}

					if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

						value = value.replace(rxhtmlTag, "<$1></$2>");

						try {
							for (; i < l; i++) {
								elem = this[i] || {};

								if (elem.nodeType === 1) {
									jQuery.cleanData(getAll(elem, false));
									elem.innerHTML = value;
								}
							}

							elem = 0;
						} catch (e) {}
					}

					if (elem) {
						this.empty().append(value);
					}
				}, null, value, arguments.length);
			},

			replaceWith: function replaceWith() {
				var arg = arguments[0];

				this.domManip(arguments, function (elem) {
					arg = this.parentNode;

					jQuery.cleanData(getAll(this));

					if (arg) {
						arg.replaceChild(elem, this);
					}
				});

				return arg && (arg.length || arg.nodeType) ? this : this.remove();
			},

			detach: function detach(selector) {
				return this.remove(selector, true);
			},

			domManip: function domManip(args, callback) {
				args = concat.apply([], args);

				var fragment,
				    first,
				    scripts,
				    hasScripts,
				    node,
				    doc,
				    i = 0,
				    l = this.length,
				    set = this,
				    iNoClone = l - 1,
				    value = args[0],
				    isFunction = jQuery.isFunction(value);

				if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
					return this.each(function (index) {
						var self = set.eq(index);
						if (isFunction) {
							args[0] = value.call(this, index, self.html());
						}
						self.domManip(args, callback);
					});
				}

				if (l) {
					fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
					first = fragment.firstChild;

					if (fragment.childNodes.length === 1) {
						fragment = first;
					}

					if (first) {
						scripts = jQuery.map(getAll(fragment, "script"), disableScript);
						hasScripts = scripts.length;

						for (; i < l; i++) {
							node = fragment;

							if (i !== iNoClone) {
								node = jQuery.clone(node, true, true);

								if (hasScripts) {
									jQuery.merge(scripts, getAll(node, "script"));
								}
							}

							callback.call(this[i], node, i);
						}

						if (hasScripts) {
							doc = scripts[scripts.length - 1].ownerDocument;

							jQuery.map(scripts, restoreScript);

							for (i = 0; i < hasScripts; i++) {
								node = scripts[i];
								if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {

									if (node.src) {
										if (jQuery._evalUrl) {
											jQuery._evalUrl(node.src);
										}
									} else {
										jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
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
		}, function (name, original) {
			jQuery.fn[name] = function (selector) {
				var elems,
				    ret = [],
				    insert = jQuery(selector),
				    last = insert.length - 1,
				    i = 0;

				for (; i <= last; i++) {
					elems = i === last ? this : this.clone(true);
					jQuery(insert[i])[original](elems);

					push.apply(ret, elems.get());
				}

				return this.pushStack(ret);
			};
		});

		var iframe,
		    elemdisplay = {};

		function actualDisplay(name, doc) {
			var style,
			    elem = jQuery(doc.createElement(name)).appendTo(doc.body),
			    display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ? style.display : jQuery.css(elem[0], "display");

			elem.detach();

			return display;
		}

		function defaultDisplay(nodeName) {
			var doc = document,
			    display = elemdisplay[nodeName];

			if (!display) {
				display = actualDisplay(nodeName, doc);

				if (display === "none" || !display) {
					iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

					doc = iframe[0].contentDocument;

					doc.write();
					doc.close();

					display = actualDisplay(nodeName, doc);
					iframe.detach();
				}

				elemdisplay[nodeName] = display;
			}

			return display;
		}
		var rmargin = /^margin/;

		var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

		var getStyles = function getStyles(elem) {
			if (elem.ownerDocument.defaultView.opener) {
				return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
			}

			return window.getComputedStyle(elem, null);
		};

		function curCSS(elem, name, computed) {
			var width,
			    minWidth,
			    maxWidth,
			    ret,
			    style = elem.style;

			computed = computed || getStyles(elem);

			if (computed) {
				ret = computed.getPropertyValue(name) || computed[name];
			}

			if (computed) {

				if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
					ret = jQuery.style(elem, name);
				}

				if (rnumnonpx.test(ret) && rmargin.test(name)) {
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;

					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;

					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}

			return ret !== undefined ? ret + "" : ret;
		}

		function addGetHookIf(conditionFn, hookFn) {
			return {
				get: function get() {
					if (conditionFn()) {
						delete this.get;
						return;
					}

					return (this.get = hookFn).apply(this, arguments);
				}
			};
		}

		(function () {
			var pixelPositionVal,
			    boxSizingReliableVal,
			    docElem = document.documentElement,
			    container = document.createElement("div"),
			    div = document.createElement("div");

			if (!div.style) {
				return;
			}

			div.style.backgroundClip = "content-box";
			div.cloneNode(true).style.backgroundClip = "";
			support.clearCloneStyle = div.style.backgroundClip === "content-box";

			container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
			container.appendChild(div);

			function computePixelPositionAndBoxSizingReliable() {
				div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
				div.innerHTML = "";
				docElem.appendChild(container);

				var divStyle = window.getComputedStyle(div, null);
				pixelPositionVal = divStyle.top !== "1%";
				boxSizingReliableVal = divStyle.width === "4px";

				docElem.removeChild(container);
			}

			if (window.getComputedStyle) {
				jQuery.extend(support, {
					pixelPosition: function pixelPosition() {
						computePixelPositionAndBoxSizingReliable();
						return pixelPositionVal;
					},
					boxSizingReliable: function boxSizingReliable() {
						if (boxSizingReliableVal == null) {
							computePixelPositionAndBoxSizingReliable();
						}
						return boxSizingReliableVal;
					},
					reliableMarginRight: function reliableMarginRight() {
						var ret,
						    marginDiv = div.appendChild(document.createElement("div"));

						marginDiv.style.cssText = div.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
						marginDiv.style.marginRight = marginDiv.style.width = "0";
						div.style.width = "1px";
						docElem.appendChild(container);

						ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);

						docElem.removeChild(container);
						div.removeChild(marginDiv);

						return ret;
					}
				});
			}
		})();

		jQuery.swap = function (elem, options, callback, args) {
			var ret,
			    name,
			    old = {};

			for (name in options) {
				old[name] = elem.style[name];
				elem.style[name] = options[name];
			}

			ret = callback.apply(elem, args || []);

			for (name in options) {
				elem.style[name] = old[name];
			}

			return ret;
		};

		var rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
		    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
		    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		    cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

		function vendorPropName(style, name) {
			if (name in style) {
				return name;
			}

			var capName = name[0].toUpperCase() + name.slice(1),
			    origName = name,
			    i = cssPrefixes.length;

			while (i--) {
				name = cssPrefixes[i] + capName;
				if (name in style) {
					return name;
				}
			}

			return origName;
		}

		function setPositiveNumber(elem, value, subtract) {
			var matches = rnumsplit.exec(value);
			return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
		}

		function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
			var i = extra === (isBorderBox ? "border" : "content") ? 4 : name === "width" ? 1 : 0,
			    val = 0;

			for (; i < 4; i += 2) {
				if (extra === "margin") {
					val += jQuery.css(elem, extra + cssExpand[i], true, styles);
				}

				if (isBorderBox) {
					if (extra === "content") {
						val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
					}

					if (extra !== "margin") {
						val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				} else {
					val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

					if (extra !== "padding") {
						val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
					}
				}
			}

			return val;
		}

		function getWidthOrHeight(elem, name, extra) {
			var valueIsBorderBox = true,
			    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			    styles = getStyles(elem),
			    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

			if (val <= 0 || val == null) {
				val = curCSS(elem, name, styles);
				if (val < 0 || val == null) {
					val = elem.style[name];
				}

				if (rnumnonpx.test(val)) {
					return val;
				}

				valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

				val = parseFloat(val) || 0;
			}

			return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
		}

		function showHide(elements, show) {
			var display,
			    elem,
			    hidden,
			    values = [],
			    index = 0,
			    length = elements.length;

			for (; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}

				values[index] = data_priv.get(elem, "olddisplay");
				display = elem.style.display;
				if (show) {
					if (!values[index] && display === "none") {
						elem.style.display = "";
					}

					if (elem.style.display === "" && isHidden(elem)) {
						values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
					}
				} else {
					hidden = isHidden(elem);

					if (display !== "none" || !hidden) {
						data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
					}
				}
			}

			for (index = 0; index < length; index++) {
				elem = elements[index];
				if (!elem.style) {
					continue;
				}
				if (!show || elem.style.display === "none" || elem.style.display === "") {
					elem.style.display = show ? values[index] || "" : "none";
				}
			}

			return elements;
		}

		jQuery.extend({
			cssHooks: {
				opacity: {
					get: function get(elem, computed) {
						if (computed) {
							var ret = curCSS(elem, "opacity");
							return ret === "" ? "1" : ret;
						}
					}
				}
			},

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

			cssProps: {
				"float": "cssFloat"
			},

			style: function style(elem, name, value, extra) {
				if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
					return;
				}

				var ret,
				    type,
				    hooks,
				    origName = jQuery.camelCase(name),
				    style = elem.style;

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				if (value !== undefined) {
					type = typeof value === "undefined" ? "undefined" : _typeof(value);

					if (type === "string" && (ret = rrelNum.exec(value))) {
						value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));

						type = "number";
					}

					if (value == null || value !== value) {
						return;
					}

					if (type === "number" && !jQuery.cssNumber[origName]) {
						value += "px";
					}

					if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
						style[name] = "inherit";
					}

					if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
						style[name] = value;
					}
				} else {
					if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
						return ret;
					}

					return style[name];
				}
			},

			css: function css(elem, name, extra, styles) {
				var val,
				    num,
				    hooks,
				    origName = jQuery.camelCase(name);

				name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

				hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

				if (hooks && "get" in hooks) {
					val = hooks.get(elem, true, extra);
				}

				if (val === undefined) {
					val = curCSS(elem, name, styles);
				}

				if (val === "normal" && name in cssNormalTransform) {
					val = cssNormalTransform[name];
				}

				if (extra === "" || extra) {
					num = parseFloat(val);
					return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
				}
				return val;
			}
		});

		jQuery.each(["height", "width"], function (i, name) {
			jQuery.cssHooks[name] = {
				get: function get(elem, computed, extra) {
					if (computed) {
						return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
							return getWidthOrHeight(elem, name, extra);
						}) : getWidthOrHeight(elem, name, extra);
					}
				},

				set: function set(elem, value, extra) {
					var styles = extra && getStyles(elem);
					return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
				}
			};
		});

		jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
			if (computed) {
				return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
			}
		});

		jQuery.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (prefix, suffix) {
			jQuery.cssHooks[prefix + suffix] = {
				expand: function expand(value) {
					var i = 0,
					    expanded = {},
					    parts = typeof value === "string" ? value.split(" ") : [value];

					for (; i < 4; i++) {
						expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
					}

					return expanded;
				}
			};

			if (!rmargin.test(prefix)) {
				jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
			}
		});

		jQuery.fn.extend({
			css: function css(name, value) {
				return access(this, function (elem, name, value) {
					var styles,
					    len,
					    map = {},
					    i = 0;

					if (jQuery.isArray(name)) {
						styles = getStyles(elem);
						len = name.length;

						for (; i < len; i++) {
							map[name[i]] = jQuery.css(elem, name[i], false, styles);
						}

						return map;
					}

					return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
				}, name, value, arguments.length > 1);
			},
			show: function show() {
				return showHide(this, true);
			},
			hide: function hide() {
				return showHide(this);
			},
			toggle: function toggle(state) {
				if (typeof state === "boolean") {
					return state ? this.show() : this.hide();
				}

				return this.each(function () {
					if (isHidden(this)) {
						jQuery(this).show();
					} else {
						jQuery(this).hide();
					}
				});
			}
		});

		function Tween(elem, options, prop, end, easing) {
			return new Tween.prototype.init(elem, options, prop, end, easing);
		}
		jQuery.Tween = Tween;

		Tween.prototype = {
			constructor: Tween,
			init: function init(elem, options, prop, end, easing, unit) {
				this.elem = elem;
				this.prop = prop;
				this.easing = easing || "swing";
				this.options = options;
				this.start = this.now = this.cur();
				this.end = end;
				this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
			},
			cur: function cur() {
				var hooks = Tween.propHooks[this.prop];

				return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
			},
			run: function run(percent) {
				var eased,
				    hooks = Tween.propHooks[this.prop];

				if (this.options.duration) {
					this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
				} else {
					this.pos = eased = percent;
				}
				this.now = (this.end - this.start) * eased + this.start;

				if (this.options.step) {
					this.options.step.call(this.elem, this.now, this);
				}

				if (hooks && hooks.set) {
					hooks.set(this);
				} else {
					Tween.propHooks._default.set(this);
				}
				return this;
			}
		};

		Tween.prototype.init.prototype = Tween.prototype;

		Tween.propHooks = {
			_default: {
				get: function get(tween) {
					var result;

					if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
						return tween.elem[tween.prop];
					}

					result = jQuery.css(tween.elem, tween.prop, "");

					return !result || result === "auto" ? 0 : result;
				},
				set: function set(tween) {
					if (jQuery.fx.step[tween.prop]) {
						jQuery.fx.step[tween.prop](tween);
					} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
						jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
					} else {
						tween.elem[tween.prop] = tween.now;
					}
				}
			}
		};

		Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
			set: function set(tween) {
				if (tween.elem.nodeType && tween.elem.parentNode) {
					tween.elem[tween.prop] = tween.now;
				}
			}
		};

		jQuery.easing = {
			linear: function linear(p) {
				return p;
			},
			swing: function swing(p) {
				return 0.5 - Math.cos(p * Math.PI) / 2;
			}
		};

		jQuery.fx = Tween.prototype.init;

		jQuery.fx.step = {};

		var fxNow,
		    timerId,
		    rfxtypes = /^(?:toggle|show|hide)$/,
		    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
		    rrun = /queueHooks$/,
		    animationPrefilters = [defaultPrefilter],
		    tweeners = {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value),
				    target = tween.cur(),
				    parts = rfxnum.exec(value),
				    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),
				    start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
				    scale = 1,
				    maxIterations = 20;

				if (start && start[3] !== unit) {
					unit = unit || start[3];

					parts = parts || [];

					start = +target || 1;

					do {
						scale = scale || ".5";

						start = start / scale;
						jQuery.style(tween.elem, prop, start + unit);
					} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
				}

				if (parts) {
					start = tween.start = +start || +target || 0;
					tween.unit = unit;

					tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
				}

				return tween;
			}]
		};

		function createFxNow() {
			setTimeout(function () {
				fxNow = undefined;
			});
			return fxNow = jQuery.now();
		}

		function genFx(type, includeWidth) {
			var which,
			    i = 0,
			    attrs = { height: type };

			includeWidth = includeWidth ? 1 : 0;
			for (; i < 4; i += 2 - includeWidth) {
				which = cssExpand[i];
				attrs["margin" + which] = attrs["padding" + which] = type;
			}

			if (includeWidth) {
				attrs.opacity = attrs.width = type;
			}

			return attrs;
		}

		function createTween(value, prop, animation) {
			var tween,
			    collection = (tweeners[prop] || []).concat(tweeners["*"]),
			    index = 0,
			    length = collection.length;
			for (; index < length; index++) {
				if (tween = collection[index].call(animation, prop, value)) {
					return tween;
				}
			}
		}

		function defaultPrefilter(elem, props, opts) {
			var prop,
			    value,
			    toggle,
			    tween,
			    hooks,
			    oldfire,
			    display,
			    checkDisplay,
			    anim = this,
			    orig = {},
			    style = elem.style,
			    hidden = elem.nodeType && isHidden(elem),
			    dataShow = data_priv.get(elem, "fxshow");

			if (!opts.queue) {
				hooks = jQuery._queueHooks(elem, "fx");
				if (hooks.unqueued == null) {
					hooks.unqueued = 0;
					oldfire = hooks.empty.fire;
					hooks.empty.fire = function () {
						if (!hooks.unqueued) {
							oldfire();
						}
					};
				}
				hooks.unqueued++;

				anim.always(function () {
					anim.always(function () {
						hooks.unqueued--;
						if (!jQuery.queue(elem, "fx").length) {
							hooks.empty.fire();
						}
					});
				});
			}

			if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
				opts.overflow = [style.overflow, style.overflowX, style.overflowY];

				display = jQuery.css(elem, "display");

				checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

				if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
					style.display = "inline-block";
				}
			}

			if (opts.overflow) {
				style.overflow = "hidden";
				anim.always(function () {
					style.overflow = opts.overflow[0];
					style.overflowX = opts.overflow[1];
					style.overflowY = opts.overflow[2];
				});
			}

			for (prop in props) {
				value = props[prop];
				if (rfxtypes.exec(value)) {
					delete props[prop];
					toggle = toggle || value === "toggle";
					if (value === (hidden ? "hide" : "show")) {
						if (value === "show" && dataShow && dataShow[prop] !== undefined) {
							hidden = true;
						} else {
							continue;
						}
					}
					orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
				} else {
					display = undefined;
				}
			}

			if (!jQuery.isEmptyObject(orig)) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = data_priv.access(elem, "fxshow", {});
				}

				if (toggle) {
					dataShow.hidden = !hidden;
				}
				if (hidden) {
					jQuery(elem).show();
				} else {
					anim.done(function () {
						jQuery(elem).hide();
					});
				}
				anim.done(function () {
					var prop;

					data_priv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
				for (prop in orig) {
					tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

					if (!(prop in dataShow)) {
						dataShow[prop] = tween.start;
						if (hidden) {
							tween.end = tween.start;
							tween.start = prop === "width" || prop === "height" ? 1 : 0;
						}
					}
				}
			} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
				style.display = display;
			}
		}

		function propFilter(props, specialEasing) {
			var index, name, easing, value, hooks;

			for (index in props) {
				name = jQuery.camelCase(index);
				easing = specialEasing[name];
				value = props[index];
				if (jQuery.isArray(value)) {
					easing = value[1];
					value = props[index] = value[0];
				}

				if (index !== name) {
					props[name] = value;
					delete props[index];
				}

				hooks = jQuery.cssHooks[name];
				if (hooks && "expand" in hooks) {
					value = hooks.expand(value);
					delete props[name];

					for (index in value) {
						if (!(index in props)) {
							props[index] = value[index];
							specialEasing[index] = easing;
						}
					}
				} else {
					specialEasing[name] = easing;
				}
			}
		}

		function Animation(elem, properties, options) {
			var result,
			    stopped,
			    index = 0,
			    length = animationPrefilters.length,
			    deferred = jQuery.Deferred().always(function () {
				delete tick.elem;
			}),
			    tick = function tick() {
				if (stopped) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
				    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
				    temp = remaining / animation.duration || 0,
				    percent = 1 - temp,
				    index = 0,
				    length = animation.tweens.length;

				for (; index < length; index++) {
					animation.tweens[index].run(percent);
				}

				deferred.notifyWith(elem, [animation, percent, remaining]);

				if (percent < 1 && length) {
					return remaining;
				} else {
					deferred.resolveWith(elem, [animation]);
					return false;
				}
			},
			    animation = deferred.promise({
				elem: elem,
				props: jQuery.extend({}, properties),
				opts: jQuery.extend(true, { specialEasing: {} }, options),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function createTween(prop, end) {
					var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
					animation.tweens.push(tween);
					return tween;
				},
				stop: function stop(gotoEnd) {
					var index = 0,
					    length = gotoEnd ? animation.tweens.length : 0;
					if (stopped) {
						return this;
					}
					stopped = true;
					for (; index < length; index++) {
						animation.tweens[index].run(1);
					}

					if (gotoEnd) {
						deferred.resolveWith(elem, [animation, gotoEnd]);
					} else {
						deferred.rejectWith(elem, [animation, gotoEnd]);
					}
					return this;
				}
			}),
			    props = animation.props;

			propFilter(props, animation.opts.specialEasing);

			for (; index < length; index++) {
				result = animationPrefilters[index].call(animation, elem, props, animation.opts);
				if (result) {
					return result;
				}
			}

			jQuery.map(props, createTween, animation);

			if (jQuery.isFunction(animation.opts.start)) {
				animation.opts.start.call(elem, animation);
			}

			jQuery.fx.timer(jQuery.extend(tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			}));

			return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
		}

		jQuery.Animation = jQuery.extend(Animation, {

			tweener: function tweener(props, callback) {
				if (jQuery.isFunction(props)) {
					callback = props;
					props = ["*"];
				} else {
					props = props.split(" ");
				}

				var prop,
				    index = 0,
				    length = props.length;

				for (; index < length; index++) {
					prop = props[index];
					tweeners[prop] = tweeners[prop] || [];
					tweeners[prop].unshift(callback);
				}
			},

			prefilter: function prefilter(callback, prepend) {
				if (prepend) {
					animationPrefilters.unshift(callback);
				} else {
					animationPrefilters.push(callback);
				}
			}
		});

		jQuery.speed = function (speed, easing, fn) {
			var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
				complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
				duration: speed,
				easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
			};

			opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

			if (opt.queue == null || opt.queue === true) {
				opt.queue = "fx";
			}

			opt.old = opt.complete;

			opt.complete = function () {
				if (jQuery.isFunction(opt.old)) {
					opt.old.call(this);
				}

				if (opt.queue) {
					jQuery.dequeue(this, opt.queue);
				}
			};

			return opt;
		};

		jQuery.fn.extend({
			fadeTo: function fadeTo(speed, to, easing, callback) {
				return this.filter(isHidden).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
			},
			animate: function animate(prop, speed, easing, callback) {
				var empty = jQuery.isEmptyObject(prop),
				    optall = jQuery.speed(speed, easing, callback),
				    doAnimation = function doAnimation() {
					var anim = Animation(this, jQuery.extend({}, prop), optall);

					if (empty || data_priv.get(this, "finish")) {
						anim.stop(true);
					}
				};
				doAnimation.finish = doAnimation;

				return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
			},
			stop: function stop(type, clearQueue, gotoEnd) {
				var stopQueue = function stopQueue(hooks) {
					var stop = hooks.stop;
					delete hooks.stop;
					stop(gotoEnd);
				};

				if (typeof type !== "string") {
					gotoEnd = clearQueue;
					clearQueue = type;
					type = undefined;
				}
				if (clearQueue && type !== false) {
					this.queue(type || "fx", []);
				}

				return this.each(function () {
					var dequeue = true,
					    index = type != null && type + "queueHooks",
					    timers = jQuery.timers,
					    data = data_priv.get(this);

					if (index) {
						if (data[index] && data[index].stop) {
							stopQueue(data[index]);
						}
					} else {
						for (index in data) {
							if (data[index] && data[index].stop && rrun.test(index)) {
								stopQueue(data[index]);
							}
						}
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
							timers[index].anim.stop(gotoEnd);
							dequeue = false;
							timers.splice(index, 1);
						}
					}

					if (dequeue || !gotoEnd) {
						jQuery.dequeue(this, type);
					}
				});
			},
			finish: function finish(type) {
				if (type !== false) {
					type = type || "fx";
				}
				return this.each(function () {
					var index,
					    data = data_priv.get(this),
					    queue = data[type + "queue"],
					    hooks = data[type + "queueHooks"],
					    timers = jQuery.timers,
					    length = queue ? queue.length : 0;

					data.finish = true;

					jQuery.queue(this, type, []);

					if (hooks && hooks.stop) {
						hooks.stop.call(this, true);
					}

					for (index = timers.length; index--;) {
						if (timers[index].elem === this && timers[index].queue === type) {
							timers[index].anim.stop(true);
							timers.splice(index, 1);
						}
					}

					for (index = 0; index < length; index++) {
						if (queue[index] && queue[index].finish) {
							queue[index].finish.call(this);
						}
					}

					delete data.finish;
				});
			}
		});

		jQuery.each(["toggle", "show", "hide"], function (i, name) {
			var cssFn = jQuery.fn[name];
			jQuery.fn[name] = function (speed, easing, callback) {
				return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
			};
		});

		jQuery.each({
			slideDown: genFx("show"),
			slideUp: genFx("hide"),
			slideToggle: genFx("toggle"),
			fadeIn: { opacity: "show" },
			fadeOut: { opacity: "hide" },
			fadeToggle: { opacity: "toggle" }
		}, function (name, props) {
			jQuery.fn[name] = function (speed, easing, callback) {
				return this.animate(props, speed, easing, callback);
			};
		});

		jQuery.timers = [];
		jQuery.fx.tick = function () {
			var timer,
			    i = 0,
			    timers = jQuery.timers;

			fxNow = jQuery.now();

			for (; i < timers.length; i++) {
				timer = timers[i];

				if (!timer() && timers[i] === timer) {
					timers.splice(i--, 1);
				}
			}

			if (!timers.length) {
				jQuery.fx.stop();
			}
			fxNow = undefined;
		};

		jQuery.fx.timer = function (timer) {
			jQuery.timers.push(timer);
			if (timer()) {
				jQuery.fx.start();
			} else {
				jQuery.timers.pop();
			}
		};

		jQuery.fx.interval = 13;

		jQuery.fx.start = function () {
			if (!timerId) {
				timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
			}
		};

		jQuery.fx.stop = function () {
			clearInterval(timerId);
			timerId = null;
		};

		jQuery.fx.speeds = {
			slow: 600,
			fast: 200,

			_default: 400
		};

		jQuery.fn.delay = function (time, type) {
			time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
			type = type || "fx";

			return this.queue(type, function (next, hooks) {
				var timeout = setTimeout(next, time);
				hooks.stop = function () {
					clearTimeout(timeout);
				};
			});
		};

		(function () {
			var input = document.createElement("input"),
			    select = document.createElement("select"),
			    opt = select.appendChild(document.createElement("option"));

			input.type = "checkbox";

			support.checkOn = input.value !== "";

			support.optSelected = opt.selected;

			select.disabled = true;
			support.optDisabled = !opt.disabled;

			input = document.createElement("input");
			input.value = "t";
			input.type = "radio";
			support.radioValue = input.value === "t";
		})();

		var nodeHook,
		    boolHook,
		    attrHandle = jQuery.expr.attrHandle;

		jQuery.fn.extend({
			attr: function attr(name, value) {
				return access(this, jQuery.attr, name, value, arguments.length > 1);
			},

			removeAttr: function removeAttr(name) {
				return this.each(function () {
					jQuery.removeAttr(this, name);
				});
			}
		});

		jQuery.extend({
			attr: function attr(elem, name, value) {
				var hooks,
				    ret,
				    nType = elem.nodeType;

				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				if (_typeof(elem.getAttribute) === strundefined) {
					return jQuery.prop(elem, name, value);
				}

				if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
					name = name.toLowerCase();
					hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
				}

				if (value !== undefined) {

					if (value === null) {
						jQuery.removeAttr(elem, name);
					} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
						return ret;
					} else {
						elem.setAttribute(name, value + "");
						return value;
					}
				} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
					return ret;
				} else {
					ret = jQuery.find.attr(elem, name);

					return ret == null ? undefined : ret;
				}
			},

			removeAttr: function removeAttr(elem, value) {
				var name,
				    propName,
				    i = 0,
				    attrNames = value && value.match(rnotwhite);

				if (attrNames && elem.nodeType === 1) {
					while (name = attrNames[i++]) {
						propName = jQuery.propFix[name] || name;

						if (jQuery.expr.match.bool.test(name)) {
							elem[propName] = false;
						}

						elem.removeAttribute(name);
					}
				}
			},

			attrHooks: {
				type: {
					set: function set(elem, value) {
						if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
							var val = elem.value;
							elem.setAttribute("type", value);
							if (val) {
								elem.value = val;
							}
							return value;
						}
					}
				}
			}
		});

		boolHook = {
			set: function set(elem, value, name) {
				if (value === false) {
					jQuery.removeAttr(elem, name);
				} else {
					elem.setAttribute(name, name);
				}
				return name;
			}
		};
		jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
			var getter = attrHandle[name] || jQuery.find.attr;

			attrHandle[name] = function (elem, name, isXML) {
				var ret, handle;
				if (!isXML) {
					handle = attrHandle[name];
					attrHandle[name] = ret;
					ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
					attrHandle[name] = handle;
				}
				return ret;
			};
		});

		var rfocusable = /^(?:input|select|textarea|button)$/i;

		jQuery.fn.extend({
			prop: function prop(name, value) {
				return access(this, jQuery.prop, name, value, arguments.length > 1);
			},

			removeProp: function removeProp(name) {
				return this.each(function () {
					delete this[jQuery.propFix[name] || name];
				});
			}
		});

		jQuery.extend({
			propFix: {
				"for": "htmlFor",
				"class": "className"
			},

			prop: function prop(elem, name, value) {
				var ret,
				    hooks,
				    notxml,
				    nType = elem.nodeType;

				if (!elem || nType === 3 || nType === 8 || nType === 2) {
					return;
				}

				notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

				if (notxml) {
					name = jQuery.propFix[name] || name;
					hooks = jQuery.propHooks[name];
				}

				if (value !== undefined) {
					return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
				} else {
					return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
				}
			},

			propHooks: {
				tabIndex: {
					get: function get(elem) {
						return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
					}
				}
			}
		});

		if (!support.optSelected) {
			jQuery.propHooks.selected = {
				get: function get(elem) {
					var parent = elem.parentNode;
					if (parent && parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
					return null;
				}
			};
		}

		jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			jQuery.propFix[this.toLowerCase()] = this;
		});

		var rclass = /[\t\r\n\f]/g;

		jQuery.fn.extend({
			addClass: function addClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    proceed = typeof value === "string" && value,
				    i = 0,
				    len = this.length;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).addClass(value.call(this, j, this.className));
					});
				}

				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];
						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								if (cur.indexOf(" " + clazz + " ") < 0) {
									cur += clazz + " ";
								}
							}

							finalValue = jQuery.trim(cur);
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}

				return this;
			},

			removeClass: function removeClass(value) {
				var classes,
				    elem,
				    cur,
				    clazz,
				    j,
				    finalValue,
				    proceed = arguments.length === 0 || typeof value === "string" && value,
				    i = 0,
				    len = this.length;

				if (jQuery.isFunction(value)) {
					return this.each(function (j) {
						jQuery(this).removeClass(value.call(this, j, this.className));
					});
				}
				if (proceed) {
					classes = (value || "").match(rnotwhite) || [];

					for (; i < len; i++) {
						elem = this[i];

						cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

						if (cur) {
							j = 0;
							while (clazz = classes[j++]) {
								while (cur.indexOf(" " + clazz + " ") >= 0) {
									cur = cur.replace(" " + clazz + " ", " ");
								}
							}

							finalValue = value ? jQuery.trim(cur) : "";
							if (elem.className !== finalValue) {
								elem.className = finalValue;
							}
						}
					}
				}

				return this;
			},

			toggleClass: function toggleClass(value, stateVal) {
				var type = typeof value === "undefined" ? "undefined" : _typeof(value);

				if (typeof stateVal === "boolean" && type === "string") {
					return stateVal ? this.addClass(value) : this.removeClass(value);
				}

				if (jQuery.isFunction(value)) {
					return this.each(function (i) {
						jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
					});
				}

				return this.each(function () {
					if (type === "string") {
						var className,
						    i = 0,
						    self = jQuery(this),
						    classNames = value.match(rnotwhite) || [];

						while (className = classNames[i++]) {
							if (self.hasClass(className)) {
								self.removeClass(className);
							} else {
								self.addClass(className);
							}
						}
					} else if (type === strundefined || type === "boolean") {
						if (this.className) {
							data_priv.set(this, "__className__", this.className);
						}

						this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
					}
				});
			},

			hasClass: function hasClass(selector) {
				var className = " " + selector + " ",
				    i = 0,
				    l = this.length;
				for (; i < l; i++) {
					if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
						return true;
					}
				}

				return false;
			}
		});

		var rreturn = /\r/g;

		jQuery.fn.extend({
			val: function val(value) {
				var hooks,
				    ret,
				    isFunction,
				    elem = this[0];

				if (!arguments.length) {
					if (elem) {
						hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

						if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
							return ret;
						}

						ret = elem.value;

						return typeof ret === "string" ? ret.replace(rreturn, "") : ret == null ? "" : ret;
					}

					return;
				}

				isFunction = jQuery.isFunction(value);

				return this.each(function (i) {
					var val;

					if (this.nodeType !== 1) {
						return;
					}

					if (isFunction) {
						val = value.call(this, i, jQuery(this).val());
					} else {
						val = value;
					}

					if (val == null) {
						val = "";
					} else if (typeof val === "number") {
						val += "";
					} else if (jQuery.isArray(val)) {
						val = jQuery.map(val, function (value) {
							return value == null ? "" : value + "";
						});
					}

					hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

					if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
						this.value = val;
					}
				});
			}
		});

		jQuery.extend({
			valHooks: {
				option: {
					get: function get(elem) {
						var val = jQuery.find.attr(elem, "value");
						return val != null ? val : jQuery.trim(jQuery.text(elem));
					}
				},
				select: {
					get: function get(elem) {
						var value,
						    option,
						    options = elem.options,
						    index = elem.selectedIndex,
						    one = elem.type === "select-one" || index < 0,
						    values = one ? null : [],
						    max = one ? index + 1 : options.length,
						    i = index < 0 ? max : one ? index : 0;

						for (; i < max; i++) {
							option = options[i];

							if ((option.selected || i === index) && (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {
								value = jQuery(option).val();

								if (one) {
									return value;
								}

								values.push(value);
							}
						}

						return values;
					},

					set: function set(elem, value) {
						var optionSet,
						    option,
						    options = elem.options,
						    values = jQuery.makeArray(value),
						    i = options.length;

						while (i--) {
							option = options[i];
							if (option.selected = jQuery.inArray(option.value, values) >= 0) {
								optionSet = true;
							}
						}

						if (!optionSet) {
							elem.selectedIndex = -1;
						}
						return values;
					}
				}
			}
		});

		jQuery.each(["radio", "checkbox"], function () {
			jQuery.valHooks[this] = {
				set: function set(elem, value) {
					if (jQuery.isArray(value)) {
						return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
					}
				}
			};
			if (!support.checkOn) {
				jQuery.valHooks[this].get = function (elem) {
					return elem.getAttribute("value") === null ? "on" : elem.value;
				};
			}
		});

		jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {
			jQuery.fn[name] = function (data, fn) {
				return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
			};
		});

		jQuery.fn.extend({
			hover: function hover(fnOver, fnOut) {
				return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
			},

			bind: function bind(types, data, fn) {
				return this.on(types, null, data, fn);
			},
			unbind: function unbind(types, fn) {
				return this.off(types, null, fn);
			},

			delegate: function delegate(selector, types, data, fn) {
				return this.on(types, selector, data, fn);
			},
			undelegate: function undelegate(selector, types, fn) {
				return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
			}
		});

		var nonce = jQuery.now();

		var rquery = /\?/;

		jQuery.parseJSON = function (data) {
			return JSON.parse(data + "");
		};

		jQuery.parseXML = function (data) {
			var xml, tmp;
			if (!data || typeof data !== "string") {
				return null;
			}

			try {
				tmp = new DOMParser();
				xml = tmp.parseFromString(data, "text/xml");
			} catch (e) {
				xml = undefined;
			}

			if (!xml || xml.getElementsByTagName("parsererror").length) {
				jQuery.error("Invalid XML: " + data);
			}
			return xml;
		};

		var rhash = /#.*$/,
		    rts = /([?&])_=[^&]*/,
		    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
		    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		    rnoContent = /^(?:GET|HEAD)$/,
		    rprotocol = /^\/\//,
		    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		    prefilters = {},
		    transports = {},
		    allTypes = "*/".concat("*"),
		    ajaxLocation = window.location.href,
		    ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

		function addToPrefiltersOrTransports(structure) {
			return function (dataTypeExpression, func) {

				if (typeof dataTypeExpression !== "string") {
					func = dataTypeExpression;
					dataTypeExpression = "*";
				}

				var dataType,
				    i = 0,
				    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

				if (jQuery.isFunction(func)) {
					while (dataType = dataTypes[i++]) {
						if (dataType[0] === "+") {
							dataType = dataType.slice(1) || "*";
							(structure[dataType] = structure[dataType] || []).unshift(func);
						} else {
							(structure[dataType] = structure[dataType] || []).push(func);
						}
					}
				}
			};
		}

		function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

			var inspected = {},
			    seekingTransport = structure === transports;

			function inspect(dataType) {
				var selected;
				inspected[dataType] = true;
				jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
					var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
					if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
						options.dataTypes.unshift(dataTypeOrTransport);
						inspect(dataTypeOrTransport);
						return false;
					} else if (seekingTransport) {
						return !(selected = dataTypeOrTransport);
					}
				});
				return selected;
			}

			return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
		}

		function ajaxExtend(target, src) {
			var key,
			    deep,
			    flatOptions = jQuery.ajaxSettings.flatOptions || {};

			for (key in src) {
				if (src[key] !== undefined) {
					(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
				}
			}
			if (deep) {
				jQuery.extend(true, target, deep);
			}

			return target;
		}

		function ajaxHandleResponses(s, jqXHR, responses) {

			var ct,
			    type,
			    finalDataType,
			    firstDataType,
			    contents = s.contents,
			    dataTypes = s.dataTypes;

			while (dataTypes[0] === "*") {
				dataTypes.shift();
				if (ct === undefined) {
					ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
				}
			}

			if (ct) {
				for (type in contents) {
					if (contents[type] && contents[type].test(ct)) {
						dataTypes.unshift(type);
						break;
					}
				}
			}

			if (dataTypes[0] in responses) {
				finalDataType = dataTypes[0];
			} else {
				for (type in responses) {
					if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
						finalDataType = type;
						break;
					}
					if (!firstDataType) {
						firstDataType = type;
					}
				}

				finalDataType = finalDataType || firstDataType;
			}

			if (finalDataType) {
				if (finalDataType !== dataTypes[0]) {
					dataTypes.unshift(finalDataType);
				}
				return responses[finalDataType];
			}
		}

		function ajaxConvert(s, response, jqXHR, isSuccess) {
			var conv2,
			    current,
			    conv,
			    tmp,
			    prev,
			    converters = {},
			    dataTypes = s.dataTypes.slice();

			if (dataTypes[1]) {
				for (conv in s.converters) {
					converters[conv.toLowerCase()] = s.converters[conv];
				}
			}

			current = dataTypes.shift();

			while (current) {

				if (s.responseFields[current]) {
					jqXHR[s.responseFields[current]] = response;
				}

				if (!prev && isSuccess && s.dataFilter) {
					response = s.dataFilter(response, s.dataType);
				}

				prev = current;
				current = dataTypes.shift();

				if (current) {
					if (current === "*") {

						current = prev;
					} else if (prev !== "*" && prev !== current) {
						conv = converters[prev + " " + current] || converters["* " + current];

						if (!conv) {
							for (conv2 in converters) {
								tmp = conv2.split(" ");
								if (tmp[1] === current) {
									conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
									if (conv) {
										if (conv === true) {
											conv = converters[conv2];
										} else if (converters[conv2] !== true) {
											current = tmp[0];
											dataTypes.unshift(tmp[1]);
										}
										break;
									}
								}
							}
						}

						if (conv !== true) {
							if (conv && s["throws"]) {
								response = conv(response);
							} else {
								try {
									response = conv(response);
								} catch (e) {
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
			active: 0,

			lastModified: {},
			etag: {},

			ajaxSettings: {
				url: ajaxLocation,
				type: "GET",
				isLocal: rlocalProtocol.test(ajaxLocParts[1]),
				global: true,
				processData: true,
				async: true,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",


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

				converters: {
					"* text": String,

					"text html": true,

					"text json": jQuery.parseJSON,

					"text xml": jQuery.parseXML
				},

				flatOptions: {
					url: true,
					context: true
				}
			},

			ajaxSetup: function ajaxSetup(target, settings) {
				return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
			},

			ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
			ajaxTransport: addToPrefiltersOrTransports(transports),

			ajax: function ajax(url, options) {
				if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
					options = url;
					url = undefined;
				}

				options = options || {};

				var transport,
				    cacheURL,
				    responseHeadersString,
				    responseHeaders,
				    timeoutTimer,
				    parts,
				    fireGlobals,
				    i,
				    s = jQuery.ajaxSetup({}, options),
				    callbackContext = s.context || s,
				    globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,
				    deferred = jQuery.Deferred(),
				    completeDeferred = jQuery.Callbacks("once memory"),
				    _statusCode = s.statusCode || {},
				    requestHeaders = {},
				    requestHeadersNames = {},
				    state = 0,
				    strAbort = "canceled",
				    jqXHR = {
					readyState: 0,

					getResponseHeader: function getResponseHeader(key) {
						var match;
						if (state === 2) {
							if (!responseHeaders) {
								responseHeaders = {};
								while (match = rheaders.exec(responseHeadersString)) {
									responseHeaders[match[1].toLowerCase()] = match[2];
								}
							}
							match = responseHeaders[key.toLowerCase()];
						}
						return match == null ? null : match;
					},

					getAllResponseHeaders: function getAllResponseHeaders() {
						return state === 2 ? responseHeadersString : null;
					},

					setRequestHeader: function setRequestHeader(name, value) {
						var lname = name.toLowerCase();
						if (!state) {
							name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
							requestHeaders[name] = value;
						}
						return this;
					},

					overrideMimeType: function overrideMimeType(type) {
						if (!state) {
							s.mimeType = type;
						}
						return this;
					},

					statusCode: function statusCode(map) {
						var code;
						if (map) {
							if (state < 2) {
								for (code in map) {
									_statusCode[code] = [_statusCode[code], map[code]];
								}
							} else {
								jqXHR.always(map[jqXHR.status]);
							}
						}
						return this;
					},

					abort: function abort(statusText) {
						var finalText = statusText || strAbort;
						if (transport) {
							transport.abort(finalText);
						}
						done(0, finalText);
						return this;
					}
				};

				deferred.promise(jqXHR).complete = completeDeferred.add;
				jqXHR.success = jqXHR.done;
				jqXHR.error = jqXHR.fail;

				s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

				s.type = options.method || options.type || s.method || s.type;

				s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

				if (s.crossDomain == null) {
					parts = rurl.exec(s.url.toLowerCase());
					s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
				}

				if (s.data && s.processData && typeof s.data !== "string") {
					s.data = jQuery.param(s.data, s.traditional);
				}

				inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

				if (state === 2) {
					return jqXHR;
				}

				fireGlobals = jQuery.event && s.global;

				if (fireGlobals && jQuery.active++ === 0) {
					jQuery.event.trigger("ajaxStart");
				}

				s.type = s.type.toUpperCase();

				s.hasContent = !rnoContent.test(s.type);

				cacheURL = s.url;

				if (!s.hasContent) {
					if (s.data) {
						cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;

						delete s.data;
					}

					if (s.cache === false) {
						s.url = rts.test(cacheURL) ? cacheURL.replace(rts, "$1_=" + nonce++) : cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
					}
				}

				if (s.ifModified) {
					if (jQuery.lastModified[cacheURL]) {
						jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
					}
					if (jQuery.etag[cacheURL]) {
						jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
					}
				}

				if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
					jqXHR.setRequestHeader("Content-Type", s.contentType);
				}

				jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

				for (i in s.headers) {
					jqXHR.setRequestHeader(i, s.headers[i]);
				}

				if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
					return jqXHR.abort();
				}

				strAbort = "abort";

				for (i in { success: 1, error: 1, complete: 1 }) {
					jqXHR[i](s[i]);
				}

				transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

				if (!transport) {
					done(-1, "No Transport");
				} else {
					jqXHR.readyState = 1;

					if (fireGlobals) {
						globalEventContext.trigger("ajaxSend", [jqXHR, s]);
					}

					if (s.async && s.timeout > 0) {
						timeoutTimer = setTimeout(function () {
							jqXHR.abort("timeout");
						}, s.timeout);
					}

					try {
						state = 1;
						transport.send(requestHeaders, done);
					} catch (e) {
						if (state < 2) {
							done(-1, e);
						} else {
							throw e;
						}
					}
				}

				function done(status, nativeStatusText, responses, headers) {
					var isSuccess,
					    success,
					    error,
					    response,
					    modified,
					    statusText = nativeStatusText;

					if (state === 2) {
						return;
					}

					state = 2;

					if (timeoutTimer) {
						clearTimeout(timeoutTimer);
					}

					transport = undefined;

					responseHeadersString = headers || "";

					jqXHR.readyState = status > 0 ? 4 : 0;

					isSuccess = status >= 200 && status < 300 || status === 304;

					if (responses) {
						response = ajaxHandleResponses(s, jqXHR, responses);
					}

					response = ajaxConvert(s, response, jqXHR, isSuccess);

					if (isSuccess) {
						if (s.ifModified) {
							modified = jqXHR.getResponseHeader("Last-Modified");
							if (modified) {
								jQuery.lastModified[cacheURL] = modified;
							}
							modified = jqXHR.getResponseHeader("etag");
							if (modified) {
								jQuery.etag[cacheURL] = modified;
							}
						}

						if (status === 204 || s.type === "HEAD") {
							statusText = "nocontent";
						} else if (status === 304) {
							statusText = "notmodified";
						} else {
							statusText = response.state;
							success = response.data;
							error = response.error;
							isSuccess = !error;
						}
					} else {
						error = statusText;
						if (status || !statusText) {
							statusText = "error";
							if (status < 0) {
								status = 0;
							}
						}
					}

					jqXHR.status = status;
					jqXHR.statusText = (nativeStatusText || statusText) + "";

					if (isSuccess) {
						deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
					} else {
						deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
					}

					jqXHR.statusCode(_statusCode);
					_statusCode = undefined;

					if (fireGlobals) {
						globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
					}

					completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

					if (fireGlobals) {
						globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

						if (! --jQuery.active) {
							jQuery.event.trigger("ajaxStop");
						}
					}
				}

				return jqXHR;
			},

			getJSON: function getJSON(url, data, callback) {
				return jQuery.get(url, data, callback, "json");
			},

			getScript: function getScript(url, callback) {
				return jQuery.get(url, undefined, callback, "script");
			}
		});

		jQuery.each(["get", "post"], function (i, method) {
			jQuery[method] = function (url, data, callback, type) {
				if (jQuery.isFunction(data)) {
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

		jQuery._evalUrl = function (url) {
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
			wrapAll: function wrapAll(html) {
				var wrap;

				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapAll(html.call(this, i));
					});
				}

				if (this[0]) {
					wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

					if (this[0].parentNode) {
						wrap.insertBefore(this[0]);
					}

					wrap.map(function () {
						var elem = this;

						while (elem.firstElementChild) {
							elem = elem.firstElementChild;
						}

						return elem;
					}).append(this);
				}

				return this;
			},

			wrapInner: function wrapInner(html) {
				if (jQuery.isFunction(html)) {
					return this.each(function (i) {
						jQuery(this).wrapInner(html.call(this, i));
					});
				}

				return this.each(function () {
					var self = jQuery(this),
					    contents = self.contents();

					if (contents.length) {
						contents.wrapAll(html);
					} else {
						self.append(html);
					}
				});
			},

			wrap: function wrap(html) {
				var isFunction = jQuery.isFunction(html);

				return this.each(function (i) {
					jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
				});
			},

			unwrap: function unwrap() {
				return this.parent().each(function () {
					if (!jQuery.nodeName(this, "body")) {
						jQuery(this).replaceWith(this.childNodes);
					}
				}).end();
			}
		});

		jQuery.expr.filters.hidden = function (elem) {
			return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
		};
		jQuery.expr.filters.visible = function (elem) {
			return !jQuery.expr.filters.hidden(elem);
		};

		var r20 = /%20/g,
		    rbracket = /\[\]$/,
		    rCRLF = /\r?\n/g,
		    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		    rsubmittable = /^(?:input|select|textarea|keygen)/i;

		function buildParams(prefix, obj, traditional, add) {
			var name;

			if (jQuery.isArray(obj)) {
				jQuery.each(obj, function (i, v) {
					if (traditional || rbracket.test(prefix)) {
						add(prefix, v);
					} else {
						buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" ? i : "") + "]", v, traditional, add);
					}
				});
			} else if (!traditional && jQuery.type(obj) === "object") {
				for (name in obj) {
					buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
				}
			} else {
				add(prefix, obj);
			}
		}

		jQuery.param = function (a, traditional) {
			var prefix,
			    s = [],
			    add = function add(key, value) {
				value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			};

			if (traditional === undefined) {
				traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
			}

			if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
				jQuery.each(a, function () {
					add(this.name, this.value);
				});
			} else {
				for (prefix in a) {
					buildParams(prefix, a[prefix], traditional, add);
				}
			}

			return s.join("&").replace(r20, "+");
		};

		jQuery.fn.extend({
			serialize: function serialize() {
				return jQuery.param(this.serializeArray());
			},
			serializeArray: function serializeArray() {
				return this.map(function () {
					var elements = jQuery.prop(this, "elements");
					return elements ? jQuery.makeArray(elements) : this;
				}).filter(function () {
					var type = this.type;

					return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
				}).map(function (i, elem) {
					var val = jQuery(this).val();

					return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}).get();
			}
		});

		jQuery.ajaxSettings.xhr = function () {
			try {
				return new XMLHttpRequest();
			} catch (e) {}
		};

		var xhrId = 0,
		    xhrCallbacks = {},
		    xhrSuccessStatus = {
			0: 200,

			1223: 204
		},
		    xhrSupported = jQuery.ajaxSettings.xhr();

		if (window.attachEvent) {
			window.attachEvent("onunload", function () {
				for (var key in xhrCallbacks) {
					xhrCallbacks[key]();
				}
			});
		}

		support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
		support.ajax = xhrSupported = !!xhrSupported;

		jQuery.ajaxTransport(function (options) {
			var _callback;

			if (support.cors || xhrSupported && !options.crossDomain) {
				return {
					send: function send(headers, complete) {
						var i,
						    xhr = options.xhr(),
						    id = ++xhrId;

						xhr.open(options.type, options.url, options.async, options.username, options.password);

						if (options.xhrFields) {
							for (i in options.xhrFields) {
								xhr[i] = options.xhrFields[i];
							}
						}

						if (options.mimeType && xhr.overrideMimeType) {
							xhr.overrideMimeType(options.mimeType);
						}

						if (!options.crossDomain && !headers["X-Requested-With"]) {
							headers["X-Requested-With"] = "XMLHttpRequest";
						}

						for (i in headers) {
							xhr.setRequestHeader(i, headers[i]);
						}

						_callback = function callback(type) {
							return function () {
								if (_callback) {
									delete xhrCallbacks[id];
									_callback = xhr.onload = xhr.onerror = null;

									if (type === "abort") {
										xhr.abort();
									} else if (type === "error") {
										complete(xhr.status, xhr.statusText);
									} else {
										complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, typeof xhr.responseText === "string" ? {
											text: xhr.responseText
										} : undefined, xhr.getAllResponseHeaders());
									}
								}
							};
						};

						xhr.onload = _callback();
						xhr.onerror = _callback("error");

						_callback = xhrCallbacks[id] = _callback("abort");

						try {
							xhr.send(options.hasContent && options.data || null);
						} catch (e) {
							if (_callback) {
								throw e;
							}
						}
					},

					abort: function abort() {
						if (_callback) {
							_callback();
						}
					}
				};
			}
		});

		jQuery.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function textScript(text) {
					jQuery.globalEval(text);
					return text;
				}
			}
		});

		jQuery.ajaxPrefilter("script", function (s) {
			if (s.cache === undefined) {
				s.cache = false;
			}
			if (s.crossDomain) {
				s.type = "GET";
			}
		});

		jQuery.ajaxTransport("script", function (s) {
			if (s.crossDomain) {
				var script, _callback2;
				return {
					send: function send(_, complete) {
						script = jQuery("<script>").prop({
							async: true,
							charset: s.scriptCharset,
							src: s.url
						}).on("load error", _callback2 = function callback(evt) {
							script.remove();
							_callback2 = null;
							if (evt) {
								complete(evt.type === "error" ? 404 : 200, evt.type);
							}
						});
						document.head.appendChild(script[0]);
					},
					abort: function abort() {
						if (_callback2) {
							_callback2();
						}
					}
				};
			}
		});

		var oldCallbacks = [],
		    rjsonp = /(=)\?(?=&|$)|\?\?/;

		jQuery.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function jsonpCallback() {
				var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
				this[callback] = true;
				return callback;
			}
		});

		jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

			var callbackName,
			    overwritten,
			    responseContainer,
			    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

			if (jsonProp || s.dataTypes[0] === "jsonp") {
				callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

				if (jsonProp) {
					s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
				} else if (s.jsonp !== false) {
					s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
				}

				s.converters["script json"] = function () {
					if (!responseContainer) {
						jQuery.error(callbackName + " was not called");
					}
					return responseContainer[0];
				};

				s.dataTypes[0] = "json";

				overwritten = window[callbackName];
				window[callbackName] = function () {
					responseContainer = arguments;
				};

				jqXHR.always(function () {
					window[callbackName] = overwritten;

					if (s[callbackName]) {
						s.jsonpCallback = originalSettings.jsonpCallback;

						oldCallbacks.push(callbackName);
					}

					if (responseContainer && jQuery.isFunction(overwritten)) {
						overwritten(responseContainer[0]);
					}

					responseContainer = overwritten = undefined;
				});

				return "script";
			}
		});

		jQuery.parseHTML = function (data, context, keepScripts) {
			if (!data || typeof data !== "string") {
				return null;
			}
			if (typeof context === "boolean") {
				keepScripts = context;
				context = false;
			}
			context = context || document;

			var parsed = rsingleTag.exec(data),
			    scripts = !keepScripts && [];

			if (parsed) {
				return [context.createElement(parsed[1])];
			}

			parsed = jQuery.buildFragment([data], context, scripts);

			if (scripts && scripts.length) {
				jQuery(scripts).remove();
			}

			return jQuery.merge([], parsed.childNodes);
		};

		var _load = jQuery.fn.load;

		jQuery.fn.load = function (url, params, callback) {
			if (typeof url !== "string" && _load) {
				return _load.apply(this, arguments);
			}

			var selector,
			    type,
			    response,
			    self = this,
			    off = url.indexOf(" ");

			if (off >= 0) {
				selector = jQuery.trim(url.slice(off));
				url = url.slice(0, off);
			}

			if (jQuery.isFunction(params)) {
				callback = params;
				params = undefined;
			} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
				type = "POST";
			}

			if (self.length > 0) {
				jQuery.ajax({
					url: url,

					type: type,
					dataType: "html",
					data: params
				}).done(function (responseText) {
					response = arguments;

					self.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
				}).complete(callback && function (jqXHR, status) {
					self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
				});
			}

			return this;
		};

		jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
			jQuery.fn[type] = function (fn) {
				return this.on(type, fn);
			};
		});

		jQuery.expr.filters.animated = function (elem) {
			return jQuery.grep(jQuery.timers, function (fn) {
				return elem === fn.elem;
			}).length;
		};

		var docElem = window.document.documentElement;

		function getWindow(elem) {
			return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
		}

		jQuery.offset = {
			setOffset: function setOffset(elem, options, i) {
				var curPosition,
				    curLeft,
				    curCSSTop,
				    curTop,
				    curOffset,
				    curCSSLeft,
				    calculatePosition,
				    position = jQuery.css(elem, "position"),
				    curElem = jQuery(elem),
				    props = {};

				if (position === "static") {
					elem.style.position = "relative";
				}

				curOffset = curElem.offset();
				curCSSTop = jQuery.css(elem, "top");
				curCSSLeft = jQuery.css(elem, "left");
				calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

				if (calculatePosition) {
					curPosition = curElem.position();
					curTop = curPosition.top;
					curLeft = curPosition.left;
				} else {
					curTop = parseFloat(curCSSTop) || 0;
					curLeft = parseFloat(curCSSLeft) || 0;
				}

				if (jQuery.isFunction(options)) {
					options = options.call(elem, i, curOffset);
				}

				if (options.top != null) {
					props.top = options.top - curOffset.top + curTop;
				}
				if (options.left != null) {
					props.left = options.left - curOffset.left + curLeft;
				}

				if ("using" in options) {
					options.using.call(elem, props);
				} else {
					curElem.css(props);
				}
			}
		};

		jQuery.fn.extend({
			offset: function offset(options) {
				if (arguments.length) {
					return options === undefined ? this : this.each(function (i) {
						jQuery.offset.setOffset(this, options, i);
					});
				}

				var docElem,
				    win,
				    elem = this[0],
				    box = { top: 0, left: 0 },
				    doc = elem && elem.ownerDocument;

				if (!doc) {
					return;
				}

				docElem = doc.documentElement;

				if (!jQuery.contains(docElem, elem)) {
					return box;
				}

				if (_typeof(elem.getBoundingClientRect) !== strundefined) {
					box = elem.getBoundingClientRect();
				}
				win = getWindow(doc);
				return {
					top: box.top + win.pageYOffset - docElem.clientTop,
					left: box.left + win.pageXOffset - docElem.clientLeft
				};
			},

			position: function position() {
				if (!this[0]) {
					return;
				}

				var offsetParent,
				    offset,
				    elem = this[0],
				    parentOffset = { top: 0, left: 0 };

				if (jQuery.css(elem, "position") === "fixed") {
					offset = elem.getBoundingClientRect();
				} else {
					offsetParent = this.offsetParent();

					offset = this.offset();
					if (!jQuery.nodeName(offsetParent[0], "html")) {
						parentOffset = offsetParent.offset();
					}

					parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
					parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
				}

				return {
					top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
					left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
				};
			},

			offsetParent: function offsetParent() {
				return this.map(function () {
					var offsetParent = this.offsetParent || docElem;

					while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
						offsetParent = offsetParent.offsetParent;
					}

					return offsetParent || docElem;
				});
			}
		});

		jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
			var top = "pageYOffset" === prop;

			jQuery.fn[method] = function (val) {
				return access(this, function (elem, method, val) {
					var win = getWindow(elem);

					if (val === undefined) {
						return win ? win[prop] : elem[method];
					}

					if (win) {
						win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
					} else {
						elem[method] = val;
					}
				}, method, val, arguments.length, null);
			};
		});

		jQuery.each(["top", "left"], function (i, prop) {
			jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
				if (computed) {
					computed = curCSS(elem, prop);

					return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
				}
			});
		});

		jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
			jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
				jQuery.fn[funcName] = function (margin, value) {
					var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
					    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

					return access(this, function (elem, type, value) {
						var doc;

						if (jQuery.isWindow(elem)) {
							return elem.document.documentElement["client" + name];
						}

						if (elem.nodeType === 9) {
							doc = elem.documentElement;

							return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
						}

						return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
					}, type, chainable ? margin : undefined, chainable, null);
				};
			});
		});

		jQuery.fn.size = function () {
			return this.length;
		};

		jQuery.fn.andSelf = jQuery.fn.addBack;

		if (true) {
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return jQuery;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}

		var _jQuery = window.jQuery,
		    _$ = window.$;

		jQuery.noConflict = function (deep) {
			if (window.$ === jQuery) {
				window.$ = _$;
			}

			if (deep && window.jQuery === jQuery) {
				window.jQuery = _jQuery;
			}

			return jQuery;
		};

		if ((typeof noGlobal === "undefined" ? "undefined" : _typeof(noGlobal)) === strundefined) {
			window.jQuery = window.$ = jQuery;
		}

		return jQuery;
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	!function (e) {
	  function t(r) {
	    if (n[r]) return n[r].exports;var i = n[r] = { exports: {}, id: r, loaded: !1 };return e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
	  }var n = {};return t.m = e, t.c = n, t.p = "", t(0);
	}([function (e, t, n) {
	  n(1), e.exports = n(3);
	}, function (e, t, n) {
	  var r, i;(function (e) {
	    "use strict";
	    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	      return typeof e === "undefined" ? "undefined" : _typeof(e);
	    } : function (e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    };!function (t, r) {
	      "object" === n(e) && "object" === n(e.exports) ? e.exports = t.document ? r(t, !0) : function (e) {
	        if (!e.document) throw new Error("jQuery requires a window with a document");return r(e);
	      } : r(t);
	    }("undefined" != typeof window ? window : void 0, function (o, a) {
	      function s(e) {
	        var t = "length" in e && e.length,
	            n = ie.type(e);return "function" !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
	      }function u(e, t, n) {
	        if (ie.isFunction(t)) return ie.grep(e, function (e, r) {
	          return !!t.call(e, r, e) !== n;
	        });if (t.nodeType) return ie.grep(e, function (e) {
	          return e === t !== n;
	        });if ("string" == typeof t) {
	          if (pe.test(t)) return ie.filter(t, e, n);t = ie.filter(t, e);
	        }return ie.grep(e, function (e) {
	          return J.call(t, e) >= 0 !== n;
	        });
	      }function l(e, t) {
	        for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
	      }function c(e) {
	        var t = xe[e] = {};return ie.each(e.match(ve) || [], function (e, n) {
	          t[n] = !0;
	        }), t;
	      }function f() {
	        ne.removeEventListener("DOMContentLoaded", f, !1), o.removeEventListener("load", f, !1), ie.ready();
	      }function p() {
	        Object.defineProperty(this.cache = {}, 0, { get: function get() {
	            return {};
	          } }), this.expando = ie.expando + p.uid++;
	      }function d(e, t, n) {
	        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ke, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
	          try {
	            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Se.test(n) ? ie.parseJSON(n) : n);
	          } catch (i) {}Ce.set(e, t, n);
	        } else n = void 0;return n;
	      }function h() {
	        return !0;
	      }function g() {
	        return !1;
	      }function m() {
	        try {
	          return ne.activeElement;
	        } catch (e) {}
	      }function y(e, t) {
	        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
	      }function v(e) {
	        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
	      }function x(e) {
	        var t = We.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
	      }function b(e, t) {
	        for (var n = 0, r = e.length; n < r; n++) {
	          Te.set(e[n], "globalEval", !t || Te.get(t[n], "globalEval"));
	        }
	      }function w(e, t) {
	        var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
	          if (Te.hasData(e) && (o = Te.access(e), a = Te.set(t, o), l = o.events)) {
	            delete a.handle, a.events = {};for (i in l) {
	              for (n = 0, r = l[i].length; n < r; n++) {
	                ie.event.add(t, i, l[i][n]);
	              }
	            }
	          }Ce.hasData(e) && (s = Ce.access(e), u = ie.extend({}, s), Ce.set(t, u));
	        }
	      }function T(e, t) {
	        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], n) : n;
	      }function C(e, t) {
	        var n = t.nodeName.toLowerCase();"input" === n && Ae.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
	      }function S(e, t) {
	        var n,
	            r = ie(t.createElement(e)).appendTo(t.body),
	            i = o.getDefaultComputedStyle && (n = o.getDefaultComputedStyle(r[0])) ? n.display : ie.css(r[0], "display");return r.detach(), i;
	      }function k(e) {
	        var t = ne,
	            n = Xe[e];return n || (n = S(e, t), "none" !== n && n || (ze = (ze || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = ze[0].contentDocument, t.write(), t.close(), n = S(e, t), ze.detach()), Xe[e] = n), n;
	      }function N(e, t, n) {
	        var r,
	            i,
	            o,
	            a,
	            s = e.style;return n = n || Ye(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), Ue.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
	      }function E(e, t) {
	        return { get: function get() {
	            return e() ? void delete this.get : (this.get = t).apply(this, arguments);
	          } };
	      }function j(e, t) {
	        if (t in e) return t;for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = et.length; i--;) {
	          if (t = et[i] + n, t in e) return t;
	        }return r;
	      }function A(e, t, n) {
	        var r = Qe.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
	      }function D(e, t, n, r, i) {
	        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) {
	          "margin" === n && (a += ie.css(e, n + Ee[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Ee[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Ee[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Ee[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Ee[o] + "Width", !0, i)));
	        }return a;
	      }function P(e, t, n) {
	        var r = !0,
	            i = "width" === t ? e.offsetWidth : e.offsetHeight,
	            o = Ye(e),
	            a = "border-box" === ie.css(e, "boxSizing", !1, o);if (i <= 0 || null == i) {
	          if (i = N(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Ue.test(i)) return i;r = a && (te.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
	        }return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px";
	      }function L(e, t) {
	        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) {
	          r = e[a], r.style && (o[a] = Te.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && je(r) && (o[a] = Te.access(r, "olddisplay", k(r.nodeName)))) : (i = je(r), "none" === n && i || Te.set(r, "olddisplay", i ? n : ie.css(r, "display"))));
	        }for (a = 0; a < s; a++) {
	          r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
	        }return e;
	      }function H(e, t, n, r, i) {
	        return new H.prototype.init(e, t, n, r, i);
	      }function q() {
	        return setTimeout(function () {
	          tt = void 0;
	        }), tt = ie.now();
	      }function F(e, t) {
	        var n,
	            r = 0,
	            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
	          n = Ee[r], i["margin" + n] = i["padding" + n] = e;
	        }return t && (i.opacity = i.width = e), i;
	      }function O(e, t, n) {
	        for (var r, i = (st[t] || []).concat(st["*"]), o = 0, a = i.length; o < a; o++) {
	          if (r = i[o].call(n, t, e)) return r;
	        }
	      }function R(e, t, n) {
	        var r,
	            i,
	            o,
	            a,
	            s,
	            u,
	            l,
	            c,
	            f = this,
	            p = {},
	            d = e.style,
	            h = e.nodeType && je(e),
	            g = Te.get(e, "fxshow");n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
	          s.unqueued || u();
	        }), s.unqueued++, f.always(function () {
	          f.always(function () {
	            s.unqueued--, ie.queue(e, "fx").length || s.empty.fire();
	          });
	        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = ie.css(e, "display"), c = "none" === l ? Te.get(e, "olddisplay") || k(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
	          d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
	        }));for (r in t) {
	          if (i = t[r], rt.exec(i)) {
	            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
	              if ("show" !== i || !g || void 0 === g[r]) continue;h = !0;
	            }p[r] = g && g[r] || ie.style(e, r);
	          } else l = void 0;
	        }if (ie.isEmptyObject(p)) "inline" === ("none" === l ? k(e.nodeName) : l) && (d.display = l);else {
	          g ? "hidden" in g && (h = g.hidden) : g = Te.access(e, "fxshow", {}), o && (g.hidden = !h), h ? ie(e).show() : f.done(function () {
	            ie(e).hide();
	          }), f.done(function () {
	            var t;Te.remove(e, "fxshow");for (t in p) {
	              ie.style(e, t, p[t]);
	            }
	          });for (r in p) {
	            a = O(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
	          }
	        }
	      }function V(e, t) {
	        var n, r, i, o, a;for (n in e) {
	          if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
	            o = a.expand(o), delete e[r];for (n in o) {
	              n in e || (e[n] = o[n], t[n] = i);
	            }
	          } else t[r] = i;
	        }
	      }function M(e, t, n) {
	        var r,
	            i,
	            o = 0,
	            a = at.length,
	            s = ie.Deferred().always(function () {
	          delete u.elem;
	        }),
	            u = function u() {
	          if (i) return !1;for (var t = tt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) {
	            l.tweens[a].run(o);
	          }return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1);
	        },
	            l = s.promise({ elem: e, props: ie.extend({}, t), opts: ie.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: tt || q(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
	            var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
	          }, stop: function stop(t) {
	            var n = 0,
	                r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
	              l.tweens[n].run(1);
	            }return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
	          } }),
	            c = l.props;for (V(c, l.opts.specialEasing); o < a; o++) {
	          if (r = at[o].call(l, e, c, l.opts)) return r;
	        }return ie.map(c, O, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
	      }function $(e) {
	        return function (t, n) {
	          "string" != typeof t && (n = t, t = "*");var r,
	              i = 0,
	              o = t.toLowerCase().match(ve) || [];if (ie.isFunction(n)) for (; r = o[i++];) {
	            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
	          }
	        };
	      }function W(e, t, n, r) {
	        function i(s) {
	          var u;return o[s] = !0, ie.each(e[s] || [], function (e, s) {
	            var l = s(t, n, r);return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
	          }), u;
	        }var o = {},
	            a = e === St;return i(t.dataTypes[0]) || !o["*"] && i("*");
	      }function I(e, t) {
	        var n,
	            r,
	            i = ie.ajaxSettings.flatOptions || {};for (n in t) {
	          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
	        }return r && ie.extend(!0, e, r), e;
	      }function B(e, t, n) {
	        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
	          u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
	        }if (r) for (i in s) {
	          if (s[i] && s[i].test(r)) {
	            u.unshift(i);break;
	          }
	        }if (u[0] in n) o = u[0];else {
	          for (i in n) {
	            if (!u[0] || e.converters[i + " " + u[0]]) {
	              o = i;break;
	            }a || (a = i);
	          }o = o || a;
	        }if (o) return o !== u[0] && u.unshift(o), n[o];
	      }function z(e, t, n, r) {
	        var i,
	            o,
	            a,
	            s,
	            u,
	            l = {},
	            c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
	          l[a.toLowerCase()] = e.converters[a];
	        }for (o = c.shift(); o;) {
	          if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
	            if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) {
	              if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
	                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));break;
	              }
	            }if (a !== !0) if (a && e["throws"]) t = a(t);else try {
	              t = a(t);
	            } catch (f) {
	              return { state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o };
	            }
	          }
	        }return { state: "success", data: t };
	      }function X(e, t, r, i) {
	        var o;if (ie.isArray(t)) ie.each(t, function (t, o) {
	          r || At.test(e) ? i(e, o) : X(e + "[" + ("object" === ("undefined" == typeof o ? "undefined" : n(o)) ? t : "") + "]", o, r, i);
	        });else if (r || "object" !== ie.type(t)) i(e, t);else for (o in t) {
	          X(e + "[" + o + "]", t[o], r, i);
	        }
	      }function _(e) {
	        return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
	      }var U = [],
	          Y = U.slice,
	          G = U.concat,
	          Q = U.push,
	          J = U.indexOf,
	          Z = {},
	          K = Z.toString,
	          ee = Z.hasOwnProperty,
	          te = {},
	          ne = o.document,
	          re = "2.1.4",
	          ie = function Bt(e, t) {
	        return new Bt.fn.init(e, t);
	      },
	          oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	          ae = /^-ms-/,
	          se = /-([\da-z])/gi,
	          ue = function ue(e, t) {
	        return t.toUpperCase();
	      };ie.fn = ie.prototype = { jquery: re, constructor: ie, selector: "", length: 0, toArray: function toArray() {
	          return Y.call(this);
	        }, get: function get(e) {
	          return null != e ? e < 0 ? this[e + this.length] : this[e] : Y.call(this);
	        }, pushStack: function pushStack(e) {
	          var t = ie.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
	        }, each: function each(e, t) {
	          return ie.each(this, e, t);
	        }, map: function map(e) {
	          return this.pushStack(ie.map(this, function (t, n) {
	            return e.call(t, n, t);
	          }));
	        }, slice: function slice() {
	          return this.pushStack(Y.apply(this, arguments));
	        }, first: function first() {
	          return this.eq(0);
	        }, last: function last() {
	          return this.eq(-1);
	        }, eq: function eq(e) {
	          var t = this.length,
	              n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
	        }, end: function end() {
	          return this.prevObject || this.constructor(null);
	        }, push: Q, sort: U.sort, splice: U.splice }, ie.extend = ie.fn.extend = function () {
	        var e,
	            t,
	            r,
	            i,
	            o,
	            a,
	            s = arguments[0] || {},
	            u = 1,
	            l = arguments.length,
	            c = !1;for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" === ("undefined" == typeof s ? "undefined" : n(s)) || ie.isFunction(s) || (s = {}), u === l && (s = this, u--); u < l; u++) {
	          if (null != (e = arguments[u])) for (t in e) {
	            r = s[t], i = e[t], s !== i && (c && i && (ie.isPlainObject(i) || (o = ie.isArray(i))) ? (o ? (o = !1, a = r && ie.isArray(r) ? r : []) : a = r && ie.isPlainObject(r) ? r : {}, s[t] = ie.extend(c, a, i)) : void 0 !== i && (s[t] = i));
	          }
	        }return s;
	      }, ie.extend({ expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
	          throw new Error(e);
	        }, noop: function noop() {}, isFunction: function isFunction(e) {
	          return "function" === ie.type(e);
	        }, isArray: Array.isArray, isWindow: function isWindow(e) {
	          return null != e && e === e.window;
	        }, isNumeric: function isNumeric(e) {
	          return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0;
	        }, isPlainObject: function isPlainObject(e) {
	          return "object" === ie.type(e) && !e.nodeType && !ie.isWindow(e) && !(e.constructor && !ee.call(e.constructor.prototype, "isPrototypeOf"));
	        }, isEmptyObject: function isEmptyObject(e) {
	          var t;for (t in e) {
	            return !1;
	          }return !0;
	        }, type: function type(e) {
	          return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : n(e)) || "function" == typeof e ? Z[K.call(e)] || "object" : "undefined" == typeof e ? "undefined" : n(e);
	        }, globalEval: function globalEval(e) {
	          var t,
	              n = eval;e = ie.trim(e), e && (1 === e.indexOf("use strict") ? (t = ne.createElement("script"), t.text = e, ne.head.appendChild(t).parentNode.removeChild(t)) : n(e));
	        }, camelCase: function camelCase(e) {
	          return e.replace(ae, "ms-").replace(se, ue);
	        }, nodeName: function nodeName(e, t) {
	          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	        }, each: function each(e, t, n) {
	          var r,
	              i = 0,
	              o = e.length,
	              a = s(e);if (n) {
	            if (a) for (; i < o && (r = t.apply(e[i], n), r !== !1); i++) {} else for (i in e) {
	              if (r = t.apply(e[i], n), r === !1) break;
	            }
	          } else if (a) for (; i < o && (r = t.call(e[i], i, e[i]), r !== !1); i++) {} else for (i in e) {
	            if (r = t.call(e[i], i, e[i]), r === !1) break;
	          }return e;
	        }, trim: function trim(e) {
	          return null == e ? "" : (e + "").replace(oe, "");
	        }, makeArray: function makeArray(e, t) {
	          var n = t || [];return null != e && (s(Object(e)) ? ie.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n;
	        }, inArray: function inArray(e, t, n) {
	          return null == t ? -1 : J.call(t, e, n);
	        }, merge: function merge(e, t) {
	          for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
	            e[i++] = t[r];
	          }return e.length = i, e;
	        }, grep: function grep(e, t, n) {
	          for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
	            r = !t(e[o], o), r !== s && i.push(e[o]);
	          }return i;
	        }, map: function map(e, t, n) {
	          var r,
	              i = 0,
	              o = e.length,
	              a = s(e),
	              u = [];if (a) for (; i < o; i++) {
	            r = t(e[i], i, n), null != r && u.push(r);
	          } else for (i in e) {
	            r = t(e[i], i, n), null != r && u.push(r);
	          }return G.apply([], u);
	        }, guid: 1, proxy: function zt(e, t) {
	          var n, r, zt;if ("string" == typeof t && (n = e[t], t = e, e = n), ie.isFunction(e)) return r = Y.call(arguments, 2), zt = function zt() {
	            return e.apply(t || this, r.concat(Y.call(arguments)));
	          }, zt.guid = e.guid = e.guid || ie.guid++, zt;
	        }, now: Date.now, support: te }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
	        Z["[object " + t + "]"] = t.toLowerCase();
	      });var le = function (e) {
	        function t(e, t, n, r) {
	          var i, o, a, s, u, l, f, d, h, g;if ((t ? t.ownerDocument || t : $) !== L && P(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;if (!r && q) {
	            if (11 !== s && (i = ve.exec(e))) if (a = i[1]) {
	              if (9 === s) {
	                if (o = t.getElementById(a), !o || !o.parentNode) return n;if (o.id === a) return n.push(o), n;
	              } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && V(t, o) && o.id === a) return n.push(o), n;
	            } else {
	              if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;if ((a = i[3]) && w.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n;
	            }if (w.qsa && (!F || !F.test(e))) {
	              if (d = f = M, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
	                for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) {
	                  l[u] = d + p(l[u]);
	                }h = xe.test(e) && c(t.parentNode) || t, g = l.join(",");
	              }if (g) try {
	                return Z.apply(n, h.querySelectorAll(g)), n;
	              } catch (m) {} finally {
	                f || t.removeAttribute("id");
	              }
	            }
	          }return E(e.replace(ue, "$1"), t, n, r);
	        }function n() {
	          function e(n, r) {
	            return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r;
	          }var t = [];return e;
	        }function r(e) {
	          return e[M] = !0, e;
	        }function i(e) {
	          var t = L.createElement("div");try {
	            return !!e(t);
	          } catch (n) {
	            return !1;
	          } finally {
	            t.parentNode && t.parentNode.removeChild(t), t = null;
	          }
	        }function o(e, t) {
	          for (var n = e.split("|"), r = e.length; r--;) {
	            T.attrHandle[n[r]] = t;
	          }
	        }function a(e, t) {
	          var n = t && e,
	              r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);if (r) return r;if (n) for (; n = n.nextSibling;) {
	            if (n === t) return -1;
	          }return e ? 1 : -1;
	        }function s(e) {
	          return function (t) {
	            var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
	          };
	        }function u(e) {
	          return function (t) {
	            var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
	          };
	        }function l(e) {
	          return r(function (t) {
	            return t = +t, r(function (n, r) {
	              for (var i, o = e([], n.length, t), a = o.length; a--;) {
	                n[i = o[a]] && (n[i] = !(r[i] = n[i]));
	              }
	            });
	          });
	        }function c(e) {
	          return e && "undefined" != typeof e.getElementsByTagName && e;
	        }function f() {}function p(e) {
	          for (var t = 0, n = e.length, r = ""; t < n; t++) {
	            r += e[t].value;
	          }return r;
	        }function d(e, t, n) {
	          var r = t.dir,
	              i = n && "parentNode" === r,
	              o = I++;return t.first ? function (t, n, o) {
	            for (; t = t[r];) {
	              if (1 === t.nodeType || i) return e(t, n, o);
	            }
	          } : function (t, n, a) {
	            var s,
	                u,
	                l = [W, o];if (a) {
	              for (; t = t[r];) {
	                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
	              }
	            } else for (; t = t[r];) {
	              if (1 === t.nodeType || i) {
	                if (u = t[M] || (t[M] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2];if (u[r] = l, l[2] = e(t, n, a)) return !0;
	              }
	            }
	          };
	        }function h(e) {
	          return e.length > 1 ? function (t, n, r) {
	            for (var i = e.length; i--;) {
	              if (!e[i](t, n, r)) return !1;
	            }return !0;
	          } : e[0];
	        }function g(e, n, r) {
	          for (var i = 0, o = n.length; i < o; i++) {
	            t(e, n[i], r);
	          }return r;
	        }function m(e, t, n, r, i) {
	          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
	            (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
	          }return a;
	        }function y(e, t, n, i, o, a) {
	          return i && !i[M] && (i = y(i)), o && !o[M] && (o = y(o, a)), r(function (r, a, s, u) {
	            var l,
	                c,
	                f,
	                p = [],
	                d = [],
	                h = a.length,
	                y = r || g(t || "*", s.nodeType ? [s] : s, []),
	                v = !e || !r && t ? y : m(y, p, e, s, u),
	                x = n ? o || (r ? e : h || i) ? [] : a : v;if (n && n(v, x, s, u), i) for (l = m(x, d), i(l, [], s, u), c = l.length; c--;) {
	              (f = l[c]) && (x[d[c]] = !(v[d[c]] = f));
	            }if (r) {
	              if (o || e) {
	                if (o) {
	                  for (l = [], c = x.length; c--;) {
	                    (f = x[c]) && l.push(v[c] = f);
	                  }o(null, x = [], l, u);
	                }for (c = x.length; c--;) {
	                  (f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f));
	                }
	              }
	            } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Z.apply(a, x);
	          });
	        }function v(e) {
	          for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = d(function (e) {
	            return e === t;
	          }, a, !0), l = d(function (e) {
	            return ee(t, e) > -1;
	          }, a, !0), c = [function (e, n, r) {
	            var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));return t = null, i;
	          }]; s < i; s++) {
	            if (n = T.relative[e[s].type]) c = [d(h(c), n)];else {
	              if (n = T.filter[e[s].type].apply(null, e[s].matches), n[M]) {
	                for (r = ++s; r < i && !T.relative[e[r].type]; r++) {}return y(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ue, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && p(e));
	              }c.push(n);
	            }
	          }return h(c);
	        }function x(e, n) {
	          var i = n.length > 0,
	              o = e.length > 0,
	              a = function a(r, _a, s, u, l) {
	            var c,
	                f,
	                p,
	                d = 0,
	                h = "0",
	                g = r && [],
	                y = [],
	                v = j,
	                x = r || o && T.find.TAG("*", l),
	                b = W += null == v ? 1 : Math.random() || .1,
	                w = x.length;for (l && (j = _a !== L && _a); h !== w && null != (c = x[h]); h++) {
	              if (o && c) {
	                for (f = 0; p = e[f++];) {
	                  if (p(c, _a, s)) {
	                    u.push(c);break;
	                  }
	                }l && (W = b);
	              }i && ((c = !p && c) && d--, r && g.push(c));
	            }if (d += h, i && h !== d) {
	              for (f = 0; p = n[f++];) {
	                p(g, y, _a, s);
	              }if (r) {
	                if (d > 0) for (; h--;) {
	                  g[h] || y[h] || (y[h] = Q.call(u));
	                }y = m(y);
	              }Z.apply(u, y), l && !r && y.length > 0 && d + n.length > 1 && t.uniqueSort(u);
	            }return l && (W = b, j = v), g;
	          };return i ? r(a) : a;
	        }var b,
	            w,
	            T,
	            C,
	            S,
	            k,
	            N,
	            E,
	            j,
	            A,
	            D,
	            P,
	            L,
	            H,
	            q,
	            F,
	            O,
	            R,
	            V,
	            M = "sizzle" + 1 * new Date(),
	            $ = e.document,
	            W = 0,
	            I = 0,
	            B = n(),
	            z = n(),
	            X = n(),
	            _ = function _(e, t) {
	          return e === t && (D = !0), 0;
	        },
	            U = 1 << 31,
	            Y = {}.hasOwnProperty,
	            G = [],
	            Q = G.pop,
	            J = G.push,
	            Z = G.push,
	            K = G.slice,
	            ee = function ee(e, t) {
	          for (var n = 0, r = e.length; n < r; n++) {
	            if (e[n] === t) return n;
	          }return -1;
	        },
	            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	            ne = "[\\x20\\t\\r\\n\\f]",
	            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	            ie = re.replace("w", "w#"),
	            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
	            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
	            se = new RegExp(ne + "+", "g"),
	            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
	            le = new RegExp("^" + ne + "*," + ne + "*"),
	            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
	            fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
	            pe = new RegExp(ae),
	            de = new RegExp("^" + ie + "$"),
	            he = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
	            ge = /^(?:input|select|textarea|button)$/i,
	            me = /^h\d$/i,
	            ye = /^[^{]+\{\s*\[native \w/,
	            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	            xe = /[+~]/,
	            be = /'|\\/g,
	            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
	            Te = function Te(e, t, n) {
	          var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
	        },
	            Ce = function Ce() {
	          P();
	        };try {
	          Z.apply(G = K.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType;
	        } catch (Se) {
	          Z = { apply: G.length ? function (e, t) {
	              J.apply(e, K.call(t));
	            } : function (e, t) {
	              for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
	            } };
	        }w = t.support = {}, S = t.isXML = function (e) {
	          var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
	        }, P = t.setDocument = function (e) {
	          var t,
	              n,
	              r = e ? e.ownerDocument || e : $;return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), q = !S(r), w.attributes = i(function (e) {
	            return e.className = "i", !e.getAttribute("className");
	          }), w.getElementsByTagName = i(function (e) {
	            return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
	          }), w.getElementsByClassName = ye.test(r.getElementsByClassName), w.getById = i(function (e) {
	            return H.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length;
	          }), w.getById ? (T.find.ID = function (e, t) {
	            if ("undefined" != typeof t.getElementById && q) {
	              var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
	            }
	          }, T.filter.ID = function (e) {
	            var t = e.replace(we, Te);return function (e) {
	              return e.getAttribute("id") === t;
	            };
	          }) : (delete T.find.ID, T.filter.ID = function (e) {
	            var t = e.replace(we, Te);return function (e) {
	              var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
	            };
	          }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
	            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
	          } : function (e, t) {
	            var n,
	                r = [],
	                i = 0,
	                o = t.getElementsByTagName(e);if ("*" === e) {
	              for (; n = o[i++];) {
	                1 === n.nodeType && r.push(n);
	              }return r;
	            }return o;
	          }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
	            if (q) return t.getElementsByClassName(e);
	          }, O = [], F = [], (w.qsa = ye.test(r.querySelectorAll)) && (i(function (e) {
	            H.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]");
	          }), i(function (e) {
	            var t = r.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:");
	          })), (w.matchesSelector = ye.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
	            w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), O.push("!=", ae);
	          }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = ye.test(H.compareDocumentPosition), V = t || ye.test(H.contains) ? function (e, t) {
	            var n = 9 === e.nodeType ? e.documentElement : e,
	                r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
	          } : function (e, t) {
	            if (t) for (; t = t.parentNode;) {
	              if (t === e) return !0;
	            }return !1;
	          }, _ = t ? function (e, t) {
	            if (e === t) return D = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && V($, e) ? -1 : t === r || t.ownerDocument === $ && V($, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1);
	          } : function (e, t) {
	            if (e === t) return D = !0, 0;var n,
	                i = 0,
	                o = e.parentNode,
	                s = t.parentNode,
	                u = [e],
	                l = [t];if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;if (o === s) return a(e, t);for (n = e; n = n.parentNode;) {
	              u.unshift(n);
	            }for (n = t; n = n.parentNode;) {
	              l.unshift(n);
	            }for (; u[i] === l[i];) {
	              i++;
	            }return i ? a(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0;
	          }, r) : L;
	        }, t.matches = function (e, n) {
	          return t(e, null, null, n);
	        }, t.matchesSelector = function (e, n) {
	          if ((e.ownerDocument || e) !== L && P(e), n = n.replace(fe, "='$1']"), w.matchesSelector && q && (!O || !O.test(n)) && (!F || !F.test(n))) try {
	            var r = R.call(e, n);if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
	          } catch (i) {}return t(n, L, null, [e]).length > 0;
	        }, t.contains = function (e, t) {
	          return (e.ownerDocument || e) !== L && P(e), V(e, t);
	        }, t.attr = function (e, t) {
	          (e.ownerDocument || e) !== L && P(e);var n = T.attrHandle[t.toLowerCase()],
	              r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;return void 0 !== r ? r : w.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
	        }, t.error = function (e) {
	          throw new Error("Syntax error, unrecognized expression: " + e);
	        }, t.uniqueSort = function (e) {
	          var t,
	              n = [],
	              r = 0,
	              i = 0;if (D = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(_), D) {
	            for (; t = e[i++];) {
	              t === e[i] && (r = n.push(i));
	            }for (; r--;) {
	              e.splice(n[r], 1);
	            }
	          }return A = null, e;
	        }, C = t.getText = function (e) {
	          var t,
	              n = "",
	              r = 0,
	              i = e.nodeType;if (i) {
	            if (1 === i || 9 === i || 11 === i) {
	              if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
	                n += C(e);
	              }
	            } else if (3 === i || 4 === i) return e.nodeValue;
	          } else for (; t = e[r++];) {
	            n += C(t);
	          }return n;
	        }, T = t.selectors = { cacheLength: 50, createPseudo: r, match: he, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
	              return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
	            }, CHILD: function CHILD(e) {
	              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
	            }, PSEUDO: function PSEUDO(e) {
	              var t,
	                  n = !e[6] && e[2];return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
	            } }, filter: { TAG: function TAG(e) {
	              var t = e.replace(we, Te).toLowerCase();return "*" === e ? function () {
	                return !0;
	              } : function (e) {
	                return e.nodeName && e.nodeName.toLowerCase() === t;
	              };
	            }, CLASS: function CLASS(e) {
	              var t = B[e + " "];return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function (e) {
	                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
	              });
	            }, ATTR: function ATTR(e, n, r) {
	              return function (i) {
	                var o = t.attr(i, e);return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
	              };
	            }, CHILD: function CHILD(e, t, n, r, i) {
	              var o = "nth" !== e.slice(0, 3),
	                  a = "last" !== e.slice(-4),
	                  s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
	                return !!e.parentNode;
	              } : function (t, n, u) {
	                var l,
	                    c,
	                    f,
	                    p,
	                    d,
	                    h,
	                    g = o !== a ? "nextSibling" : "previousSibling",
	                    m = t.parentNode,
	                    y = s && t.nodeName.toLowerCase(),
	                    v = !u && !s;if (m) {
	                  if (o) {
	                    for (; g;) {
	                      for (f = t; f = f[g];) {
	                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
	                      }h = g = "only" === e && !h && "nextSibling";
	                    }return !0;
	                  }if (h = [a ? m.firstChild : m.lastChild], a && v) {
	                    for (c = m[M] || (m[M] = {}), l = c[e] || [], d = l[0] === W && l[1], p = l[0] === W && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) {
	                      if (1 === f.nodeType && ++p && f === t) {
	                        c[e] = [W, d, p];break;
	                      }
	                    }
	                  } else if (v && (l = (t[M] || (t[M] = {}))[e]) && l[0] === W) p = l[1];else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[M] || (f[M] = {}))[e] = [W, p]), f !== t));) {}return p -= i, p === r || p % r === 0 && p / r >= 0;
	                }
	              };
	            }, PSEUDO: function PSEUDO(e, n) {
	              var i,
	                  o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
	                for (var r, i = o(e, n), a = i.length; a--;) {
	                  r = ee(e, i[a]), e[r] = !(t[r] = i[a]);
	                }
	              }) : function (e) {
	                return o(e, 0, i);
	              }) : o;
	            } }, pseudos: { not: r(function (e) {
	              var t = [],
	                  n = [],
	                  i = N(e.replace(ue, "$1"));return i[M] ? r(function (e, t, n, r) {
	                for (var o, a = i(e, null, r, []), s = e.length; s--;) {
	                  (o = a[s]) && (e[s] = !(t[s] = o));
	                }
	              }) : function (e, r, o) {
	                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
	              };
	            }), has: r(function (e) {
	              return function (n) {
	                return t(e, n).length > 0;
	              };
	            }), contains: r(function (e) {
	              return e = e.replace(we, Te), function (t) {
	                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
	              };
	            }), lang: r(function (e) {
	              return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function (t) {
	                var n;do {
	                  if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
	                } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
	              };
	            }), target: function target(t) {
	              var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
	            }, root: function root(e) {
	              return e === H;
	            }, focus: function focus(e) {
	              return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
	            }, enabled: function enabled(e) {
	              return e.disabled === !1;
	            }, disabled: function disabled(e) {
	              return e.disabled === !0;
	            }, checked: function checked(e) {
	              var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
	            }, selected: function selected(e) {
	              return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
	            }, empty: function empty(e) {
	              for (e = e.firstChild; e; e = e.nextSibling) {
	                if (e.nodeType < 6) return !1;
	              }return !0;
	            }, parent: function parent(e) {
	              return !T.pseudos.empty(e);
	            }, header: function header(e) {
	              return me.test(e.nodeName);
	            }, input: function input(e) {
	              return ge.test(e.nodeName);
	            }, button: function button(e) {
	              var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
	            }, text: function text(e) {
	              var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
	            }, first: l(function () {
	              return [0];
	            }), last: l(function (e, t) {
	              return [t - 1];
	            }), eq: l(function (e, t, n) {
	              return [n < 0 ? n + t : n];
	            }), even: l(function (e, t) {
	              for (var n = 0; n < t; n += 2) {
	                e.push(n);
	              }return e;
	            }), odd: l(function (e, t) {
	              for (var n = 1; n < t; n += 2) {
	                e.push(n);
	              }return e;
	            }), lt: l(function (e, t, n) {
	              for (var r = n < 0 ? n + t : n; --r >= 0;) {
	                e.push(r);
	              }return e;
	            }), gt: l(function (e, t, n) {
	              for (var r = n < 0 ? n + t : n; ++r < t;) {
	                e.push(r);
	              }return e;
	            }) } }, T.pseudos.nth = T.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	          T.pseudos[b] = s(b);
	        }for (b in { submit: !0, reset: !0 }) {
	          T.pseudos[b] = u(b);
	        }return f.prototype = T.filters = T.pseudos, T.setFilters = new f(), k = t.tokenize = function (e, n) {
	          var r,
	              i,
	              o,
	              a,
	              s,
	              u,
	              l,
	              c = z[e + " "];if (c) return n ? 0 : c.slice(0);for (s = e, u = [], l = T.preFilter; s;) {
	            r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(ue, " ") }), s = s.slice(r.length));for (a in T.filter) {
	              !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
	            }if (!r) break;
	          }return n ? s.length : s ? t.error(e) : z(e, u).slice(0);
	        }, N = t.compile = function (e, t) {
	          var n,
	              r = [],
	              i = [],
	              o = X[e + " "];if (!o) {
	            for (t || (t = k(e)), n = t.length; n--;) {
	              o = v(t[n]), o[M] ? r.push(o) : i.push(o);
	            }o = X(e, x(i, r)), o.selector = e;
	          }return o;
	        }, E = t.select = function (e, t, n, r) {
	          var i,
	              o,
	              a,
	              s,
	              u,
	              l = "function" == typeof e && e,
	              f = !r && k(e = l.selector || e);if (n = n || [], 1 === f.length) {
	            if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && q && T.relative[o[1].type]) {
	              if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
	            }for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);) {
	              if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
	                if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;break;
	              }
	            }
	          }return (l || N(e, f))(r, t, !q, n, xe.test(e) && c(t.parentNode) || t), n;
	        }, w.sortStable = M.split("").sort(_).join("") === M, w.detectDuplicates = !!D, P(), w.sortDetached = i(function (e) {
	          return 1 & e.compareDocumentPosition(L.createElement("div"));
	        }), i(function (e) {
	          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
	        }) || o("type|href|height|width", function (e, t, n) {
	          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
	        }), w.attributes && i(function (e) {
	          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
	        }) || o("value", function (e, t, n) {
	          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
	        }), i(function (e) {
	          return null == e.getAttribute("disabled");
	        }) || o(te, function (e, t, n) {
	          var r;if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
	        }), t;
	      }(o);ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;var ce = ie.expr.match.needsContext,
	          fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	          pe = /^.[^:#\[\.,]*$/;ie.filter = function (e, t, n) {
	        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function (e) {
	          return 1 === e.nodeType;
	        }));
	      }, ie.fn.extend({ find: function find(e) {
	          var t,
	              n = this.length,
	              r = [],
	              i = this;if ("string" != typeof e) return this.pushStack(ie(e).filter(function () {
	            for (t = 0; t < n; t++) {
	              if (ie.contains(i[t], this)) return !0;
	            }
	          }));for (t = 0; t < n; t++) {
	            ie.find(e, i[t], r);
	          }return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r;
	        }, filter: function filter(e) {
	          return this.pushStack(u(this, e || [], !1));
	        }, not: function not(e) {
	          return this.pushStack(u(this, e || [], !0));
	        }, is: function is(e) {
	          return !!u(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length;
	        } });var de,
	          he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	          ge = ie.fn.init = function (e, t) {
	        var n, r;if (!e) return this;if ("string" == typeof e) {
	          if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || de).find(e) : this.constructor(t).find(e);if (n[1]) {
	            if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), fe.test(n[1]) && ie.isPlainObject(t)) for (n in t) {
	              ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
	            }return this;
	          }return r = ne.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = ne, this.selector = e, this;
	        }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof de.ready ? de.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this));
	      };ge.prototype = ie.fn, de = ie(ne);var me = /^(?:parents|prev(?:Until|All))/,
	          ye = { children: !0, contents: !0, next: !0, prev: !0 };ie.extend({ dir: function dir(e, t, n) {
	          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
	            if (1 === e.nodeType) {
	              if (i && ie(e).is(n)) break;r.push(e);
	            }
	          }return r;
	        }, sibling: function sibling(e, t) {
	          for (var n = []; e; e = e.nextSibling) {
	            1 === e.nodeType && e !== t && n.push(e);
	          }return n;
	        } }), ie.fn.extend({ has: function has(e) {
	          var t = ie(e, this),
	              n = t.length;return this.filter(function () {
	            for (var e = 0; e < n; e++) {
	              if (ie.contains(this, t[e])) return !0;
	            }
	          });
	        }, closest: function closest(e, t) {
	          for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; r < i; r++) {
	            for (n = this[r]; n && n !== t; n = n.parentNode) {
	              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
	                o.push(n);break;
	              }
	            }
	          }return this.pushStack(o.length > 1 ? ie.unique(o) : o);
	        }, index: function index(e) {
	          return e ? "string" == typeof e ? J.call(ie(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	        }, add: function add(e, t) {
	          return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))));
	        }, addBack: function addBack(e) {
	          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
	        } }), ie.each({ parent: function Xt(e) {
	          var Xt = e.parentNode;return Xt && 11 !== Xt.nodeType ? Xt : null;
	        }, parents: function parents(e) {
	          return ie.dir(e, "parentNode");
	        }, parentsUntil: function parentsUntil(e, t, n) {
	          return ie.dir(e, "parentNode", n);
	        }, next: function next(e) {
	          return l(e, "nextSibling");
	        }, prev: function prev(e) {
	          return l(e, "previousSibling");
	        }, nextAll: function nextAll(e) {
	          return ie.dir(e, "nextSibling");
	        }, prevAll: function prevAll(e) {
	          return ie.dir(e, "previousSibling");
	        }, nextUntil: function nextUntil(e, t, n) {
	          return ie.dir(e, "nextSibling", n);
	        }, prevUntil: function prevUntil(e, t, n) {
	          return ie.dir(e, "previousSibling", n);
	        }, siblings: function siblings(e) {
	          return ie.sibling((e.parentNode || {}).firstChild, e);
	        }, children: function children(e) {
	          return ie.sibling(e.firstChild);
	        }, contents: function contents(e) {
	          return e.contentDocument || ie.merge([], e.childNodes);
	        } }, function (e, t) {
	        ie.fn[e] = function (n, r) {
	          var i = ie.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || ie.unique(i), me.test(e) && i.reverse()), this.pushStack(i);
	        };
	      });var ve = /\S+/g,
	          xe = {};ie.Callbacks = function (e) {
	        e = "string" == typeof e ? xe[e] || c(e) : ie.extend({}, e);var t,
	            n,
	            r,
	            i,
	            o,
	            a,
	            s = [],
	            u = !e.once && [],
	            l = function p(l) {
	          for (t = e.memory && l, n = !0, a = i || 0, i = 0, o = s.length, r = !0; s && a < o; a++) {
	            if (s[a].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
	              t = !1;break;
	            }
	          }r = !1, s && (u ? u.length && p(u.shift()) : t ? s = [] : f.disable());
	        },
	            f = { add: function add() {
	            if (s) {
	              var n = s.length;!function a(t) {
	                ie.each(t, function (t, n) {
	                  var r = ie.type(n);"function" === r ? e.unique && f.has(n) || s.push(n) : n && n.length && "string" !== r && a(n);
	                });
	              }(arguments), r ? o = s.length : t && (i = n, l(t));
	            }return this;
	          }, remove: function remove() {
	            return s && ie.each(arguments, function (e, t) {
	              for (var n; (n = ie.inArray(t, s, n)) > -1;) {
	                s.splice(n, 1), r && (n <= o && o--, n <= a && a--);
	              }
	            }), this;
	          }, has: function has(e) {
	            return e ? ie.inArray(e, s) > -1 : !(!s || !s.length);
	          }, empty: function empty() {
	            return s = [], o = 0, this;
	          }, disable: function disable() {
	            return s = u = t = void 0, this;
	          }, disabled: function disabled() {
	            return !s;
	          }, lock: function lock() {
	            return u = void 0, t || f.disable(), this;
	          }, locked: function locked() {
	            return !u;
	          }, fireWith: function fireWith(e, t) {
	            return !s || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)), this;
	          }, fire: function fire() {
	            return f.fireWith(this, arguments), this;
	          }, fired: function fired() {
	            return !!n;
	          } };return f;
	      }, ie.extend({ Deferred: function Deferred(e) {
	          var t = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]],
	              n = "pending",
	              r = { state: function state() {
	              return n;
	            }, always: function always() {
	              return i.done(arguments).fail(arguments), this;
	            }, then: function then() {
	              var e = arguments;return ie.Deferred(function (n) {
	                ie.each(t, function (t, o) {
	                  var a = ie.isFunction(e[t]) && e[t];i[o[1]](function () {
	                    var e = a && a.apply(this, arguments);e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
	                  });
	                }), e = null;
	              }).promise();
	            }, promise: function promise(e) {
	              return null != e ? ie.extend(e, r) : r;
	            } },
	              i = {};return r.pipe = r.then, ie.each(t, function (e, o) {
	            var a = o[2],
	                s = o[3];r[o[1]] = a.add, s && a.add(function () {
	              n = s;
	            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
	              return i[o[0] + "With"](this === i ? r : this, arguments), this;
	            }, i[o[0] + "With"] = a.fireWith;
	          }), r.promise(i), e && e.call(i, i), i;
	        }, when: function when(e) {
	          var t,
	              n,
	              r,
	              i = 0,
	              o = Y.call(arguments),
	              a = o.length,
	              s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
	              u = 1 === s ? e : ie.Deferred(),
	              l = function l(e, n, r) {
	            return function (i) {
	              n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
	            };
	          };if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) {
	            o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
	          }return s || u.resolveWith(r, o), u.promise();
	        } });var be;ie.fn.ready = function (e) {
	        return ie.ready.promise().done(e), this;
	      }, ie.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
	          e ? ie.readyWait++ : ie.ready(!0);
	        }, ready: function ready(e) {
	          (e === !0 ? --ie.readyWait : ie.isReady) || (ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (be.resolveWith(ne, [ie]), ie.fn.triggerHandler && (ie(ne).triggerHandler("ready"), ie(ne).off("ready"))));
	        } }), ie.ready.promise = function (e) {
	        return be || (be = ie.Deferred(), "complete" === ne.readyState ? setTimeout(ie.ready) : (ne.addEventListener("DOMContentLoaded", f, !1), o.addEventListener("load", f, !1))), be.promise(e);
	      }, ie.ready.promise();var we = ie.access = function (e, t, n, r, i, o, a) {
	        var s = 0,
	            u = e.length,
	            l = null == n;if ("object" === ie.type(n)) {
	          i = !0;for (s in n) {
	            ie.access(e, t, s, n[s], !0, o, a);
	          }
	        } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t2, n) {
	          return l.call(ie(e), n);
	        })), t)) for (; s < u; s++) {
	          t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
	        }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
	      };ie.acceptData = function (e) {
	        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
	      }, p.uid = 1, p.accepts = ie.acceptData, p.prototype = { key: function key(e) {
	          if (!p.accepts(e)) return 0;var t = {},
	              n = e[this.expando];if (!n) {
	            n = p.uid++;try {
	              t[this.expando] = { value: n }, Object.defineProperties(e, t);
	            } catch (r) {
	              t[this.expando] = n, ie.extend(e, t);
	            }
	          }return this.cache[n] || (this.cache[n] = {}), n;
	        }, set: function set(e, t, n) {
	          var r,
	              i = this.key(e),
	              o = this.cache[i];if ("string" == typeof t) o[t] = n;else if (ie.isEmptyObject(o)) ie.extend(this.cache[i], t);else for (r in t) {
	            o[r] = t[r];
	          }return o;
	        }, get: function get(e, t) {
	          var n = this.cache[this.key(e)];return void 0 === t ? n : n[t];
	        }, access: function access(e, t, n) {
	          var r;return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ie.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
	        }, remove: function remove(e, t) {
	          var n,
	              r,
	              i,
	              o = this.key(e),
	              a = this.cache[o];if (void 0 === t) this.cache[o] = {};else {
	            ie.isArray(t) ? r = t.concat(t.map(ie.camelCase)) : (i = ie.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(ve) || [])), n = r.length;for (; n--;) {
	              delete a[r[n]];
	            }
	          }
	        }, hasData: function hasData(e) {
	          return !ie.isEmptyObject(this.cache[e[this.expando]] || {});
	        }, discard: function discard(e) {
	          e[this.expando] && delete this.cache[e[this.expando]];
	        } };var Te = new p(),
	          Ce = new p(),
	          Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	          ke = /([A-Z])/g;ie.extend({ hasData: function hasData(e) {
	          return Ce.hasData(e) || Te.hasData(e);
	        }, data: function data(e, t, n) {
	          return Ce.access(e, t, n);
	        }, removeData: function removeData(e, t) {
	          Ce.remove(e, t);
	        }, _data: function _data(e, t, n) {
	          return Te.access(e, t, n);
	        }, _removeData: function _removeData(e, t) {
	          Te.remove(e, t);
	        } }), ie.fn.extend({ data: function _t(e, t) {
	          var r,
	              i,
	              _t,
	              o = this[0],
	              a = o && o.attributes;if (void 0 === e) {
	            if (this.length && (_t = Ce.get(o), 1 === o.nodeType && !Te.get(o, "hasDataAttrs"))) {
	              for (r = a.length; r--;) {
	                a[r] && (i = a[r].name, 0 === i.indexOf("data-") && (i = ie.camelCase(i.slice(5)), d(o, i, _t[i])));
	              }Te.set(o, "hasDataAttrs", !0);
	            }return _t;
	          }return "object" === ("undefined" == typeof e ? "undefined" : n(e)) ? this.each(function () {
	            Ce.set(this, e);
	          }) : we(this, function (t) {
	            var n,
	                r = ie.camelCase(e);if (o && void 0 === t) {
	              if (n = Ce.get(o, e), void 0 !== n) return n;if (n = Ce.get(o, r), void 0 !== n) return n;if (n = d(o, r, void 0), void 0 !== n) return n;
	            } else this.each(function () {
	              var n = Ce.get(this, r);Ce.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && Ce.set(this, e, t);
	            });
	          }, null, t, arguments.length > 1, null, !0);
	        }, removeData: function removeData(e) {
	          return this.each(function () {
	            Ce.remove(this, e);
	          });
	        } }), ie.extend({ queue: function Ut(e, t, n) {
	          var Ut;if (e) return t = (t || "fx") + "queue", Ut = Te.get(e, t), n && (!Ut || ie.isArray(n) ? Ut = Te.access(e, t, ie.makeArray(n)) : Ut.push(n)), Ut || [];
	        }, dequeue: function dequeue(e, t) {
	          t = t || "fx";var n = ie.queue(e, t),
	              r = n.length,
	              i = n.shift(),
	              o = ie._queueHooks(e, t),
	              a = function a() {
	            ie.dequeue(e, t);
	          };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
	        }, _queueHooks: function _queueHooks(e, t) {
	          var n = t + "queueHooks";return Te.get(e, n) || Te.access(e, n, { empty: ie.Callbacks("once memory").add(function () {
	              Te.remove(e, [t + "queue", n]);
	            }) });
	        } }), ie.fn.extend({ queue: function queue(e, t) {
	          var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
	            var n = ie.queue(this, e, t);ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e);
	          });
	        }, dequeue: function dequeue(e) {
	          return this.each(function () {
	            ie.dequeue(this, e);
	          });
	        }, clearQueue: function clearQueue(e) {
	          return this.queue(e || "fx", []);
	        }, promise: function promise(e, t) {
	          var n,
	              r = 1,
	              i = ie.Deferred(),
	              o = this,
	              a = this.length,
	              s = function s() {
	            --r || i.resolveWith(o, [o]);
	          };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
	            n = Te.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
	          }return s(), i.promise(t);
	        } });var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	          Ee = ["Top", "Right", "Bottom", "Left"],
	          je = function je(e, t) {
	        return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e);
	      },
	          Ae = /^(?:checkbox|radio)$/i;!function () {
	        var e = ne.createDocumentFragment(),
	            t = e.appendChild(ne.createElement("div")),
	            n = ne.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), te.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", te.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
	      }();var De = "undefined";te.focusinBubbles = "onfocusin" in o;var Pe = /^key/,
	          Le = /^(?:mouse|pointer|contextmenu)|click/,
	          He = /^(?:focusinfocus|focusoutblur)$/,
	          qe = /^([^.]*)(?:\.(.+)|)$/;ie.event = { global: {}, add: function add(e, t, r, i, o) {
	          var a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p,
	              d,
	              h,
	              g,
	              m,
	              y = Te.get(e);if (y) for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = ie.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function (t) {
	            return ("undefined" == typeof ie ? "undefined" : n(ie)) !== De && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : void 0;
	          }), t = (t || "").match(ve) || [""], c = t.length; c--;) {
	            u = qe.exec(t[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), h && (p = ie.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = ie.event.special[h] || {}, f = ie.extend({ type: h, origType: m, data: i, handler: r, guid: r.guid, selector: o, needsContext: o && ie.expr.match.needsContext.test(o), namespace: g.join(".") }, a), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ie.event.global[h] = !0);
	          }
	        }, remove: function remove(e, t, n, r, i) {
	          var o,
	              a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p,
	              d,
	              h,
	              g,
	              m = Te.hasData(e) && Te.get(e);if (m && (u = m.events)) {
	            for (t = (t || "").match(ve) || [""], l = t.length; l--;) {
	              if (s = qe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
	                for (f = ie.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
	                  c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
	                }a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ie.removeEvent(e, d, m.handle), delete u[d]);
	              } else for (d in u) {
	                ie.event.remove(e, d + t[l], n, r, !0);
	              }
	            }ie.isEmptyObject(u) && (delete m.handle, Te.remove(e, "events"));
	          }
	        }, trigger: function trigger(e, t, r, i) {
	          var a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p,
	              d = [r || ne],
	              h = ee.call(e, "type") ? e.type : e,
	              g = ee.call(e, "namespace") ? e.namespace.split(".") : [];if (s = u = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !He.test(h + ie.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[ie.expando] ? e : new ie.Event(h, "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e), e.isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ie.makeArray(t, [e]), p = ie.event.special[h] || {}, i || !p.trigger || p.trigger.apply(r, t) !== !1)) {
	            if (!i && !p.noBubble && !ie.isWindow(r)) {
	              for (l = p.delegateType || h, He.test(l + h) || (s = s.parentNode); s; s = s.parentNode) {
	                d.push(s), u = s;
	              }u === (r.ownerDocument || ne) && d.push(u.defaultView || u.parentWindow || o);
	            }for (a = 0; (s = d[a++]) && !e.isPropagationStopped();) {
	              e.type = a > 1 ? l : p.bindType || h, f = (Te.get(s, "events") || {})[e.type] && Te.get(s, "handle"), f && f.apply(s, t), f = c && s[c], f && f.apply && ie.acceptData(s) && (e.result = f.apply(s, t), e.result === !1 && e.preventDefault());
	            }return e.type = h, i || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), t) !== !1 || !ie.acceptData(r) || c && ie.isFunction(r[h]) && !ie.isWindow(r) && (u = r[c], u && (r[c] = null), ie.event.triggered = h, r[h](), ie.event.triggered = void 0, u && (r[c] = u)), e.result;
	          }
	        }, dispatch: function dispatch(e) {
	          e = ie.event.fix(e);var t,
	              n,
	              r,
	              i,
	              o,
	              a = [],
	              s = Y.call(arguments),
	              u = (Te.get(this, "events") || {})[e.type] || [],
	              l = ie.event.special[e.type] || {};if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
	            for (a = ie.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();) {
	              for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) {
	                e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((ie.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
	              }
	            }return l.postDispatch && l.postDispatch.call(this, e), e.result;
	          }
	        }, handlers: function handlers(e, t) {
	          var n,
	              r,
	              i,
	              o,
	              a = [],
	              s = t.delegateCount,
	              u = e.target;if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) {
	            if (u.disabled !== !0 || "click" !== e.type) {
	              for (r = [], n = 0; n < s; n++) {
	                o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ie(i, this).index(u) >= 0 : ie.find(i, this, null, [u]).length), r[i] && r.push(o);
	              }r.length && a.push({ elem: u, handlers: r });
	            }
	          }return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
	        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
	            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
	          } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
	            var n,
	                r,
	                i,
	                o = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ne, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
	          } }, fix: function fix(e) {
	          if (e[ie.expando]) return e;var t,
	              n,
	              r,
	              i = e.type,
	              o = e,
	              a = this.fixHooks[i];for (a || (this.fixHooks[i] = a = Le.test(i) ? this.mouseHooks : Pe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) {
	            n = r[t], e[n] = o[n];
	          }return e.target || (e.target = ne), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
	        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	              if (this !== m() && this.focus) return this.focus(), !1;
	            }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	              if (this === m() && this.blur) return this.blur(), !1;
	            }, delegateType: "focusout" }, click: { trigger: function trigger() {
	              if ("checkbox" === this.type && this.click && ie.nodeName(this, "input")) return this.click(), !1;
	            }, _default: function _default(e) {
	              return ie.nodeName(e.target, "a");
	            } }, beforeunload: { postDispatch: function postDispatch(e) {
	              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
	            } } }, simulate: function simulate(e, t, n, r) {
	          var i = ie.extend(new ie.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
	        } }, ie.removeEvent = function (e, t, n) {
	        e.removeEventListener && e.removeEventListener(t, n, !1);
	      }, ie.Event = function (e, t) {
	        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : g) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void (this[ie.expando] = !0)) : new ie.Event(e, t);
	      }, ie.Event.prototype = { isDefaultPrevented: g, isPropagationStopped: g, isImmediatePropagationStopped: g, preventDefault: function preventDefault() {
	          var e = this.originalEvent;this.isDefaultPrevented = h, e && e.preventDefault && e.preventDefault();
	        }, stopPropagation: function stopPropagation() {
	          var e = this.originalEvent;this.isPropagationStopped = h, e && e.stopPropagation && e.stopPropagation();
	        }, stopImmediatePropagation: function stopImmediatePropagation() {
	          var e = this.originalEvent;this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
	        } }, ie.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
	        ie.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
	            var n,
	                r = this,
	                i = e.relatedTarget,
	                o = e.handleObj;return i && (i === r || ie.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
	          } };
	      }), te.focusinBubbles || ie.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
	        var n = function n(e) {
	          ie.event.simulate(t, e.target, ie.event.fix(e), !0);
	        };ie.event.special[t] = { setup: function setup() {
	            var r = this.ownerDocument || this,
	                i = Te.access(r, t);i || r.addEventListener(e, n, !0), Te.access(r, t, (i || 0) + 1);
	          }, teardown: function teardown() {
	            var r = this.ownerDocument || this,
	                i = Te.access(r, t) - 1;i ? Te.access(r, t, i) : (r.removeEventListener(e, n, !0), Te.remove(r, t));
	          } };
	      }), ie.fn.extend({ on: function on(e, t, r, i, o) {
	          var a, s;if ("object" === ("undefined" == typeof e ? "undefined" : n(e))) {
	            "string" != typeof t && (r = r || t, t = void 0);for (s in e) {
	              this.on(s, t, r, e[s], o);
	            }return this;
	          }if (null == r && null == i ? (i = t, r = t = void 0) : null == i && ("string" == typeof t ? (i = r, r = void 0) : (i = r, r = t, t = void 0)), i === !1) i = g;else if (!i) return this;return 1 === o && (a = i, i = function i(e) {
	            return ie().off(e), a.apply(this, arguments);
	          }, i.guid = a.guid || (a.guid = ie.guid++)), this.each(function () {
	            ie.event.add(this, e, i, r, t);
	          });
	        }, one: function one(e, t, n, r) {
	          return this.on(e, t, n, r, 1);
	        }, off: function off(e, t, r) {
	          var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ie(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" === ("undefined" == typeof e ? "undefined" : n(e))) {
	            for (o in e) {
	              this.off(o, t, e[o]);
	            }return this;
	          }return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = g), this.each(function () {
	            ie.event.remove(this, e, r, t);
	          });
	        }, trigger: function trigger(e, t) {
	          return this.each(function () {
	            ie.event.trigger(e, t, this);
	          });
	        }, triggerHandler: function triggerHandler(e, t) {
	          var n = this[0];if (n) return ie.event.trigger(e, t, n, !0);
	        } });var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	          Oe = /<([\w:]+)/,
	          Re = /<|&#?\w+;/,
	          Ve = /<(?:script|style|link)/i,
	          Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
	          $e = /^$|\/(?:java|ecma)script/i,
	          We = /^true\/(.*)/,
	          Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	          Be = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, ie.extend({ clone: function Yt(e, t, n) {
	          var r,
	              i,
	              o,
	              a,
	              Yt = e.cloneNode(!0),
	              s = ie.contains(e.ownerDocument, e);if (!(te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e))) for (a = T(Yt), o = T(e), r = 0, i = o.length; r < i; r++) {
	            C(o[r], a[r]);
	          }if (t) if (n) for (o = o || T(e), a = a || T(Yt), r = 0, i = o.length; r < i; r++) {
	            w(o[r], a[r]);
	          } else w(e, Yt);return a = T(Yt, "script"), a.length > 0 && b(a, !s && T(e, "script")), Yt;
	        }, buildFragment: function buildFragment(e, t, n, r) {
	          for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++) {
	            if (i = e[p], i || 0 === i) if ("object" === ie.type(i)) ie.merge(f, i.nodeType ? [i] : i);else if (Re.test(i)) {
	              for (o = o || c.appendChild(t.createElement("div")), a = (Oe.exec(i) || ["", ""])[1].toLowerCase(), s = Be[a] || Be._default, o.innerHTML = s[1] + i.replace(Fe, "<$1></$2>") + s[2], l = s[0]; l--;) {
	                o = o.lastChild;
	              }ie.merge(f, o.childNodes), o = c.firstChild, o.textContent = "";
	            } else f.push(t.createTextNode(i));
	          }for (c.textContent = "", p = 0; i = f[p++];) {
	            if ((!r || ie.inArray(i, r) === -1) && (u = ie.contains(i.ownerDocument, i), o = T(c.appendChild(i), "script"), u && b(o), n)) for (l = 0; i = o[l++];) {
	              $e.test(i.type || "") && n.push(i);
	            }
	          }return c;
	        }, cleanData: function cleanData(e) {
	          for (var t, n, r, i, o = ie.event.special, a = 0; void 0 !== (n = e[a]); a++) {
	            if (ie.acceptData(n) && (i = n[Te.expando], i && (t = Te.cache[i]))) {
	              if (t.events) for (r in t.events) {
	                o[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, t.handle);
	              }Te.cache[i] && delete Te.cache[i];
	            }delete Ce.cache[n[Ce.expando]];
	          }
	        } }), ie.fn.extend({ text: function text(e) {
	          return we(this, function (e) {
	            return void 0 === e ? ie.text(this) : this.empty().each(function () {
	              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
	            });
	          }, null, e, arguments.length);
	        }, append: function append() {
	          return this.domManip(arguments, function (e) {
	            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	              var t = y(this, e);t.appendChild(e);
	            }
	          });
	        }, prepend: function prepend() {
	          return this.domManip(arguments, function (e) {
	            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	              var t = y(this, e);t.insertBefore(e, t.firstChild);
	            }
	          });
	        }, before: function before() {
	          return this.domManip(arguments, function (e) {
	            this.parentNode && this.parentNode.insertBefore(e, this);
	          });
	        }, after: function after() {
	          return this.domManip(arguments, function (e) {
	            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
	          });
	        }, remove: function remove(e, t) {
	          for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) {
	            t || 1 !== n.nodeType || ie.cleanData(T(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && b(T(n, "script")), n.parentNode.removeChild(n));
	          }return this;
	        }, empty: function empty() {
	          for (var e, t = 0; null != (e = this[t]); t++) {
	            1 === e.nodeType && (ie.cleanData(T(e, !1)), e.textContent = "");
	          }return this;
	        }, clone: function clone(e, t) {
	          return e = null != e && e, t = null == t ? e : t, this.map(function () {
	            return ie.clone(this, e, t);
	          });
	        }, html: function html(e) {
	          return we(this, function (e) {
	            var t = this[0] || {},
	                n = 0,
	                r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ve.test(e) && !Be[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
	              e = e.replace(Fe, "<$1></$2>");try {
	                for (; n < r; n++) {
	                  t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(T(t, !1)), t.innerHTML = e);
	                }t = 0;
	              } catch (i) {}
	            }t && this.empty().append(e);
	          }, null, e, arguments.length);
	        }, replaceWith: function replaceWith() {
	          var e = arguments[0];return this.domManip(arguments, function (t) {
	            e = this.parentNode, ie.cleanData(T(this)), e && e.replaceChild(t, this);
	          }), e && (e.length || e.nodeType) ? this : this.remove();
	        }, detach: function detach(e) {
	          return this.remove(e, !0);
	        }, domManip: function domManip(e, t) {
	          e = G.apply([], e);var n,
	              r,
	              i,
	              o,
	              a,
	              s,
	              u = 0,
	              l = this.length,
	              c = this,
	              f = l - 1,
	              p = e[0],
	              d = ie.isFunction(p);if (d || l > 1 && "string" == typeof p && !te.checkClone && Me.test(p)) return this.each(function (n) {
	            var r = c.eq(n);d && (e[0] = p.call(this, n, r.html())), r.domManip(e, t);
	          });if (l && (n = ie.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
	            for (i = ie.map(T(n, "script"), v), o = i.length; u < l; u++) {
	              a = n, u !== f && (a = ie.clone(a, !0, !0), o && ie.merge(i, T(a, "script"))), t.call(this[u], a, u);
	            }if (o) for (s = i[i.length - 1].ownerDocument, ie.map(i, x), u = 0; u < o; u++) {
	              a = i[u], $e.test(a.type || "") && !Te.access(a, "globalEval") && ie.contains(s, a) && (a.src ? ie._evalUrl && ie._evalUrl(a.src) : ie.globalEval(a.textContent.replace(Ie, "")));
	            }
	          }return this;
	        } }), ie.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
	        ie.fn[e] = function (e) {
	          for (var n, r = [], i = ie(e), o = i.length - 1, a = 0; a <= o; a++) {
	            n = a === o ? this : this.clone(!0), ie(i[a])[t](n), Q.apply(r, n.get());
	          }return this.pushStack(r);
	        };
	      });var ze,
	          Xe = {},
	          _e = /^margin/,
	          Ue = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
	          Ye = function Ye(e) {
	        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : o.getComputedStyle(e, null);
	      };!function () {
	        function e() {
	          a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(i);var e = o.getComputedStyle(a, null);t = "1%" !== e.top, n = "4px" === e.width, r.removeChild(i);
	        }var t,
	            n,
	            r = ne.documentElement,
	            i = ne.createElement("div"),
	            a = ne.createElement("div");a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", te.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), o.getComputedStyle && ie.extend(te, { pixelPosition: function pixelPosition() {
	            return e(), t;
	          }, boxSizingReliable: function boxSizingReliable() {
	            return null == n && e(), n;
	          }, reliableMarginRight: function reliableMarginRight() {
	            var e,
	                t = a.appendChild(ne.createElement("div"));return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", r.appendChild(i), e = !parseFloat(o.getComputedStyle(t, null).marginRight), r.removeChild(i), a.removeChild(t), e;
	          } }));
	      }(), ie.swap = function (e, t, n, r) {
	        var i,
	            o,
	            a = {};for (o in t) {
	          a[o] = e.style[o], e.style[o] = t[o];
	        }i = n.apply(e, r || []);for (o in t) {
	          e.style[o] = a[o];
	        }return i;
	      };var Ge = /^(none|table(?!-c[ea]).+)/,
	          Qe = new RegExp("^(" + Ne + ")(.*)$", "i"),
	          Je = new RegExp("^([+-])=(" + Ne + ")", "i"),
	          Ze = { position: "absolute", visibility: "hidden", display: "block" },
	          Ke = { letterSpacing: "0", fontWeight: "400" },
	          et = ["Webkit", "O", "Moz", "ms"];ie.extend({ cssHooks: { opacity: { get: function get(e, t) {
	              if (t) {
	                var n = N(e, "opacity");return "" === n ? "1" : n;
	              }
	            } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function Gt(e, t, r, i) {
	          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
	            var o,
	                a,
	                s,
	                u = ie.camelCase(t),
	                Gt = e.style;return t = ie.cssProps[u] || (ie.cssProps[u] = j(Gt, u)), s = ie.cssHooks[t] || ie.cssHooks[u], void 0 === r ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : Gt[t] : (a = "undefined" == typeof r ? "undefined" : n(r), "string" === a && (o = Je.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ie.css(e, t)), a = "number"), null != r && r === r && ("number" !== a || ie.cssNumber[u] || (r += "px"), te.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (Gt[t] = "inherit"), s && "set" in s && void 0 === (r = s.set(e, r, i)) || (Gt[t] = r)), void 0);
	          }
	        }, css: function css(e, t, n, r) {
	          var i,
	              o,
	              a,
	              s = ie.camelCase(t);return t = ie.cssProps[s] || (ie.cssProps[s] = j(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = N(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), n === !0 || ie.isNumeric(o) ? o || 0 : i) : i;
	        } }), ie.each(["height", "width"], function (e, t) {
	        ie.cssHooks[t] = { get: function get(e, n, r) {
	            if (n) return Ge.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, Ze, function () {
	              return P(e, t, r);
	            }) : P(e, t, r);
	          }, set: function set(e, n, r) {
	            var i = r && Ye(e);return A(e, n, r ? D(e, t, r, "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0);
	          } };
	      }), ie.cssHooks.marginRight = E(te.reliableMarginRight, function (e, t) {
	        if (t) return ie.swap(e, { display: "inline-block" }, N, [e, "marginRight"]);
	      }), ie.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
	        ie.cssHooks[e + t] = { expand: function expand(n) {
	            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
	              i[e + Ee[r] + t] = o[r] || o[r - 2] || o[0];
	            }return i;
	          } }, _e.test(e) || (ie.cssHooks[e + t].set = A);
	      }), ie.fn.extend({ css: function css(e, t) {
	          return we(this, function (e, t, n) {
	            var r,
	                i,
	                o = {},
	                a = 0;if (ie.isArray(t)) {
	              for (r = Ye(e), i = t.length; a < i; a++) {
	                o[t[a]] = ie.css(e, t[a], !1, r);
	              }return o;
	            }return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t);
	          }, e, t, arguments.length > 1);
	        }, show: function show() {
	          return L(this, !0);
	        }, hide: function hide() {
	          return L(this);
	        }, toggle: function toggle(e) {
	          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
	            je(this) ? ie(this).show() : ie(this).hide();
	          });
	        } }), ie.Tween = H, H.prototype = { constructor: H, init: function init(e, t, n, r, i, o) {
	          this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px");
	        }, cur: function cur() {
	          var e = H.propHooks[this.prop];return e && e.get ? e.get(this) : H.propHooks._default.get(this);
	        }, run: function run(e) {
	          var t,
	              n = H.propHooks[this.prop];return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
	        } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function get(e) {
	            var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
	          }, set: function set(e) {
	            ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
	          } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function set(e) {
	          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
	        } }, ie.easing = { linear: function linear(e) {
	          return e;
	        }, swing: function swing(e) {
	          return .5 - Math.cos(e * Math.PI) / 2;
	        } }, ie.fx = H.prototype.init, ie.fx.step = {};var tt,
	          nt,
	          rt = /^(?:toggle|show|hide)$/,
	          it = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
	          ot = /queueHooks$/,
	          at = [R],
	          st = { "*": [function (e, t) {
	          var n = this.createTween(e, t),
	              r = n.cur(),
	              i = it.exec(t),
	              o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
	              a = (ie.cssNumber[e] || "px" !== o && +r) && it.exec(ie.css(n.elem, e)),
	              s = 1,
	              u = 20;if (a && a[3] !== o) {
	            o = o || a[3], i = i || [], a = +r || 1;do {
	              s = s || ".5", a /= s, ie.style(n.elem, e, a + o);
	            } while (s !== (s = n.cur() / r) && 1 !== s && --u);
	          }return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
	        }] };ie.Animation = ie.extend(M, { tweener: function tweener(e, t) {
	          ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");for (var n, r = 0, i = e.length; r < i; r++) {
	            n = e[r], st[n] = st[n] || [], st[n].unshift(t);
	          }
	        }, prefilter: function prefilter(e, t) {
	          t ? at.unshift(e) : at.push(e);
	        } }), ie.speed = function (e, t, r) {
	        var i = e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) ? ie.extend({}, e) : { complete: r || !r && t || ie.isFunction(e) && e, duration: e, easing: r && t || t && !ie.isFunction(t) && t };return i.duration = ie.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ie.fx.speeds ? ie.fx.speeds[i.duration] : ie.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
	          ie.isFunction(i.old) && i.old.call(this), i.queue && ie.dequeue(this, i.queue);
	        }, i;
	      }, ie.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
	          return this.filter(je).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
	        }, animate: function animate(e, t, n, r) {
	          var i = ie.isEmptyObject(e),
	              o = ie.speed(t, n, r),
	              a = function a() {
	            var t = M(this, ie.extend({}, e), o);(i || Te.get(this, "finish")) && t.stop(!0);
	          };return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
	        }, stop: function stop(e, t, n) {
	          var r = function r(e) {
	            var t = e.stop;delete e.stop, t(n);
	          };return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
	            var t = !0,
	                i = null != e && e + "queueHooks",
	                o = ie.timers,
	                a = Te.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
	              a[i] && a[i].stop && ot.test(i) && r(a[i]);
	            }for (i = o.length; i--;) {
	              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
	            }!t && n || ie.dequeue(this, e);
	          });
	        }, finish: function finish(e) {
	          return e !== !1 && (e = e || "fx"), this.each(function () {
	            var t,
	                n = Te.get(this),
	                r = n[e + "queue"],
	                i = n[e + "queueHooks"],
	                o = ie.timers,
	                a = r ? r.length : 0;for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
	              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
	            }for (t = 0; t < a; t++) {
	              r[t] && r[t].finish && r[t].finish.call(this);
	            }delete n.finish;
	          });
	        } }), ie.each(["toggle", "show", "hide"], function (e, t) {
	        var n = ie.fn[t];ie.fn[t] = function (e, r, i) {
	          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i);
	        };
	      }), ie.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
	        ie.fn[e] = function (e, n, r) {
	          return this.animate(t, e, n, r);
	        };
	      }), ie.timers = [], ie.fx.tick = function () {
	        var e,
	            t = 0,
	            n = ie.timers;for (tt = ie.now(); t < n.length; t++) {
	          e = n[t], e() || n[t] !== e || n.splice(t--, 1);
	        }n.length || ie.fx.stop(), tt = void 0;
	      }, ie.fx.timer = function (e) {
	        ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop();
	      }, ie.fx.interval = 13, ie.fx.start = function () {
	        nt || (nt = setInterval(ie.fx.tick, ie.fx.interval));
	      }, ie.fx.stop = function () {
	        clearInterval(nt), nt = null;
	      }, ie.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ie.fn.delay = function (e, t) {
	        return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
	          var r = setTimeout(t, e);n.stop = function () {
	            clearTimeout(r);
	          };
	        });
	      }, function () {
	        var e = ne.createElement("input"),
	            t = ne.createElement("select"),
	            n = t.appendChild(ne.createElement("option"));e.type = "checkbox", te.checkOn = "" !== e.value, te.optSelected = n.selected, t.disabled = !0, te.optDisabled = !n.disabled, e = ne.createElement("input"), e.value = "t", e.type = "radio", te.radioValue = "t" === e.value;
	      }();var ut,
	          lt,
	          ct = ie.expr.attrHandle;ie.fn.extend({ attr: function attr(e, t) {
	          return we(this, ie.attr, e, t, arguments.length > 1);
	        }, removeAttr: function removeAttr(e) {
	          return this.each(function () {
	            ie.removeAttr(this, e);
	          });
	        } }), ie.extend({ attr: function attr(e, t, r) {
	          var i,
	              o,
	              a = e.nodeType;if (e && 3 !== a && 8 !== a && 2 !== a) return n(e.getAttribute) === De ? ie.prop(e, t, r) : (1 === a && ie.isXMLDoc(e) || (t = t.toLowerCase(), i = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? lt : ut)), void 0 === r ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = ie.find.attr(e, t), null == o ? void 0 : o) : null !== r ? i && "set" in i && void 0 !== (o = i.set(e, r, t)) ? o : (e.setAttribute(t, r + ""), r) : void ie.removeAttr(e, t));
	        }, removeAttr: function removeAttr(e, t) {
	          var n,
	              r,
	              i = 0,
	              o = t && t.match(ve);if (o && 1 === e.nodeType) for (; n = o[i++];) {
	            r = ie.propFix[n] || n, ie.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
	          }
	        }, attrHooks: { type: { set: function set(e, t) {
	              if (!te.radioValue && "radio" === t && ie.nodeName(e, "input")) {
	                var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
	              }
	            } } } }), lt = { set: function set(e, t, n) {
	          return t === !1 ? ie.removeAttr(e, n) : e.setAttribute(n, n), n;
	        } }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
	        var n = ct[t] || ie.find.attr;ct[t] = function (e, t, r) {
	          var i, o;return r || (o = ct[t], ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ct[t] = o), i;
	        };
	      });var ft = /^(?:input|select|textarea|button)$/i;ie.fn.extend({ prop: function prop(e, t) {
	          return we(this, ie.prop, e, t, arguments.length > 1);
	        }, removeProp: function removeProp(e) {
	          return this.each(function () {
	            delete this[ie.propFix[e] || e];
	          });
	        } }), ie.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, t, n) {
	          var r,
	              i,
	              o,
	              a = e.nodeType;if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
	        }, propHooks: { tabIndex: { get: function get(e) {
	              return e.hasAttribute("tabindex") || ft.test(e.nodeName) || e.href ? e.tabIndex : -1;
	            } } } }), te.optSelected || (ie.propHooks.selected = { get: function get(e) {
	          var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
	        } }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	        ie.propFix[this.toLowerCase()] = this;
	      });var pt = /[\t\r\n\f]/g;ie.fn.extend({ addClass: function addClass(e) {
	          var t,
	              n,
	              r,
	              i,
	              o,
	              a,
	              s = "string" == typeof e && e,
	              u = 0,
	              l = this.length;if (ie.isFunction(e)) return this.each(function (t) {
	            ie(this).addClass(e.call(this, t, this.className));
	          });if (s) for (t = (e || "").match(ve) || []; u < l; u++) {
	            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pt, " ") : " ")) {
	              for (o = 0; i = t[o++];) {
	                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
	              }a = ie.trim(r), n.className !== a && (n.className = a);
	            }
	          }return this;
	        }, removeClass: function removeClass(e) {
	          var t,
	              n,
	              r,
	              i,
	              o,
	              a,
	              s = 0 === arguments.length || "string" == typeof e && e,
	              u = 0,
	              l = this.length;if (ie.isFunction(e)) return this.each(function (t) {
	            ie(this).removeClass(e.call(this, t, this.className));
	          });if (s) for (t = (e || "").match(ve) || []; u < l; u++) {
	            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pt, " ") : "")) {
	              for (o = 0; i = t[o++];) {
	                for (; r.indexOf(" " + i + " ") >= 0;) {
	                  r = r.replace(" " + i + " ", " ");
	                }
	              }a = e ? ie.trim(r) : "", n.className !== a && (n.className = a);
	            }
	          }return this;
	        }, toggleClass: function toggleClass(e, t) {
	          var r = "undefined" == typeof e ? "undefined" : n(e);return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function (n) {
	            ie(this).toggleClass(e.call(this, n, this.className, t), t);
	          }) : this.each(function () {
	            if ("string" === r) for (var t, n = 0, i = ie(this), o = e.match(ve) || []; t = o[n++];) {
	              i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
	            } else r !== De && "boolean" !== r || (this.className && Te.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : Te.get(this, "__className__") || "");
	          });
	        }, hasClass: function hasClass(e) {
	          for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) {
	            if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(pt, " ").indexOf(t) >= 0) return !0;
	          }return !1;
	        } });var dt = /\r/g;ie.fn.extend({ val: function val(e) {
	          var t,
	              n,
	              r,
	              i = this[0];{
	            if (arguments.length) return r = ie.isFunction(e), this.each(function (n) {
	              var i;1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function (e) {
	                return null == e ? "" : e + "";
	              })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
	            });if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n);
	          }
	        } }), ie.extend({ valHooks: { option: { get: function get(e) {
	              var t = ie.find.attr(e, "value");return null != t ? t : ie.trim(ie.text(e));
	            } }, select: { get: function get(e) {
	              for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) {
	                if (n = r[u], (n.selected || u === i) && (te.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
	                  if (t = ie(n).val(), o) return t;a.push(t);
	                }
	              }return a;
	            }, set: function set(e, t) {
	              for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;) {
	                r = i[a], (r.selected = ie.inArray(r.value, o) >= 0) && (n = !0);
	              }return n || (e.selectedIndex = -1), o;
	            } } } }), ie.each(["radio", "checkbox"], function () {
	        ie.valHooks[this] = { set: function set(e, t) {
	            if (ie.isArray(t)) return e.checked = ie.inArray(ie(e).val(), t) >= 0;
	          } }, te.checkOn || (ie.valHooks[this].get = function (e) {
	          return null === e.getAttribute("value") ? "on" : e.value;
	        });
	      }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
	        ie.fn[t] = function (e, n) {
	          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
	        };
	      }), ie.fn.extend({ hover: function hover(e, t) {
	          return this.mouseenter(e).mouseleave(t || e);
	        }, bind: function bind(e, t, n) {
	          return this.on(e, null, t, n);
	        }, unbind: function unbind(e, t) {
	          return this.off(e, null, t);
	        }, delegate: function delegate(e, t, n, r) {
	          return this.on(t, e, n, r);
	        }, undelegate: function undelegate(e, t, n) {
	          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
	        } });var ht = ie.now(),
	          gt = /\?/;ie.parseJSON = function (e) {
	        return JSON.parse(e + "");
	      }, ie.parseXML = function (e) {
	        var t, n;if (!e || "string" != typeof e) return null;try {
	          n = new DOMParser(), t = n.parseFromString(e, "text/xml");
	        } catch (r) {
	          t = void 0;
	        }return t && !t.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + e), t;
	      };var mt = /#.*$/,
	          yt = /([?&])_=[^&]*/,
	          vt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	          xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	          bt = /^(?:GET|HEAD)$/,
	          wt = /^\/\//,
	          Tt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	          Ct = {},
	          St = {},
	          kt = "*/".concat("*"),
	          Nt = o.location.href,
	          Et = Tt.exec(Nt.toLowerCase()) || [];ie.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Nt, type: "GET", isLocal: xt.test(Et[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": kt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
	          return t ? I(I(e, ie.ajaxSettings), t) : I(ie.ajaxSettings, e);
	        }, ajaxPrefilter: $(Ct), ajaxTransport: $(St), ajax: function ajax(e, t) {
	          function r(e, t, n, r) {
	            var s,
	                l,
	                f,
	                v,
	                x,
	                w = t;2 !== b && (b = 2, u && clearTimeout(u), i = void 0, a = r || "", T.readyState = e > 0 ? 4 : 0, s = e >= 200 && e < 300 || 304 === e, n && (v = B(p, T, n)), v = z(p, v, T, s), s ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), x = T.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = v.state, l = v.data, f = v.error, s = !f)) : (f = w, !e && w || (w = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || w) + "", s ? g.resolveWith(d, [l, w, T]) : g.rejectWith(d, [T, w, f]), T.statusCode(y), y = void 0, c && h.trigger(s ? "ajaxSuccess" : "ajaxError", [T, p, s ? l : f]), m.fireWith(d, [T, w]), c && (h.trigger("ajaxComplete", [T, p]), --ie.active || ie.event.trigger("ajaxStop")));
	          }"object" === ("undefined" == typeof e ? "undefined" : n(e)) && (t = e, e = void 0), t = t || {};var i,
	              o,
	              a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p = ie.ajaxSetup({}, t),
	              d = p.context || p,
	              h = p.context && (d.nodeType || d.jquery) ? ie(d) : ie.event,
	              g = ie.Deferred(),
	              m = ie.Callbacks("once memory"),
	              y = p.statusCode || {},
	              v = {},
	              x = {},
	              b = 0,
	              w = "canceled",
	              T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
	              var t;if (2 === b) {
	                if (!s) for (s = {}; t = vt.exec(a);) {
	                  s[t[1].toLowerCase()] = t[2];
	                }t = s[e.toLowerCase()];
	              }return null == t ? null : t;
	            }, getAllResponseHeaders: function getAllResponseHeaders() {
	              return 2 === b ? a : null;
	            }, setRequestHeader: function setRequestHeader(e, t) {
	              var n = e.toLowerCase();return b || (e = x[n] = x[n] || e, v[e] = t), this;
	            }, overrideMimeType: function overrideMimeType(e) {
	              return b || (p.mimeType = e), this;
	            }, statusCode: function statusCode(e) {
	              var t;if (e) if (b < 2) for (t in e) {
	                y[t] = [y[t], e[t]];
	              } else T.always(e[T.status]);return this;
	            }, abort: function abort(e) {
	              var t = e || w;return i && i.abort(t), r(0, t), this;
	            } };if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Nt) + "").replace(mt, "").replace(wt, Et[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ie.trim(p.dataType || "*").toLowerCase().match(ve) || [""], null == p.crossDomain && (l = Tt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Et[1] && l[2] === Et[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ie.param(p.data, p.traditional)), W(Ct, p, t, T), 2 === b) return T;c = ie.event && p.global, c && 0 === ie.active++ && ie.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !bt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (gt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = yt.test(o) ? o.replace(yt, "$1_=" + ht++) : o + (gt.test(o) ? "&" : "?") + "_=" + ht++)), p.ifModified && (ie.lastModified[o] && T.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && T.setRequestHeader("If-None-Match", ie.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : p.accepts["*"]);for (f in p.headers) {
	            T.setRequestHeader(f, p.headers[f]);
	          }if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b)) return T.abort();w = "abort";for (f in { success: 1, error: 1, complete: 1 }) {
	            T[f](p[f]);
	          }if (i = W(St, p, t, T)) {
	            T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
	              T.abort("timeout");
	            }, p.timeout));try {
	              b = 1, i.send(v, r);
	            } catch (C) {
	              if (!(b < 2)) throw C;r(-1, C);
	            }
	          } else r(-1, "No Transport");return T;
	        }, getJSON: function getJSON(e, t, n) {
	          return ie.get(e, t, n, "json");
	        }, getScript: function getScript(e, t) {
	          return ie.get(e, void 0, t, "script");
	        } }), ie.each(["get", "post"], function (e, t) {
	        ie[t] = function (e, n, r, i) {
	          return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({ url: e, type: t, dataType: i, data: n, success: r });
	        };
	      }), ie._evalUrl = function (e) {
	        return ie.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	      }, ie.fn.extend({ wrapAll: function wrapAll(e) {
	          var t;return ie.isFunction(e) ? this.each(function (t) {
	            ie(this).wrapAll(e.call(this, t));
	          }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
	            for (var e = this; e.firstElementChild;) {
	              e = e.firstElementChild;
	            }return e;
	          }).append(this)), this);
	        }, wrapInner: function wrapInner(e) {
	          return ie.isFunction(e) ? this.each(function (t) {
	            ie(this).wrapInner(e.call(this, t));
	          }) : this.each(function () {
	            var t = ie(this),
	                n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
	          });
	        }, wrap: function wrap(e) {
	          var t = ie.isFunction(e);return this.each(function (n) {
	            ie(this).wrapAll(t ? e.call(this, n) : e);
	          });
	        }, unwrap: function unwrap() {
	          return this.parent().each(function () {
	            ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes);
	          }).end();
	        } }), ie.expr.filters.hidden = function (e) {
	        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
	      }, ie.expr.filters.visible = function (e) {
	        return !ie.expr.filters.hidden(e);
	      };var jt = /%20/g,
	          At = /\[\]$/,
	          Dt = /\r?\n/g,
	          Pt = /^(?:submit|button|image|reset|file)$/i,
	          Lt = /^(?:input|select|textarea|keygen)/i;ie.param = function (e, t) {
	        var n,
	            r = [],
	            i = function i(e, t) {
	          t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
	        };if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function () {
	          i(this.name, this.value);
	        });else for (n in e) {
	          X(n, e[n], t, i);
	        }return r.join("&").replace(jt, "+");
	      }, ie.fn.extend({ serialize: function serialize() {
	          return ie.param(this.serializeArray());
	        }, serializeArray: function serializeArray() {
	          return this.map(function () {
	            var e = ie.prop(this, "elements");return e ? ie.makeArray(e) : this;
	          }).filter(function () {
	            var e = this.type;return this.name && !ie(this).is(":disabled") && Lt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ae.test(e));
	          }).map(function (e, t) {
	            var n = ie(this).val();return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
	              return { name: t.name, value: e.replace(Dt, "\r\n") };
	            }) : { name: t.name, value: n.replace(Dt, "\r\n") };
	          }).get();
	        } }), ie.ajaxSettings.xhr = function () {
	        try {
	          return new XMLHttpRequest();
	        } catch (e) {}
	      };var Ht = 0,
	          qt = {},
	          Ft = { 0: 200, 1223: 204 },
	          Ot = ie.ajaxSettings.xhr();o.attachEvent && o.attachEvent("onunload", function () {
	        for (var e in qt) {
	          qt[e]();
	        }
	      }), te.cors = !!Ot && "withCredentials" in Ot, te.ajax = Ot = !!Ot, ie.ajaxTransport(function (e) {
	        var _t3;if (te.cors || Ot && !e.crossDomain) return { send: function send(n, r) {
	            var i,
	                o = e.xhr(),
	                a = ++Ht;if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) {
	              o[i] = e.xhrFields[i];
	            }e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");for (i in n) {
	              o.setRequestHeader(i, n[i]);
	            }_t3 = function t(e) {
	              return function () {
	                _t3 && (delete qt[a], _t3 = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Ft[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders()));
	              };
	            }, o.onload = _t3(), o.onerror = _t3("error"), _t3 = qt[a] = _t3("abort");try {
	              o.send(e.hasContent && e.data || null);
	            } catch (s) {
	              if (_t3) throw s;
	            }
	          }, abort: function abort() {
	            _t3 && _t3();
	          } };
	      }), ie.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
	            return ie.globalEval(e), e;
	          } } }), ie.ajaxPrefilter("script", function (e) {
	        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
	      }), ie.ajaxTransport("script", function (e) {
	        if (e.crossDomain) {
	          var t, _n;return { send: function send(r, i) {
	              t = ie("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
	                t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
	              }), ne.head.appendChild(t[0]);
	            }, abort: function abort() {
	              _n && _n();
	            } };
	        }
	      });var Rt = [],
	          Vt = /(=)\?(?=&|$)|\?\?/;ie.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	          var e = Rt.pop() || ie.expando + "_" + ht++;return this[e] = !0, e;
	        } }), ie.ajaxPrefilter("json jsonp", function (e, t, n) {
	        var r,
	            i,
	            a,
	            s = e.jsonp !== !1 && (Vt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + r) : e.jsonp !== !1 && (e.url += (gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
	          return a || ie.error(r + " was not called"), a[0];
	        }, e.dataTypes[0] = "json", i = o[r], o[r] = function () {
	          a = arguments;
	        }, n.always(function () {
	          o[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Rt.push(r)), a && ie.isFunction(i) && i(a[0]), a = i = void 0;
	        }), "script";
	      }), ie.parseHTML = function (e, t, n) {
	        if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || ne;var r = fe.exec(e),
	            i = !n && [];return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes));
	      };var Mt = ie.fn.load;ie.fn.load = function (e, t, r) {
	        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);var i,
	            o,
	            a,
	            s = this,
	            u = e.indexOf(" ");return u >= 0 && (i = ie.trim(e.slice(u)), e = e.slice(0, u)), ie.isFunction(t) ? (r = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && (o = "POST"), s.length > 0 && ie.ajax({ url: e, type: o, dataType: "html", data: t }).done(function (e) {
	          a = arguments, s.html(i ? ie("<div>").append(ie.parseHTML(e)).find(i) : e);
	        }).complete(r && function (e, t) {
	          s.each(r, a || [e.responseText, t, e]);
	        }), this;
	      }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
	        ie.fn[t] = function (e) {
	          return this.on(t, e);
	        };
	      }), ie.expr.filters.animated = function (e) {
	        return ie.grep(ie.timers, function (t) {
	          return e === t.elem;
	        }).length;
	      };var $t = o.document.documentElement;ie.offset = { setOffset: function setOffset(e, t, n) {
	          var r,
	              i,
	              o,
	              a,
	              s,
	              u,
	              l,
	              c = ie.css(e, "position"),
	              f = ie(e),
	              p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
	        } }, ie.fn.extend({ offset: function offset(e) {
	          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
	            ie.offset.setOffset(this, e, t);
	          });var t,
	              r,
	              i = this[0],
	              o = { top: 0, left: 0 },
	              a = i && i.ownerDocument;if (a) return t = a.documentElement, ie.contains(t, i) ? (n(i.getBoundingClientRect) !== De && (o = i.getBoundingClientRect()), r = _(a), { top: o.top + r.pageYOffset - t.clientTop, left: o.left + r.pageXOffset - t.clientLeft }) : o;
	        }, position: function position() {
	          if (this[0]) {
	            var e,
	                t,
	                n = this[0],
	                r = { top: 0, left: 0 };return "fixed" === ie.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (r = e.offset()), r.top += ie.css(e[0], "borderTopWidth", !0), r.left += ie.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - ie.css(n, "marginTop", !0), left: t.left - r.left - ie.css(n, "marginLeft", !0) };
	          }
	        }, offsetParent: function offsetParent() {
	          return this.map(function () {
	            for (var e = this.offsetParent || $t; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) {
	              e = e.offsetParent;
	            }return e || $t;
	          });
	        } }), ie.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
	        var n = "pageYOffset" === t;ie.fn[e] = function (r) {
	          return we(this, function (e, r, i) {
	            var a = _(e);return void 0 === i ? a ? a[t] : e[r] : void (a ? a.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i);
	          }, e, r, arguments.length, null);
	        };
	      }), ie.each(["top", "left"], function (e, t) {
	        ie.cssHooks[t] = E(te.pixelPosition, function (e, n) {
	          if (n) return n = N(e, t), Ue.test(n) ? ie(e).position()[t] + "px" : n;
	        });
	      }), ie.each({ Height: "height", Width: "width" }, function (e, t) {
	        ie.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
	          ie.fn[r] = function (r, i) {
	            var o = arguments.length && (n || "boolean" != typeof r),
	                a = n || (r === !0 || i === !0 ? "margin" : "border");return we(this, function (t, n, r) {
	              var i;return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a);
	            }, t, o ? r : void 0, o, null);
	          };
	        });
	      }), ie.fn.size = function () {
	        return this.length;
	      }, ie.fn.andSelf = ie.fn.addBack, r = [], i = function () {
	        return ie;
	      }.apply(t, r), !(void 0 !== i && (e.exports = i));var Wt = o.jQuery,
	          It = o.$;return ie.noConflict = function (e) {
	        return o.$ === ie && (o.$ = It), e && o.jQuery === ie && (o.jQuery = Wt), ie;
	      }, ("undefined" == typeof a ? "undefined" : n(a)) === De && (o.jQuery = o.$ = ie), ie;
	    });
	  }).call(t, n(2)(e));
	}, function (e, t) {
	  "use strict";
	  e.exports = function (e) {
	    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e;
	  };
	}, function (e, t, n) {
	  "use strict";
	  window.jQuery = window.$ = n(4), n(5), n(6);
	}, function (e, t, n) {
	  var r, i;(function (e) {
	    "use strict";
	    var n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	      return typeof e === "undefined" ? "undefined" : _typeof(e);
	    } : function (e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    };!function (t, r) {
	      "object" === n(e) && "object" === n(e.exports) ? e.exports = t.document ? r(t, !0) : function (e) {
	        if (!e.document) throw new Error("jQuery requires a window with a document");return r(e);
	      } : r(t);
	    }("undefined" != typeof window ? window : void 0, function (o, a) {
	      function s(e) {
	        var t = "length" in e && e.length,
	            n = ie.type(e);return "function" !== n && !ie.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
	      }function u(e, t, n) {
	        if (ie.isFunction(t)) return ie.grep(e, function (e, r) {
	          return !!t.call(e, r, e) !== n;
	        });if (t.nodeType) return ie.grep(e, function (e) {
	          return e === t !== n;
	        });if ("string" == typeof t) {
	          if (pe.test(t)) return ie.filter(t, e, n);t = ie.filter(t, e);
	        }return ie.grep(e, function (e) {
	          return J.call(t, e) >= 0 !== n;
	        });
	      }function l(e, t) {
	        for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
	      }function c(e) {
	        var t = xe[e] = {};return ie.each(e.match(ve) || [], function (e, n) {
	          t[n] = !0;
	        }), t;
	      }function f() {
	        ne.removeEventListener("DOMContentLoaded", f, !1), o.removeEventListener("load", f, !1), ie.ready();
	      }function p() {
	        Object.defineProperty(this.cache = {}, 0, { get: function get() {
	            return {};
	          } }), this.expando = ie.expando + p.uid++;
	      }function d(e, t, n) {
	        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ke, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
	          try {
	            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Se.test(n) ? ie.parseJSON(n) : n);
	          } catch (i) {}Ce.set(e, t, n);
	        } else n = void 0;return n;
	      }function h() {
	        return !0;
	      }function g() {
	        return !1;
	      }function m() {
	        try {
	          return ne.activeElement;
	        } catch (e) {}
	      }function y(e, t) {
	        return ie.nodeName(e, "table") && ie.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
	      }function v(e) {
	        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
	      }function x(e) {
	        var t = We.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
	      }function b(e, t) {
	        for (var n = 0, r = e.length; n < r; n++) {
	          Te.set(e[n], "globalEval", !t || Te.get(t[n], "globalEval"));
	        }
	      }function w(e, t) {
	        var n, r, i, o, a, s, u, l;if (1 === t.nodeType) {
	          if (Te.hasData(e) && (o = Te.access(e), a = Te.set(t, o), l = o.events)) {
	            delete a.handle, a.events = {};for (i in l) {
	              for (n = 0, r = l[i].length; n < r; n++) {
	                ie.event.add(t, i, l[i][n]);
	              }
	            }
	          }Ce.hasData(e) && (s = Ce.access(e), u = ie.extend({}, s), Ce.set(t, u));
	        }
	      }function T(e, t) {
	        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && ie.nodeName(e, t) ? ie.merge([e], n) : n;
	      }function C(e, t) {
	        var n = t.nodeName.toLowerCase();"input" === n && Ae.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
	      }function S(e, t) {
	        var n,
	            r = ie(t.createElement(e)).appendTo(t.body),
	            i = o.getDefaultComputedStyle && (n = o.getDefaultComputedStyle(r[0])) ? n.display : ie.css(r[0], "display");return r.detach(), i;
	      }function k(e) {
	        var t = ne,
	            n = Xe[e];return n || (n = S(e, t), "none" !== n && n || (ze = (ze || ie("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = ze[0].contentDocument, t.write(), t.close(), n = S(e, t), ze.detach()), Xe[e] = n), n;
	      }function N(e, t, n) {
	        var r,
	            i,
	            o,
	            a,
	            s = e.style;return n = n || Ye(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || ie.contains(e.ownerDocument, e) || (a = ie.style(e, t)), Ue.test(a) && _e.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
	      }function E(e, t) {
	        return { get: function get() {
	            return e() ? void delete this.get : (this.get = t).apply(this, arguments);
	          } };
	      }function j(e, t) {
	        if (t in e) return t;for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = et.length; i--;) {
	          if (t = et[i] + n, t in e) return t;
	        }return r;
	      }function A(e, t, n) {
	        var r = Qe.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
	      }function D(e, t, n, r, i) {
	        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) {
	          "margin" === n && (a += ie.css(e, n + Ee[o], !0, i)), r ? ("content" === n && (a -= ie.css(e, "padding" + Ee[o], !0, i)), "margin" !== n && (a -= ie.css(e, "border" + Ee[o] + "Width", !0, i))) : (a += ie.css(e, "padding" + Ee[o], !0, i), "padding" !== n && (a += ie.css(e, "border" + Ee[o] + "Width", !0, i)));
	        }return a;
	      }function P(e, t, n) {
	        var r = !0,
	            i = "width" === t ? e.offsetWidth : e.offsetHeight,
	            o = Ye(e),
	            a = "border-box" === ie.css(e, "boxSizing", !1, o);if (i <= 0 || null == i) {
	          if (i = N(e, t, o), (i < 0 || null == i) && (i = e.style[t]), Ue.test(i)) return i;r = a && (te.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
	        }return i + D(e, t, n || (a ? "border" : "content"), r, o) + "px";
	      }function L(e, t) {
	        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) {
	          r = e[a], r.style && (o[a] = Te.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && je(r) && (o[a] = Te.access(r, "olddisplay", k(r.nodeName)))) : (i = je(r), "none" === n && i || Te.set(r, "olddisplay", i ? n : ie.css(r, "display"))));
	        }for (a = 0; a < s; a++) {
	          r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
	        }return e;
	      }function H(e, t, n, r, i) {
	        return new H.prototype.init(e, t, n, r, i);
	      }function q() {
	        return setTimeout(function () {
	          tt = void 0;
	        }), tt = ie.now();
	      }function F(e, t) {
	        var n,
	            r = 0,
	            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
	          n = Ee[r], i["margin" + n] = i["padding" + n] = e;
	        }return t && (i.opacity = i.width = e), i;
	      }function O(e, t, n) {
	        for (var r, i = (st[t] || []).concat(st["*"]), o = 0, a = i.length; o < a; o++) {
	          if (r = i[o].call(n, t, e)) return r;
	        }
	      }function R(e, t, n) {
	        var r,
	            i,
	            o,
	            a,
	            s,
	            u,
	            l,
	            c,
	            f = this,
	            p = {},
	            d = e.style,
	            h = e.nodeType && je(e),
	            g = Te.get(e, "fxshow");n.queue || (s = ie._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function () {
	          s.unqueued || u();
	        }), s.unqueued++, f.always(function () {
	          f.always(function () {
	            s.unqueued--, ie.queue(e, "fx").length || s.empty.fire();
	          });
	        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], l = ie.css(e, "display"), c = "none" === l ? Te.get(e, "olddisplay") || k(e.nodeName) : l, "inline" === c && "none" === ie.css(e, "float") && (d.display = "inline-block")), n.overflow && (d.overflow = "hidden", f.always(function () {
	          d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
	        }));for (r in t) {
	          if (i = t[r], rt.exec(i)) {
	            if (delete t[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
	              if ("show" !== i || !g || void 0 === g[r]) continue;h = !0;
	            }p[r] = g && g[r] || ie.style(e, r);
	          } else l = void 0;
	        }if (ie.isEmptyObject(p)) "inline" === ("none" === l ? k(e.nodeName) : l) && (d.display = l);else {
	          g ? "hidden" in g && (h = g.hidden) : g = Te.access(e, "fxshow", {}), o && (g.hidden = !h), h ? ie(e).show() : f.done(function () {
	            ie(e).hide();
	          }), f.done(function () {
	            var t;Te.remove(e, "fxshow");for (t in p) {
	              ie.style(e, t, p[t]);
	            }
	          });for (r in p) {
	            a = O(h ? g[r] : 0, r, f), r in g || (g[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
	          }
	        }
	      }function V(e, t) {
	        var n, r, i, o, a;for (n in e) {
	          if (r = ie.camelCase(n), i = t[r], o = e[n], ie.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = ie.cssHooks[r], a && "expand" in a) {
	            o = a.expand(o), delete e[r];for (n in o) {
	              n in e || (e[n] = o[n], t[n] = i);
	            }
	          } else t[r] = i;
	        }
	      }function M(e, t, n) {
	        var r,
	            i,
	            o = 0,
	            a = at.length,
	            s = ie.Deferred().always(function () {
	          delete u.elem;
	        }),
	            u = function u() {
	          if (i) return !1;for (var t = tt || q(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; a < u; a++) {
	            l.tweens[a].run(o);
	          }return s.notifyWith(e, [l, o, n]), o < 1 && u ? n : (s.resolveWith(e, [l]), !1);
	        },
	            l = s.promise({ elem: e, props: ie.extend({}, t), opts: ie.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: tt || q(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
	            var r = ie.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);return l.tweens.push(r), r;
	          }, stop: function stop(t) {
	            var n = 0,
	                r = t ? l.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
	              l.tweens[n].run(1);
	            }return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this;
	          } }),
	            c = l.props;for (V(c, l.opts.specialEasing); o < a; o++) {
	          if (r = at[o].call(l, e, c, l.opts)) return r;
	        }return ie.map(c, O, l), ie.isFunction(l.opts.start) && l.opts.start.call(e, l), ie.fx.timer(ie.extend(u, { elem: e, anim: l, queue: l.opts.queue })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
	      }function $(e) {
	        return function (t, n) {
	          "string" != typeof t && (n = t, t = "*");var r,
	              i = 0,
	              o = t.toLowerCase().match(ve) || [];if (ie.isFunction(n)) for (; r = o[i++];) {
	            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
	          }
	        };
	      }function W(e, t, n, r) {
	        function i(s) {
	          var u;return o[s] = !0, ie.each(e[s] || [], function (e, s) {
	            var l = s(t, n, r);return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
	          }), u;
	        }var o = {},
	            a = e === St;return i(t.dataTypes[0]) || !o["*"] && i("*");
	      }function I(e, t) {
	        var n,
	            r,
	            i = ie.ajaxSettings.flatOptions || {};for (n in t) {
	          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
	        }return r && ie.extend(!0, e, r), e;
	      }function B(e, t, n) {
	        for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0];) {
	          u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
	        }if (r) for (i in s) {
	          if (s[i] && s[i].test(r)) {
	            u.unshift(i);break;
	          }
	        }if (u[0] in n) o = u[0];else {
	          for (i in n) {
	            if (!u[0] || e.converters[i + " " + u[0]]) {
	              o = i;break;
	            }a || (a = i);
	          }o = o || a;
	        }if (o) return o !== u[0] && u.unshift(o), n[o];
	      }function z(e, t, n, r) {
	        var i,
	            o,
	            a,
	            s,
	            u,
	            l = {},
	            c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
	          l[a.toLowerCase()] = e.converters[a];
	        }for (o = c.shift(); o;) {
	          if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u;else if ("*" !== u && u !== o) {
	            if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) {
	              if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
	                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));break;
	              }
	            }if (a !== !0) if (a && e["throws"]) t = a(t);else try {
	              t = a(t);
	            } catch (f) {
	              return { state: "parsererror", error: a ? f : "No conversion from " + u + " to " + o };
	            }
	          }
	        }return { state: "success", data: t };
	      }function X(e, t, r, i) {
	        var o;if (ie.isArray(t)) ie.each(t, function (t, o) {
	          r || At.test(e) ? i(e, o) : X(e + "[" + ("object" === ("undefined" == typeof o ? "undefined" : n(o)) ? t : "") + "]", o, r, i);
	        });else if (r || "object" !== ie.type(t)) i(e, t);else for (o in t) {
	          X(e + "[" + o + "]", t[o], r, i);
	        }
	      }function _(e) {
	        return ie.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
	      }var U = [],
	          Y = U.slice,
	          G = U.concat,
	          Q = U.push,
	          J = U.indexOf,
	          Z = {},
	          K = Z.toString,
	          ee = Z.hasOwnProperty,
	          te = {},
	          ne = o.document,
	          re = "2.1.4",
	          ie = function Bt(e, t) {
	        return new Bt.fn.init(e, t);
	      },
	          oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	          ae = /^-ms-/,
	          se = /-([\da-z])/gi,
	          ue = function ue(e, t) {
	        return t.toUpperCase();
	      };ie.fn = ie.prototype = { jquery: re, constructor: ie, selector: "", length: 0, toArray: function toArray() {
	          return Y.call(this);
	        }, get: function get(e) {
	          return null != e ? e < 0 ? this[e + this.length] : this[e] : Y.call(this);
	        }, pushStack: function pushStack(e) {
	          var t = ie.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
	        }, each: function each(e, t) {
	          return ie.each(this, e, t);
	        }, map: function map(e) {
	          return this.pushStack(ie.map(this, function (t, n) {
	            return e.call(t, n, t);
	          }));
	        }, slice: function slice() {
	          return this.pushStack(Y.apply(this, arguments));
	        }, first: function first() {
	          return this.eq(0);
	        }, last: function last() {
	          return this.eq(-1);
	        }, eq: function eq(e) {
	          var t = this.length,
	              n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
	        }, end: function end() {
	          return this.prevObject || this.constructor(null);
	        }, push: Q, sort: U.sort, splice: U.splice }, ie.extend = ie.fn.extend = function () {
	        var e,
	            t,
	            r,
	            i,
	            o,
	            a,
	            s = arguments[0] || {},
	            u = 1,
	            l = arguments.length,
	            c = !1;for ("boolean" == typeof s && (c = s, s = arguments[u] || {}, u++), "object" === ("undefined" == typeof s ? "undefined" : n(s)) || ie.isFunction(s) || (s = {}), u === l && (s = this, u--); u < l; u++) {
	          if (null != (e = arguments[u])) for (t in e) {
	            r = s[t], i = e[t], s !== i && (c && i && (ie.isPlainObject(i) || (o = ie.isArray(i))) ? (o ? (o = !1, a = r && ie.isArray(r) ? r : []) : a = r && ie.isPlainObject(r) ? r : {}, s[t] = ie.extend(c, a, i)) : void 0 !== i && (s[t] = i));
	          }
	        }return s;
	      }, ie.extend({ expando: "jQuery" + (re + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
	          throw new Error(e);
	        }, noop: function noop() {}, isFunction: function isFunction(e) {
	          return "function" === ie.type(e);
	        }, isArray: Array.isArray, isWindow: function isWindow(e) {
	          return null != e && e === e.window;
	        }, isNumeric: function isNumeric(e) {
	          return !ie.isArray(e) && e - parseFloat(e) + 1 >= 0;
	        }, isPlainObject: function isPlainObject(e) {
	          return "object" === ie.type(e) && !e.nodeType && !ie.isWindow(e) && !(e.constructor && !ee.call(e.constructor.prototype, "isPrototypeOf"));
	        }, isEmptyObject: function isEmptyObject(e) {
	          var t;for (t in e) {
	            return !1;
	          }return !0;
	        }, type: function type(e) {
	          return null == e ? e + "" : "object" === ("undefined" == typeof e ? "undefined" : n(e)) || "function" == typeof e ? Z[K.call(e)] || "object" : "undefined" == typeof e ? "undefined" : n(e);
	        }, globalEval: function globalEval(e) {
	          var t,
	              n = eval;e = ie.trim(e), e && (1 === e.indexOf("use strict") ? (t = ne.createElement("script"), t.text = e, ne.head.appendChild(t).parentNode.removeChild(t)) : n(e));
	        }, camelCase: function camelCase(e) {
	          return e.replace(ae, "ms-").replace(se, ue);
	        }, nodeName: function nodeName(e, t) {
	          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
	        }, each: function each(e, t, n) {
	          var r,
	              i = 0,
	              o = e.length,
	              a = s(e);if (n) {
	            if (a) for (; i < o && (r = t.apply(e[i], n), r !== !1); i++) {} else for (i in e) {
	              if (r = t.apply(e[i], n), r === !1) break;
	            }
	          } else if (a) for (; i < o && (r = t.call(e[i], i, e[i]), r !== !1); i++) {} else for (i in e) {
	            if (r = t.call(e[i], i, e[i]), r === !1) break;
	          }return e;
	        }, trim: function trim(e) {
	          return null == e ? "" : (e + "").replace(oe, "");
	        }, makeArray: function makeArray(e, t) {
	          var n = t || [];return null != e && (s(Object(e)) ? ie.merge(n, "string" == typeof e ? [e] : e) : Q.call(n, e)), n;
	        }, inArray: function inArray(e, t, n) {
	          return null == t ? -1 : J.call(t, e, n);
	        }, merge: function merge(e, t) {
	          for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
	            e[i++] = t[r];
	          }return e.length = i, e;
	        }, grep: function grep(e, t, n) {
	          for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) {
	            r = !t(e[o], o), r !== s && i.push(e[o]);
	          }return i;
	        }, map: function map(e, t, n) {
	          var r,
	              i = 0,
	              o = e.length,
	              a = s(e),
	              u = [];if (a) for (; i < o; i++) {
	            r = t(e[i], i, n), null != r && u.push(r);
	          } else for (i in e) {
	            r = t(e[i], i, n), null != r && u.push(r);
	          }return G.apply([], u);
	        }, guid: 1, proxy: function zt(e, t) {
	          var n, r, zt;if ("string" == typeof t && (n = e[t], t = e, e = n), ie.isFunction(e)) return r = Y.call(arguments, 2), zt = function zt() {
	            return e.apply(t || this, r.concat(Y.call(arguments)));
	          }, zt.guid = e.guid = e.guid || ie.guid++, zt;
	        }, now: Date.now, support: te }), ie.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
	        Z["[object " + t + "]"] = t.toLowerCase();
	      });var le = function (e) {
	        function t(e, t, n, r) {
	          var i, o, a, s, u, l, f, d, h, g;if ((t ? t.ownerDocument || t : $) !== L && P(t), t = t || L, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;if (!r && q) {
	            if (11 !== s && (i = ve.exec(e))) if (a = i[1]) {
	              if (9 === s) {
	                if (o = t.getElementById(a), !o || !o.parentNode) return n;if (o.id === a) return n.push(o), n;
	              } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && V(t, o) && o.id === a) return n.push(o), n;
	            } else {
	              if (i[2]) return Z.apply(n, t.getElementsByTagName(e)), n;if ((a = i[3]) && w.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(a)), n;
	            }if (w.qsa && (!F || !F.test(e))) {
	              if (d = f = M, h = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
	                for (l = k(e), (f = t.getAttribute("id")) ? d = f.replace(be, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;) {
	                  l[u] = d + p(l[u]);
	                }h = xe.test(e) && c(t.parentNode) || t, g = l.join(",");
	              }if (g) try {
	                return Z.apply(n, h.querySelectorAll(g)), n;
	              } catch (m) {} finally {
	                f || t.removeAttribute("id");
	              }
	            }
	          }return E(e.replace(ue, "$1"), t, n, r);
	        }function n() {
	          function e(n, r) {
	            return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = r;
	          }var t = [];return e;
	        }function r(e) {
	          return e[M] = !0, e;
	        }function i(e) {
	          var t = L.createElement("div");try {
	            return !!e(t);
	          } catch (n) {
	            return !1;
	          } finally {
	            t.parentNode && t.parentNode.removeChild(t), t = null;
	          }
	        }function o(e, t) {
	          for (var n = e.split("|"), r = e.length; r--;) {
	            T.attrHandle[n[r]] = t;
	          }
	        }function a(e, t) {
	          var n = t && e,
	              r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);if (r) return r;if (n) for (; n = n.nextSibling;) {
	            if (n === t) return -1;
	          }return e ? 1 : -1;
	        }function s(e) {
	          return function (t) {
	            var n = t.nodeName.toLowerCase();return "input" === n && t.type === e;
	          };
	        }function u(e) {
	          return function (t) {
	            var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
	          };
	        }function l(e) {
	          return r(function (t) {
	            return t = +t, r(function (n, r) {
	              for (var i, o = e([], n.length, t), a = o.length; a--;) {
	                n[i = o[a]] && (n[i] = !(r[i] = n[i]));
	              }
	            });
	          });
	        }function c(e) {
	          return e && "undefined" != typeof e.getElementsByTagName && e;
	        }function f() {}function p(e) {
	          for (var t = 0, n = e.length, r = ""; t < n; t++) {
	            r += e[t].value;
	          }return r;
	        }function d(e, t, n) {
	          var r = t.dir,
	              i = n && "parentNode" === r,
	              o = I++;return t.first ? function (t, n, o) {
	            for (; t = t[r];) {
	              if (1 === t.nodeType || i) return e(t, n, o);
	            }
	          } : function (t, n, a) {
	            var s,
	                u,
	                l = [W, o];if (a) {
	              for (; t = t[r];) {
	                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
	              }
	            } else for (; t = t[r];) {
	              if (1 === t.nodeType || i) {
	                if (u = t[M] || (t[M] = {}), (s = u[r]) && s[0] === W && s[1] === o) return l[2] = s[2];if (u[r] = l, l[2] = e(t, n, a)) return !0;
	              }
	            }
	          };
	        }function h(e) {
	          return e.length > 1 ? function (t, n, r) {
	            for (var i = e.length; i--;) {
	              if (!e[i](t, n, r)) return !1;
	            }return !0;
	          } : e[0];
	        }function g(e, n, r) {
	          for (var i = 0, o = n.length; i < o; i++) {
	            t(e, n[i], r);
	          }return r;
	        }function m(e, t, n, r, i) {
	          for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) {
	            (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
	          }return a;
	        }function y(e, t, n, i, o, a) {
	          return i && !i[M] && (i = y(i)), o && !o[M] && (o = y(o, a)), r(function (r, a, s, u) {
	            var l,
	                c,
	                f,
	                p = [],
	                d = [],
	                h = a.length,
	                y = r || g(t || "*", s.nodeType ? [s] : s, []),
	                v = !e || !r && t ? y : m(y, p, e, s, u),
	                x = n ? o || (r ? e : h || i) ? [] : a : v;if (n && n(v, x, s, u), i) for (l = m(x, d), i(l, [], s, u), c = l.length; c--;) {
	              (f = l[c]) && (x[d[c]] = !(v[d[c]] = f));
	            }if (r) {
	              if (o || e) {
	                if (o) {
	                  for (l = [], c = x.length; c--;) {
	                    (f = x[c]) && l.push(v[c] = f);
	                  }o(null, x = [], l, u);
	                }for (c = x.length; c--;) {
	                  (f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f));
	                }
	              }
	            } else x = m(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Z.apply(a, x);
	          });
	        }function v(e) {
	          for (var t, n, r, i = e.length, o = T.relative[e[0].type], a = o || T.relative[" "], s = o ? 1 : 0, u = d(function (e) {
	            return e === t;
	          }, a, !0), l = d(function (e) {
	            return ee(t, e) > -1;
	          }, a, !0), c = [function (e, n, r) {
	            var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));return t = null, i;
	          }]; s < i; s++) {
	            if (n = T.relative[e[s].type]) c = [d(h(c), n)];else {
	              if (n = T.filter[e[s].type].apply(null, e[s].matches), n[M]) {
	                for (r = ++s; r < i && !T.relative[e[r].type]; r++) {}return y(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ue, "$1"), n, s < r && v(e.slice(s, r)), r < i && v(e = e.slice(r)), r < i && p(e));
	              }c.push(n);
	            }
	          }return h(c);
	        }function x(e, n) {
	          var i = n.length > 0,
	              o = e.length > 0,
	              a = function a(r, _a2, s, u, l) {
	            var c,
	                f,
	                p,
	                d = 0,
	                h = "0",
	                g = r && [],
	                y = [],
	                v = j,
	                x = r || o && T.find.TAG("*", l),
	                b = W += null == v ? 1 : Math.random() || .1,
	                w = x.length;for (l && (j = _a2 !== L && _a2); h !== w && null != (c = x[h]); h++) {
	              if (o && c) {
	                for (f = 0; p = e[f++];) {
	                  if (p(c, _a2, s)) {
	                    u.push(c);break;
	                  }
	                }l && (W = b);
	              }i && ((c = !p && c) && d--, r && g.push(c));
	            }if (d += h, i && h !== d) {
	              for (f = 0; p = n[f++];) {
	                p(g, y, _a2, s);
	              }if (r) {
	                if (d > 0) for (; h--;) {
	                  g[h] || y[h] || (y[h] = Q.call(u));
	                }y = m(y);
	              }Z.apply(u, y), l && !r && y.length > 0 && d + n.length > 1 && t.uniqueSort(u);
	            }return l && (W = b, j = v), g;
	          };return i ? r(a) : a;
	        }var b,
	            w,
	            T,
	            C,
	            S,
	            k,
	            N,
	            E,
	            j,
	            A,
	            D,
	            P,
	            L,
	            H,
	            q,
	            F,
	            O,
	            R,
	            V,
	            M = "sizzle" + 1 * new Date(),
	            $ = e.document,
	            W = 0,
	            I = 0,
	            B = n(),
	            z = n(),
	            X = n(),
	            _ = function _(e, t) {
	          return e === t && (D = !0), 0;
	        },
	            U = 1 << 31,
	            Y = {}.hasOwnProperty,
	            G = [],
	            Q = G.pop,
	            J = G.push,
	            Z = G.push,
	            K = G.slice,
	            ee = function ee(e, t) {
	          for (var n = 0, r = e.length; n < r; n++) {
	            if (e[n] === t) return n;
	          }return -1;
	        },
	            te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	            ne = "[\\x20\\t\\r\\n\\f]",
	            re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	            ie = re.replace("w", "w#"),
	            oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
	            ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
	            se = new RegExp(ne + "+", "g"),
	            ue = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
	            le = new RegExp("^" + ne + "*," + ne + "*"),
	            ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
	            fe = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
	            pe = new RegExp(ae),
	            de = new RegExp("^" + ie + "$"),
	            he = { ID: new RegExp("^#(" + re + ")"), CLASS: new RegExp("^\\.(" + re + ")"), TAG: new RegExp("^(" + re.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ae), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"), bool: new RegExp("^(?:" + te + ")$", "i"), needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i") },
	            ge = /^(?:input|select|textarea|button)$/i,
	            me = /^h\d$/i,
	            ye = /^[^{]+\{\s*\[native \w/,
	            ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	            xe = /[+~]/,
	            be = /'|\\/g,
	            we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
	            Te = function Te(e, t, n) {
	          var r = "0x" + t - 65536;return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
	        },
	            Ce = function Ce() {
	          P();
	        };try {
	          Z.apply(G = K.call($.childNodes), $.childNodes), G[$.childNodes.length].nodeType;
	        } catch (Se) {
	          Z = { apply: G.length ? function (e, t) {
	              J.apply(e, K.call(t));
	            } : function (e, t) {
	              for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
	            } };
	        }w = t.support = {}, S = t.isXML = function (e) {
	          var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
	        }, P = t.setDocument = function (e) {
	          var t,
	              n,
	              r = e ? e.ownerDocument || e : $;return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Ce, !1) : n.attachEvent && n.attachEvent("onunload", Ce)), q = !S(r), w.attributes = i(function (e) {
	            return e.className = "i", !e.getAttribute("className");
	          }), w.getElementsByTagName = i(function (e) {
	            return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length;
	          }), w.getElementsByClassName = ye.test(r.getElementsByClassName), w.getById = i(function (e) {
	            return H.appendChild(e).id = M, !r.getElementsByName || !r.getElementsByName(M).length;
	          }), w.getById ? (T.find.ID = function (e, t) {
	            if ("undefined" != typeof t.getElementById && q) {
	              var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
	            }
	          }, T.filter.ID = function (e) {
	            var t = e.replace(we, Te);return function (e) {
	              return e.getAttribute("id") === t;
	            };
	          }) : (delete T.find.ID, T.filter.ID = function (e) {
	            var t = e.replace(we, Te);return function (e) {
	              var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");return n && n.value === t;
	            };
	          }), T.find.TAG = w.getElementsByTagName ? function (e, t) {
	            return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0;
	          } : function (e, t) {
	            var n,
	                r = [],
	                i = 0,
	                o = t.getElementsByTagName(e);if ("*" === e) {
	              for (; n = o[i++];) {
	                1 === n.nodeType && r.push(n);
	              }return r;
	            }return o;
	          }, T.find.CLASS = w.getElementsByClassName && function (e, t) {
	            if (q) return t.getElementsByClassName(e);
	          }, O = [], F = [], (w.qsa = ye.test(r.querySelectorAll)) && (i(function (e) {
	            H.appendChild(e).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + M + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + M + "+*").length || F.push(".#.+[+~]");
	          }), i(function (e) {
	            var t = r.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:");
	          })), (w.matchesSelector = ye.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function (e) {
	            w.disconnectedMatch = R.call(e, "div"), R.call(e, "[s!='']:x"), O.push("!=", ae);
	          }), F = F.length && new RegExp(F.join("|")), O = O.length && new RegExp(O.join("|")), t = ye.test(H.compareDocumentPosition), V = t || ye.test(H.contains) ? function (e, t) {
	            var n = 9 === e.nodeType ? e.documentElement : e,
	                r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
	          } : function (e, t) {
	            if (t) for (; t = t.parentNode;) {
	              if (t === e) return !0;
	            }return !1;
	          }, _ = t ? function (e, t) {
	            if (e === t) return D = !0, 0;var n = !e.compareDocumentPosition - !t.compareDocumentPosition;return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === $ && V($, e) ? -1 : t === r || t.ownerDocument === $ && V($, t) ? 1 : A ? ee(A, e) - ee(A, t) : 0 : 4 & n ? -1 : 1);
	          } : function (e, t) {
	            if (e === t) return D = !0, 0;var n,
	                i = 0,
	                o = e.parentNode,
	                s = t.parentNode,
	                u = [e],
	                l = [t];if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : A ? ee(A, e) - ee(A, t) : 0;if (o === s) return a(e, t);for (n = e; n = n.parentNode;) {
	              u.unshift(n);
	            }for (n = t; n = n.parentNode;) {
	              l.unshift(n);
	            }for (; u[i] === l[i];) {
	              i++;
	            }return i ? a(u[i], l[i]) : u[i] === $ ? -1 : l[i] === $ ? 1 : 0;
	          }, r) : L;
	        }, t.matches = function (e, n) {
	          return t(e, null, null, n);
	        }, t.matchesSelector = function (e, n) {
	          if ((e.ownerDocument || e) !== L && P(e), n = n.replace(fe, "='$1']"), w.matchesSelector && q && (!O || !O.test(n)) && (!F || !F.test(n))) try {
	            var r = R.call(e, n);if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
	          } catch (i) {}return t(n, L, null, [e]).length > 0;
	        }, t.contains = function (e, t) {
	          return (e.ownerDocument || e) !== L && P(e), V(e, t);
	        }, t.attr = function (e, t) {
	          (e.ownerDocument || e) !== L && P(e);var n = T.attrHandle[t.toLowerCase()],
	              r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !q) : void 0;return void 0 !== r ? r : w.attributes || !q ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
	        }, t.error = function (e) {
	          throw new Error("Syntax error, unrecognized expression: " + e);
	        }, t.uniqueSort = function (e) {
	          var t,
	              n = [],
	              r = 0,
	              i = 0;if (D = !w.detectDuplicates, A = !w.sortStable && e.slice(0), e.sort(_), D) {
	            for (; t = e[i++];) {
	              t === e[i] && (r = n.push(i));
	            }for (; r--;) {
	              e.splice(n[r], 1);
	            }
	          }return A = null, e;
	        }, C = t.getText = function (e) {
	          var t,
	              n = "",
	              r = 0,
	              i = e.nodeType;if (i) {
	            if (1 === i || 9 === i || 11 === i) {
	              if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
	                n += C(e);
	              }
	            } else if (3 === i || 4 === i) return e.nodeValue;
	          } else for (; t = e[r++];) {
	            n += C(t);
	          }return n;
	        }, T = t.selectors = { cacheLength: 50, createPseudo: r, match: he, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
	              return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
	            }, CHILD: function CHILD(e) {
	              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
	            }, PSEUDO: function PSEUDO(e) {
	              var t,
	                  n = !e[6] && e[2];return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
	            } }, filter: { TAG: function TAG(e) {
	              var t = e.replace(we, Te).toLowerCase();return "*" === e ? function () {
	                return !0;
	              } : function (e) {
	                return e.nodeName && e.nodeName.toLowerCase() === t;
	              };
	            }, CLASS: function CLASS(e) {
	              var t = B[e + " "];return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && B(e, function (e) {
	                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
	              });
	            }, ATTR: function ATTR(e, n, r) {
	              return function (i) {
	                var o = t.attr(i, e);return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
	              };
	            }, CHILD: function CHILD(e, t, n, r, i) {
	              var o = "nth" !== e.slice(0, 3),
	                  a = "last" !== e.slice(-4),
	                  s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
	                return !!e.parentNode;
	              } : function (t, n, u) {
	                var l,
	                    c,
	                    f,
	                    p,
	                    d,
	                    h,
	                    g = o !== a ? "nextSibling" : "previousSibling",
	                    m = t.parentNode,
	                    y = s && t.nodeName.toLowerCase(),
	                    v = !u && !s;if (m) {
	                  if (o) {
	                    for (; g;) {
	                      for (f = t; f = f[g];) {
	                        if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType) return !1;
	                      }h = g = "only" === e && !h && "nextSibling";
	                    }return !0;
	                  }if (h = [a ? m.firstChild : m.lastChild], a && v) {
	                    for (c = m[M] || (m[M] = {}), l = c[e] || [], d = l[0] === W && l[1], p = l[0] === W && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) {
	                      if (1 === f.nodeType && ++p && f === t) {
	                        c[e] = [W, d, p];break;
	                      }
	                    }
	                  } else if (v && (l = (t[M] || (t[M] = {}))[e]) && l[0] === W) p = l[1];else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[M] || (f[M] = {}))[e] = [W, p]), f !== t));) {}return p -= i, p === r || p % r === 0 && p / r >= 0;
	                }
	              };
	            }, PSEUDO: function PSEUDO(e, n) {
	              var i,
	                  o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return o[M] ? o(n) : o.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
	                for (var r, i = o(e, n), a = i.length; a--;) {
	                  r = ee(e, i[a]), e[r] = !(t[r] = i[a]);
	                }
	              }) : function (e) {
	                return o(e, 0, i);
	              }) : o;
	            } }, pseudos: { not: r(function (e) {
	              var t = [],
	                  n = [],
	                  i = N(e.replace(ue, "$1"));return i[M] ? r(function (e, t, n, r) {
	                for (var o, a = i(e, null, r, []), s = e.length; s--;) {
	                  (o = a[s]) && (e[s] = !(t[s] = o));
	                }
	              }) : function (e, r, o) {
	                return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
	              };
	            }), has: r(function (e) {
	              return function (n) {
	                return t(e, n).length > 0;
	              };
	            }), contains: r(function (e) {
	              return e = e.replace(we, Te), function (t) {
	                return (t.textContent || t.innerText || C(t)).indexOf(e) > -1;
	              };
	            }), lang: r(function (e) {
	              return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(), function (t) {
	                var n;do {
	                  if (n = q ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
	                } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
	              };
	            }), target: function target(t) {
	              var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
	            }, root: function root(e) {
	              return e === H;
	            }, focus: function focus(e) {
	              return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
	            }, enabled: function enabled(e) {
	              return e.disabled === !1;
	            }, disabled: function disabled(e) {
	              return e.disabled === !0;
	            }, checked: function checked(e) {
	              var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
	            }, selected: function selected(e) {
	              return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
	            }, empty: function empty(e) {
	              for (e = e.firstChild; e; e = e.nextSibling) {
	                if (e.nodeType < 6) return !1;
	              }return !0;
	            }, parent: function parent(e) {
	              return !T.pseudos.empty(e);
	            }, header: function header(e) {
	              return me.test(e.nodeName);
	            }, input: function input(e) {
	              return ge.test(e.nodeName);
	            }, button: function button(e) {
	              var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
	            }, text: function text(e) {
	              var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
	            }, first: l(function () {
	              return [0];
	            }), last: l(function (e, t) {
	              return [t - 1];
	            }), eq: l(function (e, t, n) {
	              return [n < 0 ? n + t : n];
	            }), even: l(function (e, t) {
	              for (var n = 0; n < t; n += 2) {
	                e.push(n);
	              }return e;
	            }), odd: l(function (e, t) {
	              for (var n = 1; n < t; n += 2) {
	                e.push(n);
	              }return e;
	            }), lt: l(function (e, t, n) {
	              for (var r = n < 0 ? n + t : n; --r >= 0;) {
	                e.push(r);
	              }return e;
	            }), gt: l(function (e, t, n) {
	              for (var r = n < 0 ? n + t : n; ++r < t;) {
	                e.push(r);
	              }return e;
	            }) } }, T.pseudos.nth = T.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
	          T.pseudos[b] = s(b);
	        }for (b in { submit: !0, reset: !0 }) {
	          T.pseudos[b] = u(b);
	        }return f.prototype = T.filters = T.pseudos, T.setFilters = new f(), k = t.tokenize = function (e, n) {
	          var r,
	              i,
	              o,
	              a,
	              s,
	              u,
	              l,
	              c = z[e + " "];if (c) return n ? 0 : c.slice(0);for (s = e, u = [], l = T.preFilter; s;) {
	            r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(ue, " ") }), s = s.slice(r.length));for (a in T.filter) {
	              !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));
	            }if (!r) break;
	          }return n ? s.length : s ? t.error(e) : z(e, u).slice(0);
	        }, N = t.compile = function (e, t) {
	          var n,
	              r = [],
	              i = [],
	              o = X[e + " "];if (!o) {
	            for (t || (t = k(e)), n = t.length; n--;) {
	              o = v(t[n]), o[M] ? r.push(o) : i.push(o);
	            }o = X(e, x(i, r)), o.selector = e;
	          }return o;
	        }, E = t.select = function (e, t, n, r) {
	          var i,
	              o,
	              a,
	              s,
	              u,
	              l = "function" == typeof e && e,
	              f = !r && k(e = l.selector || e);if (n = n || [], 1 === f.length) {
	            if (o = f[0] = f[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && q && T.relative[o[1].type]) {
	              if (t = (T.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;l && (t = t.parentNode), e = e.slice(o.shift().value.length);
	            }for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !T.relative[s = a.type]);) {
	              if ((u = T.find[s]) && (r = u(a.matches[0].replace(we, Te), xe.test(o[0].type) && c(t.parentNode) || t))) {
	                if (o.splice(i, 1), e = r.length && p(o), !e) return Z.apply(n, r), n;break;
	              }
	            }
	          }return (l || N(e, f))(r, t, !q, n, xe.test(e) && c(t.parentNode) || t), n;
	        }, w.sortStable = M.split("").sort(_).join("") === M, w.detectDuplicates = !!D, P(), w.sortDetached = i(function (e) {
	          return 1 & e.compareDocumentPosition(L.createElement("div"));
	        }), i(function (e) {
	          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
	        }) || o("type|href|height|width", function (e, t, n) {
	          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
	        }), w.attributes && i(function (e) {
	          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
	        }) || o("value", function (e, t, n) {
	          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
	        }), i(function (e) {
	          return null == e.getAttribute("disabled");
	        }) || o(te, function (e, t, n) {
	          var r;if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
	        }), t;
	      }(o);ie.find = le, ie.expr = le.selectors, ie.expr[":"] = ie.expr.pseudos, ie.unique = le.uniqueSort, ie.text = le.getText, ie.isXMLDoc = le.isXML, ie.contains = le.contains;var ce = ie.expr.match.needsContext,
	          fe = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	          pe = /^.[^:#\[\.,]*$/;ie.filter = function (e, t, n) {
	        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ie.find.matchesSelector(r, e) ? [r] : [] : ie.find.matches(e, ie.grep(t, function (e) {
	          return 1 === e.nodeType;
	        }));
	      }, ie.fn.extend({ find: function find(e) {
	          var t,
	              n = this.length,
	              r = [],
	              i = this;if ("string" != typeof e) return this.pushStack(ie(e).filter(function () {
	            for (t = 0; t < n; t++) {
	              if (ie.contains(i[t], this)) return !0;
	            }
	          }));for (t = 0; t < n; t++) {
	            ie.find(e, i[t], r);
	          }return r = this.pushStack(n > 1 ? ie.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r;
	        }, filter: function filter(e) {
	          return this.pushStack(u(this, e || [], !1));
	        }, not: function not(e) {
	          return this.pushStack(u(this, e || [], !0));
	        }, is: function is(e) {
	          return !!u(this, "string" == typeof e && ce.test(e) ? ie(e) : e || [], !1).length;
	        } });var de,
	          he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	          ge = ie.fn.init = function (e, t) {
	        var n, r;if (!e) return this;if ("string" == typeof e) {
	          if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || de).find(e) : this.constructor(t).find(e);if (n[1]) {
	            if (t = t instanceof ie ? t[0] : t, ie.merge(this, ie.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), fe.test(n[1]) && ie.isPlainObject(t)) for (n in t) {
	              ie.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
	            }return this;
	          }return r = ne.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = ne, this.selector = e, this;
	        }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ie.isFunction(e) ? "undefined" != typeof de.ready ? de.ready(e) : e(ie) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ie.makeArray(e, this));
	      };ge.prototype = ie.fn, de = ie(ne);var me = /^(?:parents|prev(?:Until|All))/,
	          ye = { children: !0, contents: !0, next: !0, prev: !0 };ie.extend({ dir: function dir(e, t, n) {
	          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
	            if (1 === e.nodeType) {
	              if (i && ie(e).is(n)) break;r.push(e);
	            }
	          }return r;
	        }, sibling: function sibling(e, t) {
	          for (var n = []; e; e = e.nextSibling) {
	            1 === e.nodeType && e !== t && n.push(e);
	          }return n;
	        } }), ie.fn.extend({ has: function has(e) {
	          var t = ie(e, this),
	              n = t.length;return this.filter(function () {
	            for (var e = 0; e < n; e++) {
	              if (ie.contains(this, t[e])) return !0;
	            }
	          });
	        }, closest: function closest(e, t) {
	          for (var n, r = 0, i = this.length, o = [], a = ce.test(e) || "string" != typeof e ? ie(e, t || this.context) : 0; r < i; r++) {
	            for (n = this[r]; n && n !== t; n = n.parentNode) {
	              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ie.find.matchesSelector(n, e))) {
	                o.push(n);break;
	              }
	            }
	          }return this.pushStack(o.length > 1 ? ie.unique(o) : o);
	        }, index: function index(e) {
	          return e ? "string" == typeof e ? J.call(ie(e), this[0]) : J.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
	        }, add: function add(e, t) {
	          return this.pushStack(ie.unique(ie.merge(this.get(), ie(e, t))));
	        }, addBack: function addBack(e) {
	          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
	        } }), ie.each({ parent: function Xt(e) {
	          var Xt = e.parentNode;return Xt && 11 !== Xt.nodeType ? Xt : null;
	        }, parents: function parents(e) {
	          return ie.dir(e, "parentNode");
	        }, parentsUntil: function parentsUntil(e, t, n) {
	          return ie.dir(e, "parentNode", n);
	        }, next: function next(e) {
	          return l(e, "nextSibling");
	        }, prev: function prev(e) {
	          return l(e, "previousSibling");
	        }, nextAll: function nextAll(e) {
	          return ie.dir(e, "nextSibling");
	        }, prevAll: function prevAll(e) {
	          return ie.dir(e, "previousSibling");
	        }, nextUntil: function nextUntil(e, t, n) {
	          return ie.dir(e, "nextSibling", n);
	        }, prevUntil: function prevUntil(e, t, n) {
	          return ie.dir(e, "previousSibling", n);
	        }, siblings: function siblings(e) {
	          return ie.sibling((e.parentNode || {}).firstChild, e);
	        }, children: function children(e) {
	          return ie.sibling(e.firstChild);
	        }, contents: function contents(e) {
	          return e.contentDocument || ie.merge([], e.childNodes);
	        } }, function (e, t) {
	        ie.fn[e] = function (n, r) {
	          var i = ie.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ie.filter(r, i)), this.length > 1 && (ye[e] || ie.unique(i), me.test(e) && i.reverse()), this.pushStack(i);
	        };
	      });var ve = /\S+/g,
	          xe = {};ie.Callbacks = function (e) {
	        e = "string" == typeof e ? xe[e] || c(e) : ie.extend({}, e);var t,
	            n,
	            r,
	            i,
	            o,
	            a,
	            s = [],
	            u = !e.once && [],
	            l = function p(l) {
	          for (t = e.memory && l, n = !0, a = i || 0, i = 0, o = s.length, r = !0; s && a < o; a++) {
	            if (s[a].apply(l[0], l[1]) === !1 && e.stopOnFalse) {
	              t = !1;break;
	            }
	          }r = !1, s && (u ? u.length && p(u.shift()) : t ? s = [] : f.disable());
	        },
	            f = { add: function add() {
	            if (s) {
	              var n = s.length;!function a(t) {
	                ie.each(t, function (t, n) {
	                  var r = ie.type(n);"function" === r ? e.unique && f.has(n) || s.push(n) : n && n.length && "string" !== r && a(n);
	                });
	              }(arguments), r ? o = s.length : t && (i = n, l(t));
	            }return this;
	          }, remove: function remove() {
	            return s && ie.each(arguments, function (e, t) {
	              for (var n; (n = ie.inArray(t, s, n)) > -1;) {
	                s.splice(n, 1), r && (n <= o && o--, n <= a && a--);
	              }
	            }), this;
	          }, has: function has(e) {
	            return e ? ie.inArray(e, s) > -1 : !(!s || !s.length);
	          }, empty: function empty() {
	            return s = [], o = 0, this;
	          }, disable: function disable() {
	            return s = u = t = void 0, this;
	          }, disabled: function disabled() {
	            return !s;
	          }, lock: function lock() {
	            return u = void 0, t || f.disable(), this;
	          }, locked: function locked() {
	            return !u;
	          }, fireWith: function fireWith(e, t) {
	            return !s || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : l(t)), this;
	          }, fire: function fire() {
	            return f.fireWith(this, arguments), this;
	          }, fired: function fired() {
	            return !!n;
	          } };return f;
	      }, ie.extend({ Deferred: function Deferred(e) {
	          var t = [["resolve", "done", ie.Callbacks("once memory"), "resolved"], ["reject", "fail", ie.Callbacks("once memory"), "rejected"], ["notify", "progress", ie.Callbacks("memory")]],
	              n = "pending",
	              r = { state: function state() {
	              return n;
	            }, always: function always() {
	              return i.done(arguments).fail(arguments), this;
	            }, then: function then() {
	              var e = arguments;return ie.Deferred(function (n) {
	                ie.each(t, function (t, o) {
	                  var a = ie.isFunction(e[t]) && e[t];i[o[1]](function () {
	                    var e = a && a.apply(this, arguments);e && ie.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
	                  });
	                }), e = null;
	              }).promise();
	            }, promise: function promise(e) {
	              return null != e ? ie.extend(e, r) : r;
	            } },
	              i = {};return r.pipe = r.then, ie.each(t, function (e, o) {
	            var a = o[2],
	                s = o[3];r[o[1]] = a.add, s && a.add(function () {
	              n = s;
	            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
	              return i[o[0] + "With"](this === i ? r : this, arguments), this;
	            }, i[o[0] + "With"] = a.fireWith;
	          }), r.promise(i), e && e.call(i, i), i;
	        }, when: function when(e) {
	          var t,
	              n,
	              r,
	              i = 0,
	              o = Y.call(arguments),
	              a = o.length,
	              s = 1 !== a || e && ie.isFunction(e.promise) ? a : 0,
	              u = 1 === s ? e : ie.Deferred(),
	              l = function l(e, n, r) {
	            return function (i) {
	              n[e] = this, r[e] = arguments.length > 1 ? Y.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
	            };
	          };if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) {
	            o[i] && ie.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
	          }return s || u.resolveWith(r, o), u.promise();
	        } });var be;ie.fn.ready = function (e) {
	        return ie.ready.promise().done(e), this;
	      }, ie.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
	          e ? ie.readyWait++ : ie.ready(!0);
	        }, ready: function ready(e) {
	          (e === !0 ? --ie.readyWait : ie.isReady) || (ie.isReady = !0, e !== !0 && --ie.readyWait > 0 || (be.resolveWith(ne, [ie]), ie.fn.triggerHandler && (ie(ne).triggerHandler("ready"), ie(ne).off("ready"))));
	        } }), ie.ready.promise = function (e) {
	        return be || (be = ie.Deferred(), "complete" === ne.readyState ? setTimeout(ie.ready) : (ne.addEventListener("DOMContentLoaded", f, !1), o.addEventListener("load", f, !1))), be.promise(e);
	      }, ie.ready.promise();var we = ie.access = function (e, t, n, r, i, o, a) {
	        var s = 0,
	            u = e.length,
	            l = null == n;if ("object" === ie.type(n)) {
	          i = !0;for (s in n) {
	            ie.access(e, t, s, n[s], !0, o, a);
	          }
	        } else if (void 0 !== r && (i = !0, ie.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function t(e, _t4, n) {
	          return l.call(ie(e), n);
	        })), t)) for (; s < u; s++) {
	          t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
	        }return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
	      };ie.acceptData = function (e) {
	        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
	      }, p.uid = 1, p.accepts = ie.acceptData, p.prototype = { key: function key(e) {
	          if (!p.accepts(e)) return 0;var t = {},
	              n = e[this.expando];if (!n) {
	            n = p.uid++;try {
	              t[this.expando] = { value: n }, Object.defineProperties(e, t);
	            } catch (r) {
	              t[this.expando] = n, ie.extend(e, t);
	            }
	          }return this.cache[n] || (this.cache[n] = {}), n;
	        }, set: function set(e, t, n) {
	          var r,
	              i = this.key(e),
	              o = this.cache[i];if ("string" == typeof t) o[t] = n;else if (ie.isEmptyObject(o)) ie.extend(this.cache[i], t);else for (r in t) {
	            o[r] = t[r];
	          }return o;
	        }, get: function get(e, t) {
	          var n = this.cache[this.key(e)];return void 0 === t ? n : n[t];
	        }, access: function access(e, t, n) {
	          var r;return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, ie.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t);
	        }, remove: function remove(e, t) {
	          var n,
	              r,
	              i,
	              o = this.key(e),
	              a = this.cache[o];if (void 0 === t) this.cache[o] = {};else {
	            ie.isArray(t) ? r = t.concat(t.map(ie.camelCase)) : (i = ie.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(ve) || [])), n = r.length;for (; n--;) {
	              delete a[r[n]];
	            }
	          }
	        }, hasData: function hasData(e) {
	          return !ie.isEmptyObject(this.cache[e[this.expando]] || {});
	        }, discard: function discard(e) {
	          e[this.expando] && delete this.cache[e[this.expando]];
	        } };var Te = new p(),
	          Ce = new p(),
	          Se = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	          ke = /([A-Z])/g;ie.extend({ hasData: function hasData(e) {
	          return Ce.hasData(e) || Te.hasData(e);
	        }, data: function data(e, t, n) {
	          return Ce.access(e, t, n);
	        }, removeData: function removeData(e, t) {
	          Ce.remove(e, t);
	        }, _data: function _data(e, t, n) {
	          return Te.access(e, t, n);
	        }, _removeData: function _removeData(e, t) {
	          Te.remove(e, t);
	        } }), ie.fn.extend({ data: function _t(e, t) {
	          var r,
	              i,
	              _t,
	              o = this[0],
	              a = o && o.attributes;if (void 0 === e) {
	            if (this.length && (_t = Ce.get(o), 1 === o.nodeType && !Te.get(o, "hasDataAttrs"))) {
	              for (r = a.length; r--;) {
	                a[r] && (i = a[r].name, 0 === i.indexOf("data-") && (i = ie.camelCase(i.slice(5)), d(o, i, _t[i])));
	              }Te.set(o, "hasDataAttrs", !0);
	            }return _t;
	          }return "object" === ("undefined" == typeof e ? "undefined" : n(e)) ? this.each(function () {
	            Ce.set(this, e);
	          }) : we(this, function (t) {
	            var n,
	                r = ie.camelCase(e);if (o && void 0 === t) {
	              if (n = Ce.get(o, e), void 0 !== n) return n;if (n = Ce.get(o, r), void 0 !== n) return n;if (n = d(o, r, void 0), void 0 !== n) return n;
	            } else this.each(function () {
	              var n = Ce.get(this, r);Ce.set(this, r, t), e.indexOf("-") !== -1 && void 0 !== n && Ce.set(this, e, t);
	            });
	          }, null, t, arguments.length > 1, null, !0);
	        }, removeData: function removeData(e) {
	          return this.each(function () {
	            Ce.remove(this, e);
	          });
	        } }), ie.extend({ queue: function Ut(e, t, n) {
	          var Ut;if (e) return t = (t || "fx") + "queue", Ut = Te.get(e, t), n && (!Ut || ie.isArray(n) ? Ut = Te.access(e, t, ie.makeArray(n)) : Ut.push(n)), Ut || [];
	        }, dequeue: function dequeue(e, t) {
	          t = t || "fx";var n = ie.queue(e, t),
	              r = n.length,
	              i = n.shift(),
	              o = ie._queueHooks(e, t),
	              a = function a() {
	            ie.dequeue(e, t);
	          };"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
	        }, _queueHooks: function _queueHooks(e, t) {
	          var n = t + "queueHooks";return Te.get(e, n) || Te.access(e, n, { empty: ie.Callbacks("once memory").add(function () {
	              Te.remove(e, [t + "queue", n]);
	            }) });
	        } }), ie.fn.extend({ queue: function queue(e, t) {
	          var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ie.queue(this[0], e) : void 0 === t ? this : this.each(function () {
	            var n = ie.queue(this, e, t);ie._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ie.dequeue(this, e);
	          });
	        }, dequeue: function dequeue(e) {
	          return this.each(function () {
	            ie.dequeue(this, e);
	          });
	        }, clearQueue: function clearQueue(e) {
	          return this.queue(e || "fx", []);
	        }, promise: function promise(e, t) {
	          var n,
	              r = 1,
	              i = ie.Deferred(),
	              o = this,
	              a = this.length,
	              s = function s() {
	            --r || i.resolveWith(o, [o]);
	          };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
	            n = Te.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
	          }return s(), i.promise(t);
	        } });var Ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	          Ee = ["Top", "Right", "Bottom", "Left"],
	          je = function je(e, t) {
	        return e = t || e, "none" === ie.css(e, "display") || !ie.contains(e.ownerDocument, e);
	      },
	          Ae = /^(?:checkbox|radio)$/i;!function () {
	        var e = ne.createDocumentFragment(),
	            t = e.appendChild(ne.createElement("div")),
	            n = ne.createElement("input");n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), te.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", te.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
	      }();var De = "undefined";te.focusinBubbles = "onfocusin" in o;var Pe = /^key/,
	          Le = /^(?:mouse|pointer|contextmenu)|click/,
	          He = /^(?:focusinfocus|focusoutblur)$/,
	          qe = /^([^.]*)(?:\.(.+)|)$/;ie.event = { global: {}, add: function add(e, t, r, i, o) {
	          var a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p,
	              d,
	              h,
	              g,
	              m,
	              y = Te.get(e);if (y) for (r.handler && (a = r, r = a.handler, o = a.selector), r.guid || (r.guid = ie.guid++), (l = y.events) || (l = y.events = {}), (s = y.handle) || (s = y.handle = function (t) {
	            return ("undefined" == typeof ie ? "undefined" : n(ie)) !== De && ie.event.triggered !== t.type ? ie.event.dispatch.apply(e, arguments) : void 0;
	          }), t = (t || "").match(ve) || [""], c = t.length; c--;) {
	            u = qe.exec(t[c]) || [], h = m = u[1], g = (u[2] || "").split(".").sort(), h && (p = ie.event.special[h] || {}, h = (o ? p.delegateType : p.bindType) || h, p = ie.event.special[h] || {}, f = ie.extend({ type: h, origType: m, data: i, handler: r, guid: r.guid, selector: o, needsContext: o && ie.expr.match.needsContext.test(o), namespace: g.join(".") }, a), (d = l[h]) || (d = l[h] = [], d.delegateCount = 0, p.setup && p.setup.call(e, i, g, s) !== !1 || e.addEventListener && e.addEventListener(h, s, !1)), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, f) : d.push(f), ie.event.global[h] = !0);
	          }
	        }, remove: function remove(e, t, n, r, i) {
	          var o,
	              a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p,
	              d,
	              h,
	              g,
	              m = Te.hasData(e) && Te.get(e);if (m && (u = m.events)) {
	            for (t = (t || "").match(ve) || [""], l = t.length; l--;) {
	              if (s = qe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
	                for (f = ie.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
	                  c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
	                }a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ie.removeEvent(e, d, m.handle), delete u[d]);
	              } else for (d in u) {
	                ie.event.remove(e, d + t[l], n, r, !0);
	              }
	            }ie.isEmptyObject(u) && (delete m.handle, Te.remove(e, "events"));
	          }
	        }, trigger: function trigger(e, t, r, i) {
	          var a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p,
	              d = [r || ne],
	              h = ee.call(e, "type") ? e.type : e,
	              g = ee.call(e, "namespace") ? e.namespace.split(".") : [];if (s = u = r = r || ne, 3 !== r.nodeType && 8 !== r.nodeType && !He.test(h + ie.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[ie.expando] ? e : new ie.Event(h, "object" === ("undefined" == typeof e ? "undefined" : n(e)) && e), e.isTrigger = i ? 2 : 3, e.namespace = g.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = r), t = null == t ? [e] : ie.makeArray(t, [e]), p = ie.event.special[h] || {}, i || !p.trigger || p.trigger.apply(r, t) !== !1)) {
	            if (!i && !p.noBubble && !ie.isWindow(r)) {
	              for (l = p.delegateType || h, He.test(l + h) || (s = s.parentNode); s; s = s.parentNode) {
	                d.push(s), u = s;
	              }u === (r.ownerDocument || ne) && d.push(u.defaultView || u.parentWindow || o);
	            }for (a = 0; (s = d[a++]) && !e.isPropagationStopped();) {
	              e.type = a > 1 ? l : p.bindType || h, f = (Te.get(s, "events") || {})[e.type] && Te.get(s, "handle"), f && f.apply(s, t), f = c && s[c], f && f.apply && ie.acceptData(s) && (e.result = f.apply(s, t), e.result === !1 && e.preventDefault());
	            }return e.type = h, i || e.isDefaultPrevented() || p._default && p._default.apply(d.pop(), t) !== !1 || !ie.acceptData(r) || c && ie.isFunction(r[h]) && !ie.isWindow(r) && (u = r[c], u && (r[c] = null), ie.event.triggered = h, r[h](), ie.event.triggered = void 0, u && (r[c] = u)), e.result;
	          }
	        }, dispatch: function dispatch(e) {
	          e = ie.event.fix(e);var t,
	              n,
	              r,
	              i,
	              o,
	              a = [],
	              s = Y.call(arguments),
	              u = (Te.get(this, "events") || {})[e.type] || [],
	              l = ie.event.special[e.type] || {};if (s[0] = e, e.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
	            for (a = ie.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();) {
	              for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) {
	                e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, r = ((ie.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
	              }
	            }return l.postDispatch && l.postDispatch.call(this, e), e.result;
	          }
	        }, handlers: function handlers(e, t) {
	          var n,
	              r,
	              i,
	              o,
	              a = [],
	              s = t.delegateCount,
	              u = e.target;if (s && u.nodeType && (!e.button || "click" !== e.type)) for (; u !== this; u = u.parentNode || this) {
	            if (u.disabled !== !0 || "click" !== e.type) {
	              for (r = [], n = 0; n < s; n++) {
	                o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ie(i, this).index(u) >= 0 : ie.find(i, this, null, [u]).length), r[i] && r.push(o);
	              }r.length && a.push({ elem: u, handlers: r });
	            }
	          }return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
	        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
	            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
	          } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
	            var n,
	                r,
	                i,
	                o = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || ne, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
	          } }, fix: function fix(e) {
	          if (e[ie.expando]) return e;var t,
	              n,
	              r,
	              i = e.type,
	              o = e,
	              a = this.fixHooks[i];for (a || (this.fixHooks[i] = a = Le.test(i) ? this.mouseHooks : Pe.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ie.Event(o), t = r.length; t--;) {
	            n = r[t], e[n] = o[n];
	          }return e.target || (e.target = ne), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
	        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
	              if (this !== m() && this.focus) return this.focus(), !1;
	            }, delegateType: "focusin" }, blur: { trigger: function trigger() {
	              if (this === m() && this.blur) return this.blur(), !1;
	            }, delegateType: "focusout" }, click: { trigger: function trigger() {
	              if ("checkbox" === this.type && this.click && ie.nodeName(this, "input")) return this.click(), !1;
	            }, _default: function _default(e) {
	              return ie.nodeName(e.target, "a");
	            } }, beforeunload: { postDispatch: function postDispatch(e) {
	              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
	            } } }, simulate: function simulate(e, t, n, r) {
	          var i = ie.extend(new ie.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? ie.event.trigger(i, null, t) : ie.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
	        } }, ie.removeEvent = function (e, t, n) {
	        e.removeEventListener && e.removeEventListener(t, n, !1);
	      }, ie.Event = function (e, t) {
	        return this instanceof ie.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? h : g) : this.type = e, t && ie.extend(this, t), this.timeStamp = e && e.timeStamp || ie.now(), void (this[ie.expando] = !0)) : new ie.Event(e, t);
	      }, ie.Event.prototype = { isDefaultPrevented: g, isPropagationStopped: g, isImmediatePropagationStopped: g, preventDefault: function preventDefault() {
	          var e = this.originalEvent;this.isDefaultPrevented = h, e && e.preventDefault && e.preventDefault();
	        }, stopPropagation: function stopPropagation() {
	          var e = this.originalEvent;this.isPropagationStopped = h, e && e.stopPropagation && e.stopPropagation();
	        }, stopImmediatePropagation: function stopImmediatePropagation() {
	          var e = this.originalEvent;this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
	        } }, ie.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
	        ie.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
	            var n,
	                r = this,
	                i = e.relatedTarget,
	                o = e.handleObj;return i && (i === r || ie.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
	          } };
	      }), te.focusinBubbles || ie.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
	        var n = function n(e) {
	          ie.event.simulate(t, e.target, ie.event.fix(e), !0);
	        };ie.event.special[t] = { setup: function setup() {
	            var r = this.ownerDocument || this,
	                i = Te.access(r, t);i || r.addEventListener(e, n, !0), Te.access(r, t, (i || 0) + 1);
	          }, teardown: function teardown() {
	            var r = this.ownerDocument || this,
	                i = Te.access(r, t) - 1;i ? Te.access(r, t, i) : (r.removeEventListener(e, n, !0), Te.remove(r, t));
	          } };
	      }), ie.fn.extend({ on: function on(e, t, r, i, o) {
	          var a, s;if ("object" === ("undefined" == typeof e ? "undefined" : n(e))) {
	            "string" != typeof t && (r = r || t, t = void 0);for (s in e) {
	              this.on(s, t, r, e[s], o);
	            }return this;
	          }if (null == r && null == i ? (i = t, r = t = void 0) : null == i && ("string" == typeof t ? (i = r, r = void 0) : (i = r, r = t, t = void 0)), i === !1) i = g;else if (!i) return this;return 1 === o && (a = i, i = function i(e) {
	            return ie().off(e), a.apply(this, arguments);
	          }, i.guid = a.guid || (a.guid = ie.guid++)), this.each(function () {
	            ie.event.add(this, e, i, r, t);
	          });
	        }, one: function one(e, t, n, r) {
	          return this.on(e, t, n, r, 1);
	        }, off: function off(e, t, r) {
	          var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ie(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" === ("undefined" == typeof e ? "undefined" : n(e))) {
	            for (o in e) {
	              this.off(o, t, e[o]);
	            }return this;
	          }return t !== !1 && "function" != typeof t || (r = t, t = void 0), r === !1 && (r = g), this.each(function () {
	            ie.event.remove(this, e, r, t);
	          });
	        }, trigger: function trigger(e, t) {
	          return this.each(function () {
	            ie.event.trigger(e, t, this);
	          });
	        }, triggerHandler: function triggerHandler(e, t) {
	          var n = this[0];if (n) return ie.event.trigger(e, t, n, !0);
	        } });var Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	          Oe = /<([\w:]+)/,
	          Re = /<|&#?\w+;/,
	          Ve = /<(?:script|style|link)/i,
	          Me = /checked\s*(?:[^=]|=\s*.checked.)/i,
	          $e = /^$|\/(?:java|ecma)script/i,
	          We = /^true\/(.*)/,
	          Ie = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	          Be = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td, ie.extend({ clone: function Yt(e, t, n) {
	          var r,
	              i,
	              o,
	              a,
	              Yt = e.cloneNode(!0),
	              s = ie.contains(e.ownerDocument, e);if (!(te.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ie.isXMLDoc(e))) for (a = T(Yt), o = T(e), r = 0, i = o.length; r < i; r++) {
	            C(o[r], a[r]);
	          }if (t) if (n) for (o = o || T(e), a = a || T(Yt), r = 0, i = o.length; r < i; r++) {
	            w(o[r], a[r]);
	          } else w(e, Yt);return a = T(Yt, "script"), a.length > 0 && b(a, !s && T(e, "script")), Yt;
	        }, buildFragment: function buildFragment(e, t, n, r) {
	          for (var i, o, a, s, u, l, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++) {
	            if (i = e[p], i || 0 === i) if ("object" === ie.type(i)) ie.merge(f, i.nodeType ? [i] : i);else if (Re.test(i)) {
	              for (o = o || c.appendChild(t.createElement("div")), a = (Oe.exec(i) || ["", ""])[1].toLowerCase(), s = Be[a] || Be._default, o.innerHTML = s[1] + i.replace(Fe, "<$1></$2>") + s[2], l = s[0]; l--;) {
	                o = o.lastChild;
	              }ie.merge(f, o.childNodes), o = c.firstChild, o.textContent = "";
	            } else f.push(t.createTextNode(i));
	          }for (c.textContent = "", p = 0; i = f[p++];) {
	            if ((!r || ie.inArray(i, r) === -1) && (u = ie.contains(i.ownerDocument, i), o = T(c.appendChild(i), "script"), u && b(o), n)) for (l = 0; i = o[l++];) {
	              $e.test(i.type || "") && n.push(i);
	            }
	          }return c;
	        }, cleanData: function cleanData(e) {
	          for (var t, n, r, i, o = ie.event.special, a = 0; void 0 !== (n = e[a]); a++) {
	            if (ie.acceptData(n) && (i = n[Te.expando], i && (t = Te.cache[i]))) {
	              if (t.events) for (r in t.events) {
	                o[r] ? ie.event.remove(n, r) : ie.removeEvent(n, r, t.handle);
	              }Te.cache[i] && delete Te.cache[i];
	            }delete Ce.cache[n[Ce.expando]];
	          }
	        } }), ie.fn.extend({ text: function text(e) {
	          return we(this, function (e) {
	            return void 0 === e ? ie.text(this) : this.empty().each(function () {
	              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
	            });
	          }, null, e, arguments.length);
	        }, append: function append() {
	          return this.domManip(arguments, function (e) {
	            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	              var t = y(this, e);t.appendChild(e);
	            }
	          });
	        }, prepend: function prepend() {
	          return this.domManip(arguments, function (e) {
	            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
	              var t = y(this, e);t.insertBefore(e, t.firstChild);
	            }
	          });
	        }, before: function before() {
	          return this.domManip(arguments, function (e) {
	            this.parentNode && this.parentNode.insertBefore(e, this);
	          });
	        }, after: function after() {
	          return this.domManip(arguments, function (e) {
	            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
	          });
	        }, remove: function remove(e, t) {
	          for (var n, r = e ? ie.filter(e, this) : this, i = 0; null != (n = r[i]); i++) {
	            t || 1 !== n.nodeType || ie.cleanData(T(n)), n.parentNode && (t && ie.contains(n.ownerDocument, n) && b(T(n, "script")), n.parentNode.removeChild(n));
	          }return this;
	        }, empty: function empty() {
	          for (var e, t = 0; null != (e = this[t]); t++) {
	            1 === e.nodeType && (ie.cleanData(T(e, !1)), e.textContent = "");
	          }return this;
	        }, clone: function clone(e, t) {
	          return e = null != e && e, t = null == t ? e : t, this.map(function () {
	            return ie.clone(this, e, t);
	          });
	        }, html: function html(e) {
	          return we(this, function (e) {
	            var t = this[0] || {},
	                n = 0,
	                r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ve.test(e) && !Be[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
	              e = e.replace(Fe, "<$1></$2>");try {
	                for (; n < r; n++) {
	                  t = this[n] || {}, 1 === t.nodeType && (ie.cleanData(T(t, !1)), t.innerHTML = e);
	                }t = 0;
	              } catch (i) {}
	            }t && this.empty().append(e);
	          }, null, e, arguments.length);
	        }, replaceWith: function replaceWith() {
	          var e = arguments[0];return this.domManip(arguments, function (t) {
	            e = this.parentNode, ie.cleanData(T(this)), e && e.replaceChild(t, this);
	          }), e && (e.length || e.nodeType) ? this : this.remove();
	        }, detach: function detach(e) {
	          return this.remove(e, !0);
	        }, domManip: function domManip(e, t) {
	          e = G.apply([], e);var n,
	              r,
	              i,
	              o,
	              a,
	              s,
	              u = 0,
	              l = this.length,
	              c = this,
	              f = l - 1,
	              p = e[0],
	              d = ie.isFunction(p);if (d || l > 1 && "string" == typeof p && !te.checkClone && Me.test(p)) return this.each(function (n) {
	            var r = c.eq(n);d && (e[0] = p.call(this, n, r.html())), r.domManip(e, t);
	          });if (l && (n = ie.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
	            for (i = ie.map(T(n, "script"), v), o = i.length; u < l; u++) {
	              a = n, u !== f && (a = ie.clone(a, !0, !0), o && ie.merge(i, T(a, "script"))), t.call(this[u], a, u);
	            }if (o) for (s = i[i.length - 1].ownerDocument, ie.map(i, x), u = 0; u < o; u++) {
	              a = i[u], $e.test(a.type || "") && !Te.access(a, "globalEval") && ie.contains(s, a) && (a.src ? ie._evalUrl && ie._evalUrl(a.src) : ie.globalEval(a.textContent.replace(Ie, "")));
	            }
	          }return this;
	        } }), ie.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
	        ie.fn[e] = function (e) {
	          for (var n, r = [], i = ie(e), o = i.length - 1, a = 0; a <= o; a++) {
	            n = a === o ? this : this.clone(!0), ie(i[a])[t](n), Q.apply(r, n.get());
	          }return this.pushStack(r);
	        };
	      });var ze,
	          Xe = {},
	          _e = /^margin/,
	          Ue = new RegExp("^(" + Ne + ")(?!px)[a-z%]+$", "i"),
	          Ye = function Ye(e) {
	        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : o.getComputedStyle(e, null);
	      };!function () {
	        function e() {
	          a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", r.appendChild(i);var e = o.getComputedStyle(a, null);t = "1%" !== e.top, n = "4px" === e.width, r.removeChild(i);
	        }var t,
	            n,
	            r = ne.documentElement,
	            i = ne.createElement("div"),
	            a = ne.createElement("div");a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", te.clearCloneStyle = "content-box" === a.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(a), o.getComputedStyle && ie.extend(te, { pixelPosition: function pixelPosition() {
	            return e(), t;
	          }, boxSizingReliable: function boxSizingReliable() {
	            return null == n && e(), n;
	          }, reliableMarginRight: function reliableMarginRight() {
	            var e,
	                t = a.appendChild(ne.createElement("div"));return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", a.style.width = "1px", r.appendChild(i), e = !parseFloat(o.getComputedStyle(t, null).marginRight), r.removeChild(i), a.removeChild(t), e;
	          } }));
	      }(), ie.swap = function (e, t, n, r) {
	        var i,
	            o,
	            a = {};for (o in t) {
	          a[o] = e.style[o], e.style[o] = t[o];
	        }i = n.apply(e, r || []);for (o in t) {
	          e.style[o] = a[o];
	        }return i;
	      };var Ge = /^(none|table(?!-c[ea]).+)/,
	          Qe = new RegExp("^(" + Ne + ")(.*)$", "i"),
	          Je = new RegExp("^([+-])=(" + Ne + ")", "i"),
	          Ze = { position: "absolute", visibility: "hidden", display: "block" },
	          Ke = { letterSpacing: "0", fontWeight: "400" },
	          et = ["Webkit", "O", "Moz", "ms"];ie.extend({ cssHooks: { opacity: { get: function get(e, t) {
	              if (t) {
	                var n = N(e, "opacity");return "" === n ? "1" : n;
	              }
	            } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function Gt(e, t, r, i) {
	          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
	            var o,
	                a,
	                s,
	                u = ie.camelCase(t),
	                Gt = e.style;return t = ie.cssProps[u] || (ie.cssProps[u] = j(Gt, u)), s = ie.cssHooks[t] || ie.cssHooks[u], void 0 === r ? s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : Gt[t] : (a = "undefined" == typeof r ? "undefined" : n(r), "string" === a && (o = Je.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ie.css(e, t)), a = "number"), null != r && r === r && ("number" !== a || ie.cssNumber[u] || (r += "px"), te.clearCloneStyle || "" !== r || 0 !== t.indexOf("background") || (Gt[t] = "inherit"), s && "set" in s && void 0 === (r = s.set(e, r, i)) || (Gt[t] = r)), void 0);
	          }
	        }, css: function css(e, t, n, r) {
	          var i,
	              o,
	              a,
	              s = ie.camelCase(t);return t = ie.cssProps[s] || (ie.cssProps[s] = j(e.style, s)), a = ie.cssHooks[t] || ie.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = N(e, t, r)), "normal" === i && t in Ke && (i = Ke[t]), "" === n || n ? (o = parseFloat(i), n === !0 || ie.isNumeric(o) ? o || 0 : i) : i;
	        } }), ie.each(["height", "width"], function (e, t) {
	        ie.cssHooks[t] = { get: function get(e, n, r) {
	            if (n) return Ge.test(ie.css(e, "display")) && 0 === e.offsetWidth ? ie.swap(e, Ze, function () {
	              return P(e, t, r);
	            }) : P(e, t, r);
	          }, set: function set(e, n, r) {
	            var i = r && Ye(e);return A(e, n, r ? D(e, t, r, "border-box" === ie.css(e, "boxSizing", !1, i), i) : 0);
	          } };
	      }), ie.cssHooks.marginRight = E(te.reliableMarginRight, function (e, t) {
	        if (t) return ie.swap(e, { display: "inline-block" }, N, [e, "marginRight"]);
	      }), ie.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
	        ie.cssHooks[e + t] = { expand: function expand(n) {
	            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
	              i[e + Ee[r] + t] = o[r] || o[r - 2] || o[0];
	            }return i;
	          } }, _e.test(e) || (ie.cssHooks[e + t].set = A);
	      }), ie.fn.extend({ css: function css(e, t) {
	          return we(this, function (e, t, n) {
	            var r,
	                i,
	                o = {},
	                a = 0;if (ie.isArray(t)) {
	              for (r = Ye(e), i = t.length; a < i; a++) {
	                o[t[a]] = ie.css(e, t[a], !1, r);
	              }return o;
	            }return void 0 !== n ? ie.style(e, t, n) : ie.css(e, t);
	          }, e, t, arguments.length > 1);
	        }, show: function show() {
	          return L(this, !0);
	        }, hide: function hide() {
	          return L(this);
	        }, toggle: function toggle(e) {
	          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
	            je(this) ? ie(this).show() : ie(this).hide();
	          });
	        } }), ie.Tween = H, H.prototype = { constructor: H, init: function init(e, t, n, r, i, o) {
	          this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ie.cssNumber[n] ? "" : "px");
	        }, cur: function cur() {
	          var e = H.propHooks[this.prop];return e && e.get ? e.get(this) : H.propHooks._default.get(this);
	        }, run: function run(e) {
	          var t,
	              n = H.propHooks[this.prop];return this.options.duration ? this.pos = t = ie.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this;
	        } }, H.prototype.init.prototype = H.prototype, H.propHooks = { _default: { get: function get(e) {
	            var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ie.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop];
	          }, set: function set(e) {
	            ie.fx.step[e.prop] ? ie.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ie.cssProps[e.prop]] || ie.cssHooks[e.prop]) ? ie.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
	          } } }, H.propHooks.scrollTop = H.propHooks.scrollLeft = { set: function set(e) {
	          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
	        } }, ie.easing = { linear: function linear(e) {
	          return e;
	        }, swing: function swing(e) {
	          return .5 - Math.cos(e * Math.PI) / 2;
	        } }, ie.fx = H.prototype.init, ie.fx.step = {};var tt,
	          nt,
	          rt = /^(?:toggle|show|hide)$/,
	          it = new RegExp("^(?:([+-])=|)(" + Ne + ")([a-z%]*)$", "i"),
	          ot = /queueHooks$/,
	          at = [R],
	          st = { "*": [function (e, t) {
	          var n = this.createTween(e, t),
	              r = n.cur(),
	              i = it.exec(t),
	              o = i && i[3] || (ie.cssNumber[e] ? "" : "px"),
	              a = (ie.cssNumber[e] || "px" !== o && +r) && it.exec(ie.css(n.elem, e)),
	              s = 1,
	              u = 20;if (a && a[3] !== o) {
	            o = o || a[3], i = i || [], a = +r || 1;do {
	              s = s || ".5", a /= s, ie.style(n.elem, e, a + o);
	            } while (s !== (s = n.cur() / r) && 1 !== s && --u);
	          }return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
	        }] };ie.Animation = ie.extend(M, { tweener: function tweener(e, t) {
	          ie.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");for (var n, r = 0, i = e.length; r < i; r++) {
	            n = e[r], st[n] = st[n] || [], st[n].unshift(t);
	          }
	        }, prefilter: function prefilter(e, t) {
	          t ? at.unshift(e) : at.push(e);
	        } }), ie.speed = function (e, t, r) {
	        var i = e && "object" === ("undefined" == typeof e ? "undefined" : n(e)) ? ie.extend({}, e) : { complete: r || !r && t || ie.isFunction(e) && e, duration: e, easing: r && t || t && !ie.isFunction(t) && t };return i.duration = ie.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ie.fx.speeds ? ie.fx.speeds[i.duration] : ie.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
	          ie.isFunction(i.old) && i.old.call(this), i.queue && ie.dequeue(this, i.queue);
	        }, i;
	      }, ie.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
	          return this.filter(je).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
	        }, animate: function animate(e, t, n, r) {
	          var i = ie.isEmptyObject(e),
	              o = ie.speed(t, n, r),
	              a = function a() {
	            var t = M(this, ie.extend({}, e), o);(i || Te.get(this, "finish")) && t.stop(!0);
	          };return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
	        }, stop: function stop(e, t, n) {
	          var r = function r(e) {
	            var t = e.stop;delete e.stop, t(n);
	          };return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
	            var t = !0,
	                i = null != e && e + "queueHooks",
	                o = ie.timers,
	                a = Te.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
	              a[i] && a[i].stop && ot.test(i) && r(a[i]);
	            }for (i = o.length; i--;) {
	              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
	            }!t && n || ie.dequeue(this, e);
	          });
	        }, finish: function finish(e) {
	          return e !== !1 && (e = e || "fx"), this.each(function () {
	            var t,
	                n = Te.get(this),
	                r = n[e + "queue"],
	                i = n[e + "queueHooks"],
	                o = ie.timers,
	                a = r ? r.length : 0;for (n.finish = !0, ie.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
	              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
	            }for (t = 0; t < a; t++) {
	              r[t] && r[t].finish && r[t].finish.call(this);
	            }delete n.finish;
	          });
	        } }), ie.each(["toggle", "show", "hide"], function (e, t) {
	        var n = ie.fn[t];ie.fn[t] = function (e, r, i) {
	          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i);
	        };
	      }), ie.each({ slideDown: F("show"), slideUp: F("hide"), slideToggle: F("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
	        ie.fn[e] = function (e, n, r) {
	          return this.animate(t, e, n, r);
	        };
	      }), ie.timers = [], ie.fx.tick = function () {
	        var e,
	            t = 0,
	            n = ie.timers;for (tt = ie.now(); t < n.length; t++) {
	          e = n[t], e() || n[t] !== e || n.splice(t--, 1);
	        }n.length || ie.fx.stop(), tt = void 0;
	      }, ie.fx.timer = function (e) {
	        ie.timers.push(e), e() ? ie.fx.start() : ie.timers.pop();
	      }, ie.fx.interval = 13, ie.fx.start = function () {
	        nt || (nt = setInterval(ie.fx.tick, ie.fx.interval));
	      }, ie.fx.stop = function () {
	        clearInterval(nt), nt = null;
	      }, ie.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ie.fn.delay = function (e, t) {
	        return e = ie.fx ? ie.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
	          var r = setTimeout(t, e);n.stop = function () {
	            clearTimeout(r);
	          };
	        });
	      }, function () {
	        var e = ne.createElement("input"),
	            t = ne.createElement("select"),
	            n = t.appendChild(ne.createElement("option"));e.type = "checkbox", te.checkOn = "" !== e.value, te.optSelected = n.selected, t.disabled = !0, te.optDisabled = !n.disabled, e = ne.createElement("input"), e.value = "t", e.type = "radio", te.radioValue = "t" === e.value;
	      }();var ut,
	          lt,
	          ct = ie.expr.attrHandle;ie.fn.extend({ attr: function attr(e, t) {
	          return we(this, ie.attr, e, t, arguments.length > 1);
	        }, removeAttr: function removeAttr(e) {
	          return this.each(function () {
	            ie.removeAttr(this, e);
	          });
	        } }), ie.extend({ attr: function attr(e, t, r) {
	          var i,
	              o,
	              a = e.nodeType;if (e && 3 !== a && 8 !== a && 2 !== a) return n(e.getAttribute) === De ? ie.prop(e, t, r) : (1 === a && ie.isXMLDoc(e) || (t = t.toLowerCase(), i = ie.attrHooks[t] || (ie.expr.match.bool.test(t) ? lt : ut)), void 0 === r ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = ie.find.attr(e, t), null == o ? void 0 : o) : null !== r ? i && "set" in i && void 0 !== (o = i.set(e, r, t)) ? o : (e.setAttribute(t, r + ""), r) : void ie.removeAttr(e, t));
	        }, removeAttr: function removeAttr(e, t) {
	          var n,
	              r,
	              i = 0,
	              o = t && t.match(ve);if (o && 1 === e.nodeType) for (; n = o[i++];) {
	            r = ie.propFix[n] || n, ie.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
	          }
	        }, attrHooks: { type: { set: function set(e, t) {
	              if (!te.radioValue && "radio" === t && ie.nodeName(e, "input")) {
	                var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
	              }
	            } } } }), lt = { set: function set(e, t, n) {
	          return t === !1 ? ie.removeAttr(e, n) : e.setAttribute(n, n), n;
	        } }, ie.each(ie.expr.match.bool.source.match(/\w+/g), function (e, t) {
	        var n = ct[t] || ie.find.attr;ct[t] = function (e, t, r) {
	          var i, o;return r || (o = ct[t], ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ct[t] = o), i;
	        };
	      });var ft = /^(?:input|select|textarea|button)$/i;ie.fn.extend({ prop: function prop(e, t) {
	          return we(this, ie.prop, e, t, arguments.length > 1);
	        }, removeProp: function removeProp(e) {
	          return this.each(function () {
	            delete this[ie.propFix[e] || e];
	          });
	        } }), ie.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(e, t, n) {
	          var r,
	              i,
	              o,
	              a = e.nodeType;if (e && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !ie.isXMLDoc(e), o && (t = ie.propFix[t] || t, i = ie.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
	        }, propHooks: { tabIndex: { get: function get(e) {
	              return e.hasAttribute("tabindex") || ft.test(e.nodeName) || e.href ? e.tabIndex : -1;
	            } } } }), te.optSelected || (ie.propHooks.selected = { get: function get(e) {
	          var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
	        } }), ie.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
	        ie.propFix[this.toLowerCase()] = this;
	      });var pt = /[\t\r\n\f]/g;ie.fn.extend({ addClass: function addClass(e) {
	          var t,
	              n,
	              r,
	              i,
	              o,
	              a,
	              s = "string" == typeof e && e,
	              u = 0,
	              l = this.length;if (ie.isFunction(e)) return this.each(function (t) {
	            ie(this).addClass(e.call(this, t, this.className));
	          });if (s) for (t = (e || "").match(ve) || []; u < l; u++) {
	            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pt, " ") : " ")) {
	              for (o = 0; i = t[o++];) {
	                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
	              }a = ie.trim(r), n.className !== a && (n.className = a);
	            }
	          }return this;
	        }, removeClass: function removeClass(e) {
	          var t,
	              n,
	              r,
	              i,
	              o,
	              a,
	              s = 0 === arguments.length || "string" == typeof e && e,
	              u = 0,
	              l = this.length;if (ie.isFunction(e)) return this.each(function (t) {
	            ie(this).removeClass(e.call(this, t, this.className));
	          });if (s) for (t = (e || "").match(ve) || []; u < l; u++) {
	            if (n = this[u], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(pt, " ") : "")) {
	              for (o = 0; i = t[o++];) {
	                for (; r.indexOf(" " + i + " ") >= 0;) {
	                  r = r.replace(" " + i + " ", " ");
	                }
	              }a = e ? ie.trim(r) : "", n.className !== a && (n.className = a);
	            }
	          }return this;
	        }, toggleClass: function toggleClass(e, t) {
	          var r = "undefined" == typeof e ? "undefined" : n(e);return "boolean" == typeof t && "string" === r ? t ? this.addClass(e) : this.removeClass(e) : ie.isFunction(e) ? this.each(function (n) {
	            ie(this).toggleClass(e.call(this, n, this.className, t), t);
	          }) : this.each(function () {
	            if ("string" === r) for (var t, n = 0, i = ie(this), o = e.match(ve) || []; t = o[n++];) {
	              i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
	            } else r !== De && "boolean" !== r || (this.className && Te.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : Te.get(this, "__className__") || "");
	          });
	        }, hasClass: function hasClass(e) {
	          for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) {
	            if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(pt, " ").indexOf(t) >= 0) return !0;
	          }return !1;
	        } });var dt = /\r/g;ie.fn.extend({ val: function val(e) {
	          var t,
	              n,
	              r,
	              i = this[0];{
	            if (arguments.length) return r = ie.isFunction(e), this.each(function (n) {
	              var i;1 === this.nodeType && (i = r ? e.call(this, n, ie(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : ie.isArray(i) && (i = ie.map(i, function (e) {
	                return null == e ? "" : e + "";
	              })), t = ie.valHooks[this.type] || ie.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
	            });if (i) return t = ie.valHooks[i.type] || ie.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(dt, "") : null == n ? "" : n);
	          }
	        } }), ie.extend({ valHooks: { option: { get: function get(e) {
	              var t = ie.find.attr(e, "value");return null != t ? t : ie.trim(ie.text(e));
	            } }, select: { get: function get(e) {
	              for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, u = i < 0 ? s : o ? i : 0; u < s; u++) {
	                if (n = r[u], (n.selected || u === i) && (te.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ie.nodeName(n.parentNode, "optgroup"))) {
	                  if (t = ie(n).val(), o) return t;a.push(t);
	                }
	              }return a;
	            }, set: function set(e, t) {
	              for (var n, r, i = e.options, o = ie.makeArray(t), a = i.length; a--;) {
	                r = i[a], (r.selected = ie.inArray(r.value, o) >= 0) && (n = !0);
	              }return n || (e.selectedIndex = -1), o;
	            } } } }), ie.each(["radio", "checkbox"], function () {
	        ie.valHooks[this] = { set: function set(e, t) {
	            if (ie.isArray(t)) return e.checked = ie.inArray(ie(e).val(), t) >= 0;
	          } }, te.checkOn || (ie.valHooks[this].get = function (e) {
	          return null === e.getAttribute("value") ? "on" : e.value;
	        });
	      }), ie.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
	        ie.fn[t] = function (e, n) {
	          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
	        };
	      }), ie.fn.extend({ hover: function hover(e, t) {
	          return this.mouseenter(e).mouseleave(t || e);
	        }, bind: function bind(e, t, n) {
	          return this.on(e, null, t, n);
	        }, unbind: function unbind(e, t) {
	          return this.off(e, null, t);
	        }, delegate: function delegate(e, t, n, r) {
	          return this.on(t, e, n, r);
	        }, undelegate: function undelegate(e, t, n) {
	          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
	        } });var ht = ie.now(),
	          gt = /\?/;ie.parseJSON = function (e) {
	        return JSON.parse(e + "");
	      }, ie.parseXML = function (e) {
	        var t, n;if (!e || "string" != typeof e) return null;try {
	          n = new DOMParser(), t = n.parseFromString(e, "text/xml");
	        } catch (r) {
	          t = void 0;
	        }return t && !t.getElementsByTagName("parsererror").length || ie.error("Invalid XML: " + e), t;
	      };var mt = /#.*$/,
	          yt = /([?&])_=[^&]*/,
	          vt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	          xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	          bt = /^(?:GET|HEAD)$/,
	          wt = /^\/\//,
	          Tt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	          Ct = {},
	          St = {},
	          kt = "*/".concat("*"),
	          Nt = o.location.href,
	          Et = Tt.exec(Nt.toLowerCase()) || [];ie.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Nt, type: "GET", isLocal: xt.test(Et[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": kt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ie.parseJSON, "text xml": ie.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
	          return t ? I(I(e, ie.ajaxSettings), t) : I(ie.ajaxSettings, e);
	        }, ajaxPrefilter: $(Ct), ajaxTransport: $(St), ajax: function ajax(e, t) {
	          function r(e, t, n, r) {
	            var s,
	                l,
	                f,
	                v,
	                x,
	                w = t;2 !== b && (b = 2, u && clearTimeout(u), i = void 0, a = r || "", T.readyState = e > 0 ? 4 : 0, s = e >= 200 && e < 300 || 304 === e, n && (v = B(p, T, n)), v = z(p, v, T, s), s ? (p.ifModified && (x = T.getResponseHeader("Last-Modified"), x && (ie.lastModified[o] = x), x = T.getResponseHeader("etag"), x && (ie.etag[o] = x)), 204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = v.state, l = v.data, f = v.error, s = !f)) : (f = w, !e && w || (w = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || w) + "", s ? g.resolveWith(d, [l, w, T]) : g.rejectWith(d, [T, w, f]), T.statusCode(y), y = void 0, c && h.trigger(s ? "ajaxSuccess" : "ajaxError", [T, p, s ? l : f]), m.fireWith(d, [T, w]), c && (h.trigger("ajaxComplete", [T, p]), --ie.active || ie.event.trigger("ajaxStop")));
	          }"object" === ("undefined" == typeof e ? "undefined" : n(e)) && (t = e, e = void 0), t = t || {};var i,
	              o,
	              a,
	              s,
	              u,
	              l,
	              c,
	              f,
	              p = ie.ajaxSetup({}, t),
	              d = p.context || p,
	              h = p.context && (d.nodeType || d.jquery) ? ie(d) : ie.event,
	              g = ie.Deferred(),
	              m = ie.Callbacks("once memory"),
	              y = p.statusCode || {},
	              v = {},
	              x = {},
	              b = 0,
	              w = "canceled",
	              T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
	              var t;if (2 === b) {
	                if (!s) for (s = {}; t = vt.exec(a);) {
	                  s[t[1].toLowerCase()] = t[2];
	                }t = s[e.toLowerCase()];
	              }return null == t ? null : t;
	            }, getAllResponseHeaders: function getAllResponseHeaders() {
	              return 2 === b ? a : null;
	            }, setRequestHeader: function setRequestHeader(e, t) {
	              var n = e.toLowerCase();return b || (e = x[n] = x[n] || e, v[e] = t), this;
	            }, overrideMimeType: function overrideMimeType(e) {
	              return b || (p.mimeType = e), this;
	            }, statusCode: function statusCode(e) {
	              var t;if (e) if (b < 2) for (t in e) {
	                y[t] = [y[t], e[t]];
	              } else T.always(e[T.status]);return this;
	            }, abort: function abort(e) {
	              var t = e || w;return i && i.abort(t), r(0, t), this;
	            } };if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Nt) + "").replace(mt, "").replace(wt, Et[1] + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = ie.trim(p.dataType || "*").toLowerCase().match(ve) || [""], null == p.crossDomain && (l = Tt.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] === Et[1] && l[2] === Et[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ie.param(p.data, p.traditional)), W(Ct, p, t, T), 2 === b) return T;c = ie.event && p.global, c && 0 === ie.active++ && ie.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !bt.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (gt.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = yt.test(o) ? o.replace(yt, "$1_=" + ht++) : o + (gt.test(o) ? "&" : "?") + "_=" + ht++)), p.ifModified && (ie.lastModified[o] && T.setRequestHeader("If-Modified-Since", ie.lastModified[o]), ie.etag[o] && T.setRequestHeader("If-None-Match", ie.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + kt + "; q=0.01" : "") : p.accepts["*"]);for (f in p.headers) {
	            T.setRequestHeader(f, p.headers[f]);
	          }if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b)) return T.abort();w = "abort";for (f in { success: 1, error: 1, complete: 1 }) {
	            T[f](p[f]);
	          }if (i = W(St, p, t, T)) {
	            T.readyState = 1, c && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
	              T.abort("timeout");
	            }, p.timeout));try {
	              b = 1, i.send(v, r);
	            } catch (C) {
	              if (!(b < 2)) throw C;r(-1, C);
	            }
	          } else r(-1, "No Transport");return T;
	        }, getJSON: function getJSON(e, t, n) {
	          return ie.get(e, t, n, "json");
	        }, getScript: function getScript(e, t) {
	          return ie.get(e, void 0, t, "script");
	        } }), ie.each(["get", "post"], function (e, t) {
	        ie[t] = function (e, n, r, i) {
	          return ie.isFunction(n) && (i = i || r, r = n, n = void 0), ie.ajax({ url: e, type: t, dataType: i, data: n, success: r });
	        };
	      }), ie._evalUrl = function (e) {
	        return ie.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
	      }, ie.fn.extend({ wrapAll: function wrapAll(e) {
	          var t;return ie.isFunction(e) ? this.each(function (t) {
	            ie(this).wrapAll(e.call(this, t));
	          }) : (this[0] && (t = ie(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
	            for (var e = this; e.firstElementChild;) {
	              e = e.firstElementChild;
	            }return e;
	          }).append(this)), this);
	        }, wrapInner: function wrapInner(e) {
	          return ie.isFunction(e) ? this.each(function (t) {
	            ie(this).wrapInner(e.call(this, t));
	          }) : this.each(function () {
	            var t = ie(this),
	                n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
	          });
	        }, wrap: function wrap(e) {
	          var t = ie.isFunction(e);return this.each(function (n) {
	            ie(this).wrapAll(t ? e.call(this, n) : e);
	          });
	        }, unwrap: function unwrap() {
	          return this.parent().each(function () {
	            ie.nodeName(this, "body") || ie(this).replaceWith(this.childNodes);
	          }).end();
	        } }), ie.expr.filters.hidden = function (e) {
	        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
	      }, ie.expr.filters.visible = function (e) {
	        return !ie.expr.filters.hidden(e);
	      };var jt = /%20/g,
	          At = /\[\]$/,
	          Dt = /\r?\n/g,
	          Pt = /^(?:submit|button|image|reset|file)$/i,
	          Lt = /^(?:input|select|textarea|keygen)/i;ie.param = function (e, t) {
	        var n,
	            r = [],
	            i = function i(e, t) {
	          t = ie.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
	        };if (void 0 === t && (t = ie.ajaxSettings && ie.ajaxSettings.traditional), ie.isArray(e) || e.jquery && !ie.isPlainObject(e)) ie.each(e, function () {
	          i(this.name, this.value);
	        });else for (n in e) {
	          X(n, e[n], t, i);
	        }return r.join("&").replace(jt, "+");
	      }, ie.fn.extend({ serialize: function serialize() {
	          return ie.param(this.serializeArray());
	        }, serializeArray: function serializeArray() {
	          return this.map(function () {
	            var e = ie.prop(this, "elements");return e ? ie.makeArray(e) : this;
	          }).filter(function () {
	            var e = this.type;return this.name && !ie(this).is(":disabled") && Lt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ae.test(e));
	          }).map(function (e, t) {
	            var n = ie(this).val();return null == n ? null : ie.isArray(n) ? ie.map(n, function (e) {
	              return { name: t.name, value: e.replace(Dt, "\r\n") };
	            }) : { name: t.name, value: n.replace(Dt, "\r\n") };
	          }).get();
	        } }), ie.ajaxSettings.xhr = function () {
	        try {
	          return new XMLHttpRequest();
	        } catch (e) {}
	      };var Ht = 0,
	          qt = {},
	          Ft = { 0: 200, 1223: 204 },
	          Ot = ie.ajaxSettings.xhr();o.attachEvent && o.attachEvent("onunload", function () {
	        for (var e in qt) {
	          qt[e]();
	        }
	      }), te.cors = !!Ot && "withCredentials" in Ot, te.ajax = Ot = !!Ot, ie.ajaxTransport(function (e) {
	        var _t5;if (te.cors || Ot && !e.crossDomain) return { send: function send(n, r) {
	            var i,
	                o = e.xhr(),
	                a = ++Ht;if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) {
	              o[i] = e.xhrFields[i];
	            }e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");for (i in n) {
	              o.setRequestHeader(i, n[i]);
	            }_t5 = function t(e) {
	              return function () {
	                _t5 && (delete qt[a], _t5 = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Ft[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders()));
	              };
	            }, o.onload = _t5(), o.onerror = _t5("error"), _t5 = qt[a] = _t5("abort");try {
	              o.send(e.hasContent && e.data || null);
	            } catch (s) {
	              if (_t5) throw s;
	            }
	          }, abort: function abort() {
	            _t5 && _t5();
	          } };
	      }), ie.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
	            return ie.globalEval(e), e;
	          } } }), ie.ajaxPrefilter("script", function (e) {
	        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
	      }), ie.ajaxTransport("script", function (e) {
	        if (e.crossDomain) {
	          var t, _n2;return { send: function send(r, i) {
	              t = ie("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", _n2 = function n(e) {
	                t.remove(), _n2 = null, e && i("error" === e.type ? 404 : 200, e.type);
	              }), ne.head.appendChild(t[0]);
	            }, abort: function abort() {
	              _n2 && _n2();
	            } };
	        }
	      });var Rt = [],
	          Vt = /(=)\?(?=&|$)|\?\?/;ie.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
	          var e = Rt.pop() || ie.expando + "_" + ht++;return this[e] = !0, e;
	        } }), ie.ajaxPrefilter("json jsonp", function (e, t, n) {
	        var r,
	            i,
	            a,
	            s = e.jsonp !== !1 && (Vt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ie.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + r) : e.jsonp !== !1 && (e.url += (gt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
	          return a || ie.error(r + " was not called"), a[0];
	        }, e.dataTypes[0] = "json", i = o[r], o[r] = function () {
	          a = arguments;
	        }, n.always(function () {
	          o[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Rt.push(r)), a && ie.isFunction(i) && i(a[0]), a = i = void 0;
	        }), "script";
	      }), ie.parseHTML = function (e, t, n) {
	        if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || ne;var r = fe.exec(e),
	            i = !n && [];return r ? [t.createElement(r[1])] : (r = ie.buildFragment([e], t, i), i && i.length && ie(i).remove(), ie.merge([], r.childNodes));
	      };var Mt = ie.fn.load;ie.fn.load = function (e, t, r) {
	        if ("string" != typeof e && Mt) return Mt.apply(this, arguments);var i,
	            o,
	            a,
	            s = this,
	            u = e.indexOf(" ");return u >= 0 && (i = ie.trim(e.slice(u)), e = e.slice(0, u)), ie.isFunction(t) ? (r = t, t = void 0) : t && "object" === ("undefined" == typeof t ? "undefined" : n(t)) && (o = "POST"), s.length > 0 && ie.ajax({ url: e, type: o, dataType: "html", data: t }).done(function (e) {
	          a = arguments, s.html(i ? ie("<div>").append(ie.parseHTML(e)).find(i) : e);
	        }).complete(r && function (e, t) {
	          s.each(r, a || [e.responseText, t, e]);
	        }), this;
	      }, ie.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
	        ie.fn[t] = function (e) {
	          return this.on(t, e);
	        };
	      }), ie.expr.filters.animated = function (e) {
	        return ie.grep(ie.timers, function (t) {
	          return e === t.elem;
	        }).length;
	      };var $t = o.document.documentElement;ie.offset = { setOffset: function setOffset(e, t, n) {
	          var r,
	              i,
	              o,
	              a,
	              s,
	              u,
	              l,
	              c = ie.css(e, "position"),
	              f = ie(e),
	              p = {};"static" === c && (e.style.position = "relative"), s = f.offset(), o = ie.css(e, "top"), u = ie.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ie.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
	        } }, ie.fn.extend({ offset: function offset(e) {
	          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
	            ie.offset.setOffset(this, e, t);
	          });var t,
	              r,
	              i = this[0],
	              o = { top: 0, left: 0 },
	              a = i && i.ownerDocument;if (a) return t = a.documentElement, ie.contains(t, i) ? (n(i.getBoundingClientRect) !== De && (o = i.getBoundingClientRect()), r = _(a), { top: o.top + r.pageYOffset - t.clientTop, left: o.left + r.pageXOffset - t.clientLeft }) : o;
	        }, position: function position() {
	          if (this[0]) {
	            var e,
	                t,
	                n = this[0],
	                r = { top: 0, left: 0 };return "fixed" === ie.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ie.nodeName(e[0], "html") || (r = e.offset()), r.top += ie.css(e[0], "borderTopWidth", !0), r.left += ie.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - ie.css(n, "marginTop", !0), left: t.left - r.left - ie.css(n, "marginLeft", !0) };
	          }
	        }, offsetParent: function offsetParent() {
	          return this.map(function () {
	            for (var e = this.offsetParent || $t; e && !ie.nodeName(e, "html") && "static" === ie.css(e, "position");) {
	              e = e.offsetParent;
	            }return e || $t;
	          });
	        } }), ie.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
	        var n = "pageYOffset" === t;ie.fn[e] = function (r) {
	          return we(this, function (e, r, i) {
	            var a = _(e);return void 0 === i ? a ? a[t] : e[r] : void (a ? a.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i);
	          }, e, r, arguments.length, null);
	        };
	      }), ie.each(["top", "left"], function (e, t) {
	        ie.cssHooks[t] = E(te.pixelPosition, function (e, n) {
	          if (n) return n = N(e, t), Ue.test(n) ? ie(e).position()[t] + "px" : n;
	        });
	      }), ie.each({ Height: "height", Width: "width" }, function (e, t) {
	        ie.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
	          ie.fn[r] = function (r, i) {
	            var o = arguments.length && (n || "boolean" != typeof r),
	                a = n || (r === !0 || i === !0 ? "margin" : "border");return we(this, function (t, n, r) {
	              var i;return ie.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ie.css(t, n, a) : ie.style(t, n, r, a);
	            }, t, o ? r : void 0, o, null);
	          };
	        });
	      }), ie.fn.size = function () {
	        return this.length;
	      }, ie.fn.andSelf = ie.fn.addBack, r = [], i = function () {
	        return ie;
	      }.apply(t, r), !(void 0 !== i && (e.exports = i));var Wt = o.jQuery,
	          It = o.$;return ie.noConflict = function (e) {
	        return o.$ === ie && (o.$ = It), e && o.jQuery === ie && (o.jQuery = Wt), ie;
	      }, ("undefined" == typeof a ? "undefined" : n(a)) === De && (o.jQuery = o.$ = ie), ie;
	    });
	  }).call(t, n(2)(e));
	}, function (e, t, n) {
	  var r, i;(function (e) {
	    "use strict";
	    var o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
	      return typeof e === "undefined" ? "undefined" : _typeof(e);
	    } : function (e) {
	      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
	    };jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function (e) {
	      function t(e) {
	        var t = e.length,
	            r = n.type(e);return "function" !== r && !n.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === r || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
	      }if (!e.jQuery) {
	        var n = function c(e, t) {
	          return new c.fn.init(e, t);
	        };n.isWindow = function (e) {
	          return null != e && e == e.window;
	        }, n.type = function (e) {
	          return null == e ? e + "" : "object" == ("undefined" == typeof e ? "undefined" : o(e)) || "function" == typeof e ? i[s.call(e)] || "object" : "undefined" == typeof e ? "undefined" : o(e);
	        }, n.isArray = Array.isArray || function (e) {
	          return "array" === n.type(e);
	        }, n.isPlainObject = function (e) {
	          var t;if (!e || "object" !== n.type(e) || e.nodeType || n.isWindow(e)) return !1;try {
	            if (e.constructor && !a.call(e, "constructor") && !a.call(e.constructor.prototype, "isPrototypeOf")) return !1;
	          } catch (r) {
	            return !1;
	          }for (t in e) {}return void 0 === t || a.call(e, t);
	        }, n.each = function (e, n, r) {
	          var i,
	              o = 0,
	              a = e.length,
	              s = t(e);if (r) {
	            if (s) for (; a > o && (i = n.apply(e[o], r), i !== !1); o++) {} else for (o in e) {
	              if (i = n.apply(e[o], r), i === !1) break;
	            }
	          } else if (s) for (; a > o && (i = n.call(e[o], o, e[o]), i !== !1); o++) {} else for (o in e) {
	            if (i = n.call(e[o], o, e[o]), i === !1) break;
	          }return e;
	        }, n.data = function (e, t, i) {
	          if (void 0 === i) {
	            var o = e[n.expando],
	                a = o && r[o];if (void 0 === t) return a;if (a && t in a) return a[t];
	          } else if (void 0 !== t) {
	            var o = e[n.expando] || (e[n.expando] = ++n.uuid);return r[o] = r[o] || {}, r[o][t] = i, i;
	          }
	        }, n.removeData = function (e, t) {
	          var i = e[n.expando],
	              o = i && r[i];o && n.each(t, function (e, t) {
	            delete o[t];
	          });
	        }, n.extend = function () {
	          var e,
	              t,
	              r,
	              i,
	              a,
	              s,
	              u = arguments[0] || {},
	              l = 1,
	              c = arguments.length,
	              f = !1;for ("boolean" == typeof u && (f = u, u = arguments[l] || {}, l++), "object" != ("undefined" == typeof u ? "undefined" : o(u)) && "function" !== n.type(u) && (u = {}), l === c && (u = this, l--); c > l; l++) {
	            if (null != (a = arguments[l])) for (i in a) {
	              e = u[i], r = a[i], u !== r && (f && r && (n.isPlainObject(r) || (t = n.isArray(r))) ? (t ? (t = !1, s = e && n.isArray(e) ? e : []) : s = e && n.isPlainObject(e) ? e : {}, u[i] = n.extend(f, s, r)) : void 0 !== r && (u[i] = r));
	            }
	          }return u;
	        }, n.queue = function (e, r, i) {
	          function o(e, n) {
	            var r = n || [];return null != e && (t(Object(e)) ? !function (e, t) {
	              for (var n = +t.length, r = 0, i = e.length; n > r;) {
	                e[i++] = t[r++];
	              }if (n !== n) for (; void 0 !== t[r];) {
	                e[i++] = t[r++];
	              }return e.length = i, e;
	            }(r, "string" == typeof e ? [e] : e) : [].push.call(r, e)), r;
	          }if (e) {
	            r = (r || "fx") + "queue";var a = n.data(e, r);return i ? (!a || n.isArray(i) ? a = n.data(e, r, o(i)) : a.push(i), a) : a || [];
	          }
	        }, n.dequeue = function (e, t) {
	          n.each(e.nodeType ? [e] : e, function (e, r) {
	            t = t || "fx";var i = n.queue(r, t),
	                o = i.shift();"inprogress" === o && (o = i.shift()), o && ("fx" === t && i.unshift("inprogress"), o.call(r, function () {
	              n.dequeue(r, t);
	            }));
	          });
	        }, n.fn = n.prototype = { init: function init(e) {
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
	                r = this.offset(),
	                i = /^(?:body|html)$/i.test(e.nodeName) ? { top: 0, left: 0 } : n(e).offset();return r.top -= parseFloat(t.style.marginTop) || 0, r.left -= parseFloat(t.style.marginLeft) || 0, e.style && (i.top += parseFloat(e.style.borderTopWidth) || 0, i.left += parseFloat(e.style.borderLeftWidth) || 0), { top: r.top - i.top, left: r.left - i.left };
	          } };var r = {};n.expando = "velocity" + new Date().getTime(), n.uuid = 0;for (var i = {}, a = i.hasOwnProperty, s = i.toString, u = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < u.length; l++) {
	          i["[object " + u[l] + "]"] = u[l].toLowerCase();
	        }n.fn.init.prototype = n.fn, e.Velocity = { Utilities: n };
	      }
	    }(window), function (a) {
	      "object" == o(e) && "object" == o(e.exports) ? e.exports = a() : (r = a, i = "function" == typeof r ? r.call(t, n, t, e) : r, !(void 0 !== i && (e.exports = i)));
	    }(function () {
	      return function (e, t, n, r) {
	        function i(e) {
	          for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
	            var i = e[t];i && r.push(i);
	          }return r;
	        }function a(e) {
	          return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e;
	        }function s(e) {
	          var t = d.data(e, "velocity");return null === t ? r : t;
	        }function u(e) {
	          return function (t) {
	            return Math.round(t * e) * (1 / e);
	          };
	        }function l(e, n, r, i) {
	          function o(e, t) {
	            return 1 - 3 * t + 3 * e;
	          }function a(e, t) {
	            return 3 * t - 6 * e;
	          }function s(e) {
	            return 3 * e;
	          }function u(e, t, n) {
	            return ((o(t, n) * e + a(t, n)) * e + s(t)) * e;
	          }function l(e, t, n) {
	            return 3 * o(t, n) * e * e + 2 * a(t, n) * e + s(t);
	          }function c(t, n) {
	            for (var i = 0; g > i; ++i) {
	              var o = l(n, e, r);if (0 === o) return n;var a = u(n, e, r) - t;n -= a / o;
	            }return n;
	          }function f() {
	            for (var t = 0; x > t; ++t) {
	              C[t] = u(t * b, e, r);
	            }
	          }function p(t, n, i) {
	            var o,
	                a,
	                s = 0;do {
	              a = n + (i - n) / 2, o = u(a, e, r) - t, o > 0 ? i = a : n = a;
	            } while (Math.abs(o) > y && ++s < v);return a;
	          }function d(t) {
	            for (var n = 0, i = 1, o = x - 1; i != o && C[i] <= t; ++i) {
	              n += b;
	            }--i;var a = (t - C[i]) / (C[i + 1] - C[i]),
	                s = n + a * b,
	                u = l(s, e, r);return u >= m ? c(t, s) : 0 == u ? s : p(t, n, n + b);
	          }function h() {
	            S = !0, (e != n || r != i) && f();
	          }var g = 4,
	              m = .001,
	              y = 1e-7,
	              v = 10,
	              x = 11,
	              b = 1 / (x - 1),
	              w = "Float32Array" in t;if (4 !== arguments.length) return !1;for (var T = 0; 4 > T; ++T) {
	            if ("number" != typeof arguments[T] || isNaN(arguments[T]) || !isFinite(arguments[T])) return !1;
	          }e = Math.min(e, 1), r = Math.min(r, 1), e = Math.max(e, 0), r = Math.max(r, 0);var C = w ? new Float32Array(x) : new Array(x),
	              S = !1,
	              k = function k(t) {
	            return S || h(), e === n && r === i ? t : 0 === t ? 0 : 1 === t ? 1 : u(d(t), n, i);
	          };k.getControlPoints = function () {
	            return [{ x: e, y: n }, { x: r, y: i }];
	          };var N = "generateBezier(" + [e, n, r, i] + ")";return k.toString = function () {
	            return N;
	          }, k;
	        }function c(e, t) {
	          var n = e;return m.isString(e) ? b.Easings[e] || (n = !1) : n = m.isArray(e) && 1 === e.length ? u.apply(null, e) : m.isArray(e) && 2 === e.length ? w.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e), n === !1 && (n = b.Easings[b.defaults.easing] ? b.defaults.easing : x), n;
	        }function f(e) {
	          if (e) {
	            var t = new Date().getTime(),
	                n = b.State.calls.length;n > 1e4 && (b.State.calls = i(b.State.calls));for (var o = 0; n > o; o++) {
	              if (b.State.calls[o]) {
	                var a = b.State.calls[o],
	                    u = a[0],
	                    l = a[2],
	                    c = a[3],
	                    h = !!c,
	                    g = null;c || (c = b.State.calls[o][3] = t - 16);for (var y = Math.min((t - c) / l.duration, 1), v = 0, x = u.length; x > v; v++) {
	                  var w = u[v],
	                      C = w.element;if (s(C)) {
	                    var k = !1;if (l.display !== r && null !== l.display && "none" !== l.display) {
	                      if ("flex" === l.display) {
	                        var N = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];d.each(N, function (e, t) {
	                          T.setPropertyValue(C, "display", t);
	                        });
	                      }T.setPropertyValue(C, "display", l.display);
	                    }l.visibility !== r && "hidden" !== l.visibility && T.setPropertyValue(C, "visibility", l.visibility);for (var E in w) {
	                      if ("element" !== E) {
	                        var j,
	                            A = w[E],
	                            D = m.isString(A.easing) ? b.Easings[A.easing] : A.easing;if (1 === y) j = A.endValue;else {
	                          var P = A.endValue - A.startValue;if (j = A.startValue + P * D(y, l, P), !h && j === A.currentValue) continue;
	                        }if (A.currentValue = j, "tween" === E) g = j;else {
	                          if (T.Hooks.registered[E]) {
	                            var L = T.Hooks.getRoot(E),
	                                H = s(C).rootPropertyValueCache[L];H && (A.rootPropertyValue = H);
	                          }var q = T.setPropertyValue(C, E, A.currentValue + (0 === parseFloat(j) ? "" : A.unitType), A.rootPropertyValue, A.scrollData);T.Hooks.registered[E] && (s(C).rootPropertyValueCache[L] = T.Normalizations.registered[L] ? T.Normalizations.registered[L]("extract", null, q[1]) : q[1]), "transform" === q[0] && (k = !0);
	                        }
	                      }
	                    }l.mobileHA && s(C).transformCache.translate3d === r && (s(C).transformCache.translate3d = "(0px, 0px, 0px)", k = !0), k && T.flushTransformCache(C);
	                  }
	                }l.display !== r && "none" !== l.display && (b.State.calls[o][2].display = !1), l.visibility !== r && "hidden" !== l.visibility && (b.State.calls[o][2].visibility = !1), l.progress && l.progress.call(a[1], a[1], y, Math.max(0, c + l.duration - t), c, g), 1 === y && p(o);
	              }
	            }
	          }b.State.isTicking && S(f);
	        }function p(e, t) {
	          if (!b.State.calls[e]) return !1;for (var n = b.State.calls[e][0], i = b.State.calls[e][1], o = b.State.calls[e][2], a = b.State.calls[e][4], u = !1, l = 0, c = n.length; c > l; l++) {
	            var f = n[l].element;if (t || o.loop || ("none" === o.display && T.setPropertyValue(f, "display", o.display), "hidden" === o.visibility && T.setPropertyValue(f, "visibility", o.visibility)), o.loop !== !0 && (d.queue(f)[1] === r || !/\.velocityQueueEntryFlag/i.test(d.queue(f)[1])) && s(f)) {
	              s(f).isAnimating = !1, s(f).rootPropertyValueCache = {};var p = !1;d.each(T.Lists.transforms3D, function (e, t) {
	                var n = /^scale/.test(t) ? 1 : 0,
	                    i = s(f).transformCache[t];s(f).transformCache[t] !== r && new RegExp("^\\(" + n + "[^.]").test(i) && (p = !0, delete s(f).transformCache[t]);
	              }), o.mobileHA && (p = !0, delete s(f).transformCache.translate3d), p && T.flushTransformCache(f), T.Values.removeClass(f, "velocity-animating");
	            }if (!t && o.complete && !o.loop && l === c - 1) try {
	              o.complete.call(i, i);
	            } catch (h) {
	              setTimeout(function () {
	                throw h;
	              }, 1);
	            }a && o.loop !== !0 && a(i), s(f) && o.loop === !0 && !t && (d.each(s(f).tweensContainer, function (e, t) {
	              /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
	            }), b(f, "reverse", { loop: !0, delay: o.delay })), o.queue !== !1 && d.dequeue(f, o.queue);
	          }b.State.calls[e] = !1;for (var g = 0, m = b.State.calls.length; m > g; g++) {
	            if (b.State.calls[g] !== !1) {
	              u = !0;break;
	            }
	          }u === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
	        }var d,
	            h = function () {
	          if (n.documentMode) return n.documentMode;for (var e = 7; e > 4; e--) {
	            var t = n.createElement("div");if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length) return t = null, e;
	          }return r;
	        }(),
	            g = function () {
	          var e = 0;return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
	            var n,
	                r = new Date().getTime();return n = Math.max(0, 16 - (r - e)), e = r + n, setTimeout(function () {
	              t(r + n);
	            }, n);
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
	            return "object" == ("undefined" == typeof e ? "undefined" : o(e)) && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== r && (0 === e.length || "object" == o(e[0]) && e[0].nodeType > 0);
	          }, isWrapped: function isWrapped(e) {
	            return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
	          }, isSVG: function isSVG(e) {
	            return t.SVGElement && e instanceof t.SVGElement;
	          }, isEmptyObject: function isEmptyObject(e) {
	            for (var t in e) {
	              return !1;
	            }return !0;
	          } },
	            y = !1;if (e.fn && e.fn.jquery ? (d = e, y = !0) : d = t.Velocity.Utilities, 8 >= h && !y) throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if (7 >= h) return void (jQuery.fn.velocity = jQuery.fn.animate);var v = 400,
	            x = "swing",
	            b = { State: { isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), isAndroid: /Android/i.test(navigator.userAgent), isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent), isChrome: t.chrome, isFirefox: /Firefox/i.test(navigator.userAgent), prefixElement: n.createElement("div"), prefixMatches: {}, scrollAnchor: null, scrollPropertyLeft: null, scrollPropertyTop: null, isTicking: !1, calls: [] }, CSS: {}, Utilities: d, Redirects: {}, Easings: {}, Promise: t.Promise, defaults: { queue: "", duration: v, easing: x, begin: r, complete: r, progress: r, display: r, visibility: r, loop: !1, delay: !1, mobileHA: !0, _cacheValues: !0 }, init: function init(e) {
	            d.data(e, "velocity", { isSVG: m.isSVG(e), isAnimating: !1, computedStyle: null, tweensContainer: null, rootPropertyValueCache: {}, transformCache: {} });
	          }, hook: null, mock: !1, version: { major: 1, minor: 2, patch: 2 }, debug: !1 };t.pageYOffset !== r ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = n.documentElement || n.body.parentNode || n.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");var w = function () {
	          function e(e) {
	            return -e.tension * e.x - e.friction * e.v;
	          }function t(t, n, r) {
	            var i = { x: t.x + r.dx * n, v: t.v + r.dv * n, tension: t.tension, friction: t.friction };return { dx: i.v, dv: e(i) };
	          }function n(n, r) {
	            var i = { dx: n.v, dv: e(n) },
	                o = t(n, .5 * r, i),
	                a = t(n, .5 * r, o),
	                s = t(n, r, a),
	                u = 1 / 6 * (i.dx + 2 * (o.dx + a.dx) + s.dx),
	                l = 1 / 6 * (i.dv + 2 * (o.dv + a.dv) + s.dv);return n.x = n.x + u * r, n.v = n.v + l * r, n;
	          }return function r(e, t, i) {
	            var o,
	                a,
	                s,
	                u = { x: -1, v: 0, tension: null, friction: null },
	                l = [0],
	                c = 0,
	                f = 1e-4,
	                p = .016;for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, i = i || null, u.tension = e, u.friction = t, o = null !== i, o ? (c = r(e, t), a = c / i * p) : a = p; s = n(s || u, a), l.push(1 + s.x), c += 16, Math.abs(s.x) > f && Math.abs(s.v) > f;) {}return o ? function (e) {
	              return l[e * (l.length - 1) | 0];
	            } : c;
	          };
	        }();b.Easings = { linear: function linear(e) {
	            return e;
	          }, swing: function swing(e) {
	            return .5 - Math.cos(e * Math.PI) / 2;
	          }, spring: function spring(e) {
	            return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
	          } }, d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
	          b.Easings[t[0]] = l.apply(null, t[1]);
	        });var T = b.CSS = { RegEx: { isHex: /^#([A-f\d]{3}){1,2}$/i, valueUnwrap: /^[A-z]+\((.*)\)$/i, wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/, valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi }, Lists: { colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"], transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"], transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"] }, Hooks: { templates: { textShadow: ["Color X Y Blur", "black 0px 0px 0px"], boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"], clip: ["Top Right Bottom Left", "0px 0px 0px 0px"], backgroundPosition: ["X Y", "0% 0%"], transformOrigin: ["X Y Z", "50% 50% 0px"], perspectiveOrigin: ["X Y", "50% 50%"] }, registered: {}, register: function register() {
	              for (var e = 0; e < T.Lists.colors.length; e++) {
	                var t = "color" === T.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";T.Hooks.templates[T.Lists.colors[e]] = ["Red Green Blue Alpha", t];
	              }var n, r, i;if (h) for (n in T.Hooks.templates) {
	                r = T.Hooks.templates[n], i = r[0].split(" ");var o = r[1].match(T.RegEx.valueSplit);"Color" === i[0] && (i.push(i.shift()), o.push(o.shift()), T.Hooks.templates[n] = [i.join(" "), o.join(" ")]);
	              }for (n in T.Hooks.templates) {
	                r = T.Hooks.templates[n], i = r[0].split(" ");for (var e in i) {
	                  var a = n + i[e],
	                      s = e;T.Hooks.registered[a] = [n, s];
	                }
	              }
	            }, getRoot: function getRoot(e) {
	              var t = T.Hooks.registered[e];return t ? t[0] : e;
	            }, cleanRootPropertyValue: function cleanRootPropertyValue(e, t) {
	              return T.RegEx.valueUnwrap.test(t) && (t = t.match(T.RegEx.valueUnwrap)[1]), T.Values.isCSSNullValue(t) && (t = T.Hooks.templates[e][1]), t;
	            }, extractValue: function extractValue(e, t) {
	              var n = T.Hooks.registered[e];if (n) {
	                var r = n[0],
	                    i = n[1];return t = T.Hooks.cleanRootPropertyValue(r, t), t.toString().match(T.RegEx.valueSplit)[i];
	              }return t;
	            }, injectValue: function injectValue(e, t, n) {
	              var r = T.Hooks.registered[e];if (r) {
	                var i,
	                    o,
	                    a = r[0],
	                    s = r[1];return n = T.Hooks.cleanRootPropertyValue(a, n), i = n.toString().match(T.RegEx.valueSplit), i[s] = t, o = i.join(" ");
	              }return n;
	            } }, Normalizations: { registered: { clip: function clip(e, t, n) {
	                switch (e) {case "name":
	                    return "clip";case "extract":
	                    var r;return T.RegEx.wrappedValueAlreadyExtracted.test(n) ? r = n : (r = n.toString().match(T.RegEx.valueUnwrap), r = r ? r[1].replace(/,(\s+)?/g, " ") : n), r;case "inject":
	                    return "rect(" + n + ")";}
	              }, blur: function blur(e, t, n) {
	                switch (e) {case "name":
	                    return b.State.isFirefox ? "filter" : "-webkit-filter";case "extract":
	                    var r = parseFloat(n);if (!r && 0 !== r) {
	                      var i = n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);r = i ? i[1] : 0;
	                    }return r;case "inject":
	                    return parseFloat(n) ? "blur(" + n + ")" : "none";}
	              }, opacity: function opacity(e, t, n) {
	                if (8 >= h) switch (e) {case "name":
	                    return "filter";case "extract":
	                    var r = n.toString().match(/alpha\(opacity=(.*)\)/i);return n = r ? r[1] / 100 : 1;case "inject":
	                    return t.style.zoom = 1, parseFloat(n) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(n), 10) + ")";} else switch (e) {case "name":
	                    return "opacity";case "extract":
	                    return n;case "inject":
	                    return n;}
	              } }, register: function register() {
	              9 >= h || b.State.isGingerbread || (T.Lists.transformsBase = T.Lists.transformsBase.concat(T.Lists.transforms3D));for (var e = 0; e < T.Lists.transformsBase.length; e++) {
	                !function () {
	                  var t = T.Lists.transformsBase[e];T.Normalizations.registered[t] = function (e, n, i) {
	                    switch (e) {case "name":
	                        return "transform";case "extract":
	                        return s(n) === r || s(n).transformCache[t] === r ? /^scale/i.test(t) ? 1 : 0 : s(n).transformCache[t].replace(/[()]/g, "");case "inject":
	                        var o = !1;switch (t.substr(0, t.length - 1)) {case "translate":
	                            o = !/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;case "scal":case "scale":
	                            b.State.isAndroid && s(n).transformCache[t] === r && 1 > i && (i = 1), o = !/(\d)$/i.test(i);break;case "skew":
	                            o = !/(deg|\d)$/i.test(i);break;case "rotate":
	                            o = !/(deg|\d)$/i.test(i);}return o || (s(n).transformCache[t] = "(" + i + ")"), s(n).transformCache[t];}
	                  };
	                }();
	              }for (var e = 0; e < T.Lists.colors.length; e++) {
	                !function () {
	                  var t = T.Lists.colors[e];T.Normalizations.registered[t] = function (e, n, i) {
	                    switch (e) {case "name":
	                        return t;case "extract":
	                        var o;if (T.RegEx.wrappedValueAlreadyExtracted.test(i)) o = i;else {
	                          var a,
	                              s = { black: "rgb(0, 0, 0)", blue: "rgb(0, 0, 255)", gray: "rgb(128, 128, 128)", green: "rgb(0, 128, 0)", red: "rgb(255, 0, 0)", white: "rgb(255, 255, 255)" };/^[A-z]+$/i.test(i) ? a = s[i] !== r ? s[i] : s.black : T.RegEx.isHex.test(i) ? a = "rgb(" + T.Values.hexToRgb(i).join(" ") + ")" : /^rgba?\(/i.test(i) || (a = s.black), o = (a || i).toString().match(T.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
	                        }return 8 >= h || 3 !== o.split(" ").length || (o += " 1"), o;case "inject":
	                        return 8 >= h ? 4 === i.split(" ").length && (i = i.split(/\s+/).slice(0, 3).join(" ")) : 3 === i.split(" ").length && (i += " 1"), (8 >= h ? "rgb" : "rgba") + "(" + i.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";}
	                  };
	                }();
	              }
	            } }, Names: { camelCase: function camelCase(e) {
	              return e.replace(/-(\w)/g, function (e, t) {
	                return t.toUpperCase();
	              });
	            }, SVGAttribute: function SVGAttribute(e) {
	              var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return (h || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
	            }, prefixCheck: function prefixCheck(e) {
	              if (b.State.prefixMatches[e]) return [b.State.prefixMatches[e], !0];for (var t = ["", "Webkit", "Moz", "ms", "O"], n = 0, r = t.length; r > n; n++) {
	                var i;if (i = 0 === n ? e : t[n] + e.replace(/^\w/, function (e) {
	                  return e.toUpperCase();
	                }), m.isString(b.State.prefixElement.style[i])) return b.State.prefixMatches[e] = i, [i, !0];
	              }return [e, !1];
	            } }, Values: { hexToRgb: function hexToRgb(e) {
	              var t,
	                  n = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
	                  r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e = e.replace(n, function (e, t, n, r) {
	                return t + t + n + n + r + r;
	              }), t = r.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
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
	            } }, getPropertyValue: function getPropertyValue(e, n, i, o) {
	            function a(e, n) {
	              function i() {
	                l && T.setPropertyValue(e, "display", "none");
	              }var u = 0;if (8 >= h) u = d.css(e, n);else {
	                var l = !1;if (/^(width|height)$/.test(n) && 0 === T.getPropertyValue(e, "display") && (l = !0, T.setPropertyValue(e, "display", T.Values.getDisplayType(e))), !o) {
	                  if ("height" === n && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
	                    var c = e.offsetHeight - (parseFloat(T.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingBottom")) || 0);return i(), c;
	                  }if ("width" === n && "border-box" !== T.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
	                    var f = e.offsetWidth - (parseFloat(T.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(T.getPropertyValue(e, "paddingRight")) || 0);
	                    return i(), f;
	                  }
	                }var p;p = s(e) === r ? t.getComputedStyle(e, null) : s(e).computedStyle ? s(e).computedStyle : s(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === n && (n = "borderTopColor"), u = 9 === h && "filter" === n ? p.getPropertyValue(n) : p[n], ("" === u || null === u) && (u = e.style[n]), i();
	              }if ("auto" === u && /^(top|right|bottom|left)$/i.test(n)) {
	                var g = a(e, "position");("fixed" === g || "absolute" === g && /top|left/i.test(n)) && (u = d(e).position()[n] + "px");
	              }return u;
	            }var u;if (T.Hooks.registered[n]) {
	              var l = n,
	                  c = T.Hooks.getRoot(l);i === r && (i = T.getPropertyValue(e, T.Names.prefixCheck(c)[0])), T.Normalizations.registered[c] && (i = T.Normalizations.registered[c]("extract", e, i)), u = T.Hooks.extractValue(l, i);
	            } else if (T.Normalizations.registered[n]) {
	              var f, p;f = T.Normalizations.registered[n]("name", e), "transform" !== f && (p = a(e, T.Names.prefixCheck(f)[0]), T.Values.isCSSNullValue(p) && T.Hooks.templates[n] && (p = T.Hooks.templates[n][1])), u = T.Normalizations.registered[n]("extract", e, p);
	            }if (!/^[\d-]/.test(u)) if (s(e) && s(e).isSVG && T.Names.SVGAttribute(n)) {
	              if (/^(height|width)$/i.test(n)) try {
	                u = e.getBBox()[n];
	              } catch (g) {
	                u = 0;
	              } else u = e.getAttribute(n);
	            } else u = a(e, T.Names.prefixCheck(n)[0]);return T.Values.isCSSNullValue(u) && (u = 0), b.debug >= 2 && console.log("Get " + n + ": " + u), u;
	          }, setPropertyValue: function setPropertyValue(e, n, r, i, o) {
	            var a = n;if ("scroll" === n) o.container ? o.container["scroll" + o.direction] = r : "Left" === o.direction ? t.scrollTo(r, o.alternateValue) : t.scrollTo(o.alternateValue, r);else if (T.Normalizations.registered[n] && "transform" === T.Normalizations.registered[n]("name", e)) T.Normalizations.registered[n]("inject", e, r), a = "transform", r = s(e).transformCache[n];else {
	              if (T.Hooks.registered[n]) {
	                var u = n,
	                    l = T.Hooks.getRoot(n);i = i || T.getPropertyValue(e, l), r = T.Hooks.injectValue(u, r, i), n = l;
	              }if (T.Normalizations.registered[n] && (r = T.Normalizations.registered[n]("inject", e, r), n = T.Normalizations.registered[n]("name", e)), a = T.Names.prefixCheck(n)[0], 8 >= h) try {
	                e.style[a] = r;
	              } catch (c) {
	                b.debug && console.log("Browser does not support [" + r + "] for [" + a + "]");
	              } else s(e) && s(e).isSVG && T.Names.SVGAttribute(n) ? e.setAttribute(n, r) : e.style[a] = r;b.debug >= 2 && console.log("Set " + n + " (" + a + "): " + r);
	            }return [a, r];
	          }, flushTransformCache: function flushTransformCache(e) {
	            function t(t) {
	              return parseFloat(T.getPropertyValue(e, t));
	            }var n = "";if ((h || b.State.isAndroid && !b.State.isChrome) && s(e).isSVG) {
	              var r = { translate: [t("translateX"), t("translateY")], skewX: [t("skewX")], skewY: [t("skewY")], scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")], rotate: [t("rotateZ"), 0, 0] };d.each(s(e).transformCache, function (e) {
	                /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), r[e] && (n += e + "(" + r[e].join(" ") + ") ", delete r[e]);
	              });
	            } else {
	              var i, o;d.each(s(e).transformCache, function (t) {
	                return i = s(e).transformCache[t], "transformPerspective" === t ? (o = i, !0) : (9 === h && "rotateZ" === t && (t = "rotate"), void (n += t + i + " "));
	              }), o && (n = "perspective" + o + " " + n);
	            }T.setPropertyValue(e, "transform", n);
	          } };T.Hooks.register(), T.Normalizations.register(), b.hook = function (e, t, n) {
	          var i = r;return e = a(e), d.each(e, function (e, o) {
	            if (s(o) === r && b.init(o), n === r) i === r && (i = b.CSS.getPropertyValue(o, t));else {
	              var a = b.CSS.setPropertyValue(o, t, n);"transform" === a[0] && b.CSS.flushTransformCache(o), i = a;
	            }
	          }), i;
	        };var C = function k() {
	          function e() {
	            return o ? E.promise || null : u;
	          }function i() {
	            function e(e) {
	              function l(e, t) {
	                var n = r,
	                    i = r,
	                    s = r;return m.isArray(e) ? (n = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || T.RegEx.isHex.test(e[1]) ? s = e[1] : (m.isString(e[1]) && !T.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (i = t ? e[1] : c(e[1], a.duration), e[2] !== r && (s = e[2]))) : n = e, t || (i = i || a.easing), m.isFunction(n) && (n = n.call(o, C, w)), m.isFunction(s) && (s = s.call(o, C, w)), [n || 0, i, s];
	              }function p(e, t) {
	                var n, r;return r = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
	                  return n = e, "";
	                }), n || (n = T.Values.getUnitType(e)), [r, n];
	              }function v() {
	                var e = { myParent: o.parentNode || n.body, position: T.getPropertyValue(o, "position"), fontSize: T.getPropertyValue(o, "fontSize") },
	                    r = e.position === q.lastPosition && e.myParent === q.lastParent,
	                    i = e.fontSize === q.lastFontSize;q.lastParent = e.myParent, q.lastPosition = e.position, q.lastFontSize = e.fontSize;var a = 100,
	                    u = {};if (i && r) u.emToPx = q.lastEmToPx, u.percentToPxWidth = q.lastPercentToPxWidth, u.percentToPxHeight = q.lastPercentToPxHeight;else {
	                  var l = s(o).isSVG ? n.createElementNS("http://www.w3.org/2000/svg", "rect") : n.createElement("div");b.init(l), e.myParent.appendChild(l), d.each(["overflow", "overflowX", "overflowY"], function (e, t) {
	                    b.CSS.setPropertyValue(l, t, "hidden");
	                  }), b.CSS.setPropertyValue(l, "position", e.position), b.CSS.setPropertyValue(l, "fontSize", e.fontSize), b.CSS.setPropertyValue(l, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
	                    b.CSS.setPropertyValue(l, t, a + "%");
	                  }), b.CSS.setPropertyValue(l, "paddingLeft", a + "em"), u.percentToPxWidth = q.lastPercentToPxWidth = (parseFloat(T.getPropertyValue(l, "width", null, !0)) || 1) / a, u.percentToPxHeight = q.lastPercentToPxHeight = (parseFloat(T.getPropertyValue(l, "height", null, !0)) || 1) / a, u.emToPx = q.lastEmToPx = (parseFloat(T.getPropertyValue(l, "paddingLeft")) || 1) / a, e.myParent.removeChild(l);
	                }return null === q.remToPx && (q.remToPx = parseFloat(T.getPropertyValue(n.body, "fontSize")) || 16), null === q.vwToPx && (q.vwToPx = parseFloat(t.innerWidth) / 100, q.vhToPx = parseFloat(t.innerHeight) / 100), u.remToPx = q.remToPx, u.vwToPx = q.vwToPx, u.vhToPx = q.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(u), o), u;
	              }if (a.begin && 0 === C) try {
	                a.begin.call(h, h);
	              } catch (x) {
	                setTimeout(function () {
	                  throw x;
	                }, 1);
	              }if ("scroll" === j) {
	                var S,
	                    k,
	                    N,
	                    A = /^x$/i.test(a.axis) ? "Left" : "Top",
	                    D = parseFloat(a.offset) || 0;a.container ? m.isWrapped(a.container) || m.isNode(a.container) ? (a.container = a.container[0] || a.container, S = a.container["scroll" + A], N = S + d(o).position()[A.toLowerCase()] + D) : a.container = null : (S = b.State.scrollAnchor[b.State["scrollProperty" + A]], k = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === A ? "Top" : "Left")]], N = d(o).offset()[A.toLowerCase()] + D), u = { scroll: { rootPropertyValue: !1, startValue: S, currentValue: S, endValue: N, unitType: "", easing: a.easing, scrollData: { container: a.container, direction: A, alternateValue: k } }, element: o }, b.debug && console.log("tweensContainer (scroll): ", u.scroll, o);
	              } else if ("reverse" === j) {
	                if (!s(o).tweensContainer) return void d.dequeue(o, a.queue);"none" === s(o).opts.display && (s(o).opts.display = "auto"), "hidden" === s(o).opts.visibility && (s(o).opts.visibility = "visible"), s(o).opts.loop = !1, s(o).opts.begin = null, s(o).opts.complete = null, y.easing || delete a.easing, y.duration || delete a.duration, a = d.extend({}, s(o).opts, a);var P = d.extend(!0, {}, s(o).tweensContainer);for (var L in P) {
	                  if ("element" !== L) {
	                    var H = P[L].startValue;P[L].startValue = P[L].currentValue = P[L].endValue, P[L].endValue = H, m.isEmptyObject(y) || (P[L].easing = a.easing), b.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(P[L]), o);
	                  }
	                }u = P;
	              } else if ("start" === j) {
	                var P;s(o).tweensContainer && s(o).isAnimating === !0 && (P = s(o).tweensContainer), d.each(g, function (e, t) {
	                  if (RegExp("^" + T.Lists.colors.join("$|^") + "$").test(e)) {
	                    var n = l(t, !0),
	                        i = n[0],
	                        o = n[1],
	                        a = n[2];if (T.RegEx.isHex.test(i)) {
	                      for (var s = ["Red", "Green", "Blue"], u = T.Values.hexToRgb(i), c = a ? T.Values.hexToRgb(a) : r, f = 0; f < s.length; f++) {
	                        var p = [u[f]];o && p.push(o), c !== r && p.push(c[f]), g[e + s[f]] = p;
	                      }delete g[e];
	                    }
	                  }
	                });for (var O in g) {
	                  var R = l(g[O]),
	                      V = R[0],
	                      M = R[1],
	                      $ = R[2];O = T.Names.camelCase(O);var W = T.Hooks.getRoot(O),
	                      I = !1;if (s(o).isSVG || "tween" === W || T.Names.prefixCheck(W)[1] !== !1 || T.Normalizations.registered[W] !== r) {
	                    (a.display !== r && null !== a.display && "none" !== a.display || a.visibility !== r && "hidden" !== a.visibility) && /opacity|filter/.test(O) && !$ && 0 !== V && ($ = 0), a._cacheValues && P && P[O] ? ($ === r && ($ = P[O].endValue + P[O].unitType), I = s(o).rootPropertyValueCache[W]) : T.Hooks.registered[O] ? $ === r ? (I = T.getPropertyValue(o, W), $ = T.getPropertyValue(o, O, I)) : I = T.Hooks.templates[W][1] : $ === r && ($ = T.getPropertyValue(o, O));var B,
	                        z,
	                        X,
	                        _ = !1;if (B = p(O, $), $ = B[0], X = B[1], B = p(O, V), V = B[0].replace(/^([+-\/*])=/, function (e, t) {
	                      return _ = t, "";
	                    }), z = B[1], $ = parseFloat($) || 0, V = parseFloat(V) || 0, "%" === z && (/^(fontSize|lineHeight)$/.test(O) ? (V /= 100, z = "em") : /^scale/.test(O) ? (V /= 100, z = "") : /(Red|Green|Blue)$/i.test(O) && (V = V / 100 * 255, z = "")), /[\/*]/.test(_)) z = X;else if (X !== z && 0 !== $) if (0 === V) z = X;else {
	                      i = i || v();var U = /margin|padding|left|right|width|text|word|letter/i.test(O) || /X$/.test(O) || "x" === O ? "x" : "y";switch (X) {case "%":
	                          $ *= "x" === U ? i.percentToPxWidth : i.percentToPxHeight;break;case "px":
	                          break;default:
	                          $ *= i[X + "ToPx"];}switch (z) {case "%":
	                          $ *= 1 / ("x" === U ? i.percentToPxWidth : i.percentToPxHeight);break;case "px":
	                          break;default:
	                          $ *= 1 / i[z + "ToPx"];}
	                    }switch (_) {case "+":
	                        V = $ + V;break;case "-":
	                        V = $ - V;break;case "*":
	                        V = $ * V;break;case "/":
	                        V = $ / V;}u[O] = { rootPropertyValue: I, startValue: $, currentValue: $, endValue: V, unitType: z, easing: M }, b.debug && console.log("tweensContainer (" + O + "): " + JSON.stringify(u[O]), o);
	                  } else b.debug && console.log("Skipping [" + W + "] due to a lack of browser support.");
	                }u.element = o;
	              }u.element && (T.Values.addClass(o, "velocity-animating"), F.push(u), "" === a.queue && (s(o).tweensContainer = u, s(o).opts = a), s(o).isAnimating = !0, C === w - 1 ? (b.State.calls.push([F, h, a, null, E.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, f())) : C++);
	            }var i,
	                o = this,
	                a = d.extend({}, b.defaults, y),
	                u = {};switch (s(o) === r && b.init(o), parseFloat(a.delay) && a.queue !== !1 && d.queue(o, a.queue, function (e) {
	              b.velocityQueueEntryFlag = !0, s(o).delayTimer = { setTimeout: setTimeout(e, parseFloat(a.delay)), next: e };
	            }), a.duration.toString().toLowerCase()) {case "fast":
	                a.duration = 200;break;case "normal":
	                a.duration = v;break;case "slow":
	                a.duration = 600;break;default:
	                a.duration = parseFloat(a.duration) || 1;}b.mock !== !1 && (b.mock === !0 ? a.duration = a.delay = 1 : (a.duration *= parseFloat(b.mock) || 1, a.delay *= parseFloat(b.mock) || 1)), a.easing = c(a.easing, a.duration), a.begin && !m.isFunction(a.begin) && (a.begin = null), a.progress && !m.isFunction(a.progress) && (a.progress = null), a.complete && !m.isFunction(a.complete) && (a.complete = null), a.display !== r && null !== a.display && (a.display = a.display.toString().toLowerCase(), "auto" === a.display && (a.display = b.CSS.Values.getDisplayType(o))), a.visibility !== r && null !== a.visibility && (a.visibility = a.visibility.toString().toLowerCase()), a.mobileHA = a.mobileHA && b.State.isMobile && !b.State.isGingerbread, a.queue === !1 ? a.delay ? setTimeout(e, a.delay) : e() : d.queue(o, a.queue, function (t, n) {
	              return n === !0 ? (E.promise && E.resolver(h), !0) : (b.velocityQueueEntryFlag = !0, void e(t));
	            }), "" !== a.queue && "fx" !== a.queue || "inprogress" === d.queue(o)[0] || d.dequeue(o);
	          }var o,
	              u,
	              l,
	              h,
	              g,
	              y,
	              x = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));if (m.isWrapped(this) ? (o = !1, l = 0, h = this, u = this) : (o = !0, l = 1, h = x ? arguments[0].elements || arguments[0].e : arguments[0]), h = a(h)) {
	            x ? (g = arguments[0].properties || arguments[0].p, y = arguments[0].options || arguments[0].o) : (g = arguments[l], y = arguments[l + 1]);var w = h.length,
	                C = 0;if (!/^(stop|finish)$/i.test(g) && !d.isPlainObject(y)) {
	              var S = l + 1;y = {};for (var N = S; N < arguments.length; N++) {
	                m.isArray(arguments[N]) || !/^(fast|normal|slow)$/i.test(arguments[N]) && !/^\d/.test(arguments[N]) ? m.isString(arguments[N]) || m.isArray(arguments[N]) ? y.easing = arguments[N] : m.isFunction(arguments[N]) && (y.complete = arguments[N]) : y.duration = arguments[N];
	              }
	            }var E = { promise: null, resolver: null, rejecter: null };o && b.Promise && (E.promise = new b.Promise(function (e, t) {
	              E.resolver = e, E.rejecter = t;
	            }));var j;switch (g) {case "scroll":
	                j = "scroll";break;case "reverse":
	                j = "reverse";break;case "finish":case "stop":
	                d.each(h, function (e, t) {
	                  s(t) && s(t).delayTimer && (clearTimeout(s(t).delayTimer.setTimeout), s(t).delayTimer.next && s(t).delayTimer.next(), delete s(t).delayTimer);
	                });var A = [];return d.each(b.State.calls, function (e, t) {
	                  t && d.each(t[1], function (n, i) {
	                    var o = y === r ? "" : y;return o !== !0 && t[2].queue !== o && (y !== r || t[2].queue !== !1) || void d.each(h, function (n, r) {
	                      r === i && ((y === !0 || m.isString(y)) && (d.each(d.queue(r, m.isString(y) ? y : ""), function (e, t) {
	                        m.isFunction(t) && t(null, !0);
	                      }), d.queue(r, m.isString(y) ? y : "", [])), "stop" === g ? (s(r) && s(r).tweensContainer && o !== !1 && d.each(s(r).tweensContainer, function (e, t) {
	                        t.endValue = t.currentValue;
	                      }), A.push(e)) : "finish" === g && (t[2].duration = 1));
	                    });
	                  });
	                }), "stop" === g && (d.each(A, function (e, t) {
	                  p(t, !0);
	                }), E.promise && E.resolver(h)), e();default:
	                if (!d.isPlainObject(g) || m.isEmptyObject(g)) {
	                  if (m.isString(g) && b.Redirects[g]) {
	                    var D = d.extend({}, y),
	                        P = D.duration,
	                        L = D.delay || 0;return D.backwards === !0 && (h = d.extend(!0, [], h).reverse()), d.each(h, function (e, t) {
	                      parseFloat(D.stagger) ? D.delay = L + parseFloat(D.stagger) * e : m.isFunction(D.stagger) && (D.delay = L + D.stagger.call(t, e, w)), D.drag && (D.duration = parseFloat(P) || (/^(callout|transition)/.test(g) ? 1e3 : v), D.duration = Math.max(D.duration * (D.backwards ? 1 - e / w : (e + 1) / w), .75 * D.duration, 200)), b.Redirects[g].call(t, t, D || {}, e, w, h, E.promise ? E : r);
	                    }), e();
	                  }var H = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";return E.promise ? E.rejecter(new Error(H)) : console.log(H), e();
	                }j = "start";}var q = { lastParent: null, lastPosition: null, lastFontSize: null, lastPercentToPxWidth: null, lastPercentToPxHeight: null, lastEmToPx: null, remToPx: null, vwToPx: null, vhToPx: null },
	                F = [];d.each(h, function (e, t) {
	              m.isNode(t) && i.call(t);
	            });var O,
	                D = d.extend({}, b.defaults, y);if (D.loop = parseInt(D.loop), O = 2 * D.loop - 1, D.loop) for (var R = 0; O > R; R++) {
	              var V = { delay: D.delay, progress: D.progress };R === O - 1 && (V.display = D.display, V.visibility = D.visibility, V.complete = D.complete), k(h, "reverse", V);
	            }return e();
	          }
	        };b = d.extend(C, b), b.animate = C;var S = t.requestAnimationFrame || g;return b.State.isMobile || n.hidden === r || n.addEventListener("visibilitychange", function () {
	          n.hidden ? (S = function S(e) {
	            return setTimeout(function () {
	              e(!0);
	            }, 16);
	          }, f()) : S = t.requestAnimationFrame || g;
	        }), e.Velocity = b, e !== t && (e.fn.velocity = C, e.fn.velocity.defaults = b.defaults), d.each(["Down", "Up"], function (e, t) {
	          b.Redirects["slide" + t] = function (e, n, i, o, a, s) {
	            var u = d.extend({}, n),
	                l = u.begin,
	                c = u.complete,
	                f = { height: "", marginTop: "", marginBottom: "", paddingTop: "", paddingBottom: "" },
	                p = {};u.display === r && (u.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), u.begin = function () {
	              l && l.call(a, a);for (var n in f) {
	                p[n] = e.style[n];var r = b.CSS.getPropertyValue(e, n);f[n] = "Down" === t ? [r, 0] : [0, r];
	              }p.overflow = e.style.overflow, e.style.overflow = "hidden";
	            }, u.complete = function () {
	              for (var t in p) {
	                e.style[t] = p[t];
	              }c && c.call(a, a), s && s.resolver(a);
	            }, b(e, f, u);
	          };
	        }), d.each(["In", "Out"], function (e, t) {
	          b.Redirects["fade" + t] = function (e, n, i, o, a, s) {
	            var u = d.extend({}, n),
	                l = { opacity: "In" === t ? 1 : 0 },
	                c = u.complete;u.complete = i !== o - 1 ? u.begin = null : function () {
	              c && c.call(a, a), s && s.resolver(a);
	            }, u.display === r && (u.display = "In" === t ? "auto" : "none"), b(this, l, u);
	          };
	        }), b;
	      }(window.jQuery || window.Zepto || window, window, document);
	    }));
	  }).call(t, n(2)(e));
	}, function (e, t) {
	  "use strict";
	  !function (e) {
	    e(document).ready(function () {
	      e(document).on("click.card", ".card", function (t) {
	        e(this).find("> .card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({ translateY: 0 }, { duration: 225, queue: !1, easing: "easeInOutQuad", complete: function complete() {
	            e(this).css({ display: "none" });
	          } }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (e(t.target).closest(".card").css("overflow", "hidden"), e(this).find(".card-reveal").css({ display: "block" }).velocity("stop", !1).velocity({ translateY: "-100%" }, { duration: 300, queue: !1, easing: "easeInOutQuad" })));
	      });
	    });
	  }(jQuery);
	}]);

/***/ },
/* 7 */
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
