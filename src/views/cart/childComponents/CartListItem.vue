<!--
 * @Author: your name
 * @Date: 2021-02-01 18:50:30
 * @LastEditTime: 2021-02-02 15:34:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\cart\childComponents\CartListItem.vue
-->
<template>
  <div id="cart-list-item">
    <div class="item-selector">
      <!-- {{product}} -->
      <check-button :isChecked="product.checked" @click.native="buttonCheck()"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ product.title }}</div>
      <div class="item-desc">{{ product.desc }}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{ product.price }}</div>
        <div class="item-count right">×{{ product.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from '../../../components/content/checkbutton/CheckButton.vue';

export default {
  components: { CheckButton },
  name: "CartListItem",
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
    buttonCheck(){
      this.product.checked=!this.product.checked
    }
  }
};
</script>

<style lang="less" scoped>
#cart-list-item {
  padding-top: 10px;
  padding-bottom: 10px;
  height: 135px;
  border-bottom: 2px solid pink;
  float: left;
  position: relative;
  .item-selector{
    width: 22px;
    height: 20px;
    margin-left: 5px;
    text-align: center;
    float: left;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .item-img {
    margin-left: 30px;
    border-radius: 10px;
    width: 30vw;
    float: left;
    img {
      width: 100px;
      height: 135px;
      border-radius: 10px;
    }
  }

  .item-info {
    width: 60vw;
    height: 135px;
    float: left;
    .item-title {
      width: 30vw;
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 20px;
      text-indent: 2px;
    }
    .item-desc {
      display: inline-block;
      white-space: nowrap;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-top: 10px;
      text-indent: 2px;
    }
    .item-bottom {
      margin-top: 30px;
      .left {
        float: left;
      }
      .right {
        float: right;
      }
      .item-price {
        font-size: 20px;
        color: var(--color-high-text);
      }
    }
  }
}
</style>