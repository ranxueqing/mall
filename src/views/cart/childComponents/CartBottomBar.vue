<!--
 * @Author: your name
 * @Date: 2021-02-03 10:33:11
 * @LastEditTime: 2021-02-04 16:21:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\cart\childComponents\CartBottonBar.vue
-->
<template>
  <div class="cart-bottom-bar">
    <div class="check-content">
      <check-button class="check-botton" :isChecked="isSelectAll" @click.native="checkClick()"></check-button>
      <span class="check-text">全选</span>
    </div>
    <div class="total">
      合计:{{totalPrice}}

    </div>
    <div class="toPay" @click="calClick">去支付({{cartLength}})</div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkbutton/CheckButton'
export default {
  components:{
    CheckButton
  },
  name:"CartBottomBar",
  data(){
    return {

    }
  },
  computed:{
    totalPrice(){
      return '￥'+ this.$store.getters.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price*item.count
      },0).toFixed(2)
    },
    cartLength(){
      return this.$store.getters.cartList.filter(item=>{
       return item.checked
      }).length
    },
    isSelectAll(){
    //  return !(this.$store.getters.cartList.filter(item=>{
    //     return !item.checked
    //   }).length)
    if(this.$store.getters.cartLength===0) return false
      return !this.$store.getters.cartList.find(item=>!item.checked)
      // 使用 普通方法 遍历
      // for(let item of this.$store.getters.cartList){
      //   if(!item.checked){
      //     return false
      //   }
      // }
      // return true
    }
    
   
  },
  methods:{
    checkClick(){
      if(this.isSelectAll){//全部选中
        this.$store.getters.cartList.forEach(item => {
          item.checked = false
        });
      }else{
        this.$store.getters.cartList.forEach(item => {
          item.checked = true
        });
      }
    },
    calClick(){
      if(!this.isSelectAll){
        this.$toast.show("请选择购买的商品",2000)
      }
    }
    
  }  
}
</script>

<style lang="less" scoped>
.cart-bottom-bar{
  height: 40px;
  background: #eee;
  // padding-top: 3px;
  padding-bottom:3px;
  display: flex;
  .check-content{
    display: flex;
    .check-botton{
      width: 20px;
      height: 20px;
      text-align: center;
      margin-left: 10px;
      margin-right: 5px;
    }
    .check-text{
      line-height: 40px;
      width: 40px;
    }
  }
  .total{
    margin-left:30px;
    line-height:40px;
    flex: 1;
  }

  .toPay{
    width: 90px;
    line-height: 40px;
    background: red;
    color: #fff;
    text-align: center;
  }
}
</style>