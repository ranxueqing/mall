<!--
 * @Author: your name
 * @Date: 2021-02-08 14:05:30
 * @LastEditTime: 2021-02-08 16:53:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mall\src\views\category\childComponents\CategoryMain.vue
-->
<template>
  <div class="category-main">
    <scroll class="scroll-left left" ref="scroll_left" :probeType="3">
      <category-title-content
        :categoryTitles="categoryTitles"
        @categoryTitleClick="categoryTitleClick"
      ></category-title-content>
    </scroll>
    <scroll class="scroll-right right" ref="scroll_right" :probeType="3">
      <category-content
        :categorySub="categorySubs"
        @AllLoaded="allLoad"
      ></category-content>
    </scroll>
  </div>
</template>

<script>
import CategoryContent from "@/views/category/childComponents/CategoryContent";
import CategoryTitleContent from "@/views/category/childComponents/CategoryTitleContent";
import { getCategoryData, getCategorySubData } from "@/network/category";
import Scroll from "@/components/common/scroll/Scroll";
export default {
  name: "CategoryMain",
  components: {
    CategoryTitleContent,
    CategoryContent,
    Scroll,
  },
  props: {
    categoryTitles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      maitKey: "",
      categorySubs: null,
    };
  },
  created(){
      getCategorySubData("3627").then(res=>{
          this.categorySubs = res.data.list;
      })
  },
  methods: {
    categoryTitleClick(maitKey) {
      this.maitKey = maitKey;
    //   console.log(this.maitKey);
      // 请求被选择数据
      getCategorySubData(this.maitKey).then((res) => {
        this.categorySubs = res.data.list;
        //   console.log(this.categorySubs)
      });
    },
    allLoad() {
    //   图片全部加载完成刷新
      this.$refs.scroll_right.refresh();
    },
  },
  mounted() {
    this.$refs.scroll_left.refresh();
    this.$refs.scroll_right.refresh();
  },
};
</script>

<style lang="less" scoped>
.left {
  float: left;
  width: 30vw;
  height: calc(100vh - 49px - 44px);
  overflow: hidden;
}
.right {
  float: left;
  height: calc(100vh - 49px - 44px);
  width: 60vw;
  margin-left: 20px;
  overflow: hidden;
}

</style>