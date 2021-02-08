/*
 * @Author: your name
 * @Date: 2021-02-03 15:32:28
 * @LastEditTime: 2021-02-03 16:15:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\toast\index.js
 */
import Toast from '@/components/common/toast/Toast'
const obj = {}
obj.install = function (Vue){
    console.log("hhhh")
    // 创建组件构造器
    const toastConstructor = Vue.extend(Toast)
    // 2、new 的方式，根据组件构造器，可以创建出来一个组件对象
    const toast = new toastConstructor()
    // 3、将组件对象，手动挂载到某一个元素上
    toast.$mount(document.createElement("div"))
    // 4、toast.$el 对应的就是 div
    document.body.appendChild(toast.$el)
    Vue.prototype.$toast = toast
}
export default obj