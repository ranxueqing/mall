<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:51
 * @LastEditTime: 2021-01-06 18:51:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCli\mall\src\views\home\Home.vue
-->
<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
    </div>
    
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from 'views/home/childComponents/RecommendView' 
import FeatureView from 'views/home/childComponents/FeatureView'
import { getHomeMultidata } from "network/home";




export default {
    name:"Home",
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView
    },
    data(){
        return {
            banners:[],
            recommends:[]
        }
    },
    created(){
        // 请求多个数据
        getHomeMultidata().then(res=>{
            // console.log(res)
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
    }
}
</script>

<style>
.home-nav{
    background-color: var(--color-text);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    height: 44px;
}
</style>