"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./components/UsersAvatar.js":
/*!***********************************!*\
  !*** ./components/UsersAvatar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar UsersAvatar = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container d-flex \",\n        style: {\n            justifyContent: \"space-between\"\n        },\n        children: props.user.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                style: {\n                    width: \"18rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.avatar,\n                        className: \"card-img-top\",\n                        alt: \"...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                        lineNumber: 6,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"card-title\",\n                                children: user.first_name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 8,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text\",\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 9,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"btn btn-primary\",\n                                children: \"Go somewhere\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                        lineNumber: 7,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, user.id, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, _this);\n};\n_c = UsersAvatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersAvatar);\nvar _c;\n$RefreshReg$(_c, \"UsersAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzQXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzdCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7UUFBQ0MsS0FBSyxFQUFFO1lBQUNDLGNBQWMsRUFBQyxlQUFlO1NBQUM7a0JBQ3ZFSixLQUFLLENBQUNLLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNELElBQUk7aUNBQ25CLDhEQUFDSixLQUFHO2dCQUFlQyxTQUFTLEVBQUMsTUFBTTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFFSSxLQUFLLEVBQUUsT0FBTztpQkFBRTs7a0NBQzNELDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssTUFBTTt3QkFBRVIsU0FBUyxFQUFDLGNBQWM7d0JBQUNTLEdBQUcsRUFBQyxLQUFLOzs7Ozs4QkFBRztrQ0FDNUQsOERBQUNWLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxXQUFXOzswQ0FDeEIsOERBQUNVLElBQUU7Z0NBQUNWLFNBQVMsRUFBQyxZQUFZOzBDQUFFRyxJQUFJLENBQUNRLFVBQVU7Ozs7O3NDQUFNOzBDQUNqRCw4REFBQ0MsR0FBQztnQ0FBQ1osU0FBUyxFQUFDLFdBQVc7MENBQUVHLElBQUksQ0FBQ1UsS0FBSzs7Ozs7c0NBQUs7MENBQ3pDLDhEQUFDQyxHQUFDO2dDQUFDQyxJQUFJLEVBQUMsR0FBRztnQ0FBQ2YsU0FBUyxFQUFDLGlCQUFpQjswQ0FBQyxjQUV4Qzs7Ozs7c0NBQUk7Ozs7Ozs4QkFDQTs7ZUFSRUcsSUFBSSxDQUFDYSxFQUFFOzs7O3NCQVNYO1NBQ1AsQ0FBQzs7Ozs7YUFDRSxDQUNOO0NBQ0g7QUFqQktuQixLQUFBQSxXQUFXO0FBbUJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnNBdmF0YXIuanM/MzE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2Vyc0F2YXRhciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggXCIgc3R5bGU9e3tqdXN0aWZ5Q29udGVudDpcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICB7cHJvcHMudXNlci5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCIgfX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt1c2VyLmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIEdvIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNBdmF0YXI7XHJcbiJdLCJuYW1lcyI6WyJVc2Vyc0F2YXRhciIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsInVzZXIiLCJtYXAiLCJ3aWR0aCIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsImg1IiwiZmlyc3RfbmFtZSIsInAiLCJlbWFpbCIsImEiLCJocmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UsersAvatar.js\n");

/***/ })

});