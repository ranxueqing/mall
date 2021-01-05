<template>
   <tab-bar>
        <tabbar-item path='/home' activeColor="red">
        <img src="~@/assets/img/tabbar/home.svg" alt="" slot="item-icon">
        <img src="~@/assets/img/tabbar/home_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path='/category' activeColor="red">
        <img src="~@/assets/img/tabbar/category.svg" alt=""  slot="item-icon">
        <img src="~@/assets/img/tabbar/category_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path='/cart' activeColor="red">
        <img src="~@/assets/img/tabbar/shopcart.svg" alt=""  slot="item-icon">
        <img src="~@/assets/img/tabbar/shopcart_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path='/profile' activeColor="red">
        <img src="~@/assets/img/tabbar/profile.svg" alt=""  slot="item-icon">
        <img src="~@/assets/img/tabbar/profile_active.svg" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div> 
      </tabbar-item>

    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabbarItem from 'components/common/tabbar/TabbarItem'
export default {
    name:"MainTabBar",
    components:{
        TabBar,TabbarItem
    }
}
</script>

<style>

</style>