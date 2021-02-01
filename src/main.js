/*
 * @Author: your name
 * @Date: 2021-01-04 12:29:41
 * @LastEditTime: 2021-02-01 14:37:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
Vue.config.productionTip = false

Vue.use(less)
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
