<template>
  <swiper class="swiper-Box">
    <swiper-item v-for="item in swiperImgData" class="swiper-imgBox">
      <img :src="item" class="swiper-img">
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
  export default{
    name:"DetailSwiper",
    components:{
      Swiper,
      SwiperItem
    },
    props:{
      swiperImgData:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .swiper-Box{
    width: 100%;
    height: 300px;
  }
  .swiper-imgBox{
    width: 100%;
    height: 300px;
  }
  .swiper-img{
    width: 100%;
    height: 300px;
  }
</style>
