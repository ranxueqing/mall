<!--
 * @Author: your name
 * @Date: 2021-01-23 18:26:48
 * @LastEditTime: 2021-01-29 16:35:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetaliGoodsInfo.vue
-->
<template>
	<div v-if="Object.keys(detailInfo).length !== 0">
		<div class="info-text-wrap">
			<div class="text-top-style"></div>
			<div class="desc info-text-desc">{{detailInfo.desc}}</div>
			<div class="text-bot-style"></div>
		</div>
		<div class="img-list-wrap" v-for="(item,index) in detailInfo.detailImage" :key="index">
			<div class="desc">{{item.key}}</div>
			<div v-for="(item, index) in item.list" :key="index">
				<img :src="item" alt="" class="img" @load="imageLoad" >
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailGoodsInfo',
		props: {
			detailInfo: {
				type: Object,
				default() {
					return {}
				}
			}
    },
    data(){
      return {
        counter:0,
        imagesLength:0
      }
    },
		methods: {
			imageLoad(){
        // 判断所有图片都加载完进行一次回调
        if(++this.counter===this.imagesLength){
          this.$emit("imageLoad")
        }
        
      }
    },
    watch:{
      // 监听传过来的属性的变化，赋值给 imageLength()
      detailInfo(){
        this.imagesLength = this.detailInfo.detailImage[0].list.length
      }
    }
	}
</script>

<style lang="less" scoped>
	.info-text-wrap{
    position: relative;
    .text-top-style{
      width: 80px;
      background: black;
      border: .5px solid;
      margin-left: 4px;
      margin-top: 10px;
      &::before{
        position: absolute;
        left: 4px;
        top: -2.5px;
        content: "";
        width: 5px;
        height: 5px;
        background: black;
        
      }
    }
    .text-bot-style{
      width: 80px;
      background: black;
      height: 1px;
      position: absolute;
      right: 4px;
      &::after{
        content: "";
        position: absolute;
        right:0px ;
        top: -2.5px;
        width: 5px;
        height: 5px;
        background: black;
      }
    }
    .info-text-desc{
      padding: 10px 4px;
    }
    
  }
  .desc{
    font-size: 14px;
		padding-bottom: 6px;
		line-height: 20px;
		margin: 4px 0;
		text-indent: 10px;
  }
  .img{
    width: 100%;
  }
</style>