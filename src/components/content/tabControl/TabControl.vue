<!--
 * @Author: your name
 * @Date: 2021-01-07 10:54:22
 * @LastEditTime: 2021-01-07 16:50:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" class="tab-control-item" :class="{titleActive:index===currentIndex}" @click="titleClick(index)" :key="item">
         <span>{{item}}</span> 
      </div>
  </div>
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
            this.$emit("titleClick",index)
        }
    }

    
}
</script>

<style>
    .tab-control{
        display: flex;
        text-align: center;
         height: 40px;
        line-height: 40px;
        font-size: 15px;
    }
    .tab-control-item{
        flex: 1;
       
    }
    .tab-control-item span{
        padding: 6px;
    }
    .titleActive{
        color: var(--color-high-text);  
    }
    .titleActive span{
        border-bottom: 3px solid var(--color-high-text);
    }
</style>