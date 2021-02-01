<!--
 * @Author: your name
 * @Date: 2021-01-21 22:35:21
 * @LastEditTime: 2021-01-29 16:17:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetailBaseInfo.vue
-->
<template>
  <div v-if="Object.keys(goods).length!==0">
      <div class="goods_title">{{goods.title}}</div>
      <div class="goods_price">
          <span class="n_price">{{goods.newPrice}}</span>
          <span class="o_price">{{goods.oldPrice}}</span>
          <span class="discount" v-if="goods.discount" :style="{background:goods.discountBgColor}">{{goods.discount}}</span>
      </div>
      <div class="goods_column">
          <span>{{goods.columns[0]}}</span>
          <span>{{goods.columns[1]}}</span>
          <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="goods_service">
          <span v-for="index in goods.services.length-1" :key="index" class="goods_service_icon">
              <img :src="goods.services[index-1].icon" alt="">
              <span>{{goods.services[index-1].name}}</span>
          </span>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailBaseInfo",
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.goods_title{
    font-size: 18px;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin: 10px 1vw 0px 1vw; 
    text-indent: 10px;
    line-height: 20px;
}
.goods_price{
    position: relative;
    margin: 10px 10px 0px 10px;
}
.goods_price .n_price{
    float: left;
    font-size: 24px;
    color: var(--color-text);
   
}
.goods_price .o_price{
    float: left;
    font-size: 14px;
    text-decoration: line-through;
    margin: 10px;
}
.goods_price .discount{
    background: var(--color-high-text);
    padding: 2px 5px 2px 5px;
    color:#fff;
    border-radius: 10px;
    float: left;
    margin-top:1px ;
}
.goods_column{
    clear: both;
    display: flex;
    margin: 60px 10px 0px 10px;
    padding-bottom: 15px;
    font-size: 14px;
    border-bottom: 2px solid rgba(246, 242, 247, 0.5);
    color: gray;
   
}
.goods_column span{
    flex: 1;   
}
.goods_service{
    display: flex;
    color: black;
    font-size: 12px;
    padding-bottom: 20px;
    margin: 20px 10px 0px 10px;
    border-bottom: 5px solid rgba(246, 242, 247, 0.5);
}
.goods_service .goods_service_icon{
    flex: 1;
}
.goods_service .goods_service_icon img{
    width: 15px;
}

</style>