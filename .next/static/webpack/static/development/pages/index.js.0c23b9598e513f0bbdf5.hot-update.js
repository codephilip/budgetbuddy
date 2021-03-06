webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Index/ProductList.js":
/*!*****************************************!*\
  !*** ./components/Index/ProductList.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\new_MERN\\components\\Index\\ProductList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ProductList(_ref) {
  var products = _ref.products;

  function mapProductsToItems(products) {
    return products.map(function (product) {
      return {
        header: product.name,
        image: product.mediaUrl,
        meta: "$".concat(product.price),
        color: "teal",
        fluid: true,
        childKey: product._id,
        href: "/product?_id=".concat(product._id)
      };
    });
  }

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Group, {
    stackable: true,
    itemsPerRow: "3",
    centered: true,
    items: mapProductsToItems(products),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Index_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Index/ProductList */ "./components/Index/ProductList.js");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");


var _jsxFileName = "C:\\Users\\phili\\Documents\\Coding\\MERN\\11.20.20MERN\\new_MERN\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Home(_ref) {
  var products = _ref.products;
  return __jsx(_components_Index_ProductList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    products: products,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
}

Home.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var url, response;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = "".concat(_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__["default"], "/api/products"); // fetch data on server

          _context.next = 3;
          return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(url);

        case 3:
          response = _context.sent;
          return _context.abrupt("return", {
            products: response.data
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.0c23b9598e513f0bbdf5.hot-update.js.map