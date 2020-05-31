import Vue from 'vue'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/assets/css/index.scss' // global css
// 移动端适配
import 'lib-flexible/flexible.js'
import App from './App'
import store from './store'
import router from './router'
import '@/filters' // filters
import '@/permission' // permission 权限
// import '@/'
// 解决移动端click事件300毫秒延迟方法
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body)
    },
    false
  )
}
Vue.config.productionTip = false
let game = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 测试什么时候出发这个方法，
window.onpopstate = function() {
  output();
  game.$router.push({
    path: '/loop'
  })
}


function output() {
  console.log('window.history',window.history);
  console.log('location.href',location.href);
}