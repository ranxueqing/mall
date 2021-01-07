<!--
 * @Author: your name
 * @Date: 2021-01-06 15:38:03
 * @LastEditTime: 2021-01-07 12:09:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCli\mall\src\views\home\childComponents\HomeSwiper.vue
-->
<template>
  <swiper>
            <swiper-item v-for="(item) in banners" :key="item.image">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
</template>

<script>
import { Swiper,SwiperItem } from "components/common/swiper";
export default {
    name:"HomeSwiper",
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    data(){
        return {
            
        }
    }
    
}
</script>

<style>
    #hy-swiper{
        margin-top:44px ;
    }
</style>