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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar UsersAvatar = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container d-flex \",\n        style: {\n            justifyContent: \"space-around\",\n            flexWrap: \"wrap\"\n        },\n        children: props.user.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card mt-3\",\n                style: {\n                    width: \"13rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.avatar,\n                        className: \"card-img-top\",\n                        alt: user.first_name + user.last_name,\n                        style: {\n                            objectFit: \"none\",\n                            borderRadius: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                        lineNumber: 8,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"card-title\",\n                                children: [\n                                    user.first_name,\n                                    \" \",\n                                    user.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text\",\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"btn btn-primary\",\n                                onClick: function(e) {\n                                    return next_router__WEBPACK_IMPORTED_MODULE_1__.Router.push(\"/users/[id]\", \"/\");\n                                },\n                                children: \"Go somewhere\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, user.id, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, _this);\n};\n_c = UsersAvatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersAvatar);\nvar _c;\n$RefreshReg$(_c, \"UsersAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzQXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQXFDO0FBRXJDLElBQU1DLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzdCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7UUFBQ0MsS0FBSyxFQUFFO1lBQUNDLGNBQWMsRUFBQyxjQUFjO1lBQUVDLFFBQVEsRUFBQyxNQUFNO1NBQUM7a0JBQ3ZGTCxLQUFLLENBQUNNLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNELElBQUk7aUNBQ25CLDhEQUFDTCxLQUFHO2dCQUFlQyxTQUFTLEVBQUMsV0FBVztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFSyxLQUFLLEVBQUUsT0FBTztpQkFBRTs7a0NBQ2hFLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssTUFBTTt3QkFBRVQsU0FBUyxFQUFDLGNBQWM7d0JBQUNVLEdBQUcsRUFBRU4sSUFBSSxDQUFDTyxVQUFVLEdBQUdQLElBQUksQ0FBQ1EsU0FBUzt3QkFBRVgsS0FBSyxFQUFFOzRCQUFDWSxTQUFTLEVBQUMsTUFBTTs0QkFBRUMsWUFBWSxFQUFDLEtBQUs7eUJBQUM7Ozs7OzhCQUFHO2tDQUN2SSw4REFBQ2YsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFdBQVc7OzBDQUN4Qiw4REFBQ2UsSUFBRTtnQ0FBQ2YsU0FBUyxFQUFDLFlBQVk7O29DQUFFSSxJQUFJLENBQUNPLFVBQVU7b0NBQUMsR0FBQztvQ0FBQ1AsSUFBSSxDQUFDUSxTQUFTOzs7Ozs7c0NBQU07MENBQ2xFLDhEQUFDSSxHQUFDO2dDQUFDaEIsU0FBUyxFQUFDLFdBQVc7MENBQUVJLElBQUksQ0FBQ2EsS0FBSzs7Ozs7c0NBQUs7MENBQ3pDLDhEQUFDQyxHQUFDO2dDQUFDQyxJQUFJLEVBQUMsR0FBRztnQ0FBQ25CLFNBQVMsRUFBQyxpQkFBaUI7Z0NBQUNvQixPQUFPLEVBQUVDLFNBQUFBLENBQUM7MkNBQ2xEekIsb0RBQVcsQ0FBQyxhQUFhLEVBQUMsR0FBRyxDQUFDO2lDQUFBOzBDQUM1QixjQUVGOzs7OztzQ0FBSTs7Ozs7OzhCQUNBOztlQVZFUSxJQUFJLENBQUNtQixFQUFFOzs7O3NCQVdYO1NBQ1AsQ0FBQzs7Ozs7YUFDRSxDQUNOO0NBQ0g7QUFuQksxQixLQUFBQSxXQUFXO0FBcUJqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXNlcnNBdmF0YXIuanM/MzE2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IFVzZXJzQXZhdGFyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBcIiBzdHlsZT17e2p1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwifX0+XHJcbiAgICAgIHtwcm9wcy51c2VyLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJjYXJkIG10LTNcIiBzdHlsZT17eyB3aWR0aDogXCIxM3JlbVwiIH19PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9e3VzZXIuZmlyc3RfbmFtZSArIHVzZXIubGFzdF9uYW1lfSBzdHlsZT17e29iamVjdEZpdDpcIm5vbmVcIiwgYm9yZGVyUmFkaXVzOlwiNTAlXCJ9fS8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPnt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17ZSA9PiBcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy91c2Vycy9baWRdJywnLycpXHJcbiAgICAgICAgICAgIH0+XHJcbiAgICAgICAgICAgICAgR28gc29tZXdoZXJlXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2Vyc0F2YXRhcjtcclxuIl0sIm5hbWVzIjpbIlJvdXRlciIsIlVzZXJzQXZhdGFyIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJ1c2VyIiwibWFwIiwid2lkdGgiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwiaDUiLCJwIiwiZW1haWwiLCJhIiwiaHJlZiIsIm9uQ2xpY2siLCJlIiwicHVzaCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/UsersAvatar.js\n");

/***/ })

});