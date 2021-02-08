<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:19
 * @LastEditTime: 2021-02-04 16:53:04
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
      <scroll class="content" ref="scroll">
        <cart-list></cart-list>
      </scroll>
      
      <!-- 底部汇总 -->
      <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import CartBottomBar from '@/views/cart/childComponents/CartBottomBar'
// getters
import {mapGetters} from 'vuex'
import CartList from './childComponents/CartList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
export default {
  components: { NavBar,CartList, Scroll,CartBottomBar },
  name:"Cart",
  computed:{
        // 实现 将getters 中的属性，并作为计算属性使用
        ...mapGetters(['cartLength'])
  },
  updated(){
  this.$refs.scroll.refresh()
  },
  activated(){
    this.$refs.scroll.refresh()
  },
  methods:{
    cartItemLoad(){
      console.log("123")
    }
  }
}
</script>

<style lang="less" scoped>
  .cart{
    height: calc(100vh - 44px);
  }
  .nav-bar{
    background: var(--color-text);
    color: #fff;
    font-weight: bold;
    z-index: 999;
  }
  .content{
    // position: absolute;
    // background: yellow;
    // top: 44px;
    // bottom: 49px;
    // left: 0;
    // right: 0;
    // overflow: hidden;
    height: calc(100% - 44px - 40px);
    overflow: hidden;
  }
</style>
