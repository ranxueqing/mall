/*
 * @Author: your name
 * @Date: 2021-02-01 15:59:29
 * @LastEditTime: 2021-02-04 16:04:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\store\actions.js
 */
export default {
        addCart(context,payload){
            return new Promise((resolve,reject)=>{
                // 1、查找之前数组中是否有该商品
                let oldProduct = context.state.cartList.find(item=>{
                    return item.iid===payload.iid
                })
                // 2、判断
                if(oldProduct){
                    // oldProduct.count +=1
                    context.commit("addCounter",oldProduct)
                    resolve("加入购物车成功")
                }else{
                    payload.count = 1
                    // context.state.cartList.push(payload)
                    
                    context.commit("addToCart",payload)
                    resolve('加入购物车成功')
                }
            })
            
        }
    
}