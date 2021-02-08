/*
 * @Author: your name
 * @Date: 2021-02-01 15:59:40
 * @LastEditTime: 2021-02-02 15:32:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\store\mutations.js
 */
export default {
            // mutations 唯一的目的是修改 state中状态
            // mutations 中的每个方法尽可能完成的事件比较单一一点
        addCounter(state,payload){
            payload.count++
        },
        addToCart(state,payload){
            payload.checked=true
            state.cartList.push(payload)
        }    
    
   
    
}