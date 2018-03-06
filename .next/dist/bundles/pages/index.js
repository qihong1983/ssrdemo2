module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharts", function() { return getCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inita", function() { return inita; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTables", function() { return getTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTablesNoData", function() { return getTablesNoData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_unfetch__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var toQueryString = function toQueryString(obj) {
	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];
		if (Array.isArray(val)) {
			return val.sort().map(function (val2) {
				return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
			}).join('&');
		}
		return encodeURIComponent(key) + '=' + encodeURIComponent(val);
	}).join('&') : '';
};

var inita = function inita(data) {
	return function (dispatch) {
		dispatch({
			type: "ADIMPRESSION_APPCODE",
			payload: data
		});
	};
};

var getTablesNoData = function getTablesNoData(data) {
	return function () {
		var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(dispatch) {
			var _fetch;

			var res, json;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return dispatch({
								type: "PAGE1_LOADING",
								payload: true
							});

						case 2:

							dispatch({
								type: "PAGE1_OFFSET",
								payload: data.offset
							});

							dispatch({
								type: "PAGE1_LIMIT",
								payload: data.limit
							});

							_context.next = 6;
							return fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/tableNoChange", (_fetch = {
								method: 'POST',
								mode: 'cors',
								cache: 'force-cache',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
									'Authorization': 'Bearer xxx'
								}

							}, _defineProperty(_fetch, 'cache', 'default'), _defineProperty(_fetch, 'body', toQueryString(data)), _fetch));

						case 6:
							res = _context.sent;
							_context.next = 9;
							return res.json();

						case 9:
							json = _context.sent;
							_context.next = 12;
							return dispatch({
								type: "PAGE1_TABLEDATA",
								payload: json.data
							});

						case 12:
							_context.next = 14;
							return dispatch({
								type: "PAGE1_TOTAL",
								payload: json.total
							});

						case 14:
							_context.next = 16;
							return dispatch({
								type: "PAGE1_LOADING",
								payload: false
							});

						case 16:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		return function (_x) {
			return _ref.apply(this, arguments);
		};
	}();
};

var getTables = function getTables(data) {
	return function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(dispatch) {
			var _fetch2;

			var res, json;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return dispatch({
								type: "PAGE1_LOADING",
								payload: true
							});

						case 2:

							dispatch({
								type: "PAGE1_OFFSET",
								payload: data.offset
							});

							dispatch({
								type: "PAGE1_LIMIT",
								payload: data.limit
							});

							_context2.next = 6;
							return fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/nextDemoTables", (_fetch2 = {
								method: 'POST',
								mode: 'cors',
								cache: 'force-cache',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
									'Authorization': 'Bearer xxx'
								}

							}, _defineProperty(_fetch2, 'cache', 'default'), _defineProperty(_fetch2, 'body', toQueryString(data)), _fetch2));

						case 6:
							res = _context2.sent;
							_context2.next = 9;
							return res.json();

						case 9:
							json = _context2.sent;
							_context2.next = 12;
							return dispatch({
								type: "PAGE1_TABLEDATA",
								payload: json.data
							});

						case 12:
							_context2.next = 14;
							return dispatch({
								type: "PAGE1_TOTAL",
								payload: json.total
							});

						case 14:
							_context2.next = 16;
							return dispatch({
								type: "PAGE1_LOADING",
								payload: false
							});

						case 16:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		return function (_x2) {
			return _ref2.apply(this, arguments);
		};
	}();
};

