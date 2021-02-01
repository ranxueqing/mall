<!--
 * @Author: your name
 * @Date: 2021-01-21 15:58:26
 * @LastEditTime: 2021-01-30 14:53:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetailNavBar.vue
-->
<template>
  <div id="detailNavBar">
      <nav-bar>
          <div slot="left" class="back" @click="backClick">
              <img src="@/assets/img/common/back.svg" alt="" >
          </div>
          <div slot="center">
              <ul class="title">
                  <li v-for="(item,index) in titles" :key="item" @click="titleClick(index)" :class="{active:currentIndex===index}">{{item}}</li>
              </ul>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar' 
export default {
    name:"DetaiNavBar",
    components:{
      NavBar    
    },
    data(){
        return {
           titles:['商品','参数','评论','推荐'],
           currentIndex:0 
        }
    },
    methods:{
        // 标题点击变色
        titleClick(index){
            this.currentIndex = index
            this.$emit('titleClick',index)
        },
        // 点击箭头返回
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
.title{
    display: flex;
}
.title li{
    float: left;
    flex: 1;
    font-size: 13px;
}
.active{
    color: --color-high-text;
}
.back img{
    margin-top: 10px;
}
</style>