<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:19
 * @LastEditTime: 2021-02-01 19:19:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\cart\Cart.vue
-->
<template>
  <div class="cart">
      <nav-bar class="nav-bar">
        <div slot="center" >购物车({{cartLength}})</div>
      </nav-bar>
      <!-- 商品列表 -->
      <cart-list></cart-list>
      <!-- 底部汇总 -->
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
// getters
import {mapGetters} from 'vuex'
import CartList from './childComponents/CartList.vue'
export default {
  components: { NavBar,CartList, },
  name:"Cart",
  computed:{
        // 实现 将getters 中的属性，并作为计算属性使用
        ...mapGetters(['cartLength'])
  },
}
</script>

<style lang="less" scoped>
.cart{
  height: 100vh;
  position: relative;
}
  .nav-bar{
    background: var(--color-text);
    color: #fff;
    font-weight: bold;
  }
</style>
