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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar UsersAvatar = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container d-flex \",\n        style: {\n            justifyContent: \"space-around\",\n            flexWrap: \"wrap\"\n        },\n        children: props.user.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card mt-3\",\n                style: {\n                    width: \"13rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.avatar,\n                        className: \"card-img-top\",\n                        alt: \"...\",\n                        style: {\n                            objectFit: \"none\",\n                            borderRadius: borderRadius\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                        lineNumber: 6,\n                        columnNumber: 11\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                className: \"card-title\",\n                                children: [\n                                    user.first_name,\n                                    \" \",\n                                    user.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 8,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"card-text\",\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 9,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                className: \"btn btn-primary\",\n                                children: \"Go somewhere\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                                lineNumber: 10,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                        lineNumber: 7,\n                        columnNumber: 11\n                    }, _this1)\n                ]\n            }, user.id, true, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n                lineNumber: 5,\n                columnNumber: 9\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\components\\\\UsersAvatar.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, _this);\n};\n_c = UsersAvatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersAvatar);\nvar _c;\n$RefreshReg$(_c, \"UsersAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VzZXJzQXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQzdCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxtQkFBbUI7UUFBQ0MsS0FBSyxFQUFFO1lBQUNDLGNBQWMsRUFBQyxjQUFjO1lBQUVDLFFBQVEsRUFBQyxNQUFNO1NBQUM7a0JBQ3ZGTCxLQUFLLENBQUNNLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFNBQUNELElBQUk7aUNBQ25CLDhEQUFDTCxLQUFHO2dCQUFlQyxTQUFTLEVBQUMsV0FBVztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFSyxLQUFLLEVBQUUsT0FBTztpQkFBRTs7a0NBQ2hFLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVKLElBQUksQ0FBQ0ssTUFBTTt3QkFBRVQsU0FBUyxFQUFDLGNBQWM7d0JBQUNVLEdBQUcsRUFBQyxLQUFLO3dCQUFFVCxLQUFLLEVBQUU7NEJBQUNVLFNBQVMsRUFBQyxNQUFNOzRCQUFFQyxZQUFZLEVBQVpBLFlBQVk7eUJBQUM7Ozs7OzhCQUFHO2tDQUNyRyw4REFBQ2IsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFdBQVc7OzBDQUN4Qiw4REFBQ2EsSUFBRTtnQ0FBQ2IsU0FBUyxFQUFDLFlBQVk7O29DQUFFSSxJQUFJLENBQUNVLFVBQVU7b0NBQUMsR0FBQztvQ0FBQ1YsSUFBSSxDQUFDVyxTQUFTOzs7Ozs7c0NBQU07MENBQ2xFLDhEQUFDQyxHQUFDO2dDQUFDaEIsU0FBUyxFQUFDLFdBQVc7MENBQUVJLElBQUksQ0FBQ2EsS0FBSzs7Ozs7c0NBQUs7MENBQ3pDLDhEQUFDQyxHQUFDO2dDQUFDQyxJQUFJLEVBQUMsR0FBRztnQ0FBQ25CLFNBQVMsRUFBQyxpQkFBaUI7MENBQUMsY0FFeEM7Ozs7O3NDQUFJOzs7Ozs7OEJBQ0E7O2VBUkVJLElBQUksQ0FBQ2dCLEVBQUU7Ozs7c0JBU1g7U0FDUCxDQUFDOzs7OzthQUNFLENBQ047Q0FDSDtBQWpCS3ZCLEtBQUFBLFdBQVc7QUFtQmpCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vyc0F2YXRhci5qcz8zMTY3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFVzZXJzQXZhdGFyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBcIiBzdHlsZT17e2p1c3RpZnlDb250ZW50Olwic3BhY2UtYXJvdW5kXCIsIGZsZXhXcmFwOlwid3JhcFwifX0+XHJcbiAgICAgIHtwcm9wcy51c2VyLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJjYXJkIG10LTNcIiBzdHlsZT17eyB3aWR0aDogXCIxM3JlbVwiIH19PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyfSBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBhbHQ9XCIuLi5cIiAgc3R5bGU9e3tvYmplY3RGaXQ6XCJub25lXCIsIGJvcmRlclJhZGl1c319Lz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e3VzZXIuZmlyc3RfbmFtZX0ge3VzZXIubGFzdF9uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICBHbyBzb21ld2hlcmVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJzQXZhdGFyO1xyXG4iXSwibmFtZXMiOlsiVXNlcnNBdmF0YXIiLCJwcm9wcyIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsInVzZXIiLCJtYXAiLCJ3aWR0aCIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsIm9iamVjdEZpdCIsImJvcmRlclJhZGl1cyIsImg1IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInAiLCJlbWFpbCIsImEiLCJocmVmIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UsersAvatar.js\n");

/***/ })

});