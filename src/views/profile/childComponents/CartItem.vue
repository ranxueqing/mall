<!--
 * @Author: your name
 * @Date: 2021-02-04 17:42:27
 * @LastEditTime: 2021-02-04 17:46:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\profile\childComponents\CartItem.vue
-->
<template>
  <div class="message">
        <ul class="myvip">
          <li @click="goMyCart">
            <img src="@/assets/img/profile/cart.svg" alt="">
            <span>我的购物车</span>
          </li>
          <li>
            <img src="@/assets/img/profile/shopping.svg" alt="">
            <span>下载购物app</span>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
name:"CartItem",
 methods:{
      goMyCart(){
        this.$router.push({
          path:'/cart'
        })
      }
    }
}
</script>

<style lang="less">
.message{
    margin:10px 10vw 10px 3vw;
    .myvip{
      li{
        line-height: 30px;
        img {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }
  }
</style>