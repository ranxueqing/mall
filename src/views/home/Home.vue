<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:51
 * @LastEditTime: 2021-01-07 17:26:51
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
        <tab-control :titles="['流行','新款','经典']" @titleClick="titleClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </div>
    
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from 'views/home/childComponents/RecommendView' 
import FeatureView from 'views/home/childComponents/FeatureView'

import { getHomeMultidata,getHomeGoods } from "network/home";

export default {
    name:"Home",
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList
    },
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                'pop':{page:0,list:[]},
                'new':{page:0,list:[]},
                'sell':{page:0,list:[]}
            },
            currentType:'pop'
        }
    },
    created(){
        // 请求多个数据
        this.getHomeMultidata()
        // 请求商品数据
       this.getHomeGoods('pop',1)
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    methods:{
        // 事件监听相关的方法
        titleClick(index){
            console.log(index)
            switch(index){
                case 0: this.currentType='pop'
                this.getHomeGoods(this.currentType)
                break;
                case 1:this.currentType='new'
                this.getHomeGoods(this.currentType,2)
                break
                case 2:this.currentType="sell"
                this.getHomeGoods(this.currentType)
                break
            }
        },
        // 网络请求相关的方法
        getHomeMultidata(){
            getHomeMultidata().then(res=>{
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getHomeGoods(type){
            const page =this.goods[type].page +1
            getHomeGoods(type,page).then(res=>{
                this.goods[type].page +=1
                // 将数据存到list 中，需要用到数组的拷贝，不能直接赋值
                this.goods[type].list.push(...res.data.list)
            })
        }
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
/* 实现磁吸效果,当达到滚动值之后，就变成了fixed 属性了 */
.tab-control{
    position: sticky;
    top: 44px;
    background: #fff;
    z-index: 1;
}
</style>