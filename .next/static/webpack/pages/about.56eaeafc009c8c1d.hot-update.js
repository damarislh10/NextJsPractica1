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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nvar _this = undefined;\n\nvar UsersAvatar = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container d-flex \",\n        children: props.user.map(function(user) {\n            var _obj;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", (_obj = {\n                className: \"m\"\n            }, _defineProperty(_obj, \"className\", \"card\"), _defineProperty(_obj, \"style\", {\n                width: \"18rem\"\n            }), _defineProperty(_obj, \"children\", [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: user.avatar,\n                    className: \"card-img-top\",\n                    alt: \"...\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                    lineNumber: 6,\n                    columnNumber: 11\n                }, _this1),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                            className: \"card-title\",\n                            children: user.first_name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                            lineNumber: 8,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"card-text\",\n                            children: user.email\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                            lineNumber: 9,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: \"btn btn-primary\",\n                            children: \"Go somewhere\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                            lineNumber: 10,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                    lineNumber: 7,\n                    columnNumber: 11\n                }, _this1)\n            ]), _obj), user.id, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, _this);\n};\n_c = UsersAvatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersAvatar);\nvar _c;\n$RefreshReg$(_c, \"UsersAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzQXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUcsU0FBQ0MsS0FBSyxFQUFLOztJQUM3QixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsbUJBQW1CO2tCQUMvQkYsS0FBSyxDQUFDRyxJQUFJLENBQUNDLEdBQUcsQ0FBQyxTQUFDRCxJQUFJOztpQ0FDbkIsOERBQUNGLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxHQUFHO2VBQWVBLHNCQUFBQSxXQUFTLEVBQUMsTUFBTSxHQUFDRyxzQkFBQUEsT0FBSyxFQUFFO2dCQUFFQyxLQUFLLEVBQUUsT0FBTzthQUFFOzhCQUN6RSw4REFBQ0MsS0FBRztvQkFBQ0MsR0FBRyxFQUFFTCxJQUFJLENBQUNNLE1BQU07b0JBQUVQLFNBQVMsRUFBQyxjQUFjO29CQUFDUSxHQUFHLEVBQUMsS0FBSzs7Ozs7MEJBQUc7OEJBQzVELDhEQUFDVCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7c0NBQ3hCLDhEQUFDUyxJQUFFOzRCQUFDVCxTQUFTLEVBQUMsWUFBWTtzQ0FBRUMsSUFBSSxDQUFDUyxVQUFVOzs7OztrQ0FBTTtzQ0FDakQsOERBQUNDLEdBQUM7NEJBQUNYLFNBQVMsRUFBQyxXQUFXO3NDQUFFQyxJQUFJLENBQUNXLEtBQUs7Ozs7O2tDQUFLO3NDQUN6Qyw4REFBQ0MsR0FBQzs0QkFBQ0MsSUFBSSxFQUFDLEdBQUc7NEJBQUNkLFNBQVMsRUFBQyxpQkFBaUI7c0NBQUMsY0FFeEM7Ozs7O2tDQUFJOzs7Ozs7MEJBQ0E7dUJBUmdCQyxJQUFJLENBQUNjLEVBQUU7Ozs7c0JBU3pCO1NBQ1AsQ0FBQzs7Ozs7YUFDRSxDQUNOO0NBQ0g7QUFqQktsQixLQUFBQSxXQUFXO0FBbUJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnNBdmF0YXIuanM/MzE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBVc2Vyc0F2YXRhciA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggXCI+XHJcbiAgICAgIHtwcm9wcy51c2VyLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibVwiIGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IHdpZHRoOiBcIjE4cmVtXCIgfX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIGFsdD1cIi4uLlwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt1c2VyLmZpcnN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIEdvIHNvbWV3aGVyZVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnNBdmF0YXI7XHJcbiJdLCJuYW1lcyI6WyJVc2Vyc0F2YXRhciIsInByb3BzIiwiZGl2IiwiY2xhc3NOYW1lIiwidXNlciIsIm1hcCIsInN0eWxlIiwid2lkdGgiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJoNSIsImZpcnN0X25hbWUiLCJwIiwiZW1haWwiLCJhIiwiaHJlZiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UsersAvatar.js\n");

/***/ })

});