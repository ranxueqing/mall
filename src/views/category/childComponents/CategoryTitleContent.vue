<!--
 * @Author: your name
 * @Date: 2021-02-05 14:17:22
 * @LastEditTime: 2021-02-08 11:19:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\category\childComponents\CategoryTitleContent.vue
-->
<template>
  <div class="category-title">
        <div class="title-item" v-for="(item,index) in categoryTitles" :key="index" @click="itemClick(index,item.maitKey)" :class="{'category-active':currentIndex===index}">{{item.title}}</div>
  </div>
</template>

<script>
export default {
    name:"CategoryTitleContent",
    props:{
        categoryTitles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
          currentIndex:0,
          maitKey:''
        }
    },
    methods:{
        itemClick(index,maitKey){
            this.currentIndex = index;
            // console.log(maitKey)
            this.$emit("categoryTitleClick",maitKey)
        }
    }
}
</script>

<style lang="less" scoped>
.category-active {
    background: #fff !important;
    color: var(--color-high-text);
    font-weight: bold;
}
.title-item {
    background: #eee;
    width: 100px;
    height: 8vh;
    line-height: 8vh;
    text-align: center;
  
}

</style>