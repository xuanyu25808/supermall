<template>
  <div class="detail">
    <detail-top-bar />
    <detail-swiper :swiper-img-data="swiperImgData"/>
    <simple-des :simpleDes="simpleDes" />
  </div>
</template>

<script>
  import DetailTopBar from './components/DetailTopBar'
  import DetailSwiper from './components/DetailSwiper'
  import SimpleDes from './components/SimpleDes'

  import {detailData,simpleDes} from 'network/detail'
  export default{
    name:"Detail",
    data(){
      return{
        iid:null,
        swiperImgData:[],
        simpleDes:{}
      }
    },
    components:{
      DetailTopBar,
      DetailSwiper,
      SimpleDes
    },
    created(){
      this.iid = this.$route.params.iid
      detailData(this.iid).then(res=>{
        const data = res.result
        console.log(data)
        //获取顶部轮播图图片
        this.swiperImgData = data.itemInfo.topImages;
        //获得轮播图下商品的简单描述信息
        this.simpleDes = new simpleDes(data.itemInfo,data.columns,data.shopInfo.services)
        console.log(this.simpleDes)
      })
    }
  }
</script>

<style>
</style>
