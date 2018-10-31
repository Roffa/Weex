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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "/Users/guanliyuan/Documents/jiankangyun/yundiweex/src/page/Studio.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-434c99a6"
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
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "bd_01": {
    "marginTop": "20",
    "marginBottom": "20",
    "borderBottom": "1",
    "solidColor": "#dcdcdc",
    "flexDirection": "row",
    "justifyContent": "space-around"
  },
  "left_img": {
    "width": "200",
    "height": "200",
    "borderRadius": "100",
    "marginLeft": "0",
    "marginTop": "12"
  },
  "right_description": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "flex-start",
    "marginRight": "15"
  },
  "roomName": {
    "fontSize": "36",
    "color": "#000000",
    "fontWeight": "bold",
    "marginTop": "40"
  },
  "duty": {
    "marginTop": "20",
    "fontSize": "28",
    "color": "#000000"
  },
  "joinBtn": {
    "marginTop": "50",
    "marginLeft": "50",
    "color": "#FFFFFF",
    "textAlign": "center",
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "borderRadius": "4"
  },
  "sepline": {
    "marginTop": "20",
    "marginLeft": "10",
    "marginRight": "10",
    "height": "1",
    "backgroundColor": "#dddddd"
  },
  "header": {
    "flexDirection": "row",
    "justifyContent": "flex-start",
    "alignItems": "center",
    "marginTop": "40"
  },
  "flag": {
    "marginLeft": "60",
    "width": "6",
    "height": "28"
  },
  "headerName": {
    "fontSize": "32",
    "fontWeight": "bold",
    "marginLeft": "20"
  },
  "content": {
    "marginTop": "20",
    "marginLeft": "20"
  },
  "richTextStyle": {
    "marginLeft": "50",
    "marginRight": "20",
    "marginTop": "10"
  },
  "cellHeader": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "marginTop": "40"
  },
  "cellTitle": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "flex-start"
  },
  "circleIcon": {
    "width": "14",
    "height": "14",
    "borderRadius": "7",
    "marginLeft": "50"
  },
  "goodsName": {
    "marginLeft": "16",
    "fontSize": "30",
    "fontWeight": "bold"
  },
  "price": {
    "marginRight": "50"
  },
  "serviceContent": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "stretch",
    "marginTop": "30",
    "marginLeft": "70",
    "marginRight": "30"
  },
  "brief": {
    "fontSize": "28",
    "color": "#808080",
    "flex": 4
  },
  "purchaseBtnDiv": {
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "purchaseBtn": {
    "color": "#FFFFFF",
    "paddingTop": "6",
    "paddingRight": "20",
    "paddingBottom": "6",
    "paddingLeft": "20",
    "borderRadius": "4"
  },
  "list": {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "90"
  },
  "list1": {
    "position": "fixed",
    "top": "0",
    "left": "0",
    "right": "0",
    "bottom": "0"
  },
  "exitBtn": {
    "position": "fixed",
    "left": "0",
    "right": "0",
    "bottom": "0",
    "height": "90",
    "fontSize": "36",
    "color": "#FFFFFF",
    "textAlign": "center",
    "paddingTop": "20",
    "paddingRight": "20",
    "paddingBottom": "20",
    "paddingLeft": "20"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_weex_ui__ = __webpack_require__(7);
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
//
//

    
    var modal = weex.requireModule('modal')
    const storage = weex.requireModule('storage')
    var stream = weex.requireModule('stream');

    var studioEvent = weex.requireModule('studioEvent');

    var globalEvent = weex.requireModule('globalEvent');

    /* harmony default export */ __webpack_exports__["default"] = ({
        components: { WxcLoading: __WEBPACK_IMPORTED_MODULE_0_weex_ui__["WxcLoading"], WxcPartLoading: __WEBPACK_IMPORTED_MODULE_0_weex_ui__["WxcPartLoading"], WxcDialog: __WEBPACK_IMPORTED_MODULE_0_weex_ui__["WxcDialog"]},
        data () {
            return {
                isLoadFinish:false,
                romeName: '',
                department: '',
                duty: '',
                logo: '',
                contentDetail:'',
                lists: [],
                baseUrl:'',
                userId:'',
                studioId:'',
                phone:'',
                getResult:'',//数据源

                //native themeColor
                mainColor:{'background-color':'#6e1419'},
                mainTextColor:{'color':'#6e1419'},

                //按钮显隐
                isShowJoinBtn:false,
                isShowExitBtn:false,

                //------加载提示相关
                loadingType:'trip',
                loadingText:'加载中...',
                showLoading:true,
                loadingInterval:0,

                //------弹窗相关
                showDialog:false,
                dialogTitle:'提示',
                dialogContent:'是否退出该工作室',
                confirmText:'确认',
                cancelText:'取消',
                single: false,
                showNoPrompt: false,
                isChecked: false,
                confirmColor:'#FF0000',

                //------简介富文本高度
                richTextHeight:{'height': '200px'}
            }
        },

        created: function() {

            var me = this;
            if (WXEnvironment.platform == 'Web' ) {
                var bundleUrl = weex.config.bundleUrl;      //获取链接地址 如https://jkbtest.sybercare.com//attached/000100010001/lixia/index.html

                var baseUrl = bundleUrl.slice(0,bundleUrl.indexOf("/attached"));  
                var studioId = bundleUrl.match(/\d+(?=\/)/g);  //获取工作室id
                console.log("bundleType:%s  bundleUrl:%s studioId:%s baseUrl:%s", weex.config.bundleType, bundleUrl, studioId, baseUrl);
                
                    me.baseUrl = baseUrl,
                    me.studioId = studioId,
                         
                         
                    storage.setItem("baseUrl",baseUrl, event=>{})

                    var GET_URL = me.baseUrl + '/studio/serviceCfgInfo.mv?' + 'userId=' + me.userId + '&studioId=' + me.studioId;
                    console.log("请求地址:"+GET_URL);

                    stream.fetch({
                        method: 'GET',
                        url: GET_URL,
                        type:'json'
                    }, function(ret) {

                        if(!ret.ok){
                            me.getResult = "request failed";
                            console.log("错误结果"+ret.status+"||"+ret.statusText+"||"+ret.data);
                        }else{
                            console.log('我get:'+ret);
                            me.isLoadFinish = true;
                            me.getResult = ret.data.syb_data;

                            me.logo = me.baseUrl + me.getResult.logo;


                            me.romeName = me.getResult.comCName;
                            me.department = me.getResult.department;
                            me.duty = me.getResult.professionalTitle;
                            me.contentDetail = me.getResult.remark;
                            me.lists = me.getResult.services;
                            me.phone = me.getResult.phone;
                            var buttenType = me.getResult.buttenType;

                            if (buttenType == '0'){
                                me.isShowExitBtn = true;
                            }else if (buttenType == '1'){
                                me.isShowJoinBtn = true;

                            }
                        }
                    },function(response){
                        console.log('get in progress:'+response.length);
                        me.getResult = "bytes received:"+response.length;
                    });
                
            }else  {
                studioEvent.getNativeAppInfo(ret=>{
                    me.baseUrl = ret.baseUrl,
                    me.studioId = ret.studioId,
                    me.userId = ret.userId;
                    me.mainColor = {'background-color':'#'+ret.mainColorValue},
                    me.mainTextColor = {'color':'#'+ret.mainColorValue};
                    storage.setItem("baseUrl",ret.baseUrl, event=>{})

                    var GET_URL = me.baseUrl + '/studio/serviceCfgInfo.mv?' + 'userId=' + me.userId + '&studioId=' + me.studioId;
                    console.log(GET_URL);

                    stream.fetch({
                        method: 'GET',
                        url: GET_URL,
                        type:'json'
                    }, function(ret) {

                        if(!ret.ok){
                            me.getResult = "request failed";
                            console.log(me.getResult);
                        }else{
                            console.log('get:'+ret);
                            me.isLoadFinish = true;
                            me.getResult = ret.data.syb_data;

                            me.logo = me.baseUrl + me.getResult.logo;

                            me.romeName = me.getResult.comCName;
                            me.department = me.getResult.department;
                            me.duty = me.getResult.professionalTitle;
                            me.contentDetail = me.getResult.remark;
                            me.lists = me.getResult.services;
                            me.phone = me.getResult.phone;
                            var buttenType = me.getResult.buttenType;

                            if (buttenType == '0'){
                                me.isShowExitBtn = true;
                            }else if (buttenType == '1'){
                                me.isShowJoinBtn = true;

                            }
                        }
                    },function(response){
                        console.log('get in progress:'+response.length);
                        me.getResult = "bytes received:"+response.length;
                    });
                })
            }

            globalEvent.addEventListener("geolocation", function (e) {
                console.log('geolocationheight:'+e.height);
                me.richTextHeight = {'height':e.height + 'px'};
            });
        },

        methods: {
            //加入工作室
            didClickjoinBtn: function () {
                var me = this;
                if (WXEnvironment.platform == 'iOS'){
                    var joinUrl = me.baseUrl + '/health/joinStudioJumpPhone.do?' + 'comcode=' + me.studioId + '&phone=' + me.phone;
                    weex.requireModule("event").pushWebViewController(joinUrl);
                }else if(WXEnvironment.platform == 'android'){
                    var joinUrl = me.baseUrl + '/health/joinStudioJumpPhone.do?' + 'comcode=' + me.studioId + '&phone=' + me.phone;
                    weex.requireModule("studioEvent").pushWebViewController(joinUrl);
                }
            },

            //跳转商城
            didClickPurchaseBtn: function (arg) {
                if (WXEnvironment.platform == 'iOS'){
                    weex.requireModule("event").pushStoreWebViewController(arg);
                }else if(WXEnvironment.platform == 'android'){
                    weex.requireModule("studioEvent").pushStoreWebViewController(arg);
                }
            },

            //退出工作室
            didClickExitBtn: function () {
                var me = this;
                me.showDialog = true;
            },

            dialogConfirmBtnClick() {
                var me = this;
                this.showDialog = false;
                var GET_URL = me.baseUrl + '/services/RestServices/yundihealth/users/userQuitStudio?' + 'userId=' + me.userId + '&comCode=' + me.studioId;
                stream.fetch({
                    method: 'GET',
                    url: GET_URL,
                    type:'json'
                }, function(ret) {
                    if(ret.ok){
                        console.log('get:'+ret);
                        if (WXEnvironment.platform == 'iOS'){
                            weex.requireModule("event").popWeexViewController();
                        }else if(WXEnvironment.platform == 'android'){
                            weex.requireModule("studioEvent").popWeexViewController();
                        }
                    }
                },function(response){
                    console.log('get in progress:'+response.length);
                });
            },
            dialogCancelBtnClick () {
                this.showDialog = false;

            },

            //richText内容填充完成后，修改高度
            onMapLoaded:function(e) {
//                console.log("map loaded"+JSON.stringify(e));
                var me = this;
                var height = e.height * 2;
                me.richTextHeight = {'height':height + 'px'};
            },
        },
    });



/***/ }),
/* 7 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-core'\n    at Function.Module._resolveFilename (module.js:548:15)\n    at Function.Module._load (module.js:475:25)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at Object.<anonymous> (/usr/local/lib/node_modules/weex-toolkit/node_modules/_babel-loader@7.1.5@babel-loader/lib/index.js:3:13)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)\n    at Function.Module._load (module.js:498:3)\n    at Module.require (module.js:597:17)\n    at require (internal/module.js:11:18)\n    at loadLoader (/usr/local/lib/node_modules/weex-toolkit/node_modules/_loader-runner@2.3.0@loader-runner/lib/loadLoader.js:13:17)\n    at iteratePitchingLoaders (/usr/local/lib/node_modules/weex-toolkit/node_modules/_loader-runner@2.3.0@loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/usr/local/lib/node_modules/weex-toolkit/node_modules/_loader-runner@2.3.0@loader-runner/lib/LoaderRunner.js:362:2)\n    at NormalModule.doBuild (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/Compilation.js:157:10)\n    at factoryCallback (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/Compilation.js:348:12)\n    at factory (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModuleFactory.js:243:5)\n    at applyPluginsAsyncWaterfall (/usr/local/lib/node_modules/weex-toolkit/node_modules/_webpack@3.12.0@webpack/lib/NormalModuleFactory.js:94:13)\n    at /usr/local/lib/node_modules/weex-toolkit/node_modules/_tapable@0.2.8@tapable/lib/Tapable.js:268:11");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.isLoadFinish) ? _c('div', [(_vm.lists.length != 0) ? _c('div', [_c('list', {
    class: [_vm.isShowExitBtn ? 'list' : 'list1']
  }, _vm._l((_vm.lists), function(dict, i) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [(i == 0) ? _c('div', [_c('div', {
      staticClass: ["organ_detail_01"]
    }, [_c('div', {
      staticClass: ["bd_01"]
    }, [_c('div', {
      staticClass: ["left_img"]
    }, [_c('image', {
      staticClass: ["left_img"],
      attrs: {
        "src": _vm.logo
      }
    })]), _c('div', {
      staticClass: ["right_description"]
    }, [_c('text', {
      staticClass: ["roomName"]
    }, [_vm._v(_vm._s(_vm.romeName))]), _c('text', {
      staticClass: ["duty"]
    }, [_vm._v(_vm._s(_vm.department) + " | " + _vm._s(_vm.duty))]), (_vm.isShowJoinBtn) ? _c('div', [_c('text', {
      staticClass: ["joinBtn"],
      style: [_vm.mainColor],
      on: {
        "click": _vm.didClickjoinBtn
      }
    }, [_vm._v("加入工作室")])]) : _vm._e()])])]), _c('div', {
      staticClass: ["sepline"]
    }), _c('div', {
      staticClass: ["organ_detail_02"]
    }, [_c('div', {
      staticClass: ["header"]
    }, [_c('div', {
      staticClass: ["flag"],
      style: [_vm.mainColor]
    }), _c('text', {
      staticClass: ["headerName"]
    }, [_vm._v("简介")])]), _c('div', {
      staticClass: ["content"]
    }, [_c('richText', {
      staticClass: ["richTextStyle"],
      style: [_vm.richTextHeight],
      attrs: {
        "text": _vm.contentDetail
      },
      on: {
        "mapLoaded": _vm.onMapLoaded
      }
    })], 1)]), _c('div', {
      staticClass: ["header"]
    }, [_c('div', {
      staticClass: ["flag"],
      style: [_vm.mainColor]
    }), _c('text', {
      staticClass: ["headerName"]
    }, [_vm._v("健康服务")])]), _c('div', {
      staticClass: ["sepline"]
    })]) : _vm._e(), (dict.price != 0) ? _c('div', [_c('div', {
      staticClass: ["cellbg"]
    }, [_c('div', {
      staticClass: ["cellHeader"]
    }, [_c('div', {
      staticClass: ["cellTitle"]
    }, [_c('div', {
      staticClass: ["circleIcon"],
      style: [_vm.mainColor]
    }), _c('text', {
      staticClass: ["goodsName"]
    }, [_vm._v(_vm._s(dict.goodsName))])]), _c('text', {
      staticClass: ["price"],
      style: [_vm.mainTextColor]
    }, [_vm._v(_vm._s(dict.price) + "元")])]), _c('div', {
      staticClass: ["serviceContent"]
    }, [_c('text', {
      staticClass: ["brief"]
    }, [_vm._v(_vm._s(dict.goodsDescribe))]), _c('div', {
      staticClass: ["purchaseBtnDiv"]
    }, [_c('text', {
      staticClass: ["purchaseBtn"],
      style: [_vm.mainColor],
      on: {
        "click": function($event) {
          _vm.didClickPurchaseBtn(dict.goodsUrl)
        }
      }
    }, [_vm._v("购买")])])]), _c('div', {
      staticClass: ["sepline"]
    })])]) : _c('div', [_c('div', {
      staticClass: ["cellbg"]
    }, [_c('div', {
      staticClass: ["cellHeader"]
    }, [_c('div', {
      staticClass: ["cellTitle"]
    }, [_c('div', {
      staticClass: ["circleIcon"],
      style: [_vm.mainColor]
    }), _c('text', {
      staticClass: ["goodsName"]
    }, [_vm._v(_vm._s(dict.goodsName))])])]), _c('div', {
      staticClass: ["serviceContent"]
    }, [_c('text', {
      staticClass: ["brief"],
      staticStyle: {
        flex: "1"
      }
    }, [_vm._v(_vm._s(dict.goodsDescribe))])]), _c('div', {
      staticClass: ["sepline"]
    })])])])
  })), (_vm.isShowExitBtn) ? _c('div', [_c('text', {
    staticClass: ["exitBtn"],
    style: [_vm.mainColor],
    on: {
      "click": _vm.didClickExitBtn
    }
  }, [_vm._v("退出工作室")])]) : _vm._e()]) : _c('div', [_c('scroller', {
    class: [_vm.isShowExitBtn ? 'list' : 'list1']
  }, [_c('div', {
    staticClass: ["organ_detail_01"]
  }, [_c('div', {
    staticClass: ["bd_01"]
  }, [_c('div', {
    staticClass: ["left_img"]
  }, [_c('image', {
    staticClass: ["left_img"],
    attrs: {
      "src": _vm.logo
    }
  })]), _c('div', {
    staticClass: ["right_description"]
  }, [_c('text', {
    staticClass: ["roomName"]
  }, [_vm._v(_vm._s(_vm.romeName))]), _c('text', {
    staticClass: ["duty"]
  }, [_vm._v(_vm._s(_vm.department) + " | " + _vm._s(_vm.duty))]), (_vm.isShowJoinBtn) ? _c('div', [_c('text', {
    staticClass: ["joinBtn"],
    style: [_vm.mainColor],
    on: {
      "click": _vm.didClickjoinBtn
    }
  }, [_vm._v("加入工作室")])]) : _vm._e()])])]), _c('div', {
    staticClass: ["sepline"]
  }), _c('div', {
    staticClass: ["organ_detail_02"]
  }, [_c('div', {
    staticClass: ["header"]
  }, [_c('div', {
    staticClass: ["flag"],
    style: [_vm.mainColor]
  }), _c('text', {
    staticClass: ["headerName"]
  }, [_vm._v("简介")])]), _c('div', {
    staticClass: ["content"]
  }, [_c('richText', {
    staticClass: ["richTextStyle"],
    style: [_vm.richTextHeight],
    attrs: {
      "text": _vm.contentDetail
    },
    on: {
      "mapLoaded": _vm.onMapLoaded
    }
  })], 1)])]), (_vm.isShowExitBtn) ? _c('div', [_c('text', {
    staticClass: ["exitBtn"],
    style: [_vm.mainColor],
    on: {
      "click": _vm.didClickExitBtn
    }
  }, [_vm._v("退出工作室")])]) : _vm._e()]), _c('wxc-dialog', {
    attrs: {
      "title": _vm.dialogTitle,
      "content": _vm.dialogContent,
      "confirmText": _vm.confirmText,
      "cancelText": _vm.cancelText,
      "show": _vm.showDialog,
      "single": _vm.single,
      "isChecked": _vm.isChecked,
      "showNoPrompt": _vm.showNoPrompt,
      "mainBtnColor": _vm.confirmColor
    },
    on: {
      "wxcDialogCancelBtnClicked": _vm.dialogCancelBtnClick,
      "wxcDialogConfirmBtnClicked": _vm.dialogConfirmBtnClick
    }
  })], 1) : _c('div', [_c('wxc-loading', {
    attrs: {
      "show": _vm.showLoading,
      "type": _vm.loadingType,
      "loadingText": _vm.loadingText,
      "interval": _vm.loadingInterval
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);