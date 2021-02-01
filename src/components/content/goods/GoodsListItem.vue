<!--
 * @Author: your name
 * @Date: 2021-01-07 15:18:01
 * @LastEditTime: 2021-01-30 12:11:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\content\goods\GoodsListItem.vue
-->
<template>
  <div class="goods_list_item" @click="itemClick()">
      <img :src="showImage" alt="" @load="imageLoad">
      <div class="goodsInfo">
          <p>{{goodsLists.title}}</p>
          <span class="price">{{goodsLists.price}}</span>
          <span class="collect">{{goodsLists.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"GoodsListItem",
    props:{
        goodsLists:{
            type:Object,
            default(){
                return {}
            }
        }

    },
    computed:{
        showImage(){
            return this.goodsLists.image||this.goodsLists.show.img
        }
    },
    data(){
        return {
            
        }
    },
    methods:{
        imageLoad(){
            // 利用事件总线
            this.$bus.$emit('imageLoad')
        },
        itemClick(){
            this.$router.push({
                path:`/detail/`+this.goodsLists.iid
            })
        }
    }

    
}
</script>

<style>
.goods_list_item{
    padding-bottom: 15px;
    position: relative;
    width: 48%;

}
.goods_list_item img{
    width: 100%;
    border-radius: 5px;
}
.goodsInfo{
    font-size: 12px;
    position: relative;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    overflow: hidden;
}
.goodsInfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    margin-top: 3px;
}
.goodsInfo .price{
    color: var(--color-high-text);
    margin-right: 20px;
}
.goodsInfo .collect{
    position: relative;
}
.goodsInfo .collect::before{
    content:"";
    position: absolute;
    left: -15px;
    top: -0.5px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;

}


</style>