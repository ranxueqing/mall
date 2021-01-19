<!--
 * @Author: your name
 * @Date: 2021-01-08 18:16:50
 * @LastEditTime: 2021-01-11 18:16:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\scroll\Scroll.vue
-->
<template>
<!-- ref 如果是绑定到组件中，那么通过this.$refs.refsname 获取到的是一个组件对象
    ref 如果是绑定到元素上，那么通过this.$refs.refsname 获取到的是一个元素对象
-->
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
      
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        // 1、创建BScroll
        this.scroll = new BScroll(this.$refs.wrapper,{
           click:true, //开启内部按钮可点击
           probeType:this.probeType,
           pullUpLoad:this.pullUpLoad
        })
        //2、监听滚动位置
        this.scroll.on('scroll',(position)=>{
            this.$emit('scroll',position)
        })
        // 3、完成上拉加载更多
        this.scroll.on('pullingUp',()=>{
           this.$emit("pullingUP")
        })
        
    },
    methods:{
        scrollTo(x,y,time=300){
           this.scroll && this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll && this.scroll.refresh()
            console.log('------------')
        },
        finishPullUp(){
            this.scroll.finishPullUp()
        }
    }
}
</script>

<style>

</style>