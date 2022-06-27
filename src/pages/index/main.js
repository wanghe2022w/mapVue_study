/**
入口js
 */
import Vue from 'vue'
import Index from './index.vue'

// 生成当前组件的实例
const index = new Vue(Index)
// 挂载当前页面
index.$mount()
