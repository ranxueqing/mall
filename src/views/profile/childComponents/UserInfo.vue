<!--
 * @Author: your name
 * @Date: 2021-02-04 17:28:20
 * @LastEditTime: 2021-02-04 17:30:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\profile\childComponents\UserInfo.vue
-->
<template>
  <div class="user">
        <!-- 头像 -->
        <div class="avatar"><img src="~@/assets/img/profile/avatar.svg" alt=""></div>
        <div class="login">
          <div><a href="#">登录/注册</a></div>
          <div class="phone">
            <img src="~@/assets/img/profile/phone.svg" alt="">
            <span>暂无绑定手机号</span>
          </div>
        </div>
        <div class="arrow"><img src="~@/assets/img/common/arrow-left.svg" alt=""></div>
        
    </div>
</template>

<script>
export default {
    name:"UserInfo"
}
</script>

<style lang="less" scoped>
.user{
    background: var(--color-text);
    height: 120px;
    line-height: 60px;
    position: relative;
    .avatar {
       float: left;
      img{
        width: 100px;
        height: 100px;
        margin-right: 10px;
      }
    }
    .login{
      color: white;
      a{
        color:white;
      }
      .phone {
      margin-top: -30px;
        img{
        // float: left;
          width: 24px;
          height: 24px;
          vertical-align: middle;
        }
        span{
          margin-top: 10px;
        }
      }
    }
    
    .arrow{
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0,-50%);
      img{
          width: 24px;
          height: 24px;
      }
     

    }
  }
</style>