"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/UsersAvatar/[id]",{

/***/ "./pages/UsersAvatar/[id].js":
/*!***********************************!*\
  !*** ./pages/UsersAvatar/[id].js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Administrator_Documents_NextJs_project1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Administrator_Documents_NextJs_project1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Administrator_Documents_NextJs_project1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ \"./node_modules/isomorphic-fetch/fetch-npm-browserify.js\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Container */ \"./components/Container.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n// tener los parametros\n\n\nvar _s = $RefreshSig$();\nvar UserProfile = function(param) {\n    var user = param.user;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var id = router.query.id; // su id\n    console.log(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"col-md-6 offset-md-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"card\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-header text-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                                src: user.avatar,\n                                alt: \"\",\n                                style: {\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n                            lineNumber: 15,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"card-body\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                                children: [\n                                    user.id,\n                                    \". \",\n                                    user.first_name,\n                                    \" \",\n                                    user - last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n                                lineNumber: 19,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n                    lineNumber: 14,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n            lineNumber: 12,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Administrator\\\\Documents\\\\NextJs\\\\project1\\\\pages\\\\UsersAvatar\\\\[id].js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, _this);\n};\n_s(UserProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserProfile;\nUserProfile.getInitialProps = function() {\n    var _ref = _asyncToGenerator(C_Users_Administrator_Documents_NextJs_project1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {\n        var res, resJSON;\n        return C_Users_Administrator_Documents_NextJs_project1_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default()(\"https://reqres.in/api/users/\".concat(ctx.query.id));\n                case 2:\n                    res = _ctx.sent;\n                    _ctx.next = 5;\n                    return res.json();\n                case 5:\n                    resJSON = _ctx.sent;\n                    console.log(resJSON);\n                    return _ctx.abrupt(\"return\", {\n                        user: resJSON.data\n                    });\n                case 8:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(ctx) {\n        return _ref.apply(this, arguments);\n    };\n}();\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Vc2Vyc0F2YXRhci9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDeEMsdUJBQXVCO0FBQ2M7QUFDYzs7QUFFbkQsSUFBTUcsV0FBVyxHQUFHLGdCQUFZO1FBQVZDLElBQUksU0FBSkEsSUFBSTs7SUFDdEIsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBRyxHQUFJSyxNQUFNLENBQUNFLEtBQUssQ0FBbEJELEVBQUUsRUFBa0IsUUFBUTtJQUNuQ0UsT0FBTyxDQUFDQyxHQUFHLENBQUNILEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLHFCQUNJLDhEQUFDSiw2REFBUztrQkFDTiw0RUFBQ1EsS0FBRztZQUFDQyxTQUFTLEVBQUMsS0FBSztzQkFDaEIsNEVBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxzQkFBc0I7MEJBQ2pDLDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs7c0NBQ3JCLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMseUJBQXlCO3NDQUNwQyw0RUFBQ0MsS0FBRztnQ0FBQ0MsR0FBRyxFQUFFVCxJQUFJLENBQUNVLE1BQU07Z0NBQUVDLEdBQUcsRUFBQyxFQUFFO2dDQUFDQyxLQUFLLEVBQUU7b0NBQUNDLFlBQVksRUFBQyxLQUFLO2lDQUFDOzs7OztxQ0FBRzs7Ozs7aUNBQzFEO3NDQUNGLDhEQUFDUCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsV0FBVztzQ0FDdEIsNEVBQUNPLElBQUU7O29DQUFFZCxJQUFJLENBQUNFLEVBQUU7b0NBQUMsSUFBRTtvQ0FBQ0YsSUFBSSxDQUFDZSxVQUFVO29DQUFDLEdBQUM7b0NBQUNmLElBQUksR0FBQ2dCLFNBQVM7Ozs7OztxQ0FBTTs7Ozs7aUNBQ3BEOzs7Ozs7eUJBQ0o7Ozs7O3FCQUNKOzs7OztpQkFDSjs7Ozs7YUFDRSxDQUNmO0NBQ0o7R0FwQktqQixXQUFXOztRQUNFSCxrREFBUzs7O0FBRHRCRyxLQUFBQSxXQUFXO0FBc0JqQkEsV0FBVyxDQUFDa0IsZUFBZTtlQUFHLDhMQUFPQyxHQUFHLEVBQUs7WUFDckNDLEdBQUcsRUFDSEMsT0FBTzs7Ozs7MkJBREt2Qix1REFBSyxDQUFDLDhCQUE2QixDQUFlLE9BQWJxQixHQUFHLENBQUNmLEtBQUssQ0FBQ0QsRUFBRSxDQUFFLENBQUM7O29CQUFoRWlCLEdBQUcsWUFBNkQ7OzJCQUNoREEsR0FBRyxDQUFDRSxJQUFJLEVBQUU7O29CQUExQkQsT0FBTyxZQUFtQjtvQkFDaENoQixPQUFPLENBQUNDLEdBQUcsQ0FBQ2UsT0FBTyxDQUFDLENBQUM7aURBQ2Q7d0JBQUNwQixJQUFJLEVBQUVvQixPQUFPLENBQUNFLElBQUk7cUJBQUM7Ozs7OztLQUMxQjtvQkFMa0NKLEdBQUc7OztHQUtyQyxDQUFDO0FBRUosK0RBQWVuQixXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvVXNlcnNBdmF0YXIvW2lkXS5qcz9lOGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiOyBcclxuLy8gdGVuZXIgbG9zIHBhcmFtZXRyb3NcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLWZldGNoXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcblxyXG5jb25zdCBVc2VyUHJvZmlsZSA9ICh7dXNlcn0pID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3Qge2lkfSA9IHJvdXRlci5xdWVyeTsgLy8gc3UgaWRcclxuICAgIGNvbnNvbGUubG9nKGlkKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gYWx0PVwiXCIgc3R5bGU9e3tib3JkZXJSYWRpdXM6XCI1MCVcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dXNlci5pZH0uIHt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLWxhc3RfbmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuVXNlclByb2ZpbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3JlcXJlcy5pbi9hcGkvdXNlcnMvJHtjdHgucXVlcnkuaWR9YClcclxuICBjb25zdCByZXNKU09OID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhyZXNKU09OKTsgXHJcbiAgcmV0dXJuIHt1c2VyOiByZXNKU09OLmRhdGF9XHJcbiAgfTtcclxuICBcclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGU7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsImZldGNoIiwiQ29udGFpbmVyIiwiVXNlclByb2ZpbGUiLCJ1c2VyIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImgzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInJlcyIsInJlc0pTT04iLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/UsersAvatar/[id].js\n");

/***/ })

});