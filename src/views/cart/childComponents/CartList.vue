<!--
 * @Author: your name
 * @Date: 2021-02-01 17:24:29
 * @LastEditTime: 2021-02-04 16:58:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\cart\childComponents\CartList.vue
-->
<template>
  
    <div class="cart-list"> 
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item" ></cart-list-item>
      <ul v-if="cartList.length===0">
        <li style="text-align:center">购物车空空如也</li>
      </ul>
      <ul v-else>
        <li style="text-align:center">这是您的购物车</li>
      </ul>
    </div>
   
</template>

<script>

import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'
import Scroll from '@/components/common/scroll/Scroll'
export default {
  components: {CartListItem,Scroll},
  name:"CartList",
  computed:{
    ...mapGetters(['cartLength','cartList'])
  },
  
}
</script>

<style lang="less" scoped>
.cart-list{
  height: 100%;
}
.content{
  height: calc(100% - 49px - 44px - 40px);
}
</style>