<!--
 * @Author: your name
 * @Date: 2021-01-04 17:41:03
 * @LastEditTime: 2021-02-04 17:46:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\profile\Profile.vue
-->
<template>
  <div class="profile">
      <nav-bar class="nav-bar">
        <div slot="center">我的档案</div>
      </nav-bar>
      <!-- 用户名 -->
      <user-info></user-info>
      <!-- 用户名结束 -->
      <!-- 余额 -->
      <my-member></my-member>
      <div class="line"></div>
      <message-item></message-item>
      <div class="line"></div>
      <cart-item></cart-item>
      <div></div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import UserInfo from './childComponents/UserInfo.vue'
import MyMember from './childComponents/MyMember.vue'
import MessageItem from './childComponents/MessageItem.vue'
import CartItem from './childComponents/CartItem.vue'

export default {
    name:"Profile",
    components:{NavBar,UserInfo, MyMember, MessageItem, CartItem,},
   
}
</script>

<style lang="less" scoped>
.profile{
  .nav-bar{
  color: #fff;
  background: var(--color-text);
  font-weight: bold;
  }
  
  
  
  .line{
    background: #eee;
    border: 5px solid #eee;
  }
}
</style>