<template>
  <tabbar>
    <tabbar-item path='/home' activeColor="red">
      <div slot="item-icon" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/home.svg" alt="">
      </div>
      <div slot="item-icon-active" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/home_active.svg" alt="">
      </div>
      <div slot="item-text" class="item-text">首页</div>
    </tabbar-item>
    <tabbar-item path='/category' activeColor="red">
      <div slot="item-icon" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/category.svg" alt="">
      </div>
      <div slot="item-icon-active" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/category_active.svg" alt="">
      </div>
      <div slot="item-text" class="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path='/shopcart' activeColor="red">
      <div slot="item-icon" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/shopcart.svg" alt="">
      </div>
      <div slot="item-icon-active" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/shopcart_active.svg" alt="">
      </div>
      <div slot="item-text" class="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path='/profile' activeColor="red">
      <div slot="item-icon" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/profile.svg" alt="">
      </div>
      <div slot="item-icon-active" class="item-img-box">
        <img class="item-img" src="~assets/images/tabbar/profile_active.svg" alt="">
      </div>
      <div slot="item-text" class="item-text">我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
  import Tabbar from 'components/common/tabbar/Tabbar.vue'
  import TabbarItem from 'components/common/tabbar/TabbarItem.vue'
  export default {
    name: 'MainTabbar',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
</style>
