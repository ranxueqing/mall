<!--
 * @Author: your name
 * @Date: 2021-02-04 17:32:02
 * @LastEditTime: 2021-02-04 17:33:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\profile\childComponents\MyMember.vue
-->
<template>
  <div class="member">
        <ul class="myCount">
          <li>
            <div class="text1">0.00元</div>
            <span>我的余额</span>
          </li>
          <li>
            <div class="text1">0个</div>
            <span>我的优惠</span>
          </li>
          <li>
            <div class="text1">0分</div>
            <span>我的积分</span>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
    name:"MyMember"
}
</script>

<style lang="less" scoped>
.member {
    padding: 0;
    clear: both;
    .myCount {
      display: flex;
      margin: 10px 0;
      li{
        line-height: 30px;
       float: left;
       flex: 1;
       text-align: center;
       .text1{
         color: var(--color-high-text);
         font-size: 18px;
       }
      }
    }
  }
</style>