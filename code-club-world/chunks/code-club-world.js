var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([[4],{

/***/ 1564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(424);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(425);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(434);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(441);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(40);
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86);
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(276);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_9__);
// Polyfills



 // For Safari 9







var parentOrigin = window.location.ancestorOrigins[0];
var projectHost = "".concat(parentOrigin, "/scratch_programs");
var assetHost = "".concat(parentOrigin, "/scratch_assets");
var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_9___default.a.app;
document.body.appendChild(appTarget);
_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].setAppElement(appTarget);
var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_6__[/* compose */ "d"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);
var defaultProjectId = 0;
var params = new URLSearchParams(window.location.search);
var projectId = params.get('projectId') || defaultProjectId;
react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedGui, {
  menuBarHidden: true,
  projectId: projectId,
  canCreateNew: true,
  canSave: true,
  autoSaveIntervalSecs: 10,
  projectHost: projectHost,
  assetHost: assetHost
}), appTarget);

/***/ })

},[[1564,0]]]);
//# sourceMappingURL=code-club-world.js.map