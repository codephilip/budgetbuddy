module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ec26");


/***/ }),

/***/ "FfxO":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ec26":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__("FfxO");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "react-google-charts"
var external_react_google_charts_ = __webpack_require__("ka8R");
var external_react_google_charts_default = /*#__PURE__*/__webpack_require__.n(external_react_google_charts_);

// CONCATENATED MODULE: ./components/Charts/Piechart.js
var __jsx = external_react_default.a.createElement;



function Piechart() {
  return __jsx("div", null, __jsx(external_react_google_charts_default.a // width={'500px'}
  // height={'300px'}
  , {
    chartType: "PieChart",
    loader: __jsx("div", null, "Loading Pie Chart"),
    data: [['Category', 'Dollars'], ['Housing', 800], ['Food', 200], ['Utilities', 150], ['Shopping', 100], ['Dept Payment', 50]],
    options: {
      title: "Spending Breakdown",
      legend: 'none'
    }
  }));
}

/* harmony default export */ var Charts_Piechart = (Piechart);
// CONCATENATED MODULE: ./components/Charts/BudgetUsageGraph.js
var BudgetUsageGraph_jsx = external_react_default.a.createElement;



function BudgetUsageGraph() {
  return BudgetUsageGraph_jsx("div", null, BudgetUsageGraph_jsx(external_react_google_charts_default.a // width={'500px'}
  // height={'300px'}
  , {
    chartType: "BarChart",
    loader: BudgetUsageGraph_jsx("div", null, "Loading Bar Chart"),
    diffdata: {
      old: [["Category", "Dollars"], ["Housing", 1000], ["Food", 300], ["Utilities", 175], ["Shopping", 50], ["Dept Payment", 150]],
      new: [["Category", "Dollars"], ["Housing", 800], ["Food", 200], ["Utilities", 150], ["Shopping", 100], ["Dept Payment", 50]]
    },
    options: {
      title: 'Budget Usage By Category',
      legend: 'none',
      colors: ['#4db994', 'black']
    }
  }));
}

/* harmony default export */ var Charts_BudgetUsageGraph = (BudgetUsageGraph);
// CONCATENATED MODULE: ./components/Summary/SummaryComponent.js

var SummaryComponent_jsx = external_react_default.a.createElement;




function Summary() {
  return SummaryComponent_jsx("div", {
    className: "Summary"
  }, SummaryComponent_jsx("h1", null, "Summary"), SummaryComponent_jsx(external_react_bootstrap_["Row"], null, SummaryComponent_jsx(external_react_bootstrap_["Col"], null, SummaryComponent_jsx(Charts_Piechart, null)), SummaryComponent_jsx(external_react_bootstrap_["Col"], null, SummaryComponent_jsx(external_react_bootstrap_["Table"], {
    responsive: true
  }, SummaryComponent_jsx("thead", null, SummaryComponent_jsx("tr", null, SummaryComponent_jsx("th", null, "#"), SummaryComponent_jsx("th", null, "Name"), SummaryComponent_jsx("th", null, "Date"), SummaryComponent_jsx("th", null, "Amount"))), SummaryComponent_jsx("tbody", null, SummaryComponent_jsx("tr", null, SummaryComponent_jsx("td", null, "1"), SummaryComponent_jsx("td", null, "Town & Country"), SummaryComponent_jsx("td", null, "10/16/2020"), SummaryComponent_jsx("td", null, "$85.21")), SummaryComponent_jsx("tr", null, SummaryComponent_jsx("td", null, "2"), SummaryComponent_jsx("td", null, "Car Payment"), SummaryComponent_jsx("td", null, "10/01/2020"), SummaryComponent_jsx("td", null, "$350"))))), SummaryComponent_jsx(external_react_bootstrap_["Col"], null, SummaryComponent_jsx(Charts_BudgetUsageGraph, null))));
}

/* harmony default export */ var SummaryComponent = (Summary);
// CONCATENATED MODULE: ./pages/summary.js

var summary_jsx = external_react_default.a.createElement;
 //import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";



function summary_Summary() {
  return summary_jsx(external_semantic_ui_react_["Segment"], null, summary_jsx(SummaryComponent, null), summary_jsx(SummaryComponent, null));
}

/* harmony default export */ var summary = __webpack_exports__["default"] = (summary_Summary);

/***/ }),

/***/ "ka8R":
/***/ (function(module, exports) {

module.exports = require("react-google-charts");

/***/ })

/******/ });