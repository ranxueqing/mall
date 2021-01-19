<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:38
 * @LastEditTime: 2021-01-08 18:07:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\category\Category.vue
-->
<template>
  <div class="wrapper">
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
    
  </div>
</template>

<script>
 import BScroll from "better-scroll";
export default {
    name:"Category",
    data(){
      return {
        scroll:null
      }
    },
    mounted(){
      this.scroll = new BScroll(document.querySelector('.wrapper'),{
        probeType:3,
        pullUpLoad:true
      })
      this.scroll.on('scroll',(position)=>{
      //  console.log(position);
      })
      this.scroll.on('pullingUp',()=>{
        console.log('上拉加载更多')
        setTimeout(()=>{
          this.scroll.finishPullUp()
        },2000)
      })
    }
}
</script>

<style>
.wrapper{
  height: 150px;
  background: red;
}
</style>