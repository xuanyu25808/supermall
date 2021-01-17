<template>
  <div class="detail">
    <detail-top-bar />
    <scroll class="content" ref="detailScroll">
      <detail-swiper :swiper-img-data="swiperImgData"/>
      <simple-des :simple-des="simpleDes" />
      <detail-shop-message :shop-message="shopMessage" />
      <detail-info :detail-info="detailInfo" />
      <item-params :item-params="itemParams" />
      <detail-rate :user-rate="userRate" />

      <goods-list  :goods="detailGoodsList"  />


    </scroll>
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

  import scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {detailData,simpleDes,shopMessage,itemParams,detailRecommend} from 'network/detail'
  import {debance} from 'common/utils'
  export default{
    name:"Detail",
    data(){
      return{
        iid:null,
        swiperImgData:[],
        simpleDes:{},
        shopMessage:{},
        detailInfo:{},
        itemParams:{},
        userRate:{},
        detailGoodsList:[]
      }
    },
    components:{
      DetailTopBar,
      scroll,
      DetailSwiper,
      SimpleDes,
      DetailShopMessage,
      DetailInfo,
      ItemParams,
      DetailRate,
      GoodsList
    },
    created(){
      this.iid = this.$route.params.iid
      detailData(this.iid).then(res=>{
        const data = res.result
        // console.log(data)
        //获取顶部轮播图图片
        this.swiperImgData = data.itemInfo.topImages;
        //获得轮播图下商品的简单描述信息
        this.simpleDes = new simpleDes(data.itemInfo,data.columns,data.shopInfo.services)
        //获取商家店铺的数据
        this.shopMessage = new shopMessage(data.shopInfo)
        //获取商品展示信息
        this.detailInfo = data.detailInfo
        //获取尺码信息
        this.itemParams = new itemParams(data.itemParams.info,data.itemParams.rule)
        //获取用户评价信息
        if (data.rate.list) {
          this.userRate = data.rate.list[0]
        }
        //获取推荐信息数据
        detailRecommend().then(res=>{
          console.log(res.data.list,this.iid);
          this.detailGoodsList = res.data.list
        })

      })
    },
    mounted(){
      const refresh = debance(this.$refs.detailScroll.refresh,100)
      this.$bus.$on('detailImgLoad',()=>{
        refresh();
      })
      
      const refresh1 = debance(this.$refs.detailScroll.refresh,100)
      this.$bus.$on('detailGoodsItemImgLoad',()=>{
        refresh1();
      })
      
    }
  }
</script>

<style scoped="scoped">
  .detail{
    position: relative;
    z-index: 1000;
    background-color: #FFFFFF;
    width: 100%;
    height: 100vh;
  }
  .content{
    /* height: calc(100% - 44px); */
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
</style>
