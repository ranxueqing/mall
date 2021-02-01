<!--
 * @Author: your name
 * @Date: 2021-01-29 17:03:59
 * @LastEditTime: 2021-01-30 14:22:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetailCommentInfo.vue
-->
<template>
  <div v-if="Object.keys(rateInfo).length!==0" class="comment-info">
    <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">
            更多
            <i class="arrow-right"></i>
        </div>
    </div>
    <div class="info-user">
        <img :src="rateInfo.user.avatar" alt="rateInfo.user.uname">
        <span>{{rateInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
        <p>{{rateInfo.content}}</p>
        <div class="info-other">
            <span class="date">{{rateInfo.created|rateDate(rateInfo.created)}}</span>
            <span>{{rateInfo.style}}</span>
        </div>
        <div class="info-imgs">
            <img :src="item" v-for="(item,index) in rateInfo.images" :key="index" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/common/utils'
export default {
  name:"DetailCommentInfo",
  props:{
      rateInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  filters:{
    //   转换时间戳
      rateDate(date){
        //   将时间戳转成date对象
          const d = new Date(date)
        //   将date 格式化
        return formatDate(d,'yyyy-MM-dd')
          
      }
  },
}
</script>

<style lang="less" scoped>
.comment-info{
   .info-header{
     height: 30px;
     line-height: 30px;
     padding: 20px 10px 20px 10px;
     border-top:1px solid rgba(196, 135, 143, 0.5);
     border-bottom:1px solid rgba(194, 183, 183, 0.5);
     box-shadow: 0 -5px rgba(212, 201, 202, 0.5) ;
     position: relative;
     font-size: 16px;
     font-weight: bold;
     .header-title{
         float: left;
     }
     .header-more{
         float: right;
     }
   }
   .info-user{
       height: 50px;
       line-height: 50px;
       position: relative;
       img{
           margin: 10px;
           width: 50px;
           height: 50px;
           border-radius: 50%;
           border: 1px solid gray;
           float: left;
       }
       span{
           float: left;
           margin-top: 10px;
       }
       
   }
   .info-detail{
       p{
           clear: both;
           text-indent: 10px;
           margin: 10px;
       }
       .info-other{
           .date{
               margin-right: 10px;
               margin-left: 10px;
           }
       }
       .info-imgs img{
           width: 100px;
           height: 100px;
           margin: 10px;
       }
   }
   
}

</style>