<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:38
 * @LastEditTime: 2021-02-08 16:52:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\category\Category.vue
-->
<template>
  <div class="category">
   <nav-bar class="nav-bar">
     <div slot="center">商品分类</div>
   </nav-bar>
   <category-main :categoryTitles="categoryList" ></category-main>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
 import {getCategoryData} from '@/network/category'

import CategoryMain from './childComponents/CategoryMain.vue'
export default {
    name:"Category",
    components:{
      NavBar,
        CategoryMain 
    },
    data(){
      return {
       categoryList:null,
       maitKey:'',
      }
    },
    created(){
      // 获取分类列表 
      getCategoryData().then(res=>{
        this.categoryList= res.data.category.list
        // console.log(this.categoryList)
      })
    },
    
}
</script>

<style lang="less" scoped>
.nav-bar{
  background: var(--color-text);
  color: #fff;
  font-weight: bold;
}

</style>