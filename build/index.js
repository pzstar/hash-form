/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createSuper)
/* harmony export */ });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(t) {
  var r = (0,_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function () {
    var e,
      o = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t);
    if (r) {
      var s = (0,_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return (0,_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, e);
  };
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, _getPrototypeOf(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _isNativeReflectConstruct)
/* harmony export */ });
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectSpread2)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(t, e) {
  if (e && ("object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _taggedTemplateLiteral)
/* harmony export */ });
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(t)
    }
  }));
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(r) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCache)
/* harmony export */ });
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Middleware.js");
/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! stylis */ "./node_modules/stylis/src/Parser.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");





var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      break;
    }

    (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)();
  }

  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.slice)(begin, stylis__WEBPACK_IMPORTED_MODULE_3__.position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch ((0,stylis__WEBPACK_IMPORTED_MODULE_3__.token)(character)) {
      case 0:
        // &\f
        if (character === 38 && (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(stylis__WEBPACK_IMPORTED_MODULE_3__.position - 1, points, index);
        break;

      case 2:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_3__.delimit)(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.peek)() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += (0,stylis__WEBPACK_IMPORTED_MODULE_4__.from)(character);
    }
  } while (character = (0,stylis__WEBPACK_IMPORTED_MODULE_3__.next)());

  return parsed;
};

var getRules = function getRules(value, points) {
  return (0,stylis__WEBPACK_IMPORTED_MODULE_3__.dealloc)(toRules((0,stylis__WEBPACK_IMPORTED_MODULE_3__.alloc)(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();
var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value;
  var parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};
var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses) {
      var isNested = !!element.parent; // in nested rules comments become children of the "auto-inserted" rule and that's always the `element.parent`
      //
      // considering this input:
      // .a {
      //   .b /* comm */ {}
      //   color: hotpink;
      // }
      // we get output corresponding to this:
      // .a {
      //   & {
      //     /* comm */
      //     color: hotpink;
      //   }
      //   .b {}
      // }

      var commentContainer = isNested ? element.parent.children : // global rule at the root level
      children;

      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];

        if (node.line < element.line) {
          break;
        } // it is quite weird but comments are *usually* put at `column: element.column - 1`
        // so we seek *from the end* for the node that is earlier than the rule's `element` and check that
        // this will also match inputs like this:
        // .a {
        //   /* comm */
        //   .b {}
        // }
        //
        // but that is fine
        //
        // it would be the easiest to change the placement of the comment to be the first child of the rule:
        // .a {
        //   .b { /* comm */ }
        // }
        // with such inputs we wouldn't have to search for the comment at all
        // TODO: consider changing this comment placement in the next major version


        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }

          break;
        }
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

/* eslint-disable no-fallthrough */

function prefix(value, length) {
  switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.hash)(value, length)) {
    // color-adjust
    case 5103:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
    // order

    case 6165:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(\w+).+(:[^]+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-$1$2' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-item-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-line-pack' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-' + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, '-grow', '') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /([^-])(transform)/g, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(zoom-|grab)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), /(image-set)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(image-set\([^]*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(flex-)?(.*)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'box-pack:$3' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+)-inline(.+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 1 - length > 6) switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2-$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, 'stretch') ? prefix((0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, (0,stylis__WEBPACK_IMPORTED_MODULE_4__.strlen)(value) - 3 - (~(0,stylis__WEBPACK_IMPORTED_MODULE_4__.indexof)(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, ':', ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + '$2$3' + '$1' + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.charat)(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + value + stylis__WEBPACK_IMPORTED_MODULE_5__.MS + value + value;
  }

  return value;
}

var prefixer = function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element["return"]) switch (element.type) {
    case stylis__WEBPACK_IMPORTED_MODULE_5__.DECLARATION:
      element["return"] = prefix(element.value, element.length);
      break;

    case stylis__WEBPACK_IMPORTED_MODULE_5__.KEYFRAMES:
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
        value: (0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(element.value, '@', '@' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT)
      })], callback);

    case stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET:
      if (element.length) return (0,stylis__WEBPACK_IMPORTED_MODULE_4__.combine)(element.props, function (value) {
        switch ((0,stylis__WEBPACK_IMPORTED_MODULE_4__.match)(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(read-\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)([(0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.WEBKIT + 'input-$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, ':' + stylis__WEBPACK_IMPORTED_MODULE_5__.MOZ + '$1')]
            }), (0,stylis__WEBPACK_IMPORTED_MODULE_3__.copy)(element, {
              props: [(0,stylis__WEBPACK_IMPORTED_MODULE_4__.replace)(value, /:(plac\w+)/, stylis__WEBPACK_IMPORTED_MODULE_5__.MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
};

var defaultStylisPlugins = [prefixer];
var getSourceMap;

{
  var sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;

  getSourceMap = function getSourceMap(styles) {
    var matches = styles.match(sourceMapPattern);
    if (!matches) return;
    return matches[matches.length - 1];
  };
}

var createCache = function createCache(options) {
  var key = options.key;

  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  {
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {};
  var container;
  var nodesToHydrate = [];

  {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' ');

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  {
    var currentSheet;
    var finalizingPlugins = [stylis__WEBPACK_IMPORTED_MODULE_6__.stringify, function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== stylis__WEBPACK_IMPORTED_MODULE_5__.COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } ];
    var serializer = (0,stylis__WEBPACK_IMPORTED_MODULE_7__.middleware)(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return (0,stylis__WEBPACK_IMPORTED_MODULE_6__.serialize)((0,stylis__WEBPACK_IMPORTED_MODULE_8__.compile)(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (getSourceMap) {
        var sourceMap = getSourceMap(serialized.styles);

        if (sourceMap) {
          currentSheet = {
            insert: function insert(rule) {
              sheet.insert(rule + sourceMap);
            }
          };
        }
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__.StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};




/***/ }),

/***/ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/emotion-hash.esm.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ murmur2)
/* harmony export */ });
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}




/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoize)
/* harmony export */ });
function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}




/***/ }),

/***/ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hoistNonReactStatics)
/* harmony export */ });
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0__);


// this file isolates this package that is not tree-shakeable
// and if this module doesn't actually contain any logic of its own
// then Rollup just use 'hoist-non-react-statics' directly in other chunks

var hoistNonReactStatics = (function (targetComponent, sourceComponent) {
  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_0___default()(targetComponent, sourceComponent);
});




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ CacheProvider),
/* harmony export */   E: () => (/* binding */ Emotion$1),
/* harmony export */   T: () => (/* binding */ ThemeContext),
/* harmony export */   _: () => (/* binding */ __unsafe_useEmotionCache),
/* harmony export */   a: () => (/* binding */ ThemeProvider),
/* harmony export */   b: () => (/* binding */ withTheme),
/* harmony export */   c: () => (/* binding */ createEmotionProps),
/* harmony export */   h: () => (/* binding */ hasOwn),
/* harmony export */   u: () => (/* binding */ useTheme),
/* harmony export */   w: () => (/* binding */ withEmotionCache)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var _isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js */ "./node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");










var EmotionCacheContext = /* #__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */(0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__["default"])({
  key: 'css'
}) : null);

{
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
};

var withEmotionCache = function withEmotionCache(func) {
  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
    // the cache will never be null in the browser
    var cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

var ThemeContext = /* #__PURE__ */react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

{
  ThemeContext.displayName = 'EmotionThemeContext';
}

var useTheme = function useTheme() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext);
};

var getTheme = function getTheme(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);

    if ((mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme))) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }

    return mergedTheme;
  }

  if ((theme == null || typeof theme !== 'object' || Array.isArray(theme))) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }

  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, outerTheme, theme);
};

var createCacheWithTheme = /* #__PURE__ */(0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (outerTheme) {
  return (0,_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_3__["default"])(function (theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider(props) {
  var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext);

  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeContext.Provider, {
    value: theme
  }, props.children);
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';
  var WithTheme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function render(props, ref) {
    var theme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      theme: theme,
      ref: ref
    }, props));
  });
  WithTheme.displayName = "WithTheme(" + componentName + ")";
  return (0,_isolated_hnrs_dist_emotion_react_isolated_hnrs_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_7__["default"])(WithTheme, Component);
}

var hasOwn = {}.hasOwnProperty;

var getLastPart = function getLastPart(functionName) {
  // The match may be something like 'Object.createEmotionProps' or
  // 'Loader.prototype.render'
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};

var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine(line) {
  // V8
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]); // Safari / Firefox

  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return undefined;
};

var internalReactFunctionNames = /* #__PURE__ */new Set(['renderWithHooks', 'processChild', 'finishClassComponent', 'renderToString']); // These identifiers come from error stacks, so they have to be valid JS
// identifiers, thus we only need to replace what is a valid character for JS,
// but not for CSS.

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var getLabelFromStackTrace = function getLabelFromStackTrace(stackTrace) {
  if (!stackTrace) return undefined;
  var lines = stackTrace.split('\n');

  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]); // The first line of V8 stack traces is just "Error"

    if (!functionName) continue; // If we reach one of these, we have gone too far and should quit

    if (internalReactFunctionNames.has(functionName)) break; // The component name is the first function in the stack that starts with an
    // uppercase letter

    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }

  return undefined;
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (typeof props.css === 'string' && // check if there is a css declaration
  props.css.indexOf(':') !== -1) {
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + props.css + "`");
  }

  var newProps = {};

  for (var _key in props) {
    if (hasOwn.call(props, _key)) {
      newProps[_key] = props[_key];
    }
  }

  newProps[typePropName] = type; // Runtime labeling is an opt-in feature because:
  // - It causes hydration warnings when using Safari and SSR
  // - It can degrade performance if there are a huge number of elements
  //
  // Even if the flag is set, we still don't compute the label if it has already
  // been determined by the Babel plugin.

  if (typeof globalThis !== 'undefined' && !!globalThis.EMOTION_RUNTIME_AUTO_LABEL && !!props.css && (typeof props.css !== 'object' || !('name' in props.css) || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }

  return newProps;
};

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.registerStyles)(cache, serialized, isStringTag);
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_6__.useInsertionEffectAlwaysWithSyncFallback)(function () {
    return (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.insertStyles)(cache, serialized, isStringTag);
  });

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_4__.getRegisteredStyles)(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)(registeredStyles, undefined, react__WEBPACK_IMPORTED_MODULE_0__.useContext(ThemeContext));

  if (serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__.serializeStyles)([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var _key2 in props) {
    if (hasOwn.call(props, _key2) && _key2 !== 'css' && _key2 !== typePropName && (_key2 !== labelPropName)) {
      newProps[_key2] = props[_key2];
    }
  }

  newProps.className = className;

  if (ref) {
    newProps.ref = ref;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Insertion, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(WrappedComponent, newProps));
});

{
  Emotion.displayName = 'EmotionCssPropInternal';
}

var Emotion$1 = Emotion;




/***/ }),

/***/ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheProvider: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   ClassNames: () => (/* binding */ ClassNames),
/* harmony export */   Global: () => (/* binding */ Global),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   ThemeProvider: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   __unsafe_useEmotionCache: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   createElement: () => (/* binding */ jsx),
/* harmony export */   css: () => (/* binding */ css),
/* harmony export */   jsx: () => (/* binding */ jsx),
/* harmony export */   keyframes: () => (/* binding */ keyframes),
/* harmony export */   useTheme: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   withEmotionCache: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   withTheme: () => (/* reexport safe */ _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.b)
/* harmony export */ });
/* harmony import */ var _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emotion-element-489459f2.browser.development.esm.js */ "./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");
/* harmony import */ var _emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/use-insertion-effect-with-fallbacks */ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);












var isDevelopment = true;

var pkg = {
	name: "@emotion/react",
	version: "11.14.0",
	main: "dist/emotion-react.cjs.js",
	module: "dist/emotion-react.esm.js",
	types: "dist/emotion-react.cjs.d.ts",
	exports: {
		".": {
			types: {
				"import": "./dist/emotion-react.cjs.mjs",
				"default": "./dist/emotion-react.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./dist/emotion-react.development.edge-light.esm.js",
					"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
					"default": "./dist/emotion-react.development.edge-light.cjs.js"
				},
				worker: {
					module: "./dist/emotion-react.development.edge-light.esm.js",
					"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
					"default": "./dist/emotion-react.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./dist/emotion-react.development.edge-light.esm.js",
					"import": "./dist/emotion-react.development.edge-light.cjs.mjs",
					"default": "./dist/emotion-react.development.edge-light.cjs.js"
				},
				browser: {
					module: "./dist/emotion-react.browser.development.esm.js",
					"import": "./dist/emotion-react.browser.development.cjs.mjs",
					"default": "./dist/emotion-react.browser.development.cjs.js"
				},
				module: "./dist/emotion-react.development.esm.js",
				"import": "./dist/emotion-react.development.cjs.mjs",
				"default": "./dist/emotion-react.development.cjs.js"
			},
			"edge-light": {
				module: "./dist/emotion-react.edge-light.esm.js",
				"import": "./dist/emotion-react.edge-light.cjs.mjs",
				"default": "./dist/emotion-react.edge-light.cjs.js"
			},
			worker: {
				module: "./dist/emotion-react.edge-light.esm.js",
				"import": "./dist/emotion-react.edge-light.cjs.mjs",
				"default": "./dist/emotion-react.edge-light.cjs.js"
			},
			workerd: {
				module: "./dist/emotion-react.edge-light.esm.js",
				"import": "./dist/emotion-react.edge-light.cjs.mjs",
				"default": "./dist/emotion-react.edge-light.cjs.js"
			},
			browser: {
				module: "./dist/emotion-react.browser.esm.js",
				"import": "./dist/emotion-react.browser.cjs.mjs",
				"default": "./dist/emotion-react.browser.cjs.js"
			},
			module: "./dist/emotion-react.esm.js",
			"import": "./dist/emotion-react.cjs.mjs",
			"default": "./dist/emotion-react.cjs.js"
		},
		"./jsx-runtime": {
			types: {
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
				},
				worker: {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
				},
				browser: {
					module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
					"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
					"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
				},
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
			},
			"edge-light": {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
			},
			worker: {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
			},
			workerd: {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
			},
			browser: {
				module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
				"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
				"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
			},
			module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
			"import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
			"default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
		},
		"./_isolated-hnrs": {
			types: {
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
				},
				worker: {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
				},
				browser: {
					module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
					"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
					"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
				},
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
			},
			"edge-light": {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
			},
			worker: {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
			},
			workerd: {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
			},
			browser: {
				module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
				"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
				"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
			},
			module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
			"import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
			"default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
		},
		"./jsx-dev-runtime": {
			types: {
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
			},
			development: {
				"edge-light": {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
				},
				worker: {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
				},
				workerd: {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
				},
				browser: {
					module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
					"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
					"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
				},
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
			},
			"edge-light": {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
			},
			worker: {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
			},
			workerd: {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
			},
			browser: {
				module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
				"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
				"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
			},
			module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
			"import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
			"default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
		},
		"./package.json": "./package.json",
		"./types/css-prop": "./types/css-prop.d.ts",
		"./macro": {
			types: {
				"import": "./macro.d.mts",
				"default": "./macro.d.ts"
			},
			"default": "./macro.js"
		}
	},
	imports: {
		"#is-development": {
			development: "./src/conditions/true.ts",
			"default": "./src/conditions/false.ts"
		},
		"#is-browser": {
			"edge-light": "./src/conditions/false.ts",
			workerd: "./src/conditions/false.ts",
			worker: "./src/conditions/false.ts",
			browser: "./src/conditions/true.ts",
			"default": "./src/conditions/is-browser.ts"
		}
	},
	files: [
		"src",
		"dist",
		"jsx-runtime",
		"jsx-dev-runtime",
		"_isolated-hnrs",
		"types/css-prop.d.ts",
		"macro.*"
	],
	sideEffects: false,
	author: "Emotion Contributors",
	license: "MIT",
	scripts: {
		"test:typescript": "dtslint types"
	},
	dependencies: {
		"@babel/runtime": "^7.18.3",
		"@emotion/babel-plugin": "^11.13.5",
		"@emotion/cache": "^11.14.0",
		"@emotion/serialize": "^1.3.3",
		"@emotion/use-insertion-effect-with-fallbacks": "^1.2.0",
		"@emotion/utils": "^1.4.2",
		"@emotion/weak-memoize": "^0.4.0",
		"hoist-non-react-statics": "^3.3.1"
	},
	peerDependencies: {
		react: ">=16.8.0"
	},
	peerDependenciesMeta: {
		"@types/react": {
			optional: true
		}
	},
	devDependencies: {
		"@definitelytyped/dtslint": "0.0.112",
		"@emotion/css": "11.13.5",
		"@emotion/css-prettifier": "1.2.0",
		"@emotion/server": "11.11.0",
		"@emotion/styled": "11.14.0",
		"@types/hoist-non-react-statics": "^3.3.5",
		"html-tag-names": "^1.1.2",
		react: "16.14.0",
		"svg-tag-names": "^1.1.1",
		typescript: "^5.4.5"
	},
	repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
	publishConfig: {
		access: "public"
	},
	"umd:main": "dist/emotion-react.umd.min.js",
	preconstruct: {
		entrypoints: [
			"./index.ts",
			"./jsx-runtime.ts",
			"./jsx-dev-runtime.ts",
			"./_isolated-hnrs.ts"
		],
		umdName: "emotionReact",
		exports: {
			extra: {
				"./types/css-prop": "./types/css-prop.d.ts",
				"./macro": {
					types: {
						"import": "./macro.d.mts",
						"default": "./macro.d.ts"
					},
					"default": "./macro.js"
				}
			}
		}
	}
};

var jsx = function jsx(type, props) {
  // eslint-disable-next-line prefer-rest-params
  var args = arguments;

  if (props == null || !_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.h.call(props, 'css')) {
    return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.E;
  createElementArgArray[1] = (0,_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.c)(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }

  return react__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(null, createElementArgArray);
};

(function (_jsx) {
  var JSX;

  (function (_JSX) {})(JSX || (JSX = _jsx.JSX || (_jsx.JSX = {})));
})(jsx || (jsx = {}));

var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */(0,_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(function (props, cache) {
  if (!warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // I don't really want to add it to the type since it shouldn't be used
  'className' in props && props.className || 'css' in props && props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)([styles], undefined, react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.T));
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__.useInsertionEffectWithLayoutFallback)(function () {
    var key = cache.key + "-global"; // use case of https://github.com/emotion-js/emotion/issues/2675

    var sheet = new cache.sheet.constructor({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__.useInsertionEffectWithLayoutFallback)(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.insertStyles)(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

{
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(args);
}

function keyframes() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.getRegisteredStyles)(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  (0,_emotion_use_insertion_effect_with_fallbacks__WEBPACK_IMPORTED_MODULE_3__.useInsertionEffectAlwaysWithSyncFallback)(function () {

    for (var i = 0; i < serializedArr.length; i++) {
      (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.insertStyles)(cache, serializedArr[i], false);
    }
  });

  return null;
};

var ClassNames = /* #__PURE__ */(0,_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.w)(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && isDevelopment) {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = (0,_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__.serializeStyles)(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    (0,_emotion_utils__WEBPACK_IMPORTED_MODULE_2__.registerStyles)(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && isDevelopment) {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: react__WEBPACK_IMPORTED_MODULE_1__.useContext(_emotion_element_489459f2_browser_development_esm_js__WEBPACK_IMPORTED_MODULE_0__.T)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

{
  ClassNames.displayName = 'EmotionClassNames';
}

{
  var isBrowser = typeof document !== 'undefined'; // #1727, #2905 for some reason Jest and Vitest evaluate modules twice if some consuming module gets mocked

  var isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';

  if (isBrowser && !isTestEnv) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : __webpack_require__.g;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serializeStyles: () => (/* binding */ serializeStyles)
/* harmony export */ });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/emotion-hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/emotion-memoize.esm.js");




var isDevelopment = true;

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */(0,_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

{
  var contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

var noComponentSelectorMessage = 'Component selectors can only be used in conjunction with ' + '@emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware ' + 'compiler transform.';

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  var componentSelector = interpolation;

  if (componentSelector.__emotion_styles !== undefined) {
    if (String(componentSelector) === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }

    return componentSelector;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        var keyframes = interpolation;

        if (keyframes.anim === 1) {
          cursor = {
            name: keyframes.name,
            styles: keyframes.styles,
            next: cursor
          };
          return keyframes.name;
        }

        var serializedStyles = interpolation;

        if (serializedStyles.styles !== undefined) {
          var next = serializedStyles.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = serializedStyles.styles + ";";
          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join('\n') + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  var asString = interpolation;

  if (registered == null) {
    return asString;
  }

  var cached = registered[asString];
  return cached !== undefined ? cached : asString;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];

      if (typeof value !== 'object') {
        var asString = value;

        if (registered != null && registered[asString] !== undefined) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === 'NO_COMPONENT_SELECTOR' && isDevelopment) {
          throw new Error(noComponentSelectorMessage);
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g; // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list

var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;

    if (asTemplateStringsArr[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += asTemplateStringsArr[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      var templateStringsArr = strings;

      if (templateStringsArr[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += templateStringsArr[i];
    }
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }

  var name = (0,_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  {
    var devStyles = {
      name: name,
      styles: styles,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyleSheet: () => (/* binding */ StyleSheet)
/* harmony export */ });
var isDevelopment = true;

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/

function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  } // this function should always return with a value
  // TS can't understand it though so we make it stop complaining here


  return undefined;
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  // Using Node instead of HTMLElement since container may be a ShadowRoot
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }

      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    this.tags.forEach(function (tag) {
      var _tag$parentNode;

      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ unitlessKeys)
/* harmony export */ });
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};




/***/ }),

/***/ "./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useInsertionEffectAlwaysWithSyncFallback: () => (/* binding */ useInsertionEffectAlwaysWithSyncFallback),
/* harmony export */   useInsertionEffectWithLayoutFallback: () => (/* binding */ useInsertionEffectWithLayoutFallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var syncFallback = function syncFallback(create) {
  return create();
};

var useInsertionEffect = react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] ? react__WEBPACK_IMPORTED_MODULE_0__['useInsertion' + 'Effect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;




/***/ }),

/***/ "./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRegisteredStyles: () => (/* binding */ getRegisteredStyles),
/* harmony export */   insertStyles: () => (/* binding */ insertStyles),
/* harmony export */   registerStyles: () => (/* binding */ registerStyles)
/* harmony export */ });
var isBrowser = true;

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false ) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var current = serialized;

    do {
      cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      current = current.next;
    } while (current !== undefined);
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ weakMemoize)
/* harmony export */ });
var weakMemoize = function weakMemoize(func) {
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // Use non-null assertion because we just checked that the cache `has` it
      // This allows us to remove `undefined` from the return value
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};




/***/ }),

/***/ "./node_modules/@floating-ui/core/dist/floating-ui.core.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@floating-ui/core/dist/floating-ui.core.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* binding */ detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   rectToClientRect: () => (/* reexport safe */ _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");



function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement);
  const alignmentAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentAxis)(placement);
  const alignLength = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAxisLength)(alignmentAxis);
  const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
  const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = options => ({
  name: 'arrow',
  options,
  async fn(state) {
    const {
      x,
      y,
      placement,
      rects,
      platform,
      elements,
      middlewareData
    } = state;
    // Since `element` is required, we don't Partial<> the type.
    const {
      element,
      padding = 0
    } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state) || {};
    if (element == null) {
      return {};
    }
    const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
    const coords = {
      x,
      y
    };
    const axis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentAxis)(placement);
    const length = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAxisLength)(axis);
    const arrowDimensions = await platform.getDimensions(element);
    const isYAxis = axis === 'y';
    const minProp = isYAxis ? 'top' : 'left';
    const maxProp = isYAxis ? 'bottom' : 'right';
    const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

    // DOM platform can return `window` as the `offsetParent`.
    if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;

    // If the padding is large enough that it causes the arrow to no longer be
    // centered, modify the padding so that it is centered.
    const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
    const minPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(paddingObject[minProp], largestPossiblePadding);
    const maxPadding = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(paddingObject[maxProp], largestPossiblePadding);

    // Make sure the arrow doesn't overflow the floating element if the center
    // point is outside the floating element's bounds.
    const min$1 = minPadding;
    const max = clientSize - arrowDimensions[length] - maxPadding;
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min$1, center, max);

    // If the reference is small enough that the arrow's padding causes it to
    // to point to nothing for an aligned placement, adjust the offset of the
    // floating element itself. To ensure `shift()` continues to take action,
    // a single reset is performed when this is true.
    const shouldAddOffset = !middlewareData.arrow && (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
    return {
      [axis]: coords[axis] + alignmentOffset,
      data: {
        [axis]: offset,
        centerOffset: center - offset - alignmentOffset,
        ...(shouldAddOffset && {
          alignmentOffset
        })
      },
      reset: shouldAddOffset
    };
  }
});

function getPlacementList(alignment, autoAlignment, allowedPlacements) {
  const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) === alignment), ...allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) !== alignment)] : allowedPlacements.filter(placement => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === placement);
  return allowedPlacementsSortedByAlignment.filter(placement => {
    if (alignment) {
      return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement) === alignment || (autoAlignment ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAlignmentPlacement)(placement) !== placement : false);
    }
    return true;
  });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'autoPlacement',
    options,
    async fn(state) {
      var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
      const {
        rects,
        middlewareData,
        placement,
        platform,
        elements
      } = state;
      const {
        crossAxis = false,
        alignment,
        allowedPlacements = _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.placements,
        autoAlignment = true,
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const placements$1 = alignment !== undefined || allowedPlacements === _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
      const currentPlacement = placements$1[currentIndex];
      if (currentPlacement == null) {
        return {};
      }
      const alignmentSides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentSides)(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

      // Make `computeCoords` start from the right place.
      if (placement !== currentPlacement) {
        return {
          reset: {
            placement: placements$1[0]
          }
        };
      }
      const currentOverflows = [overflow[(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(currentPlacement)], overflow[alignmentSides[0]], overflow[alignmentSides[1]]];
      const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
        placement: currentPlacement,
        overflows: currentOverflows
      }];
      const nextPlacement = placements$1[currentIndex + 1];

      // There are more placements to check.
      if (nextPlacement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: nextPlacement
          }
        };
      }
      const placementsSortedByMostSpace = allOverflows.map(d => {
        const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(d.placement);
        return [d.placement, alignment && crossAxis ?
        // Check along the mainAxis and main crossAxis side.
        d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
        // Check only the mainAxis.
        d.overflows[0], d.overflows];
      }).sort((a, b) => a[1] - b[1]);
      const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
      // Aligned placements should not check their opposite crossAxis
      // side.
      (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(d[0]) ? 2 : 3).every(v => v <= 0));
      const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
      if (resetPlacement !== placement) {
        return {
          data: {
            index: currentIndex + 1,
            overflows: allOverflows
          },
          reset: {
            placement: resetPlacement
          }
        };
      }
      return {};
    }
  };
};

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
      const initialSideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(initialPlacement);
      const isBasePlacement = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositePlacement)(initialPlacement)] : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getExpandedPlacements)(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxisPlacements)(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignmentSides)(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          // Try next placement and re-run the lifecycle.
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

function getSideOffsets(overflow, rect) {
  return {
    top: overflow.top - rect.height,
    right: overflow.right - rect.width,
    bottom: overflow.bottom - rect.height,
    left: overflow.left - rect.width
  };
}
function isAnySideFullyClipped(overflow) {
  return _floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.sides.some(side => overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'hide',
    options,
    async fn(state) {
      const {
        rects
      } = state;
      const {
        strategy = 'referenceHidden',
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      switch (strategy) {
        case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
        case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
        default:
          {
            return {};
          }
      }
    }
  };
};

function getBoundingRect(rects) {
  const minX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...rects.map(rect => rect.left));
  const minY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...rects.map(rect => rect.top));
  const maxX = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...rects.map(rect => rect.right));
  const maxY = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...rects.map(rect => rect.bottom));
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getRectsByLine(rects) {
  const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
  const groups = [];
  let prevRect = null;
  for (let i = 0; i < sortedRects.length; i++) {
    const rect = sortedRects[i];
    if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
      groups.push([rect]);
    } else {
      groups[groups.length - 1].push(rect);
    }
    prevRect = rect;
  }
  return groups.map(rect => (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'inline',
    options,
    async fn(state) {
      const {
        placement,
        elements,
        rects,
        platform,
        strategy
      } = state;
      // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
      // ClientRect's bounds, despite the event listener being triggered. A
      // padding of 2 seems to handle this issue.
      const {
        padding = 2,
        x,
        y
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
      const clientRects = getRectsByLine(nativeClientRects);
      const fallback = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.rectToClientRect)(getBoundingRect(nativeClientRects));
      const paddingObject = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getPaddingObject)(padding);
      function getBoundingClientRect() {
        // There are two rects and they are disjoined.
        if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
          // Find the first rect in which the point is fully inside.
          return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
        }

        // There are 2 or more connected rects.
        if (clientRects.length >= 2) {
          if ((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y') {
            const firstRect = clientRects[0];
            const lastRect = clientRects[clientRects.length - 1];
            const isTop = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === 'top';
            const top = firstRect.top;
            const bottom = lastRect.bottom;
            const left = isTop ? firstRect.left : lastRect.left;
            const right = isTop ? firstRect.right : lastRect.right;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          const isLeftSide = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement) === 'left';
          const maxRight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(...clientRects.map(rect => rect.right));
          const minLeft = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(...clientRects.map(rect => rect.left));
          const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
          const top = measureRects[0].top;
          const bottom = measureRects[measureRects.length - 1].bottom;
          const left = minLeft;
          const right = maxRight;
          const width = right - left;
          const height = bottom - top;
          return {
            top,
            bottom,
            left,
            right,
            width,
            height,
            x: left,
            y: top
          };
        }
        return fallback;
      }
      const resetRects = await platform.getElementRects({
        reference: {
          getBoundingClientRect
        },
        floating: elements.floating,
        strategy
      });
      if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
        return {
          reset: {
            rects: resetRects
          }
        };
      }
      return {};
    }
  };
};

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
  const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement);
  const isVertical = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y';
  const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement));
      const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    options,
    fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        middlewareData
      } = state;
      const {
        offset = 0,
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const coords = {
        x,
        y
      };
      const crossAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement);
      const mainAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getOppositeAxis)(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      const rawOffset = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(offset, state);
      const computedOffset = typeof rawOffset === 'number' ? {
        mainAxis: rawOffset,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...rawOffset
      };
      if (checkMainAxis) {
        const len = mainAxis === 'y' ? 'height' : 'width';
        const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
        const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
        if (mainAxisCoord < limitMin) {
          mainAxisCoord = limitMin;
        } else if (mainAxisCoord > limitMax) {
          mainAxisCoord = limitMax;
        }
      }
      if (checkCrossAxis) {
        var _middlewareData$offse, _middlewareData$offse2;
        const len = mainAxis === 'y' ? 'width' : 'height';
        const isOriginSide = ['top', 'left'].includes((0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement));
        const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
        const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
        if (crossAxisCoord < limitMin) {
          crossAxisCoord = limitMin;
        } else if (crossAxisCoord > limitMax) {
          crossAxisCoord = limitMax;
        }
      }
      return {
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.evaluate)(options, state);
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSide)(placement);
      const alignment = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getAlignment)(placement);
      const isYAxis = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.getSideAxis)(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.min)(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.left, 0);
        const xMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.right, 0);
        const yMin = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.top, 0);
        const yMax = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_0__.max)(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};




/***/ }),

/***/ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrow: () => (/* binding */ arrow),
/* harmony export */   autoPlacement: () => (/* binding */ autoPlacement),
/* harmony export */   autoUpdate: () => (/* binding */ autoUpdate),
/* harmony export */   computePosition: () => (/* binding */ computePosition),
/* harmony export */   detectOverflow: () => (/* binding */ detectOverflow),
/* harmony export */   flip: () => (/* binding */ flip),
/* harmony export */   getOverflowAncestors: () => (/* reexport safe */ _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors),
/* harmony export */   hide: () => (/* binding */ hide),
/* harmony export */   inline: () => (/* binding */ inline),
/* harmony export */   limitShift: () => (/* binding */ limitShift),
/* harmony export */   offset: () => (/* binding */ offset),
/* harmony export */   platform: () => (/* binding */ platform),
/* harmony export */   shift: () => (/* binding */ shift),
/* harmony export */   size: () => (/* binding */ size)
/* harmony export */ });
/* harmony import */ var _floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @floating-ui/utils */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs");
/* harmony import */ var _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @floating-ui/core */ "./node_modules/@floating-ui/core/dist/floating-ui.core.mjs");
/* harmony import */ var _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @floating-ui/utils/dom */ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs");





function getCssDimensions(element) {
  const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(width) !== offsetWidth || (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(domElement)) {
    return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(rect.width) : rect.width) / width;
  let y = ($ ? (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.round)(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/(0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
function getVisualOffsets(element) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element);
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isWebKit)() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  if (includeScale) {
    if (offsetParent) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(domElement);
    const offsetWin = offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(offsetParent) ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getFrameElement)(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(currentIFrame);
      currentIFrame = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getFrameElement)(currentWin);
    }
  }
  return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(offsetParent);
  const topLayer = elements ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTopLayer)(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  const offsets = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(offsetParent);
    }
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element);
  const scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(element);
  const body = element.ownerDocument.body;
  const width = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(body).direction === 'rtl') {
    x += (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element);
  const html = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isWebKit)();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) ? getScale(element) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element));
  } else if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.rectToClientRect)(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(element);
  if (parentNode === stopNode || !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(parentNode) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(parentNode)) {
    return false;
  }
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors)(element, [], false).filter(el => (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(el) && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeName)(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).position === 'fixed';
  let currentNode = elementIsFixed ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(currentNode) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(currentNode)) {
    const computedStyle = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(currentNode);
    const currentNodeIsContaining = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isContainingBlock)(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isOverflowElement)(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTopLayer)(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(rect.top, accRect.top);
    accRect.right = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(rect.right, accRect.right);
    accRect.bottom = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(rect.bottom, accRect.bottom);
    accRect.left = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(offsetParent);
  const documentElement = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeName)(offsetParent) !== 'body' || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isOverflowElement)(documentElement)) {
      scroll = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getNodeScroll)(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
      // Firefox with layout.scrollbar.side = 3 in about:config to test this.
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.createCoords)(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element) || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getWindow)(element);
  if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTopLayer)(element)) {
    return win;
  }
  if (!(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isHTMLElement)(element)) {
    let svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(element);
    while (svgOffsetParent && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(svgOffsetParent)) {
      if ((0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement)(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isTableElement)(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isLastTraversableNode)(offsetParent) && isStaticPositioned(offsetParent) && !(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isContainingBlock)(offsetParent)) {
    return win;
  }
  return offsetParent || (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getContainingBlock)(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getComputedStyle)(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement: _floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDocumentElement)(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(top);
    const insetRight = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(root.clientWidth - (left + width));
    const insetBottom = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(root.clientHeight - (top + height));
    const insetLeft = (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.floor)(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.max)(0, (0,_floating_ui_utils__WEBPACK_IMPORTED_MODULE_1__.min)(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? (0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors)(referenceEl) : []), ...(0,_floating_ui_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getOverflowAncestors)(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const detectOverflow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.detectOverflow;

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.offset;

/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */
const autoPlacement = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.autoPlacement;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.shift;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.flip;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.size;

/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */
const hide = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.hide;

/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */
const arrow = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.arrow;

/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */
const inline = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.inline;

/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */
const limitShift = _floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.limitShift;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return (0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_2__.computePosition)(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};




/***/ }),

/***/ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),
/* harmony export */   getContainingBlock: () => (/* binding */ getContainingBlock),
/* harmony export */   getDocumentElement: () => (/* binding */ getDocumentElement),
/* harmony export */   getFrameElement: () => (/* binding */ getFrameElement),
/* harmony export */   getNearestOverflowAncestor: () => (/* binding */ getNearestOverflowAncestor),
/* harmony export */   getNodeName: () => (/* binding */ getNodeName),
/* harmony export */   getNodeScroll: () => (/* binding */ getNodeScroll),
/* harmony export */   getOverflowAncestors: () => (/* binding */ getOverflowAncestors),
/* harmony export */   getParentNode: () => (/* binding */ getParentNode),
/* harmony export */   getWindow: () => (/* binding */ getWindow),
/* harmony export */   isContainingBlock: () => (/* binding */ isContainingBlock),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),
/* harmony export */   isLastTraversableNode: () => (/* binding */ isLastTraversableNode),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isOverflowElement: () => (/* binding */ isOverflowElement),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   isTableElement: () => (/* binding */ isTableElement),
/* harmony export */   isTopLayer: () => (/* binding */ isTopLayer),
/* harmony export */   isWebKit: () => (/* binding */ isWebKit)
/* harmony export */ });
function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
}
function isTableElement(element) {
  return ['table', 'td', 'th'].includes(getNodeName(element));
}
function isTopLayer(element) {
  return [':popover-open', ':modal'].some(selector => {
    try {
      return element.matches(selector);
    } catch (e) {
      return false;
    }
  });
}
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return ['transform', 'translate', 'scale', 'rotate', 'perspective'].some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
function isLastTraversableNode(node) {
  return ['html', 'body', '#document'].includes(getNodeName(node));
}
function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}




/***/ }),

/***/ "./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignments: () => (/* binding */ alignments),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   createCoords: () => (/* binding */ createCoords),
/* harmony export */   evaluate: () => (/* binding */ evaluate),
/* harmony export */   expandPaddingObject: () => (/* binding */ expandPaddingObject),
/* harmony export */   floor: () => (/* binding */ floor),
/* harmony export */   getAlignment: () => (/* binding */ getAlignment),
/* harmony export */   getAlignmentAxis: () => (/* binding */ getAlignmentAxis),
/* harmony export */   getAlignmentSides: () => (/* binding */ getAlignmentSides),
/* harmony export */   getAxisLength: () => (/* binding */ getAxisLength),
/* harmony export */   getExpandedPlacements: () => (/* binding */ getExpandedPlacements),
/* harmony export */   getOppositeAlignmentPlacement: () => (/* binding */ getOppositeAlignmentPlacement),
/* harmony export */   getOppositeAxis: () => (/* binding */ getOppositeAxis),
/* harmony export */   getOppositeAxisPlacements: () => (/* binding */ getOppositeAxisPlacements),
/* harmony export */   getOppositePlacement: () => (/* binding */ getOppositePlacement),
/* harmony export */   getPaddingObject: () => (/* binding */ getPaddingObject),
/* harmony export */   getSide: () => (/* binding */ getSide),
/* harmony export */   getSideAxis: () => (/* binding */ getSideAxis),
/* harmony export */   max: () => (/* binding */ max),
/* harmony export */   min: () => (/* binding */ min),
/* harmony export */   placements: () => (/* binding */ placements),
/* harmony export */   rectToClientRect: () => (/* binding */ rectToClientRect),
/* harmony export */   round: () => (/* binding */ round),
/* harmony export */   sides: () => (/* binding */ sides)
/* harmony export */ });
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const sides = ['top', 'right', 'bottom', 'left'];
const alignments = ['start', 'end'];
const placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
function getSideList(side, isStart, rtl) {
  const lr = ['left', 'right'];
  const rl = ['right', 'left'];
  const tb = ['top', 'bottom'];
  const bt = ['bottom', 'top'];
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rl : lr;
      return isStart ? lr : rl;
    case 'left':
    case 'right':
      return isStart ? tb : bt;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}




/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/hoist-non-react-statics/node_modules/react-is/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/node_modules/react-is/index.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ memoizeOne)
/* harmony export */ });
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var cache = null;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (cache && cache.lastThis === this && isEqual(newArgs, cache.lastArgs)) {
            return cache.lastResult;
        }
        var lastResult = resultFn.apply(this, newArgs);
        cache = {
            lastResult: lastResult,
            lastArgs: newArgs,
            lastThis: this,
        };
        return lastResult;
    }
    memoized.clear = function clear() {
        cache = null;
    };
    return memoized;
}




/***/ }),

/***/ "./node_modules/react-select/dist/Select-aab027f3.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-select/dist/Select-aab027f3.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Select),
/* harmony export */   a: () => (/* binding */ defaultProps),
/* harmony export */   b: () => (/* binding */ getOptionLabel$1),
/* harmony export */   c: () => (/* binding */ createFilter),
/* harmony export */   d: () => (/* binding */ defaultTheme),
/* harmony export */   g: () => (/* binding */ getOptionValue$1),
/* harmony export */   m: () => (/* binding */ mergeStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-641ee5b8.esm.js */ "./node_modules/react-select/dist/index-641ee5b8.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");














function _EMOTION_STRINGIFIED_CSS_ERROR__$2() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// Assistive text to describe visual elements. Hidden for sighted users.
var _ref =  false ? 0 : {
  name: "1f43avz-a11yText-A11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap;label:A11yText;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkExMXlUZXh0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSSIsImZpbGUiOiJBMTF5VGV4dC50c3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IEpTWCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGpzeCB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuLy8gQXNzaXN0aXZlIHRleHQgdG8gZGVzY3JpYmUgdmlzdWFsIGVsZW1lbnRzLiBIaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMuXG5jb25zdCBBMTF5VGV4dCA9IChwcm9wczogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ10pID0+IChcbiAgPHNwYW5cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAnYTExeVRleHQnLFxuICAgICAgekluZGV4OiA5OTk5LFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KScsXG4gICAgICBoZWlnaHQ6IDEsXG4gICAgICB3aWR0aDogMSxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQTExeVRleHQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$2
};
var A11yText = function A11yText(props) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    css: _ref
  }, props));
};
var A11yText$1 = A11yText;

var defaultAriaLiveMessages = {
  guidance: function guidance(props) {
    var isSearchable = props.isSearchable,
      isMulti = props.isMulti,
      tabSelectsValue = props.tabSelectsValue,
      context = props.context,
      isInitialFocus = props.isInitialFocus;
    switch (context) {
      case 'menu':
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(tabSelectsValue ? ', press Tab to select the option and exit the menu' : '', ".");
      case 'input':
        return isInitialFocus ? "".concat(props['aria-label'] || 'Select', " is focused ").concat(isSearchable ? ',type to refine list' : '', ", press Down to open the menu, ").concat(isMulti ? ' press left to focus selected values' : '') : '';
      case 'value':
        return 'Use left and right to toggle between focused values, press Backspace to remove the currently focused value';
      default:
        return '';
    }
  },
  onChange: function onChange(props) {
    var action = props.action,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      labels = props.labels,
      isDisabled = props.isDisabled;
    switch (action) {
      case 'deselect-option':
      case 'pop-value':
      case 'remove-value':
        return "option ".concat(label, ", deselected.");
      case 'clear':
        return 'All selected options have been cleared.';
      case 'initial-input-focus':
        return "option".concat(labels.length > 1 ? 's' : '', " ").concat(labels.join(','), ", selected.");
      case 'select-option':
        return isDisabled ? "option ".concat(label, " is disabled. Select another option.") : "option ".concat(label, ", selected.");
      default:
        return '';
    }
  },
  onFocus: function onFocus(props) {
    var context = props.context,
      focused = props.focused,
      options = props.options,
      _props$label2 = props.label,
      label = _props$label2 === void 0 ? '' : _props$label2,
      selectValue = props.selectValue,
      isDisabled = props.isDisabled,
      isSelected = props.isSelected,
      isAppleDevice = props.isAppleDevice;
    var getArrayIndex = function getArrayIndex(arr, item) {
      return arr && arr.length ? "".concat(arr.indexOf(item) + 1, " of ").concat(arr.length) : '';
    };
    if (context === 'value' && selectValue) {
      return "value ".concat(label, " focused, ").concat(getArrayIndex(selectValue, focused), ".");
    }
    if (context === 'menu' && isAppleDevice) {
      var disabled = isDisabled ? ' disabled' : '';
      var status = "".concat(isSelected ? ' selected' : '').concat(disabled);
      return "".concat(label).concat(status, ", ").concat(getArrayIndex(options, focused), ".");
    }
    return '';
  },
  onFilter: function onFilter(props) {
    var inputValue = props.inputValue,
      resultsMessage = props.resultsMessage;
    return "".concat(resultsMessage).concat(inputValue ? ' for search term ' + inputValue : '', ".");
  }
};

var LiveRegion = function LiveRegion(props) {
  var ariaSelection = props.ariaSelection,
    focusedOption = props.focusedOption,
    focusedValue = props.focusedValue,
    focusableOptions = props.focusableOptions,
    isFocused = props.isFocused,
    selectValue = props.selectValue,
    selectProps = props.selectProps,
    id = props.id,
    isAppleDevice = props.isAppleDevice;
  var ariaLiveMessages = selectProps.ariaLiveMessages,
    getOptionLabel = selectProps.getOptionLabel,
    inputValue = selectProps.inputValue,
    isMulti = selectProps.isMulti,
    isOptionDisabled = selectProps.isOptionDisabled,
    isSearchable = selectProps.isSearchable,
    menuIsOpen = selectProps.menuIsOpen,
    options = selectProps.options,
    screenReaderStatus = selectProps.screenReaderStatus,
    tabSelectsValue = selectProps.tabSelectsValue,
    isLoading = selectProps.isLoading;
  var ariaLabel = selectProps['aria-label'];
  var ariaLive = selectProps['aria-live'];

  // Update aria live message configuration when prop changes
  var messages = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultAriaLiveMessages), ariaLiveMessages || {});
  }, [ariaLiveMessages]);

  // Update aria live selected option when prop changes
  var ariaSelected = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    var message = '';
    if (ariaSelection && messages.onChange) {
      var option = ariaSelection.option,
        selectedOptions = ariaSelection.options,
        removedValue = ariaSelection.removedValue,
        removedValues = ariaSelection.removedValues,
        value = ariaSelection.value;
      // select-option when !isMulti does not return option so we assume selected option is value
      var asOption = function asOption(val) {
        return !Array.isArray(val) ? val : null;
      };

      // If there is just one item from the action then get its label
      var selected = removedValue || option || asOption(value);
      var label = selected ? getOptionLabel(selected) : '';

      // If there are multiple items from the action then return an array of labels
      var multiSelected = selectedOptions || removedValues || undefined;
      var labels = multiSelected ? multiSelected.map(getOptionLabel) : [];
      var onChangeProps = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: selected && isOptionDisabled(selected, selectValue),
        label: label,
        labels: labels
      }, ariaSelection);
      message = messages.onChange(onChangeProps);
    }
    return message;
  }, [ariaSelection, messages, isOptionDisabled, selectValue, getOptionLabel]);
  var ariaFocused = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    var focusMsg = '';
    var focused = focusedOption || focusedValue;
    var isSelected = !!(focusedOption && selectValue && selectValue.includes(focusedOption));
    if (focused && messages.onFocus) {
      var onFocusProps = {
        focused: focused,
        label: getOptionLabel(focused),
        isDisabled: isOptionDisabled(focused, selectValue),
        isSelected: isSelected,
        options: focusableOptions,
        context: focused === focusedOption ? 'menu' : 'value',
        selectValue: selectValue,
        isAppleDevice: isAppleDevice
      };
      focusMsg = messages.onFocus(onFocusProps);
    }
    return focusMsg;
  }, [focusedOption, focusedValue, getOptionLabel, isOptionDisabled, messages, focusableOptions, selectValue, isAppleDevice]);
  var ariaResults = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    var resultsMsg = '';
    if (menuIsOpen && options.length && !isLoading && messages.onFilter) {
      var resultsMessage = screenReaderStatus({
        count: focusableOptions.length
      });
      resultsMsg = messages.onFilter({
        inputValue: inputValue,
        resultsMessage: resultsMessage
      });
    }
    return resultsMsg;
  }, [focusableOptions, inputValue, menuIsOpen, messages, options, screenReaderStatus, isLoading]);
  var isInitialFocus = (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus';
  var ariaGuidance = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    var guidanceMsg = '';
    if (messages.guidance) {
      var context = focusedValue ? 'value' : menuIsOpen ? 'menu' : 'input';
      guidanceMsg = messages.guidance({
        'aria-label': ariaLabel,
        context: context,
        isDisabled: focusedOption && isOptionDisabled(focusedOption, selectValue),
        isMulti: isMulti,
        isSearchable: isSearchable,
        tabSelectsValue: tabSelectsValue,
        isInitialFocus: isInitialFocus
      });
    }
    return guidanceMsg;
  }, [ariaLabel, focusedOption, focusedValue, isMulti, isOptionDisabled, isSearchable, menuIsOpen, messages, selectValue, tabSelectsValue, isInitialFocus]);
  var ScreenReaderText = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
    id: "aria-selection"
  }, ariaSelected), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
    id: "aria-focused"
  }, ariaFocused), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
    id: "aria-results"
  }, ariaResults), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
    id: "aria-guidance"
  }, ariaGuidance));
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(A11yText$1, {
    id: id
  }, isInitialFocus && ScreenReaderText), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(A11yText$1, {
    "aria-live": ariaLive,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, isFocused && !isInitialFocus && ScreenReaderText));
};
var LiveRegion$1 = LiveRegion;

var diacritics = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
var anyDiacritic = new RegExp('[' + diacritics.map(function (d) {
  return d.letters;
}).join('') + ']', 'g');
var diacriticToBase = {};
for (var i = 0; i < diacritics.length; i++) {
  var diacritic = diacritics[i];
  for (var j = 0; j < diacritic.letters.length; j++) {
    diacriticToBase[diacritic.letters[j]] = diacritic.base;
  }
}
var stripDiacritics = function stripDiacritics(str) {
  return str.replace(anyDiacritic, function (match) {
    return diacriticToBase[match];
  });
};

var memoizedStripDiacriticsForInput = (0,memoize_one__WEBPACK_IMPORTED_MODULE_10__["default"])(stripDiacritics);
var trimString = function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
};
var defaultStringify = function defaultStringify(option) {
  return "".concat(option.label, " ").concat(option.value);
};
var createFilter = function createFilter(config) {
  return function (option, rawInput) {
    // eslint-disable-next-line no-underscore-dangle
    if (option.data.__isNew__) return true;
    var _ignoreCase$ignoreAcc = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
        ignoreCase: true,
        ignoreAccents: true,
        stringify: defaultStringify,
        trim: true,
        matchFrom: 'any'
      }, config),
      ignoreCase = _ignoreCase$ignoreAcc.ignoreCase,
      ignoreAccents = _ignoreCase$ignoreAcc.ignoreAccents,
      stringify = _ignoreCase$ignoreAcc.stringify,
      trim = _ignoreCase$ignoreAcc.trim,
      matchFrom = _ignoreCase$ignoreAcc.matchFrom;
    var input = trim ? trimString(rawInput) : rawInput;
    var candidate = trim ? trimString(stringify(option)) : stringify(option);
    if (ignoreCase) {
      input = input.toLowerCase();
      candidate = candidate.toLowerCase();
    }
    if (ignoreAccents) {
      input = memoizedStripDiacriticsForInput(input);
      candidate = stripDiacritics(candidate);
    }
    return matchFrom === 'start' ? candidate.substr(0, input.length) === input : candidate.indexOf(input) > -1;
  };
};

var _excluded = ["innerRef"];
function DummyInput(_ref) {
  var innerRef = _ref.innerRef,
    props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, _excluded);
  // Remove animation props not meant for HTML elements
  var filteredProps = (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.r)(props, 'onExited', 'in', 'enter', 'exit', 'appear');
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: innerRef
  }, filteredProps, {
    css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.css)({
      label: 'dummyInput',
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: 'transparent',
      fontSize: 'inherit',
      gridArea: '1 / 1 / 2 / 3',
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: 'transparent',
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: 'relative',
      transform: 'scale(.01)'
    },  false ? 0 : ";label:DummyInput;",  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkR1bW15SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCTSIsImZpbGUiOiJEdW1teUlucHV0LnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5pbXBvcnQgeyByZW1vdmVQcm9wcyB9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHVtbXlJbnB1dCh7XG4gIGlubmVyUmVmLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbnB1dCddICYge1xuICByZWFkb25seSBpbm5lclJlZjogUmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xufSkge1xuICAvLyBSZW1vdmUgYW5pbWF0aW9uIHByb3BzIG5vdCBtZWFudCBmb3IgSFRNTCBlbGVtZW50c1xuICBjb25zdCBmaWx0ZXJlZFByb3BzID0gcmVtb3ZlUHJvcHMoXG4gICAgcHJvcHMsXG4gICAgJ29uRXhpdGVkJyxcbiAgICAnaW4nLFxuICAgICdlbnRlcicsXG4gICAgJ2V4aXQnLFxuICAgICdhcHBlYXInXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXRcbiAgICAgIHJlZj17aW5uZXJSZWZ9XG4gICAgICB7Li4uZmlsdGVyZWRQcm9wc31cbiAgICAgIGNzcz17e1xuICAgICAgICBsYWJlbDogJ2R1bW15SW5wdXQnLFxuICAgICAgICAvLyBnZXQgcmlkIG9mIGFueSBkZWZhdWx0IHN0eWxlc1xuICAgICAgICBiYWNrZ3JvdW5kOiAwLFxuICAgICAgICBib3JkZXI6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgdGhpcyBoaWRlcyB0aGUgZmxhc2hpbmcgY3Vyc29yXG4gICAgICAgIGNhcmV0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXG4gICAgICAgIGdyaWRBcmVhOiAnMSAvIDEgLyAyIC8gMycsXG4gICAgICAgIG91dGxpbmU6IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIC8vIGltcG9ydGFudCEgd2l0aG91dCBgd2lkdGhgIGJyb3dzZXJzIHdvbid0IGFsbG93IGZvY3VzXG4gICAgICAgIHdpZHRoOiAxLFxuXG4gICAgICAgIC8vIHJlbW92ZSBjdXJzb3Igb24gZGVza3RvcFxuICAgICAgICBjb2xvcjogJ3RyYW5zcGFyZW50JyxcblxuICAgICAgICAvLyByZW1vdmUgY3Vyc29yIG9uIG1vYmlsZSB3aGlsc3QgbWFpbnRhaW5pbmcgXCJzY3JvbGwgaW50byB2aWV3XCIgYmVoYXZpb3VyXG4gICAgICAgIGxlZnQ6IC0xMDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSguMDEpJyxcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn1cbiJdfQ== */")
  }));
}

var cancelScroll = function cancelScroll(event) {
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
};
function useScrollCapture(_ref) {
  var isEnabled = _ref.isEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var isBottom = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(false);
  var isTop = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(false);
  var touchStart = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(0);
  var scrollTarget = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  var handleEventDelta = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (event, delta) {
    if (scrollTarget.current === null) return;
    var _scrollTarget$current = scrollTarget.current,
      scrollTop = _scrollTarget$current.scrollTop,
      scrollHeight = _scrollTarget$current.scrollHeight,
      clientHeight = _scrollTarget$current.clientHeight;
    var target = scrollTarget.current;
    var isDeltaPositive = delta > 0;
    var availableScroll = scrollHeight - clientHeight - scrollTop;
    var shouldCancelScroll = false;

    // reset bottom/top flags
    if (availableScroll > delta && isBottom.current) {
      if (onBottomLeave) onBottomLeave(event);
      isBottom.current = false;
    }
    if (isDeltaPositive && isTop.current) {
      if (onTopLeave) onTopLeave(event);
      isTop.current = false;
    }

    // bottom limit
    if (isDeltaPositive && delta > availableScroll) {
      if (onBottomArrive && !isBottom.current) {
        onBottomArrive(event);
      }
      target.scrollTop = scrollHeight;
      shouldCancelScroll = true;
      isBottom.current = true;

      // top limit
    } else if (!isDeltaPositive && -delta > scrollTop) {
      if (onTopArrive && !isTop.current) {
        onTopArrive(event);
      }
      target.scrollTop = 0;
      shouldCancelScroll = true;
      isTop.current = true;
    }

    // cancel scroll
    if (shouldCancelScroll) {
      cancelScroll(event);
    }
  }, [onBottomArrive, onBottomLeave, onTopArrive, onTopLeave]);
  var onWheel = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (event) {
    handleEventDelta(event, event.deltaY);
  }, [handleEventDelta]);
  var onTouchStart = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (event) {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  var onTouchMove = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (event) {
    var deltaY = touchStart.current - event.changedTouches[0].clientY;
    handleEventDelta(event, deltaY);
  }, [handleEventDelta]);
  var startListening = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (el) {
    // bail early if no element is available to attach to
    if (!el) return;
    var notPassive = _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.s ? {
      passive: false
    } : false;
    el.addEventListener('wheel', onWheel, notPassive);
    el.addEventListener('touchstart', onTouchStart, notPassive);
    el.addEventListener('touchmove', onTouchMove, notPassive);
  }, [onTouchMove, onTouchStart, onWheel]);
  var stopListening = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (el) {
    // bail early if no element is available to detach from
    if (!el) return;
    el.removeEventListener('wheel', onWheel, false);
    el.removeEventListener('touchstart', onTouchStart, false);
    el.removeEventListener('touchmove', onTouchMove, false);
  }, [onTouchMove, onTouchStart, onWheel]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    startListening(element);
    return function () {
      stopListening(element);
    };
  }, [isEnabled, startListening, stopListening]);
  return function (element) {
    scrollTarget.current = element;
  };
}

var STYLE_KEYS = ['boxSizing', 'height', 'overflow', 'paddingRight', 'position'];
var LOCK_STYLES = {
  boxSizing: 'border-box',
  // account for possible declaration `width: 100%;` on body
  overflow: 'hidden',
  position: 'relative',
  height: '100%'
};
function preventTouchMove(e) {
  if (e.cancelable) e.preventDefault();
}
function allowTouchMove(e) {
  e.stopPropagation();
}
function preventInertiaScroll() {
  var top = this.scrollTop;
  var totalScroll = this.scrollHeight;
  var currentScroll = top + this.offsetHeight;
  if (top === 0) {
    this.scrollTop = 1;
  } else if (currentScroll === totalScroll) {
    this.scrollTop = top - 1;
  }
}

// `ontouchstart` check works on most browsers
// `maxTouchPoints` works on IE10/11 and Surface
function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
}
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var activeScrollLocks = 0;
var listenerOptions = {
  capture: false,
  passive: false
};
function useScrollLock(_ref) {
  var isEnabled = _ref.isEnabled,
    _ref$accountForScroll = _ref.accountForScrollbars,
    accountForScrollbars = _ref$accountForScroll === void 0 ? true : _ref$accountForScroll;
  var originalStyles = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)({});
  var scrollTarget = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  var addScrollLock = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;
    if (accountForScrollbars) {
      // store any styles already applied to the body
      STYLE_KEYS.forEach(function (key) {
        var val = targetStyle && targetStyle[key];
        originalStyles.current[key] = val;
      });
    }

    // apply the lock styles and padding if this is the first scroll lock
    if (accountForScrollbars && activeScrollLocks < 1) {
      var currentPadding = parseInt(originalStyles.current.paddingRight, 10) || 0;
      var clientWidth = document.body ? document.body.clientWidth : 0;
      var adjustedPadding = window.innerWidth - clientWidth + currentPadding || 0;
      Object.keys(LOCK_STYLES).forEach(function (key) {
        var val = LOCK_STYLES[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
      if (targetStyle) {
        targetStyle.paddingRight = "".concat(adjustedPadding, "px");
      }
    }

    // account for touch devices
    if (target && isTouchDevice()) {
      // Mobile Safari ignores { overflow: hidden } declaration on the body.
      target.addEventListener('touchmove', preventTouchMove, listenerOptions);

      // Allow scroll on provided target
      if (touchScrollTarget) {
        touchScrollTarget.addEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.addEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }

    // increment active scroll locks
    activeScrollLocks += 1;
  }, [accountForScrollbars]);
  var removeScrollLock = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (touchScrollTarget) {
    if (!canUseDOM) return;
    var target = document.body;
    var targetStyle = target && target.style;

    // safely decrement active scroll locks
    activeScrollLocks = Math.max(activeScrollLocks - 1, 0);

    // reapply original body styles, if any
    if (accountForScrollbars && activeScrollLocks < 1) {
      STYLE_KEYS.forEach(function (key) {
        var val = originalStyles.current[key];
        if (targetStyle) {
          targetStyle[key] = val;
        }
      });
    }

    // remove touch listeners
    if (target && isTouchDevice()) {
      target.removeEventListener('touchmove', preventTouchMove, listenerOptions);
      if (touchScrollTarget) {
        touchScrollTarget.removeEventListener('touchstart', preventInertiaScroll, listenerOptions);
        touchScrollTarget.removeEventListener('touchmove', allowTouchMove, listenerOptions);
      }
    }
  }, [accountForScrollbars]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    if (!isEnabled) return;
    var element = scrollTarget.current;
    addScrollLock(element);
    return function () {
      removeScrollLock(element);
    };
  }, [isEnabled, addScrollLock, removeScrollLock]);
  return function (element) {
    scrollTarget.current = element;
  };
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var blurSelectInput = function blurSelectInput(event) {
  var element = event.target;
  return element.ownerDocument.activeElement && element.ownerDocument.activeElement.blur();
};
var _ref2$1 =  false ? 0 : {
  name: "bp8cua-ScrollManager",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0;label:ScrollManager;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNjcm9sbE1hbmFnZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9EVSIsImZpbGUiOiJTY3JvbGxNYW5hZ2VyLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4IH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgUmVmQ2FsbGJhY2ssIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU2Nyb2xsQ2FwdHVyZSBmcm9tICcuL3VzZVNjcm9sbENhcHR1cmUnO1xuaW1wb3J0IHVzZVNjcm9sbExvY2sgZnJvbSAnLi91c2VTY3JvbGxMb2NrJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcmVhZG9ubHkgY2hpbGRyZW46IChyZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PikgPT4gUmVhY3RFbGVtZW50O1xuICByZWFkb25seSBsb2NrRW5hYmxlZDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgY2FwdHVyZUVuYWJsZWQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IG9uQm90dG9tQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Cb3R0b21MZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG4gIHJlYWRvbmx5IG9uVG9wQXJyaXZlPzogKGV2ZW50OiBXaGVlbEV2ZW50IHwgVG91Y2hFdmVudCkgPT4gdm9pZDtcbiAgcmVhZG9ubHkgb25Ub3BMZWF2ZT86IChldmVudDogV2hlZWxFdmVudCB8IFRvdWNoRXZlbnQpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGJsdXJTZWxlY3RJbnB1dCA9IChldmVudDogTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRGl2RWxlbWVudDtcbiAgcmV0dXJuIChcbiAgICBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxuICAgIChlbGVtZW50Lm93bmVyRG9jdW1lbnQuYWN0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuYmx1cigpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY3JvbGxNYW5hZ2VyKHtcbiAgY2hpbGRyZW4sXG4gIGxvY2tFbmFibGVkLFxuICBjYXB0dXJlRW5hYmxlZCA9IHRydWUsXG4gIG9uQm90dG9tQXJyaXZlLFxuICBvbkJvdHRvbUxlYXZlLFxuICBvblRvcEFycml2ZSxcbiAgb25Ub3BMZWF2ZSxcbn06IFByb3BzKSB7XG4gIGNvbnN0IHNldFNjcm9sbENhcHR1cmVUYXJnZXQgPSB1c2VTY3JvbGxDYXB0dXJlKHtcbiAgICBpc0VuYWJsZWQ6IGNhcHR1cmVFbmFibGVkLFxuICAgIG9uQm90dG9tQXJyaXZlLFxuICAgIG9uQm90dG9tTGVhdmUsXG4gICAgb25Ub3BBcnJpdmUsXG4gICAgb25Ub3BMZWF2ZSxcbiAgfSk7XG4gIGNvbnN0IHNldFNjcm9sbExvY2tUYXJnZXQgPSB1c2VTY3JvbGxMb2NrKHsgaXNFbmFibGVkOiBsb2NrRW5hYmxlZCB9KTtcblxuICBjb25zdCB0YXJnZXRSZWY6IFJlZkNhbGxiYWNrPEhUTUxFbGVtZW50PiA9IChlbGVtZW50KSA9PiB7XG4gICAgc2V0U2Nyb2xsQ2FwdHVyZVRhcmdldChlbGVtZW50KTtcbiAgICBzZXRTY3JvbGxMb2NrVGFyZ2V0KGVsZW1lbnQpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAge2xvY2tFbmFibGVkICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIG9uQ2xpY2s9e2JsdXJTZWxlY3RJbnB1dH1cbiAgICAgICAgICBjc3M9e3sgcG9zaXRpb246ICdmaXhlZCcsIGxlZnQ6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAsIHRvcDogMCB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICAgIHtjaGlsZHJlbih0YXJnZXRSZWYpfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
function ScrollManager(_ref) {
  var children = _ref.children,
    lockEnabled = _ref.lockEnabled,
    _ref$captureEnabled = _ref.captureEnabled,
    captureEnabled = _ref$captureEnabled === void 0 ? true : _ref$captureEnabled,
    onBottomArrive = _ref.onBottomArrive,
    onBottomLeave = _ref.onBottomLeave,
    onTopArrive = _ref.onTopArrive,
    onTopLeave = _ref.onTopLeave;
  var setScrollCaptureTarget = useScrollCapture({
    isEnabled: captureEnabled,
    onBottomArrive: onBottomArrive,
    onBottomLeave: onBottomLeave,
    onTopArrive: onTopArrive,
    onTopLeave: onTopLeave
  });
  var setScrollLockTarget = useScrollLock({
    isEnabled: lockEnabled
  });
  var targetRef = function targetRef(element) {
    setScrollCaptureTarget(element);
    setScrollLockTarget(element);
  };
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)(react__WEBPACK_IMPORTED_MODULE_7__.Fragment, null, lockEnabled && (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    onClick: blurSelectInput,
    css: _ref2$1
  }), children(targetRef));
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var _ref2 =  false ? 0 : {
  name: "5kkxb2-requiredInput-RequiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%;label:RequiredInput;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVpcmVkSW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNJIiwiZmlsZSI6IlJlcXVpcmVkSW5wdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBGb2N1c0V2ZW50SGFuZGxlciwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3ggfSBmcm9tICdAZW1vdGlvbi9yZWFjdCc7XG5cbmNvbnN0IFJlcXVpcmVkSW5wdXQ6IEZ1bmN0aW9uQ29tcG9uZW50PHtcbiAgcmVhZG9ubHkgbmFtZT86IHN0cmluZztcbiAgcmVhZG9ubHkgb25Gb2N1czogRm9jdXNFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG59PiA9ICh7IG5hbWUsIG9uRm9jdXMgfSkgPT4gKFxuICA8aW5wdXRcbiAgICByZXF1aXJlZFxuICAgIG5hbWU9e25hbWV9XG4gICAgdGFiSW5kZXg9ey0xfVxuICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgb25Gb2N1cz17b25Gb2N1c31cbiAgICBjc3M9e3tcbiAgICAgIGxhYmVsOiAncmVxdWlyZWRJbnB1dCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgIH19XG4gICAgLy8gUHJldmVudCBgU3dpdGNoaW5nIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWRgIGVycm9yXG4gICAgdmFsdWU9XCJcIlxuICAgIG9uQ2hhbmdlPXsoKSA9PiB7fX1cbiAgLz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVpcmVkSW5wdXQ7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var RequiredInput = function RequiredInput(_ref) {
  var name = _ref.name,
    onFocus = _ref.onFocus;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_9__.jsx)("input", {
    required: true,
    name: name,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: onFocus,
    css: _ref2
    // Prevent `Switching from uncontrolled to controlled` error
    ,
    value: "",
    onChange: function onChange() {}
  });
};
var RequiredInput$1 = RequiredInput;

/// <reference types="user-agent-data-types" />

function testPlatform(re) {
  var _window$navigator$use;
  return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window$navigator$use = window.navigator['userAgentData']) === null || _window$navigator$use === void 0 ? void 0 : _window$navigator$use.platform) || window.navigator.platform) : false;
}
function isIPhone() {
  return testPlatform(/^iPhone/i);
}
function isMac() {
  return testPlatform(/^Mac/i);
}
function isIPad() {
  return testPlatform(/^iPad/i) ||
  // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  isMac() && navigator.maxTouchPoints > 1;
}
function isIOS() {
  return isIPhone() || isIPad();
}
function isAppleDevice() {
  return isMac() || isIOS();
}

var formatGroupLabel = function formatGroupLabel(group) {
  return group.label;
};
var getOptionLabel$1 = function getOptionLabel(option) {
  return option.label;
};
var getOptionValue$1 = function getOptionValue(option) {
  return option.value;
};
var isOptionDisabled = function isOptionDisabled(option) {
  return !!option.isDisabled;
};

var defaultStyles = {
  clearIndicator: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.a,
  container: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.b,
  control: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.d,
  dropdownIndicator: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.e,
  group: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.g,
  groupHeading: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.f,
  indicatorsContainer: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.i,
  indicatorSeparator: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.h,
  input: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.j,
  loadingIndicator: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.l,
  loadingMessage: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.k,
  menu: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.m,
  menuList: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.n,
  menuPortal: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.o,
  multiValue: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.p,
  multiValueLabel: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.q,
  multiValueRemove: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.t,
  noOptionsMessage: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.u,
  option: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.v,
  placeholder: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.w,
  singleValue: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.x,
  valueContainer: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.y
};
// Merge Utility
// Allows consumers to extend a base Select with additional styles

function mergeStyles(source) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // initialize with source styles
  var styles = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, source);

  // massage in target styles
  Object.keys(target).forEach(function (keyAsString) {
    var key = keyAsString;
    if (source[key]) {
      styles[key] = function (rsCss, props) {
        return target[key](source[key](rsCss, props), props);
      };
    } else {
      styles[key] = target[key];
    }
  });
  return styles;
}

var colors = {
  primary: '#2684FF',
  primary75: '#4C9AFF',
  primary50: '#B2D4FF',
  primary25: '#DEEBFF',
  danger: '#DE350B',
  dangerLight: '#FFBDAD',
  neutral0: 'hsl(0, 0%, 100%)',
  neutral5: 'hsl(0, 0%, 95%)',
  neutral10: 'hsl(0, 0%, 90%)',
  neutral20: 'hsl(0, 0%, 80%)',
  neutral30: 'hsl(0, 0%, 70%)',
  neutral40: 'hsl(0, 0%, 60%)',
  neutral50: 'hsl(0, 0%, 50%)',
  neutral60: 'hsl(0, 0%, 40%)',
  neutral70: 'hsl(0, 0%, 30%)',
  neutral80: 'hsl(0, 0%, 20%)',
  neutral90: 'hsl(0, 0%, 10%)'
};
var borderRadius = 4;
// Used to calculate consistent margin/padding on elements
var baseUnit = 4;
// The minimum height of the control
var controlHeight = 38;
// The amount of space between the control and menu */
var menuGutter = baseUnit * 2;
var spacing = {
  baseUnit: baseUnit,
  controlHeight: controlHeight,
  menuGutter: menuGutter
};
var defaultTheme = {
  borderRadius: borderRadius,
  colors: colors,
  spacing: spacing
};

var defaultProps = {
  'aria-live': 'polite',
  backspaceRemovesValue: true,
  blurInputOnSelect: (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.z)(),
  captureMenuScroll: !(0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.z)(),
  classNames: {},
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  escapeClearsValue: false,
  filterOption: createFilter(),
  formatGroupLabel: formatGroupLabel,
  getOptionLabel: getOptionLabel$1,
  getOptionValue: getOptionValue$1,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  isOptionDisabled: isOptionDisabled,
  loadingMessage: function loadingMessage() {
    return 'Loading...';
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: false,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  menuShouldScrollIntoView: !(0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.A)(),
  noOptionsMessage: function noOptionsMessage() {
    return 'No options';
  },
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: function screenReaderStatus(_ref) {
    var count = _ref.count;
    return "".concat(count, " result").concat(count !== 1 ? 's' : '', " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: true,
  unstyled: false
};
function toCategorizedOption(props, option, selectValue, index) {
  var isDisabled = _isOptionDisabled(props, option, selectValue);
  var isSelected = _isOptionSelected(props, option, selectValue);
  var label = getOptionLabel(props, option);
  var value = getOptionValue(props, option);
  return {
    type: 'option',
    data: option,
    isDisabled: isDisabled,
    isSelected: isSelected,
    label: label,
    value: value,
    index: index
  };
}
function buildCategorizedOptions(props, selectValue) {
  return props.options.map(function (groupOrOption, groupOrOptionIndex) {
    if ('options' in groupOrOption) {
      var categorizedOptions = groupOrOption.options.map(function (option, optionIndex) {
        return toCategorizedOption(props, option, selectValue, optionIndex);
      }).filter(function (categorizedOption) {
        return isFocusable(props, categorizedOption);
      });
      return categorizedOptions.length > 0 ? {
        type: 'group',
        data: groupOrOption,
        options: categorizedOptions,
        index: groupOrOptionIndex
      } : undefined;
    }
    var categorizedOption = toCategorizedOption(props, groupOrOption, selectValue, groupOrOptionIndex);
    return isFocusable(props, categorizedOption) ? categorizedOption : undefined;
  }).filter(_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.K);
}
function buildFocusableOptionsFromCategorizedOptions(categorizedOptions) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(categorizedOption.options.map(function (option) {
        return option.data;
      })));
    } else {
      optionsAccumulator.push(categorizedOption.data);
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptionsWithIds(categorizedOptions, optionId) {
  return categorizedOptions.reduce(function (optionsAccumulator, categorizedOption) {
    if (categorizedOption.type === 'group') {
      optionsAccumulator.push.apply(optionsAccumulator, (0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(categorizedOption.options.map(function (option) {
        return {
          data: option.data,
          id: "".concat(optionId, "-").concat(categorizedOption.index, "-").concat(option.index)
        };
      })));
    } else {
      optionsAccumulator.push({
        data: categorizedOption.data,
        id: "".concat(optionId, "-").concat(categorizedOption.index)
      });
    }
    return optionsAccumulator;
  }, []);
}
function buildFocusableOptions(props, selectValue) {
  return buildFocusableOptionsFromCategorizedOptions(buildCategorizedOptions(props, selectValue));
}
function isFocusable(props, categorizedOption) {
  var _props$inputValue = props.inputValue,
    inputValue = _props$inputValue === void 0 ? '' : _props$inputValue;
  var data = categorizedOption.data,
    isSelected = categorizedOption.isSelected,
    label = categorizedOption.label,
    value = categorizedOption.value;
  return (!shouldHideSelectedOptions(props) || !isSelected) && _filterOption(props, {
    label: label,
    value: value,
    data: data
  }, inputValue);
}
function getNextFocusedValue(state, nextSelectValue) {
  var focusedValue = state.focusedValue,
    lastSelectValue = state.selectValue;
  var lastFocusedIndex = lastSelectValue.indexOf(focusedValue);
  if (lastFocusedIndex > -1) {
    var nextFocusedIndex = nextSelectValue.indexOf(focusedValue);
    if (nextFocusedIndex > -1) {
      // the focused value is still in the selectValue, return it
      return focusedValue;
    } else if (lastFocusedIndex < nextSelectValue.length) {
      // the focusedValue is not present in the next selectValue array by
      // reference, so return the new value at the same index
      return nextSelectValue[lastFocusedIndex];
    }
  }
  return null;
}
function getNextFocusedOption(state, options) {
  var lastFocusedOption = state.focusedOption;
  return lastFocusedOption && options.indexOf(lastFocusedOption) > -1 ? lastFocusedOption : options[0];
}
var getFocusedOptionId = function getFocusedOptionId(focusableOptionsWithIds, focusedOption) {
  var _focusableOptionsWith;
  var focusedOptionId = (_focusableOptionsWith = focusableOptionsWithIds.find(function (option) {
    return option.data === focusedOption;
  })) === null || _focusableOptionsWith === void 0 ? void 0 : _focusableOptionsWith.id;
  return focusedOptionId || null;
};
var getOptionLabel = function getOptionLabel(props, data) {
  return props.getOptionLabel(data);
};
var getOptionValue = function getOptionValue(props, data) {
  return props.getOptionValue(data);
};
function _isOptionDisabled(props, option, selectValue) {
  return typeof props.isOptionDisabled === 'function' ? props.isOptionDisabled(option, selectValue) : false;
}
function _isOptionSelected(props, option, selectValue) {
  if (selectValue.indexOf(option) > -1) return true;
  if (typeof props.isOptionSelected === 'function') {
    return props.isOptionSelected(option, selectValue);
  }
  var candidate = getOptionValue(props, option);
  return selectValue.some(function (i) {
    return getOptionValue(props, i) === candidate;
  });
}
function _filterOption(props, option, inputValue) {
  return props.filterOption ? props.filterOption(option, inputValue) : true;
}
var shouldHideSelectedOptions = function shouldHideSelectedOptions(props) {
  var hideSelectedOptions = props.hideSelectedOptions,
    isMulti = props.isMulti;
  if (hideSelectedOptions === undefined) return isMulti;
  return hideSelectedOptions;
};
var instanceId = 1;
var Select = /*#__PURE__*/function (_Component) {
  (0,_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, _Component);
  var _super = (0,_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__["default"])(Select);
  // Misc. Instance Properties
  // ------------------------------

  // TODO

  // Refs
  // ------------------------------

  // Lifecycle
  // ------------------------------

  function Select(_props) {
    var _this;
    (0,_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Select);
    _this = _super.call(this, _props);
    _this.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: false,
      isFocused: false,
      selectValue: [],
      clearFocusValueOnUpdate: false,
      prevWasFocused: false,
      inputIsHiddenAfterUpdate: undefined,
      prevProps: undefined,
      instancePrefix: ''
    };
    _this.blockOptionHover = false;
    _this.isComposing = false;
    _this.commonProps = void 0;
    _this.initialTouchX = 0;
    _this.initialTouchY = 0;
    _this.openAfterFocus = false;
    _this.scrollToFocusedOptionOnUpdate = false;
    _this.userIsDragging = void 0;
    _this.isAppleDevice = isAppleDevice();
    _this.controlRef = null;
    _this.getControlRef = function (ref) {
      _this.controlRef = ref;
    };
    _this.focusedOptionRef = null;
    _this.getFocusedOptionRef = function (ref) {
      _this.focusedOptionRef = ref;
    };
    _this.menuListRef = null;
    _this.getMenuListRef = function (ref) {
      _this.menuListRef = ref;
    };
    _this.inputRef = null;
    _this.getInputRef = function (ref) {
      _this.inputRef = ref;
    };
    _this.focus = _this.focusInput;
    _this.blur = _this.blurInput;
    _this.onChange = function (newValue, actionMeta) {
      var _this$props = _this.props,
        onChange = _this$props.onChange,
        name = _this$props.name;
      actionMeta.name = name;
      _this.ariaOnChange(newValue, actionMeta);
      onChange(newValue, actionMeta);
    };
    _this.setValue = function (newValue, action, option) {
      var _this$props2 = _this.props,
        closeMenuOnSelect = _this$props2.closeMenuOnSelect,
        isMulti = _this$props2.isMulti,
        inputValue = _this$props2.inputValue;
      _this.onInputChange('', {
        action: 'set-value',
        prevInputValue: inputValue
      });
      if (closeMenuOnSelect) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      }
      // when the select value should change, we should reset focusedValue
      _this.setState({
        clearFocusValueOnUpdate: true
      });
      _this.onChange(newValue, {
        action: action,
        option: option
      });
    };
    _this.selectOption = function (newValue) {
      var _this$props3 = _this.props,
        blurInputOnSelect = _this$props3.blurInputOnSelect,
        isMulti = _this$props3.isMulti,
        name = _this$props3.name;
      var selectValue = _this.state.selectValue;
      var deselected = isMulti && _this.isOptionSelected(newValue, selectValue);
      var isDisabled = _this.isOptionDisabled(newValue, selectValue);
      if (deselected) {
        var candidate = _this.getOptionValue(newValue);
        _this.setValue((0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.B)(selectValue.filter(function (i) {
          return _this.getOptionValue(i) !== candidate;
        })), 'deselect-option', newValue);
      } else if (!isDisabled) {
        // Select option if option is not disabled
        if (isMulti) {
          _this.setValue((0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.B)([].concat((0,_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(selectValue), [newValue])), 'select-option', newValue);
        } else {
          _this.setValue((0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.C)(newValue), 'select-option');
        }
      } else {
        _this.ariaOnChange((0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.C)(newValue), {
          action: 'select-option',
          option: newValue,
          name: name
        });
        return;
      }
      if (blurInputOnSelect) {
        _this.blurInput();
      }
    };
    _this.removeValue = function (removedValue) {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var candidate = _this.getOptionValue(removedValue);
      var newValueArray = selectValue.filter(function (i) {
        return _this.getOptionValue(i) !== candidate;
      });
      var newValue = (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.D)(isMulti, newValueArray, newValueArray[0] || null);
      _this.onChange(newValue, {
        action: 'remove-value',
        removedValue: removedValue
      });
      _this.focusInput();
    };
    _this.clearValue = function () {
      var selectValue = _this.state.selectValue;
      _this.onChange((0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.D)(_this.props.isMulti, [], null), {
        action: 'clear',
        removedValues: selectValue
      });
    };
    _this.popValue = function () {
      var isMulti = _this.props.isMulti;
      var selectValue = _this.state.selectValue;
      var lastSelectedValue = selectValue[selectValue.length - 1];
      var newValueArray = selectValue.slice(0, selectValue.length - 1);
      var newValue = (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.D)(isMulti, newValueArray, newValueArray[0] || null);
      if (lastSelectedValue) {
        _this.onChange(newValue, {
          action: 'pop-value',
          removedValue: lastSelectedValue
        });
      }
    };
    _this.getFocusedOptionId = function (focusedOption) {
      return getFocusedOptionId(_this.state.focusableOptionsWithIds, focusedOption);
    };
    _this.getFocusableOptionsWithIds = function () {
      return buildFocusableOptionsWithIds(buildCategorizedOptions(_this.props, _this.state.selectValue), _this.getElementId('option'));
    };
    _this.getValue = function () {
      return _this.state.selectValue;
    };
    _this.cx = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.E.apply(void 0, [_this.props.classNamePrefix].concat(args));
    };
    _this.getOptionLabel = function (data) {
      return getOptionLabel(_this.props, data);
    };
    _this.getOptionValue = function (data) {
      return getOptionValue(_this.props, data);
    };
    _this.getStyles = function (key, props) {
      var unstyled = _this.props.unstyled;
      var base = defaultStyles[key](props, unstyled);
      base.boxSizing = 'border-box';
      var custom = _this.props.styles[key];
      return custom ? custom(base, props) : base;
    };
    _this.getClassNames = function (key, props) {
      var _this$props$className, _this$props$className2;
      return (_this$props$className = (_this$props$className2 = _this.props.classNames)[key]) === null || _this$props$className === void 0 ? void 0 : _this$props$className.call(_this$props$className2, props);
    };
    _this.getElementId = function (element) {
      return "".concat(_this.state.instancePrefix, "-").concat(element);
    };
    _this.getComponents = function () {
      return (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.F)(_this.props);
    };
    _this.buildCategorizedOptions = function () {
      return buildCategorizedOptions(_this.props, _this.state.selectValue);
    };
    _this.getCategorizedOptions = function () {
      return _this.props.menuIsOpen ? _this.buildCategorizedOptions() : [];
    };
    _this.buildFocusableOptions = function () {
      return buildFocusableOptionsFromCategorizedOptions(_this.buildCategorizedOptions());
    };
    _this.getFocusableOptions = function () {
      return _this.props.menuIsOpen ? _this.buildFocusableOptions() : [];
    };
    _this.ariaOnChange = function (value, actionMeta) {
      _this.setState({
        ariaSelection: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
          value: value
        }, actionMeta)
      });
    };
    _this.onMenuMouseDown = function (event) {
      if (event.button !== 0) {
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      _this.focusInput();
    };
    _this.onMenuMouseMove = function (event) {
      _this.blockOptionHover = false;
    };
    _this.onControlMouseDown = function (event) {
      // Event captured by dropdown indicator
      if (event.defaultPrevented) {
        return;
      }
      var openMenuOnClick = _this.props.openMenuOnClick;
      if (!_this.state.isFocused) {
        if (openMenuOnClick) {
          _this.openAfterFocus = true;
        }
        _this.focusInput();
      } else if (!_this.props.menuIsOpen) {
        if (openMenuOnClick) {
          _this.openMenu('first');
        }
      } else {
        if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
          _this.onMenuClose();
        }
      }
      if (event.target.tagName !== 'INPUT' && event.target.tagName !== 'TEXTAREA') {
        event.preventDefault();
      }
    };
    _this.onDropdownIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      if (_this.props.isDisabled) return;
      var _this$props4 = _this.props,
        isMulti = _this$props4.isMulti,
        menuIsOpen = _this$props4.menuIsOpen;
      _this.focusInput();
      if (menuIsOpen) {
        _this.setState({
          inputIsHiddenAfterUpdate: !isMulti
        });
        _this.onMenuClose();
      } else {
        _this.openMenu('first');
      }
      event.preventDefault();
    };
    _this.onClearIndicatorMouseDown = function (event) {
      // ignore mouse events that weren't triggered by the primary button
      if (event && event.type === 'mousedown' && event.button !== 0) {
        return;
      }
      _this.clearValue();
      event.preventDefault();
      _this.openAfterFocus = false;
      if (event.type === 'touchend') {
        _this.focusInput();
      } else {
        setTimeout(function () {
          return _this.focusInput();
        });
      }
    };
    _this.onScroll = function (event) {
      if (typeof _this.props.closeMenuOnScroll === 'boolean') {
        if (event.target instanceof HTMLElement && (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.G)(event.target)) {
          _this.props.onMenuClose();
        }
      } else if (typeof _this.props.closeMenuOnScroll === 'function') {
        if (_this.props.closeMenuOnScroll(event)) {
          _this.props.onMenuClose();
        }
      }
    };
    _this.onCompositionStart = function () {
      _this.isComposing = true;
    };
    _this.onCompositionEnd = function () {
      _this.isComposing = false;
    };
    _this.onTouchStart = function (_ref2) {
      var touches = _ref2.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      _this.initialTouchX = touch.clientX;
      _this.initialTouchY = touch.clientY;
      _this.userIsDragging = false;
    };
    _this.onTouchMove = function (_ref3) {
      var touches = _ref3.touches;
      var touch = touches && touches.item(0);
      if (!touch) {
        return;
      }
      var deltaX = Math.abs(touch.clientX - _this.initialTouchX);
      var deltaY = Math.abs(touch.clientY - _this.initialTouchY);
      var moveThreshold = 5;
      _this.userIsDragging = deltaX > moveThreshold || deltaY > moveThreshold;
    };
    _this.onTouchEnd = function (event) {
      if (_this.userIsDragging) return;

      // close the menu if the user taps outside
      // we're checking on event.target here instead of event.currentTarget, because we want to assert information
      // on events on child elements, not the document (which we've attached this handler to).
      if (_this.controlRef && !_this.controlRef.contains(event.target) && _this.menuListRef && !_this.menuListRef.contains(event.target)) {
        _this.blurInput();
      }

      // reset move vars
      _this.initialTouchX = 0;
      _this.initialTouchY = 0;
    };
    _this.onControlTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onControlMouseDown(event);
    };
    _this.onClearIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onClearIndicatorMouseDown(event);
    };
    _this.onDropdownIndicatorTouchEnd = function (event) {
      if (_this.userIsDragging) return;
      _this.onDropdownIndicatorMouseDown(event);
    };
    _this.handleInputChange = function (event) {
      var prevInputValue = _this.props.inputValue;
      var inputValue = event.currentTarget.value;
      _this.setState({
        inputIsHiddenAfterUpdate: false
      });
      _this.onInputChange(inputValue, {
        action: 'input-change',
        prevInputValue: prevInputValue
      });
      if (!_this.props.menuIsOpen) {
        _this.onMenuOpen();
      }
    };
    _this.onInputFocus = function (event) {
      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
      _this.setState({
        inputIsHiddenAfterUpdate: false,
        isFocused: true
      });
      if (_this.openAfterFocus || _this.props.openMenuOnFocus) {
        _this.openMenu('first');
      }
      _this.openAfterFocus = false;
    };
    _this.onInputBlur = function (event) {
      var prevInputValue = _this.props.inputValue;
      if (_this.menuListRef && _this.menuListRef.contains(document.activeElement)) {
        _this.inputRef.focus();
        return;
      }
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
      _this.onInputChange('', {
        action: 'input-blur',
        prevInputValue: prevInputValue
      });
      _this.onMenuClose();
      _this.setState({
        focusedValue: null,
        isFocused: false
      });
    };
    _this.onOptionHover = function (focusedOption) {
      if (_this.blockOptionHover || _this.state.focusedOption === focusedOption) {
        return;
      }
      var options = _this.getFocusableOptions();
      var focusedOptionIndex = options.indexOf(focusedOption);
      _this.setState({
        focusedOption: focusedOption,
        focusedOptionId: focusedOptionIndex > -1 ? _this.getFocusedOptionId(focusedOption) : null
      });
    };
    _this.shouldHideSelectedOptions = function () {
      return shouldHideSelectedOptions(_this.props);
    };
    _this.onValueInputFocus = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this.focus();
    };
    _this.onKeyDown = function (event) {
      var _this$props5 = _this.props,
        isMulti = _this$props5.isMulti,
        backspaceRemovesValue = _this$props5.backspaceRemovesValue,
        escapeClearsValue = _this$props5.escapeClearsValue,
        inputValue = _this$props5.inputValue,
        isClearable = _this$props5.isClearable,
        isDisabled = _this$props5.isDisabled,
        menuIsOpen = _this$props5.menuIsOpen,
        onKeyDown = _this$props5.onKeyDown,
        tabSelectsValue = _this$props5.tabSelectsValue,
        openMenuOnFocus = _this$props5.openMenuOnFocus;
      var _this$state = _this.state,
        focusedOption = _this$state.focusedOption,
        focusedValue = _this$state.focusedValue,
        selectValue = _this$state.selectValue;
      if (isDisabled) return;
      if (typeof onKeyDown === 'function') {
        onKeyDown(event);
        if (event.defaultPrevented) {
          return;
        }
      }

      // Block option hover events when the user has just pressed a key
      _this.blockOptionHover = true;
      switch (event.key) {
        case 'ArrowLeft':
          if (!isMulti || inputValue) return;
          _this.focusValue('previous');
          break;
        case 'ArrowRight':
          if (!isMulti || inputValue) return;
          _this.focusValue('next');
          break;
        case 'Delete':
        case 'Backspace':
          if (inputValue) return;
          if (focusedValue) {
            _this.removeValue(focusedValue);
          } else {
            if (!backspaceRemovesValue) return;
            if (isMulti) {
              _this.popValue();
            } else if (isClearable) {
              _this.clearValue();
            }
          }
          break;
        case 'Tab':
          if (_this.isComposing) return;
          if (event.shiftKey || !menuIsOpen || !tabSelectsValue || !focusedOption ||
          // don't capture the event if the menu opens on focus and the focused
          // option is already selected; it breaks the flow of navigation
          openMenuOnFocus && _this.isOptionSelected(focusedOption, selectValue)) {
            return;
          }
          _this.selectOption(focusedOption);
          break;
        case 'Enter':
          if (event.keyCode === 229) {
            // ignore the keydown event from an Input Method Editor(IME)
            // ref. https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
            break;
          }
          if (menuIsOpen) {
            if (!focusedOption) return;
            if (_this.isComposing) return;
            _this.selectOption(focusedOption);
            break;
          }
          return;
        case 'Escape':
          if (menuIsOpen) {
            _this.setState({
              inputIsHiddenAfterUpdate: false
            });
            _this.onInputChange('', {
              action: 'menu-close',
              prevInputValue: inputValue
            });
            _this.onMenuClose();
          } else if (isClearable && escapeClearsValue) {
            _this.clearValue();
          }
          break;
        case ' ':
          // space
          if (inputValue) {
            return;
          }
          if (!menuIsOpen) {
            _this.openMenu('first');
            break;
          }
          if (!focusedOption) return;
          _this.selectOption(focusedOption);
          break;
        case 'ArrowUp':
          if (menuIsOpen) {
            _this.focusOption('up');
          } else {
            _this.openMenu('last');
          }
          break;
        case 'ArrowDown':
          if (menuIsOpen) {
            _this.focusOption('down');
          } else {
            _this.openMenu('first');
          }
          break;
        case 'PageUp':
          if (!menuIsOpen) return;
          _this.focusOption('pageup');
          break;
        case 'PageDown':
          if (!menuIsOpen) return;
          _this.focusOption('pagedown');
          break;
        case 'Home':
          if (!menuIsOpen) return;
          _this.focusOption('first');
          break;
        case 'End':
          if (!menuIsOpen) return;
          _this.focusOption('last');
          break;
        default:
          return;
      }
      event.preventDefault();
    };
    _this.state.instancePrefix = 'react-select-' + (_this.props.instanceId || ++instanceId);
    _this.state.selectValue = (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.H)(_props.value);
    // Set focusedOption if menuIsOpen is set on init (e.g. defaultMenuIsOpen)
    if (_props.menuIsOpen && _this.state.selectValue.length) {
      var focusableOptionsWithIds = _this.getFocusableOptionsWithIds();
      var focusableOptions = _this.buildFocusableOptions();
      var optionIndex = focusableOptions.indexOf(_this.state.selectValue[0]);
      _this.state.focusableOptionsWithIds = focusableOptionsWithIds;
      _this.state.focusedOption = focusableOptions[optionIndex];
      _this.state.focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusableOptions[optionIndex]);
    }
    return _this;
  }
  (0,_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startListeningComposition();
      this.startListeningToTouch();
      if (this.props.closeMenuOnScroll && document && document.addEventListener) {
        // Listen to all scroll events, and filter them out inside of 'onScroll'
        document.addEventListener('scroll', this.onScroll, true);
      }
      if (this.props.autoFocus) {
        this.focusInput();
      }

      // Scroll focusedOption into view if menuIsOpen is set on mount (e.g. defaultMenuIsOpen)
      if (this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef) {
        (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.I)(this.menuListRef, this.focusedOptionRef);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props6 = this.props,
        isDisabled = _this$props6.isDisabled,
        menuIsOpen = _this$props6.menuIsOpen;
      var isFocused = this.state.isFocused;
      if (
      // ensure focus is restored correctly when the control becomes enabled
      isFocused && !isDisabled && prevProps.isDisabled ||
      // ensure focus is on the Input when the menu opens
      isFocused && menuIsOpen && !prevProps.menuIsOpen) {
        this.focusInput();
      }
      if (isFocused && isDisabled && !prevProps.isDisabled) {
        // ensure select state gets blurred in case Select is programmatically disabled while focused
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: false
        }, this.onMenuClose);
      } else if (!isFocused && !isDisabled && prevProps.isDisabled && this.inputRef === document.activeElement) {
        // ensure select state gets focused in case Select is programatically re-enabled while focused (Firefox)
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isFocused: true
        });
      }

      // scroll the focused option into view if necessary
      if (this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate) {
        (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.I)(this.menuListRef, this.focusedOptionRef);
        this.scrollToFocusedOptionOnUpdate = false;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopListeningComposition();
      this.stopListeningToTouch();
      document.removeEventListener('scroll', this.onScroll, true);
    }

    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function onMenuOpen() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function onMenuClose() {
      this.onInputChange('', {
        action: 'menu-close',
        prevInputValue: this.props.inputValue
      });
      this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function onInputChange(newValue, actionMeta) {
      this.props.onInputChange(newValue, actionMeta);
    }

    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function focusInput() {
      if (!this.inputRef) return;
      this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function blurInput() {
      if (!this.inputRef) return;
      this.inputRef.blur();
    }

    // aliased for consumers
  }, {
    key: "openMenu",
    value: function openMenu(focusOption) {
      var _this2 = this;
      var _this$state2 = this.state,
        selectValue = _this$state2.selectValue,
        isFocused = _this$state2.isFocused;
      var focusableOptions = this.buildFocusableOptions();
      var openAtIndex = focusOption === 'first' ? 0 : focusableOptions.length - 1;
      if (!this.props.isMulti) {
        var selectedIndex = focusableOptions.indexOf(selectValue[0]);
        if (selectedIndex > -1) {
          openAtIndex = selectedIndex;
        }
      }

      // only scroll if the menu isn't already open
      this.scrollToFocusedOptionOnUpdate = !(isFocused && this.menuListRef);
      this.setState({
        inputIsHiddenAfterUpdate: false,
        focusedValue: null,
        focusedOption: focusableOptions[openAtIndex],
        focusedOptionId: this.getFocusedOptionId(focusableOptions[openAtIndex])
      }, function () {
        return _this2.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function focusValue(direction) {
      var _this$state3 = this.state,
        selectValue = _this$state3.selectValue,
        focusedValue = _this$state3.focusedValue;

      // Only multiselects support value focusing
      if (!this.props.isMulti) return;
      this.setState({
        focusedOption: null
      });
      var focusedIndex = selectValue.indexOf(focusedValue);
      if (!focusedValue) {
        focusedIndex = -1;
      }
      var lastIndex = selectValue.length - 1;
      var nextFocus = -1;
      if (!selectValue.length) return;
      switch (direction) {
        case 'previous':
          if (focusedIndex === 0) {
            // don't cycle from the start to the end
            nextFocus = 0;
          } else if (focusedIndex === -1) {
            // if nothing is focused, focus the last value first
            nextFocus = lastIndex;
          } else {
            nextFocus = focusedIndex - 1;
          }
          break;
        case 'next':
          if (focusedIndex > -1 && focusedIndex < lastIndex) {
            nextFocus = focusedIndex + 1;
          }
          break;
      }
      this.setState({
        inputIsHidden: nextFocus !== -1,
        focusedValue: selectValue[nextFocus]
      });
    }
  }, {
    key: "focusOption",
    value: function focusOption() {
      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'first';
      var pageSize = this.props.pageSize;
      var focusedOption = this.state.focusedOption;
      var options = this.getFocusableOptions();
      if (!options.length) return;
      var nextFocus = 0; // handles 'first'
      var focusedIndex = options.indexOf(focusedOption);
      if (!focusedOption) {
        focusedIndex = -1;
      }
      if (direction === 'up') {
        nextFocus = focusedIndex > 0 ? focusedIndex - 1 : options.length - 1;
      } else if (direction === 'down') {
        nextFocus = (focusedIndex + 1) % options.length;
      } else if (direction === 'pageup') {
        nextFocus = focusedIndex - pageSize;
        if (nextFocus < 0) nextFocus = 0;
      } else if (direction === 'pagedown') {
        nextFocus = focusedIndex + pageSize;
        if (nextFocus > options.length - 1) nextFocus = options.length - 1;
      } else if (direction === 'last') {
        nextFocus = options.length - 1;
      }
      this.scrollToFocusedOptionOnUpdate = true;
      this.setState({
        focusedOption: options[nextFocus],
        focusedValue: null,
        focusedOptionId: this.getFocusedOptionId(options[nextFocus])
      });
    }
  }, {
    key: "getTheme",
    value:
    // ==============================
    // Getters
    // ==============================

    function getTheme() {
      // Use the default theme if there are no customisations.
      if (!this.props.theme) {
        return defaultTheme;
      }
      // If the theme prop is a function, assume the function
      // knows how to merge the passed-in default theme with
      // its own modifications.
      if (typeof this.props.theme === 'function') {
        return this.props.theme(defaultTheme);
      }
      // Otherwise, if a plain theme object was passed in,
      // overlay it with the default theme.
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, defaultTheme), this.props.theme);
    }
  }, {
    key: "getCommonProps",
    value: function getCommonProps() {
      var clearValue = this.clearValue,
        cx = this.cx,
        getStyles = this.getStyles,
        getClassNames = this.getClassNames,
        getValue = this.getValue,
        selectOption = this.selectOption,
        setValue = this.setValue,
        props = this.props;
      var isMulti = props.isMulti,
        isRtl = props.isRtl,
        options = props.options;
      var hasValue = this.hasValue();
      return {
        clearValue: clearValue,
        cx: cx,
        getStyles: getStyles,
        getClassNames: getClassNames,
        getValue: getValue,
        hasValue: hasValue,
        isMulti: isMulti,
        isRtl: isRtl,
        options: options,
        selectOption: selectOption,
        selectProps: props,
        setValue: setValue,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      var selectValue = this.state.selectValue;
      return selectValue.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function hasOptions() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function isClearable() {
      var _this$props7 = this.props,
        isClearable = _this$props7.isClearable,
        isMulti = _this$props7.isMulti;

      // single select, by default, IS NOT clearable
      // multi select, by default, IS clearable
      if (isClearable === undefined) return isMulti;
      return isClearable;
    }
  }, {
    key: "isOptionDisabled",
    value: function isOptionDisabled(option, selectValue) {
      return _isOptionDisabled(this.props, option, selectValue);
    }
  }, {
    key: "isOptionSelected",
    value: function isOptionSelected(option, selectValue) {
      return _isOptionSelected(this.props, option, selectValue);
    }
  }, {
    key: "filterOption",
    value: function filterOption(option, inputValue) {
      return _filterOption(this.props, option, inputValue);
    }
  }, {
    key: "formatOptionLabel",
    value: function formatOptionLabel(data, context) {
      if (typeof this.props.formatOptionLabel === 'function') {
        var _inputValue = this.props.inputValue;
        var _selectValue = this.state.selectValue;
        return this.props.formatOptionLabel(data, {
          context: context,
          inputValue: _inputValue,
          selectValue: _selectValue
        });
      } else {
        return this.getOptionLabel(data);
      }
    }
  }, {
    key: "formatGroupLabel",
    value: function formatGroupLabel(data) {
      return this.props.formatGroupLabel(data);
    }

    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value:
    // ==============================
    // Composition Handlers
    // ==============================

    function startListeningComposition() {
      if (document && document.addEventListener) {
        document.addEventListener('compositionstart', this.onCompositionStart, false);
        document.addEventListener('compositionend', this.onCompositionEnd, false);
      }
    }
  }, {
    key: "stopListeningComposition",
    value: function stopListeningComposition() {
      if (document && document.removeEventListener) {
        document.removeEventListener('compositionstart', this.onCompositionStart);
        document.removeEventListener('compositionend', this.onCompositionEnd);
      }
    }
  }, {
    key: "startListeningToTouch",
    value:
    // ==============================
    // Touch Handlers
    // ==============================

    function startListeningToTouch() {
      if (document && document.addEventListener) {
        document.addEventListener('touchstart', this.onTouchStart, false);
        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
      }
    }
  }, {
    key: "stopListeningToTouch",
    value: function stopListeningToTouch() {
      if (document && document.removeEventListener) {
        document.removeEventListener('touchstart', this.onTouchStart);
        document.removeEventListener('touchmove', this.onTouchMove);
        document.removeEventListener('touchend', this.onTouchEnd);
      }
    }
  }, {
    key: "renderInput",
    value:
    // ==============================
    // Renderers
    // ==============================
    function renderInput() {
      var _this$props8 = this.props,
        isDisabled = _this$props8.isDisabled,
        isSearchable = _this$props8.isSearchable,
        inputId = _this$props8.inputId,
        inputValue = _this$props8.inputValue,
        tabIndex = _this$props8.tabIndex,
        form = _this$props8.form,
        menuIsOpen = _this$props8.menuIsOpen,
        required = _this$props8.required;
      var _this$getComponents = this.getComponents(),
        Input = _this$getComponents.Input;
      var _this$state4 = this.state,
        inputIsHidden = _this$state4.inputIsHidden,
        ariaSelection = _this$state4.ariaSelection;
      var commonProps = this.commonProps;
      var id = inputId || this.getElementId('input');

      // aria attributes makes the JSX "noisy", separated for clarity
      var ariaAttributes = (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
        'aria-autocomplete': 'list',
        'aria-expanded': menuIsOpen,
        'aria-haspopup': true,
        'aria-errormessage': this.props['aria-errormessage'],
        'aria-invalid': this.props['aria-invalid'],
        'aria-label': this.props['aria-label'],
        'aria-labelledby': this.props['aria-labelledby'],
        'aria-required': required,
        role: 'combobox',
        'aria-activedescendant': this.isAppleDevice ? undefined : this.state.focusedOptionId || ''
      }, menuIsOpen && {
        'aria-controls': this.getElementId('listbox')
      }), !isSearchable && {
        'aria-readonly': true
      }), this.hasValue() ? (ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus' && {
        'aria-describedby': this.getElementId('live-region')
      } : {
        'aria-describedby': this.getElementId('placeholder')
      });
      if (!isSearchable) {
        // use a dummy input to maintain focus/blur functionality
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(DummyInput, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: id,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.J,
          onFocus: this.onInputFocus,
          disabled: isDisabled,
          tabIndex: tabIndex,
          inputMode: "none",
          form: form,
          value: ""
        }, ariaAttributes));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Input, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        id: id,
        innerRef: this.getInputRef,
        isDisabled: isDisabled,
        isHidden: inputIsHidden,
        onBlur: this.onInputBlur,
        onChange: this.handleInputChange,
        onFocus: this.onInputFocus,
        spellCheck: "false",
        tabIndex: tabIndex,
        form: form,
        type: "text",
        value: inputValue
      }, ariaAttributes));
    }
  }, {
    key: "renderPlaceholderOrValue",
    value: function renderPlaceholderOrValue() {
      var _this3 = this;
      var _this$getComponents2 = this.getComponents(),
        MultiValue = _this$getComponents2.MultiValue,
        MultiValueContainer = _this$getComponents2.MultiValueContainer,
        MultiValueLabel = _this$getComponents2.MultiValueLabel,
        MultiValueRemove = _this$getComponents2.MultiValueRemove,
        SingleValue = _this$getComponents2.SingleValue,
        Placeholder = _this$getComponents2.Placeholder;
      var commonProps = this.commonProps;
      var _this$props9 = this.props,
        controlShouldRenderValue = _this$props9.controlShouldRenderValue,
        isDisabled = _this$props9.isDisabled,
        isMulti = _this$props9.isMulti,
        inputValue = _this$props9.inputValue,
        placeholder = _this$props9.placeholder;
      var _this$state5 = this.state,
        selectValue = _this$state5.selectValue,
        focusedValue = _this$state5.focusedValue,
        isFocused = _this$state5.isFocused;
      if (!this.hasValue() || !controlShouldRenderValue) {
        return inputValue ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Placeholder, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          key: "placeholder",
          isDisabled: isDisabled,
          isFocused: isFocused,
          innerProps: {
            id: this.getElementId('placeholder')
          }
        }), placeholder);
      }
      if (isMulti) {
        return selectValue.map(function (opt, index) {
          var isOptionFocused = opt === focusedValue;
          var key = "".concat(_this3.getOptionLabel(opt), "-").concat(_this3.getOptionValue(opt));
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(MultiValue, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            components: {
              Container: MultiValueContainer,
              Label: MultiValueLabel,
              Remove: MultiValueRemove
            },
            isFocused: isOptionFocused,
            isDisabled: isDisabled,
            key: key,
            index: index,
            removeProps: {
              onClick: function onClick() {
                return _this3.removeValue(opt);
              },
              onTouchEnd: function onTouchEnd() {
                return _this3.removeValue(opt);
              },
              onMouseDown: function onMouseDown(e) {
                e.preventDefault();
              }
            },
            data: opt
          }), _this3.formatOptionLabel(opt, 'value'));
        });
      }
      if (inputValue) {
        return null;
      }
      var singleValue = selectValue[0];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(SingleValue, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        data: singleValue,
        isDisabled: isDisabled
      }), this.formatOptionLabel(singleValue, 'value'));
    }
  }, {
    key: "renderClearIndicator",
    value: function renderClearIndicator() {
      var _this$getComponents3 = this.getComponents(),
        ClearIndicator = _this$getComponents3.ClearIndicator;
      var commonProps = this.commonProps;
      var _this$props10 = this.props,
        isDisabled = _this$props10.isDisabled,
        isLoading = _this$props10.isLoading;
      var isFocused = this.state.isFocused;
      if (!this.isClearable() || !ClearIndicator || isDisabled || !this.hasValue() || isLoading) {
        return null;
      }
      var innerProps = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(ClearIndicator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function renderLoadingIndicator() {
      var _this$getComponents4 = this.getComponents(),
        LoadingIndicator = _this$getComponents4.LoadingIndicator;
      var commonProps = this.commonProps;
      var _this$props11 = this.props,
        isDisabled = _this$props11.isDisabled,
        isLoading = _this$props11.isLoading;
      var isFocused = this.state.isFocused;
      if (!LoadingIndicator || !isLoading) return null;
      var innerProps = {
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(LoadingIndicator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function renderIndicatorSeparator() {
      var _this$getComponents5 = this.getComponents(),
        DropdownIndicator = _this$getComponents5.DropdownIndicator,
        IndicatorSeparator = _this$getComponents5.IndicatorSeparator;

      // separator doesn't make sense without the dropdown indicator
      if (!DropdownIndicator || !IndicatorSeparator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(IndicatorSeparator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function renderDropdownIndicator() {
      var _this$getComponents6 = this.getComponents(),
        DropdownIndicator = _this$getComponents6.DropdownIndicator;
      if (!DropdownIndicator) return null;
      var commonProps = this.commonProps;
      var isDisabled = this.props.isDisabled;
      var isFocused = this.state.isFocused;
      var innerProps = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        'aria-hidden': 'true'
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(DropdownIndicator, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerProps: innerProps,
        isDisabled: isDisabled,
        isFocused: isFocused
      }));
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var _this4 = this;
      var _this$getComponents7 = this.getComponents(),
        Group = _this$getComponents7.Group,
        GroupHeading = _this$getComponents7.GroupHeading,
        Menu = _this$getComponents7.Menu,
        MenuList = _this$getComponents7.MenuList,
        MenuPortal = _this$getComponents7.MenuPortal,
        LoadingMessage = _this$getComponents7.LoadingMessage,
        NoOptionsMessage = _this$getComponents7.NoOptionsMessage,
        Option = _this$getComponents7.Option;
      var commonProps = this.commonProps;
      var focusedOption = this.state.focusedOption;
      var _this$props12 = this.props,
        captureMenuScroll = _this$props12.captureMenuScroll,
        inputValue = _this$props12.inputValue,
        isLoading = _this$props12.isLoading,
        loadingMessage = _this$props12.loadingMessage,
        minMenuHeight = _this$props12.minMenuHeight,
        maxMenuHeight = _this$props12.maxMenuHeight,
        menuIsOpen = _this$props12.menuIsOpen,
        menuPlacement = _this$props12.menuPlacement,
        menuPosition = _this$props12.menuPosition,
        menuPortalTarget = _this$props12.menuPortalTarget,
        menuShouldBlockScroll = _this$props12.menuShouldBlockScroll,
        menuShouldScrollIntoView = _this$props12.menuShouldScrollIntoView,
        noOptionsMessage = _this$props12.noOptionsMessage,
        onMenuScrollToTop = _this$props12.onMenuScrollToTop,
        onMenuScrollToBottom = _this$props12.onMenuScrollToBottom;
      if (!menuIsOpen) return null;

      // TODO: Internal Option Type here
      var render = function render(props, id) {
        var type = props.type,
          data = props.data,
          isDisabled = props.isDisabled,
          isSelected = props.isSelected,
          label = props.label,
          value = props.value;
        var isFocused = focusedOption === data;
        var onHover = isDisabled ? undefined : function () {
          return _this4.onOptionHover(data);
        };
        var onSelect = isDisabled ? undefined : function () {
          return _this4.selectOption(data);
        };
        var optionId = "".concat(_this4.getElementId('option'), "-").concat(id);
        var innerProps = {
          id: optionId,
          onClick: onSelect,
          onMouseMove: onHover,
          onMouseOver: onHover,
          tabIndex: -1,
          role: 'option',
          'aria-selected': _this4.isAppleDevice ? undefined : isSelected // is not supported on Apple devices
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Option, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
          innerProps: innerProps,
          data: data,
          isDisabled: isDisabled,
          isSelected: isSelected,
          key: optionId,
          label: label,
          type: type,
          value: value,
          isFocused: isFocused,
          innerRef: isFocused ? _this4.getFocusedOptionRef : undefined
        }), _this4.formatOptionLabel(props.data, 'menu'));
      };
      var menuUI;
      if (this.hasOptions()) {
        menuUI = this.getCategorizedOptions().map(function (item) {
          if (item.type === 'group') {
            var _data = item.data,
              options = item.options,
              groupIndex = item.index;
            var groupId = "".concat(_this4.getElementId('group'), "-").concat(groupIndex);
            var headingId = "".concat(groupId, "-heading");
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Group, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
              key: groupId,
              data: _data,
              options: options,
              Heading: GroupHeading,
              headingProps: {
                id: headingId,
                data: item.data
              },
              label: _this4.formatGroupLabel(item.data)
            }), item.options.map(function (option) {
              return render(option, "".concat(groupIndex, "-").concat(option.index));
            }));
          } else if (item.type === 'option') {
            return render(item, "".concat(item.index));
          }
        });
      } else if (isLoading) {
        var message = loadingMessage({
          inputValue: inputValue
        });
        if (message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(LoadingMessage, commonProps, message);
      } else {
        var _message = noOptionsMessage({
          inputValue: inputValue
        });
        if (_message === null) return null;
        menuUI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(NoOptionsMessage, commonProps, _message);
      }
      var menuPlacementProps = {
        minMenuHeight: minMenuHeight,
        maxMenuHeight: maxMenuHeight,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition,
        menuShouldScrollIntoView: menuShouldScrollIntoView
      };
      var menuElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.M, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps), function (_ref4) {
        var ref = _ref4.ref,
          _ref4$placerProps = _ref4.placerProps,
          placement = _ref4$placerProps.placement,
          maxHeight = _ref4$placerProps.maxHeight;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Menu, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, menuPlacementProps, {
          innerRef: ref,
          innerProps: {
            onMouseDown: _this4.onMenuMouseDown,
            onMouseMove: _this4.onMenuMouseMove
          },
          isLoading: isLoading,
          placement: placement
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(ScrollManager, {
          captureEnabled: captureMenuScroll,
          onTopArrive: onMenuScrollToTop,
          onBottomArrive: onMenuScrollToBottom,
          lockEnabled: menuShouldBlockScroll
        }, function (scrollTargetRef) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(MenuList, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
            innerRef: function innerRef(instance) {
              _this4.getMenuListRef(instance);
              scrollTargetRef(instance);
            },
            innerProps: {
              role: 'listbox',
              'aria-multiselectable': commonProps.isMulti,
              id: _this4.getElementId('listbox')
            },
            isLoading: isLoading,
            maxHeight: maxHeight,
            focusedOption: focusedOption
          }), menuUI);
        }));
      });

      // positioning behaviour is almost identical for portalled and fixed,
      // so we use the same component. the actual portalling logic is forked
      // within the component based on `menuPosition`
      return menuPortalTarget || menuPosition === 'fixed' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(MenuPortal, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        appendTo: menuPortalTarget,
        controlElement: this.controlRef,
        menuPlacement: menuPlacement,
        menuPosition: menuPosition
      }), menuElement) : menuElement;
    }
  }, {
    key: "renderFormField",
    value: function renderFormField() {
      var _this5 = this;
      var _this$props13 = this.props,
        delimiter = _this$props13.delimiter,
        isDisabled = _this$props13.isDisabled,
        isMulti = _this$props13.isMulti,
        name = _this$props13.name,
        required = _this$props13.required;
      var selectValue = this.state.selectValue;
      if (required && !this.hasValue() && !isDisabled) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(RequiredInput$1, {
          name: name,
          onFocus: this.onValueInputFocus
        });
      }
      if (!name || isDisabled) return;
      if (isMulti) {
        if (delimiter) {
          var value = selectValue.map(function (opt) {
            return _this5.getOptionValue(opt);
          }).join(delimiter);
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("input", {
            name: name,
            type: "hidden",
            value: value
          });
        } else {
          var input = selectValue.length > 0 ? selectValue.map(function (opt, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("input", {
              key: "i-".concat(i),
              name: name,
              type: "hidden",
              value: _this5.getOptionValue(opt)
            });
          }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("input", {
            name: name,
            type: "hidden",
            value: ""
          });
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("div", null, input);
        }
      } else {
        var _value = selectValue[0] ? this.getOptionValue(selectValue[0]) : '';
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement("input", {
          name: name,
          type: "hidden",
          value: _value
        });
      }
    }
  }, {
    key: "renderLiveRegion",
    value: function renderLiveRegion() {
      var commonProps = this.commonProps;
      var _this$state6 = this.state,
        ariaSelection = _this$state6.ariaSelection,
        focusedOption = _this$state6.focusedOption,
        focusedValue = _this$state6.focusedValue,
        isFocused = _this$state6.isFocused,
        selectValue = _this$state6.selectValue;
      var focusableOptions = this.getFocusableOptions();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(LiveRegion$1, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        id: this.getElementId('live-region'),
        ariaSelection: ariaSelection,
        focusedOption: focusedOption,
        focusedValue: focusedValue,
        isFocused: isFocused,
        selectValue: selectValue,
        focusableOptions: focusableOptions,
        isAppleDevice: this.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getComponents8 = this.getComponents(),
        Control = _this$getComponents8.Control,
        IndicatorsContainer = _this$getComponents8.IndicatorsContainer,
        SelectContainer = _this$getComponents8.SelectContainer,
        ValueContainer = _this$getComponents8.ValueContainer;
      var _this$props14 = this.props,
        className = _this$props14.className,
        id = _this$props14.id,
        isDisabled = _this$props14.isDisabled,
        menuIsOpen = _this$props14.menuIsOpen;
      var isFocused = this.state.isFocused;
      var commonProps = this.commonProps = this.getCommonProps();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(SelectContainer, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        className: className,
        innerProps: {
          id: id,
          onKeyDown: this.onKeyDown
        },
        isDisabled: isDisabled,
        isFocused: isFocused
      }), this.renderLiveRegion(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(Control, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: isDisabled,
        isFocused: isFocused,
        menuIsOpen: menuIsOpen
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(ValueContainer, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderPlaceholderOrValue(), this.renderInput()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7__.createElement(IndicatorsContainer, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, commonProps, {
        isDisabled: isDisabled
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var prevProps = state.prevProps,
        clearFocusValueOnUpdate = state.clearFocusValueOnUpdate,
        inputIsHiddenAfterUpdate = state.inputIsHiddenAfterUpdate,
        ariaSelection = state.ariaSelection,
        isFocused = state.isFocused,
        prevWasFocused = state.prevWasFocused,
        instancePrefix = state.instancePrefix;
      var options = props.options,
        value = props.value,
        menuIsOpen = props.menuIsOpen,
        inputValue = props.inputValue,
        isMulti = props.isMulti;
      var selectValue = (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.H)(value);
      var newMenuOptionsState = {};
      if (prevProps && (value !== prevProps.value || options !== prevProps.options || menuIsOpen !== prevProps.menuIsOpen || inputValue !== prevProps.inputValue)) {
        var focusableOptions = menuIsOpen ? buildFocusableOptions(props, selectValue) : [];
        var focusableOptionsWithIds = menuIsOpen ? buildFocusableOptionsWithIds(buildCategorizedOptions(props, selectValue), "".concat(instancePrefix, "-option")) : [];
        var focusedValue = clearFocusValueOnUpdate ? getNextFocusedValue(state, selectValue) : null;
        var focusedOption = getNextFocusedOption(state, focusableOptions);
        var focusedOptionId = getFocusedOptionId(focusableOptionsWithIds, focusedOption);
        newMenuOptionsState = {
          selectValue: selectValue,
          focusedOption: focusedOption,
          focusedOptionId: focusedOptionId,
          focusableOptionsWithIds: focusableOptionsWithIds,
          focusedValue: focusedValue,
          clearFocusValueOnUpdate: false
        };
      }
      // some updates should toggle the state of the input visibility
      var newInputIsHiddenState = inputIsHiddenAfterUpdate != null && props !== prevProps ? {
        inputIsHidden: inputIsHiddenAfterUpdate,
        inputIsHiddenAfterUpdate: undefined
      } : {};
      var newAriaSelection = ariaSelection;
      var hasKeptFocus = isFocused && prevWasFocused;
      if (isFocused && !hasKeptFocus) {
        // If `value` or `defaultValue` props are not empty then announce them
        // when the Select is initially focused
        newAriaSelection = {
          value: (0,_index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_11__.D)(isMulti, selectValue, selectValue[0] || null),
          options: selectValue,
          action: 'initial-input-focus'
        };
        hasKeptFocus = !prevWasFocused;
      }

      // If the 'initial-input-focus' action has been set already
      // then reset the ariaSelection to null
      if ((ariaSelection === null || ariaSelection === void 0 ? void 0 : ariaSelection.action) === 'initial-input-focus') {
        newAriaSelection = null;
      }
      return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, newMenuOptionsState), newInputIsHiddenState), {}, {
        prevProps: props,
        ariaSelection: newAriaSelection,
        prevWasFocused: hasKeptFocus
      });
    }
  }]);
  return Select;
}(react__WEBPACK_IMPORTED_MODULE_7__.Component);
Select.defaultProps = defaultProps;




/***/ }),

/***/ "./node_modules/react-select/dist/index-641ee5b8.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-select/dist/index-641ee5b8.esm.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ isMobileDevice),
/* harmony export */   B: () => (/* binding */ multiValueAsValue),
/* harmony export */   C: () => (/* binding */ singleValueAsValue),
/* harmony export */   D: () => (/* binding */ valueTernary),
/* harmony export */   E: () => (/* binding */ classNames),
/* harmony export */   F: () => (/* binding */ defaultComponents),
/* harmony export */   G: () => (/* binding */ isDocumentElement),
/* harmony export */   H: () => (/* binding */ cleanValue),
/* harmony export */   I: () => (/* binding */ scrollIntoView),
/* harmony export */   J: () => (/* binding */ noop),
/* harmony export */   K: () => (/* binding */ notNullish),
/* harmony export */   L: () => (/* binding */ handleInputChange),
/* harmony export */   M: () => (/* binding */ MenuPlacer),
/* harmony export */   a: () => (/* binding */ clearIndicatorCSS),
/* harmony export */   b: () => (/* binding */ containerCSS),
/* harmony export */   c: () => (/* binding */ components),
/* harmony export */   d: () => (/* binding */ css$1),
/* harmony export */   e: () => (/* binding */ dropdownIndicatorCSS),
/* harmony export */   f: () => (/* binding */ groupHeadingCSS),
/* harmony export */   g: () => (/* binding */ groupCSS),
/* harmony export */   h: () => (/* binding */ indicatorSeparatorCSS),
/* harmony export */   i: () => (/* binding */ indicatorsContainerCSS),
/* harmony export */   j: () => (/* binding */ inputCSS),
/* harmony export */   k: () => (/* binding */ loadingMessageCSS),
/* harmony export */   l: () => (/* binding */ loadingIndicatorCSS),
/* harmony export */   m: () => (/* binding */ menuCSS),
/* harmony export */   n: () => (/* binding */ menuListCSS),
/* harmony export */   o: () => (/* binding */ menuPortalCSS),
/* harmony export */   p: () => (/* binding */ multiValueCSS),
/* harmony export */   q: () => (/* binding */ multiValueLabelCSS),
/* harmony export */   r: () => (/* binding */ removeProps),
/* harmony export */   s: () => (/* binding */ supportsPassiveEvents),
/* harmony export */   t: () => (/* binding */ multiValueRemoveCSS),
/* harmony export */   u: () => (/* binding */ noOptionsMessageCSS),
/* harmony export */   v: () => (/* binding */ optionCSS),
/* harmony export */   w: () => (/* binding */ placeholderCSS),
/* harmony export */   x: () => (/* binding */ css),
/* harmony export */   y: () => (/* binding */ valueContainerCSS),
/* harmony export */   z: () => (/* binding */ isTouchCapable)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @floating-ui/dom */ "./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs");
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");













var _excluded$4 = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"];
// ==============================
// NO OP
// ==============================

var noop = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-select__comp react-select__comp-arg react-select__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-select__comp react-select__comp--some'
*/
function applyPrefixToName(prefix, name) {
  if (!name) {
    return prefix;
  } else if (name[0] === '-') {
    return prefix + name;
  } else {
    return prefix + '__' + name;
  }
}
function classNames(prefix, state) {
  for (var _len = arguments.length, classNameList = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    classNameList[_key - 2] = arguments[_key];
  }
  var arr = [].concat(classNameList);
  if (state && prefix) {
    for (var key in state) {
      if (state.hasOwnProperty(key) && state[key]) {
        arr.push("".concat(applyPrefixToName(prefix, key)));
      }
    }
  }
  return arr.filter(function (i) {
    return i;
  }).map(function (i) {
    return String(i).trim();
  }).join(' ');
}
// ==============================
// Clean Value
// ==============================

var cleanValue = function cleanValue(value) {
  if (isArray(value)) return value.filter(Boolean);
  if ((0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_4__["default"])(value) === 'object' && value !== null) return [value];
  return [];
};

// ==============================
// Clean Common Props
// ==============================

var cleanCommonProps = function cleanCommonProps(props) {
  //className
  props.className;
    props.clearValue;
    props.cx;
    props.getStyles;
    props.getClassNames;
    props.getValue;
    props.hasValue;
    props.isMulti;
    props.isRtl;
    props.options;
    props.selectOption;
    props.selectProps;
    props.setValue;
    props.theme;
    var innerProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(props, _excluded$4);
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, innerProps);
};

// ==============================
// Get Style Props
// ==============================

var getStyleProps = function getStyleProps(props, name, classNamesState) {
  var cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    className = props.className;
  return {
    css: getStyles(name, props),
    className: cx(classNamesState !== null && classNamesState !== void 0 ? classNamesState : {}, getClassNames(name, props), className)
  };
};

// ==============================
// Handle Input Change
// ==============================

function handleInputChange(inputValue, actionMeta, onInputChange) {
  if (onInputChange) {
    var _newValue = onInputChange(inputValue, actionMeta);
    if (typeof _newValue === 'string') return _newValue;
  }
  return inputValue;
}

// ==============================
// Scroll Helpers
// ==============================

function isDocumentElement(el) {
  return [document.documentElement, document.body, window].indexOf(el) > -1;
}

// Normalized Scroll Top
// ------------------------------

function normalizedHeight(el) {
  if (isDocumentElement(el)) {
    return window.innerHeight;
  }
  return el.clientHeight;
}

// Normalized scrollTo & scrollTop
// ------------------------------

function getScrollTop(el) {
  if (isDocumentElement(el)) {
    return window.pageYOffset;
  }
  return el.scrollTop;
}
function scrollTo(el, top) {
  // with a scroll distance, we perform scroll on the element
  if (isDocumentElement(el)) {
    window.scrollTo(0, top);
    return;
  }
  el.scrollTop = top;
}

// Get Scroll Parent
// ------------------------------

function getScrollParent(element) {
  var style = getComputedStyle(element);
  var excludeStaticParent = style.position === 'absolute';
  var overflowRx = /(auto|scroll)/;
  if (style.position === 'fixed') return document.documentElement;
  for (var parent = element; parent = parent.parentElement;) {
    style = getComputedStyle(parent);
    if (excludeStaticParent && style.position === 'static') {
      continue;
    }
    if (overflowRx.test(style.overflow + style.overflowY + style.overflowX)) {
      return parent;
    }
  }
  return document.documentElement;
}

// Animated Scroll To
// ------------------------------

/**
  @param t: time (elapsed)
  @param b: initial value
  @param c: amount of change
  @param d: duration
*/
function easeOutCubic(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
}
function animatedScrollTo(element, to) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
  var callback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
  var start = getScrollTop(element);
  var change = to - start;
  var increment = 10;
  var currentTime = 0;
  function animateScroll() {
    currentTime += increment;
    var val = easeOutCubic(currentTime, start, change, duration);
    scrollTo(element, val);
    if (currentTime < duration) {
      window.requestAnimationFrame(animateScroll);
    } else {
      callback(element);
    }
  }
  animateScroll();
}

// Scroll Into View
// ------------------------------

function scrollIntoView(menuEl, focusedEl) {
  var menuRect = menuEl.getBoundingClientRect();
  var focusedRect = focusedEl.getBoundingClientRect();
  var overScroll = focusedEl.offsetHeight / 3;
  if (focusedRect.bottom + overScroll > menuRect.bottom) {
    scrollTo(menuEl, Math.min(focusedEl.offsetTop + focusedEl.clientHeight - menuEl.offsetHeight + overScroll, menuEl.scrollHeight));
  } else if (focusedRect.top - overScroll < menuRect.top) {
    scrollTo(menuEl, Math.max(focusedEl.offsetTop - overScroll, 0));
  }
}

// ==============================
// Get bounding client object
// ==============================

// cannot get keys using array notation with DOMRect
function getBoundingClientObj(element) {
  var rect = element.getBoundingClientRect();
  return {
    bottom: rect.bottom,
    height: rect.height,
    left: rect.left,
    right: rect.right,
    top: rect.top,
    width: rect.width
  };
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouchCapable() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Mobile Device Detector
// ==============================

function isMobileDevice() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch (e) {
    return false;
  }
}

// ==============================
// Passive Event Detector
// ==============================

// https://github.com/rafgraph/detect-it/blob/main/src/index.ts#L19-L36
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
// check for SSR
var w = typeof window !== 'undefined' ? window : {};
if (w.addEventListener && w.removeEventListener) {
  w.addEventListener('p', noop, options);
  w.removeEventListener('p', noop, false);
}
var supportsPassiveEvents = passiveOptionAccessed;
function notNullish(item) {
  return item != null;
}
function isArray(arg) {
  return Array.isArray(arg);
}
function valueTernary(isMulti, multiValue, singleValue) {
  return isMulti ? multiValue : singleValue;
}
function singleValueAsValue(singleValue) {
  return singleValue;
}
function multiValueAsValue(multiValue) {
  return multiValue;
}
var removeProps = function removeProps(propsObj) {
  for (var _len2 = arguments.length, properties = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    properties[_key2 - 1] = arguments[_key2];
  }
  var propsMap = Object.entries(propsObj).filter(function (_ref) {
    var _ref2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 1),
      key = _ref2[0];
    return !properties.includes(key);
  });
  return propsMap.reduce(function (newProps, _ref3) {
    var _ref4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, 2),
      key = _ref4[0],
      val = _ref4[1];
    newProps[key] = val;
    return newProps;
  }, {});
};

var _excluded$3 = ["children", "innerProps"],
  _excluded2$1 = ["children", "innerProps"];
function getMenuPlacement(_ref) {
  var preferredMaxHeight = _ref.maxHeight,
    menuEl = _ref.menuEl,
    minHeight = _ref.minHeight,
    preferredPlacement = _ref.placement,
    shouldScroll = _ref.shouldScroll,
    isFixedPosition = _ref.isFixedPosition,
    controlHeight = _ref.controlHeight;
  var scrollParent = getScrollParent(menuEl);
  var defaultState = {
    placement: 'bottom',
    maxHeight: preferredMaxHeight
  };

  // something went wrong, return default state
  if (!menuEl || !menuEl.offsetParent) return defaultState;

  // we can't trust `scrollParent.scrollHeight` --> it may increase when
  // the menu is rendered
  var _scrollParent$getBoun = scrollParent.getBoundingClientRect(),
    scrollHeight = _scrollParent$getBoun.height;
  var _menuEl$getBoundingCl = menuEl.getBoundingClientRect(),
    menuBottom = _menuEl$getBoundingCl.bottom,
    menuHeight = _menuEl$getBoundingCl.height,
    menuTop = _menuEl$getBoundingCl.top;
  var _menuEl$offsetParent$ = menuEl.offsetParent.getBoundingClientRect(),
    containerTop = _menuEl$offsetParent$.top;
  var viewHeight = isFixedPosition ? window.innerHeight : normalizedHeight(scrollParent);
  var scrollTop = getScrollTop(scrollParent);
  var marginBottom = parseInt(getComputedStyle(menuEl).marginBottom, 10);
  var marginTop = parseInt(getComputedStyle(menuEl).marginTop, 10);
  var viewSpaceAbove = containerTop - marginTop;
  var viewSpaceBelow = viewHeight - menuTop;
  var scrollSpaceAbove = viewSpaceAbove + scrollTop;
  var scrollSpaceBelow = scrollHeight - scrollTop - menuTop;
  var scrollDown = menuBottom - viewHeight + scrollTop + marginBottom;
  var scrollUp = scrollTop + menuTop - marginTop;
  var scrollDuration = 160;
  switch (preferredPlacement) {
    case 'auto':
    case 'bottom':
      // 1: the menu will fit, do nothing
      if (viewSpaceBelow >= menuHeight) {
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceBelow >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceBelow >= minHeight || isFixedPosition && viewSpaceBelow >= minHeight) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollDown, scrollDuration);
        }

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        var constrainedHeight = isFixedPosition ? viewSpaceBelow - marginBottom : scrollSpaceBelow - marginBottom;
        return {
          placement: 'bottom',
          maxHeight: constrainedHeight
        };
      }

      // 4. Forked beviour when there isn't enough space below

      // AUTO: flip the menu, render above
      if (preferredPlacement === 'auto' || isFixedPosition) {
        // may need to be constrained after flipping
        var _constrainedHeight = preferredMaxHeight;
        var spaceAbove = isFixedPosition ? viewSpaceAbove : scrollSpaceAbove;
        if (spaceAbove >= minHeight) {
          _constrainedHeight = Math.min(spaceAbove - marginBottom - controlHeight, preferredMaxHeight);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight
        };
      }

      // BOTTOM: allow browser to increase scrollable area and immediately set scroll
      if (preferredPlacement === 'bottom') {
        if (shouldScroll) {
          scrollTo(scrollParent, scrollDown);
        }
        return {
          placement: 'bottom',
          maxHeight: preferredMaxHeight
        };
      }
      break;
    case 'top':
      // 1: the menu will fit, do nothing
      if (viewSpaceAbove >= menuHeight) {
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 2: the menu will fit, if scrolled
      if (scrollSpaceAbove >= menuHeight && !isFixedPosition) {
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: preferredMaxHeight
        };
      }

      // 3: the menu will fit, if constrained
      if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
        var _constrainedHeight2 = preferredMaxHeight;

        // we want to provide as much of the menu as possible to the user,
        // so give them whatever is available below rather than the minHeight.
        if (!isFixedPosition && scrollSpaceAbove >= minHeight || isFixedPosition && viewSpaceAbove >= minHeight) {
          _constrainedHeight2 = isFixedPosition ? viewSpaceAbove - marginTop : scrollSpaceAbove - marginTop;
        }
        if (shouldScroll) {
          animatedScrollTo(scrollParent, scrollUp, scrollDuration);
        }
        return {
          placement: 'top',
          maxHeight: _constrainedHeight2
        };
      }

      // 4. not enough space, the browser WILL NOT increase scrollable area when
      // absolutely positioned element rendered above the viewport (only below).
      // Flip the menu, render below
      return {
        placement: 'bottom',
        maxHeight: preferredMaxHeight
      };
    default:
      throw new Error("Invalid placement provided \"".concat(preferredPlacement, "\"."));
  }
  return defaultState;
}

// Menu Component
// ------------------------------

function alignToControl(placement) {
  var placementToCSSProp = {
    bottom: 'top',
    top: 'bottom'
  };
  return placement ? placementToCSSProp[placement] : 'bottom';
}
var coercePlacement = function coercePlacement(p) {
  return p === 'auto' ? 'bottom' : p;
};
var menuCSS = function menuCSS(_ref2, unstyled) {
  var _objectSpread2;
  var placement = _ref2.placement,
    _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    spacing = _ref2$theme.spacing,
    colors = _ref2$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((_objectSpread2 = {
    label: 'menu'
  }, (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_objectSpread2, alignToControl(placement), '100%'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_objectSpread2, "position", 'absolute'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_objectSpread2, "width", '100%'), (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(_objectSpread2, "zIndex", 1), _objectSpread2), unstyled ? {} : {
    backgroundColor: colors.neutral0,
    borderRadius: borderRadius,
    boxShadow: '0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)',
    marginBottom: spacing.menuGutter,
    marginTop: spacing.menuGutter
  });
};
var PortalPlacementContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_7__.createContext)(null);

// NOTE: internal only
var MenuPlacer = function MenuPlacer(props) {
  var children = props.children,
    minMenuHeight = props.minMenuHeight,
    maxMenuHeight = props.maxMenuHeight,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition,
    menuShouldScrollIntoView = props.menuShouldScrollIntoView,
    theme = props.theme;
  var _ref3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(PortalPlacementContext) || {},
    setPortalPlacement = _ref3.setPortalPlacement;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(maxMenuHeight),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
    maxHeight = _useState2[0],
    setMaxHeight = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
    placement = _useState4[0],
    setPlacement = _useState4[1];
  var controlHeight = theme.spacing.controlHeight;
  (0,use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    var menuEl = ref.current;
    if (!menuEl) return;

    // DO NOT scroll if position is fixed
    var isFixedPosition = menuPosition === 'fixed';
    var shouldScroll = menuShouldScrollIntoView && !isFixedPosition;
    var state = getMenuPlacement({
      maxHeight: maxMenuHeight,
      menuEl: menuEl,
      minHeight: minMenuHeight,
      placement: menuPlacement,
      shouldScroll: shouldScroll,
      isFixedPosition: isFixedPosition,
      controlHeight: controlHeight
    });
    setMaxHeight(state.maxHeight);
    setPlacement(state.placement);
    setPortalPlacement === null || setPortalPlacement === void 0 ? void 0 : setPortalPlacement(state.placement);
  }, [maxMenuHeight, menuPlacement, menuPosition, menuShouldScrollIntoView, minMenuHeight, setPortalPlacement, controlHeight]);
  return children({
    ref: ref,
    placerProps: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
      placement: placement || coercePlacement(menuPlacement),
      maxHeight: maxHeight
    })
  });
};
var Menu = function Menu(props) {
  var children = props.children,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'menu', {
    menu: true
  }), {
    ref: innerRef
  }, innerProps), children);
};
var Menu$1 = Menu;

// ==============================
// Menu List
// ==============================

var menuListCSS = function menuListCSS(_ref4, unstyled) {
  var maxHeight = _ref4.maxHeight,
    baseUnit = _ref4.theme.spacing.baseUnit;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    maxHeight: maxHeight,
    overflowY: 'auto',
    position: 'relative',
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: 'touch'
  }, unstyled ? {} : {
    paddingBottom: baseUnit,
    paddingTop: baseUnit
  });
};
var MenuList = function MenuList(props) {
  var children = props.children,
    innerProps = props.innerProps,
    innerRef = props.innerRef,
    isMulti = props.isMulti;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'menuList', {
    'menu-list': true,
    'menu-list--is-multi': isMulti
  }), {
    ref: innerRef
  }, innerProps), children);
};

// ==============================
// Menu Notices
// ==============================

var noticeCSS = function noticeCSS(_ref5, unstyled) {
  var _ref5$theme = _ref5.theme,
    baseUnit = _ref5$theme.spacing.baseUnit,
    colors = _ref5$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    textAlign: 'center'
  }, unstyled ? {} : {
    color: colors.neutral40,
    padding: "".concat(baseUnit * 2, "px ").concat(baseUnit * 3, "px")
  });
};
var noOptionsMessageCSS = noticeCSS;
var loadingMessageCSS = noticeCSS;
var NoOptionsMessage = function NoOptionsMessage(_ref6) {
  var _ref6$children = _ref6.children,
    children = _ref6$children === void 0 ? 'No options' : _ref6$children,
    innerProps = _ref6.innerProps,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref6, _excluded$3);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps), {}, {
    children: children,
    innerProps: innerProps
  }), 'noOptionsMessage', {
    'menu-notice': true,
    'menu-notice--no-options': true
  }), innerProps), children);
};
var LoadingMessage = function LoadingMessage(_ref7) {
  var _ref7$children = _ref7.children,
    children = _ref7$children === void 0 ? 'Loading...' : _ref7$children,
    innerProps = _ref7.innerProps,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref7, _excluded2$1);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps), {}, {
    children: children,
    innerProps: innerProps
  }), 'loadingMessage', {
    'menu-notice': true,
    'menu-notice--loading': true
  }), innerProps), children);
};

// ==============================
// Menu Portal
// ==============================

var menuPortalCSS = function menuPortalCSS(_ref8) {
  var rect = _ref8.rect,
    offset = _ref8.offset,
    position = _ref8.position;
  return {
    left: rect.left,
    position: position,
    top: offset,
    width: rect.width,
    zIndex: 1
  };
};
var MenuPortal = function MenuPortal(props) {
  var appendTo = props.appendTo,
    children = props.children,
    controlElement = props.controlElement,
    innerProps = props.innerProps,
    menuPlacement = props.menuPlacement,
    menuPosition = props.menuPosition;
  var menuPortalRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  var cleanupRef = (0,react__WEBPACK_IMPORTED_MODULE_7__.useRef)(null);
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(coercePlacement(menuPlacement)),
    _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
    placement = _useState6[0],
    setPortalPlacement = _useState6[1];
  var portalPlacementContext = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(function () {
    return {
      setPortalPlacement: setPortalPlacement
    };
  }, []);
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
    _useState8 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState7, 2),
    computedPosition = _useState8[0],
    setComputedPosition = _useState8[1];
  var updateComputedPosition = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function () {
    if (!controlElement) return;
    var rect = getBoundingClientObj(controlElement);
    var scrollDistance = menuPosition === 'fixed' ? 0 : window.pageYOffset;
    var offset = rect[placement] + scrollDistance;
    if (offset !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset) || rect.left !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left) || rect.width !== (computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width)) {
      setComputedPosition({
        offset: offset,
        rect: rect
      });
    }
  }, [controlElement, menuPosition, placement, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.offset, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.left, computedPosition === null || computedPosition === void 0 ? void 0 : computedPosition.rect.width]);
  (0,use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    updateComputedPosition();
  }, [updateComputedPosition]);
  var runAutoUpdate = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function () {
    if (typeof cleanupRef.current === 'function') {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    if (controlElement && menuPortalRef.current) {
      cleanupRef.current = (0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_11__.autoUpdate)(controlElement, menuPortalRef.current, updateComputedPosition, {
        elementResize: 'ResizeObserver' in window
      });
    }
  }, [controlElement, updateComputedPosition]);
  (0,use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_9__["default"])(function () {
    runAutoUpdate();
  }, [runAutoUpdate]);
  var setMenuPortalElement = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function (menuPortalElement) {
    menuPortalRef.current = menuPortalElement;
    runAutoUpdate();
  }, [runAutoUpdate]);

  // bail early if required elements aren't present
  if (!appendTo && menuPosition !== 'fixed' || !computedPosition) return null;

  // same wrapper element whether fixed or portalled
  var menuWrapper = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: setMenuPortalElement
  }, getStyleProps((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    offset: computedPosition.offset,
    position: menuPosition,
    rect: computedPosition.rect
  }), 'menuPortal', {
    'menu-portal': true
  }), innerProps), children);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(PortalPlacementContext.Provider, {
    value: portalPlacementContext
  }, appendTo ? /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_8__.createPortal)(menuWrapper, appendTo) : menuWrapper);
};

// ==============================
// Root Container
// ==============================

var containerCSS = function containerCSS(_ref) {
  var isDisabled = _ref.isDisabled,
    isRtl = _ref.isRtl;
  return {
    label: 'container',
    direction: isRtl ? 'rtl' : undefined,
    pointerEvents: isDisabled ? 'none' : undefined,
    // cancel mouse events when disabled
    position: 'relative'
  };
};
var SelectContainer = function SelectContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    isRtl = props.isRtl;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'container', {
    '--is-disabled': isDisabled,
    '--is-rtl': isRtl
  }), innerProps), children);
};

// ==============================
// Value Container
// ==============================

var valueContainerCSS = function valueContainerCSS(_ref2, unstyled) {
  var spacing = _ref2.theme.spacing,
    isMulti = _ref2.isMulti,
    hasValue = _ref2.hasValue,
    controlShouldRenderValue = _ref2.selectProps.controlShouldRenderValue;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alignItems: 'center',
    display: isMulti && hasValue && controlShouldRenderValue ? 'flex' : 'grid',
    flex: 1,
    flexWrap: 'wrap',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
    overflow: 'hidden'
  }, unstyled ? {} : {
    padding: "".concat(spacing.baseUnit / 2, "px ").concat(spacing.baseUnit * 2, "px")
  });
};
var ValueContainer = function ValueContainer(props) {
  var children = props.children,
    innerProps = props.innerProps,
    isMulti = props.isMulti,
    hasValue = props.hasValue;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'valueContainer', {
    'value-container': true,
    'value-container--is-multi': isMulti,
    'value-container--has-value': hasValue
  }), innerProps), children);
};

// ==============================
// Indicator Container
// ==============================

var indicatorsContainerCSS = function indicatorsContainerCSS() {
  return {
    alignItems: 'center',
    alignSelf: 'stretch',
    display: 'flex',
    flexShrink: 0
  };
};
var IndicatorsContainer = function IndicatorsContainer(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'indicatorsContainer', {
    indicators: true
  }), innerProps), children);
};

var _templateObject;
var _excluded$2 = ["size"],
  _excluded2 = ["innerProps", "isRtl", "size"];
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

// ==============================
// Dropdown & Clear Icons
// ==============================
var _ref2 =  false ? 0 : {
  name: "tj5bde-Svg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0;label:Svg;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var Svg = function Svg(_ref) {
  var size = _ref.size,
    props = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, _excluded$2);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("svg", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    height: size,
    width: size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: _ref2
  }, props));
};
var CrossIcon = function CrossIcon(props) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(Svg, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
};
var DownChevron = function DownChevron(props) {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(Svg, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    size: 20
  }, props), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
};

// ==============================
// Dropdown & Clear Buttons
// ==============================

var baseCSS = function baseCSS(_ref3, unstyled) {
  var isFocused = _ref3.isFocused,
    _ref3$theme = _ref3.theme,
    baseUnit = _ref3$theme.spacing.baseUnit,
    colors = _ref3$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'indicatorContainer',
    display: 'flex',
    transition: 'color 150ms'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2,
    ':hover': {
      color: isFocused ? colors.neutral80 : colors.neutral40
    }
  });
};
var dropdownIndicatorCSS = baseCSS;
var DropdownIndicator = function DropdownIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'dropdownIndicator', {
    indicator: true,
    'dropdown-indicator': true
  }), innerProps), children || (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(DownChevron, null));
};
var clearIndicatorCSS = baseCSS;
var ClearIndicator = function ClearIndicator(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'clearIndicator', {
    indicator: true,
    'clear-indicator': true
  }), innerProps), children || (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(CrossIcon, null));
};

// ==============================
// Separator
// ==============================

var indicatorSeparatorCSS = function indicatorSeparatorCSS(_ref4, unstyled) {
  var isDisabled = _ref4.isDisabled,
    _ref4$theme = _ref4.theme,
    baseUnit = _ref4$theme.spacing.baseUnit,
    colors = _ref4$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'indicatorSeparator',
    alignSelf: 'stretch',
    width: 1
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral10 : colors.neutral20,
    marginBottom: baseUnit * 2,
    marginTop: baseUnit * 2
  });
};
var IndicatorSeparator = function IndicatorSeparator(props) {
  var innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, innerProps, getStyleProps(props, 'indicatorSeparator', {
    'indicator-separator': true
  })));
};

// ==============================
// Loading
// ==============================

var loadingDotAnimations = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.keyframes)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  0%, 80%, 100% { opacity: 0; }\n  40% { opacity: 1; }\n"])));
var loadingIndicatorCSS = function loadingIndicatorCSS(_ref5, unstyled) {
  var isFocused = _ref5.isFocused,
    size = _ref5.size,
    _ref5$theme = _ref5.theme,
    colors = _ref5$theme.colors,
    baseUnit = _ref5$theme.spacing.baseUnit;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'loadingIndicator',
    display: 'flex',
    transition: 'color 150ms',
    alignSelf: 'center',
    fontSize: size,
    lineHeight: 1,
    marginRight: size,
    textAlign: 'center',
    verticalAlign: 'middle'
  }, unstyled ? {} : {
    color: isFocused ? colors.neutral60 : colors.neutral20,
    padding: baseUnit * 2
  });
};
var LoadingDot = function LoadingDot(_ref6) {
  var delay = _ref6.delay,
    offset = _ref6.offset;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
    css: /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.css)({
      animation: "".concat(loadingDotAnimations, " 1s ease-in-out ").concat(delay, "ms infinite;"),
      backgroundColor: 'currentColor',
      borderRadius: '1em',
      display: 'inline-block',
      marginLeft: offset ? '1em' : undefined,
      height: '1em',
      verticalAlign: 'top',
      width: '1em'
    },  false ? 0 : ";label:LoadingDot;",  false ? 0 : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGljYXRvcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1RSSIsImZpbGUiOiJpbmRpY2F0b3JzLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsgSlNYLCBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBqc3gsIGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcblxuaW1wb3J0IHtcbiAgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWUsXG4gIENTU09iamVjdFdpdGhMYWJlbCxcbiAgR3JvdXBCYXNlLFxufSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBnZXRTdHlsZVByb3BzIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgSWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBTdmcgPSAoe1xuICBzaXplLFxuICAuLi5wcm9wc1xufTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzdmcnXSAmIHsgc2l6ZTogbnVtYmVyIH0pID0+IChcbiAgPHN2Z1xuICAgIGhlaWdodD17c2l6ZX1cbiAgICB3aWR0aD17c2l6ZX1cbiAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgIGZvY3VzYWJsZT1cImZhbHNlXCJcbiAgICBjc3M9e3tcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgZmlsbDogJ2N1cnJlbnRDb2xvcicsXG4gICAgICBsaW5lSGVpZ2h0OiAxLFxuICAgICAgc3Ryb2tlOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHN0cm9rZVdpZHRoOiAwLFxuICAgIH19XG4gICAgey4uLnByb3BzfVxuICAvPlxuKTtcblxuZXhwb3J0IHR5cGUgQ3Jvc3NJY29uUHJvcHMgPSBKU1guSW50cmluc2ljRWxlbWVudHNbJ3N2ZyddICYgeyBzaXplPzogbnVtYmVyIH07XG5leHBvcnQgY29uc3QgQ3Jvc3NJY29uID0gKHByb3BzOiBDcm9zc0ljb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNMTQuMzQ4IDE0Ljg0OWMtMC40NjkgMC40NjktMS4yMjkgMC40NjktMS42OTcgMGwtMi42NTEtMy4wMzAtMi42NTEgMy4wMjljLTAuNDY5IDAuNDY5LTEuMjI5IDAuNDY5LTEuNjk3IDAtMC40NjktMC40NjktMC40NjktMS4yMjkgMC0xLjY5N2wyLjc1OC0zLjE1LTIuNzU5LTMuMTUyYy0wLjQ2OS0wLjQ2OS0wLjQ2OS0xLjIyOCAwLTEuNjk3czEuMjI4LTAuNDY5IDEuNjk3IDBsMi42NTIgMy4wMzEgMi42NTEtMy4wMzFjMC40NjktMC40NjkgMS4yMjgtMC40NjkgMS42OTcgMHMwLjQ2OSAxLjIyOSAwIDEuNjk3bC0yLjc1OCAzLjE1MiAyLjc1OCAzLjE1YzAuNDY5IDAuNDY5IDAuNDY5IDEuMjI5IDAgMS42OTh6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuZXhwb3J0IHR5cGUgRG93bkNoZXZyb25Qcm9wcyA9IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snc3ZnJ10gJiB7IHNpemU/OiBudW1iZXIgfTtcbmV4cG9ydCBjb25zdCBEb3duQ2hldnJvbiA9IChwcm9wczogRG93bkNoZXZyb25Qcm9wcykgPT4gKFxuICA8U3ZnIHNpemU9ezIwfSB7Li4ucHJvcHN9PlxuICAgIDxwYXRoIGQ9XCJNNC41MTYgNy41NDhjMC40MzYtMC40NDYgMS4wNDMtMC40ODEgMS41NzYgMGwzLjkwOCAzLjc0NyAzLjkwOC0zLjc0N2MwLjUzMy0wLjQ4MSAxLjE0MS0wLjQ0NiAxLjU3NCAwIDAuNDM2IDAuNDQ1IDAuNDA4IDEuMTk3IDAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDIgMC4zMzUtMC43ODcgMC4zMzVzLTAuNTctMC4xMTItMC43ODktMC4zMzVjMCAwLTQuMjg3LTQuMDg0LTQuNjk1LTQuNTAycy0wLjQzNi0xLjE3IDAtMS42MTV6XCIgLz5cbiAgPC9Tdmc+XG4pO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERyb3Bkb3duICYgQ2xlYXIgQnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxcbiAgT3B0aW9uID0gdW5rbm93bixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4gPSBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+ID0gR3JvdXBCYXNlPE9wdGlvbj5cbj4gZXh0ZW5kcyBDb21tb25Qcm9wc0FuZENsYXNzTmFtZTxPcHRpb24sIElzTXVsdGksIEdyb3VwPiB7XG4gIC8qKiBUaGUgY2hpbGRyZW4gdG8gYmUgcmVuZGVyZWQgaW5zaWRlIHRoZSBpbmRpY2F0b3IuICovXG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlO1xuICAvKiogUHJvcHMgdGhhdCB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aGUgY2hpbGRyZW4uICovXG4gIGlubmVyUHJvcHM6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J107XG4gIC8qKiBUaGUgZm9jdXNlZCBzdGF0ZSBvZiB0aGUgc2VsZWN0LiAqL1xuICBpc0ZvY3VzZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG59XG5cbmNvbnN0IGJhc2VDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgdGhlbWU6IHtcbiAgICAgIHNwYWNpbmc6IHsgYmFzZVVuaXQgfSxcbiAgICAgIGNvbG9ycyxcbiAgICB9LFxuICB9OlxuICAgIHwgRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuICAgIHwgQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2luZGljYXRvckNvbnRhaW5lcicsXG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgdHJhbnNpdGlvbjogJ2NvbG9yIDE1MG1zJyxcbiAgLi4uKHVuc3R5bGVkXG4gICAgPyB7fVxuICAgIDoge1xuICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw2MCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIHBhZGRpbmc6IGJhc2VVbml0ICogMixcbiAgICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgICBjb2xvcjogaXNGb2N1c2VkID8gY29sb3JzLm5ldXRyYWw4MCA6IGNvbG9ycy5uZXV0cmFsNDAsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZHJvcGRvd25JbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IERyb3Bkb3duSW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogRHJvcGRvd25JbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnZHJvcGRvd25JbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2Ryb3Bkb3duLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8RG93bkNoZXZyb24gLz59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIENsZWFySW5kaWNhdG9yUHJvcHM8XG4gIE9wdGlvbiA9IHVua25vd24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuID0gYm9vbGVhbixcbiAgR3JvdXAgZXh0ZW5kcyBHcm91cEJhc2U8T3B0aW9uPiA9IEdyb3VwQmFzZTxPcHRpb24+XG4+IGV4dGVuZHMgQ29tbW9uUHJvcHNBbmRDbGFzc05hbWU8T3B0aW9uLCBJc011bHRpLCBHcm91cD4ge1xuICAvKiogVGhlIGNoaWxkcmVuIHRvIGJlIHJlbmRlcmVkIGluc2lkZSB0aGUgaW5kaWNhdG9yLiAqL1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZTtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgY2xlYXJJbmRpY2F0b3JDU1MgPSBiYXNlQ1NTO1xuZXhwb3J0IGNvbnN0IENsZWFySW5kaWNhdG9yID0gPFxuICBPcHRpb24sXG4gIElzTXVsdGkgZXh0ZW5kcyBib29sZWFuLFxuICBHcm91cCBleHRlbmRzIEdyb3VwQmFzZTxPcHRpb24+XG4+KFxuICBwcm9wczogQ2xlYXJJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGlubmVyUHJvcHMgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHsuLi5nZXRTdHlsZVByb3BzKHByb3BzLCAnY2xlYXJJbmRpY2F0b3InLCB7XG4gICAgICAgIGluZGljYXRvcjogdHJ1ZSxcbiAgICAgICAgJ2NsZWFyLWluZGljYXRvcic6IHRydWUsXG4gICAgICB9KX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbiB8fCA8Q3Jvc3NJY29uIC8+fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTZXBhcmF0b3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5leHBvcnQgaW50ZXJmYWNlIEluZGljYXRvclNlcGFyYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpbm5lclByb3BzPzogSlNYLkludHJpbnNpY0VsZW1lbnRzWydzcGFuJ107XG59XG5cbmV4cG9ydCBjb25zdCBpbmRpY2F0b3JTZXBhcmF0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0Rpc2FibGVkLFxuICAgIHRoZW1lOiB7XG4gICAgICBzcGFjaW5nOiB7IGJhc2VVbml0IH0sXG4gICAgICBjb2xvcnMsXG4gICAgfSxcbiAgfTogSW5kaWNhdG9yU2VwYXJhdG9yUHJvcHM8T3B0aW9uLCBJc011bHRpLCBHcm91cD4sXG4gIHVuc3R5bGVkOiBib29sZWFuXG4pOiBDU1NPYmplY3RXaXRoTGFiZWwgPT4gKHtcbiAgbGFiZWw6ICdpbmRpY2F0b3JTZXBhcmF0b3InLFxuICBhbGlnblNlbGY6ICdzdHJldGNoJyxcbiAgd2lkdGg6IDEsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBpc0Rpc2FibGVkID8gY29sb3JzLm5ldXRyYWwxMCA6IGNvbG9ycy5uZXV0cmFsMjAsXG4gICAgICAgIG1hcmdpbkJvdHRvbTogYmFzZVVuaXQgKiAyLFxuICAgICAgICBtYXJnaW5Ub3A6IGJhc2VVbml0ICogMixcbiAgICAgIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCBJbmRpY2F0b3JTZXBhcmF0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHByb3BzOiBJbmRpY2F0b3JTZXBhcmF0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPlxuKSA9PiB7XG4gIGNvbnN0IHsgaW5uZXJQcm9wcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgICAgey4uLmdldFN0eWxlUHJvcHMocHJvcHMsICdpbmRpY2F0b3JTZXBhcmF0b3InLCB7XG4gICAgICAgICdpbmRpY2F0b3Itc2VwYXJhdG9yJzogdHJ1ZSxcbiAgICAgIH0pfVxuICAgIC8+XG4gICk7XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIExvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBsb2FkaW5nRG90QW5pbWF0aW9ucyA9IGtleWZyYW1lc2BcbiAgMCUsIDgwJSwgMTAwJSB7IG9wYWNpdHk6IDA7IH1cbiAgNDAlIHsgb3BhY2l0eTogMTsgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGxvYWRpbmdJbmRpY2F0b3JDU1MgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oXG4gIHtcbiAgICBpc0ZvY3VzZWQsXG4gICAgc2l6ZSxcbiAgICB0aGVtZToge1xuICAgICAgY29sb3JzLFxuICAgICAgc3BhY2luZzogeyBiYXNlVW5pdCB9LFxuICAgIH0sXG4gIH06IExvYWRpbmdJbmRpY2F0b3JQcm9wczxPcHRpb24sIElzTXVsdGksIEdyb3VwPixcbiAgdW5zdHlsZWQ6IGJvb2xlYW5cbik6IENTU09iamVjdFdpdGhMYWJlbCA9PiAoe1xuICBsYWJlbDogJ2xvYWRpbmdJbmRpY2F0b3InLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIHRyYW5zaXRpb246ICdjb2xvciAxNTBtcycsXG4gIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gIGZvbnRTaXplOiBzaXplLFxuICBsaW5lSGVpZ2h0OiAxLFxuICBtYXJnaW5SaWdodDogc2l6ZSxcbiAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gIC4uLih1bnN0eWxlZFxuICAgID8ge31cbiAgICA6IHtcbiAgICAgICAgY29sb3I6IGlzRm9jdXNlZCA/IGNvbG9ycy5uZXV0cmFsNjAgOiBjb2xvcnMubmV1dHJhbDIwLFxuICAgICAgICBwYWRkaW5nOiBiYXNlVW5pdCAqIDIsXG4gICAgICB9KSxcbn0pO1xuXG5pbnRlcmZhY2UgTG9hZGluZ0RvdFByb3BzIHtcbiAgZGVsYXk6IG51bWJlcjtcbiAgb2Zmc2V0OiBib29sZWFuO1xufVxuY29uc3QgTG9hZGluZ0RvdCA9ICh7IGRlbGF5LCBvZmZzZXQgfTogTG9hZGluZ0RvdFByb3BzKSA9PiAoXG4gIDxzcGFuXG4gICAgY3NzPXt7XG4gICAgICBhbmltYXRpb246IGAke2xvYWRpbmdEb3RBbmltYXRpb25zfSAxcyBlYXNlLWluLW91dCAke2RlbGF5fW1zIGluZmluaXRlO2AsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMWVtJyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgbWFyZ2luTGVmdDogb2Zmc2V0ID8gJzFlbScgOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6ICcxZW0nLFxuICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICB3aWR0aDogJzFlbScsXG4gICAgfX1cbiAgLz5cbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGluZ0luZGljYXRvclByb3BzPFxuICBPcHRpb24gPSB1bmtub3duLFxuICBJc011bHRpIGV4dGVuZHMgYm9vbGVhbiA9IGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj4gPSBHcm91cEJhc2U8T3B0aW9uPlxuPiBleHRlbmRzIENvbW1vblByb3BzQW5kQ2xhc3NOYW1lPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+IHtcbiAgLyoqIFByb3BzIHRoYXQgd2lsbCBiZSBwYXNzZWQgb24gdG8gdGhlIGNoaWxkcmVuLiAqL1xuICBpbm5lclByb3BzOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddO1xuICAvKiogVGhlIGZvY3VzZWQgc3RhdGUgb2YgdGhlIHNlbGVjdC4gKi9cbiAgaXNGb2N1c2VkOiBib29sZWFuO1xuICBpc0Rpc2FibGVkOiBib29sZWFuO1xuICAvKiogU2V0IHNpemUgb2YgdGhlIGNvbnRhaW5lci4gKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuZXhwb3J0IGNvbnN0IExvYWRpbmdJbmRpY2F0b3IgPSA8XG4gIE9wdGlvbixcbiAgSXNNdWx0aSBleHRlbmRzIGJvb2xlYW4sXG4gIEdyb3VwIGV4dGVuZHMgR3JvdXBCYXNlPE9wdGlvbj5cbj4oe1xuICBpbm5lclByb3BzLFxuICBpc1J0bCxcbiAgc2l6ZSA9IDQsXG4gIC4uLnJlc3RQcm9wc1xufTogTG9hZGluZ0luZGljYXRvclByb3BzPE9wdGlvbiwgSXNNdWx0aSwgR3JvdXA+KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgey4uLmdldFN0eWxlUHJvcHMoXG4gICAgICAgIHsgLi4ucmVzdFByb3BzLCBpbm5lclByb3BzLCBpc1J0bCwgc2l6ZSB9LFxuICAgICAgICAnbG9hZGluZ0luZGljYXRvcicsXG4gICAgICAgIHtcbiAgICAgICAgICBpbmRpY2F0b3I6IHRydWUsXG4gICAgICAgICAgJ2xvYWRpbmctaW5kaWNhdG9yJzogdHJ1ZSxcbiAgICAgICAgfVxuICAgICAgKX1cbiAgICAgIHsuLi5pbm5lclByb3BzfVxuICAgID5cbiAgICAgIDxMb2FkaW5nRG90IGRlbGF5PXswfSBvZmZzZXQ9e2lzUnRsfSAvPlxuICAgICAgPExvYWRpbmdEb3QgZGVsYXk9ezE2MH0gb2Zmc2V0IC8+XG4gICAgICA8TG9hZGluZ0RvdCBkZWxheT17MzIwfSBvZmZzZXQ9eyFpc1J0bH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */")
  });
};
var LoadingIndicator = function LoadingIndicator(_ref7) {
  var innerProps = _ref7.innerProps,
    isRtl = _ref7.isRtl,
    _ref7$size = _ref7.size,
    size = _ref7$size === void 0 ? 4 : _ref7$size,
    restProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref7, _excluded2);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restProps), {}, {
    innerProps: innerProps,
    isRtl: isRtl,
    size: size
  }), 'loadingIndicator', {
    indicator: true,
    'loading-indicator': true
  }), innerProps), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(LoadingDot, {
    delay: 0,
    offset: isRtl
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(LoadingDot, {
    delay: 160,
    offset: true
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(LoadingDot, {
    delay: 320,
    offset: !isRtl
  }));
};

var css$1 = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    _ref$theme = _ref.theme,
    colors = _ref$theme.colors,
    borderRadius = _ref$theme.borderRadius,
    spacing = _ref$theme.spacing;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'control',
    alignItems: 'center',
    cursor: 'default',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    minHeight: spacing.controlHeight,
    outline: '0 !important',
    position: 'relative',
    transition: 'all 100ms'
  }, unstyled ? {} : {
    backgroundColor: isDisabled ? colors.neutral5 : colors.neutral0,
    borderColor: isDisabled ? colors.neutral10 : isFocused ? colors.primary : colors.neutral20,
    borderRadius: borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    boxShadow: isFocused ? "0 0 0 1px ".concat(colors.primary) : undefined,
    '&:hover': {
      borderColor: isFocused ? colors.primary : colors.neutral30
    }
  });
};
var Control = function Control(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    innerRef = props.innerRef,
    innerProps = props.innerProps,
    menuIsOpen = props.menuIsOpen;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: innerRef
  }, getStyleProps(props, 'control', {
    control: true,
    'control--is-disabled': isDisabled,
    'control--is-focused': isFocused,
    'control--menu-is-open': menuIsOpen
  }), innerProps, {
    "aria-disabled": isDisabled || undefined
  }), children);
};
var Control$1 = Control;

var _excluded$1 = ["data"];
var groupCSS = function groupCSS(_ref, unstyled) {
  var spacing = _ref.theme.spacing;
  return unstyled ? {} : {
    paddingBottom: spacing.baseUnit * 2,
    paddingTop: spacing.baseUnit * 2
  };
};
var Group = function Group(props) {
  var children = props.children,
    cx = props.cx,
    getStyles = props.getStyles,
    getClassNames = props.getClassNames,
    Heading = props.Heading,
    headingProps = props.headingProps,
    innerProps = props.innerProps,
    label = props.label,
    theme = props.theme,
    selectProps = props.selectProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'group', {
    group: true
  }), innerProps), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(Heading, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, headingProps, {
    selectProps: selectProps,
    theme: theme,
    getStyles: getStyles,
    getClassNames: getClassNames,
    cx: cx
  }), label), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", null, children));
};
var groupHeadingCSS = function groupHeadingCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    colors = _ref2$theme.colors,
    spacing = _ref2$theme.spacing;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'group',
    cursor: 'default',
    display: 'block'
  }, unstyled ? {} : {
    color: colors.neutral40,
    fontSize: '75%',
    fontWeight: 500,
    marginBottom: '0.25em',
    paddingLeft: spacing.baseUnit * 3,
    paddingRight: spacing.baseUnit * 3,
    textTransform: 'uppercase'
  });
};
var GroupHeading = function GroupHeading(props) {
  var _cleanCommonProps = cleanCommonProps(props);
    _cleanCommonProps.data;
    var innerProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_cleanCommonProps, _excluded$1);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'groupHeading', {
    'group-heading': true
  }), innerProps));
};
var Group$1 = Group;

var _excluded = ["innerRef", "isDisabled", "isHidden", "inputClassName"];
var inputCSS = function inputCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    value = _ref.value,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    visibility: isDisabled ? 'hidden' : 'visible',
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: value ? 'translateZ(0)' : ''
  }, containerStyle), unstyled ? {} : {
    margin: spacing.baseUnit / 2,
    paddingBottom: spacing.baseUnit / 2,
    paddingTop: spacing.baseUnit / 2,
    color: colors.neutral80
  });
};
var spacingStyle = {
  gridArea: '1 / 2',
  font: 'inherit',
  minWidth: '2px',
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
};
var containerStyle = {
  flex: '1 1 auto',
  display: 'inline-grid',
  gridArea: '1 / 1 / 2 / 3',
  gridTemplateColumns: '0 min-content',
  '&:after': (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: 'attr(data-value) " "',
    visibility: 'hidden',
    whiteSpace: 'pre'
  }, spacingStyle)
};
var inputStyle = function inputStyle(isHidden) {
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'input',
    color: 'inherit',
    background: 0,
    opacity: isHidden ? 0 : 1,
    width: '100%'
  }, spacingStyle);
};
var Input = function Input(props) {
  var cx = props.cx,
    value = props.value;
  var _cleanCommonProps = cleanCommonProps(props),
    innerRef = _cleanCommonProps.innerRef,
    isDisabled = _cleanCommonProps.isDisabled,
    isHidden = _cleanCommonProps.isHidden,
    inputClassName = _cleanCommonProps.inputClassName,
    innerProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_cleanCommonProps, _excluded);
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'input', {
    'input-container': true
  }), {
    "data-value": value || ''
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: cx({
      input: true
    }, inputClassName),
    ref: innerRef,
    style: inputStyle(isHidden),
    disabled: isDisabled
  }, innerProps)));
};
var Input$1 = Input;

var multiValueCSS = function multiValueCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    borderRadius = _ref$theme.borderRadius,
    colors = _ref$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'multiValue',
    display: 'flex',
    minWidth: 0
  }, unstyled ? {} : {
    backgroundColor: colors.neutral10,
    borderRadius: borderRadius / 2,
    margin: spacing.baseUnit / 2
  });
};
var multiValueLabelCSS = function multiValueLabelCSS(_ref2, unstyled) {
  var _ref2$theme = _ref2.theme,
    borderRadius = _ref2$theme.borderRadius,
    colors = _ref2$theme.colors,
    cropWithEllipsis = _ref2.cropWithEllipsis;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    overflow: 'hidden',
    textOverflow: cropWithEllipsis || cropWithEllipsis === undefined ? 'ellipsis' : undefined,
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    color: colors.neutral80,
    fontSize: '85%',
    padding: 3,
    paddingLeft: 6
  });
};
var multiValueRemoveCSS = function multiValueRemoveCSS(_ref3, unstyled) {
  var _ref3$theme = _ref3.theme,
    spacing = _ref3$theme.spacing,
    borderRadius = _ref3$theme.borderRadius,
    colors = _ref3$theme.colors,
    isFocused = _ref3.isFocused;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    alignItems: 'center',
    display: 'flex'
  }, unstyled ? {} : {
    borderRadius: borderRadius / 2,
    backgroundColor: isFocused ? colors.dangerLight : undefined,
    paddingLeft: spacing.baseUnit,
    paddingRight: spacing.baseUnit,
    ':hover': {
      backgroundColor: colors.dangerLight,
      color: colors.danger
    }
  });
};
var MultiValueGeneric = function MultiValueGeneric(_ref4) {
  var children = _ref4.children,
    innerProps = _ref4.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", innerProps, children);
};
var MultiValueContainer = MultiValueGeneric;
var MultiValueLabel = MultiValueGeneric;
function MultiValueRemove(_ref5) {
  var children = _ref5.children,
    innerProps = _ref5.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    role: "button"
  }, innerProps), children || (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(CrossIcon, {
    size: 14
  }));
}
var MultiValue = function MultiValue(props) {
  var children = props.children,
    components = props.components,
    data = props.data,
    innerProps = props.innerProps,
    isDisabled = props.isDisabled,
    removeProps = props.removeProps,
    selectProps = props.selectProps;
  var Container = components.Container,
    Label = components.Label,
    Remove = components.Remove;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(Container, {
    data: data,
    innerProps: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getStyleProps(props, 'multiValue', {
      'multi-value': true,
      'multi-value--is-disabled': isDisabled
    })), innerProps),
    selectProps: selectProps
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(Label, {
    data: data,
    innerProps: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getStyleProps(props, 'multiValueLabel', {
      'multi-value__label': true
    })),
    selectProps: selectProps
  }, children), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)(Remove, {
    data: data,
    innerProps: (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getStyleProps(props, 'multiValueRemove', {
      'multi-value__remove': true
    })), {}, {
      'aria-label': "Remove ".concat(children || 'option')
    }, removeProps),
    selectProps: selectProps
  }));
};
var MultiValue$1 = MultiValue;

var optionCSS = function optionCSS(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    isFocused = _ref.isFocused,
    isSelected = _ref.isSelected,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'option',
    cursor: 'default',
    display: 'block',
    fontSize: 'inherit',
    width: '100%',
    userSelect: 'none',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
  }, unstyled ? {} : {
    backgroundColor: isSelected ? colors.primary : isFocused ? colors.primary25 : 'transparent',
    color: isDisabled ? colors.neutral20 : isSelected ? colors.neutral0 : 'inherit',
    padding: "".concat(spacing.baseUnit * 2, "px ").concat(spacing.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ':active': {
      backgroundColor: !isDisabled ? isSelected ? colors.primary : colors.primary50 : undefined
    }
  });
};
var Option = function Option(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    isFocused = props.isFocused,
    isSelected = props.isSelected,
    innerRef = props.innerRef,
    innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'option', {
    option: true,
    'option--is-disabled': isDisabled,
    'option--is-focused': isFocused,
    'option--is-selected': isSelected
  }), {
    ref: innerRef,
    "aria-disabled": isDisabled
  }, innerProps), children);
};
var Option$1 = Option;

var placeholderCSS = function placeholderCSS(_ref, unstyled) {
  var _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'placeholder',
    gridArea: '1 / 1 / 2 / 3'
  }, unstyled ? {} : {
    color: colors.neutral50,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var Placeholder = function Placeholder(props) {
  var children = props.children,
    innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'placeholder', {
    placeholder: true
  }), innerProps), children);
};
var Placeholder$1 = Placeholder;

var css = function css(_ref, unstyled) {
  var isDisabled = _ref.isDisabled,
    _ref$theme = _ref.theme,
    spacing = _ref$theme.spacing,
    colors = _ref$theme.colors;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'singleValue',
    gridArea: '1 / 1 / 2 / 3',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  }, unstyled ? {} : {
    color: isDisabled ? colors.neutral40 : colors.neutral80,
    marginLeft: spacing.baseUnit / 2,
    marginRight: spacing.baseUnit / 2
  });
};
var SingleValue = function SingleValue(props) {
  var children = props.children,
    isDisabled = props.isDisabled,
    innerProps = props.innerProps;
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, getStyleProps(props, 'singleValue', {
    'single-value': true,
    'single-value--is-disabled': isDisabled
  }), innerProps), children);
};
var SingleValue$1 = SingleValue;

var components = {
  ClearIndicator: ClearIndicator,
  Control: Control$1,
  DropdownIndicator: DropdownIndicator,
  DownChevron: DownChevron,
  CrossIcon: CrossIcon,
  Group: Group$1,
  GroupHeading: GroupHeading,
  IndicatorsContainer: IndicatorsContainer,
  IndicatorSeparator: IndicatorSeparator,
  Input: Input$1,
  LoadingIndicator: LoadingIndicator,
  Menu: Menu$1,
  MenuList: MenuList,
  MenuPortal: MenuPortal,
  LoadingMessage: LoadingMessage,
  NoOptionsMessage: NoOptionsMessage,
  MultiValue: MultiValue$1,
  MultiValueContainer: MultiValueContainer,
  MultiValueLabel: MultiValueLabel,
  MultiValueRemove: MultiValueRemove,
  Option: Option$1,
  Placeholder: Placeholder$1,
  SelectContainer: SelectContainer,
  SingleValue: SingleValue$1,
  ValueContainer: ValueContainer
};
var defaultComponents = function defaultComponents(props) {
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, components), props.components);
};




/***/ }),

/***/ "./node_modules/react-select/dist/react-select.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NonceProvider: () => (/* binding */ NonceProvider),
/* harmony export */   components: () => (/* reexport safe */ _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_5__.c),
/* harmony export */   createFilter: () => (/* reexport safe */ _Select_aab027f3_esm_js__WEBPACK_IMPORTED_MODULE_3__.c),
/* harmony export */   "default": () => (/* binding */ StateManagedSelect$1),
/* harmony export */   defaultTheme: () => (/* reexport safe */ _Select_aab027f3_esm_js__WEBPACK_IMPORTED_MODULE_3__.d),
/* harmony export */   mergeStyles: () => (/* reexport safe */ _Select_aab027f3_esm_js__WEBPACK_IMPORTED_MODULE_3__.m),
/* harmony export */   useStateManager: () => (/* reexport safe */ _useStateManager_7e1e8489_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _useStateManager_7e1e8489_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useStateManager-7e1e8489.esm.js */ "./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Select_aab027f3_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Select-aab027f3.esm.js */ "./node_modules/react-select/dist/Select-aab027f3.esm.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-element-489459f2.browser.development.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js");
/* harmony import */ var _index_641ee5b8_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-641ee5b8.esm.js */ "./node_modules/react-select/dist/index-641ee5b8.esm.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_createSuper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var use_isomorphic_layout_effect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! use-isomorphic-layout-effect */ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js");


























var StateManagedSelect = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function (props, ref) {
  var baseSelectProps = (0,_useStateManager_7e1e8489_esm_js__WEBPACK_IMPORTED_MODULE_0__.u)(props);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Select_aab027f3_esm_js__WEBPACK_IMPORTED_MODULE_3__.S, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref
  }, baseSelectProps));
});
var StateManagedSelect$1 = StateManagedSelect;

var NonceProvider = (function (_ref) {
  var nonce = _ref.nonce,
    children = _ref.children,
    cacheKey = _ref.cacheKey;
  var emotionCache = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_4__["default"])({
      key: cacheKey,
      nonce: nonce
    });
  }, [cacheKey, nonce]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_emotion_react__WEBPACK_IMPORTED_MODULE_19__.C, {
    value: emotionCache
  }, children);
});




/***/ }),

/***/ "./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-select/dist/useStateManager-7e1e8489.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   u: () => (/* binding */ useStateManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





var _excluded = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function useStateManager(_ref) {
  var _ref$defaultInputValu = _ref.defaultInputValue,
    defaultInputValue = _ref$defaultInputValu === void 0 ? '' : _ref$defaultInputValu,
    _ref$defaultMenuIsOpe = _ref.defaultMenuIsOpen,
    defaultMenuIsOpen = _ref$defaultMenuIsOpe === void 0 ? false : _ref$defaultMenuIsOpe,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
    propsInputValue = _ref.inputValue,
    propsMenuIsOpen = _ref.menuIsOpen,
    propsOnChange = _ref.onChange,
    propsOnInputChange = _ref.onInputChange,
    propsOnMenuClose = _ref.onMenuClose,
    propsOnMenuOpen = _ref.onMenuOpen,
    propsValue = _ref.value,
    restSelectProps = (0,_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(propsInputValue !== undefined ? propsInputValue : defaultInputValue),
    _useState2 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
    stateInputValue = _useState2[0],
    setStateInputValue = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(propsMenuIsOpen !== undefined ? propsMenuIsOpen : defaultMenuIsOpen),
    _useState4 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
    stateMenuIsOpen = _useState4[0],
    setStateMenuIsOpen = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(propsValue !== undefined ? propsValue : defaultValue),
    _useState6 = (0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState5, 2),
    stateValue = _useState6[0],
    setStateValue = _useState6[1];
  var onChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (value, actionMeta) {
    if (typeof propsOnChange === 'function') {
      propsOnChange(value, actionMeta);
    }
    setStateValue(value);
  }, [propsOnChange]);
  var onInputChange = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function (value, actionMeta) {
    var newValue;
    if (typeof propsOnInputChange === 'function') {
      newValue = propsOnInputChange(value, actionMeta);
    }
    setStateInputValue(newValue !== undefined ? newValue : value);
  }, [propsOnInputChange]);
  var onMenuOpen = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    if (typeof propsOnMenuOpen === 'function') {
      propsOnMenuOpen();
    }
    setStateMenuIsOpen(true);
  }, [propsOnMenuOpen]);
  var onMenuClose = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(function () {
    if (typeof propsOnMenuClose === 'function') {
      propsOnMenuClose();
    }
    setStateMenuIsOpen(false);
  }, [propsOnMenuClose]);
  var inputValue = propsInputValue !== undefined ? propsInputValue : stateInputValue;
  var menuIsOpen = propsMenuIsOpen !== undefined ? propsMenuIsOpen : stateMenuIsOpen;
  var value = propsValue !== undefined ? propsValue : stateValue;
  return (0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, restSelectProps), {}, {
    inputValue: inputValue,
    menuIsOpen: menuIsOpen,
    onChange: onChange,
    onInputChange: onInputChange,
    onMenuClose: onMenuClose,
    onMenuOpen: onMenuOpen,
    value: value
  });
}




/***/ }),

/***/ "./node_modules/stylis/src/Enum.js":
/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHARSET: () => (/* binding */ CHARSET),
/* harmony export */   COMMENT: () => (/* binding */ COMMENT),
/* harmony export */   COUNTER_STYLE: () => (/* binding */ COUNTER_STYLE),
/* harmony export */   DECLARATION: () => (/* binding */ DECLARATION),
/* harmony export */   DOCUMENT: () => (/* binding */ DOCUMENT),
/* harmony export */   FONT_FACE: () => (/* binding */ FONT_FACE),
/* harmony export */   FONT_FEATURE_VALUES: () => (/* binding */ FONT_FEATURE_VALUES),
/* harmony export */   IMPORT: () => (/* binding */ IMPORT),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   LAYER: () => (/* binding */ LAYER),
/* harmony export */   MEDIA: () => (/* binding */ MEDIA),
/* harmony export */   MOZ: () => (/* binding */ MOZ),
/* harmony export */   MS: () => (/* binding */ MS),
/* harmony export */   NAMESPACE: () => (/* binding */ NAMESPACE),
/* harmony export */   PAGE: () => (/* binding */ PAGE),
/* harmony export */   RULESET: () => (/* binding */ RULESET),
/* harmony export */   SUPPORTS: () => (/* binding */ SUPPORTS),
/* harmony export */   VIEWPORT: () => (/* binding */ VIEWPORT),
/* harmony export */   WEBKIT: () => (/* binding */ WEBKIT)
/* harmony export */ });
var MS = '-ms-'
var MOZ = '-moz-'
var WEBKIT = '-webkit-'

var COMMENT = 'comm'
var RULESET = 'rule'
var DECLARATION = 'decl'

var PAGE = '@page'
var MEDIA = '@media'
var IMPORT = '@import'
var CHARSET = '@charset'
var VIEWPORT = '@viewport'
var SUPPORTS = '@supports'
var DOCUMENT = '@document'
var NAMESPACE = '@namespace'
var KEYFRAMES = '@keyframes'
var FONT_FACE = '@font-face'
var COUNTER_STYLE = '@counter-style'
var FONT_FEATURE_VALUES = '@font-feature-values'
var LAYER = '@layer'


/***/ }),

/***/ "./node_modules/stylis/src/Middleware.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   middleware: () => (/* binding */ middleware),
/* harmony export */   namespace: () => (/* binding */ namespace),
/* harmony export */   prefixer: () => (/* binding */ prefixer),
/* harmony export */   rulesheet: () => (/* binding */ rulesheet)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");
/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Serializer.js */ "./node_modules/stylis/src/Serializer.js");
/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prefixer.js */ "./node_modules/stylis/src/Prefixer.js");






/**
 * @param {function[]} collection
 * @return {function}
 */
function middleware (collection) {
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(collection)

	return function (element, index, children, callback) {
		var output = ''

		for (var i = 0; i < length; i++)
			output += collection[i](element, index, children, callback) || ''

		return output
	}
}

/**
 * @param {function} callback
 * @return {function}
 */
function rulesheet (callback) {
	return function (element) {
		if (!element.root)
			if (element = element.return)
				callback(element)
	}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */
function prefixer (element, index, children, callback) {
	if (element.length > -1)
		if (!element.return)
			switch (element.type) {
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: element.return = (0,_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix)(element.value, element.length, children)
					return
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
					return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {value: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(element.value, '@', '@' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT)})], callback)
				case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
					if (element.length)
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)(element.props, function (value) {
							switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /(::plac\w+|:read-\w+)/)) {
								// :read-(only|write)
								case ':read-only': case ':read-write':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(read-\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]})], callback)
								// :placeholder
								case '::placeholder':
									return (0,_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize)([
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'input-$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + '$1')]}),
										(0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy)(element, {props: [(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /:(plac\w+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'input-$1')]})
									], callback)
							}

							return ''
						})
			}
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 */
function namespace (element) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
			element.props = element.props.map(function (value) {
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize)(value), function (value, index, children) {
					switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 0)) {
						// \f
						case 12:
							return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, 1, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value))
						// \0 ( + > ~
						case 0: case 40: case 43: case 62: case 126:
							return value
						// :
						case 58:
							if (children[++index] === 'global')
								children[index] = '', children[++index] = '\f' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(children[index], index = 1, -1)
						// \s
						case 32:
							return index === 1 ? '' : value
						default:
							switch (index) {
								case 0: element = value
									return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) > 1 ? '' : value
								case index = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children) - 1: case 2:
									return index === 2 ? value + element + element : value + element
								default:
									return value
							}
					}
				})
			})
	}
}


/***/ }),

/***/ "./node_modules/stylis/src/Parser.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   comment: () => (/* binding */ comment),
/* harmony export */   compile: () => (/* binding */ compile),
/* harmony export */   declaration: () => (/* binding */ declaration),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   ruleset: () => (/* binding */ ruleset)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");
/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tokenizer.js */ "./node_modules/stylis/src/Tokenizer.js");




/**
 * @param {string} value
 * @return {object[]}
 */
function compile (value) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc)(parse('', null, null, null, [''], value = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(value), 0, [0], value))
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */
function parse (value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
	var index = 0
	var offset = 0
	var length = pseudo
	var atrule = 0
	var property = 0
	var previous = 0
	var variable = 1
	var scanning = 1
	var ampersand = 1
	var character = 0
	var type = ''
	var props = rules
	var children = rulesets
	var reference = rule
	var characters = type

	while (scanning)
		switch (previous = character, character = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)()) {
			// (
			case 40:
				if (previous != 108 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, length - 1) == 58) {
					if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof)(characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character), '&', '&\f'), '&\f') != -1)
						ampersand = -1
					break
				}
			// " ' [
			case 34: case 39: case 91:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)(character)
				break
			// \t \n \r \s
			case 9: case 10: case 13: case 32:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace)(previous)
				break
			// \
			case 92:
				characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)() - 1, 7)
				continue
			// /
			case 47:
				switch ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)()) {
					case 42: case 47:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(comment((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)(), (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)()), root, parent), declarations)
						break
					default:
						characters += '/'
				}
				break
			// {
			case 123 * variable:
				points[index++] = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) * ampersand
			// } ; \0
			case 125 * variable: case 59: case 0:
				switch (character) {
					// \0 }
					case 0: case 125: scanning = 0
					// ;
					case 59 + offset: if (ampersand == -1) characters = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, /\f/g, '')
						if (property > 0 && ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - length))
							(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(characters, ' ', '') + ';', rule, parent, length - 2), declarations)
						break
					// @ ;
					case 59: characters += ';'
					// { rule/at-rule
					default:
						;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets)

						if (character === 123)
							if (offset === 0)
								parse(characters, root, reference, reference, props, rulesets, length, points, children)
							else
								switch (atrule === 99 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat)(characters, 3) === 110 ? 100 : atrule) {
									// d l m s
									case 100: case 108: case 109: case 115:
										parse(value, reference, reference, rule && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append)(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children)
										break
									default:
										parse(characters, reference, reference, reference, [''], children, 0, points, children)
								}
				}

				index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo
				break
			// :
			case 58:
				length = 1 + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters), property = previous
			default:
				if (variable < 1)
					if (character == 123)
						--variable
					else if (character == 125 && variable++ == 0 && (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev)() == 125)
						continue

				switch (characters += (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)(character), character * variable) {
					// &
					case 38:
						ampersand = offset > 0 ? 1 : (characters += '\f', -1)
						break
					// ,
					case 44:
						points[index++] = ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) - 1) * ampersand, ampersand = 1
						break
					// @
					case 64:
						// -
						if ((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)() === 45)
							characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next)())

						atrule = (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek)(), offset = length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(type = characters += (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret)())), character++
						break
					// -
					case 45:
						if (previous === 45 && (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen)(characters) == 2)
							variable = 0
				}
		}

	return rulesets
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */
function ruleset (value, root, parent, index, offset, rules, points, type, props, children, length) {
	var post = offset - 1
	var rule = offset === 0 ? rules : ['']
	var size = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof)(rule)

	for (var i = 0, j = 0, k = 0; i < index; ++i)
		for (var x = 0, y = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, post + 1, post = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs)(j = points[i])), z = value; x < size; ++x)
			if (z = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim)(j > 0 ? rule[x] + ' ' + y : (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace)(y, /&\f/g, rule[x])))
				props[k++] = z

	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, offset === 0 ? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET : type, props, children, length)
}

/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */
function comment (value, root, parent) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from)((0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char)()), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 2, -2), 0)
}

/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */
function declaration (value, root, parent, length) {
	return (0,_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node)(value, root, parent, _Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, 0, length), (0,_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr)(value, length + 1, -1), length)
}


/***/ }),

/***/ "./node_modules/stylis/src/Prefixer.js":
/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   prefix: () => (/* binding */ prefix)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {string} value
 * @param {number} length
 * @param {object[]} children
 * @return {string}
 */
function prefix (value, length, children) {
	switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash)(value, length)) {
		// color-adjust
		case 5103:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'print-' + value + value
		// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
		case 5737: case 4201: case 3177: case 3433: case 1641: case 4457: case 2921:
		// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
		case 5572: case 6356: case 5844: case 3191: case 6645: case 3005:
		// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
		case 6391: case 5879: case 5623: case 6135: case 4599: case 4855:
		// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
		case 4215: case 6389: case 5109: case 5365: case 5621: case 3829:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// tab-size
		case 4789:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + value
		// appearance, user-select, transform, hyphens, text-size-adjust
		case 5349: case 4246: case 4810: case 6968: case 2756:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// writing-mode
		case 5936:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 11)) {
				// vertical-l(r)
				case 114:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb') + value
				// vertical-r(l)
				case 108:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value
				// horizontal(-)tb
				case 45:
					return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /[svh]\w+-[tblr]{2}/, 'lr') + value
				// default: fallthrough to below
			}
		// flex, flex-direction, scroll-snap-type, writing-mode
		case 6828: case 4268: case 2903:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + value + value
		// order
		case 6165:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-' + value + value
		// align-items
		case 5187:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(\w+).+(:[^]+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-$1$2' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-$1$2') + value
		// align-self
		case 5443:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-item-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') + (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/) ? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /flex-|-self/g, '') : '') + value
		// align-content
		case 4675:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-line-pack' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /align-content|flex-|-self/g, '') + value
		// flex-shrink
		case 5548:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'shrink', 'negative') + value
		// flex-basis
		case 5292:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'basis', 'preferred-size') + value
		// flex-grow
		case 6060:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-grow', '') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'grow', 'positive') + value
		// transition
		case 4554:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /([^-])(transform)/g, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2') + value
		// cursor
		case 6187:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(zoom-|grab)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), /(image-set)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1'), value, '') + value
		// background, background-image
		case 5495: case 3959:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(image-set\([^]*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1' + '$`$1')
		// justify-content
		case 4968:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(flex-)?(.*)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + 'box-pack:$3' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + value + value
		// justify-self
		case 4200:
			if (!(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /flex-|baseline/)) return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-column-align' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(value, length) + value
			break
		// grid-template-(columns|rows)
		case 2592: case 3360:
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'template-', '') + value
		// grid-(row|column)-start
		case 4384: case 3616:
			if (children && children.some(function (element, index) { return length = index, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-end/) })) {
				return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value + (children = children[length].value), 'span') ? value : (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + 'grid-row-span:' + (~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(children, 'span') ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) : +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(children, /\d+/) - +(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(value, /\d+/)) + ';')
			}
			return _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-start', '') + value
		// grid-(row|column)-end
		case 4896: case 4128:
			return (children && children.some(function (element) { return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match)(element.props, /grid-\w+-start/) })) ? value : _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, '-end', '-span'), 'span ', '') + value
		// (margin|padding)-inline-(start|end)
		case 4095: case 3583: case 4068: case 2532:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+)-inline(.+)/, _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$1$2') + value
		// (min|max)?(width|height|inline-size|block-size)
		case 8116: case 7059: case 5753: case 5535:
		case 5445: case 5701: case 4933: case 4677:
		case 5533: case 5789: case 5021: case 4765:
			// stretch, max-content, min-content, fill-available
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(value) - 1 - length > 6)
				switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 1)) {
					// (m)ax-content, (m)in-content
					case 109:
						// -
						if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 4) !== 45)
							break
					// (f)ill-available, (f)it-content
					case 102:
						return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)(.+)-([^]+)/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2-$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 3) == 108 ? '$3' : '$2-$3')) + value
					// (s)tretch
					case 115:
						return ~(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof)(value, 'stretch') ? prefix((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'stretch', 'fill-available'), length, children) + value : value
				}
			break
		// grid-(column|row)
		case 5152: case 5920:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (_, a, b, c, d, e, f) { return (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + ':' + b + f) + (c ? (_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + a + '-span:' + (d ? e : +e - +b)) + f : '') + value })
		// position: sticky
		case 4949:
			// stick(y)?
			if ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, length + 6) === 121)
				return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT) + value
			break
		// display: (flex|inline-flex|grid|inline-grid)
		case 6444:
			switch ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 18 : 11)) {
				// (inline-)?fle(x)
				case 120:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + ((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT + '$2$3' + '$1' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS + '$2box$3') + value
				// (inline-)?gri(d)
				case 100:
					return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, ':', ':' + _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS) + value
			}
			break
		// scroll-margin, scroll-margin-(top|right|bottom|left)
		case 5719: case 2647: case 2135: case 3927: case 2391:
			return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace)(value, 'scroll-', 'scroll-snap-') + value
	}

	return value
}


/***/ }),

/***/ "./node_modules/stylis/src/Serializer.js":
/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   serialize: () => (/* binding */ serialize),
/* harmony export */   stringify: () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enum.js */ "./node_modules/stylis/src/Enum.js");
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");



/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function serialize (children, callback) {
	var output = ''
	var length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof)(children)

	for (var i = 0; i < length; i++)
		output += callback(children[i], i, children, callback) || ''

	return output
}

/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */
function stringify (element, index, children, callback) {
	switch (element.type) {
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.LAYER: if (element.children.length) break
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.IMPORT: case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION: return element.return = element.return || element.value
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.COMMENT: return ''
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES: return element.return = element.value + '{' + serialize(element.children, callback) + '}'
		case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET: element.value = element.props.join(',')
	}

	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : ''
}


/***/ }),

/***/ "./node_modules/stylis/src/Tokenizer.js":
/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alloc: () => (/* binding */ alloc),
/* harmony export */   caret: () => (/* binding */ caret),
/* harmony export */   char: () => (/* binding */ char),
/* harmony export */   character: () => (/* binding */ character),
/* harmony export */   characters: () => (/* binding */ characters),
/* harmony export */   column: () => (/* binding */ column),
/* harmony export */   commenter: () => (/* binding */ commenter),
/* harmony export */   copy: () => (/* binding */ copy),
/* harmony export */   dealloc: () => (/* binding */ dealloc),
/* harmony export */   delimit: () => (/* binding */ delimit),
/* harmony export */   delimiter: () => (/* binding */ delimiter),
/* harmony export */   escaping: () => (/* binding */ escaping),
/* harmony export */   identifier: () => (/* binding */ identifier),
/* harmony export */   length: () => (/* binding */ length),
/* harmony export */   line: () => (/* binding */ line),
/* harmony export */   next: () => (/* binding */ next),
/* harmony export */   node: () => (/* binding */ node),
/* harmony export */   peek: () => (/* binding */ peek),
/* harmony export */   position: () => (/* binding */ position),
/* harmony export */   prev: () => (/* binding */ prev),
/* harmony export */   slice: () => (/* binding */ slice),
/* harmony export */   token: () => (/* binding */ token),
/* harmony export */   tokenize: () => (/* binding */ tokenize),
/* harmony export */   tokenizer: () => (/* binding */ tokenizer),
/* harmony export */   whitespace: () => (/* binding */ whitespace)
/* harmony export */ });
/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utility.js */ "./node_modules/stylis/src/Utility.js");


var line = 1
var column = 1
var length = 0
var position = 0
var character = 0
var characters = ''

/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */
function node (value, root, parent, type, props, children, length) {
	return {value: value, root: root, parent: parent, type: type, props: props, children: children, line: line, column: column, length: length, return: ''}
}

/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */
function copy (root, props) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign)(node('', null, null, '', null, null, 0), root, {length: -root.length}, props)
}

/**
 * @return {number}
 */
function char () {
	return character
}

/**
 * @return {number}
 */
function prev () {
	character = position > 0 ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, --position) : 0

	if (column--, character === 10)
		column = 1, line--

	return character
}

/**
 * @return {number}
 */
function next () {
	character = position < length ? (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position++) : 0

	if (column++, character === 10)
		column = 1, line++

	return character
}

/**
 * @return {number}
 */
function peek () {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat)(characters, position)
}

/**
 * @return {number}
 */
function caret () {
	return position
}

/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function slice (begin, end) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr)(characters, begin, end)
}

/**
 * @param {number} type
 * @return {number}
 */
function token (type) {
	switch (type) {
		// \0 \t \n \r \s whitespace token
		case 0: case 9: case 10: case 13: case 32:
			return 5
		// ! + , / > @ ~ isolate token
		case 33: case 43: case 44: case 47: case 62: case 64: case 126:
		// ; { } breakpoint token
		case 59: case 123: case 125:
			return 4
		// : accompanied token
		case 58:
			return 3
		// " ' ( [ opening delimit token
		case 34: case 39: case 40: case 91:
			return 2
		// ) ] closing delimit token
		case 41: case 93:
			return 1
	}

	return 0
}

/**
 * @param {string} value
 * @return {any[]}
 */
function alloc (value) {
	return line = column = 1, length = (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen)(characters = value), position = 0, []
}

/**
 * @param {any} value
 * @return {any}
 */
function dealloc (value) {
	return characters = '', value
}

/**
 * @param {number} type
 * @return {string}
 */
function delimit (type) {
	return (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim)(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)))
}

/**
 * @param {string} value
 * @return {string[]}
 */
function tokenize (value) {
	return dealloc(tokenizer(alloc(value)))
}

/**
 * @param {number} type
 * @return {string}
 */
function whitespace (type) {
	while (character = peek())
		if (character < 33)
			next()
		else
			break

	return token(type) > 2 || token(character) > 3 ? '' : ' '
}

/**
 * @param {string[]} children
 * @return {string[]}
 */
function tokenizer (children) {
	while (next())
		switch (token(character)) {
			case 0: (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(identifier(position - 1), children)
				break
			case 2: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)(delimit(character), children)
				break
			default: ;(0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append)((0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(character), children)
		}

	return children
}

/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */
function escaping (index, count) {
	while (--count && next())
		// not 0-9 A-F a-f
		if (character < 48 || character > 102 || (character > 57 && character < 65) || (character > 70 && character < 97))
			break

	return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32))
}

/**
 * @param {number} type
 * @return {number}
 */
function delimiter (type) {
	while (next())
		switch (character) {
			// ] ) " '
			case type:
				return position
			// " '
			case 34: case 39:
				if (type !== 34 && type !== 39)
					delimiter(character)
				break
			// (
			case 40:
				if (type === 41)
					delimiter(type)
				break
			// \
			case 92:
				next()
				break
		}

	return position
}

/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */
function commenter (type, index) {
	while (next())
		// //
		if (type + character === 47 + 10)
			break
		// /*
		else if (type + character === 42 + 42 && peek() === 47)
			break

	return '/*' + slice(index, position - 1) + '*' + (0,_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from)(type === 47 ? type : next())
}

/**
 * @param {number} index
 * @return {string}
 */
function identifier (index) {
	while (!token(peek()))
		next()

	return slice(index, position)
}


/***/ }),

/***/ "./node_modules/stylis/src/Utility.js":
/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abs: () => (/* binding */ abs),
/* harmony export */   append: () => (/* binding */ append),
/* harmony export */   assign: () => (/* binding */ assign),
/* harmony export */   charat: () => (/* binding */ charat),
/* harmony export */   combine: () => (/* binding */ combine),
/* harmony export */   from: () => (/* binding */ from),
/* harmony export */   hash: () => (/* binding */ hash),
/* harmony export */   indexof: () => (/* binding */ indexof),
/* harmony export */   match: () => (/* binding */ match),
/* harmony export */   replace: () => (/* binding */ replace),
/* harmony export */   sizeof: () => (/* binding */ sizeof),
/* harmony export */   strlen: () => (/* binding */ strlen),
/* harmony export */   substr: () => (/* binding */ substr),
/* harmony export */   trim: () => (/* binding */ trim)
/* harmony export */ });
/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs

/**
 * @param {number}
 * @return {string}
 */
var from = String.fromCharCode

/**
 * @param {object}
 * @return {object}
 */
var assign = Object.assign

/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */
function hash (value, length) {
	return charat(value, 0) ^ 45 ? (((((((length << 2) ^ charat(value, 0)) << 2) ^ charat(value, 1)) << 2) ^ charat(value, 2)) << 2) ^ charat(value, 3) : 0
}

/**
 * @param {string} value
 * @return {string}
 */
function trim (value) {
	return value.trim()
}

/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */
function match (value, pattern) {
	return (value = pattern.exec(value)) ? value[0] : value
}

/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */
function replace (value, pattern, replacement) {
	return value.replace(pattern, replacement)
}

/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */
function indexof (value, search) {
	return value.indexOf(search)
}

/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */
function charat (value, index) {
	return value.charCodeAt(index) | 0
}

/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */
function substr (value, begin, end) {
	return value.slice(begin, end)
}

/**
 * @param {string} value
 * @return {number}
 */
function strlen (value) {
	return value.length
}

/**
 * @param {any[]} value
 * @return {number}
 */
function sizeof (value) {
	return value.length
}

/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */
function append (value, array) {
	return array.push(value), value
}

/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */
function combine (array, callback) {
	return array.map(callback).join('')
}


/***/ }),

/***/ "./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/use-isomorphic-layout-effect/dist/use-isomorphic-layout-effect.browser.esm.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var index = react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect ;




/***/ }),

/***/ "./src/blocks/hash-form/edit.js":
/*!**************************************!*\
  !*** ./src/blocks/hash-form/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _controls_typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../controls/typography */ "./src/controls/typography.js");
/* harmony import */ var _utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/googlefontload */ "./src/utils/googlefontload.js");
/* harmony import */ var _controls_color__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../controls/color */ "./src/controls/color.js");
/* harmony import */ var _utils_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/tabs */ "./src/utils/tabs.js");
/* harmony import */ var _controls_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../controls/select */ "./src/controls/select.js");
/* harmony import */ var _controls_dimension__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../controls/dimension */ "./src/controls/dimension.js");
/* harmony import */ var _controls_buttongroup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../controls/buttongroup */ "./src/controls/buttongroup.js");
/* harmony import */ var _controls_rangeslider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../controls/rangeslider */ "./src/controls/rangeslider.js");
/* harmony import */ var _controls_border__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../controls/border */ "./src/controls/border.js");
/* harmony import */ var _controls_boxshadow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../controls/boxshadow */ "./src/controls/boxshadow.js");
/* harmony import */ var _controls_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../controls/toggle */ "./src/controls/toggle.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/helper */ "./src/utils/helper.js");
/* harmony import */ var _utils_svgicons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/svgicons */ "./src/utils/svgicons.js");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_20__);



// eslint-disable-next-line @wordpress/no-unsafe-wp-apis



















function Edit(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('layout');
  const {
    id,
    hfStyle,
    formId,
    enableCustomStyle,
    columnGap,
    columnGapUnit,
    rowGap,
    rowGapUnit,
    labelTypographyFamily,
    labelTypographyWeight,
    labelTypographyTextTransform,
    labelTypographyTextDecoration,
    labelTypographyFontSizeSm,
    labelTypographyFontSizeMd,
    labelTypographyFontSize,
    labelTypographyFontSizeUnit,
    labelTypographyLetterSpacingSm,
    labelTypographyLetterSpacingMd,
    labelTypographyLetterSpacing,
    labelTypographyLetterSpacingUnit,
    labelTypographyLineHeightSm,
    labelTypographyLineHeightMd,
    labelTypographyLineHeight,
    labelTypographyLineHeightUnit,
    labelColor,
    requiredColor,
    labelSpacingTop,
    labelSpacingLeft,
    labelSpacingRight,
    labelSpacingBottom,
    labelSpacingUnit,
    descriptionTypographyFamily,
    descriptionTypographyWeight,
    descriptionTypographyTextTransform,
    descriptionTypographyTextDecoration,
    descriptionTypographyFontSizeSm,
    descriptionTypographyFontSizeMd,
    descriptionTypographyFontSize,
    descriptionTypographyFontSizeUnit,
    descriptionTypographyLetterSpacingSm,
    descriptionTypographyLetterSpacingMd,
    descriptionTypographyLetterSpacing,
    descriptionTypographyLetterSpacingUnit,
    descriptionTypographyLineHeightSm,
    descriptionTypographyLineHeightMd,
    descriptionTypographyLineHeight,
    descriptionTypographyLineHeightUnit,
    descriptionColor,
    descriptionSpacingTop,
    descriptionSpacingLeft,
    descriptionSpacingRight,
    descriptionSpacingBottom,
    descriptionSpacingUnit,
    fieldsTypographyFamily,
    fieldsTypographyWeight,
    fieldsTypographyTextTransform,
    fieldsTypographyTextDecoration,
    fieldsTypographyFontSizeSm,
    fieldsTypographyFontSizeMd,
    fieldsTypographyFontSize,
    fieldsTypographyFontSizeUnit,
    fieldsTypographyLetterSpacingSm,
    fieldsTypographyLetterSpacingMd,
    fieldsTypographyLetterSpacing,
    fieldsTypographyLetterSpacingUnit,
    fieldsTypographyLineHeightSm,
    fieldsTypographyLineHeightMd,
    fieldsTypographyLineHeight,
    fieldsTypographyLineHeightUnit,
    fieldsColor,
    fieldsBgColor,
    fieldsBoxShadowHorizontal,
    fieldsBoxShadowVertical,
    fieldsBoxShadowBlur,
    fieldsBoxShadowSpread,
    fieldsBoxShadowColor,
    fieldsBoxShadowInset,
    fieldsBorder,
    fieldsBorderWidthTop,
    fieldsBorderWidthMdTop,
    fieldsBorderWidthSmTop,
    fieldsBorderWidthLeft,
    fieldsBorderWidthMdLeft,
    fieldsBorderWidthSmLeft,
    fieldsBorderWidthRight,
    fieldsBorderWidthMdRight,
    fieldsBorderWidthSmRight,
    fieldsBorderWidthBottom,
    fieldsBorderWidthMdBottom,
    fieldsBorderWidthSmBottom,
    fieldsBorderWidthUnit,
    fieldsBorderColor,
    fieldsColorFocus,
    fieldsBgColorFocus,
    fieldsBoxShadowFocusHorizontal,
    fieldsBoxShadowFocusVertical,
    fieldsBoxShadowFocusBlur,
    fieldsBoxShadowFocusSpread,
    fieldsBoxShadowFocusColor,
    fieldsBoxShadowFocusInset,
    fieldsBorderFocus,
    fieldsBorderFocusWidthTop,
    fieldsBorderFocusWidthMdTop,
    fieldsBorderFocusWidthSmTop,
    fieldsBorderFocusWidthLeft,
    fieldsBorderFocusWidthMdLeft,
    fieldsBorderFocusWidthSmLeft,
    fieldsBorderFocusWidthRight,
    fieldsBorderFocusWidthMdRight,
    fieldsBorderFocusWidthSmRight,
    fieldsBorderFocusWidthBottom,
    fieldsBorderFocusWidthMdBottom,
    fieldsBorderFocusWidthSmBottom,
    fieldsBorderFocusWidthUnit,
    fieldsBorderFocusColor,
    fieldsBorderRadiusTop,
    fieldsBorderRadiusLeft,
    fieldsBorderRadiusRight,
    fieldsBorderRadiusBottom,
    fieldsBorderRadiusUnit,
    fieldsPaddingTop,
    fieldsPaddingLeft,
    fieldsPaddingRight,
    fieldsPaddingBottom,
    fieldsPaddingUnit,
    uploadTypographyFamily,
    uploadTypographyWeight,
    uploadTypographyTextTransform,
    uploadTypographyTextDecoration,
    uploadTypographyFontSizeSm,
    uploadTypographyFontSizeMd,
    uploadTypographyFontSize,
    uploadTypographyFontSizeUnit,
    uploadTypographyLetterSpacingSm,
    uploadTypographyLetterSpacingMd,
    uploadTypographyLetterSpacing,
    uploadTypographyLetterSpacingUnit,
    uploadTypographyLineHeightSm,
    uploadTypographyLineHeightMd,
    uploadTypographyLineHeight,
    uploadTypographyLineHeightUnit,
    uploadColor,
    uploadBgColor,
    uploadBoxShadowHorizontal,
    uploadBoxShadowVertical,
    uploadBoxShadowBlur,
    uploadBoxShadowSpread,
    uploadBoxShadowColor,
    uploadBoxShadowInset,
    uploadBorder,
    uploadBorderWidthTop,
    uploadBorderWidthMdTop,
    uploadBorderWidthSmTop,
    uploadBorderWidthLeft,
    uploadBorderWidthMdLeft,
    uploadBorderWidthSmLeft,
    uploadBorderWidthRight,
    uploadBorderWidthMdRight,
    uploadBorderWidthSmRight,
    uploadBorderWidthBottom,
    uploadBorderWidthMdBottom,
    uploadBorderWidthSmBottom,
    uploadBorderWidthUnit,
    uploadBorderColor,
    uploadColorHover,
    uploadBgColorHover,
    uploadBoxShadowHoverHorizontal,
    uploadBoxShadowHoverVertical,
    uploadBoxShadowHoverBlur,
    uploadBoxShadowHoverSpread,
    uploadBoxShadowHoverColor,
    uploadBoxShadowHoverInset,
    uploadBorderHover,
    uploadBorderHoverWidthTop,
    uploadBorderHoverWidthMdTop,
    uploadBorderHoverWidthSmTop,
    uploadBorderHoverWidthLeft,
    uploadBorderHoverWidthMdLeft,
    uploadBorderHoverWidthSmLeft,
    uploadBorderHoverWidthRight,
    uploadBorderHoverWidthMdRight,
    uploadBorderHoverWidthSmRight,
    uploadBorderHoverWidthBottom,
    uploadBorderHoverWidthMdBottom,
    uploadBorderHoverWidthSmBottom,
    uploadBorderHoverWidthUnit,
    uploadBorderHoverColor,
    uploadBorderRadiusTop,
    uploadBorderRadiusLeft,
    uploadBorderRadiusRight,
    uploadBorderRadiusBottom,
    uploadBorderRadiusUnit,
    uploadPaddingTop,
    uploadPaddingLeft,
    uploadPaddingRight,
    uploadPaddingBottom,
    uploadPaddingUnit,
    buttonTypographyFamily,
    buttonTypographyWeight,
    buttonTypographyTextTransform,
    buttonTypographyTextDecoration,
    buttonTypographyFontSizeSm,
    buttonTypographyFontSizeMd,
    buttonTypographyFontSize,
    buttonTypographyFontSizeUnit,
    buttonTypographyLetterSpacingSm,
    buttonTypographyLetterSpacingMd,
    buttonTypographyLetterSpacing,
    buttonTypographyLetterSpacingUnit,
    buttonTypographyLineHeightSm,
    buttonTypographyLineHeightMd,
    buttonTypographyLineHeight,
    buttonTypographyLineHeightUnit,
    buttonColor,
    buttonBgColor,
    buttonBoxShadowHorizontal,
    buttonBoxShadowVertical,
    buttonBoxShadowBlur,
    buttonBoxShadowSpread,
    buttonBoxShadowColor,
    buttonBoxShadowInset,
    buttonBorder,
    buttonBorderWidthTop,
    buttonBorderWidthMdTop,
    buttonBorderWidthSmTop,
    buttonBorderWidthLeft,
    buttonBorderWidthMdLeft,
    buttonBorderWidthSmLeft,
    buttonBorderWidthRight,
    buttonBorderWidthMdRight,
    buttonBorderWidthSmRight,
    buttonBorderWidthBottom,
    buttonBorderWidthMdBottom,
    buttonBorderWidthSmBottom,
    buttonBorderWidthUnit,
    buttonBorderColor,
    buttonColorHover,
    buttonBgColorHover,
    buttonBoxShadowHoverHorizontal,
    buttonBoxShadowHoverVertical,
    buttonBoxShadowHoverBlur,
    buttonBoxShadowHoverSpread,
    buttonBoxShadowHoverColor,
    buttonBoxShadowHoverInset,
    buttonBorderHover,
    buttonBorderHoverWidthTop,
    buttonBorderHoverWidthMdTop,
    buttonBorderHoverWidthSmTop,
    buttonBorderHoverWidthLeft,
    buttonBorderHoverWidthMdLeft,
    buttonBorderHoverWidthSmLeft,
    buttonBorderHoverWidthRight,
    buttonBorderHoverWidthMdRight,
    buttonBorderHoverWidthSmRight,
    buttonBorderHoverWidthBottom,
    buttonBorderHoverWidthMdBottom,
    buttonBorderHoverWidthSmBottom,
    buttonBorderHoverWidthUnit,
    buttonBorderHoverColor,
    buttonBorderRadiusTop,
    buttonBorderRadiusLeft,
    buttonBorderRadiusRight,
    buttonBorderRadiusBottom,
    buttonBorderRadiusUnit,
    buttonPaddingTop,
    buttonPaddingLeft,
    buttonPaddingRight,
    buttonPaddingBottom,
    buttonPaddingUnit,
    validationTypographyFamily,
    validationTypographyWeight,
    validationTypographyTextTransform,
    validationTypographyTextDecoration,
    validationTypographyFontSizeSm,
    validationTypographyFontSizeMd,
    validationTypographyFontSize,
    validationTypographyFontSizeUnit,
    validationTypographyLetterSpacingSm,
    validationTypographyLetterSpacingMd,
    validationTypographyLetterSpacing,
    validationTypographyLetterSpacingUnit,
    validationTypographyLineHeightSm,
    validationTypographyLineHeightMd,
    validationTypographyLineHeight,
    validationTypographyLineHeightUnit,
    validationColor,
    validationTextAlignment,
    formTitleTypographyFamily,
    formTitleTypographyWeight,
    formTitleTypographyTextTransform,
    formTitleTypographyTextDecoration,
    formTitleTypographyFontSizeSm,
    formTitleTypographyFontSizeMd,
    formTitleTypographyFontSize,
    formTitleTypographyFontSizeUnit,
    formTitleTypographyLetterSpacingSm,
    formTitleTypographyLetterSpacingMd,
    formTitleTypographyLetterSpacing,
    formTitleTypographyLetterSpacingUnit,
    formTitleTypographyLineHeightSm,
    formTitleTypographyLineHeightMd,
    formTitleTypographyLineHeight,
    formTitleTypographyLineHeightUnit,
    formTitleColor,
    formTitleSpacingTop,
    formTitleSpacingLeft,
    formTitleSpacingRight,
    formTitleSpacingBottom,
    formTitleSpacingUnit,
    formDescTypographyFamily,
    formDescTypographyWeight,
    formDescTypographyTextTransform,
    formDescTypographyTextDecoration,
    formDescTypographyFontSizeSm,
    formDescTypographyFontSizeMd,
    formDescTypographyFontSize,
    formDescTypographyFontSizeUnit,
    formDescTypographyLetterSpacingSm,
    formDescTypographyLetterSpacingMd,
    formDescTypographyLetterSpacing,
    formDescTypographyLetterSpacingUnit,
    formDescTypographyLineHeightSm,
    formDescTypographyLineHeightMd,
    formDescTypographyLineHeight,
    formDescTypographyLineHeightUnit,
    formDescColor,
    formDescSpacingTop,
    formDescSpacingLeft,
    formDescSpacingRight,
    formDescSpacingBottom,
    formDescSpacingUnit,
    headingTypographyFamily,
    headingTypographyWeight,
    headingTypographyTextTransform,
    headingTypographyTextDecoration,
    headingTypographyFontSizeSm,
    headingTypographyFontSizeMd,
    headingTypographyFontSize,
    headingTypographyFontSizeUnit,
    headingTypographyLetterSpacingSm,
    headingTypographyLetterSpacingMd,
    headingTypographyLetterSpacing,
    headingTypographyLetterSpacingUnit,
    headingTypographyLineHeightSm,
    headingTypographyLineHeightMd,
    headingTypographyLineHeight,
    headingTypographyLineHeightUnit,
    headingColor,
    paragraphTypographyFamily,
    paragraphTypographyWeight,
    paragraphTypographyTextTransform,
    paragraphTypographyTextDecoration,
    paragraphTypographyFontSizeSm,
    paragraphTypographyFontSizeMd,
    paragraphTypographyFontSize,
    paragraphTypographyFontSizeUnit,
    paragraphTypographyLetterSpacingSm,
    paragraphTypographyLetterSpacingMd,
    paragraphTypographyLetterSpacing,
    paragraphTypographyLetterSpacingUnit,
    paragraphTypographyLineHeightSm,
    paragraphTypographyLineHeightMd,
    paragraphTypographyLineHeight,
    paragraphTypographyLineHeightUnit,
    paragraphColor,
    dividerColor,
    starSize,
    starSizeUnit,
    starColor,
    starColorActive,
    rangeSliderHeight,
    rangeSliderHeightUnit,
    rangeSliderHandleSize,
    rangeSliderHandleSizeUnit,
    rangeSliderBarColor,
    rangeSliderBarColorActive,
    rangeHandleColor
  } = attributes;
  setAttributes({
    id: (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)()['id']
  });
  const stylesCSS = `#${id} {
        ${enableCustomStyle && (0,_utils_helper__WEBPACK_IMPORTED_MODULE_17__.getStyleVars)(attributes, {
    responsiveSliderUnits: [],
    normal: ['labelColor', 'requiredColor', 'descriptionColor', 'fieldsColor', 'fieldsBgColor', 'fieldsColorFocus', 'fieldsBgColorFocus', 'uploadColor', 'uploadBorderColor', 'uploadBgColor', 'uploadColorHover', 'uploadBgColorHover', 'buttonColor', 'buttonBgColor', 'buttonColorHover', 'buttonBgColorHover', 'validationColor', 'validationTextAlignment', 'formTitleColor', 'formDescColor', 'headingColor', 'paragraphColor', 'dividerColor', 'starColor', 'starColorActive', 'rangeSliderBarColor', 'rangeSliderBarColorActive', 'rangeHandleColor'],
    normalUnit: ['columnGap', 'rowGap', 'starSize', 'rangeSliderHeight', 'rangeSliderHandleSize'],
    dimension: ['labelSpacing', 'descriptionSpacing', 'fieldsBorderRadius', 'fieldsPadding', 'uploadBorderRadius', 'uploadPadding', 'buttonBorderRadius', 'buttonPadding', 'formTitleSpacing', 'formDescSpacing'],
    responsiveBorder: ['fieldsBorder', 'fieldsBorderFocus', 'uploadBorderHover', 'buttonBorder', 'buttonBorderHover'],
    responsiveTypography: ['labelTypography', 'descriptionTypography', 'fieldsTypography', 'uploadTypography', 'buttonTypography', 'validationTypography', 'formTitleTypography', 'formDescTypography', 'headingTypography', 'paragraphTypography'],
    boxShadow: ['fieldsBoxShadow', 'fieldsBoxShadowFocus', 'buttonBoxShadow', 'buttonBoxShadowHover', 'uploadBoxShadowHover']
  })}
    }`;
  setAttributes({
    hfStyle: stylesCSS.replace(/([^0-9a-zA-Z\.#])\s+/g, "$1").replace(/\s([^0-9a-zA-Z\.#]+)/g, "$1").replace(/;}/g, "}").replace(/\/\*.*?\*\//g, "")
  });
  const formOptions = [{
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select a Form', 'hash-form'),
    value: ''
  }, ...Object.entries(hash_form_block_data.forms).map(value => ({
    value: value[0],
    label: value[1]
  }))];
  const selectForm = value => {
    setAttributes({
      formId: value
    });
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    jsx: true
  }, (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_19__.applyFilters)('hashform.editorcss', hfStyle, props)), labelTypographyFamily && labelTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: labelTypographyFamily,
    weight: labelTypographyWeight.replace("italic", "i")
  }), descriptionTypographyFamily && descriptionTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: descriptionTypographyFamily,
    weight: descriptionTypographyWeight.replace("italic", "i")
  }), fieldsTypographyFamily && fieldsTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: fieldsTypographyFamily,
    weight: fieldsTypographyWeight.replace("italic", "i")
  }), uploadTypographyFamily && uploadTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: uploadTypographyFamily,
    weight: uploadTypographyWeight.replace("italic", "i")
  }), buttonTypographyFamily && buttonTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: buttonTypographyFamily,
    weight: buttonTypographyWeight.replace("italic", "i")
  }), validationTypographyFamily && validationTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: validationTypographyFamily,
    weight: validationTypographyWeight.replace("italic", "i")
  }), formTitleTypographyFamily && formTitleTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: formTitleTypographyFamily,
    weight: formTitleTypographyWeight.replace("italic", "i")
  }), formDescTypographyFamily && formDescTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: formDescTypographyFamily,
    weight: formDescTypographyWeight.replace("italic", "i")
  }), headingTypographyFamily && headingTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: headingTypographyFamily,
    weight: headingTypographyWeight.replace("italic", "i")
  }), paragraphTypographyFamily && paragraphTypographyFamily != 'Default' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_googlefontload__WEBPACK_IMPORTED_MODULE_7__["default"], {
    family: paragraphTypographyFamily,
    weight: paragraphTypographyWeight.replace("italic", "i")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-head-panel-tabs"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-panel-tabs-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('hf-panel-tab', {
      'active-tab': 'layout' === activeTab
    }),
    onClick: () => setActiveTab('layout')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_18__.LayoutIcon, null)), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('hf-panel-tab', {
      'active-tab': 'style' === activeTab
    }),
    onClick: () => setActiveTab('style')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_18__.StyleIcon, null)), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Style', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()('hf-panel-tab', {
      'active-tab': 'advanced' === activeTab
    }),
    onClick: () => setActiveTab('advanced')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_18__.AdvancedIcon, null)), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced', 'hash-form'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-panel-tab-fields"
  }, 'layout' === activeTab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form Settings', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form', 'hash-form'),
    value: formId,
    options: formOptions,
    onChange: selectForm
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('To Create New Form', 'hash-form'), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    href: hash_form_block_data.create_form_link
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Click Here', 'hash-form'))))) || 'style' === activeTab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom Style', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_toggle__WEBPACK_IMPORTED_MODULE_16__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enable Custom Style', 'hash-form'),
    checked: enableCustomStyle,
    onChange: newValue => setAttributes({
      enableCustomStyle: !enableCustomStyle
    })
  })), enableCustomStyle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_rangeslider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column Gap', 'hash-form'),
    value: columnGap,
    setValue: columnGap => setAttributes({
      columnGap
    }),
    unit: columnGapUnit,
    setUnit: columnGapUnit => setAttributes({
      columnGapUnit
    }),
    units: ['px', 'em', 'rem'],
    min: 10,
    max: 80,
    useUnit: !0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_rangeslider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Row Gap', 'hash-form'),
    value: rowGap,
    setValue: rowGap => setAttributes({
      rowGap
    }),
    unit: rowGapUnit,
    setUnit: rowGapUnit => setAttributes({
      rowGapUnit
    }),
    units: ['px', 'em', 'rem'],
    min: 10,
    max: 80,
    useUnit: !0
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Label', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: labelTypographyFamily,
    setValueFamily: value => setAttributes({
      labelTypographyFamily: value
    }),
    valueWeight: labelTypographyWeight,
    setValueWeight: value => setAttributes({
      labelTypographyWeight: value
    }),
    valueTextTransform: labelTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      labelTypographyTextTransform: value
    }),
    valueTextDecoration: labelTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      labelTypographyTextDecoration: value
    }),
    valueFontSizeSm: labelTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      labelTypographyFontSizeSm: value
    }),
    valueFontSizeMd: labelTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      labelTypographyFontSizeMd: value
    }),
    valueFontSize: labelTypographyFontSize,
    setValueFontSize: value => setAttributes({
      labelTypographyFontSize: value
    }),
    valueFontSizeUnit: labelTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      labelTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: labelTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      labelTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: labelTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      labelTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: labelTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      labelTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: labelTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      labelTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: labelTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      labelTypographyLineHeightSm: value
    }),
    valueLineHeightMd: labelTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      labelTypographyLineHeightMd: value
    }),
    valueLineHeight: labelTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      labelTypographyLineHeight: value
    }),
    valueLineHeightUnit: labelTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      labelTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: labelColor,
    setValue: value => setAttributes({
      labelColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Required Color', 'smart-blocks'),
    enableAlpha: true,
    value: requiredColor,
    setValue: value => setAttributes({
      requiredColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing', 'smart-blocks'),
    dimensionTop: labelSpacingTop,
    setDimensionTop: value => setAttributes({
      labelSpacingTop: value
    }),
    dimensionLeft: labelSpacingLeft,
    setDimensionLeft: value => setAttributes({
      labelSpacingLeft: value
    }),
    dimensionRight: labelSpacingRight,
    setDimensionRight: value => setAttributes({
      labelSpacingRight: value
    }),
    dimensionBottom: labelSpacingBottom,
    setDimensionBottom: value => setAttributes({
      labelSpacingBottom: value
    }),
    unit: labelSpacingUnit,
    setUnit: value => setAttributes({
      labelSpacingUnit: value
    }),
    units: ['px', 'em', '%']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Description', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: descriptionTypographyFamily,
    setValueFamily: value => setAttributes({
      descriptionTypographyFamily: value
    }),
    valueWeight: descriptionTypographyWeight,
    setValueWeight: value => setAttributes({
      descriptionTypographyWeight: value
    }),
    valueTextTransform: descriptionTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      descriptionTypographyTextTransform: value
    }),
    valueTextDecoration: descriptionTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      descriptionTypographyTextDecoration: value
    }),
    valueFontSizeSm: descriptionTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      descriptionTypographyFontSizeSm: value
    }),
    valueFontSizeMd: descriptionTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      descriptionTypographyFontSizeMd: value
    }),
    valueFontSize: descriptionTypographyFontSize,
    setValueFontSize: value => setAttributes({
      descriptionTypographyFontSize: value
    }),
    valueFontSizeUnit: descriptionTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      descriptionTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: descriptionTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      descriptionTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: descriptionTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      descriptionTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: descriptionTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      descriptionTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: descriptionTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      descriptionTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: descriptionTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      descriptionTypographyLineHeightSm: value
    }),
    valueLineHeightMd: descriptionTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      descriptionTypographyLineHeightMd: value
    }),
    valueLineHeight: descriptionTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      descriptionTypographyLineHeight: value
    }),
    valueLineHeightUnit: descriptionTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      descriptionTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: descriptionColor,
    setValue: value => setAttributes({
      descriptionColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing', 'smart-blocks'),
    dimensionTop: descriptionSpacingTop,
    setDimensionTop: value => setAttributes({
      descriptionSpacingTop: value
    }),
    dimensionLeft: descriptionSpacingLeft,
    setDimensionLeft: value => setAttributes({
      descriptionSpacingLeft: value
    }),
    dimensionRight: descriptionSpacingRight,
    setDimensionRight: value => setAttributes({
      descriptionSpacingRight: value
    }),
    dimensionBottom: descriptionSpacingBottom,
    setDimensionBottom: value => setAttributes({
      descriptionSpacingBottom: value
    }),
    unit: descriptionSpacingUnit,
    setUnit: value => setAttributes({
      descriptionSpacingUnit: value
    }),
    units: ['px', 'em', '%']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Fields', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: fieldsTypographyFamily,
    setValueFamily: value => setAttributes({
      fieldsTypographyFamily: value
    }),
    valueWeight: fieldsTypographyWeight,
    setValueWeight: value => setAttributes({
      fieldsTypographyWeight: value
    }),
    valueTextTransform: fieldsTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      fieldsTypographyTextTransform: value
    }),
    valueTextDecoration: fieldsTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      fieldsTypographyTextDecoration: value
    }),
    valueFontSizeSm: fieldsTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      fieldsTypographyFontSizeSm: value
    }),
    valueFontSizeMd: fieldsTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      fieldsTypographyFontSizeMd: value
    }),
    valueFontSize: fieldsTypographyFontSize,
    setValueFontSize: value => setAttributes({
      fieldsTypographyFontSize: value
    }),
    valueFontSizeUnit: fieldsTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      fieldsTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: fieldsTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      fieldsTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: fieldsTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      fieldsTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: fieldsTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      fieldsTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: fieldsTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      fieldsTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: fieldsTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      fieldsTypographyLineHeightSm: value
    }),
    valueLineHeightMd: fieldsTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      fieldsTypographyLineHeightMd: value
    }),
    valueLineHeight: fieldsTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      fieldsTypographyLineHeight: value
    }),
    valueLineHeightUnit: fieldsTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      fieldsTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_tabs__WEBPACK_IMPORTED_MODULE_9__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Normal", 'smart-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: fieldsColor,
    setValue: value => setAttributes({
      fieldsColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'smart-blocks'),
    enableAlpha: true,
    value: fieldsBgColor,
    setValue: value => setAttributes({
      fieldsBgColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_boxshadow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    valueHorizontal: fieldsBoxShadowHorizontal,
    setValueHorizontal: fieldsBoxShadowHorizontal => setAttributes({
      fieldsBoxShadowHorizontal
    }),
    valueVertical: fieldsBoxShadowVertical,
    setValueVertical: fieldsBoxShadowVertical => setAttributes({
      fieldsBoxShadowVertical
    }),
    valueBlur: fieldsBoxShadowBlur,
    setValueBlur: fieldsBoxShadowBlur => setAttributes({
      fieldsBoxShadowBlur
    }),
    valueSpread: fieldsBoxShadowSpread,
    setValueSpread: fieldsBoxShadowSpread => setAttributes({
      fieldsBoxShadowSpread
    }),
    valueColor: fieldsBoxShadowColor,
    setValueColor: fieldsBoxShadowColor => setAttributes({
      fieldsBoxShadowColor
    }),
    valueInset: fieldsBoxShadowInset,
    setValueInset: fieldsBoxShadowInset => setAttributes({
      fieldsBoxShadowInset
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_border__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: fieldsBorder,
    setValue: fieldsBorder => setAttributes({
      fieldsBorder
    })
  }), fieldsBorder && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'smart-blocks-pro'),
    units: ['px', 'em', 'rem', 'vw'],
    responsive: !0,
    dimensionTop: fieldsBorderWidthTop,
    setDimensionTop: value => setAttributes({
      fieldsBorderWidthTop: value
    }),
    dimensionMdTop: fieldsBorderWidthMdTop,
    setDimensionMdTop: value => setAttributes({
      fieldsBorderWidthMdTop: value
    }),
    dimensionSmTop: fieldsBorderWidthSmTop,
    setDimensionSmTop: value => setAttributes({
      fieldsBorderWidthSmTop: value
    }),
    dimensionLeft: fieldsBorderWidthLeft,
    setDimensionLeft: value => setAttributes({
      fieldsBorderWidthLeft: value
    }),
    dimensionMdLeft: fieldsBorderWidthMdLeft,
    setDimensionMdLeft: value => setAttributes({
      fieldsBorderWidthMdLeft: value
    }),
    dimensionSmLeft: fieldsBorderWidthSmLeft,
    setDimensionSmLeft: value => setAttributes({
      fieldsBorderWidthSmLeft: value
    }),
    dimensionRight: fieldsBorderWidthRight,
    setDimensionRight: value => setAttributes({
      fieldsBorderWidthRight: value
    }),
    dimensionMdRight: fieldsBorderWidthMdRight,
    setDimensionMdRight: value => setAttributes({
      fieldsBorderWidthMdRight: value
    }),
    dimensionSmRight: fieldsBorderWidthSmRight,
    setDimensionSmRight: value => setAttributes({
      fieldsBorderWidthSmRight: value
    }),
    dimensionBottom: fieldsBorderWidthBottom,
    setDimensionBottom: value => setAttributes({
      fieldsBorderWidthBottom: value
    }),
    dimensionMdBottom: fieldsBorderWidthMdBottom,
    setDimensionMdBottom: value => setAttributes({
      fieldsBorderWidthMdBottom: value
    }),
    dimensionSmBottom: fieldsBorderWidthSmBottom,
    setDimensionSmBottom: value => setAttributes({
      fieldsBorderWidthSmBottom: value
    }),
    unit: fieldsBorderWidthUnit,
    setUnit: value => setAttributes({
      fieldsBorderWidthUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'smart-blocks-pro'),
    enableAlpha: true,
    value: fieldsBorderColor,
    setValue: fieldsBorderColor => setAttributes({
      fieldsBorderColor
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Focus", 'smart-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: fieldsColorFocus,
    setValue: value => setAttributes({
      fieldsColorFocus: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'smart-blocks'),
    enableAlpha: true,
    value: fieldsBgColorFocus,
    setValue: value => setAttributes({
      fieldsBgColorFocus: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_boxshadow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    valueHorizontal: fieldsBoxShadowFocusHorizontal,
    setValueHorizontal: fieldsBoxShadowFocusHorizontal => setAttributes({
      fieldsBoxShadowFocusHorizontal
    }),
    valueVertical: fieldsBoxShadowFocusVertical,
    setValueVertical: fieldsBoxShadowFocusVertical => setAttributes({
      fieldsBoxShadowFocusVertical
    }),
    valueBlur: fieldsBoxShadowFocusBlur,
    setValueBlur: fieldsBoxShadowFocusBlur => setAttributes({
      fieldsBoxShadowFocusBlur
    }),
    valueSpread: fieldsBoxShadowFocusSpread,
    setValueSpread: fieldsBoxShadowFocusSpread => setAttributes({
      fieldsBoxShadowFocusSpread
    }),
    valueColor: fieldsBoxShadowFocusColor,
    setValueColor: fieldsBoxShadowFocusColor => setAttributes({
      fieldsBoxShadowFocusColor
    }),
    valueInset: fieldsBoxShadowFocusInset,
    setValueInset: fieldsBoxShadowFocusInset => setAttributes({
      fieldsBoxShadowFocusInset
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_border__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: fieldsBorderFocus,
    setValue: fieldsBorderFocus => setAttributes({
      fieldsBorderFocus
    })
  }), fieldsBorderFocus && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'smart-blocks-pro'),
    units: ['px', 'em', 'rem', 'vw'],
    responsive: !0,
    dimensionTop: fieldsBorderFocusWidthTop,
    setDimensionTop: value => setAttributes({
      fieldsBorderFocusWidthTop: value
    }),
    dimensionMdTop: fieldsBorderFocusWidthMdTop,
    setDimensionMdTop: value => setAttributes({
      fieldsBorderFocusWidthMdTop: value
    }),
    dimensionSmTop: fieldsBorderFocusWidthSmTop,
    setDimensionSmTop: value => setAttributes({
      fieldsBorderFocusWidthSmTop: value
    }),
    dimensionLeft: fieldsBorderFocusWidthLeft,
    setDimensionLeft: value => setAttributes({
      fieldsBorderFocusWidthLeft: value
    }),
    dimensionMdLeft: fieldsBorderFocusWidthMdLeft,
    setDimensionMdLeft: value => setAttributes({
      fieldsBorderFocusWidthMdLeft: value
    }),
    dimensionSmLeft: fieldsBorderFocusWidthSmLeft,
    setDimensionSmLeft: value => setAttributes({
      fieldsBorderFocusWidthSmLeft: value
    }),
    dimensionRight: fieldsBorderFocusWidthRight,
    setDimensionRight: value => setAttributes({
      fieldsBorderFocusWidthRight: value
    }),
    dimensionMdRight: fieldsBorderFocusWidthMdRight,
    setDimensionMdRight: value => setAttributes({
      fieldsBorderFocusWidthMdRight: value
    }),
    dimensionSmRight: fieldsBorderFocusWidthSmRight,
    setDimensionSmRight: value => setAttributes({
      fieldsBorderFocusWidthSmRight: value
    }),
    dimensionBottom: fieldsBorderFocusWidthBottom,
    setDimensionBottom: value => setAttributes({
      fieldsBorderFocusWidthBottom: value
    }),
    dimensionMdBottom: fieldsBorderFocusWidthMdBottom,
    setDimensionMdBottom: value => setAttributes({
      fieldsBorderFocusWidthMdBottom: value
    }),
    dimensionSmBottom: fieldsBorderFocusWidthSmBottom,
    setDimensionSmBottom: value => setAttributes({
      fieldsBorderFocusWidthSmBottom: value
    }),
    unit: fieldsBorderFocusWidthUnit,
    setUnit: value => setAttributes({
      fieldsBorderFocusWidthUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'smart-blocks-pro'),
    enableAlpha: true,
    value: fieldsBorderFocusColor,
    setValue: fieldsBorderFocusColor => setAttributes({
      fieldsBorderFocusColor
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'smart-blocks'),
    dimensionTop: fieldsBorderRadiusTop,
    setDimensionTop: value => setAttributes({
      fieldsBorderRadiusTop: value
    }),
    dimensionLeft: fieldsBorderRadiusLeft,
    setDimensionLeft: value => setAttributes({
      fieldsBorderRadiusLeft: value
    }),
    dimensionRight: fieldsBorderRadiusRight,
    setDimensionRight: value => setAttributes({
      fieldsBorderRadiusRight: value
    }),
    dimensionBottom: fieldsBorderRadiusBottom,
    setDimensionBottom: value => setAttributes({
      fieldsBorderRadiusBottom: value
    }),
    unit: fieldsBorderRadiusUnit,
    setUnit: value => setAttributes({
      fieldsBorderRadiusUnit: value
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'smart-blocks'),
    dimensionTop: fieldsPaddingTop,
    setDimensionTop: value => setAttributes({
      fieldsPaddingTop: value
    }),
    dimensionLeft: fieldsPaddingLeft,
    setDimensionLeft: value => setAttributes({
      fieldsPaddingLeft: value
    }),
    dimensionRight: fieldsPaddingRight,
    setDimensionRight: value => setAttributes({
      fieldsPaddingRight: value
    }),
    dimensionBottom: fieldsPaddingBottom,
    setDimensionBottom: value => setAttributes({
      fieldsPaddingBottom: value
    }),
    unit: fieldsPaddingUnit,
    setUnit: value => setAttributes({
      fieldsPaddingUnit: value
    }),
    units: ['px', 'em', '%']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upload Button', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: uploadTypographyFamily,
    setValueFamily: value => setAttributes({
      uploadTypographyFamily: value
    }),
    valueWeight: uploadTypographyWeight,
    setValueWeight: value => setAttributes({
      uploadTypographyWeight: value
    }),
    valueTextTransform: uploadTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      uploadTypographyTextTransform: value
    }),
    valueTextDecoration: uploadTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      uploadTypographyTextDecoration: value
    }),
    valueFontSizeSm: uploadTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      uploadTypographyFontSizeSm: value
    }),
    valueFontSizeMd: uploadTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      uploadTypographyFontSizeMd: value
    }),
    valueFontSize: uploadTypographyFontSize,
    setValueFontSize: value => setAttributes({
      uploadTypographyFontSize: value
    }),
    valueFontSizeUnit: uploadTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      uploadTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: uploadTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      uploadTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: uploadTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      uploadTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: uploadTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      uploadTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: uploadTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      uploadTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: uploadTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      uploadTypographyLineHeightSm: value
    }),
    valueLineHeightMd: uploadTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      uploadTypographyLineHeightMd: value
    }),
    valueLineHeight: uploadTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      uploadTypographyLineHeight: value
    }),
    valueLineHeightUnit: uploadTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      uploadTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_tabs__WEBPACK_IMPORTED_MODULE_9__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Normal", 'smart-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: uploadColor,
    setValue: value => setAttributes({
      uploadColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'smart-blocks'),
    enableAlpha: true,
    value: uploadBgColor,
    setValue: value => setAttributes({
      uploadBgColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_boxshadow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    valueHorizontal: uploadBoxShadowHorizontal,
    setValueHorizontal: uploadBoxShadowHorizontal => setAttributes({
      uploadBoxShadowHorizontal
    }),
    valueVertical: uploadBoxShadowVertical,
    setValueVertical: uploadBoxShadowVertical => setAttributes({
      uploadBoxShadowVertical
    }),
    valueBlur: uploadBoxShadowBlur,
    setValueBlur: uploadBoxShadowBlur => setAttributes({
      uploadBoxShadowBlur
    }),
    valueSpread: uploadBoxShadowSpread,
    setValueSpread: uploadBoxShadowSpread => setAttributes({
      uploadBoxShadowSpread
    }),
    valueColor: uploadBoxShadowColor,
    setValueColor: uploadBoxShadowColor => setAttributes({
      uploadBoxShadowColor
    }),
    valueInset: uploadBoxShadowInset,
    setValueInset: uploadBoxShadowInset => setAttributes({
      uploadBoxShadowInset
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_border__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: uploadBorder,
    setValue: uploadBorder => setAttributes({
      uploadBorder
    })
  }), uploadBorder && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'smart-blocks-pro'),
    units: ['px', 'em', 'rem', 'vw'],
    responsive: !0,
    dimensionTop: uploadBorderWidthTop,
    setDimensionTop: value => setAttributes({
      uploadBorderWidthTop: value
    }),
    dimensionMdTop: uploadBorderWidthMdTop,
    setDimensionMdTop: value => setAttributes({
      uploadBorderWidthMdTop: value
    }),
    dimensionSmTop: uploadBorderWidthSmTop,
    setDimensionSmTop: value => setAttributes({
      uploadBorderWidthSmTop: value
    }),
    dimensionLeft: uploadBorderWidthLeft,
    setDimensionLeft: value => setAttributes({
      uploadBorderWidthLeft: value
    }),
    dimensionMdLeft: uploadBorderWidthMdLeft,
    setDimensionMdLeft: value => setAttributes({
      uploadBorderWidthMdLeft: value
    }),
    dimensionSmLeft: uploadBorderWidthSmLeft,
    setDimensionSmLeft: value => setAttributes({
      uploadBorderWidthSmLeft: value
    }),
    dimensionRight: uploadBorderWidthRight,
    setDimensionRight: value => setAttributes({
      uploadBorderWidthRight: value
    }),
    dimensionMdRight: uploadBorderWidthMdRight,
    setDimensionMdRight: value => setAttributes({
      uploadBorderWidthMdRight: value
    }),
    dimensionSmRight: uploadBorderWidthSmRight,
    setDimensionSmRight: value => setAttributes({
      uploadBorderWidthSmRight: value
    }),
    dimensionBottom: uploadBorderWidthBottom,
    setDimensionBottom: value => setAttributes({
      uploadBorderWidthBottom: value
    }),
    dimensionMdBottom: uploadBorderWidthMdBottom,
    setDimensionMdBottom: value => setAttributes({
      uploadBorderWidthMdBottom: value
    }),
    dimensionSmBottom: uploadBorderWidthSmBottom,
    setDimensionSmBottom: value => setAttributes({
      uploadBorderWidthSmBottom: value
    }),
    unit: uploadBorderWidthUnit,
    setUnit: value => setAttributes({
      uploadBorderWidthUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'smart-blocks-pro'),
    enableAlpha: true,
    value: uploadBorderColor,
    setValue: uploadBorderColor => setAttributes({
      uploadBorderColor
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover", 'smart-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: uploadColorHover,
    setValue: value => setAttributes({
      uploadColorHover: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'smart-blocks'),
    enableAlpha: true,
    value: uploadBgColorHover,
    setValue: value => setAttributes({
      uploadBgColorHover: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_boxshadow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    valueHorizontal: uploadBoxShadowHoverHorizontal,
    setValueHorizontal: uploadBoxShadowHoverHorizontal => setAttributes({
      uploadBoxShadowHoverHorizontal
    }),
    valueVertical: uploadBoxShadowHoverVertical,
    setValueVertical: uploadBoxShadowHoverVertical => setAttributes({
      uploadBoxShadowHoverVertical
    }),
    valueBlur: uploadBoxShadowHoverBlur,
    setValueBlur: uploadBoxShadowHoverBlur => setAttributes({
      uploadBoxShadowHoverBlur
    }),
    valueSpread: uploadBoxShadowHoverSpread,
    setValueSpread: uploadBoxShadowHoverSpread => setAttributes({
      uploadBoxShadowHoverSpread
    }),
    valueColor: uploadBoxShadowHoverColor,
    setValueColor: uploadBoxShadowHoverColor => setAttributes({
      uploadBoxShadowHoverColor
    }),
    valueInset: uploadBoxShadowHoverInset,
    setValueInset: uploadBoxShadowHoverInset => setAttributes({
      uploadBoxShadowHoverInset
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_border__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: uploadBorderHover,
    setValue: uploadBorderHover => setAttributes({
      uploadBorderHover
    })
  }), uploadBorderHover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'smart-blocks-pro'),
    units: ['px', 'em', 'rem', 'vw'],
    responsive: !0,
    dimensionTop: uploadBorderHoverWidthTop,
    setDimensionTop: value => setAttributes({
      uploadBorderHoverWidthTop: value
    }),
    dimensionMdTop: uploadBorderHoverWidthMdTop,
    setDimensionMdTop: value => setAttributes({
      uploadBorderHoverWidthMdTop: value
    }),
    dimensionSmTop: uploadBorderHoverWidthSmTop,
    setDimensionSmTop: value => setAttributes({
      uploadBorderHoverWidthSmTop: value
    }),
    dimensionLeft: uploadBorderHoverWidthLeft,
    setDimensionLeft: value => setAttributes({
      uploadBorderHoverWidthLeft: value
    }),
    dimensionMdLeft: uploadBorderHoverWidthMdLeft,
    setDimensionMdLeft: value => setAttributes({
      uploadBorderHoverWidthMdLeft: value
    }),
    dimensionSmLeft: uploadBorderHoverWidthSmLeft,
    setDimensionSmLeft: value => setAttributes({
      uploadBorderHoverWidthSmLeft: value
    }),
    dimensionRight: uploadBorderHoverWidthRight,
    setDimensionRight: value => setAttributes({
      uploadBorderHoverWidthRight: value
    }),
    dimensionMdRight: uploadBorderHoverWidthMdRight,
    setDimensionMdRight: value => setAttributes({
      uploadBorderHoverWidthMdRight: value
    }),
    dimensionSmRight: uploadBorderHoverWidthSmRight,
    setDimensionSmRight: value => setAttributes({
      uploadBorderHoverWidthSmRight: value
    }),
    dimensionBottom: uploadBorderHoverWidthBottom,
    setDimensionBottom: value => setAttributes({
      uploadBorderHoverWidthBottom: value
    }),
    dimensionMdBottom: uploadBorderHoverWidthMdBottom,
    setDimensionMdBottom: value => setAttributes({
      uploadBorderHoverWidthMdBottom: value
    }),
    dimensionSmBottom: uploadBorderHoverWidthSmBottom,
    setDimensionSmBottom: value => setAttributes({
      uploadBorderHoverWidthSmBottom: value
    }),
    unit: uploadBorderHoverWidthUnit,
    setUnit: value => setAttributes({
      uploadBorderHoverWidthUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'smart-blocks-pro'),
    enableAlpha: true,
    value: uploadBorderHoverColor,
    setValue: uploadBorderHoverColor => setAttributes({
      uploadBorderHoverColor
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'smart-blocks'),
    dimensionTop: uploadBorderRadiusTop,
    setDimensionTop: value => setAttributes({
      uploadBorderRadiusTop: value
    }),
    dimensionLeft: uploadBorderRadiusLeft,
    setDimensionLeft: value => setAttributes({
      uploadBorderRadiusLeft: value
    }),
    dimensionRight: uploadBorderRadiusRight,
    setDimensionRight: value => setAttributes({
      uploadBorderRadiusRight: value
    }),
    dimensionBottom: uploadBorderRadiusBottom,
    setDimensionBottom: value => setAttributes({
      uploadBorderRadiusBottom: value
    }),
    unit: uploadBorderRadiusUnit,
    setUnit: value => setAttributes({
      uploadBorderRadiusUnit: value
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'smart-blocks'),
    dimensionTop: uploadPaddingTop,
    setDimensionTop: value => setAttributes({
      uploadPaddingTop: value
    }),
    dimensionLeft: uploadPaddingLeft,
    setDimensionLeft: value => setAttributes({
      uploadPaddingLeft: value
    }),
    dimensionRight: uploadPaddingRight,
    setDimensionRight: value => setAttributes({
      uploadPaddingRight: value
    }),
    dimensionBottom: uploadPaddingBottom,
    setDimensionBottom: value => setAttributes({
      uploadPaddingBottom: value
    }),
    unit: uploadPaddingUnit,
    setUnit: value => setAttributes({
      uploadPaddingUnit: value
    }),
    units: ['px', 'em', '%']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Submit Button', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: buttonTypographyFamily,
    setValueFamily: value => setAttributes({
      buttonTypographyFamily: value
    }),
    valueWeight: buttonTypographyWeight,
    setValueWeight: value => setAttributes({
      buttonTypographyWeight: value
    }),
    valueTextTransform: buttonTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      buttonTypographyTextTransform: value
    }),
    valueTextDecoration: buttonTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      buttonTypographyTextDecoration: value
    }),
    valueFontSizeSm: buttonTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      buttonTypographyFontSizeSm: value
    }),
    valueFontSizeMd: buttonTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      buttonTypographyFontSizeMd: value
    }),
    valueFontSize: buttonTypographyFontSize,
    setValueFontSize: value => setAttributes({
      buttonTypographyFontSize: value
    }),
    valueFontSizeUnit: buttonTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      buttonTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: buttonTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      buttonTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: buttonTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      buttonTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: buttonTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      buttonTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: buttonTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      buttonTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: buttonTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      buttonTypographyLineHeightSm: value
    }),
    valueLineHeightMd: buttonTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      buttonTypographyLineHeightMd: value
    }),
    valueLineHeight: buttonTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      buttonTypographyLineHeight: value
    }),
    valueLineHeightUnit: buttonTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      buttonTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_tabs__WEBPACK_IMPORTED_MODULE_9__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Normal", 'smart-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: buttonColor,
    setValue: value => setAttributes({
      buttonColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'smart-blocks'),
    enableAlpha: true,
    value: buttonBgColor,
    setValue: value => setAttributes({
      buttonBgColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_boxshadow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    valueHorizontal: buttonBoxShadowHorizontal,
    setValueHorizontal: buttonBoxShadowHorizontal => setAttributes({
      buttonBoxShadowHorizontal
    }),
    valueVertical: buttonBoxShadowVertical,
    setValueVertical: buttonBoxShadowVertical => setAttributes({
      buttonBoxShadowVertical
    }),
    valueBlur: buttonBoxShadowBlur,
    setValueBlur: buttonBoxShadowBlur => setAttributes({
      buttonBoxShadowBlur
    }),
    valueSpread: buttonBoxShadowSpread,
    setValueSpread: buttonBoxShadowSpread => setAttributes({
      buttonBoxShadowSpread
    }),
    valueColor: buttonBoxShadowColor,
    setValueColor: buttonBoxShadowColor => setAttributes({
      buttonBoxShadowColor
    }),
    valueInset: buttonBoxShadowInset,
    setValueInset: buttonBoxShadowInset => setAttributes({
      buttonBoxShadowInset
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_border__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: buttonBorder,
    setValue: buttonBorder => setAttributes({
      buttonBorder
    })
  }), buttonBorder && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'smart-blocks-pro'),
    units: ['px', 'em', 'rem', 'vw'],
    responsive: !0,
    dimensionTop: buttonBorderWidthTop,
    setDimensionTop: value => setAttributes({
      buttonBorderWidthTop: value
    }),
    dimensionMdTop: buttonBorderWidthMdTop,
    setDimensionMdTop: value => setAttributes({
      buttonBorderWidthMdTop: value
    }),
    dimensionSmTop: buttonBorderWidthSmTop,
    setDimensionSmTop: value => setAttributes({
      buttonBorderWidthSmTop: value
    }),
    dimensionLeft: buttonBorderWidthLeft,
    setDimensionLeft: value => setAttributes({
      buttonBorderWidthLeft: value
    }),
    dimensionMdLeft: buttonBorderWidthMdLeft,
    setDimensionMdLeft: value => setAttributes({
      buttonBorderWidthMdLeft: value
    }),
    dimensionSmLeft: buttonBorderWidthSmLeft,
    setDimensionSmLeft: value => setAttributes({
      buttonBorderWidthSmLeft: value
    }),
    dimensionRight: buttonBorderWidthRight,
    setDimensionRight: value => setAttributes({
      buttonBorderWidthRight: value
    }),
    dimensionMdRight: buttonBorderWidthMdRight,
    setDimensionMdRight: value => setAttributes({
      buttonBorderWidthMdRight: value
    }),
    dimensionSmRight: buttonBorderWidthSmRight,
    setDimensionSmRight: value => setAttributes({
      buttonBorderWidthSmRight: value
    }),
    dimensionBottom: buttonBorderWidthBottom,
    setDimensionBottom: value => setAttributes({
      buttonBorderWidthBottom: value
    }),
    dimensionMdBottom: buttonBorderWidthMdBottom,
    setDimensionMdBottom: value => setAttributes({
      buttonBorderWidthMdBottom: value
    }),
    dimensionSmBottom: buttonBorderWidthSmBottom,
    setDimensionSmBottom: value => setAttributes({
      buttonBorderWidthSmBottom: value
    }),
    unit: buttonBorderWidthUnit,
    setUnit: value => setAttributes({
      buttonBorderWidthUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'smart-blocks-pro'),
    enableAlpha: true,
    value: buttonBorderColor,
    setValue: buttonBorderColor => setAttributes({
      buttonBorderColor
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    tabTitle: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover", 'smart-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: buttonColorHover,
    setValue: value => setAttributes({
      buttonColorHover: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'smart-blocks'),
    enableAlpha: true,
    value: buttonBgColorHover,
    setValue: value => setAttributes({
      buttonBgColorHover: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_boxshadow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    valueHorizontal: buttonBoxShadowHoverHorizontal,
    setValueHorizontal: buttonBoxShadowHoverHorizontal => setAttributes({
      buttonBoxShadowHoverHorizontal
    }),
    valueVertical: buttonBoxShadowHoverVertical,
    setValueVertical: buttonBoxShadowHoverVertical => setAttributes({
      buttonBoxShadowHoverVertical
    }),
    valueBlur: buttonBoxShadowHoverBlur,
    setValueBlur: buttonBoxShadowHoverBlur => setAttributes({
      buttonBoxShadowHoverBlur
    }),
    valueSpread: buttonBoxShadowHoverSpread,
    setValueSpread: buttonBoxShadowHoverSpread => setAttributes({
      buttonBoxShadowHoverSpread
    }),
    valueColor: buttonBoxShadowHoverColor,
    setValueColor: buttonBoxShadowHoverColor => setAttributes({
      buttonBoxShadowHoverColor
    }),
    valueInset: buttonBoxShadowHoverInset,
    setValueInset: buttonBoxShadowHoverInset => setAttributes({
      buttonBoxShadowHoverInset
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_border__WEBPACK_IMPORTED_MODULE_14__["default"], {
    value: uploadBorderHover,
    setValue: buttonBorderHover => setAttributes({
      buttonBorderHover
    })
  }), buttonBorderHover && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Width', 'smart-blocks-pro'),
    units: ['px', 'em', 'rem', 'vw'],
    responsive: !0,
    dimensionTop: buttonBorderHoverWidthTop,
    setDimensionTop: value => setAttributes({
      buttonBorderHoverWidthTop: value
    }),
    dimensionMdTop: buttonBorderHoverWidthMdTop,
    setDimensionMdTop: value => setAttributes({
      buttonBorderHoverWidthMdTop: value
    }),
    dimensionSmTop: buttonBorderHoverWidthSmTop,
    setDimensionSmTop: value => setAttributes({
      buttonBorderHoverWidthSmTop: value
    }),
    dimensionLeft: buttonBorderHoverWidthLeft,
    setDimensionLeft: value => setAttributes({
      buttonBorderHoverWidthLeft: value
    }),
    dimensionMdLeft: buttonBorderHoverWidthMdLeft,
    setDimensionMdLeft: value => setAttributes({
      buttonBorderHoverWidthMdLeft: value
    }),
    dimensionSmLeft: buttonBorderHoverWidthSmLeft,
    setDimensionSmLeft: value => setAttributes({
      buttonBorderHoverWidthSmLeft: value
    }),
    dimensionRight: buttonBorderHoverWidthRight,
    setDimensionRight: value => setAttributes({
      buttonBorderHoverWidthRight: value
    }),
    dimensionMdRight: buttonBorderHoverWidthMdRight,
    setDimensionMdRight: value => setAttributes({
      buttonBorderHoverWidthMdRight: value
    }),
    dimensionSmRight: buttonBorderHoverWidthSmRight,
    setDimensionSmRight: value => setAttributes({
      buttonBorderHoverWidthSmRight: value
    }),
    dimensionBottom: buttonBorderHoverWidthBottom,
    setDimensionBottom: value => setAttributes({
      buttonBorderHoverWidthBottom: value
    }),
    dimensionMdBottom: buttonBorderHoverWidthMdBottom,
    setDimensionMdBottom: value => setAttributes({
      buttonBorderHoverWidthMdBottom: value
    }),
    dimensionSmBottom: buttonBorderHoverWidthSmBottom,
    setDimensionSmBottom: value => setAttributes({
      buttonBorderHoverWidthSmBottom: value
    }),
    unit: buttonBorderHoverWidthUnit,
    setUnit: value => setAttributes({
      buttonBorderHoverWidthUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Color', 'smart-blocks-pro'),
    enableAlpha: true,
    value: buttonBorderHoverColor,
    setValue: buttonBorderHoverColor => setAttributes({
      buttonBorderHoverColor
    })
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'smart-blocks'),
    dimensionTop: buttonBorderRadiusTop,
    setDimensionTop: value => setAttributes({
      buttonBorderRadiusTop: value
    }),
    dimensionLeft: buttonBorderRadiusLeft,
    setDimensionLeft: value => setAttributes({
      buttonBorderRadiusLeft: value
    }),
    dimensionRight: buttonBorderRadiusRight,
    setDimensionRight: value => setAttributes({
      buttonBorderRadiusRight: value
    }),
    dimensionBottom: buttonBorderRadiusBottom,
    setDimensionBottom: value => setAttributes({
      buttonBorderRadiusBottom: value
    }),
    unit: buttonBorderRadiusUnit,
    setUnit: value => setAttributes({
      buttonBorderRadiusUnit: value
    }),
    units: ['px', 'em', '%']
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding', 'smart-blocks'),
    dimensionTop: buttonPaddingTop,
    setDimensionTop: value => setAttributes({
      buttonPaddingTop: value
    }),
    dimensionLeft: buttonPaddingLeft,
    setDimensionLeft: value => setAttributes({
      buttonPaddingLeft: value
    }),
    dimensionRight: buttonPaddingRight,
    setDimensionRight: value => setAttributes({
      buttonPaddingRight: value
    }),
    dimensionBottom: buttonPaddingBottom,
    setDimensionBottom: value => setAttributes({
      buttonPaddingBottom: value
    }),
    unit: buttonPaddingUnit,
    setUnit: value => setAttributes({
      buttonPaddingUnit: value
    }),
    units: ['px', 'em', '%']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Validation Text', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: validationTypographyFamily,
    setValueFamily: value => setAttributes({
      validationTypographyFamily: value
    }),
    valueWeight: validationTypographyWeight,
    setValueWeight: value => setAttributes({
      validationTypographyWeight: value
    }),
    valueTextTransform: validationTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      validationTypographyTextTransform: value
    }),
    valueTextDecoration: validationTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      validationTypographyTextDecoration: value
    }),
    valueFontSizeSm: validationTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      validationTypographyFontSizeSm: value
    }),
    valueFontSizeMd: validationTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      validationTypographyFontSizeMd: value
    }),
    valueFontSize: validationTypographyFontSize,
    setValueFontSize: value => setAttributes({
      validationTypographyFontSize: value
    }),
    valueFontSizeUnit: validationTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      validationTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: validationTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      validationTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: validationTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      validationTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: validationTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      validationTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: validationTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      validationTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: validationTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      validationTypographyLineHeightSm: value
    }),
    valueLineHeightMd: validationTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      validationTypographyLineHeightMd: value
    }),
    valueLineHeight: validationTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      validationTypographyLineHeight: value
    }),
    valueLineHeightUnit: validationTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      validationTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: validationColor,
    setValue: value => setAttributes({
      validationColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_buttongroup__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Alignment', 'smart-blocks-pro'),
    options: [{
      value: 'left',
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        class: "sbi-text-align-left"
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Left', 'smart-blocks-pro')
    }, {
      value: 'center',
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        class: "sbi-text-align-center"
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Center', 'smart-blocks-pro')
    }, {
      value: 'right',
      icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
        class: "sbi-text-align-right"
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Right', 'smart-blocks-pro')
    }],
    value: validationTextAlignment,
    setValue: value => setAttributes({
      validationTextAlignment: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form Title', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: formTitleTypographyFamily,
    setValueFamily: value => setAttributes({
      formTitleTypographyFamily: value
    }),
    valueWeight: formTitleTypographyWeight,
    setValueWeight: value => setAttributes({
      formTitleTypographyWeight: value
    }),
    valueTextTransform: formTitleTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      formTitleTypographyTextTransform: value
    }),
    valueTextDecoration: formTitleTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      formTitleTypographyTextDecoration: value
    }),
    valueFontSizeSm: formTitleTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      formTitleTypographyFontSizeSm: value
    }),
    valueFontSizeMd: formTitleTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      formTitleTypographyFontSizeMd: value
    }),
    valueFontSize: formTitleTypographyFontSize,
    setValueFontSize: value => setAttributes({
      formTitleTypographyFontSize: value
    }),
    valueFontSizeUnit: formTitleTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      formTitleTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: formTitleTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      formTitleTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: formTitleTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      formTitleTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: formTitleTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      formTitleTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: formTitleTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      formTitleTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: formTitleTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      formTitleTypographyLineHeightSm: value
    }),
    valueLineHeightMd: formTitleTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      formTitleTypographyLineHeightMd: value
    }),
    valueLineHeight: formTitleTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      formTitleTypographyLineHeight: value
    }),
    valueLineHeightUnit: formTitleTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      formTitleTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: formTitleColor,
    setValue: value => setAttributes({
      formTitleColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing', 'smart-blocks'),
    dimensionTop: formTitleSpacingTop,
    setDimensionTop: value => setAttributes({
      formTitleSpacingTop: value
    }),
    dimensionLeft: formTitleSpacingLeft,
    setDimensionLeft: value => setAttributes({
      formTitleSpacingLeft: value
    }),
    dimensionRight: formTitleSpacingRight,
    setDimensionRight: value => setAttributes({
      formTitleSpacingRight: value
    }),
    dimensionBottom: formTitleSpacingBottom,
    setDimensionBottom: value => setAttributes({
      formTitleSpacingBottom: value
    }),
    unit: formTitleSpacingUnit,
    setUnit: value => setAttributes({
      formTitleSpacingUnit: value
    }),
    units: ['px', 'em', '%']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Form Description', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: formDescTypographyFamily,
    setValueFamily: value => setAttributes({
      formDescTypographyFamily: value
    }),
    valueWeight: formDescTypographyWeight,
    setValueWeight: value => setAttributes({
      formDescTypographyWeight: value
    }),
    valueTextTransform: formDescTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      formDescTypographyTextTransform: value
    }),
    valueTextDecoration: formDescTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      formDescTypographyTextDecoration: value
    }),
    valueFontSizeSm: formDescTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      formDescTypographyFontSizeSm: value
    }),
    valueFontSizeMd: formDescTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      formDescTypographyFontSizeMd: value
    }),
    valueFontSize: formDescTypographyFontSize,
    setValueFontSize: value => setAttributes({
      formDescTypographyFontSize: value
    }),
    valueFontSizeUnit: formDescTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      formDescTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: formDescTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      formDescTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: formDescTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      formDescTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: formDescTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      formDescTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: formDescTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      formDescTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: formDescTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      formDescTypographyLineHeightSm: value
    }),
    valueLineHeightMd: formDescTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      formDescTypographyLineHeightMd: value
    }),
    valueLineHeight: formDescTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      formDescTypographyLineHeight: value
    }),
    valueLineHeightUnit: formDescTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      formDescTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: formDescColor,
    setValue: value => setAttributes({
      formDescColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_dimension__WEBPACK_IMPORTED_MODULE_11__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spacing', 'smart-blocks'),
    dimensionTop: formDescSpacingTop,
    setDimensionTop: value => setAttributes({
      formDescSpacingTop: value
    }),
    dimensionLeft: formDescSpacingLeft,
    setDimensionLeft: value => setAttributes({
      formDescSpacingLeft: value
    }),
    dimensionRight: formDescSpacingRight,
    setDimensionRight: value => setAttributes({
      formDescSpacingRight: value
    }),
    dimensionBottom: formDescSpacingBottom,
    setDimensionBottom: value => setAttributes({
      formDescSpacingBottom: value
    }),
    unit: formDescSpacingUnit,
    setUnit: value => setAttributes({
      formDescSpacingUnit: value
    }),
    units: ['px', 'em', '%']
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: headingTypographyFamily,
    setValueFamily: value => setAttributes({
      headingTypographyFamily: value
    }),
    valueWeight: headingTypographyWeight,
    setValueWeight: value => setAttributes({
      headingTypographyWeight: value
    }),
    valueTextTransform: headingTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      headingTypographyTextTransform: value
    }),
    valueTextDecoration: headingTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      headingTypographyTextDecoration: value
    }),
    valueFontSizeSm: headingTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      headingTypographyFontSizeSm: value
    }),
    valueFontSizeMd: headingTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      headingTypographyFontSizeMd: value
    }),
    valueFontSize: headingTypographyFontSize,
    setValueFontSize: value => setAttributes({
      headingTypographyFontSize: value
    }),
    valueFontSizeUnit: headingTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      headingTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: headingTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      headingTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: headingTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      headingTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: headingTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      headingTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: headingTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      headingTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: headingTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      headingTypographyLineHeightSm: value
    }),
    valueLineHeightMd: headingTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      headingTypographyLineHeightMd: value
    }),
    valueLineHeight: headingTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      headingTypographyLineHeight: value
    }),
    valueLineHeightUnit: headingTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      headingTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: headingColor,
    setValue: value => setAttributes({
      headingColor: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paragraph', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Typography', 'smart-blocks-pro'),
    valueFamily: paragraphTypographyFamily,
    setValueFamily: value => setAttributes({
      paragraphTypographyFamily: value
    }),
    valueWeight: paragraphTypographyWeight,
    setValueWeight: value => setAttributes({
      paragraphTypographyWeight: value
    }),
    valueTextTransform: paragraphTypographyTextTransform,
    setValueTextTransform: value => setAttributes({
      paragraphTypographyTextTransform: value
    }),
    valueTextDecoration: paragraphTypographyTextDecoration,
    setValueTextDecoration: value => setAttributes({
      paragraphTypographyTextDecoration: value
    }),
    valueFontSizeSm: paragraphTypographyFontSizeSm,
    setValueFontSizeSm: value => setAttributes({
      paragraphTypographyFontSizeSm: value
    }),
    valueFontSizeMd: paragraphTypographyFontSizeMd,
    setValueFontSizeMd: value => setAttributes({
      paragraphTypographyFontSizeMd: value
    }),
    valueFontSize: paragraphTypographyFontSize,
    setValueFontSize: value => setAttributes({
      paragraphTypographyFontSize: value
    }),
    valueFontSizeUnit: paragraphTypographyFontSizeUnit,
    setValueFontSizeUnit: value => setAttributes({
      paragraphTypographyFontSizeUnit: value
    }),
    valueLetterSpacingSm: paragraphTypographyLetterSpacingSm,
    setValueLetterSpacingSm: value => setAttributes({
      paragraphTypographyLetterSpacingSm: value
    }),
    valueLetterSpacingMd: paragraphTypographyLetterSpacingMd,
    setValueLetterSpacingMd: value => setAttributes({
      paragraphTypographyLetterSpacingMd: value
    }),
    valueLetterSpacing: paragraphTypographyLetterSpacing,
    setValueLetterSpacing: value => setAttributes({
      paragraphTypographyLetterSpacing: value
    }),
    valueLetterSpacingUnit: paragraphTypographyLetterSpacingUnit,
    setValueLetterSpacingUnit: value => setAttributes({
      paragraphTypographyLetterSpacingUnit: value
    }),
    valueLineHeightSm: paragraphTypographyLineHeightSm,
    setValueLineHeightSm: value => setAttributes({
      paragraphTypographyLineHeightSm: value
    }),
    valueLineHeightMd: paragraphTypographyLineHeightMd,
    setValueLineHeightMd: value => setAttributes({
      paragraphTypographyLineHeightMd: value
    }),
    valueLineHeight: paragraphTypographyLineHeight,
    setValueLineHeight: value => setAttributes({
      paragraphTypographyLineHeight: value
    }),
    valueLineHeightUnit: paragraphTypographyLineHeightUnit,
    setValueLineHeightUnit: value => setAttributes({
      paragraphTypographyLineHeightUnit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: paragraphColor,
    setValue: value => setAttributes({
      paragraphColor: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Divider', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: dividerColor,
    setValue: value => setAttributes({
      dividerColor: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Star', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_rangeslider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Size', 'hash-form'),
    value: starSize,
    setValue: starSize => setAttributes({
      starSize
    }),
    unit: starSizeUnit,
    setUnit: starSizeUnit => setAttributes({
      starSizeUnit
    }),
    units: ['px', 'em', 'rem'],
    min: 10,
    max: 80,
    useUnit: !0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color', 'smart-blocks'),
    enableAlpha: true,
    value: starColor,
    setValue: value => setAttributes({
      starColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color (Active)', 'smart-blocks'),
    enableAlpha: true,
    value: starColorActive,
    setValue: value => setAttributes({
      starColorActive: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Range Slider', 'hash-form'),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_rangeslider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Height', 'hash-form'),
    value: rangeSliderHeight,
    setValue: rangeSliderHeight => setAttributes({
      rangeSliderHeight
    }),
    unit: rangeSliderHeightUnit,
    setUnit: rangeSliderHeightUnit => setAttributes({
      rangeSliderHeightUnit
    }),
    units: ['px', 'em', 'rem'],
    min: 10,
    max: 80,
    useUnit: !0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_rangeslider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Handle Size', 'hash-form'),
    value: rangeSliderHandleSize,
    setValue: rangeSliderHandleSize => setAttributes({
      rangeSliderHandleSize
    }),
    unit: rangeSliderHandleSizeUnit,
    setUnit: rangeSliderHandleSizeUnit => setAttributes({
      rangeSliderHandleSizeUnit
    }),
    units: ['px', 'em', 'rem'],
    min: 10,
    max: 80,
    useUnit: !0
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Bar Color', 'smart-blocks'),
    enableAlpha: true,
    value: rangeSliderBarColor,
    setValue: value => setAttributes({
      rangeSliderBarColor: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color (Active)', 'smart-blocks'),
    enableAlpha: true,
    value: rangeSliderBarColorActive,
    setValue: value => setAttributes({
      rangeSliderBarColorActive: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_color__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Handle Color', 'smart-blocks'),
    enableAlpha: true,
    value: rangeHandleColor,
    setValue: value => setAttributes({
      rangeHandleColor: value
    })
  })))) || 'advanced' === activeTab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: "wp-block-hash-form"
  }), formId ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_20___default()), {
    key: "hash-form-selector-server-side-renderer",
    block: "hash-form/form-selector",
    attributes: attributes
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
    key: "hash-form-selector-wrap",
    icon: _utils_svgicons__WEBPACK_IMPORTED_MODULE_18__.HashFormIcon,
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hash Form', 'hash-form'),
    className: "hash-form-gutenberg-form-selector-wrap"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_controls_select__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "hash-form-selector-select-control",
    value: formId,
    options: formOptions,
    onChange: selectForm
  }))));
}

/***/ }),

/***/ "./src/blocks/hash-form/index.js":
/*!***************************************!*\
  !*** ./src/blocks/hash-form/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/blocks/hash-form/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/blocks/hash-form/save.js");
/* harmony import */ var _utils_svgicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/svgicons */ "./src/utils/svgicons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */





/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)('hash-form/form-selector', {
  icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_4__.HashFormIcon, null),
  supports: {
    "html": false
  },
  category: "widgets",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Hash Form", 'hash-form'),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Select and display one of your forms.", 'hash-form'),
  keywords: ["form", "contact"],
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/blocks/hash-form/save.js":
/*!**************************************!*\
  !*** ./src/blocks/hash-form/save.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save() {
  return null;
}

/***/ }),

/***/ "./src/controls/advancedradio.js":
/*!***************************************!*\
  !*** ./src/controls/advancedradio.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const AdvancedRadio = ({
  options,
  value,
  setValue,
  label
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field hf-field-radio-advanced"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field-button-wrap"
  }, options.map(function (option, key) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Tooltip, {
      text: option.title || option.value
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${value == option.value ? "active" : ""} hf-button`,
      key: key,
      onClick: () => setValue(option.value)
    }, option.icon ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", {
      className: option.icon
    }) : option.svg ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "hf-option-svg"
    }, option.svg) : option.label));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedRadio);

/***/ }),

/***/ "./src/controls/border.js":
/*!********************************!*\
  !*** ./src/controls/border.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_svgicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/svgicons */ "./src/utils/svgicons.js");




const BorderControl = ({
  label,
  value,
  setValue
}) => {
  const borderStyles = [["solid", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Solid", 'hash-form')], ["dotted", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dotted", 'hash-form')], ["dashed", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Dashed", 'hash-form')], ["double", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Double", 'hash-form')]];
  const onClearHandler = e => {
    setValue('');
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field hf-field-border"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field-button-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'hash-form')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-reset-field",
    onClick: onClearHandler
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hf-clear-field",
    role: "button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_3__.ClearIcon, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field-button-wrap"
  }, borderStyles.map((style, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: style[1],
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: `${value && value == style[0] ? "active" : ""} hf-button`,
    onClick: () => {
      setValue(style[0]);
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `hf-field-border-type hf-field-border-type-${style[0]}`
  }))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderControl);

/***/ }),

/***/ "./src/controls/boxshadow.js":
/*!***********************************!*\
  !*** ./src/controls/boxshadow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color */ "./src/controls/color.js");
/* harmony import */ var _advancedradio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advancedradio */ "./src/controls/advancedradio.js");
/* harmony import */ var _utils_svgicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/svgicons */ "./src/utils/svgicons.js");






const BoxShadowControl = ({
  label,
  valueHorizontal,
  setValueHorizontal,
  valueVertical,
  setValueVertical,
  valueBlur,
  setValueBlur,
  valueSpread,
  setValueSpread,
  valueColor,
  setValueColor,
  valueInset,
  setValueInset
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field hf-field-boxshadow"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Box Shadow", 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-components-dropdown"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'hash-form')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-reset-field",
    onClick: e => {
      setValueHorizontal('');
      setValueVertical('');
      setValueBlur('');
      setValueSpread('');
      setValueColor(undefined);
      setValueInset('');
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hf-clear-field",
    role: "button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_5__.ClearIcon, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    position: "top right",
    contentClassName: "hf-popover-style",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "hf-shadow-setttings hf-setting-button",
      isPrimary: !0,
      onClick: onToggle,
      "aria-expanded": isOpen
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      size: "15",
      icon: "admin-tools"
    })),
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-boxshadow"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('X', 'hash-form'),
      type: "number",
      value: valueHorizontal,
      onChange: e => setValueHorizontal(e)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Y', 'hash-form'),
      type: "number",
      value: valueVertical,
      onChange: e => setValueVertical(e)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blur', 'hash-form'),
      type: "number",
      value: valueBlur,
      onChange: e => setValueBlur(e)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Spread', 'hash-form'),
      type: "number",
      value: valueSpread,
      onChange: e => setValueSpread(e)
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_color__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", 'hash-form'),
      value: valueColor,
      setValue: value => setValueColor(value),
      enableAlpha: true
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_advancedradio__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Inset", 'hash-form'),
      value: valueInset,
      setValue: e => setValueInset(e),
      options: [{
        label: esc_html__("Inset"),
        value: "inset",
        title: esc_html__("Inset")
      }, {
        label: esc_html__("Outset"),
        value: "",
        title: esc_html__("Outset")
      }]
    }))
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoxShadowControl);

/***/ }),

/***/ "./src/controls/buttongroup.js":
/*!*************************************!*\
  !*** ./src/controls/buttongroup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/responsivedropdown */ "./src/utils/responsivedropdown.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





const ButtonGroupControl = ({
  label,
  options,
  steps,
  responsive,
  value,
  setValue,
  valueSm,
  setValueSm,
  valueMd,
  setValueMd
}) => {
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getView
    } = select('hash-form/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hf-field hf-field-buttons ${responsive ? 'hf-responsive' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-label"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "input"
  }, label), responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_2__["default"], null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-fields"
  }, responsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, getView == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "hf-icon-button-group"
  }, options.map(alignment => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      icon: alignment.icon,
      label: alignment.label,
      showTooltip: true,
      isLarge: true,
      isPrimary: alignment.value === valueSm,
      onClick: e => {
        setValueSm(alignment.value === valueSm ? null : alignment.value);
      }
    });
  })), getView == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "hf-icon-button-group"
  }, options.map(alignment => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      icon: alignment.icon,
      label: alignment.label,
      showTooltip: true,
      isLarge: true,
      isPrimary: alignment.value === valueMd,
      onClick: e => {
        setValueMd(alignment.value === valueMd ? null : alignment.value);
      }
    });
  })), getView == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "hf-icon-button-group"
  }, options.map(alignment => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      icon: alignment.icon,
      label: alignment.label,
      showTooltip: true,
      isLarge: true,
      isPrimary: alignment.value === value,
      onClick: e => {
        setValue(alignment.value === value ? null : alignment.value);
      }
    });
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "hf-icon-button-group"
  }, options.map(alignment => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      icon: alignment.icon,
      label: alignment.label,
      showTooltip: true,
      isLarge: true,
      isPrimary: alignment.value === value,
      onClick: () => {
        setValue(alignment.value === value ? null : alignment.value);
      }
    });
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonGroupControl);

/***/ }),

/***/ "./src/controls/color.js":
/*!*******************************!*\
  !*** ./src/controls/color.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_svgicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/svgicons */ "./src/utils/svgicons.js");




const ColorControl = ({
  label,
  value,
  setValue,
  enableAlpha
}) => {
  const onChangeHandler = e => {
    setValue(e.hex);
  };
  const onClearHandler = e => {
    setValue(undefined);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field hf-field-color"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-components-dropdown"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'hash-form')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-reset-field",
    onClick: onClearHandler
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hf-clear-field",
    role: "button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_3__.ClearIcon, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    position: "top right",
    contentClassName: "hf-popover-style",
    renderToggle: function ({
      isOpen,
      onToggle
    }) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
        className: "hf-color-picker-container"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "hf-color-picker",
        isPrimary: !0,
        onClick: onToggle,
        "aria-expanded": isOpen,
        style: value && {
          backgroundColor: value,
          borderColor: value
        }
      })));
    },
    renderContent: function () {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, enableAlpha ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: value ? value : '',
        onChangeComplete: onChangeHandler,
        enableAlpha: true
      }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, {
        color: value ? value : '',
        onChangeComplete: onChangeHandler,
        disableAlpha: true
      }));
    }
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorControl);

/***/ }),

/***/ "./src/controls/dimension.js":
/*!***********************************!*\
  !*** ./src/controls/dimension.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/responsivedropdown */ "./src/utils/responsivedropdown.js");
/* harmony import */ var _utils_svgicons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/svgicons */ "./src/utils/svgicons.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);






const DimensionControl = ({
  min,
  max,
  label,
  responsive,
  units,
  unit,
  setUnit,
  dimensionTop,
  setDimensionTop,
  dimensionLeft,
  setDimensionLeft,
  dimensionRight,
  setDimensionRight,
  dimensionBottom,
  setDimensionBottom,
  dimensionMdTop,
  setDimensionMdTop,
  dimensionSmTop,
  setDimensionSmTop,
  dimensionMdLeft,
  setDimensionMdLeft,
  dimensionSmLeft,
  setDimensionSmLeft,
  dimensionMdRight,
  setDimensionMdRight,
  dimensionSmRight,
  setDimensionSmRight,
  dimensionMdBottom,
  setDimensionMdBottom,
  dimensionSmBottom,
  setDimensionSmBottom
}) => {
  const [lock, setLock] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const sides = ["Top", "Right", "Bottom", "Left"];
  const allUnits = units ? units : ["px", "em", "%"];
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getView
    } = select('hash-form/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  }, []);
  const callFunctionByName = (name, value) => {
    if (responsive) {
      switch (name) {
        case 'setDimensionTop':
          return setDimensionTop(value);
        case 'setDimensionLeft':
          return setDimensionLeft(value);
        case 'setDimensionRight':
          return setDimensionRight(value);
        case 'setDimensionBottom':
          return setDimensionBottom(value);
        case 'setDimensionMdTop':
          return setDimensionMdTop(value);
        case 'setDimensionMdLeft':
          return setDimensionMdLeft(value);
        case 'setDimensionMdRight':
          return setDimensionMdRight(value);
        case 'setDimensionMdBottom':
          return setDimensionMdBottom(value);
        case 'setDimensionSmTop':
          return setDimensionSmTop(value);
        case 'setDimensionSmLeft':
          return setDimensionSmLeft(value);
        case 'setDimensionSmRight':
          return setDimensionSmRight(value);
        case 'setDimensionSmBottom':
          return setDimensionSmBottom(value);
        default:
          console.error(`Function ${name} not found.`);
      }
    } else {
      switch (name) {
        case 'setDimensionTop':
          return setDimensionTop(value);
        case 'setDimensionLeft':
          return setDimensionLeft(value);
        case 'setDimensionRight':
          return setDimensionRight(value);
        case 'setDimensionBottom':
          return setDimensionBottom(value);
        default:
          console.error(`Function ${name} not found.`);
      }
    }
  };
  const getDimensionValue = (name, value) => {
    if (responsive) {
      switch (name) {
        case 'dimensionTop':
          return dimensionTop;
        case 'dimensionLeft':
          return dimensionLeft;
        case 'dimensionRight':
          return dimensionRight;
        case 'dimensionBottom':
          return dimensionBottom;
        case 'dimensionMdTop':
          return dimensionMdTop;
        case 'dimensionMdLeft':
          return dimensionMdLeft;
        case 'dimensionMdRight':
          return dimensionMdRight;
        case 'dimensionMdBottom':
          return dimensionMdBottom;
        case 'dimensionSmTop':
          return dimensionSmTop;
        case 'dimensionSmLeft':
          return dimensionSmLeft;
        case 'dimensionSmRight':
          return dimensionSmRight;
        case 'dimensionSmBottom':
          return dimensionSmBottom;
        default:
          console.error(`Value of ${name} not found.`);
      }
    } else {
      switch (name) {
        case 'dimensionTop':
          return dimensionTop;
        case 'dimensionLeft':
          return dimensionLeft;
        case 'dimensionRight':
          return dimensionRight;
        case 'dimensionBottom':
          return dimensionBottom;
        default:
          console.error(`Value of ${name} not found.`);
      }
    }
  };
  const calcMinVal = () => {
    let ret;
    switch (unit) {
      case 'em':
        ret = 0;
        break;
      case 'vh':
        ret = 0;
        break;
      case 'vw':
        ret = 0;
        break;
      case '%':
        ret = 0;
        break;
      default:
        ret = min;
        break;
    }
    return ret;
  };
  const calcMaxVal = () => {
    let ret;
    switch (unit) {
      case 'em':
        ret = 10;
        break;
      case 'vh':
        ret = 100;
        break;
      case 'vw':
        ret = 100;
        break;
      case '%':
        ret = 100;
        break;
      default:
        ret = max;
        break;
    }
    return ret;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hf-field hf-field-dimension ${responsive ? 'hf-responsive' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-label"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "input"
  }, label), responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_2__["default"], null), responsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-unit-btn-group"
  }, allUnits.map((unt, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${unit === unt ? "active" : ""}`,
      value: unt,
      onClick: e => {
        setUnit(e.target.value);
        sides.map((sde, index) => {
          callFunctionByName(`setDimension${sde}`, '');
          callFunctionByName(`setDimensionMd${sde}`, '');
          callFunctionByName(`setDimensionSm${sde}`, '');
        });
      }
    }, unt);
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-unit-btn-group"
  }, allUnits.map((unt, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${unit === unt ? "active" : ""}`,
      value: unt,
      onClick: e => {
        setUnit(e.target.value);
        sides.map((sde, index) => {
          callFunctionByName(`setDimension${sde}`, '');
        });
      }
    }, unt);
  })))), responsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-fields"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-dimension-input-group hasLock"
  }, getView == 'Desktop' && sides.map((side, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      min: calcMinVal(),
      max: calcMaxVal(),
      key: index,
      onChange: e => {
        lock ? sides.map((sde, index) => {
          callFunctionByName(`setDimension${sde}`, e.target.value);
        }) : callFunctionByName(`setDimension${side}`, e.target.value);
      },
      value: getDimensionValue(`dimension${side}`)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, side));
  }), getView == 'Tablet' && sides.map((side, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      min: calcMinVal(),
      max: calcMaxVal(),
      key: index,
      onChange: e => {
        lock ? sides.map((sde, index) => {
          callFunctionByName(`setDimensionMd${sde}`, e.target.value);
        }) : callFunctionByName(`setDimensionMd${side}`, e.target.value);
      },
      value: getDimensionValue(`dimensionMd${side}`)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, side));
  }), getView == 'Mobile' && sides.map((side, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      min: calcMinVal(),
      max: calcMaxVal(),
      key: index,
      onChange: e => {
        lock ? sides.map((sde, index) => {
          callFunctionByName(`setDimensionSm${sde}`, e.target.value);
        }) : callFunctionByName(`setDimensionSm${side}`, e.target.value);
      },
      value: getDimensionValue(`dimensionSm${side}`)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, side));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: (lock ? "active " : "") + "hf-button",
    onClick: function () {
      return setLock(!lock);
    }
  }, lock ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-admin-links"
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-editor-unlink"
  }))))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-fields"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-dimension-input-group hasLock"
  }, sides.map((side, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      min: calcMinVal(),
      max: calcMaxVal(),
      key: index,
      onChange: e => {
        lock ? sides.map((sde, index) => {
          callFunctionByName(`setDimension${sde}`, e.target.value);
        }) : callFunctionByName(`setDimension${side}`, e.target.value);
      },
      value: getDimensionValue(`dimension${side}`)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, side));
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: (lock ? "active " : "") + "hf-button",
    onClick: function () {
      return setLock(!lock);
    }
  }, lock ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-admin-links"
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "dashicons dashicons-editor-unlink"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DimensionControl);

/***/ }),

/***/ "./src/controls/rangeslider.js":
/*!*************************************!*\
  !*** ./src/controls/rangeslider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/responsivedropdown */ "./src/utils/responsivedropdown.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);




const RangeSliderControl = ({
  label,
  min,
  max,
  steps,
  useUnit,
  responsive,
  value,
  setValue,
  valueSm,
  setValueSm,
  valueMd,
  setValueMd,
  units,
  unit,
  setUnit
}) => {
  const allUnits = units ? units : ["px", "em", "%"];
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const {
      getView
    } = select('hash-form/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  }, []);
  const calcMinVal = () => {
    let ret;
    switch (unit) {
      case 'em':
        ret = 0;
        break;
      case 'vh':
        ret = 0;
        break;
      case 'vw':
        ret = 0;
        break;
      case '%':
        ret = 0;
        break;
      default:
        ret = min;
        break;
    }
    return ret;
  };
  const calcMaxVal = () => {
    let ret;
    switch (unit) {
      case 'em':
        ret = 10;
        break;
      case 'vh':
        ret = 100;
        break;
      case 'vw':
        ret = 100;
        break;
      case '%':
        ret = 100;
        break;
      default:
        ret = max;
        break;
    }
    return ret;
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hf-field hf-field-range ${responsive ? 'hf-responsive' : ''}`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-label"
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "input"
  }, label), responsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_2__["default"], null), useUnit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "hf-unit-btn-group"
  }, allUnits.map((unt, index) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${unit === unt ? "active" : ""}`,
      value: unt,
      onClick: e => {
        setUnit(e.target.value);
        setValue('');
        responsive && setValueSm('');
        responsive && setValueMd('');
      }
    }, unt);
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-fields"
  }, responsive ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, getView == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-range"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "range",
    min: calcMinVal(),
    max: calcMaxVal(),
    value: valueSm,
    step: steps ? steps : 1,
    onChange: e => {
      setValueSm(e.target.value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    step: steps ? steps : 1,
    onChange: e => {
      setValueSm(e.target.value);
    },
    value: valueSm
  })), getView == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-range"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "range",
    min: calcMinVal(),
    max: calcMaxVal(),
    value: valueMd,
    step: steps ? steps : 1,
    onChange: e => {
      setValueMd(e.target.value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    step: steps ? steps : 1,
    onChange: e => {
      setValueMd(e.target.value);
    },
    value: valueMd
  })), getView == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-range"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "range",
    min: calcMinVal(),
    max: calcMaxVal(),
    value: value,
    step: steps ? steps : 1,
    onChange: e => {
      setValue(e.target.value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    step: steps ? steps : 1,
    onChange: e => {
      setValue(e.target.value);
    },
    value: value
  }))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-input-range"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "range",
    min: calcMinVal(),
    max: calcMaxVal(),
    value: value,
    step: steps ? steps : 1,
    onChange: e => {
      setValue(e.target.value);
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "number",
    step: steps ? steps : 1,
    onChange: e => {
      setValue(e.target.value);
    },
    value: value
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RangeSliderControl);

/***/ }),

/***/ "./src/controls/select.js":
/*!********************************!*\
  !*** ./src/controls/select.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


const SelectControl = ({
  label,
  options,
  value,
  onChange,
  inline = !0
}) => {
  const onChangeHandler = e => {
    onChange(e.target.value);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `hf-field ${inline ? 'hf-field-select hf-display-inline' : ''}`
  }, label && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: `${inline ? '' : 'hf-label'}`
  }, label), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "hf-input-fields"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "hf-popup-select"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: value,
    onChange: onChangeHandler
  }, options && options.map((obj, i) => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: obj.value,
      key: obj.value
    }, obj.label);
  }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectControl);

/***/ }),

/***/ "./src/controls/toggle.js":
/*!********************************!*\
  !*** ./src/controls/toggle.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


const ToggleControl = ({
  label,
  checked,
  onChange
}) => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: label,
    checked: checked,
    onChange: onChange
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleControl);

/***/ }),

/***/ "./src/controls/typography.js":
/*!************************************!*\
  !*** ./src/controls/typography.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_googlefonts_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/googlefonts.json */ "./src/utils/googlefonts.json");
/* harmony import */ var _utils_svgicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/svgicons */ "./src/utils/svgicons.js");
/* harmony import */ var _utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/responsivedropdown */ "./src/utils/responsivedropdown.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");









const TypographyControl = ({
  label,
  valueFamily,
  setValueFamily,
  valueWeight,
  setValueWeight,
  valueTextTransform,
  setValueTextTransform,
  valueTextDecoration,
  setValueTextDecoration,
  valueFontSize,
  setValueFontSize,
  valueFontSizeMd,
  setValueFontSizeMd,
  valueFontSizeSm,
  setValueFontSizeSm,
  valueFontSizeUnit,
  setValueFontSizeUnit,
  valueLetterSpacing,
  setValueLetterSpacing,
  valueLetterSpacingMd,
  setValueLetterSpacingMd,
  valueLetterSpacingSm,
  setValueLetterSpacingSm,
  valueLetterSpacingUnit,
  setValueLetterSpacingUnit,
  valueLineHeight,
  setValueLineHeight,
  valueLineHeightMd,
  setValueLineHeightMd,
  valueLineHeightSm,
  setValueLineHeightSm,
  valueLineHeightUnit,
  setValueLineHeightUnit
}) => {
  const [allWeights, setAllWeights] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(_utils_googlefonts_json__WEBPACK_IMPORTED_MODULE_3__.filter(font => font.family === (valueFamily ? valueFamily : 'inherit'))[0].variants);
  const calcMinValFontSize = () => {
    var min = 0;
    let ret;
    switch (valueFontSizeUnit) {
      case 'em':
        ret = 0;
        break;
      case '%':
        ret = 0;
        break;
      case 'rem':
        ret = 0;
        break;
      default:
        ret = min;
        break;
    }
    return ret;
  };
  const calcMaxValFontSize = () => {
    var max = 100;
    let ret;
    switch (valueFontSizeUnit) {
      case 'em':
        ret = 10;
        break;
      case '%':
        ret = 100;
        break;
      case 'rem':
        ret = 10;
        break;
      default:
        ret = max;
        break;
    }
    return ret;
  };
  const calcMinValLetterSpacing = () => {
    var min = -10;
    let ret;
    switch (valueLetterSpacingUnit) {
      case 'em':
        ret = -5;
        break;
      case 'rem':
        ret = -5;
        break;
      default:
        ret = min;
        break;
    }
    return ret;
  };
  const calcMaxValLetterSpacing = () => {
    var max = 20;
    let ret;
    switch (valueLetterSpacingUnit) {
      case 'em':
        ret = 5;
        break;
      case 'rem':
        ret = 5;
        break;
      default:
        ret = max;
        break;
    }
    return ret;
  };
  const calcMinValLineHeight = () => {
    var min = 0;
    let ret;
    switch (valueLineHeightUnit) {
      case 'em':
        ret = 0;
        break;
      case 'rem':
        ret = 0;
        break;
      default:
        ret = min;
        break;
    }
    return ret;
  };
  const calcMaxValLineHeight = () => {
    var max = 100;
    let ret;
    switch (valueLineHeightUnit) {
      case 'em':
        ret = 5;
        break;
      case 'rem':
        ret = 5;
        break;
      default:
        ret = max;
        break;
    }
    return ret;
  };
  const onClearHandler = e => {
    setValueFamily('inherit');
    setValueWeight('inherit');
    setValueTextTransform('inherit');
    setValueTextDecoration('inherit');
    setValueFontSize('');
    setValueFontSizeMd('');
    setValueFontSizeSm('');
    setValueFontSizeUnit('px');
    setValueLetterSpacing('');
    setValueLetterSpacingMd('');
    setValueLetterSpacingSm('');
    setValueLetterSpacingUnit('px');
    setValueLineHeight('');
    setValueLineHeightMd('');
    setValueLineHeightSm('');
    setValueLineHeightUnit('px');
  };
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => {
    const {
      getView
    } = select('hash-form/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  }, []);
  var allFontList = [];
  _utils_googlefonts_json__WEBPACK_IMPORTED_MODULE_3__ && _utils_googlefonts_json__WEBPACK_IMPORTED_MODULE_3__.map((font, index) => {
    allFontList.push({
      label: font.family != 'inherit' ? font.family : 'Default',
      value: font.family
    });
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field hf-field-typography hf-display-inline"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, label ? label : esc_html__("Typography", 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-components-dropdown"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Clear', 'hash-form')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-reset-field",
    onClick: onClearHandler
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "hf-clear-field",
    role: "button"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_svgicons__WEBPACK_IMPORTED_MODULE_4__.ClearIcon, null)))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dropdown, {
    position: "top right",
    contentClassName: "hf-popover-style",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "hf-typo-setttings hf-setting-button",
      isPrimary: !0,
      onClick: onToggle,
      "aria-expanded": isOpen
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Dashicon, {
      size: "15",
      icon: "admin-tools"
    })),
    renderContent: () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field-typography-options"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-field-select hf-display-inline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Font Family", 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-fields"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-popup-select"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(react_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
      value: allFontList.find(option => option.value == valueFamily),
      onChange: value => {
        const fontFamilyValue = value.value;
        setValueFamily(fontFamilyValue);
        setAllWeights(_utils_googlefonts_json__WEBPACK_IMPORTED_MODULE_3__.filter(font => font.family === fontFamilyValue)[0].variants);
        setValueWeight('400');
      },
      options: allFontList,
      isMulti: !1,
      className: "hf-select-container",
      classNamePrefix: "hf-select"
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-field-select hf-display-inline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Weight/Style", 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-fields"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-popup-select"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      value: valueWeight,
      onChange: e => setValueWeight(e.target.value)
    }, !(valueFamily && valueFamily != 'inherit') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "inherit"
    }, "Default"), Object.keys(allWeights).sort().map(key => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: key
      }, allWeights[key]);
    }))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-field-select hf-display-inline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Transform', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-fields"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-popup-select"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      value: valueTextTransform,
      onChange: e => setValueTextTransform(e.target.value)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "inherit"
    }, "Default"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "none"
    }, "None"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "uppercase"
    }, "Uppercase"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "lowercase"
    }, "Lowercase"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "capitalize"
    }, "Capitalize"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-field-select hf-display-inline"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Decoration', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-fields"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-popup-select"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      value: valueTextDecoration,
      onChange: e => setValueTextDecoration(e.target.value)
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "inherit"
    }, "Default"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "none"
    }, "None"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "underline"
    }, "Underline"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "line-through"
    }, "Line Through"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
      value: "overline"
    }, "Overline"))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-field-range hf-responsive"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "hf-label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: "input"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-unit-btn-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueFontSizeUnit === 'px' ? "active" : ""}`,
      onClick: () => {
        setValueFontSize('');
        setValueFontSizeMd('');
        setValueFontSizeSm('');
        setValueFontSizeUnit('px');
      }
    }, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueFontSizeUnit === 'em' ? "active" : ""}`,
      onClick: () => {
        setValueFontSize('');
        setValueFontSizeMd('');
        setValueFontSizeSm('');
        setValueFontSizeUnit('em');
      }
    }, "em"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueFontSizeUnit === 'rem' ? "active" : ""}`,
      onClick: () => {
        setValueFontSize('');
        setValueFontSizeMd('');
        setValueFontSizeSm('');
        setValueFontSizeUnit('rem');
      }
    }, "rem"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueFontSizeUnit === '%' ? "active" : ""}`,
      onClick: e => {
        setValueFontSize('');
        setValueFontSizeMd('');
        setValueFontSizeSm('');
        setValueFontSizeUnit('%');
      }
    }, "%"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-fields"
    }, getView == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValFontSize(),
      max: calcMaxValFontSize(),
      step: "1",
      value: valueFontSize,
      onChange: e => setValueFontSize(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: "1",
      value: valueFontSize,
      onChange: e => setValueFontSize(e.target.value)
    })), getView == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValFontSize(),
      max: calcMaxValFontSize(),
      step: "1",
      value: valueFontSizeMd,
      onChange: e => setValueFontSizeMd(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: "1",
      value: valueFontSizeMd,
      onChange: e => setValueFontSizeMd(e.target.value)
    })), getView == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValFontSize(),
      max: calcMaxValFontSize(),
      step: "1",
      value: valueFontSizeSm,
      onChange: e => setValueFontSizeSm(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: "1",
      value: valueFontSizeSm,
      onChange: e => setValueFontSizeSm(e.target.value)
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-field-range hf-responsive"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "hf-label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: "input"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Letter Spacing', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-unit-btn-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueLetterSpacingUnit === 'px' ? "active" : ""}`,
      onClick: () => {
        setValueLetterSpacing('');
        setValueLetterSpacingMd('');
        setValueLetterSpacingSm('');
        setValueLetterSpacingUnit('px');
      }
    }, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueLetterSpacingUnit === 'em' ? "active" : ""}`,
      onClick: () => {
        setValueLetterSpacing('');
        setValueLetterSpacingMd('');
        setValueLetterSpacingSm('');
        setValueLetterSpacingUnit('em');
      }
    }, "em"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueLetterSpacingUnit === 'rem' ? "active" : ""}`,
      onClick: () => {
        setValueLetterSpacing('');
        setValueLetterSpacingMd('');
        setValueLetterSpacingSm('');
        setValueLetterSpacingUnit('rem');
      }
    }, "rem"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-fields"
    }, getView == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValLetterSpacing(),
      max: calcMaxValLetterSpacing(),
      step: valueLetterSpacingUnit == 'px' ? 1 : 0.1,
      value: valueLetterSpacing,
      onChange: e => setValueLetterSpacing(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: valueLetterSpacingUnit == 'px' ? 1 : 0.1,
      value: valueLetterSpacing,
      onChange: e => setValueLetterSpacing(e.target.value)
    })), getView == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValLetterSpacing(),
      max: calcMaxValLetterSpacing(),
      step: valueLetterSpacingUnit == 'px' ? 1 : 0.1,
      value: valueLetterSpacingMd,
      onChange: e => setValuesLetterSpacingMd(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: valueLetterSpacingUnit == 'px' ? 1 : 0.1,
      value: valueLetterSpacingMd,
      onChange: e => setValuesLetterSpacingMd(e.target.value)
    })), getView == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValLetterSpacing(),
      max: calcMaxValLetterSpacing(),
      step: valueLetterSpacingUnit == 'px' ? 1 : 0.1,
      value: valueLetterSpacingSm,
      onChange: e => setValuesLetterSpacingSm(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: valueLetterSpacingUnit == 'px' ? 1 : 0.1,
      value: valueLetterSpacingSm,
      onChange: e => setValuesLetterSpacingSm(e.target.value)
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-field hf-field-range hf-responsive"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "hf-label"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      for: "input"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height', 'hash-form')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_utils_responsivedropdown__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-unit-btn-group"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueLineHeightUnit === 'px' ? "active" : ""}`,
      onClick: () => {
        setValueLineHeight('');
        setValueLineHeightMd('');
        setValueLineHeightSm('');
        setValueLineHeightUnit('px');
      }
    }, "px"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueLineHeightUnit === 'em' ? "active" : ""}`,
      onClick: () => {
        setValueLineHeight('');
        setValueLineHeightMd('');
        setValueLineHeightSm('');
        setValueLineHeightUnit('em');
      }
    }, "em"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: `${valueLineHeightUnit === 'rem' ? "active" : ""}`,
      onClick: () => {
        setValueLineHeight('');
        setValueLineHeightMd('');
        setValueLineHeightSm('');
        setValueLineHeightUnit('rem');
      }
    }, "rem"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-fields"
    }, getView == 'Desktop' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValLineHeight(),
      max: calcMaxValLineHeight(),
      step: valueLineHeightUnit == 'px' ? 1 : 0.1,
      value: valueLineHeight,
      onChange: e => setValueLineHeight(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: valueLineHeightUnit == 'px' ? 1 : 0.1,
      value: valueLineHeight,
      onChange: e => setValueLineHeight(e.target.value)
    })), getView == 'Tablet' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValLineHeight(),
      max: calcMaxValLineHeight(),
      step: valueLineHeightUnit == 'px' ? 1 : 0.1,
      value: valueLineHeightMd,
      onChange: e => setValueLineHeightMd(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: valueLineHeightUnit == 'px' ? 1 : 0.1,
      value: valueLineHeightMd,
      onChange: e => setValueLineHeightMd(e.target.value)
    })), getView == 'Mobile' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "hf-input-range"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "range",
      min: calcMinValLineHeight(),
      max: calcMaxValLineHeight(),
      step: valueLineHeightUnit == 'px' ? 1 : 0.1,
      value: valueLineHeightSm,
      onChange: e => setValueLineHeightSm(e.target.value)
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "number",
      step: valueLineHeightUnit == 'px' ? 1 : 0.1,
      value: valueLineHeightSm,
      onChange: e => setValueLineHeightSm(e.target.value)
    })))))
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TypographyControl);

/***/ }),

/***/ "./src/data/index.js":
/*!***************************!*\
  !*** ./src/data/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/**
 * WordPress dependencies
 */

const DEFAULT_STATE = {
  viewType: 'Desktop'
};
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('hash-form/data', {
  reducer(state = DEFAULT_STATE, action) {
    if ('UPDATE_VIEW' === action.type) {
      return {
        viewType: action.viewType
      };
    }
    return state;
  },
  selectors: {
    getView(state) {
      return state.viewType;
    }
  },
  actions: {
    updateView(viewType) {
      return {
        type: 'UPDATE_VIEW',
        viewType
      };
    }
  }
});

/***/ }),

/***/ "./src/utils/googlefontload.js":
/*!*************************************!*\
  !*** ./src/utils/googlefontload.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const GoogleFontLoad = ({
  family,
  weight
}) => {
  const familyweight = weight && weight.length > 0 && weight != 'inherit' ? ':' + weight : null;
  return family && family != 'inherit' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("link", {
    rel: "stylesheet",
    href: `https://fonts.googleapis.com/css?family=${family}${familyweight ? familyweight : ''}`
  }) : '';
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleFontLoad);

/***/ }),

/***/ "./src/utils/googlefonts.json":
/*!************************************!*\
  !*** ./src/utils/googlefonts.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"family":"inherit","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"ABeeZee","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Abel","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Abhaya Libre","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","sinhala":"Sinhala"}},{"family":"Abril Fatface","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Aclonica","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Acme","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Actor","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Adamina","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Advent Pro","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"greek":"Greek","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Aguafina Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Akronim","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Aladin","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Alata","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Alatsi","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Aldrich","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Alef","variants":{"400":"Normal","700":"Bold"},"subsets":{"hebrew":"Hebrew","latin":"Latin"}},{"family":"Alegreya","variants":{"400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Alegreya SC","variants":{"400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Alegreya Sans","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Alegreya Sans SC","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Aleo","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Alex Brush","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Alfa Slab One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Alice","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin"}},{"family":"Alike","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Alike Angular","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Allan","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Allerta","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Allerta Stencil","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Allura","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Almarai","variants":{"300":"Light","400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"arabic":"Arabic"}},{"family":"Almendra","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Almendra Display","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Almendra SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Amarante","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Amaranth","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Amatic SC","variants":{"400":"Normal","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Amethysta","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Amiko","variants":{"400":"Normal","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Amiri","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Amita","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Anaheim","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Andada","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Andika","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Angkor","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Annie Use Your Telescope","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Anonymous Pro","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Antic","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Antic Didone","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Antic Slab","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Anton","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Arapey","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Arbutus","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Arbutus Slab","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Architects Daughter","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Archivo","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Archivo Black","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Archivo Narrow","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Aref Ruqaa","variants":{"400":"Normal","700":"Bold"},"subsets":{"arabic":"Arabic","latin":"Latin"}},{"family":"Arima Madurai","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil","vietnamese":"Vietnamese"}},{"family":"Arimo","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Arizonia","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Armata","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Arsenal","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Artifika","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Arvo","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Arya","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Asap","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Asap Condensed","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Asar","variants":{"400":"Normal"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Asset","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Assistant","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"hebrew":"Hebrew","latin":"Latin"}},{"family":"Astloch","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Asul","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Athiti","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Atma","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"bengali":"Bengali","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Atomic Age","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Aubrey","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Audiowide","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Autour One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Average","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Average Sans","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Averia Gruesa Libre","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Averia Libre","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Averia Sans Libre","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Averia Serif Libre","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"B612","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"B612 Mono","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Bad Script","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin"}},{"family":"Bahiana","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bahianita","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bai Jamjuree","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Baloo 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Baloo Bhai 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Baloo Bhaina 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","oriya":"Oriya","vietnamese":"Vietnamese"}},{"family":"Baloo Chettan 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","malayalam":"Malayalam","vietnamese":"Vietnamese"}},{"family":"Baloo Da 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"bengali":"Bengali","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Baloo Paaji 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"gurmukhi":"Gurmukhi","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Baloo Tamma 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"kannada":"Kannada","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Baloo Tammudu 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","telugu":"Telugu","vietnamese":"Vietnamese"}},{"family":"Baloo Thambi 2","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil","vietnamese":"Vietnamese"}},{"family":"Balsamiq Sans","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Balthazar","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bangers","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Barlow","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Barlow Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Barlow Semi Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Barriecito","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Barrio","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Basic","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Baskervville","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Battambang","variants":{"400":"Normal","700":"Bold"},"subsets":{"khmer":"Khmer"}},{"family":"Baumans","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bayon","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Be Vietnam","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","100italic":"Thin Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bebas Neue","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Belgrano","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bellefair","variants":{"400":"Normal"},"subsets":{"hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Belleza","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bellota","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bellota Text","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"BenchNine","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bentham","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Berkshire Swash","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Beth Ellen","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bevan","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Big Shoulders Display","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Big Shoulders Text","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bigelow Rules","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bigshot One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bilbo","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bilbo Swash Caps","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"BioRhyme","variants":{"200":"Extra Light","300":"Light","400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"BioRhyme Expanded","variants":{"200":"Extra Light","300":"Light","400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Biryani","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bitter","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Black And White Picture","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Black Han Sans","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Black Ops One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Blinker","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bokor","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Bonbon","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Boogaloo","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bowlby One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bowlby One SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Brawler","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Bree Serif","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bubblegum Sans","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bubbler One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Buda","variants":{"300":"Light"},"subsets":{"latin":"Latin"}},{"family":"Buenard","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Bungee","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bungee Hairline","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bungee Inline","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bungee Outline","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Bungee Shade","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Butcherman","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Butterfly Kids","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cabin","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cabin Condensed","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cabin Sketch","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Caesar Dressing","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Cagliostro","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Cairo","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","900":"Ultra Bold"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Caladea","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Calistoga","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Calligraffitti","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Cambay","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cambo","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Candal","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Cantarell","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Cantata One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cantora One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Capriola","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cardo","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Carme","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Carrois Gothic","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Carrois Gothic SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Carter One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Catamaran","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil"}},{"family":"Caudex","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Caveat","variants":{"400":"Normal","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Caveat Brush","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cedarville Cursive","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Ceviche One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Chakra Petch","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Changa","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Changa One","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Chango","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Charm","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Charmonman","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Chathura","variants":{"100":"Thin","300":"Light","400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Chau Philomene One","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Chela One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Chelsea Market","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Chenla","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Cherry Cream Soda","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Cherry Swash","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Chewy","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Chicle","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Chilanka","variants":{"400":"Normal"},"subsets":{"latin":"Latin","malayalam":"Malayalam"}},{"family":"Chivo","variants":{"300":"Light","400":"Normal","700":"Bold","900":"Ultra Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Chonburi","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Cinzel","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cinzel Decorative","variants":{"400":"Normal","700":"Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin"}},{"family":"Clicker Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Coda","variants":{"400":"Normal","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Coda Caption","variants":{"800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Codystar","variants":{"300":"Light","400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Coiny","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil","vietnamese":"Vietnamese"}},{"family":"Combo","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Comfortaa","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Comic Neue","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Coming Soon","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Concert One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Condiment","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Content","variants":{"400":"Normal","700":"Bold"},"subsets":{"khmer":"Khmer"}},{"family":"Contrail One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Convergence","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Cookie","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Copse","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Corben","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cormorant","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cormorant Garamond","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cormorant Infant","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cormorant SC","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cormorant Unicase","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cormorant Upright","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Courgette","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Courier Prime","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cousine","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Coustard","variants":{"400":"Normal","900":"Ultra Bold"},"subsets":{"latin":"Latin"}},{"family":"Covered By Your Grace","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Crafty Girls","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Creepster","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Crete Round","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Crimson Pro","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Crimson Text","variants":{"400":"Normal","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Croissant One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Crushed","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Cuprum","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Cute Font","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Cutive","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Cutive Mono","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"DM Mono","variants":{"300":"Light","400":"Normal","500":"Medium","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"DM Sans","variants":{"400":"Normal","500":"Medium","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"DM Serif Display","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"DM Serif Text","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Damion","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Dancing Script","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Dangrek","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Darker Grotesque","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"David Libre","variants":{"400":"Normal","500":"Medium","700":"Bold"},"subsets":{"hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Dawning of a New Day","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Days One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Dekko","variants":{"400":"Normal"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Delius","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Delius Swash Caps","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Delius Unicase","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Della Respira","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Denk One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Devonshire","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Dhurjati","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Didact Gothic","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Diplomata","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Diplomata SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Do Hyeon","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Dokdo","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Domine","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Donegal One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Doppio One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Dorsa","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Dosis","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Dr Sugiyama","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Duru Sans","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Dynalight","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"EB Garamond","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Eagle Lake","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"East Sea Dokdo","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Eater","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Economica","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Eczar","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"El Messiri","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"arabic":"Arabic","cyrillic":"Cyrillic","latin":"Latin"}},{"family":"Electrolize","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Elsie","variants":{"400":"Normal","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Elsie Swash Caps","variants":{"400":"Normal","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Emblema One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Emilys Candy","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Encode Sans","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Encode Sans Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Encode Sans Expanded","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Encode Sans Semi Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Encode Sans Semi Expanded","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Engagement","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Englebert","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Enriqueta","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Epilogue","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Erica One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Esteban","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Euphoria Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ewert","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Exo","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Exo 2","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Expletus Sans","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Fahkwang","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Fanwood Text","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Farro","variants":{"300":"Light","400":"Normal","500":"Medium","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Farsan","variants":{"400":"Normal"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Fascinate","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Fascinate Inline","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Faster One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Fasthand","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Fauna One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Faustina","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Federant","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Federo","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Felipa","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fenix","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Finger Paint","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Fira Code","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fira Mono","variants":{"400":"Normal","500":"Medium","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fira Sans","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Fira Sans Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Fira Sans Extra Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Fjalla One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fjord One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Flamenco","variants":{"300":"Light","400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Flavors","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fondamento","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fontdiner Swanky","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Forum","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Francois One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Frank Ruhl Libre","variants":{"300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Freckle Face","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fredericka the Great","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fredoka One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Freehand","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Fresca","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Frijole","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Fruktur","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Fugaz One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"GFS Didot","variants":{"400":"Normal"},"subsets":{"greek":"Greek"}},{"family":"GFS Neohellenic","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"greek":"Greek"}},{"family":"Gabriela","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin"}},{"family":"Gaegu","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Gafata","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Galada","variants":{"400":"Normal"},"subsets":{"bengali":"Bengali","latin":"Latin"}},{"family":"Galdeano","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Galindo","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Gamja Flower","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Gayathri","variants":{"100":"Thin","400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","malayalam":"Malayalam"}},{"family":"Gelasio","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Gentium Basic","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Gentium Book Basic","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Geo","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Geostar","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Geostar Fill","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Germania One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Gidugu","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Gilda Display","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Girassol","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Give You Glory","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Glass Antiqua","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Glegoo","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Gloria Hallelujah","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Goblin One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Gochi Hand","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Gorditas","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Gothic A1","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Gotu","variants":{"400":"Normal"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Goudy Bookletter 1911","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Graduate","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Grand Hotel","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Gravitas One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Great Vibes","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Grenze","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Grenze Gotisch","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Griffy","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Gruppo","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Gudea","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Gugi","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Gupter","variants":{"400":"Normal","500":"Medium","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Gurajada","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Habibi","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Halant","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Hammersmith One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Hanalei","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Hanalei Fill","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Handlee","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Hanuman","variants":{"400":"Normal","700":"Bold"},"subsets":{"khmer":"Khmer"}},{"family":"Happy Monkey","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Harmattan","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Headland One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Heebo","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"hebrew":"Hebrew","latin":"Latin"}},{"family":"Henny Penny","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Hepta Slab","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Herr Von Muellerhoff","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Hi Melody","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Hind","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Hind Guntur","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","telugu":"Telugu"}},{"family":"Hind Madurai","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil"}},{"family":"Hind Siliguri","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"bengali":"Bengali","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Hind Vadodara","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Holtwood One SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Homemade Apple","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Homenaje","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"IBM Plex Mono","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"IBM Plex Sans","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"IBM Plex Sans Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"IBM Plex Serif","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"IM Fell DW Pica","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"IM Fell DW Pica SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"IM Fell Double Pica","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"IM Fell Double Pica SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"IM Fell English","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"IM Fell English SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"IM Fell French Canon","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"IM Fell French Canon SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"IM Fell Great Primer","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"IM Fell Great Primer SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Ibarra Real Nova","variants":{"400":"Normal","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Iceberg","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Iceland","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Imprima","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Inconsolata","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Inder","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Indie Flower","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Inika","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Inknut Antiqua","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Inria Sans","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Inria Serif","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Inter","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Irish Grover","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Istok Web","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Italiana","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Italianno","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Itim","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Jacques Francois","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Jacques Francois Shadow","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Jaldi","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Jim Nightshade","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Jockey One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Jolly Lodger","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Jomhuria","variants":{"400":"Normal"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Jomolhari","variants":{"400":"Normal"},"subsets":{"latin":"Latin","tibetan":null}},{"family":"Josefin Sans","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Josefin Slab","variants":{"100":"Thin","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","100italic":"Thin Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Jost","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Joti One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Jua","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Judson","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Julee","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Julius Sans One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Junge","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Jura","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Just Another Hand","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Just Me Again Down Here","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"K2D","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Kadwa","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin"}},{"family":"Kalam","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kameron","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Kanit","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Kantumruy","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"khmer":"Khmer"}},{"family":"Karla","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Karma","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Katibeh","variants":{"400":"Normal"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kaushan Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kavivanar","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil"}},{"family":"Kavoon","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kdam Thmor","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Keania One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kelly Slab","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kenia","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Khand","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Khmer","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Khula","variants":{"300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kirang Haerang","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Kite One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Knewave","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"KoHo","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Kodchasan","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Kosugi","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","japanese":null,"latin":"Latin"}},{"family":"Kosugi Maru","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","japanese":null,"latin":"Latin"}},{"family":"Kotta One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Koulen","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Kranky","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Kreon","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kristi","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Krona One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Krub","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Kulim Park","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kumar One","variants":{"400":"Normal"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kumar One Outline","variants":{"400":"Normal"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Kurale","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"La Belle Aurore","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Lacquer","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Laila","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Lakki Reddy","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Lalezar","variants":{"400":"Normal"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lancelot","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Lateef","variants":{"400":"Normal"},"subsets":{"arabic":"Arabic","latin":"Latin"}},{"family":"Lato","variants":{"100":"Thin","300":"Light","400":"Normal","700":"Bold","900":"Ultra Bold","100italic":"Thin Italic","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"League Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Leckerli One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Ledger","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Lekton","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Lemon","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Lemonada","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lexend Deca","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lexend Exa","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lexend Giga","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lexend Mega","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lexend Peta","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lexend Tera","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lexend Zetta","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Libre Barcode 128","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Libre Barcode 128 Text","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Libre Barcode 39","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Libre Barcode 39 Extended","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Libre Barcode 39 Extended Text","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Libre Barcode 39 Text","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Libre Baskerville","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Libre Caslon Display","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Libre Caslon Text","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Libre Franklin","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Life Savers","variants":{"400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Lilita One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Lily Script One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Limelight","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Linden Hill","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Literata","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Liu Jian Mao Cao","variants":{"400":"Normal"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"Livvic","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lobster","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Lobster Two","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Londrina Outline","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Londrina Shadow","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Londrina Sketch","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Londrina Solid","variants":{"100":"Thin","300":"Light","400":"Normal","900":"Ultra Bold"},"subsets":{"latin":"Latin"}},{"family":"Long Cang","variants":{"400":"Normal"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"Lora","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Love Ya Like A Sister","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Loved by the King","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Lovers Quarrel","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Luckiest Guy","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Lusitana","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Lustria","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"M PLUS 1p","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","hebrew":"Hebrew","japanese":null,"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"M PLUS Rounded 1c","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","hebrew":"Hebrew","japanese":null,"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Ma Shan Zheng","variants":{"400":"Normal"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"Macondo","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Macondo Swash Caps","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Mada","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","900":"Ultra Bold"},"subsets":{"arabic":"Arabic","latin":"Latin"}},{"family":"Magra","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Maiden Orange","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Maitree","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Major Mono Display","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Mako","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Mali","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Mallanna","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Mandali","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Manjari","variants":{"100":"Thin","400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","malayalam":"Malayalam"}},{"family":"Manrope","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"cyrillic":"Cyrillic","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mansalva","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Manuale","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Marcellus","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Marcellus SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Marck Script","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Margarine","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Markazi Text","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Marko One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Marmelad","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Martel","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Martel Sans","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Marvel","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Mate","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Mate SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Maven Pro","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"McLaren","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Meddon","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"MedievalSharp","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Medula One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Meera Inimai","variants":{"400":"Normal"},"subsets":{"latin":"Latin","tamil":"Tamil"}},{"family":"Megrim","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Meie Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Merienda","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Merienda One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Merriweather","variants":{"300":"Light","400":"Normal","700":"Bold","900":"Ultra Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Merriweather Sans","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Metal","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Metal Mania","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Metamorphous","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Metrophobic","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Michroma","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Milonga","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Miltonian","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Miltonian Tattoo","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Mina","variants":{"400":"Normal","700":"Bold"},"subsets":{"bengali":"Bengali","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Miniver","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Miriam Libre","variants":{"400":"Normal","700":"Bold"},"subsets":{"hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mirza","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Miss Fajardose","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mitr","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Modak","variants":{"400":"Normal"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Modern Antiqua","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mogra","variants":{"400":"Normal"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Molengo","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Molle","variants":{"400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Monda","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Monofett","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Monoton","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Monsieur La Doulaise","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Montaga","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Montez","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Montserrat","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Montserrat Alternates","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Montserrat Subrayada","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Moul","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Moulpali","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Mountains of Christmas","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Mouse Memoirs","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mr Bedfort","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mr Dafoe","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mr De Haviland","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mrs Saint Delafield","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mrs Sheppards","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mukta","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mukta Mahee","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"gurmukhi":"Gurmukhi","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mukta Malar","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil"}},{"family":"Mukta Vaani","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Mulish","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"MuseoModerno","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Mystery Quest","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"NTR","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Nanum Brush Script","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Nanum Gothic","variants":{"400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Nanum Gothic Coding","variants":{"400":"Normal","700":"Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Nanum Myeongjo","variants":{"400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Nanum Pen Script","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Neucha","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin"}},{"family":"Neuton","variants":{"200":"Extra Light","300":"Light","400":"Normal","700":"Bold","800":"Extra Bold","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"New Rocker","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"News Cycle","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Niconne","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Niramit","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Nixie One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nobile","variants":{"400":"Normal","500":"Medium","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Nokora","variants":{"400":"Normal","700":"Bold"},"subsets":{"khmer":"Khmer"}},{"family":"Norican","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Nosifer","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Notable","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nothing You Could Do","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Noticia Text","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Noto Sans","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","devanagari":"Devanagari","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Noto Sans HK","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"chinese-hongkong":null,"latin":"Latin"}},{"family":"Noto Sans JP","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"japanese":null,"latin":"Latin"}},{"family":"Noto Sans KR","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Noto Sans SC","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"Noto Sans TC","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"chinese-traditional":null,"latin":"Latin"}},{"family":"Noto Serif","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Noto Serif JP","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","900":"Ultra Bold"},"subsets":{"japanese":null,"latin":"Latin"}},{"family":"Noto Serif KR","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","900":"Ultra Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Noto Serif SC","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","900":"Ultra Bold"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"Noto Serif TC","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","900":"Ultra Bold"},"subsets":{"chinese-traditional":null,"latin":"Latin"}},{"family":"Nova Cut","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nova Flat","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nova Mono","variants":{"400":"Normal"},"subsets":{"greek":"Greek","latin":"Latin"}},{"family":"Nova Oval","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nova Round","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nova Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nova Slim","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nova Square","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Numans","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Nunito","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Nunito Sans","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Odibee Sans","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Odor Mean Chey","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Offside","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Old Standard TT","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Oldenburg","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Oleo Script","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Oleo Script Swash Caps","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Open Sans","variants":{"300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Open Sans Condensed","variants":{"300":"Light","700":"Bold","300italic":"Light Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Oranienbaum","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Orbitron","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin"}},{"family":"Oregano","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Orienta","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Original Surfer","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Oswald","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Over the Rainbow","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Overlock","variants":{"400":"Normal","700":"Bold","900":"Ultra Bold","400italic":"Normal Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Overlock SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Overpass","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Overpass Mono","variants":{"300":"Light","400":"Normal","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ovo","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Oxanium","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Oxygen","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Oxygen Mono","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"PT Mono","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"PT Sans","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"PT Sans Caption","variants":{"400":"Normal","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"PT Sans Narrow","variants":{"400":"Normal","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"PT Serif","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"PT Serif Caption","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Pacifico","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Padauk","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","myanmar":"Myanmar"}},{"family":"Palanquin","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Palanquin Dark","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Pangolin","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Paprika","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Parisienne","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Passero One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Passion One","variants":{"400":"Normal","700":"Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Pathway Gothic One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Patrick Hand","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Patrick Hand SC","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Pattaya","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Patua One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Pavanam","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","tamil":"Tamil"}},{"family":"Paytone One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Peddana","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Peralta","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Permanent Marker","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Petit Formal Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Petrona","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Philosopher","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","vietnamese":"Vietnamese"}},{"family":"Piedra","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Pinyon Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Pirata One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Plaster","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Play","variants":{"400":"Normal","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Playball","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Playfair Display","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Playfair Display SC","variants":{"400":"Normal","700":"Bold","900":"Ultra Bold","400italic":"Normal Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Podkova","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Poiret One","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Poller One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Poly","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Pompiere","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Pontano Sans","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Poor Story","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Poppins","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Port Lligat Sans","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Port Lligat Slab","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Pragati Narrow","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Prata","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","vietnamese":"Vietnamese"}},{"family":"Preahvihear","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Press Start 2P","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Pridi","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Princess Sofia","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Prociono","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Prompt","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Prosto One","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Proza Libre","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Public Sans","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Puritan","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Purple Purse","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Quando","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Quantico","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Quattrocento","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Quattrocento Sans","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Questrial","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Quicksand","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Quintessential","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Qwigley","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Racing Sans One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Radley","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rajdhani","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rakkas","variants":{"400":"Normal"},"subsets":{"arabic":"Arabic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Raleway","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Raleway Dots","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ramabhadra","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Ramaraja","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Rambla","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rammetto One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ranchers","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rancho","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Ranga","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rasa","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rationale","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Ravi Prakash","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Recursive","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","vietnamese":"Vietnamese"}},{"family":"Red Hat Display","variants":{"400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Red Hat Text","variants":{"400":"Normal","500":"Medium","700":"Bold","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Red Rose","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Redressed","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Reem Kufi","variants":{"400":"Normal"},"subsets":{"arabic":"Arabic","latin":"Latin"}},{"family":"Reenie Beanie","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Revalia","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rhodium Libre","variants":{"400":"Normal"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ribeye","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ribeye Marrow","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Righteous","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Risque","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Roboto","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold","100italic":"Thin Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Roboto Condensed","variants":{"300":"Light","400":"Normal","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Roboto Mono","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Roboto Slab","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Rochester","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Rock Salt","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Rokkitt","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Romanesco","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ropa Sans","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rosario","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Rosarivo","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rouge Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Rowdies","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Rozha One","variants":{"400":"Normal"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rubik","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rubik Mono One","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ruda","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Rufina","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ruge Boogie","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ruluko","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rum Raisin","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ruslan Display","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Russo One","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ruthie","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Rye","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sacramento","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sahitya","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin"}},{"family":"Sail","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Saira","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Saira Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Saira Extra Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Saira Semi Condensed","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Saira Stencil One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Salsa","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Sanchez","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sancreek","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sansita","variants":{"400":"Normal","700":"Bold","800":"Extra Bold","900":"Ultra Bold","400italic":"Normal Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sarabun","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Sarala","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sarina","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sarpanch","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Satisfy","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Sawarabi Gothic","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","japanese":null,"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Sawarabi Mincho","variants":{"400":"Normal"},"subsets":{"japanese":null,"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Scada","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Scheherazade","variants":{"400":"Normal","700":"Bold"},"subsets":{"arabic":"Arabic","latin":"Latin"}},{"family":"Schoolbell","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Scope One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Seaweed Script","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Secular One","variants":{"400":"Normal"},"subsets":{"hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sedgwick Ave","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Sedgwick Ave Display","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Sen","variants":{"400":"Normal","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sevillana","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Seymour One","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Shadows Into Light","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Shadows Into Light Two","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Shanti","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Share","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Share Tech","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Share Tech Mono","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Shojumaru","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Short Stack","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Shrikhand","variants":{"400":"Normal"},"subsets":{"gujarati":"Gujarati","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Siemreap","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Sigmar One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Signika","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Signika Negative","variants":{"300":"Light","400":"Normal","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Simonetta","variants":{"400":"Normal","900":"Ultra Bold","400italic":"Normal Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Single Day","variants":{"400":"Normal"},"subsets":{"korean":null}},{"family":"Sintony","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sirin Stencil","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Six Caps","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Skranji","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Slabo 13px","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Slabo 27px","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Slackey","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Smokum","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Smythe","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Sniglet","variants":{"400":"Normal","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Snippet","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Snowburst One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sofadi One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Sofia","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Solway","variants":{"300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin"}},{"family":"Song Myung","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Sonsie One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sora","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sorts Mill Goudy","variants":{"400":"Normal","400italic":"Normal Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Source Code Pro","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Source Sans Pro","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Source Serif Pro","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Space Mono","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Spartan","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Special Elite","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Spectral","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Spectral SC","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Spicy Rice","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Spinnaker","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Spirax","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Squada One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Sree Krushnadevaraya","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Sriracha","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Srisakdi","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Staatliches","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Stalemate","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Stalinist One","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Stardos Stencil","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Stint Ultra Condensed","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Stint Ultra Expanded","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Stoke","variants":{"300":"Light","400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Strait","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Stylish","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Sue Ellen Francisco","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Suez One","variants":{"400":"Normal"},"subsets":{"hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sulphur Point","variants":{"300":"Light","400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sumana","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Sunflower","variants":{"300":"Light","500":"Medium","700":"Bold"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Sunshiney","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Supermercado One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Sura","variants":{"400":"Normal","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Suranna","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Suravaram","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Suwannaphum","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Swanky and Moo Moo","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Syncopate","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Tajawal","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold","900":"Ultra Bold"},"subsets":{"arabic":"Arabic","latin":"Latin"}},{"family":"Tangerine","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Taprom","variants":{"400":"Normal"},"subsets":{"khmer":"Khmer"}},{"family":"Tauri","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Taviraj","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Teko","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Telex","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Tenali Ramakrishna","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Tenor Sans","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Text Me One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Thasadith","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"The Girl Next Door","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Tienne","variants":{"400":"Normal","700":"Bold","900":"Ultra Bold"},"subsets":{"latin":"Latin"}},{"family":"Tillana","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Timmana","variants":{"400":"Normal"},"subsets":{"latin":"Latin","telugu":"Telugu"}},{"family":"Tinos","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Titan One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Titillium Web","variants":{"200":"Extra Light","300":"Light","400":"Normal","600":"Semi Bold","700":"Bold","900":"Ultra Bold","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Tomorrow","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Trade Winds","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Trirong","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","thai":"Thai","vietnamese":"Vietnamese"}},{"family":"Trocchi","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Trochut","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic"},"subsets":{"latin":"Latin"}},{"family":"Trykker","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Tulpen One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Turret Road","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","700":"Bold","800":"Extra Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ubuntu","variants":{"300":"Light","400":"Normal","500":"Medium","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ubuntu Condensed","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ubuntu Mono","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","greek-ext":"Greek Extended","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Ultra","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Uncial Antiqua","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Underdog","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Unica One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"UnifrakturCook","variants":{"700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"UnifrakturMaguntia","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Unkempt","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin"}},{"family":"Unlock","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Unna","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"VT323","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Vampiro One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Varela","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Varela Round","variants":{"400":"Normal"},"subsets":{"hebrew":"Hebrew","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Varta","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Vast Shadow","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Vesper Libre","variants":{"400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Viaoda Libre","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Vibes","variants":{"400":"Normal"},"subsets":{"arabic":"Arabic","latin":"Latin"}},{"family":"Vibur","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Vidaloka","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Viga","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Voces","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Volkhov","variants":{"400":"Normal","700":"Bold","400italic":"Normal Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin"}},{"family":"Vollkorn","variants":{"400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","greek":"Greek","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Vollkorn SC","variants":{"400":"Normal","600":"Semi Bold","700":"Bold","900":"Ultra Bold"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Voltaire","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Waiting for the Sunrise","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Wallpoet","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Walter Turncoat","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Warnes","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Wellfleet","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Wendy One","variants":{"400":"Normal"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Wire One","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Work Sans","variants":{"100":"Thin","200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","800":"Extra Bold","900":"Ultra Bold","100italic":"Thin Italic","200italic":"Extra Light Italic","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic","800italic":"Extra Bold Italic","900italic":"Ultra Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Yanone Kaffeesatz","variants":{"200":"Extra Light","300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"cyrillic":"Cyrillic","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Yantramanav","variants":{"100":"Thin","300":"Light","400":"Normal","500":"Medium","700":"Bold","900":"Ultra Bold"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Yatra One","variants":{"400":"Normal"},"subsets":{"devanagari":"Devanagari","latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Yellowtail","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Yeon Sung","variants":{"400":"Normal"},"subsets":{"korean":null,"latin":"Latin"}},{"family":"Yeseva One","variants":{"400":"Normal"},"subsets":{"cyrillic":"Cyrillic","cyrillic-ext":"Cyrillic Extended","latin":"Latin","latin-ext":"Latin Extended","vietnamese":"Vietnamese"}},{"family":"Yesteryear","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Yrsa","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"ZCOOL KuaiLe","variants":{"400":"Normal"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"ZCOOL QingKe HuangYou","variants":{"400":"Normal"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"ZCOOL XiaoWei","variants":{"400":"Normal"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"Zeyada","variants":{"400":"Normal"},"subsets":{"latin":"Latin"}},{"family":"Zhi Mang Xing","variants":{"400":"Normal"},"subsets":{"chinese-simplified":null,"latin":"Latin"}},{"family":"Zilla Slab","variants":{"300":"Light","400":"Normal","500":"Medium","600":"Semi Bold","700":"Bold","300italic":"Light Italic","400italic":"Normal Italic","500italic":"Medium Italic","600italic":"Semi Bold Italic","700italic":"Bold Italic"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}},{"family":"Zilla Slab Highlight","variants":{"400":"Normal","700":"Bold"},"subsets":{"latin":"Latin","latin-ext":"Latin Extended"}}]');

/***/ }),

/***/ "./src/utils/helper.js":
/*!*****************************!*\
  !*** ./src/utils/helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationEffects: () => (/* binding */ animationEffects),
/* harmony export */   boxShadowVars: () => (/* binding */ boxShadowVars),
/* harmony export */   dimensionVars: () => (/* binding */ dimensionVars),
/* harmony export */   easingList: () => (/* binding */ easingList),
/* harmony export */   getCssVar: () => (/* binding */ getCssVar),
/* harmony export */   getElementPositions: () => (/* binding */ getElementPositions),
/* harmony export */   getImageParallaxDat: () => (/* binding */ getImageParallaxDat),
/* harmony export */   getImageSrc: () => (/* binding */ getImageSrc),
/* harmony export */   getParallaxData: () => (/* binding */ getParallaxData),
/* harmony export */   getStyleVars: () => (/* binding */ getStyleVars),
/* harmony export */   hoverAnimations: () => (/* binding */ hoverAnimations),
/* harmony export */   htmlTags: () => (/* binding */ htmlTags),
/* harmony export */   responsiveDimensionVars: () => (/* binding */ responsiveDimensionVars),
/* harmony export */   responsiveSliderVars: () => (/* binding */ responsiveSliderVars),
/* harmony export */   responsiveTypographyVars: () => (/* binding */ responsiveTypographyVars),
/* harmony export */   sbGetParticlesDat: () => (/* binding */ sbGetParticlesDat),
/* harmony export */   showAnimations: () => (/* binding */ showAnimations),
/* harmony export */   showAnimationsAlt: () => (/* binding */ showAnimationsAlt),
/* harmony export */   sliderAnimations: () => (/* binding */ sliderAnimations),
/* harmony export */   textShadowVars: () => (/* binding */ textShadowVars),
/* harmony export */   toMoment: () => (/* binding */ toMoment)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);


const getCssVar = (varname, value, unit = '', def = '0') => {
  var varname = '--sb-' + varname;
  console.log('reslider: var(' + varname + ', ' + def + ');');
  return `
        ${value ? varname + ':' + value + unit + ';' : ''}
    `;
};
const responsiveSliderVars = (varname, valueLg, valueSm, valueMd, unit = '', def = '0') => {
  var lg = '--sb-' + varname + '-lg';
  var md = '--sb-' + varname + '-md';
  var sm = '--sb-' + varname + '-sm';
  console.log('reslider: var(' + lg + ', 0);\n' + 'reslider: var(' + md + ', var(' + lg + ', 0));\n' + 'reslider: var(' + sm + ', var(' + md + ', var(' + lg + ', 0)));');
  return `
        ${valueLg ? '--sb-' + varname + '-lg:' + valueLg + unit + ';' : ''}
        ${valueMd ? '--sb-' + varname + '-md:' + valueMd + unit + ';' : ''}
        ${valueSm ? '--sb-' + varname + '-sm:' + valueSm + unit + ';' : ''}
    `;
};
const easingList = [{
  value: 'linear',
  label: 'Linear'
}, {
  value: 'easeInSine',
  label: 'easeInSine'
}, {
  value: 'easeOutSine',
  label: 'easeOutSine'
}, {
  value: 'easeInOutSine',
  label: 'easeInOutSine'
}, {
  value: 'easeInQuad',
  label: 'easeInQuad'
}, {
  value: 'easeOutQuad',
  label: 'easeOutQuad'
}, {
  value: 'easeInOutQuad',
  label: 'easeInOutQuad'
}, {
  value: 'easeInCubic',
  label: 'easeInCubic'
}, {
  value: 'easeOutCubic',
  label: 'easeOutCubic'
}, {
  value: 'easeInOutCubic',
  label: 'easeInOutCubic'
}, {
  value: 'easeInQuart',
  label: 'easeInQuart'
}, {
  value: 'easeOutQuart',
  label: 'easeOutQuart'
}, {
  value: 'easeInOutQuart',
  label: 'easeInOutQuart'
}, {
  value: 'easeInQuint',
  label: 'easeInQuint'
}, {
  value: 'easeOutQuint',
  label: 'easeOutQuint'
}, {
  value: 'easeInOutQuint',
  label: 'easeInOutQuint'
}, {
  value: 'easeInExpo',
  label: 'easeInExpo'
}, {
  value: 'easeOutExpo',
  label: 'easeOutExpo'
}, {
  value: 'easeInOutExpo',
  label: 'easeInOutExpo'
}, {
  value: 'easeInCirc',
  label: 'easeInCirc'
}, {
  value: 'easeOutCirc',
  label: 'easeOutCirc'
}, {
  value: 'easeInBack',
  label: 'easeInBack'
}, {
  value: 'easeOutBack',
  label: 'easeOutBack'
}, {
  value: 'easeInOutBack',
  label: 'easeInOutBack'
}, {
  value: 'easeInElastic',
  label: 'easeInElastic'
}, {
  value: 'easeOutElastic',
  label: 'easeOutElastic'
}, {
  value: 'easeInOutElastic',
  label: 'easeInOutElastic'
}, {
  value: 'easeInBounce',
  label: 'easeInBounce'
}, {
  value: 'easeOutBounce',
  label: 'easeOutBounce'
}, {
  value: 'easeInOutBounce',
  label: 'easeInOutBounce'
}];
const getParallaxData = attributes => {
  const parallaxDat = `{
        "parallax_effect_type": "${attributes.sbParallaxStyle || ''}"
        ${attributes.sbParallaxStyle == 'mouse-effects' ? `,
            "mouse_type": "${attributes.sbParallaxMouseInteractivityStyl || 'parallax'}",
            ${attributes.sbParallaxMouseInteractivityStyl == 'tilt' ? `
                "tilt_rate": ${attributes.sbParallaxMouseTiltRate || 20},
                "tilt_scale": ${attributes.sbParallaxMouseTiltScale || 1},
                "tilt_glare": ${attributes.sbParallaxMouseTiltGlare || 0},
                "tilt_speed": ${attributes.sbParallaxMouseTiltSpeed || 300},
                "tilt_axis": "${attributes.sbParallaxMouseTiltAxis || ''}"
            ` : `
                "mouse_reverse": ${attributes.sbParallaxMouseReverseDir || false},
                "mouse_initial": ${attributes.sbParallaxMouseBackToInitPos || false},
                "mouse_rate": ${attributes.sbParallaxMouseVelocity || 100}
            `}
        ` : ''}

        ${attributes.sbParallaxStyle == 'scroll-effects' ? `,
            "scroll_opacity": ${attributes.sbParallaxTransparency || false},
            "scroll_opacity_effect": "${attributes.sbParallaxTransparencyDir || 'down'}",
            "scroll_opacity_level": "${attributes.sbParallaxTransparencyOpacity || ''}",
            "scroll_opacity_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxTransparencyViewportFrom || 0}, "end": ${attributes.sbParallaxTransparencyViewportTo || 100}}},
            "scroll_v": ${attributes.sbParallaxVerParallax || false},
            "scroll_v_direction": "${attributes.sbParallaxVerParallaxDir || 'down'}",
            "scroll_v_speed": "${attributes.sbParallaxVerParallaxSpeed || 4}",
            "scroll_v_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxVerParallaxViewportFrom || 0}, "end": ${attributes.sbParallaxVerParallaxViewportTo || 100}}},
            "scroll_h": ${attributes.sbParallaxHorParallax || false},
            "scroll_h_direction": "${attributes.sbParallaxHorParallaxDir || 'down'}",
            "scroll_h_speed": "${attributes.sbParallaxHorParallaxSpeed || 4}",
            "scroll_h_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxHorParallaxViewportFrom || 0}, "end": ${attributes.sbParallaxHorParallaxViewportTo || 100}}},
            "scroll_blur": ${attributes.sbParallaxBlur || false},
            "scroll_blur_effect": "${attributes.sbParallaxBlurDir || 'down'}",
            "scroll_blur_level": "${attributes.sbParallaxBlurLevel || 10}",
            "scroll_blur_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxBlurViewportFrom || 0}, "end": ${attributes.sbParallaxBlurViewportTo || 100}}},
            "scroll_rotate": ${attributes.sbParallaxRotate || false},
            "scroll_rotate_direction": "${attributes.sbParallaxRotateDir || 'down'}",
            "scroll_rotate_speed": ${attributes.sbParallaxRotateSpeed || 3},
            "scroll_rotate_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxRotateViewportFrom || 0}, "end": ${attributes.sbParallaxRotateViewportTo || 100}}},
            "scroll_scale": ${attributes.sbParallaxScale || false},
            "scroll_scale_direction": "${attributes.sbParallaxScaleDir || 'up'}",
            "scroll_scale_speed": ${attributes.sbParallaxScaleSpeed || 3},
            "scroll_scale_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxScaleViewportFrom || 0}, "end": ${attributes.sbParallaxScaleViewportTo || 100}}},
            "scroll_gray": ${attributes.sbParallaxGrayScale || false},
            "scroll_gray_effect": "${attributes.sbParallaxGrayScaleEffect || 'down'}",
            "scroll_gray_level": ${attributes.sbParallaxGrayScaleSpeed || 10},
            "scroll_gray_view": {"unit": "%", "sizes": {"start": ${attributes.sbParallaxGrayScaleViewportFrom || 0}, "end": ${attributes.sbParallaxGrayScaleViewportTo || 100}}},
            "scroll_to_x": "${attributes.sbParallaxXAnchorPoint || 'center'}",
            "scroll_to_y": "${attributes.sbParallaxYAnchorPoint || 'center'}"
        ` : ''}
    }`;
  return parallaxDat;
};
const getImageParallaxDat = groups => {
  const {
    imageEffectParallaxType,
    imageEffectInteractivityStyle,
    imageEffectMouseReverseDir,
    imageEffectMouseBackToInitPos,
    imageEffectMouseVelocity,
    imageEffectMouseTiltRate,
    imageEffectMouseTiltScale,
    imageEffectMouseTiltGlare,
    imageEffectMouseTiltSpeed,
    imageEffectMouseTiltAxis,
    imageEffectScrollTransparency,
    imageEffectScrollTransparencyDir,
    imageEffectScrollTransparencyOpacity,
    imageEffectScrollTransparencyViewportFrom,
    imageEffectScrollTransparencyViewportTo,
    imageEffectScrollVerParallax,
    imageEffectScrollVerParallaxDir,
    imageEffectScrollVerParallaxSpeed,
    imageEffectScrollVerParallaxViewportFrom,
    imageEffectScrollVerParallaxViewportTo,
    imageEffectScrollHorParallax,
    imageEffectScrollHorParallaxDir,
    imageEffectScrollHorParallaxSpeed,
    imageEffectScrollHorParallaxViewportFrom,
    imageEffectScrollHorParallaxViewportTo,
    imageEffectScrollBlur,
    imageEffectScrollBlurDir,
    imageEffectScrollBlurLevel,
    imageEffectScrollBlurViewportFrom,
    imageEffectScrollBlurViewportTo,
    imageEffectScrollRotate,
    imageEffectScrollRotateDir,
    imageEffectScrollRotateSpeed,
    imageEffectScrollRotateViewportFrom,
    imageEffectScrollRotateViewportTo,
    imageEffectScrollScale,
    imageEffectScrollScaleDir,
    imageEffectScrollScaleSpeed,
    imageEffectScrollScaleViewportFrom,
    imageEffectScrollScaleViewportTo,
    imageEffectScrollGrayScale,
    imageEffectScrollGrayScaleEffect,
    imageEffectScrollGrayScaleSpeed,
    imageEffectScrollGrayScaleViewportFrom,
    imageEffectScrollGrayScaleViewportTo,
    imageEffectXAnchorPoint,
    imageEffectYAnchorPoint
  } = groups;
  const parallaxDat = `{
        "parallax_effect_type": "${imageEffectParallaxType || ''}"
        ${imageEffectParallaxType == 'mouse' ? `,
            "mouse_type": "${imageEffectInteractivityStyle || 'parallax'}",
            ${imageEffectInteractivityStyle == 'tilt' ? `
                "tilt_rate": ${imageEffectMouseTiltRate || 20},
                "tilt_scale": ${imageEffectMouseTiltScale || 1},
                "tilt_glare": ${imageEffectMouseTiltGlare || 0},
                "tilt_speed": ${imageEffectMouseTiltSpeed || 300},
                "tilt_axis": "${imageEffectMouseTiltAxis || ''}"
            ` : `
                "mouse_reverse": ${imageEffectMouseReverseDir || false},
                "mouse_initial": ${imageEffectMouseBackToInitPos || false},
                "mouse_rate": ${imageEffectMouseVelocity || 100}
            `}
        ` : ''}

        ${imageEffectParallaxType == 'scroll' ? `,
            "scroll_opacity": ${imageEffectScrollTransparency || false},
            "scroll_opacity_effect": "${imageEffectScrollTransparencyDir || 'down'}",
            "scroll_opacity_level": "${imageEffectScrollTransparencyOpacity || ''}",
            "scroll_opacity_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollTransparencyViewportFrom || 0}, "end": ${imageEffectScrollTransparencyViewportTo || 100}}},
            "scroll_v": ${imageEffectScrollVerParallax || false},
            "scroll_v_direction": "${imageEffectScrollVerParallaxDir || 'down'}",
            "scroll_v_speed": "${imageEffectScrollVerParallaxSpeed || 4}",
            "scroll_v_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollVerParallaxViewportFrom || 0}, "end": ${imageEffectScrollVerParallaxViewportTo || 100}}},
            "scroll_h": ${imageEffectScrollHorParallax || false},
            "scroll_h_direction": "${imageEffectScrollHorParallaxDir || 'down'}",
            "scroll_h_speed": "${imageEffectScrollHorParallaxSpeed || 4}",
            "scroll_h_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollHorParallaxViewportFrom || 0}, "end": ${imageEffectScrollHorParallaxViewportTo || 100}}},
            "scroll_blur": ${imageEffectScrollBlur || false},
            "scroll_blur_effect": "${imageEffectScrollBlurDir || 'down'}",
            "scroll_blur_level": "${imageEffectScrollBlurLevel || 10}",
            "scroll_blur_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollBlurViewportFrom || 0}, "end": ${imageEffectScrollBlurViewportTo || 100}}},
            "scroll_rotate": ${imageEffectScrollRotate || false},
            "scroll_rotate_direction": "${imageEffectScrollRotateDir || 'down'}",
            "scroll_rotate_speed": ${imageEffectScrollRotateSpeed || 3},
            "scroll_rotate_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollRotateViewportFrom || 0}, "end": ${imageEffectScrollRotateViewportTo || 100}}},
            "scroll_scale": ${imageEffectScrollScale || false},
            "scroll_scale_direction": "${imageEffectScrollScaleDir || 'up'}",
            "scroll_scale_speed": ${imageEffectScrollScaleSpeed || 3},
            "scroll_scale_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollScaleViewportFrom || 0}, "end": ${imageEffectScrollScaleViewportTo || 100}}},
            "scroll_gray": ${imageEffectScrollGrayScale || false},
            "scroll_gray_effect": "${imageEffectScrollGrayScaleEffect || 'down'}",
            "scroll_gray_level": ${imageEffectScrollGrayScaleSpeed || 10},
            "scroll_gray_view": {"unit": "%", "sizes": {"start": ${imageEffectScrollGrayScaleViewportFrom || 0}, "end": ${imageEffectScrollGrayScaleViewportTo || 100}}},
            "scroll_to_x": "${imageEffectXAnchorPoint || 'center'}",
            "scroll_to_y": "${imageEffectYAnchorPoint || 'center'}"
        ` : ''}
    }`;
  return parallaxDat;
};
const sbGetParticlesDat = attributes => {
  const {
    sbParticlesEnable,
    sbParticlesLinkColor,
    sbParticlesBallColor,
    sbParticlesNumber,
    sbParticlesLinkWidth,
    sbParticlesLinkDistance,
    sbParticlesCreateLink,
    sbParticlesBallMaxSize,
    sbParticlesAnimationSpeed,
    sbParticlesDisableLinks,
    sbParticlesDisableMouse
  } = attributes;
  const particlesDat = `{
        "link_color": "${sbParticlesLinkColor || '#FFFFFF'}",
        "ball_color": "${sbParticlesBallColor || '#F6F6F6'}",
        "number": ${sbParticlesNumber || 150},
        "link": ${sbParticlesDisableLinks || false},
        "clink": ${sbParticlesCreateLink || 100},
        "linkw": ${sbParticlesLinkWidth || 0.3},
        "size": ${sbParticlesBallMaxSize || 8},
        "speed": ${sbParticlesAnimationSpeed || 20},
        "dlink": ${sbParticlesLinkDistance || 50},
        "dmouse": ${sbParticlesDisableMouse || false}
    }`;
  return particlesDat;
};
const hoverAnimations = [{
  value: '',
  label: 'None'
}, {
  value: 'grow',
  label: 'Grow'
}, {
  value: 'shrink',
  label: 'Shrink'
}, {
  value: 'pulse',
  label: 'Pulse'
}, {
  value: 'pulse-grow',
  label: 'Pulse Grow'
}, {
  value: 'pulse-shrink',
  label: 'Pulse Shrink'
}, {
  value: 'push',
  label: 'Push'
}, {
  value: 'pop',
  label: 'Pop'
}, {
  value: 'bounce-in',
  label: 'Bounce In'
}, {
  value: 'bounce-out',
  label: 'Bounce Out'
}, {
  value: 'rotate',
  label: 'Rotate'
}, {
  value: 'grow-rotate',
  label: 'Grow Rotate'
}, {
  value: 'float',
  label: 'Float'
}, {
  value: 'sink',
  label: 'Sink'
}, {
  value: 'bob',
  label: 'Bob'
}, {
  value: 'hong',
  label: 'Hang'
}, {
  value: 'skew',
  label: 'Skew'
}, {
  value: 'skew-forward',
  label: 'Skew Forward'
}, {
  value: 'skew-backward',
  label: 'Skew Backward'
}, {
  value: 'wobble-vertical',
  label: 'Wobble Vertical'
}, {
  value: 'wobble-horizontal',
  label: 'Wobble Horizontal'
}, {
  value: 'wobble-to-bottom-right',
  label: 'Wobble To Bottom Right'
}, {
  value: 'wobble-to-top-right',
  label: 'Wobble To Top Right'
}, {
  value: 'wobble-top',
  label: 'Wobble Top'
}, {
  value: 'wobble-bottom',
  label: 'Wobble Bottom'
}, {
  value: 'wobble-skew',
  label: 'Wobble Skew'
}, {
  value: 'buzz',
  label: 'Buzz'
}, {
  value: 'buzz-out',
  label: 'Buzz Out'
}];
const htmlTags = [{
  value: 'div',
  label: 'div'
}, {
  value: 'span',
  label: 'span'
}, {
  value: 'p',
  label: 'p'
}, {
  value: 'h1',
  label: 'H1'
}, {
  value: 'h2',
  label: 'H2'
}, {
  value: 'h3',
  label: 'H3'
}, {
  value: 'h4',
  label: 'H4'
}, {
  value: 'h5',
  label: 'H5'
}, {
  value: 'h6',
  label: 'H6'
}];
const animationEffects = [{
  label: 'None',
  value: 'none'
}, {
  label: 'Fading',
  value: [{
    value: 'fadeIn',
    label: 'Fade In'
  }, {
    value: 'fadeInDown',
    label: 'Fade In Down'
  }, {
    value: 'fadeInLeft',
    label: 'Fade In Left'
  }, {
    value: 'fadeInRight',
    label: 'Fade In Right'
  }, {
    value: 'fadeInUp',
    label: 'Fade In Up'
  }]
}, {
  label: 'Zooming',
  value: [{
    value: 'zoomIn',
    label: 'Zoom In'
  }, {
    value: 'zoomInDown',
    label: 'Zoom In Down'
  }, {
    value: 'zoomInLeft',
    label: 'Zoom In Left'
  }, {
    value: 'zoomInRight',
    label: 'Zoom In Right'
  }, {
    value: 'zoomInUp',
    label: 'Zoom In Up'
  }]
}, {
  label: 'Bouncing',
  value: [{
    value: 'bounceIn',
    label: 'Bounce In'
  }, {
    value: 'bounceInDown',
    label: 'Bounce In Down'
  }, {
    value: 'bounceInLeft',
    label: 'Bounce In Left'
  }, {
    value: 'bounceInRight',
    label: 'Bounce In Right'
  }, {
    value: 'bounceInUp',
    label: 'Bounce In Up'
  }]
}, {
  label: 'Sliding',
  value: [{
    value: 'slideInDown',
    label: 'Slide In Down'
  }, {
    value: 'slideInLeft',
    label: 'Slide In Left'
  }, {
    value: 'slideInRight',
    label: 'Slide In Right'
  }, {
    value: 'slideInUp',
    label: 'Slide In Up'
  }]
}, {
  label: 'Rotating',
  value: [{
    value: 'rotateIn',
    label: 'Rotate In'
  }, {
    value: 'rotateInDownLeft',
    label: 'Rotate In Down Left'
  }, {
    value: 'rotateInDownRight',
    label: 'Rotate In Down Right'
  }, {
    value: 'rotateInUpLeft',
    label: 'Rotate In Up Left'
  }, {
    value: 'rotateInUpRight',
    label: 'Rotate In Up Right'
  }]
}, {
  label: 'Attention Seekers',
  value: [{
    value: 'bounce',
    label: 'Bounce'
  }, {
    value: 'flash',
    label: 'Flash'
  }, {
    value: 'pulse',
    label: 'Pulse'
  }, {
    value: 'rubberBand',
    label: 'Rubber Band'
  }, {
    value: 'shake',
    label: 'Shake'
  }, {
    value: 'headShake',
    label: 'Head Shake'
  }, {
    value: 'swing',
    label: 'Swing'
  }, {
    value: 'tada',
    label: 'Tada'
  }, {
    value: 'wobble',
    label: 'Wobble'
  }, {
    value: 'jello',
    label: 'Jello'
  }]
}, {
  label: 'Light Speed',
  value: [{
    value: 'lightSpeedIn',
    label: 'Light Speed In'
  }]
}, {
  label: 'Specials',
  value: [{
    value: 'rollIn',
    label: 'Roll In'
  }]
}];
const toMoment = val => {
  var conversions = {
    'd': 'DD',
    'D': 'ddd',
    'j': 'D',
    'l': 'dddd',
    'N': 'E',
    'S': 'o',
    'w': 'e',
    'z': 'DDD',
    'W': 'W',
    'F': 'MMMM',
    'm': 'MM',
    'M': 'MMM',
    'n': 'M',
    't': '',
    'L': '',
    'o': 'YYYY',
    'Y': 'YYYY',
    'y': 'YY',
    'a': 'a',
    'A': 'A',
    'B': '',
    'g': 'h',
    'G': 'H',
    'h': 'hh',
    'H': 'HH',
    'i': 'mm',
    's': 'ss',
    'u': 'SSS',
    'e': 'zz',
    'I': '',
    'O': '',
    'P': '',
    'T': '',
    'Z': '',
    'c': '',
    'r': '',
    'U': 'X'
  };
  return val && val.replace(/[A-Za-z]+/g, function (match) {
    return conversions[match] || match;
  });
};
const checkDefault = (check, checkDiff = '') => {
  if (checkDiff != '') {
    return !checkDiff || checkDiff.toLowerCase() == 'default' ? 'inherit' : check;
  }
  return !check || check.toLowerCase() == 'default' ? 'inherit' : check;
};
const responsiveTypographyVars = (varname, family, weight, textTransform, textDecoration, fonsSizeSm, fontSizeMd, fontSize, fontSizeUnit, letterSpacingSm, letterSpacingMd, letterSpacing, letterSpacingUnit, lineHeightSm, lineHeightMd, lineHeight, lineHeightUnit) => {
  var lgfs = '--sb-' + varname + '-fs-lg';
  var lgls = '--sb-' + varname + '-ls-lg';
  var lglh = '--sb-' + varname + '-lh-lg';
  console.log('font-size: var(' + lgfs + ', 1em);\n' + 'letter-spacing: var(' + lgls + ', inherit);\n' + 'line-height: var(' + lglh + ', inherit);');
  var mdfs = '--sb-' + varname + '-fs-md';
  var mdls = '--sb-' + varname + '-ls-md';
  var mdlh = '--sb-' + varname + '-lh-md';
  console.log('font-size: var(' + mdfs + ', var(' + lgfs + ', 1em));\n' + 'letter-spacing: var(' + mdls + ', var(' + lgls + ', inherit));\n' + 'line-height: var(' + mdlh + ', var(' + lglh + ', inherit));');
  var smfs = '--sb-' + varname + '-fs-sm';
  var smls = '--sb-' + varname + '-ls-sm';
  var smlh = '--sb-' + varname + '-lh-sm';
  console.log('font-size: var(' + smfs + ', var(' + mdfs + ', var(' + lgfs + ', 1em)));\n' + 'letter-spacing: var(' + smls + ', var(' + mdls + ', var(' + lgls + ', inherit)));\n' + 'line-height: var(' + smlh + ', var(' + mdlh + ', var(' + lglh + ', inherit)));');
  return `${family ? `--sb-${varname}-family: ${checkDefault(family)};` : ''}
        ${weight ? `--sb-${varname}-weight: ${checkDefault(weight.replace(/\D/g, ''), weight)};` : ''}
        ${weight ? `--sb-${varname}-style: ${checkDefault(weight.replace(/\d+/g, ''), weight)};` : ''}
        ${textTransform ? `--sb-${varname}-tt: ${textTransform};` : ''}
        ${textDecoration ? `--sb-${varname}-td: ${textDecoration};` : ''}
        ${fonsSizeSm ? `--sb-${varname}-fs-sm: ${fonsSizeSm + fontSizeUnit};` : ''}
        ${fontSizeMd ? `--sb-${varname}-fs-md: ${fontSizeMd + fontSizeUnit};` : ''}
        ${fontSize ? `--sb-${varname}-fs-lg: ${fontSize + fontSizeUnit};` : ''}
        ${letterSpacingSm ? `--sb-${varname}-ls-sm: ${letterSpacingSm + letterSpacingUnit};` : ''}
        ${letterSpacingMd ? `--sb-${varname}-ls-md: ${letterSpacingMd + letterSpacingUnit};` : ''}
        ${letterSpacing ? `--sb-${varname}-ls-lg: ${letterSpacing + letterSpacingUnit};` : ''}
        ${lineHeightSm ? `--sb-${varname}-lh-sm: ${lineHeightSm + lineHeightUnit};` : ''}
        ${lineHeightMd ? `--sb-${varname}-lh-md: ${lineHeightMd + lineHeightUnit};` : ''}
        ${lineHeight ? `--sb-${varname}-lh-lg: ${lineHeight + lineHeightUnit};` : ''}`;
};
const dimensionVars = (varname, top, right, bottom, left, unit = '') => {
  var lgtop = '--sb-' + varname + '-top';
  var lgright = '--sb-' + varname + '-right';
  var lgbottom = '--sb-' + varname + '-bottom';
  var lgleft = '--sb-' + varname + '-left';
  console.log('dimen-top: var(' + lgtop + ', 0);\n' + 'dimen-right: var(' + lgright + ', 0);\n' + 'dimen-bottom: var(' + lgbottom + ', 0);\n' + 'dimen-left: var(' + lgleft + ', 0);');
  return `${top ? `--sb-${varname}-top: ${top + unit};` : ''}
        ${right ? `--sb-${varname}-right: ${right + unit};` : ''}
        ${bottom ? `--sb-${varname}-bottom: ${bottom + unit};` : ''}
        ${left ? `--sb-${varname}-left: ${left + unit};` : ''}`;
};
const boxShadowVars = (varname, horizontal, vertical, blur, spread, color, inset, unit = '') => {
  console.log('box-shadow: var(--sb-' + varname + '-horizontal) var(--sb-' + varname + '-vertical) var(--sb-' + varname + '-blur) var(--sb-' + varname + '-spread) var(--sb-' + varname + '-color) var(--sb-' + varname + '-inset, );');
  return `${horizontal ? `--sb-${varname}-horizontal: ${horizontal + unit};` : ''}
        ${vertical ? `--sb-${varname}-vertical: ${vertical + unit};` : ''}
        ${blur ? `--sb-${varname}-blur: ${blur + unit};` : ''}
        ${spread ? `--sb-${varname}-spread: ${spread + unit};` : ''}
        ${color ? `--sb-${varname}-color: ${color};` : ''}
        ${inset ? `--sb-${varname}-inset: ${inset};` : ''}
        ${`--sb-${varname}: var(--sb-${varname}-horizontal) var(--sb-${varname}-vertical) var(--sb-${varname}-blur) var(--sb-${varname}-spread) var(--sb-${varname}-color) var(--sb-${varname}-inset, );`}`;
};
const responsiveDimensionVars = (varname, top, right, bottom, left, topSm, rightSm, bottomSm, leftSm, topMd, rightMd, bottomMd, leftMd, unit = '') => {
  var lgtop = '--sb-' + varname + '-top-lg';
  var lgright = '--sb-' + varname + '-right-lg';
  var lgbottom = '--sb-' + varname + '-bottom-lg';
  var lgleft = '--sb-' + varname + '-left-lg';
  console.log('resdimen-top: var(' + lgtop + ', 0);\n' + 'resdimen-right: var(' + lgright + ', 0);\n' + 'resdimen-bottom: var(' + lgbottom + ', 0);\n' + 'resdimen-left: var(' + lgleft + ', 0);');
  var mdtop = '--sb-' + varname + '-top-md';
  var mdright = '--sb-' + varname + '-right-md';
  var mdbottom = '--sb-' + varname + '-bottom-md';
  var mdleft = '--sb-' + varname + '-left-md';
  console.log('resdimen-top: var(' + mdtop + ', var(' + lgtop + ', 0));\n' + 'resdimen-right: var(' + mdright + ', var(' + lgright + ', 0));\n' + 'resdimen-bottom: var(' + mdbottom + ', var(' + lgbottom + ', 0));\n' + 'resdimen-left: var(' + mdleft + ', var(' + lgleft + ', 0));');
  var smtop = '--sb-' + varname + '-top-sm';
  var smright = '--sb-' + varname + '-right-sm';
  var smbottom = '--sb-' + varname + '-bottom-sm';
  var smleft = '--sb-' + varname + '-left-sm';
  console.log('resdimen-top: var(' + smtop + ', var(' + mdtop + ', var(' + lgtop + ', 0)));\n' + 'resdimen-right: var(' + smright + ', var(' + mdright + ', var(' + lgright + ', 0)));\n' + 'resdimen-bottom: var(' + smbottom + ', var(' + mdbottom + ', var(' + lgbottom + ', 0)));\n' + 'resdimen-left: var(' + smleft + ', var(' + mdleft + ', var(' + lgleft + ', 0)));');
  return `${topSm ? `--sb-${varname}-top-sm: ${topSm + unit};` : ''}
        ${rightSm ? `--sb-${varname}-right-sm: ${rightSm + unit};` : ''}
        ${bottomSm ? `--sb-${varname}-bottom-sm: ${bottomSm + unit};` : ''}
        ${leftSm ? `--sb-${varname}-left-sm: ${leftSm + unit};` : ''}
        ${topMd ? `--sb-${varname}-top-md: ${topMd + unit};` : ''}
        ${rightMd ? `--sb-${varname}-right-md: ${rightMd + unit};` : ''}
        ${bottomMd ? `--sb-${varname}-bottom-md: ${bottomMd + unit};` : ''}
        ${leftMd ? `--sb-${varname}-left-md: ${leftMd + unit};` : ''}
        ${top ? `--sb-${varname}-top-lg: ${top + unit};` : ''}
        ${right ? `--sb-${varname}-right-lg: ${right + unit};` : ''}
        ${bottom ? `--sb-${varname}-bottom-lg: ${bottom + unit};` : ''}
        ${left ? `--sb-${varname}-left-lg: ${left + unit};` : ''};`;
};
const textShadowVars = (varname, horizontal, vertical, blur, color, unit = '') => {
  console.log('text-shadow: var(--sb-' + varname + '-horizontal) var(--sb-' + varname + '-vertical) var(--sb-' + varname + '-blur) var(--sb-' + varname + '-color)');
  return `${horizontal ? `--sb-${varname}-horizontal: ${horizontal + unit};` : ''}
        ${vertical ? `--sb-${varname}-vertical: ${vertical + unit};` : ''}
        ${blur ? `--sb-${varname}-blur: ${blur + unit};` : ''}
        ${color ? `--sb-${varname}-color: ${color};` : ''}`;
};
const getImageSrc = imgId => {
  if (!imgId) {
    return '';
  }
  const imageSrc = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const img = select('core').getMedia(imgId);
    return img?.source_url;
  }, [imgId]);
  return imageSrc;
};
const getElementPositions = [{
  value: 'top left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Left', 'smart-blocks-pro')
}, {
  value: 'top center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Center', 'smart-blocks-pro')
}, {
  value: 'top right',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top Right', 'smart-blocks-pro')
}, {
  value: 'center center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Center', 'smart-blocks-pro')
}, {
  value: 'center left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Left', 'smart-blocks-pro')
}, {
  value: 'center right',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center Right', 'smart-blocks-pro')
}, {
  value: 'bottom left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Left', 'smart-blocks-pro')
}, {
  value: 'bottom center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Center', 'smart-blocks-pro')
}, {
  value: 'bottom right',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom Right', 'smart-blocks-pro')
}];
const showAnimations = [{
  value: 'none',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Animation', 'smart-blocks-pro')
}, {
  value: 'fadeIn',
  label: 'fadeIn'
}, {
  value: 'fadeInLeft',
  label: 'fadeInLeft'
}, {
  value: 'fadeInRight',
  label: 'fadeInRight'
}, {
  value: 'fadeInUp',
  label: 'fadeInUp'
}, {
  value: 'fadeInDown',
  label: 'fadeInDown'
}, {
  value: 'zoomIn',
  label: 'zoomIn'
}, {
  value: 'zoomInDown',
  label: 'zoomInDown'
}, {
  value: 'zoomInLeft',
  label: 'zoomInLeft'
}, {
  value: 'zoomInRight',
  label: 'zoomInRight'
}, {
  value: 'zoomInUp',
  label: 'zoomInUp'
}, {
  value: 'bounceIn',
  label: 'bounceIn'
}, {
  value: 'bounceInDown',
  label: 'bounceInDown'
}, {
  value: 'bounceInLeft',
  label: 'bounceInLeft'
}, {
  value: 'bounceInRight',
  label: 'bounceInRight'
}, {
  value: 'bounceInUp',
  label: 'bounceInUp'
}, {
  value: 'slideInUp',
  label: 'slideInUp'
}, {
  value: 'slideInDown',
  label: 'slideInDown'
}, {
  value: 'slideInLeft',
  label: 'slideInLeft'
}, {
  value: 'slideInRight',
  label: 'slideInRight'
}, {
  value: 'flipInX',
  label: 'flipInX'
}, {
  value: 'flipInY',
  label: 'flipInY'
}, {
  value: 'rotateIn',
  label: 'rotateIn'
}, {
  value: 'rotateInDownLeft',
  label: 'rotateInDownLeft'
}, {
  value: 'rotateInDownRight',
  label: 'rotateInDownRight'
}, {
  value: 'rotateInUpLeft',
  label: 'rotateInUpLeft'
}, {
  value: 'rotateInUpRight',
  label: 'rotateInUpRight'
}, {
  value: 'rollIn',
  label: 'rollIn'
}];
const showAnimationsAlt = [{
  value: 'none',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No Animation', 'smart-blocks-pro')
}, {
  value: 'fadeIn',
  label: 'fadeIn'
}, {
  value: 'fadeInLeftSmall',
  label: 'fadeInLeft'
}, {
  value: 'fadeInRightSmall',
  label: 'fadeInRight'
}, {
  value: 'fadeInUpSmall',
  label: 'fadeInUp'
}, {
  value: 'fadeInDownSmall',
  label: 'fadeInDown'
}, {
  value: 'zoomIn',
  label: 'zoomIn'
}, {
  value: 'zoomInDown',
  label: 'zoomInDown'
}, {
  value: 'zoomInLeft',
  label: 'zoomInLeft'
}, {
  value: 'zoomInRight',
  label: 'zoomInRight'
}, {
  value: 'zoomInUp',
  label: 'zoomInUp'
}, {
  value: 'bounceIn',
  label: 'bounceIn'
}, {
  value: 'bounceInDownSmall',
  label: 'bounceInDown'
}, {
  value: 'bounceInLeftSmall',
  label: 'bounceInLeft'
}, {
  value: 'bounceInRightSmall',
  label: 'bounceInRight'
}, {
  value: 'bounceInUpSmall',
  label: 'bounceInUp'
}, {
  value: 'flipInX',
  label: 'flipInX'
}, {
  value: 'flipInY',
  label: 'flipInY'
}, {
  value: 'rotateIn',
  label: 'rotateIn'
}, {
  value: 'rotateInDownLeft',
  label: 'rotateInDownLeft'
}, {
  value: 'rotateInDownRight',
  label: 'rotateInDownRight'
}, {
  value: 'rotateInUpLeft',
  label: 'rotateInUpLeft'
}, {
  value: 'rotateInUpRight',
  label: 'rotateInUpRight'
}];
const sliderAnimations = [{
  value: 'none',
  label: 'No Animation'
}, {
  value: 'fade-in',
  label: 'FadeIn'
}, {
  value: 'scale-in-center',
  label: 'ScaleInCenter'
}, {
  value: 'slide-in-top',
  label: 'SlideInTop'
}, {
  value: 'slide-in-bottom',
  label: 'SlideInBottom'
}, {
  value: 'slide-in-left',
  label: 'SlideInLeft'
}, {
  value: 'slide-in-right',
  label: 'SlideInRight'
}, {
  value: 'rotate-in-2-fwd-cw',
  label: 'RotateInForwardClockWise'
}, {
  value: 'rotate-in-2-fwd-ccw',
  label: 'RotateInForwardCounterClockWise'
}, {
  value: 'rotate-in-hor',
  label: 'RotateInHorizontal'
}, {
  value: 'flip-in-hor',
  label: 'FlipInHorizontal'
}, {
  value: 'flip-in-ver-left',
  label: 'FlipInVerticalLeft'
}, {
  value: 'flip-in-ver-right',
  label: 'FlipInVerticalRight'
}, {
  value: 'bounce-in-top',
  label: 'BounceInTop'
}, {
  value: 'bounce-in-bottom',
  label: 'BounceInBottom'
}, {
  value: 'bounce-in-left',
  label: 'BounceInLeft'
}, {
  value: 'bounce-in-right',
  label: 'BounceInRight'
}, {
  value: 'bounce-in-fwd',
  label: 'BounceInFodward'
}, {
  value: 'bounce-in-bck',
  label: 'BounceInBackward'
}, {
  value: 'swing-in-top-fwd',
  label: 'SwingInTopForward'
}, {
  value: 'swing-in-bottom-fwd',
  label: 'SwingInBottomForward'
}, {
  value: 'swing-in-left-fwd',
  label: 'SwingInLeftForward'
}, {
  value: 'swing-in-right-fwd',
  label: 'SwingInRightForward'
}, {
  value: 'puff-in-center',
  label: 'PuffInCenter'
}];
const getStyleVars = (attributes, vars) => {
  var retvar = '';
  let responsiveSliderUnits = vars?.responsiveSliderUnits;
  if (responsiveSliderUnits?.length) {
    responsiveSliderUnits.map(lvar => {
      retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], attributes[lvar + 'Unit']);
    });
  }
  let responsiveSlider = vars?.responsiveSlider;
  if (responsiveSlider?.length) {
    responsiveSlider.map(lvar => {
      retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], '');
    });
  }
  let responsiveSliderPx = vars?.responsiveSliderPx;
  if (responsiveSliderPx?.length) {
    responsiveSliderPx.map(lvar => {
      retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], 'px');
    });
  }
  let responsiveSliderPer = vars?.responsiveSliderPer;
  if (responsiveSliderPer?.length) {
    responsiveSliderPer.map(lvar => {
      retvar += responsiveSliderVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar], attributes[lvar + 'Sm'], attributes[lvar + 'Md'], '%');
    });
  }
  let normal = vars?.normal;
  if (normal?.length) {
    normal.map(lvar => {
      if (attributes[lvar]) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]};`;
      }
    });
  }
  let normalPx = vars?.normalPx;
  if (normalPx?.length) {
    normalPx.map(lvar => {
      if (attributes[lvar]) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]}px;`;
      }
    });
  }
  let normalDeg = vars?.normalDeg;
  if (normalDeg?.length) {
    normalDeg.map(lvar => {
      if (attributes[lvar]) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]}deg;`;
      }
    });
  }
  let normalUnit = vars?.normalUnit;
  if (normalUnit?.length) {
    normalUnit.map(lvar => {
      if (attributes[lvar]) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]}${attributes[lvar + 'Unit']};`;
      }
    });
  }
  let boxShadow = vars?.boxShadow;
  if (boxShadow?.length) {
    boxShadow.map(lvar => {
      retvar += boxShadowVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Horizontal'], attributes[lvar + 'Vertical'], attributes[lvar + 'Blur'], attributes[lvar + 'Spread'], attributes[lvar + 'Color'], attributes[lvar + 'Inset'], 'px');
    });
  }
  let textShadow = vars?.textShadow;
  if (textShadow?.length) {
    textShadow.map(lvar => {
      retvar += textShadowVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Horizontal'], attributes[lvar + 'Vertical'], attributes[lvar + 'Blur'], attributes[lvar + 'Color'], 'px');
    });
  }
  let responsiveDimension = vars?.responsiveDimension;
  if (responsiveDimension?.length) {
    responsiveDimension.map(lvar => {
      retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'], attributes[lvar + 'SmTop'], attributes[lvar + 'SmRight'], attributes[lvar + 'SmBottom'], attributes[lvar + 'SmLeft'], attributes[lvar + 'MdTop'], attributes[lvar + 'MdRight'], attributes[lvar + 'MdBottom'], attributes[lvar + 'MdLeft'], attributes[lvar + 'Unit']);
    });
  }
  let responsiveTopBottomDimension = vars?.responsiveTopBottomDimension;
  if (responsiveTopBottomDimension?.length) {
    responsiveTopBottomDimension.map(lvar => {
      retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], '', attributes[lvar + 'Bottom'], '', attributes[lvar + 'SmTop'], '', attributes[lvar + 'SmBottom'], '', attributes[lvar + 'MdTop'], '', attributes[lvar + 'MdBottom'], '', attributes[lvar + 'Unit']);
    });
  }
  let topBottomDimension = vars?.topBottomDimension;
  if (topBottomDimension?.length) {
    topBottomDimension.map(lvar => {
      retvar += dimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], '', attributes[lvar + 'Bottom'], '', attributes[lvar + 'Unit']);
    });
  }
  let responsiveLeftRightDimension = vars?.responsiveLeftRightDimension;
  if (responsiveLeftRightDimension?.length) {
    responsiveLeftRightDimension.map(lvar => {
      retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), '', attributes[lvar + 'Right'], '', attributes[lvar + 'Left'], '', attributes[lvar + 'SmRight'], '', attributes[lvar + 'SmLeft'], '', attributes[lvar + 'MdRight'], '', attributes[lvar + 'MdLeft'], attributes[lvar + 'Unit']);
    });
  }
  let dimension = vars?.dimension;
  if (dimension?.length) {
    dimension.map(lvar => {
      retvar += dimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'], attributes[lvar + 'Unit']);
    });
  }
  let responsiveBorder = vars?.responsiveBorder;
  if (responsiveBorder?.length) {
    responsiveBorder.map(lvar => {
      if (attributes[lvar]) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:${attributes[lvar]};`;
      }
      retvar += responsiveDimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'], attributes[lvar + 'SmTop'], attributes[lvar + 'SmRight'], attributes[lvar + 'SmBottom'], attributes[lvar + 'SmLeft'], attributes[lvar + 'MdTop'], attributes[lvar + 'MdRight'], attributes[lvar + 'MdBottom'], attributes[lvar + 'MdLeft'], attributes[lvar + 'Unit']);
      if (attributes[lvar + 'Color']) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-color:${attributes[lvar + 'Color']};`;
      }
    });
  }
  let responsiveTypography = vars?.responsiveTypography;
  if (responsiveTypography?.length) {
    responsiveTypography.map(lvar => {
      retvar += responsiveTypographyVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), attributes[lvar + 'Family'], attributes[lvar + 'Weight'], attributes[lvar + 'TextTransform'], attributes[lvar + 'TextDecoration'], attributes[lvar + 'FontSizeSm'], attributes[lvar + 'FontSizeMd'], attributes[lvar + 'FontSize'], attributes[lvar + 'FontSizeUnit'], attributes[lvar + 'LetterSpacingSm'], attributes[lvar + 'LetterSpacingMd'], attributes[lvar + 'LetterSpacing'], attributes[lvar + 'LetterSpacingUnit'], attributes[lvar + 'LineHeightSm'], attributes[lvar + 'LineHeightMd'], attributes[lvar + 'LineHeight'], attributes[lvar + 'LineHeightUnit']);
    });
  }
  let backgroundType = vars?.backgroundType;
  if (backgroundType?.length) {
    backgroundType.map(lvar => {
      if (attributes[lvar + 'Type'] == 'color' && attributes[lvar + 'Color']) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-color:${attributes[lvar + 'Color']};`;
      }
      if (attributes[lvar + 'Type'] == 'gradient' && attributes[lvar + 'Gradient']) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-gradient:${attributes[lvar + 'Gradient']};`;
      }
    });
  }
  let advancedRadius = vars?.advancedRadius;
  if (advancedRadius?.length) {
    advancedRadius.map(lvar => {
      if (attributes[lvar + 'AdvancedShow']) {
        retvar += `--sb-${lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}-radius:${attributes[lvar + 'Advanced']};`;
      } else {
        retvar += dimensionVars(lvar.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '-radius', attributes[lvar + 'Top'], attributes[lvar + 'Right'], attributes[lvar + 'Bottom'], attributes[lvar + 'Left'], attributes[lvar + 'Unit']);
      }
    });
  }
  return retvar;
};


/***/ }),

/***/ "./src/utils/responsivedropdown.js":
/*!*****************************************!*\
  !*** ./src/utils/responsivedropdown.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgicons */ "./src/utils/svgicons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */


const ResponsiveDropdown = ({
  label,
  className,
  children
}) => {
  const getView = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    const {
      getView
    } = select('hash-form/data');
    const {
      __experimentalGetPreviewDeviceType
    } = select('core/edit-post') ? select('core/edit-post') : false;
    return __experimentalGetPreviewDeviceType ? __experimentalGetPreviewDeviceType() : getView();
  });
  const {
    updateView
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('hash-form/data');
  const {
    __experimentalSetPreviewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/edit-post') ? (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/edit-post') : false;
  const setView = __experimentalSetPreviewDeviceType ? __experimentalSetPreviewDeviceType : updateView;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-device active-md"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Desktop', 'hash-form'),
    className: `hf-device-desktop ${getView === 'Desktop' ? " active" : ""}`,
    onClick: () => {
      setView('Desktop');
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svgicons__WEBPACK_IMPORTED_MODULE_2__.DesktopIcon, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Tablet', 'hash-form'),
    className: `hf-device-tablet ${getView === 'Tablet' ? " active" : ""}`,
    onClick: () => {
      setView('Tablet');
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svgicons__WEBPACK_IMPORTED_MODULE_2__.TabletIcon, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Phone', 'hash-form'),
    className: `hf-device-mobile ${getView === 'Mobile' ? " active" : ""}`,
    onClick: () => {
      setView('Mobile');
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_svgicons__WEBPACK_IMPORTED_MODULE_2__.PhoneIcon, null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveDropdown);

/***/ }),

/***/ "./src/utils/svgicons.js":
/*!*******************************!*\
  !*** ./src/utils/svgicons.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedIcon: () => (/* binding */ AdvancedIcon),
/* harmony export */   ClearIcon: () => (/* binding */ ClearIcon),
/* harmony export */   DesktopIcon: () => (/* binding */ DesktopIcon),
/* harmony export */   HashFormIcon: () => (/* binding */ HashFormIcon),
/* harmony export */   LayoutIcon: () => (/* binding */ LayoutIcon),
/* harmony export */   PhoneIcon: () => (/* binding */ PhoneIcon),
/* harmony export */   SmartBlockIcon: () => (/* binding */ SmartBlockIcon),
/* harmony export */   SmartBlockOutlineIcon: () => (/* binding */ SmartBlockOutlineIcon),
/* harmony export */   StyleIcon: () => (/* binding */ StyleIcon),
/* harmony export */   TabletIcon: () => (/* binding */ TabletIcon)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const SmartBlockIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 150 150"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M144 0H6a6 6 0 0 0-6 6v138a6 6 0 0 0 6 6h138a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6m-8.8 45.83c-2.1 2.1-4.29 3.9-4.91 3.9S118.28 45 105 39.2c-22.37-9.67-24.32-10.37-25.8-9.35-.94.62-7.8 7.25-15.21 14.65L50.53 58l11.15 4.83c6.16 2.57 18.87 8.1 28.32 12.23s19.81 8.58 23 9.91a61 61 0 0 1 6.47 3c.32.23-4 5.07-9.74 10.6s-16.37 16-23.78 23.23c-7.87 7.72-13.8 13-14.42 12.79-2.81-1.17-59.57-25.81-59.88-26.12-.15-.15 1.64-2.18 4-4.6l4.29-4.29 8.88 3.9c4.92 2.11 16.22 6.94 25 10.84l16 6.94L85 106.56C99.57 92.45 100 91.9 98.17 91.2c-1.09-.46-12.08-5.2-24.56-10.6s-27.29-11.85-32.9-14.35-10.29-4.67-10.13-4.91c.46-1.09 47-45.92 47.79-45.92.47 0 8.5 3.36 17.93 7.41 9.35 4.13 22.37 9.75 28.77 12.55s12.24 5.38 12.86 5.77c.94.62.47 1.4-2.73 4.68m-28.84 14-4.21 4.06-7.64-3.28c-4.21-1.79-8.74-3.74-10-4.28-2.26-.94-2.58-.78-6.16 2.49-2.11 1.87-4.29 3.43-4.76 3.43a72 72 0 0 1-10.37-4.29c-.39-.31 15.91-16 16.69-16 .46 0 7.17 2.81 15 6.24s14.5 6.23 15 6.23c1.51-.03.66 1.38-3.55 5.35ZM68.15 95 72 91.12l3.82-3.82 5.54 2.34c3 1.33 5.61 2.42 5.77 2.58.39.31-15.52 15.59-16.53 15.82-.47.08-7.33-2.57-15.2-6.08s-14.5-6.24-15-6.24c-1.4 0-.62-1.16 3.35-5.22 4.68-4.75 3.43-4.75 15.75.62Z"
  })));
};
const SmartBlockOutlineIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 226.72 213.12"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M221.08 54.39c5.71-5.85 6.55-7.25 4.88-8.36-1.12-.7-11.44-5.44-23-10.33s-34.73-15.06-51.47-22.45C134.61 6 120.24 0 119.4 0 118 0 34.74 80.2 33.91 82.15c-.28.42 8 4.46 18.13 8.78s36.68 15.9 58.86 25.67 42 18.13 43.93 19c3.35 1.26 2.51 2.24-23.57 27.48l-27.2 26.22-28.59-12.45c-15.76-7-36-15.62-44.77-19.39l-15.9-7-7.67 7.67c-4.18 4.32-7.39 8-7.11 8.23.55.64 102.09 44.64 107.11 46.75 1.12.42 11.71-9.07 25.8-22.87 13.25-13 32.36-31.66 42.54-41.57s18-18.54 17.43-19a108 108 0 0 0-11.57-5.3c-5.72-2.37-24.27-10.32-41.15-17.72S100.57 89.4 89.56 84.8l-20-8.65L93.74 52c13.25-13.25 25.52-25.1 27.2-26.22 2.65-1.81 6.13-.56 46.16 16.74 23.71 10.32 44.07 18.83 45.19 18.83s5.02-3.19 8.79-6.96"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M57.48 134.31c-7.11 7.25-8.51 9.34-6 9.34.84 0 12.83 5 26.78 11.16s26.36 11 27.2 10.88c1.81-.42 30.26-27.75 29.56-28.31-.28-.28-4.88-2.23-10.32-4.6l-9.9-4.19-6.8 6.84-6.84 6.83-15.48-6.83c-22.06-9.63-19.83-9.63-28.2-1.12M149 58.58c-14-6.14-26-11.16-26.81-11.16-1.39 0-30.54 28-29.84 28.59 1.67 1.26 17.15 7.67 18.55 7.67.83 0 4.74-2.79 8.5-6.13 6.42-5.86 7-6.14 11-4.47 2.23 1 10.32 4.47 17.85 7.67l13.67 5.86 7.53-7.25c7.53-7.11 9.07-9.63 6.28-9.63-.82 0-12.81-5.02-26.73-11.15"
  }))));
};
const DesktopIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "fa-desktop",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "far",
    "data-icon": "desktop",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M528 0H48C21.5 0 0 21.5 0 48v288c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-6 336H54c-3.3 0-6-2.7-6-6V54c0-3.3 2.7-6 6-6h468c3.3 0 6 2.7 6 6v276c0 3.3-2.7 6-6 6zm-42 152c0 13.3-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h98.7l18.6-55.8c1.6-4.9 6.2-8.2 11.4-8.2h78.7c5.2 0 9.8 3.3 11.4 8.2l18.6 55.8H456c13.3 0 24 10.7 24 24z"
  }));
};
const TabletIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "fa-tablet-alt",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "tablet-alt",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z"
  }));
};
const PhoneIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    className: "fa-mobile-alt",
    "aria-hidden": "true",
    focusable: "false",
    "data-prefix": "fas",
    "data-icon": "mobile-alt",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 320 512",
    "data-fa-i2svg": ""
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "currentColor",
    d: "M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"
  }));
};
const ClearIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "11.126",
    height: "13.984",
    viewBox: "0 0 14.126 16.984"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M8.6,0V1.47A7.051,7.051,0,0,0,4.188,13.412l1.776-1.592A4.681,4.681,0,0,1,8.6,3.858V5.226l4.185-2.613Zm5.716,3.572L12.558,5.165A4.681,4.681,0,0,1,9.9,13.105V11.758L5.719,14.371,9.9,16.984v-1.47A7.051,7.051,0,0,0,14.313,3.572Z",
    transform: "translate(-2.188)",
    fill: "#888"
  }));
};
const LayoutIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18.7",
    height: "17",
    viewBox: "0 0 18.7 17"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(-205 -216)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(189 182)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16,54h7.932V64.577H16Z",
    transform: "translate(0 -13.577)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M16,34h7.932v5.288H16Z",
    transform: "translate(0 0)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M44,34h9.255V51H44Z",
    transform: "translate(-18.555 0)"
  }))));
};
const StyleIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16.538",
    height: "17",
    viewBox: "0 0 16.538 17"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(-0.268)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.268)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    stroke: "#449fdb",
    strokeWidth: "1"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M15.268,35.672a6.135,6.135,0,0,0,1.35,2.549c.034.04.073.076.108.115l6.942-6.942-2.061-2.062Z",
    transform: "translate(-13.248 -25.057)"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M35.764,47.016l-6.94,6.941a5.234,5.234,0,0,0,2.768,1.352l6.233-6.232Z",
    transform: "translate(-24.829 -40.164)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M78.833,5.847,76.772,3.785a2.112,2.112,0,0,0-2.865.289l-1,1L77.545,9.71l1-1a2.518,2.518,0,0,0,.734-1.445A1.669,1.669,0,0,0,78.833,5.847Z",
    transform: "translate(-62.488 -2.858)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M5.82,80.026a7.083,7.083,0,0,1-1.348-2.314l-1.19,5.229a.366.366,0,0,0,.355.446.351.351,0,0,0,.081-.01l5.337-1.214c.01,0,.017-.012.028-.015A6.58,6.58,0,0,1,5.82,80.026Z",
    transform: "translate(-3.001 -66.387)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M68.206,23.379l-1.03,1.031-4.638-4.637,1.03-1.031Z",
    transform: "translate(-53.629 -16.011)"
  })));
};
const AdvancedIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "17",
    height: "17",
    viewBox: "0 0 17 17"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(0.284)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(-0.284)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    stroke: "#449fdb",
    strokeWidth: "1"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M36.617,32.5a4.113,4.113,0,1,0,4.113,4.113A4.118,4.118,0,0,0,36.617,32.5Zm0,6.731a2.618,2.618,0,1,1,2.618-2.618,2.621,2.621,0,0,1-2.618,2.618Z",
    transform: "translate(-27.864 -27.779)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M20.089,14.537a1.837,1.837,0,0,1,0-3.625.357.357,0,0,0,.25-.162.375.375,0,0,0,.046-.3,8.646,8.646,0,0,0-.751-1.877.358.358,0,0,0-.239-.179.347.347,0,0,0-.289.067A1.783,1.783,0,0,1,16.774,8.3,1.885,1.885,0,0,1,16.619,5.9a.38.38,0,0,0,.063-.3.361.361,0,0,0-.174-.246,8.013,8.013,0,0,0-1.82-.774.353.353,0,0,0-.292.047.368.368,0,0,0-.157.257,1.768,1.768,0,0,1-3.517,0,.37.37,0,0,0-.157-.257.352.352,0,0,0-.292-.047,8.03,8.03,0,0,0-1.819.774.365.365,0,0,0-.175.246.383.383,0,0,0,.064.3A1.884,1.884,0,0,1,8.189,8.3a1.785,1.785,0,0,1-2.333.159.349.349,0,0,0-.289-.067.355.355,0,0,0-.238.179,8.591,8.591,0,0,0-.752,1.877.38.38,0,0,0,.046.3.355.355,0,0,0,.25.162,1.837,1.837,0,0,1,0,3.625.352.352,0,0,0-.249.162.374.374,0,0,0-.045.3,8.643,8.643,0,0,0,.751,1.876.364.364,0,0,0,.238.18.355.355,0,0,0,.289-.067,1.781,1.781,0,0,1,2.333.159,1.883,1.883,0,0,1,.154,2.4.383.383,0,0,0-.064.3.365.365,0,0,0,.174.246,7.993,7.993,0,0,0,1.821.774.346.346,0,0,0,.292-.047.37.37,0,0,0,.157-.257,1.768,1.768,0,0,1,3.517,0,.368.368,0,0,0,.157.257.348.348,0,0,0,.292.047A8.035,8.035,0,0,0,16.51,20.1a.368.368,0,0,0,.174-.246.383.383,0,0,0-.064-.3,1.883,1.883,0,0,1,.154-2.4,1.782,1.782,0,0,1,2.333-.159.354.354,0,0,0,.289.067.363.363,0,0,0,.239-.18A8.555,8.555,0,0,0,20.386,15a.373.373,0,0,0-.046-.3.356.356,0,0,0-.251-.163Zm-7.607,2.97A4.719,4.719,0,0,1,7.84,12.724a4.719,4.719,0,0,1,4.641-4.783,4.72,4.72,0,0,1,4.641,4.783,4.72,4.72,0,0,1-4.641,4.783Z",
    transform: "translate(-3.683 -3.883)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M51.243,49.366a1.87,1.87,0,1,1-1.87-1.87A1.87,1.87,0,0,1,51.243,49.366Z",
    transform: "translate(-40.606 -40.532)"
  })));
};
const HashFormIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 117.66 152.27"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M0,3.46A3.46,3.46,0,0,1,3.14,0h80A3.53,3.53,0,0,1,85.6,1l31,31a3.47,3.47,0,0,1,1,2.43V148.81a3.46,3.46,0,0,1-3.46,3.46H31.63a3.46,3.46,0,1,1,0-6.92h79.11V38.07H83.05a3.46,3.46,0,0,1-3.46-3.46V6.92H6.92V145.35H14a3.46,3.46,0,1,1,0,6.92H3.46A3.46,3.46,0,0,1,0,148.81ZM106,31.15,86.51,11.68V31.15Z"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M78.66,59.3H95.09v6.61H78.66V85.75H72.05V42.87h6.61Zm0,39.67v16.42H72.05V99H52.22V92.36H95.09V99ZM39,99H22.57V92.36H39V72.52h6.61V115.4H39ZM39,59.3V42.87h6.61V59.3H65.44v6.61H22.57V59.3Z"
  }))));
};

/***/ }),

/***/ "./src/utils/tabs.js":
/*!***************************!*\
  !*** ./src/utils/tabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);




const Tabs = ({
  children
}) => {
  const defaultTab = void 0 != children[0] ? children[0].props.tabTitle : '';
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultTab);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field hf-inspect-tabs "
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "components-tab-panel__tabs"
  }, children.map(function (n) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !1 !== n && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      text: n.props.tabTitle
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: (n.props.tabTitle === activeTab ? "active-tab" : "") + " components-button hf-tab-menu",
      onClick: () => {
        return setActiveTab(n.props.tabTitle);
      }
    }, n.props.tabTitle)));
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hf-field-tab-items"
  }, children.map(function (e) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !1 !== e && e.props.tabTitle === activeTab ? e : "");
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["date"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = window["ReactDOM"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data/index.js");
/* harmony import */ var _blocks_hash_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/hash-form */ "./src/blocks/hash-form/index.js");


})();

/******/ })()
;
//# sourceMappingURL=index.js.map