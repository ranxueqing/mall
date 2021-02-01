/*
 * @Author: your name
 * @Date: 2021-02-01 14:34:16
 * @LastEditTime: 2021-02-01 16:03:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\store\index.js
 */
import Vuex from 'vuex'
import Vue from 'vue'

import mutations from '@/store/mutations'
import actions from '@/store/actions'
Vue.use(Vuex)

// 创建store 对象
const store = new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:mutations,
    actions:actions,
    
})
// 挂在Vue实例上
export default store