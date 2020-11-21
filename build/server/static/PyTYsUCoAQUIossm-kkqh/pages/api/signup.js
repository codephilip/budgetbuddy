module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("nGc0");


/***/ }),

/***/ "1TxS":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isLength");

/***/ }),

/***/ "FiKB":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "OiCc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const {
  String
} = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema.Types;
const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  role: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin", "root"]
  }
}, {
  timestamps: true
});
/* harmony default export */ __webpack_exports__["a"] = (mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.models.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model("User", UserSchema));

/***/ }),

/***/ "R+uO":
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ "jeq0":
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "nGc0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./utils/connectDb.js
var connectDb = __webpack_require__("rn2G");

// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__("OiCc");

// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__("FiKB");
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);

// CONCATENATED MODULE: ./models/Cart.js

const {
  ObjectId,
  Number: Cart_Number
} = external_mongoose_default.a.Schema.Types;
const CartSchema = new external_mongoose_default.a.Schema({
  user: {
    type: ObjectId,
    ref: "User"
  },
  products: [{
    quantity: {
      type: Cart_Number,
      default: 1
    },
    product: {
      type: ObjectId,
      ref: "Product"
    }
  }]
});
/* harmony default export */ var Cart = (external_mongoose_default.a.models.Cart || external_mongoose_default.a.model("Cart", CartSchema));
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__("jeq0");
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);

// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__("tMJi");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);

// EXTERNAL MODULE: external "validator/lib/isEmail"
var isEmail_ = __webpack_require__("R+uO");
var isEmail_default = /*#__PURE__*/__webpack_require__.n(isEmail_);

// EXTERNAL MODULE: external "validator/lib/isLength"
var isLength_ = __webpack_require__("1TxS");
var isLength_default = /*#__PURE__*/__webpack_require__.n(isLength_);

// CONCATENATED MODULE: ./pages/api/signup.js







Object(connectDb["a" /* default */])();
/* harmony default export */ var signup = __webpack_exports__["default"] = (async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body;

  try {
    // 1) Validate name / email / password
    if (!isLength_default()(name, {
      min: 3,
      max: 10
    })) {
      return res.status(422).send("Name must be 3-10 characters long");
    } else if (!isLength_default()(password, {
      min: 6
    })) {
      return res.status(422).send("Password must be at least 6 characters");
    } else if (!isEmail_default()(email)) {
      return res.status(422).send("Email must be valid");
    } // 2) Check to see if the user already exists in the db


    const user = await User["a" /* default */].findOne({
      email
    });

    if (user) {
      return res.status(422).send(`User already exists with email ${email}`);
    } // 3) --if not, hash their password


    const hash = await external_bcrypt_default.a.hash(password, 10); // 4) create user

    const newUser = await new User["a" /* default */]({
      name,
      email,
      password: hash
    }).save();
    console.log({
      newUser
    }); // 5) create cart for new user

    await new Cart({
      user: newUser._id
    }).save(); // 6) create token for the new user

    const token = external_jsonwebtoken_default.a.sign({
      userId: newUser._id
    }, "<insert-jwt-secret>", {
      expiresIn: "7d"
    }); // 7) send back token

    res.status(201).json(token);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error signing up user. Please try again later");
  }
});

/***/ }),

/***/ "rn2G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("FiKB");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};

async function connectDb() {
  if (connection.isConnected) {
    // Use existing database connection
    console.log("Using existing connection");
    return;
  } // Use new database connection


  const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect("mongodb+srv://phigeh:JuSf0bwS2UybQ7gT@cluster0.kthn1.mongodb.net/restAPIdb?retryWrites=true&w=majority", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  console.log("DB Connected");
  connection.isConnected = db.connections[0].readyState;
}

/* harmony default export */ __webpack_exports__["a"] = (connectDb);

/***/ }),

/***/ "tMJi":
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ })

/******/ });