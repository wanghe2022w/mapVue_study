import Vue from 'vue'
import List from './list.vue'

// 生成当前组件的实例
const list = new Vue(List)

// 挂载到当前页面
list.$mount()