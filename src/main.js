/**
 入口js
 */
import Vue from 'vue'
import App  from './App.vue'
import Fly from 'flyio/dist/npm/wx'

import store from './store/store'

// 设置vue的提示功能关闭
Vue.config.productionTip=false
// 生成当前组件的类型
App.myType = 'app'// 应用


// 生成应用的实例
 const app = new Vue(App)

   // 生成fly的实例
 let fly = new Fly
// 将fly对象放到vue的原型上
Vue.prototype.$fly=fly


// 将store对象放到vue的原型上，为的是每个实例都可以使用
Vue.prototype.$store=store

// 挂载整个页面
app.$mount()
