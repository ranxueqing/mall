/*
 * @Author: your name
 * @Date: 2021-02-01 16:04:48
 * @LastEditTime: 2021-02-01 16:05:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\store\getters.js
 */
export default {
    cartLength(state){
        return state.cartList.length
    }
}