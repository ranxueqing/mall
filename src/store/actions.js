/*
 * @Author: your name
 * @Date: 2021-02-01 15:59:29
 * @LastEditTime: 2021-02-01 16:49:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\store\actions.js
 */
export default {
    actions:{
        addCart(context,payload){
            // 1、查找之前数组中是否有该商品
            let oldProduct = context.state.cartList.find(item=>{
                return item.iid===payload.iid
            })
            // 2、判断
            if(oldProduct){
                // oldProduct.count +=1
                this.$store.commit("addCount",oldProduct)
            }else{
                payload.count = 1
                // context.state.cartList.push(payload)
                this.$store.commit("addList",payload)
            }
            
        },
    }
}