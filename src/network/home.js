/*
 * @Author: your name
 * @Date: 2021-01-05 12:21:28
 * @LastEditTime: 2021-01-07 14:50:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\network\home.js
 */
import {request} from './request'

/**
 * @description: 首页导航信息和最近流行图片等信息的获取
 * @param {*}
 * @return {*}
 */
export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}