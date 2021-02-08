<!--
 * @Author: your name
 * @Date: 2021-02-03 14:29:01
 * @LastEditTime: 2021-02-03 16:35:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\common\toast\Toast.vue
-->
<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
  name:"Toast",
//   props:{
//     message:{
//         type:String,
//         default:''
//     },
//     show:{
//         type:Boolean,
//         default:false
//     }  
//   }
    data(){
        return {
            message:'',
            isShow:false
        }
    },
    methods:{
        show(message="默认文字",duration=2000){
            this.isShow = true
            this.message = message
            setTimeout(()=>{
                this.isShow = false;
                this.message =''
            },duration)
        }
    }
}
</script>

<style scoped>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    background: rgba(0, 0, 0, .75);
    color: white;
    padding:8px 10px;
    z-index: 999;
    transform: translate(-50%,-50%);
}
</style>