<!--
 * @Author: your name
 * @Date: 2021-01-07 15:16:37
 * @LastEditTime: 2021-01-07 17:31:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\components\content\goods\GoodsList.vue
-->
<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :goodsLists="item" ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from '@/components/content/goods/GoodsListItem'
export default {
   name:"GoodsList",
   props:{
       goods:{
           type:Array,
           default(){
               return []
           }
       }
   },
   components:{
       GoodsListItem
   }
}
</script>

<style>
.goods{
    /* 使用弹性布局，让图片显示为两列 */
    display: flex;
    flex-wrap: wrap;/**一列显示 */
    justify-content: space-around; /**设置间距 */
    padding: 2px;
}

</style>