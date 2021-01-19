<template>
  <div class="detail">
    <detail-top-bar @titleClick='titleClick' ref="detailTopBar" />
    <scroll class="content" ref="detailScroll" @scroll = 'detailScroll' :probeType='3'>
      <detail-swiper :swiper-img-data="swiperImgData" />
      <simple-des :simple-des="simpleDes" />
      <detail-shop-message :shop-message="shopMessage" />
      <detail-info :detail-info="detailInfo" @detailImgLoad='detailImgLoad' />
      <item-params :item-params="itemParams" ref="params" />
      <detail-rate :user-rate="userRate" ref="rate" />
      <goods-list :goods="detailGoodsList" ref="recommand" />
    </scroll>
    <detail-bottom-bar @addProduct="addProduct"/>
    <back-top @click.native="backTopClick" v-show="isShowbackTop" />
  </div>
</template>

<script>
  import DetailTopBar from './components/DetailTopBar'
  import DetailSwiper from './components/DetailSwiper'
  import SimpleDes from './components/SimpleDes'
  import DetailShopMessage from './components/DetailShopMessage'
  import DetailInfo from './components/DetailInfo'
  import ItemParams from './components/ItemParams'
  import DetailRate from './components/DetailRate'
  import DetailBottomBar from './components/DetailBottomBar'

  import scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/common/backtop/BackTop'

  import {
    detailData,
    simpleDes,
    shopMessage,
    itemParams,
    detailRecommend
  } from 'network/detail'
  import {
    debance
  } from 'common/utils'
  import {backTopMixin} from 'common/mixin'
  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        swiperImgData: [],
        simpleDes: {},
        shopMessage: {},
        detailInfo: {},
        itemParams: {},
        userRate: {},
        detailGoodsList: [],
        refresh: null,
        titleScrollYs: [],
        getTitleScrollY:null,
        currentIndex:0
      }
    },
    components: {
      DetailTopBar,
      scroll,
      GoodsList,

      DetailSwiper,
      SimpleDes,
      DetailShopMessage,
      DetailInfo,
      ItemParams,
      DetailRate,
      DetailBottomBar,
      BackTop
    },
    mixins:[backTopMixin],
    created() {
      this.iid = this.$route.params.iid
      detailData(this.iid).then(res => {
        const data = res.result
        //获取顶部轮播图图片
        this.swiperImgData = data.itemInfo.topImages;
        //获得轮播图下商品的简单描述信息
        this.simpleDes = new simpleDes(data.itemInfo, data.columns, data.shopInfo.services)
        //获取商家店铺的数据
        this.shopMessage = new shopMessage(data.shopInfo)
        //获取商品展示信息
        this.detailInfo = data.detailInfo
        //获取尺码信息
        this.itemParams = new itemParams(data.itemParams.info, data.itemParams.rule)
        //获取用户评价信息
        if (data.rate.list) {
          this.userRate = data.rate.list[0]
        }
      })
      //获取推荐信息数据
      detailRecommend().then(res => {
        this.detailGoodsList = res.data.list
      })
    },
    mounted() {
      this.refresh = debance(this.$refs.detailScroll.refresh, 100)
      // 推荐数据的刷新
      this.$bus.$on('detailGoodsItemImgLoad', () => {
        this.refresh();
      })

      //给getTitleY赋值
      this.getTitleScrollY = debance(()=>{
        this.titleScrollYs = []
        this.titleScrollYs.push(0)
        this.titleScrollYs.push(this.$refs.params.$el.offsetTop)
        this.titleScrollYs.push(this.$refs.rate.$el.offsetTop)
        this.titleScrollYs.push(this.$refs.recommand.$el.offsetTop),
        this.titleScrollYs.push(Number.MAX_VALUE)
      },200)

    },
    methods: {
      // 穿着效果那里的刷新
      detailImgLoad() {
        this.refresh();
        this.getTitleScrollY()
      },
      // 监听title点击事件切换
      titleClick(index) {
        this.$refs.detailScroll.scrollTo(0, -this.titleScrollYs[index], 500)
      },
      // 获得当前position高度，实现滚动到特定位置，title标签切换
      detailScroll(position){

        // 控制backtop是否显示和隐藏
        this.isShowbackTop = (-position.y)>1000

        // 获取Y值
        let scrollY = -position.y;
        // 获取数组长度
        let lentgh = this.titleScrollYs.length;
        for (let i=0;i<lentgh-1;i++) {
          if (this.currentIndex != i && (scrollY >= this.titleScrollYs[i] && scrollY<this.titleScrollYs[i+1])) {
            this.currentIndex = i
            this.$refs.detailTopBar.currentIndex = this.currentIndex
          }
        }
      },
      // 添加商品到购物车
      addProduct(){
        let product = {}
        product.iid = this.iid;
        product.title = this.simpleDes.title
        product.price = this.simpleDes.realPrice
        product.img = this.swiperImgData[0]
        product.desc = this.simpleDes.discountDesc
        // this.$store.commit('addProduct',product)
        // 因为有逻辑判断，所以在action中完成
        this.$store.dispatch('addCart',product).then(res=>{
          this.$toast.show(res)
        })
      }

    }
  }
</script>

<style scoped="scoped">
  .detail {
    position: relative;
    z-index: 1000;
    background-color: #FFFFFF;
    width: 100%;
    height: 100vh;
  }

  .content {
    /* height: calc(100% - 44px); */
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
</style>
