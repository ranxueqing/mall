<!--
 * @Author: your name
 * @Date: 2021-01-21 17:09:26
 * @LastEditTime: 2021-01-29 16:02:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetailSwiper.vue
-->
<template>
    <div>
          <swiper class="detailSwiper">
          <swiper-item v-for="item in topImages" :key="item">
              <img :src="item" alt="">
          </swiper-item>
          </swiper>
    </div>  

</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper'

export default {
    name:"DetailSwiper",
    props:{
       topImages:{
           type:Array,
           default(){
               return []
           }
       } 
    },
    components:{
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
.detailSwiper{
    height: 300px;
    overflow: hidden;
    width: 100%;
}

</style>