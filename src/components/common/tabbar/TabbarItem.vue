<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive"><slot name="item-icon" ></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle">  
      <!-- 用div 包裹，避免插槽被替换掉，找不到原来的样式 -->
      <slot name="item-text"></slot>  
    </div>
    
  </div>
</template>

<script>
export default {
  name:"TabbarItem",
  props:{
    path:String,
    activeColor:{
      type:String,
      default:"red"
    }
  },

  data(){
    return {
      // isActive:false,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)
    },
    activeStyle(){
      // 判断路径中是否有path
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },

}
</script>

<style>
.tabbar{
   display: flex;
  background: #f6f6f6;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-shadow: 0px -3px 10px rgba(100, 100, 100, .1);
}
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img{
  width: 24px;
  height: 24px;
}
.active{
  color: red;
}
</style>