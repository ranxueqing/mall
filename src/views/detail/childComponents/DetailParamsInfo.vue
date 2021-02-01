<!--
 * @Author: your name
 * @Date: 2021-01-29 10:32:17
 * @LastEditTime: 2021-01-29 16:57:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\detail\childComponents\DetailParamsInfo.vue
-->
<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length!==0">
      <table v-for="(item,index) in paramsInfo.sizes" :key="index" class="param-size">
          <tr v-for="(tr,indexy) in item" :key="indexy">
              <td v-for="(td,indexz) in tr" :key="indexz" >
                  {{td}}
              </td>
          </tr>
      </table>
      <table class="params-info">
          <tr v-for="(info,index) in paramsInfo.infos" :key="index">
              <td class="info-key">{{info.key}}</td>
              <td class="info-val">{{info.value}}</td>
          </tr>
      </table>

      <div class="info-img" v-if="paramsInfo.infos.image!==0">
          <img :src="paramsInfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name:"DetailParamsInfo",
  props:{
      paramsInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  created(){
     
  }
  
}
</script>

<style lang="less" scoped>
.params-info{
     margin: 10px;
     tr{
       border-bottom:1px solid rgba(100,100, 100,.1);
       
    }
    .param-size tr td:first-of-type{
       width: 170px;
       height: 40px;
       padding-left:10px
    }
    .param-size tr td{
       width: 100px;
       height: 40px
    }
    .info-key{
        width: 100px;
        height: 40px;
    }
    .info-val{
        color: rgb(255, 100, 121);
    }

}
</style>