var getCharts = function getCharts(data) {
	return function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(dispatch) {
			var res, json;
			return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/demo", {
								method: 'GET',
								mode: 'cors',
								cache: 'default'

							});

						case 2:
							res = _context3.sent;
							_context3.next = 5;
							return res.json();

						case 5:
							json = _context3.sent;


							dispatch({
								type: "ADIMPRESSION_APPCODE",
								payload: json.number2
							});

						case 7:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		return function (_x3) {
			return _ref3.apply(this, arguments);
		};
	}();
};



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(0);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external__redux_devtools_extension_ = __webpack_require__(12);
var external__redux_devtools_extension__default = /*#__PURE__*/__webpack_require__.n(external__redux_devtools_extension_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(13);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// CONCATENATED MODULE: ./modules/about/reducer.js
var About = function About(state, action) {

  if (typeof state === "undefined") {
    //初始化
    return {
      columns: [{
        title: '日期',
        dataIndex: 'day',
        key: 'day'
      }, {
        title: '数据1',
        dataIndex: 'n1',
        key: 'n1'
      }, {
        title: '数据2',
        dataIndex: 'n2',
        key: 'n2'
      }, {
        title: '数据3',
        dataIndex: 'n3',
        key: 'n3'
      }, {
        title: '数据4',
        dataIndex: 'n4',
        key: 'n4'
      }, {
        title: '数据5 ',
        dataIndex: 'n5',
        key: 'n5'
      }, {
        title: '数据6',
        dataIndex: 'n6',
        key: 'n6'
      }],
      offset: 1,
      limit: 1,
      total: 1,
      loading: false,
      tableData: []
    };
  }

  switch (action.type) {
    case "ADIMPRESSION_APPCODE":
      //操作系统状态
      return Object.assign({}, state, {
        appCode: action.payload
      });

    case "ADIMPRESSION_CHANNELCATEGORY":
      //操作系统状态
      return Object.assign({}, state, {
        channelCategory: action.payload
      });

    case "ADIMPRESSION_CHANNELNAME":
      //操作系统状态
      return Object.assign({}, state, {
        channelName: action.payload
      });
    case "PAGE1_COLUMNS":
      return Object.assign({}, state, {
        columns: action.payload
      });
    case "PAGE1_TABLEDATA":
      return Object.assign({}, state, {
        tableData: action.payload
      });
    case "PAGE1_OFFSET":
      return Object.assign({}, state, {
        offset: action.payload
      });

    case "PAGE1_LIMIT":
      return Object.assign({}, state, {
        limit: action.payload
      });
    case "PAGE1_TOTAL":
      return Object.assign({}, state, {
        total: action.payload
      });

    case "PAGE1_LOADING":
      return Object.assign({}, state, {
        loading: action.payload
      });

    default:
      //返回初始化
      return state;
  }
};


// CONCATENATED MODULE: ./modules/reducers.js



// 合并到主reducer
var reducers = {
	"About": About
};

// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer 
/* harmony default export */ var modules_reducers = (Object(external__redux_["combineReducers"])(reducers));
//
// CONCATENATED MODULE: ./store/initializeStore.js







var middleware = [external__redux_thunk__default.a];

var initializeStore_initializeStore = function initializeStore(initialState) {
	return Object(external__redux_["createStore"])(modules_reducers, initialState, Object(external__redux_devtools_extension_["composeWithDevTools"])(external__redux_["applyMiddleware"].apply(undefined, middleware)));
};

/* harmony default export */ var store_initializeStore = __webpack_exports__["a"] = (initializeStore_initializeStore);

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_antd___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_antd__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_initializeStore__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions__ = __webpack_require__(3);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Header = __WEBPACK_IMPORTED_MODULE_5_antd__["Layout"].Header,
    Footer = __WEBPACK_IMPORTED_MODULE_5_antd__["Layout"].Footer,
    Sider = __WEBPACK_IMPORTED_MODULE_5_antd__["Layout"].Sider,
    Content = __WEBPACK_IMPORTED_MODULE_5_antd__["Layout"].Content;




 // 引入内置组件



var cookieParser = __webpack_require__(19);




var Index = function (_React$Component) {
	_inherits(Index, _React$Component);

	_createClass(Index, null, [{
		key: 'getInitialProps',
		value: function () {
			var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
				var query = _ref.query,
				    store = _ref.store,
				    isServer = _ref.isServer;
				var data, params;
				return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:

								console.log(11);
								// global.token = 'aaa';

								data = store.getState();
								params = {
									limit: data.limit,
									offset: 1
								};
								_context.next = 5;
								return store.dispatch(__WEBPACK_IMPORTED_MODULE_11__actions__["getTables"](params));

							case 5:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps(_x) {
				return _ref2.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	function Index(props) {
		_classCallCheck(this, Index);

		return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));
	}

	_createClass(Index, [{
		key: 'componentDidMount',
		value: function componentDidMount() {

			__WEBPACK_IMPORTED_MODULE_5_antd__["notification"]['success']({
				message: 'SSR 秒开(有数据变化的)',
				description: '用户刷新无感知性能体验'
			});
		}
	}, {
		key: 'addKey',
		value: function addKey(data, str) {
			var arr = [];

			data.map(function (v, k) {
				v.key = str + k;
				arr.push(v);
			});

			return arr;
		}
	}, {
		key: 'handleTableChange',
		value: function handleTableChange(pagination, filters, sorter) {
			var params = {

				offset: pagination.current,
				limit: pagination.pageSize
			};

			this.props.getTables(params);
		}
	}, {
		key: 'render',
		value: function render() {

			var pagination = {
				current: this.props.index.offset,
				pageSize: this.props.index.limit,
				total: this.props.index.total
			};

			this.addKey(this.props.index.tableData, 'index' + new Date().getTime());

			return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
				'div',
				null,
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_7_next_head___default.a,
					null,
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						'title',
						null,
						'\u53D8\u5316\u7684\u6570\u636E'
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/antd.css' }),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/demo.css' })
				),
				__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
					__WEBPACK_IMPORTED_MODULE_5_antd__["Layout"],
					null,
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						Header,
						{ style: { color: "white" } },
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'div',
							{ className: 'logo' },
							'SSR demo'
						),
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_5_antd__["Menu"],
							{
								theme: 'dark',
								mode: 'horizontal',
								selectedKeys: ['1'],
								style: { lineHeight: '64px' }
							},
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_5_antd__["Menu"].Item,
								{ key: '1' },
								'\u53D8\u5316\u7684\u6570\u636E'
							),
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_5_antd__["Menu"].Item,
								{ key: '2' },
								__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
									__WEBPACK_IMPORTED_MODULE_8_next_link___default.a,
									{ href: '/about', replace: true },
									__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
										'a',
										null,
										'\u4E0D\u53D8\u5316\u7684\u6570\u636E'
									)
								)
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						Content,
						null,
						__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
							'div',
							{ style: { background: '#ECECEC', padding: '30px' } },
							__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_5_antd__["Card"],
								{ title: '\u5237\u65B0\u6216\u5F3A\u5237\u540E\u7528\u6237\u65E0\u611F\u77E5\u7684\u6027\u80FD\u4F53\u9A8C(\u6709\u6570\u636E\u53D8\u5316)', bordered: false },
								__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_antd__["Table"], {
									columns: this.props.index.columns,
									dataSource: this.props.index.tableData,
									hoverable: true,
									loading: this.props.index.loading,
									pagination: pagination,
									onChange: this.handleTableChange.bind(this)
								})
							)
						)
					),
					__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
						Footer,
						null,
						'Footer'
					)
				)
			);
		}
	}]);

	return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

//将state.counter绑定到props的counter


var mapStateToProps = function mapStateToProps(state) {
	return {
		index: state.About
	};
};

//将action的所有方法绑定到props上
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	//全量
	return Object(__WEBPACK_IMPORTED_MODULE_6_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_11__actions__, dispatch);
};

Index = Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(Index);

Index = __WEBPACK_IMPORTED_MODULE_2_next_redux_wrapper___default()(__WEBPACK_IMPORTED_MODULE_10__store_initializeStore__["a" /* default */])(Index);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_9_next_router__["withRouter"])(Index));

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ })
/******/ ]);