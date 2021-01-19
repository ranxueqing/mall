<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:51
 * @LastEditTime: 2021-01-11 18:16:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCli\mall\src\views\home\Home.vue
-->
<template>
    <div id="home" >
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
         <scroll class="content"
                ref="scroll" 
                :probe-type="3" 
                @scroll="contentScoll" 
                :pull-up-load="true"
                @pullingUP="loadMore"
                >
                
                <home-swiper :banners="banners"></home-swiper>
                <recommend-view :recommends="recommends"></recommend-view>
                <feature-view></feature-view>
                <tab-control :titles="['流行','新款','经典']" @titleClick="titleClick"></tab-control>
                <goods-list :goods="showGoods"></goods-list>
         </scroll> 
         <back-top  @click.native="backClick" v-show="isShowBackTop"></back-top>      
              
    </div>
    
   
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from '@/components/content/tabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from 'views/home/childComponents/RecommendView' 
import FeatureView from 'views/home/childComponents/FeatureView'
import Scroll from "components/common/scroll/Scroll"
import BackTop from "components/content/backTop/BackTop"

import { getHomeMultidata,getHomeGoods } from "network/home";



export default {
    name:"Home",
    components:{
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop

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
            currentType:'pop',
            isShowBackTop:false
        }
    },
    created(){
        // 请求多个数据
        this.getHomeMultidata()
        // 请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')  
       
    },
    mounted(){
        //监听item中图片加载完成
        const refresh = this.debounce(this.$refs.scroll.refresh,50)
         this.$bus.$on("imageLoad",()=>{
            refresh()
           
        })
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    methods:{
        // 事件监听相关的方法
        // 防抖函数
        debounce(func,delay){
            let timer = null;
            return function(...args){
                if(timer) clearTimeout(timer)
                timer = setTimeout(()=>{
                    func.apply(this,args)
                    
                },delay)
            }
        },
        
        titleClick(index){
            switch(index){
                case 0: this.currentType='pop'     
                break;
                case 1:this.currentType='new'
                break
                case 2:this.currentType="sell"
                break
            }
        },
        contentScoll(position){
            this.isShowBackTop=(-position.y)>1000
        },
        loadMore(){
            this.getHomeGoods(this.currentType)
            this.$refs.scroll.refresh()
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
                // 将数据存到list 中，需要用到数组的拷贝，不能直接赋值
                this.goods[type].list.push(...res.data.list)
                 this.goods[type].page +=1
                this.$refs.scroll.finishPullUp()
            })
        },
        // 回到顶部
        backClick(){
            this.$refs.scroll.scrollTo(0,0,500)
        }

    }
}
</script>

<style scoped>
#home{
    height: 100vh;
    position: relative;
}
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
/* 实现吸顶效果,当达到滚动值之后，就变成了fixed 属性了 */
.tab-control{
    position: sticky;
    top: 44px;
    background: #fff;
    z-index: 1;
}
.content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  
}

</style>