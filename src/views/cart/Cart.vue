<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:19
 * @LastEditTime: 2021-02-01 15:58:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\cart\Cart.vue
-->
<template>
  <div>
      <nav-bar class="nav-bar">
        <div slot="center" >购物车({{$store.state.cartList.length}})</div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'

export default {
  components: { NavBar },
  name:"Cart"
}
</script>

<style lang="less" scoped>
  .nav-bar{
    background: var(--color-text);
    color: #fff;
    font-weight: bold;
  }
</style>
