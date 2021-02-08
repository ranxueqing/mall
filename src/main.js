/*
 * @Author: your name
 * @Date: 2021-01-04 12:29:41
 * @LastEditTime: 2021-02-04 10:26:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import less from 'less'
import Toast from '@/components/common/toast'
import fastclick from 'fastclick'
Vue.config.productionTip = false
Vue.use(Toast)
Vue.use(less)
fastclick.attach(document.body) 
Vue.prototype.$bus = new Vue()
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
