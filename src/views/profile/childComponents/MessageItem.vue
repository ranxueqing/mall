<!--
 * @Author: your name
 * @Date: 2021-02-04 17:34:38
 * @LastEditTime: 2021-02-04 17:43:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\profile\childComponents\MessageItem.vue
-->
<template>
  <div class="message">
        <ul class="myvip">
          <li>
            <img src="@/assets/img/profile/message.svg" alt="">
            <span>我的消息</span>
          </li>
          <li>
            <img src="@/assets/img/profile/pointer.svg" alt="">
            <span>积分商城</span>
          </li>
          <li>
            <img src="@/assets/img/profile/vip.svg" alt="">
            <span>会员卡</span>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
name:"MessageItem"
}
</script>

<style lang="less" scoped>
.message{
    margin:10px 10vw 10px 3vw;
    .myvip{
      li{
        line-height: 30px;
        img {
          width: 24px;
          height: 24px;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }
  }
</style>