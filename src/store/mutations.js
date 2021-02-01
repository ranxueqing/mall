/*
 * @Author: your name
 * @Date: 2021-02-01 15:59:40
 * @LastEditTime: 2021-02-01 16:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\store\mutations.js
 */
export default {
    mutations:{
            // mutations 唯一的目的是修改 state中状态
            // mutations 中的每个方法尽可能完成的事件比较单一一点
        addCount(state,payload){
            payload.count +=1
        },
        addList(state,payload){
            state.cartList.count=0
        }    
    }
   
    
}