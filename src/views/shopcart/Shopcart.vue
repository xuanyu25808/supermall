<template>
  <div class="shopcart-layout">
    <top-bar class="shopcart-topbar">
      <div slot="center">购物车({{$store.state.productCart.length}})</div>
    </top-bar>
    <scroll class="shopcart-scroll" ref="shopcartScroll">
     <shopcart-shop  />
     <!-- @shopcartImgLoad="shopcartImgLoad" -->
    </scroll>
    <shopcart-money class="shopcart-money"/>
  </div>
</template>

<script>
  import TopBar from 'components/common/topbar/TopBar'
  import Scroll from 'components/common/scroll/Scroll'

  import ShopcartShop from './components/ShopcartShop'
  import ShopcartMoney from './components/ShopcartMoney'
  export default {
    name: 'Shopcart',
    components: {
      TopBar,
      Scroll,
      ShopcartShop,
      ShopcartMoney
    },
    // methods:{
    //   shopcartImgLoad(){
    //     this.$refs.shopcartScroll.refresh()
    //   }
    // },
    // 每次进来重新刷新一下页面高度
    activated() {
      this.$refs.shopcartScroll.refresh()
    }
  }
</script>

<style scoped="scoped">
  .shopcart-topbar {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 999;
  }
  .shopcart-scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 80px;
    overflow: hidden;
  }
  .shopcart-money{
    height: 30px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    background-color: lightgrey;
    box-shadow: 0 -1px 1px rgba(100,100,100,.5);
  }
</style>
