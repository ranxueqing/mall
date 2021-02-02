<!--
 * @Author: your name
 * @Date: 2021-02-01 18:50:30
 * @LastEditTime: 2021-02-01 22:25:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\cart\childComponents\CartListItem.vue
-->
<template>
  <div>
     <h2> {{product}}</h2>
  </div>
</template>

<script>
export default {
  name:"CartListItem",
  props:{
      product:{
          type:Object,
          default(){
              return {}
          }
      }
  }
}
</script>

<style>

</style>