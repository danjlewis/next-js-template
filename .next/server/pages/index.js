"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Button.jsx":
/*!*******************************!*\
  !*** ./components/Button.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Button(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: `min-w-8 min-h-8 m-2 px-4 pt-1 ${props.disabled || props.loading ? 'text-gray-100 dark:text-gray-600 bg-gray-700 dark:bg-gray-100' : 'text-gray-50 hover:text-white dark:text-gray-800 dark:hover:text-gray-900 bg-gray-900 hover:bg-gray-800 dark:bg-gray-50 dark:hover:bg-gray-100'} rounded-md transition-colors duration-200 ${props.disabled ? 'cursor-not-allowed' : props.loading ? 'cursor-wait' : 'cursor-pointer'} text-center align-middle ${props.className ?? ''}`,\n        onClick: props.disabled || props.loading ? ()=>null\n         : props.onClick,\n        __source: {\n            fileName: \"E:\\\\Next.js Template\\\\components\\\\Button.jsx\",\n            lineNumber: 2,\n            columnNumber: 12\n        },\n        __self: this,\n        children: props.loading ? props.loadingText ?? 'Loading...' : props.children\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFFBQVEsQ0FBQ0EsTUFBTSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxNQUFNLHNFQUFFQyxDQUFHO1FBQUNDLFNBQVMsR0FBRyw4QkFBOEIsRUFBRUYsS0FBSyxDQUFDRyxRQUFRLElBQUlILEtBQUssQ0FBQ0ksT0FBTyxHQUFHLENBQStELGlFQUFHLENBQWdKLGdKQUFDLDJDQUEyQyxFQUFFSixLQUFLLENBQUNHLFFBQVEsR0FBRyxDQUFvQixzQkFBSUgsS0FBSyxDQUFDSSxPQUFPLEdBQUcsQ0FBYSxlQUFHLENBQWdCLGdCQUFFLDBCQUEwQixFQUFFSixLQUFLLENBQUNFLFNBQVMsSUFBSSxDQUFFO1FBQUlHLE9BQU8sRUFBRUwsS0FBSyxDQUFDRyxRQUFRLElBQUlILEtBQUssQ0FBQ0ksT0FBTyxPQUFTLElBQUk7V0FBR0osS0FBSyxDQUFDSyxPQUFPOzs7Ozs7O2tCQUFHTCxLQUFLLENBQUNJLE9BQU8sR0FBR0osS0FBSyxDQUFDTSxXQUFXLElBQUksQ0FBWSxjQUFHTixLQUFLLENBQUNPLFFBQVE7O0FBQ3huQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24uanN4PzBjNjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHByb3BzKSB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2BtaW4tdy04IG1pbi1oLTggbS0yIHB4LTQgcHQtMSAke3Byb3BzLmRpc2FibGVkIHx8IHByb3BzLmxvYWRpbmcgPyAndGV4dC1ncmF5LTEwMCBkYXJrOnRleHQtZ3JheS02MDAgYmctZ3JheS03MDAgZGFyazpiZy1ncmF5LTEwMCcgOiAndGV4dC1ncmF5LTUwIGhvdmVyOnRleHQtd2hpdGUgZGFyazp0ZXh0LWdyYXktODAwIGRhcms6aG92ZXI6dGV4dC1ncmF5LTkwMCBiZy1ncmF5LTkwMCBob3ZlcjpiZy1ncmF5LTgwMCBkYXJrOmJnLWdyYXktNTAgZGFyazpob3ZlcjpiZy1ncmF5LTEwMCd9IHJvdW5kZWQtbWQgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwICR7cHJvcHMuZGlzYWJsZWQgPyAnY3Vyc29yLW5vdC1hbGxvd2VkJyA6IChwcm9wcy5sb2FkaW5nID8gJ2N1cnNvci13YWl0JyA6ICdjdXJzb3ItcG9pbnRlcicpfSB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUgJHtwcm9wcy5jbGFzc05hbWUgPz8gJyd9YH0gb25DbGljaz17cHJvcHMuZGlzYWJsZWQgfHwgcHJvcHMubG9hZGluZyA/ICgpID0+IG51bGwgOiBwcm9wcy5vbkNsaWNrfT57cHJvcHMubG9hZGluZyA/IHByb3BzLmxvYWRpbmdUZXh0ID8/ICdMb2FkaW5nLi4uJyA6IHByb3BzLmNoaWxkcmVufTwvZGl2PjtcclxufVxyXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJkaXNhYmxlZCIsImxvYWRpbmciLCJvbkNsaWNrIiwibG9hZGluZ1RleHQiLCJjaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Button.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Index)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.jsx\");\n\n\n\nfunction Index() {\n    const [disabled, setDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onClick: ()=>{\n            setDisabled(true);\n            setTimeout(setDisabled, 2000, false);\n        },\n        disabled: disabled,\n        __source: {\n            fileName: \"E:\\\\Next.js Template\\\\pages\\\\index.jsx\",\n            lineNumber: 7,\n            columnNumber: 12\n        },\n        __self: this,\n        children: \"Click me!\"\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF5QjtBQUNnQjtBQUUxQixRQUFRLENBQUNFLEtBQUssR0FBRyxDQUFDO0lBQzdCLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxXQUFXLElBQUlKLHFEQUFjLENBQUMsS0FBSztJQUVwRCxNQUFNLHNFQUFFQywwREFBTTtRQUFDSyxPQUFPLE1BQVEsQ0FBQ0Y7WUFBQUEsV0FBVyxDQUFDLElBQUk7WUFBR0csVUFBVSxDQUFDSCxXQUFXLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBQyxDQUFDO1FBQUVELFFBQVEsRUFBRUEsUUFBUTs7Ozs7OztrQkFBRSxDQUFTOztBQUMxSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICAgIGNvbnN0IFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7c2V0RGlzYWJsZWQodHJ1ZSk7IHNldFRpbWVvdXQoc2V0RGlzYWJsZWQsIDIwMDAsIGZhbHNlKX19IGRpc2FibGVkPXtkaXNhYmxlZH0+Q2xpY2sgbWUhPC9CdXR0b24+O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsIkluZGV4IiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsInVzZVN0YXRlIiwib25DbGljayIsInNldFRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();