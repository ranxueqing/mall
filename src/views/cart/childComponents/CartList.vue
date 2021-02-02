<!--
 * @Author: your name
 * @Date: 2021-02-01 17:24:29
 * @LastEditTime: 2021-02-01 22:29:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\cart\childComponents\CartList.vue
-->
<template>
  <div class="cart-list">
      <scroll class="content">
          <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item"></cart-list-item>
      </scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll'
import {mapGetters} from 'vuex'
import CartListItem from './CartListItem.vue'
export default {
  components: { Scroll,CartListItem, },
  name:"CartList",
  computed:{
    ...mapGetters(['cartLength','cartList'])
  }
}
</script>

<style lang="less" scoped>
.cart-list{
    height: 100vh;
    .content{
    // height: calc(100% - 93px);
        position: absolute;
        top: 44px;
        bottom: 49px;
        overflow: hidden;
  }
}

</style>