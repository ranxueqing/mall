<!--
 * @Author: your name
 * @Date: 2021-01-06 13:34:36
 * @LastEditTime: 2021-01-06 13:57:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueCli\mall\src\components\common\swiper\SwiperItem.vue
-->
<template>
    <div class="slide">
      <slot></slot>
    </div>
</template>

<script>
	export default {
		name: "Slide"
	}
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide img {
    width: 100%;
  }
</style>
