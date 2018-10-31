// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-core'\n    at Function.Module._resolveFilename (module.js:548:15)\n    at Function.Module._load (module.js:475:25)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/usr/local/lib/node_modules/weex-toolkit/node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js:3:13)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/usr/local/lib/node_modules/weex-toolkit/node_modules/_loader-runner@2.3.0@loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/usr/local/lib/node_modules/weex-toolkit/node_modules/_loader-runner@2.3.0@loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/usr/local/lib/node_modules/weex-toolkit/node_modules/_loader-runner@2.3.0@loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/Compilation.js:157:10)\n    at factoryCallback (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/Compilation.js:348:12)\n    at factory (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModuleFactory.js:243:5)\n    at applyPluginsAsyncWaterfall (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModuleFactory.js:94:13)\n    at /usr/local/lib/node_modules/weex-toolkit/node_modules/_tapable@0.2.8@tapable/lib/Tapable.js:268:11");

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(9)

/* template */
var __vue_template__ = __webpack_require__(10)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/guanliyuan/Documents/jiankangyun/yundiweex/src/components/HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_ui__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_weex_ui__);
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: { WxcRichText: __WEBPACK_IMPORTED_MODULE_0_weex_ui__["WxcRichText"], WxcSpecialRichText: __WEBPACK_IMPORTED_MODULE_0_weex_ui__["WxcSpecialRichText"] },
  data: () => (
    {
      configList: [
                {
                    type: 'text',
                    value: '黄色主题',
                    theme: 'yellow'
                }, {
                    type: 'link',
                    value: '自定义颜色link',
                    href: '//h5.m.taobao.com',
                    style: {
                        color: '#546E7A'
                    }
                }, {
                    type: 'tag',
                    value: '满100减20',
                    theme: 'red'
                }, {
                    type: 'tag',
                    value: '自定义标签',
                    style: {
                        fontSize: 26,
                        color: '#ffffff',
                        borderColor: '#3d3d3d',
                        backgroundColor: '#546E7A',
                        height: 36
                    }
                }],
            specialConfigList: [
                {
                    type: 'tag',
                    value: '自由行',
                    style: {
                        fontSize: 24,
                        color: '#3D3D3D',
                        borderColor: '#FFC900',
                        backgroundColor: '#FFC900',
                        borderRadius: 14,
                    }
                },
                {
                    type: 'text',
                    value: '春秋旅游广州-泰国曼谷6天往返单机票自由行自由春秋旅游广州-泰国曼谷6天往返单机票自由行自由行…',
                    theme: 'black',
                    style: {
                        fontSize: 28
                    }
                }
            ],
        }
        ),
        methods: {
            wxcRichTextLinkClick () {}
        }
    });


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [_c('wxc-rich-text', {
    attrs: {
      "configList": _vm.configList
    },
    on: {
      "wxcRichTextLinkClick": _vm.wxcRichTextLinkClick
    }
  }), _c('div', {
    staticClass: ["special-rich"]
  }, [_c('wxc-special-rich-text', {
    attrs: {
      "configList": _vm.specialConfigList
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);