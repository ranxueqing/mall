<!--
 * @Author: your name
 * @Date: 2021-01-21 15:37:53
 * @LastEditTime: 2021-02-01 15:28:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\Detail.vue
-->
<template>
  <div id="detail">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
      <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
          <detail-swiper :top-images="topImages"></detail-swiper>
          <detail-base-info :goods="goods"></detail-base-info>
          <detail-shop-info :shops="shops"></detail-shop-info>
          <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
          <detail-params-info :paramsInfo = "paramsInfo" ref="params"></detail-params-info>
          <detail-comment-info :rateInfo="rateInfo" ref="comment"></detail-comment-info>
          <!-- 推荐 -->
          <goods-list :goods="recommends" ref="recommends"/>
          
      </scroll>
      <back-top  @click.native="backTop" v-show="isShowBackTop"></back-top>
      <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
  </div>
  
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar.vue'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '@/network/detail'
import DetailSwiper from '@/views/detail/childComponents/DetailSwiper'
import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
import DetailShopInfo from './childComponents/DetailShopInfo.vue'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamsInfo from '@/views/detail/childComponents/DetailParamsInfo'
import Scroll from '@/components/common/scroll/Scroll'
import DetailCommentInfo from './childComponents/DetailCommentInfo.vue'
import GoodsList from '@/components/content/goods/GoodsList'
import GoodsListItem from '@/components/content/goods/GoodsListItem'

import DetailBottomBar from '@/views/detail/childComponents/DetailBottomBar'

// 引入混入
import {backTopMixin} from '@/common/mixin'

export default {
    name:"Detail",
    mixins:[backTopMixin],
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamsInfo,
        DetailCommentInfo,
        GoodsList,
        GoodsListItem,
        DetailBottomBar,
        // BackTop
    },
    data(){
        return {
           iid:null, // 获取传递过来的iid
           topImages:[],
           goods:{},//获取商品信息
           shops:{},
           detailImages:[],
           detailInfo:{},
           paramsInfo:{},
           rateInfo:{},
           recommends:[],
           themeTopYs:[],
           currentIndex:0,
        }
    },
    created(){
        // 1、保存传入的iid
        this.iid = this.$route.params.id
        // 2、根据id请求详情数据
        // this.getDetailById()
        getDetail(this.iid).then(res=>{
            console.log(res)
            let data = res.result
            // 1、获取顶部的轮播数据
            this.topImages = res.result.itemInfo.topImages
            // 3、获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            //4、 创建店铺信息对象
            this.shops  = new Shop(data.shopInfo)
            // 5、获取商品详细信息
            this.detailInfo = data.detailInfo
            // 6、获取商品参数信息 
            this.paramsInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
            // 7、获取商品评论信息
            if(data.rate.cRate!==0){
              this.rateInfo = data.rate.list[0]
            }
                       
        })
        //3、请求推荐数据
        getRecommend(this.iid).then(res=>{
            this.recommends = res.data.list
            // console.log(this.recommends)
        })
        // 第一次获取，值不对，this.$refs.params.$el 根本没有渲染
        
        // this.themeTopYs = []  

        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // 第二次获取：值不对  
        // 值不对原因：图片没有计算在内，根据最新数据，对应的DOM已经被渲染了，但是图片依旧没有加载完（目前获取的offsetTop）
        // 不包含其中的图片，offsetTop 值不对的时候，就是因为图片问题

        // this.$nextTick(()=>{
        //     this.themeTopYs = []  

        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        // })
        
        
    },
    updated(){
        // this.themeTopYs = []

        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
            this.themeTopYs = []  

        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
        // console.log(this.themeTopYs)
        },
        // 导航栏监听
        titleClick(index){
            // console.log(index)
            this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],1000)
        },
        contentScroll(position){
				//返回顶部是否显示
				// this.isShowBackTop = (-position.y) > 500;
                const positionY = -(position.y);
                // backTop 是否显示
                this.isShowBackTop = positionY>500
				let _lenth = this.themeTopYs.length;
				for(let i=0; i<_lenth-1; i++){
					if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
						this.currentIndex = i;
						this.$refs.nav.currentIndex = this.currentIndex;
					}
				}
        },
        // 添加购物车方法
        addToCart(){
            // 获取购物车需要展示信息
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            // 将商品添加到购物车里
            // this.$store.commit("addCart",product)
            this.$store.dispatch("addCart",product)
            console.log("hhkjh")
        }
    }
}
</script>

<style scoped>
#detail{
    position: relative;
    z-index: 2;
    background: #fff;
    height: 100vh;
}
.detail-nav{
   position: relative;
   background: #fff;
   z-index: 3; 
}
.content{
    /* height: calc(100% - 44px); */
    position: absolute;
    left: 0;
    top: 44px;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

</style>