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
// console.log('window.history', window.history)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

// 测试什么时候出发这个方法，
// window.onpopstate = function() {
//   output();
//   // window.history.go(-1);
//   alert('我被出发了');
//   window.history.go(-2);
// }

function output() {
  console.log('window.history',window.history);
  console.log('location.href',location.href);
  // console.log('location.href',location.href);
}
// console.log('-------------home.vue-------------')
// console.log('window.history',window.history)
// console.log('document.referrer',document.referrer)
// console.log('-------------home.vue-------------')