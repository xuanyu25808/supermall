<template>
  <div id="home" class="home-layout">
    <top-bar class="home-top">
      <div slot="center">购物街</div>
    </top-bar>
    <!-- 运用一个错觉 记得在组件中使用vuex来同意状态-->
    <tab-control v-show="isTabFixed" @tabChange="tabChange" :titles="['流行','新款','精选']" ref="tabControl1" class="tab-control" />
    <scroll class="scrollHeight" ref="HomeScroll" :probe-type="3" @scroll="scrollChange" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper class="home-swiper" :banners="banners" @HomeSwiperImgLoad="HomeSwiperImgLoad" />
      <home-recommend :recommends="recommends" />
      <home-feature />
      <tab-control @tabChange="tabChange" :titles="['流行','新款','精选']" ref="tabControl2" />
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
  import {debance} from 'common/utils'
  import {backTopMixin} from 'common/mixin.js'

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
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0
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
    mixins:[backTopMixin],
    mounted(){
      // 1.图片完成加载的事件监听
      // 防抖动函数,不让事件频繁的进行触发函数
      const refresh = debance(this.$refs.HomeScroll.refresh,50)
      //监听goods中图片加载完成    利用bus总线来操作
      this.$bus.$on('HomeGoodsItemImgLoad',()=>{
        refresh()
      })

      this.tabChange(0)
    },
    activated(){
      // 防止有bug!!!来设置两次
      this.$refs.HomeScroll.scrollTo(0,this.saveY,0)
      this.$refs.HomeScroll.refresh()
      this.$refs.HomeScroll.scrollTo(0,this.saveY,0)
    },
    deactivated(){
      this.saveY = this.$refs.HomeScroll.getSavePositionY()
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
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.HomeScroll.refresh()
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },

      //监听页面滚动的距离
      scrollChange(position){

        // 控制backtop是否显示和隐藏
        this.isShowbackTop = (-position.y)>1000

        // console.log(position)
        //设置tabControl是否吸顶
        this.isTabFixed = (-position.y)>this.tabOffsetTop
      },
      // 上拉加载更多
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      //重新计算tabControl的offsetTop高度
      HomeSwiperImgLoad(){
        // 2.获取tabControl的offsetTop,设置tabControl的吸顶效果
        //$el可以获得组件内最外层的元素
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        // console.log(this.tabOffsetTop)
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
          this.goods[type].page += 1

          // 完成上拉加载更多，告诉better-scroll，我这里完成了，才能调用下一步
           this.$refs.HomeScroll.finishPullUp();
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
    /* background-color: var(--color-tint);
    color: #fff; */
    /* 在使用浏览器原生滚动时可用，现在用better-scroll不需要了 */
/*    position: fixed;
    top: 0;
    left: 0;
    z-index: 999; */
  }

  .scrollHeight {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control{
    position: relative;
    top: -1px;
    z-index: 999;
  }
</style>
