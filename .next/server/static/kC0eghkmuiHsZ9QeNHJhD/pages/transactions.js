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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hJKp");


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

/***/ "hJKp":
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

// CONCATENATED MODULE: ./components/Transactions/TransactionsComponent.js
var __jsx = external_react_default.a.createElement;



function MyTransactions() {
  return __jsx("div", {
    className: "Transactions"
  }, __jsx("h1", {
    className: "ml-0"
  }, "Transactions"), __jsx(external_react_bootstrap_["Row"], {
    className: "mt-3 ml-0 mr-0"
  }, __jsx(external_react_bootstrap_["Form"], {
    onSubmit: this
  }, __jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "transactionForm.Type",
    inline: true
  }, __jsx(external_react_bootstrap_["Form"].Label, null, "Transaction type"), __jsx(external_react_bootstrap_["Form"].Control, {
    as: "select"
  }, __jsx("option", {
    value: "income"
  }, "Income"), __jsx("option", {
    value: "housing"
  }, "Housing"), __jsx("option", {
    value: "transportation"
  }, "Transportation"), __jsx("option", {
    value: "food"
  }, "Food"), __jsx("option", {
    value: "utilities"
  }, "Utilities"), __jsx("option", {
    value: "medical"
  }, "Medical/Healthcare"), __jsx("option", {
    value: "insurance"
  }, "Insurance"), __jsx("option", {
    value: "personal"
  }, "Personal"), __jsx("option", {
    value: "debt"
  }, "Debt Payments"), __jsx("option", {
    value: "entertainment"
  }, "Entertainment"), __jsx("option", {
    value: "miscellaneous"
  }, "Miscellaneous"))), __jsx(external_react_bootstrap_["Form"].Check, {
    inline: true,
    type: "checkbox",
    label: "Recurring"
  }), __jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "transactionForm.Name"
  }, __jsx(external_react_bootstrap_["Form"].Label, null, "Transaction Name"), __jsx(external_react_bootstrap_["Form"].Control, {
    type: "text",
    placeholder: "Enter transaction name here"
  })), __jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "transactionForm.Date"
  }, __jsx(external_react_bootstrap_["Form"].Label, null, "Transaction Date"), __jsx(external_react_bootstrap_["Form"].Control, {
    type: "date"
  })), __jsx(external_react_bootstrap_["Form"].Group, {
    controlId: "transactionForm.Amount"
  }, __jsx(external_react_bootstrap_["Form"].Label, null, "Transaction Amount"), __jsx(external_react_bootstrap_["Form"].Control, {
    type: "number",
    placeholder: "0"
  })), __jsx(external_react_bootstrap_["Button"], {
    variant: "primary",
    type: "submit"
  }, "Submit"))), __jsx(external_react_bootstrap_["Row"], {
    className: "mt-3"
  }, __jsx("h2", null, "All Transactions"), __jsx(external_react_bootstrap_["Table"], {
    responsive: true
  }, __jsx("thead", null, __jsx("tr", null, __jsx("th", null, "#"), __jsx("th", null, "Name"), __jsx("th", null, "Date"), __jsx("th", null, "Amount"))), __jsx("tbody", null, __jsx("tr", null, __jsx("td", null, "1"), __jsx("td", null, "Town & Country"), __jsx("td", null, "10/16/2020"), __jsx("td", null, "$85.21")), __jsx("tr", null, __jsx("td", null, "2"), __jsx("td", null, "Car Payment"), __jsx("td", null, "10/01/2020"), __jsx("td", null, "$350"))))));
}

/* harmony default export */ var TransactionsComponent = (MyTransactions);
// CONCATENATED MODULE: ./pages/transactions.js

var transactions_jsx = external_react_default.a.createElement;
 //import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";



function Transactions() {
  return transactions_jsx(external_semantic_ui_react_["Segment"], null, transactions_jsx(TransactionsComponent, null), transactions_jsx(TransactionsComponent, null));
}

/* harmony default export */ var transactions = __webpack_exports__["default"] = (Transactions);

/***/ })

/******/ });