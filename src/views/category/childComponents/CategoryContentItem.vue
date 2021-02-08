<!--
 * @Author: your name
 * @Date: 2021-02-08 10:19:48
 * @LastEditTime: 2021-02-08 15:15:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\category\childComponents\CategoryContentItem.vue
-->
<template>
  <div>
      <div class="content-item">
          <a :href="contentItem.link">
              <img :src="contentItem.image" alt=""  class="img" @load="imageLoad">
          </a>
          <div class="title">{{contentItem.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    name:"CategoryContentItem",
    props:{
        contentItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imageLoad(){
            this.$emit("imgLoad")
        }
    }
}
</script>

<style lang="less" scoped>
.content-item{
    margin-right:30px;
    margin-bottom:40px;
    .img{
        width: 80px;
        height: 80px;
    }
    .title{
        text-align: center;
        color: black;
    }
    
}
</style>