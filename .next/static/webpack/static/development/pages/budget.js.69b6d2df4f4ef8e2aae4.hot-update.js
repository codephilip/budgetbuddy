webpackHotUpdate("static\\development\\pages\\budget.js",{

/***/ "./pages/budget.js":
/*!*************************!*\
  !*** ./pages/budget.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Budget_BudgetComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Budget/BudgetComponent */ "./components/Budget/BudgetComponent.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");

var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\new_MERN\\pages\\budget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 //import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";




function Budget(_ref) {
  var product = _ref.product,
      user = _ref.user;
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(_components_Budget_BudgetComponent__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, product, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), __jsx(_components_Budget_BudgetComponent__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    user: user
  }, product, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })));
}

Product.getInitialProps = function (_ref2) {
  var _id = _ref2.query._id;
  var url = 'http://localhost/api/budget';
  var payload = {
    params: {
      _id: _id
    }
  };
  var response = axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(url, payload);
};

/* harmony default export */ __webpack_exports__["default"] = (Budget);

/***/ })

})
//# sourceMappingURL=budget.js.69b6d2df4f4ef8e2aae4.hot-update.js.map