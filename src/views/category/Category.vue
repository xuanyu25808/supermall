<template>
  <div class="category-layout">
    <top-bar class="category-top-bar">
      <div slot="center">商品分类</div>
    </top-bar>
    <category-navigation :cate-title="cateTitle" @titleClick="titleClick" />
    <category-shops :cate-shops="cateShops" ref="categoryShops"/>
  </div>
</template>

<script>
  import TopBar from 'components/common/topbar/TopBar.vue'

  import CategoryNavigation from './components/CategoryNavigation'
  import CategoryShops from './components/CategoryShops'

  import {
    categoryMes,
    categoryShops
  } from 'network/category'
  export default {
    name: 'Category',
    components: {
      TopBar,
      CategoryNavigation,
      CategoryShops
    },
    data() {
      return {
        categoryData: [],
        cateTitle: [],
        cateShops: [],
        currentIndex: 0,
      }
    },
    created() {
      this.categoryMes();
      this.categoryShops();
    },
    methods: {
      /*
        获取数据
      */
      categoryMes() {
        // 获取左侧导航栏信息
        categoryMes().then(res => {
          this.categoryData = res.data.category.list;
          this.getTitle(res.data.category.list);
        })
      },
      //获取右侧商品信息
      categoryShops(index) {
        //最开始的时候this.categoryData还没有数据，所以要做判断
        let maitKey = 3627
        if (this.categoryData.length != 0) {
          maitKey = this.categoryData[index].maitKey
        }
        categoryShops(maitKey).then(res => {
          this.cateShops = res.data.list
          this.$refs.categoryShops.CategoryShopsScrollRefresh();

        })
      },
      // 获取左侧导航标题信息
      getTitle(res) {
        let timeTitle = [];
        for (let item of res) {
          timeTitle.push(item.title)
        }
        this.cateTitle = timeTitle
      },
      /*
        事件监听
      */
      //title事件监听
      titleClick(index) {
        this.currentIndex = index
        // 每点击一次后，重新请求数据
        this.categoryShops(index)
      }
    }

  }
</script>

<style scoped>
  .category-layout{
    width: 100%;
    height: 100vh;
  }
  .category-top-bar {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 999;
  }
</style>
