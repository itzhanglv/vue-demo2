import Vue from 'vue'
import app from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router.js'
import './default.css'
Vue.use(ElementUI)
Vue.use(VueRouter)

console.log('bhahha')
const vm = new Vue({
  el:"#app",
  render: c => c(app),
  router
})