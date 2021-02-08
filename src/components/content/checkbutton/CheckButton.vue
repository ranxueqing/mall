<!--
 * @Author: your name
 * @Date: 2021-02-02 14:34:23
 * @LastEditTime: 2021-02-02 15:24:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\content\checkbutton\CheckButton.vue
-->
<template>
  <div class="check-button" :class="{'check':isChecked}">
      <img src="~@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:"CheckButton",
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="less" scoped>
    .check-button{
       border-radius: 50%;
    //    background-color: red;
       border:2px solid #aaa
    }
    .check{
        background-color: red;
        border:2px solid #aaa
    }
</style>