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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharts", function() { return getCharts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inita", function() { return inita; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTables", function() { return getTables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTablesNoData", function() { return getTablesNoData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_unfetch__);


const toQueryString = obj => {
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

const inita = data => {
	return function (dispatch) {
		dispatch({
			type: "ADIMPRESSION_APPCODE",
			payload: data
		});
	};
};

const getTablesNoData = data => {
	return async function (dispatch) {

		await dispatch({
			type: "PAGE1_LOADING",
			payload: true
		});

		dispatch({
			type: "PAGE1_OFFSET",
			payload: data.offset
		});

		dispatch({
			type: "PAGE1_LIMIT",
			payload: data.limit
		});

		let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/tableNoChange", {
			method: 'POST',
			mode: 'cors',
			cache: 'force-cache',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer xxx'
			},

			cache: 'default',
			body: toQueryString(data)
		});

		let json = await res.json();

		await dispatch({
			type: "PAGE1_TABLEDATA",
			payload: json.data
		});

		await dispatch({
			type: "PAGE1_TOTAL",
			payload: json.total
		});

		await dispatch({
			type: "PAGE1_LOADING",
			payload: false
		});
	};
};

const getTables = data => {
	return async function (dispatch) {

		await dispatch({
			type: "PAGE1_LOADING",
			payload: true
		});

		dispatch({
			type: "PAGE1_OFFSET",
			payload: data.offset
		});

		dispatch({
			type: "PAGE1_LIMIT",
			payload: data.limit
		});

		let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/nextDemoTables", {
			method: 'POST',
			mode: 'cors',
			cache: 'force-cache',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Authorization': 'Bearer xxx'
			},

			cache: 'default',
			body: toQueryString(data)
		});

		let json = await res.json();

		await dispatch({
			type: "PAGE1_TABLEDATA",
			payload: json.data
		});

		await dispatch({
			type: "PAGE1_TOTAL",
			payload: json.total
		});

		await dispatch({
			type: "PAGE1_LOADING",
			payload: false
		});
	};
};

const getCharts = data => {
	return async function (dispatch) {

		let res = await fetch("https://www.easy-mock.com/mock/5a2dca93e9ee5f7c09d8c6d7/Aaa/demo", {
			method: 'GET',
			mode: 'cors',
			cache: 'default'

		});

		let json = await res.json();

		dispatch({
			type: "ADIMPRESSION_APPCODE",
			payload: json.number2
		});
	};
};



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external__redux_ = __webpack_require__(1);
var external__redux__default = /*#__PURE__*/__webpack_require__.n(external__redux_);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external__redux_devtools_extension_ = __webpack_require__(13);
var external__redux_devtools_extension__default = /*#__PURE__*/__webpack_require__.n(external__redux_devtools_extension_);

// EXTERNAL MODULE: external "redux-thunk"
var external__redux_thunk_ = __webpack_require__(14);
var external__redux_thunk__default = /*#__PURE__*/__webpack_require__.n(external__redux_thunk_);

// CONCATENATED MODULE: ./modules/about/reducer.js
const About = (state, action) => {

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
const reducers = {
	"About": About
};

// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer 
/* harmony default export */ var modules_reducers = (Object(external__redux_["combineReducers"])(reducers));
//
// CONCATENATED MODULE: ./store/initializeStore.js







const middleware = [external__redux_thunk__default.a];

const initializeStore = initialState => {
	return Object(external__redux_["createStore"])(modules_reducers, initialState, Object(external__redux_devtools_extension_["composeWithDevTools"])(Object(external__redux_["applyMiddleware"])(...middleware)));
};

/* harmony default export */ var store_initializeStore = __webpack_exports__["a"] = (initializeStore);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_notification__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_antd_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_antd_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_redux_wrapper__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_next_redux_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_next_redux_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__store_initializeStore__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions__ = __webpack_require__(4);






/**
 * 引入公共文件开始
 */


const {
	Header,
	Footer,
	Sider,
	Content
} = __WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a;

 // 引入内置组件













/**
 * 引入公共文件结束
 */

class About extends __WEBPACK_IMPORTED_MODULE_3_react__["Component"] {
	componentDidMount() {

		__WEBPACK_IMPORTED_MODULE_2_antd_lib_notification___default.a['success']({
			message: 'SSR 秒开（无数据变化的）',
			description: '用户刷新无感知性能体验'
		});
	}

	render() {

		return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
			'div',
			null,
			__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_4_next_head___default.a,
				null,
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					'title',
					null,
					'\u4E0D\u53D8\u5316\u7684\u6570\u636E'
				),
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' }),
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/antd.css' }),
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('link', { rel: 'stylesheet', href: '/static/demo.css' })
			),
			__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
				__WEBPACK_IMPORTED_MODULE_0_antd_lib_layout___default.a,
				null,
				__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
					Header,
					{ style: { color: "white" } },
					__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
						'div',
						{ className: 'logo' },
						'SSR demo'
					),
					__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
						__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a,
						{
							theme: 'dark',
							mode: 'horizontal',
							selectedKeys: ['2'],
							style: { lineHeight: '64px' }
						},
						__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item,
							{ key: '1' },
							__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
								__WEBPACK_IMPORTED_MODULE_5_next_link___default.a,
								{ href: '/', replace: true },
								__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
									'a',
									null,
									'\u53D8\u5316\u7684\u6570\u636E'
								)
							)
						),
						__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
							__WEBPACK_IMPORTED_MODULE_1_antd_lib_menu___default.a.Item,
							{ key: '2' },
							'\u4E0D\u53D8\u5316\u7684\u6570\u636E'
						)
					)
				)
			)
		);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })
/******/ ]);