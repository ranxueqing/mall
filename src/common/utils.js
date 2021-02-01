/*
 * @Author: your name
 * @Date: 2021-01-29 19:02:48
 * @LastEditTime: 2021-01-30 14:59:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\common\utils.js
 */
  // 防抖函数
  export function debounce(func,delay){
    let timer = null;
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,args)
            
        },delay)
    }
    }
export function formatDate(date,fmt){
    // 1、获取年份
    if(/(y+)/.test(fmt)){
        fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substring(4-RegExp.$1.length))
    }

    // 2、获取月份
    let o = {
        'M+':date.getMonth()+1,
        'd+':date.getDate(),
        'h+':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
    }
    for(let k in o){
        if(new RegExp(`(${k})`).test(fmt)){
            let str = o[k]+''
            fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str))
        }
    }
    return fmt

}
function padLeftZero(str){
    return ('00'+str).substr(str.length)
}