<template>
  <div id="home" class="home-layout">
    <top-bar class="home-top">
      <div slot="center">购物街</div>
    </top-bar>
    <scroll class="scrollHeight" ref="HomeScroll" :probe-type="3" @scroll="scrollChange" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper class="home-swiper" :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control @tabChange="tabChange" class="tab-control" :titles="['流行','新款','精选']" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowbackTop" />
  </div>
</template>

<script>
  import HomeSwiper from './components/HomeSwiper'
  import HomeRecommend from './components/HomeRecommend'
  import HomeFeature from './components/HomeFeature'

  import TopBar from 'components/common/topbar/TopBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/BackTop'

  import {
    getHomeMultidata,
    getHomeGoods
  } from 'network/home'

  export default {
    name: 'Home',
    components: {
      HomeSwiper,
      HomeRecommend,
      HomeFeature,
      TopBar,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {
            page: 0,
            list: []
          },
          'new': {
            page: 0,
            list: []
          },
          'sell': {
            page: 0,
            list: []
          }
        },
        currentType: 'pop',
        //
        isShowbackTop:false
      }
    },
    computed: {
      //展示哪个列表的数据
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      //获得轮播图和旁边的数据
      this.getHomeMultidata()
      // 获得商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听方法
       **/
       // 选项卡切换
      tabChange(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            // 一切换选项卡后，重新刷新beter-scroll,重新计算页面高度和强制完成上一页面finishPullUp方法，否则可能无法再次触发上拉加载更多
            this.$refs.HomeScroll.finishPullUp();
            break
          case 1:
            this.currentType = 'new'
            this.$refs.HomeScroll.finishPullUp();
            break
          case 2:
            this.currentType = 'sell'
            this.$refs.HomeScroll.finishPullUp();
            break
        }
      },
      // 返回顶部
      backTopClick(){
        // 调用scroll组件中的scrollTo方法
        this.$refs.HomeScroll.scrollTo(0,0,2000)
      },
      // 控制backtop是否显示和隐藏
      scrollChange(position){
        this.isShowbackTop = (-position.y)>1000?true:false
        // console.log(position)
      },
      // 上拉加载更多
      loadMore(){
        this.getHomeGoods(this.currentType)
        this.$refs.HomeScroll.finishPullUp();
      },
      /**
       * 网络请求方法
       **/
      //获得轮播图和recommends的数据
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      // 获得商品数据
      getHomeGoods(type) {
        const page = this.goods[type].page + 1
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1;
          console.log(this.goods[type].list)

        })
      }
    }
  }
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100vh;
    position: relative;
  }

  .home-top {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 998;
  }

  .scrollHeight {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
