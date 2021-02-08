/*
 * @Author: your name
 * @Date: 2021-02-04 18:02:04
 * @LastEditTime: 2021-02-05 21:03:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\network\category.js
 */
import request from '@/network/request'
export function getCategoryData(){
    return request({
        url:'/category'
    })
}
export function getCategorySubData(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}
