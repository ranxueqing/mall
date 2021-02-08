<!--
 * @Author: your name
 * @Date: 2021-02-05 23:07:28
 * @LastEditTime: 2021-02-08 15:32:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\category\childComponents\CategoryContent.vue
-->
<template>
  <div class="cate-content">
      <category-content-item v-for="(item,index) in categorySub" :key="index" :contentItem="item" @imgLoad="imageLoad"></category-content-item>
  </div>
</template>

<script>
import CategoryContentItem from './CategoryContentItem.vue'
export default {
  components: { CategoryContentItem },
    name:"CategoryContent",
    props:{
      categorySub:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        count:0
      }
    },
    created(){

    },
    methods:{
      imageLoad(){
        if(++this.count===this.categorySub.length){
          // console.log("加载完成")
          this.$emit("AllLoaded")
        }

        
      }
    }
}
</script>

<style lang="less" scoped>
.cate-content{
  display: flex;
  flex-wrap:wrap;
  // height: 100px;
  width: 100%;
}
</style>