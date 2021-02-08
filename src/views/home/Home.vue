<!--
 * @Author: your name
 * @Date: 2021-01-04 17:40:51
 * @LastEditTime: 2021-02-04 18:30:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCli\mall\src\views\home\Home.vue
-->
<template>
    <div id="home" >
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <tab-control :titles="['流行','新款','经典']" @titleClick="titleClick" ref="tabControl1" v-show="isTabFixed"></tab-control>
         <scroll class="content"
                ref="scroll" 
                :probe-type="3" 
                @scroll="contentScoll" 
                :pull-up-load="true"
                @pullingUP="loadMore"
                >
                
                <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
                <recommend-view :recommends="recommends"></recommend-view>
                <feature-view></feature-view>
                <tab-control :titles="['流行','新款','经典']" @titleClick="titleClick" ref="tabControl2" class="tab-control2" ></tab-control>
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
            isShowBackTop:false,
            TabOffsetTop:0,
            isTabFixed:false, //是否吸顶
            saveY:0
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
    // 保存home状态 ，使用导航守卫
    activated(){
        // 回来时，scroll回到原来位置
        this.$refs.scroll.scrollTo(0,-this.saveY)
        // 重新刷新
        this.$refs.scroll.refresh()
    },
    deactivated(){
        // 离开时记录状态
        this.saveY = this.$refs.scroll.getScrollY()
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    },
    methods:{
        // 事件监听相关的方法
        // 轮播图加载完成获取tabcontrol高度
        swiperImageLoad(){
            // console.log(this.$refs.tabControl.$el.offsetTop)
        // 获取tabControl的offsetTop
        // 所有的组件都有一个属性 $el:用于获取组件中的元素
        this.TabOffsetTop =this.$refs.tabControl2.$el.offsetTop
        },
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
            // 保持点击按钮一致
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
        },
        contentScoll(position){
            // 判断backTop 是否显示
            this.isShowBackTop=(-position.y)>1000
            
            // 决定tabControl 是否吸顶（position:fixed）,然后动态绑定样式
            this.isTabFixed = (-position.y)>this.TabOffsetTop
            
        },
        // 加载更多的方法
        loadMore(){
            // 加载更多当前选中的分类
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
                //  完成上拉加载更过
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
    font-weight: bold;
    /* 在使用浏览器原生滚动时，为了让导航不跟随一起滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    height: 44px; */
}
/* 实现吸顶效果,当达到滚动值之后，就变成了fixed 属性了 */
/* 使用better-scroll 之后，sticky属性已经不再起作用了 */
/* .tab-control{
    position: sticky; 
    top: 44px;
    background: #fff;
    z-index: 1;
} */
.tab-control{
    position: relative;
    z-index: 1;
    background: #fff;
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