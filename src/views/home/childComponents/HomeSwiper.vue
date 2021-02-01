<!--
 * @Author: your name
 * @Date: 2021-01-06 15:38:03
 * @LastEditTime: 2021-01-21 13:50:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCli\mall\src\views\home\childComponents\HomeSwiper.vue
-->
<template>
  <swiper>
            <swiper-item v-for="(item) in banners" :key="item.image" >
                <a :href="item.link">
                    <img :src="item.image" alt="" @load="imageLoad">
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
            isLoad:false
        }
    },
    methods:{
        imageLoad(){
            // 为了不影响性能，只要有一张图片加载完成就可以确定tabcontrol的高度
            if(!this.isLoad){
                this.$emit("swiperImageLoad")
                this.isLoad=true
            }
        }
    }
    
}
</script>

<style>
    #hy-swiper{
        margin-top:44px ;
    }
</style>