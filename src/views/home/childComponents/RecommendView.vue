<!--
 * @Author: your name
 * @Date: 2021-01-06 16:35:11
 * @LastEditTime: 2021-01-07 12:08:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCli\mall\src\views\home\childComponents\RecommendView.vue
-->
<template>
  <div class="recommend">
      <div class="recomItem" v-for="item in recommends" :key="item.title">
          <a :href="item.link">
              <img :src="item.image" alt="">
            <div>{{item.title}}</div>
          </a>
          
      </div>
  </div>
</template>

<script>
export default {
    name:"RecommendView",
    props:{
        recommends:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            recommendsData:[]
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    padding:15px 0px 15px 0px;
    width: 100%;

    border-bottom: 10px solid #eee;
}
.recomItem{
    flex:1;
    text-align:center;
    margin-left: 5px;
    font-size: 12px;
}
.recomItem img{
    width: 70px;
    height: 70px;
}
</style>