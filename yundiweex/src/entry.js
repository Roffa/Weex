/* global Vue */
import mixins from '@/mixins'

// register global mixins.
Vue.mixin(mixins)

/* weex initialized here, please do not move this line */
const router = require('./router')   //导入路由文件
const App = require('@/index.vue')   //导入根组件
/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App))  //‘#root根组件id  等同 App.el = '#root'
router.push('/')    //指定一个路由入口，初始化显示的页面内容
