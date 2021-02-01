<!--
 * @Author: your name
 * @Date: 2021-01-22 15:07:53
 * @LastEditTime: 2021-01-29 16:30:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetailShopInfo.vue
-->
<template>
  <div class="shop-info" v-if="Object.keys(shops).length!==0">
      <!-- 头部 -->
      <div class="shop-top">
          <img :src="shops.logo" alt="">
          <span class="title">{{shops.name}}</span>
      </div>
      <!-- 中间部分 -->
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sells">
                  <div class="sells-count">
                      {{shops.sells|sellFilter(shops.sells)}}
                  </div>
                  <div class="sells-text">
                      总销量
                  </div>
              </div>
              <div class="info-goods">
                  <div class="goods-count">
                      {{shops.goodsCount}}
                  </div>
                  <div class="goods-text">
                      全部宝贝
                  </div>
              </div>
              
          </div>

          <div class="shop-middle-item shop-middle-right">
              <table>
                  <tr v-for="item in shops.score" :key="item.name">
                      <th>{{item.name}}:</th>
                      <td class="score" :class="{'score-better':item.isBetter}" ><span class="score-text">{{item.score}}</span></td>
                      <td class="better" :class="{'better-more':item.isBetter}"><span class="better-text">{{item.isBetter?"高":"低"}}</span></td>
                  </tr>
                  
              </table>
          </div>
          
      </div>
      <!-- 底部 -->
      <div class="shop-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailShopInfo",
    props:{
        shops:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        sellFilter(value){
         let str = value
         if(value>10000){
             str = (str/10000).toFixed(1)+'万'
         }
         return str
        }
    },
    methods:{

    }
}
</script>

<style scoped>
/* 店铺信息 */
.shop-info{
    padding: 30px 0 30px 0;
    border-bottom: 5px solid rgba(246, 242, 247, 0.5);
}
/* 店铺头像 */
.shop-top img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid rgba(250, 242, 247);
    margin-left: 10px;
    float: left;

}
/* 店铺名称 */
.shop-info .title{
    font-weight: bold;
    margin-left: 10px;
    vertical-align: middle;
    float: left;
    height: 50px;
    line-height: 50px;
}
/* 店铺左侧 */
.shop-middle{
    clear: both;
    padding-top:15px;
    margin:20px 10px 0px 10px;
    
}
.shop-middle .shop-middle-left{
    float: left;
    height: 80px;
    width: 50vw;
    border-right:2px solid rgb(248, 222, 239);
}
.shop-middle .shop-middle-left .info-sells,.shop-middle .shop-middle-left .info-goods{
    float: left;
    margin: 3vw;
    font-size: 14px;
    text-align: center;
    /* font-weight: bold; */
    color: black;
}
/* 店铺总评 */
.shop-middle .shop-middle-right{
    float: right;
}
.shop-middle .shop-middle-right th{
    color: black;
    font-size: 14px;
    width: 5em;
    font-weight: bold;
    height: 22px;
}
.shop-middle .shop-middle-right td{
    font-size: 14px;
    width: 1em;
    /* border-spacing:10px 10px; */
}
.score .score-text{
    color: red;
    padding-right: 10px;
}

.score,.score-better .score-text{
    color: green;
}
.better-text {
    color: white;
    background: red;
}

.better-more .better-text{
    color: white;
    background: green;
    
}
.shop-bottom{
    clear: both;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
    text-align: center;
}
.enter-shop{
    width: 100px;
    height: 22px;
    background: rgba(250, 242, 247);
    border-radius: 10px;
    
}
</style>