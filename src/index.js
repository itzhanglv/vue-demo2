import Vue from 'vue'
import app from './App.vue'

console.log('bhahha')
const vm = new Vue({
  el:"#app",
  render: c => c(app)
})