<!--
 * @Author: your name
 * @Date: 2021-01-30 17:04:56
 * @LastEditTime: 2021-02-01 14:05:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetailButtonBar.vue
-->
<template>
  <div class="bottom-bar">
      <ul class="bar-item">
          <li class="item-logo-1">
              <div></div>
              <span>客服</span>
          </li>
          <li class="item-logo-2">
              <div></div>
              <span>店铺</span>
          </li>
          <li class="item-logo-3">
              <div></div>
              <span>收藏</span>
          </li>
          <li class="item-cart"  @click="addToCart">
              <span>加入购物车</span>
          </li>
          <li class="item-buy">
              <span>购买</span>
          </li>
      </ul>
      
  </div>
</template>

<script>
export default {
    name:"DetailBottomBar",
    methods:{
        addToCart(){
            this.$emit("addToCart")
        }
    }
}
</script>

<style lang="less" scoped>
.bottom-bar{
    height: 49px;
    width: 100%;
    background: white;
    position: fixed;
    left: 0;
    bottom:0px;
    z-index: 3;
    .bar-item{
        
        li{
            float: left;
            span{
                font-size: 14px;
            }
        }
        .item-logo-1 {
            margin-left: 5vw;
            width: 15vw;
            div{
                height: 30px;
                // background-position: 0 -65px;
                background: url('~@/assets/img/detail/detail_bottom.png') no-repeat 0 -73px;
                background-size: 30px;
            }
        }
        .item-logo-2{
            width: 15vw;
            div{
            height: 30px;
            // background-position: 0 -65px;
            background: url('~@/assets/img/detail/detail_bottom.png') no-repeat 0 -134px;
            background-size: 30px;
            }
        }
        .item-logo-3 {
            width: 15vw;
            div{
                height: 30px;
                // background-position: 0 -65px;
                background: url('~@/assets/img/detail/detail_bottom.png') no-repeat 0 0px;
                background-size: 30px;
            }
        }
        .item-cart{
            width:27vw;
            background:#f4f407;
            color: black;
            font-size: 16px;
            line-height: 49px;
            font-weight: bold;
            text-align: center;
            
        }
        .item-buy{
            width: 23vw;
            background:#f0239e;
            color:white;
            font-weight: bold;
            line-height: 49px;
            text-align: center;
        }
    }
    
    
}
</style>