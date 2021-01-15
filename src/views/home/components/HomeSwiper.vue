<template>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="HomeSwiperImgLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default{
    name:'HomeSwiper',
    components:{
      Swiper,SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isEmit:false
      }
    },
    methods:{
      // 用来看图片是否加载完成，可用来计算tabControl选项卡的告诉
      HomeSwiperImgLoad(){
        if (!this.isEmit) {
          this.$emit('HomeSwiperImgLoad')
          this.isEmit = true
        }
      }
    }
  }
</script>

<style>
</style>
