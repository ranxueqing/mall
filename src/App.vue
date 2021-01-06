<template>
  <div id="app">
    <router-view></router-view>
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
