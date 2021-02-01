<!--
 * @Author: your name
 * @Date: 2021-01-04 12:29:41
 * @LastEditTime: 2021-01-21 17:35:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\App.vue
-->
<template>
  <div id="app">
    <!-- keep-alive 可以保存首页状态，使组件保持活跃状态 -->
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
  
</template>

<script>

import MainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  name: 'App',
  components: {
   MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
</style>
