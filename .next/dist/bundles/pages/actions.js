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
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 4:
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



/***/ })

/******/ });