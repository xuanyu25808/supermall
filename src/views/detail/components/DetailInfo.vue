<template>
  <div class="detailInfo-layout">
    <div class="detailInfo-des">
      <p>{{detailInfo.desc}}</p>
      <span class="detailInfo-cricle cricle1"></span>
      <span class="detailInfo-cricle cricle2"></span>
      <span class="detailInfo-cricle-line line1"></span>
      <span class="detailInfo-cricle-line line2"></span>
    </div>
    <div class="detailImage" v-for="item in detailInfo.detailImage">
      <div class="detailImage-title">{{item.key}}</div>
      <div class="detailImage-box" v-for="itemUrl in item.list">
        <img :src="itemUrl"  class="detailImage-img"  @load="imgLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"DetailInfo",
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imgLoad(){
        this.$bus.$emit('detailImgLoad')
      }
    }
  }
</script>

<style scoped="scoped">
  .detailInfo-layout{
    width: 100%;
    padding: 15px 10px 20px 10px;
  }
  .detailInfo-des{
    font-size: 14px;
    position: relative;
    padding-top: 15px;
    padding-bottom: 10px;
  }
  .detailInfo-cricle{
    width: 4px;
    height: 4px;
    background-color: black;
    position: absolute;
  }
  .cricle1{
    top: 0;
    left: 0;
  }
  .cricle2{
    right: 0;
    bottom: 0;
  }
  .detailInfo-cricle-line{
    width: 100px;
    height: 2px;
    background-color: #C7C7C7;
    position: absolute;
  }
  .line1{
    top: 4px;
    left: 0;
  }
  .line2{
    bottom: -2.5px;
    right: 0;
  }
  .detailImage-title{
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: bold;
  }
  .detailImage-box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detailImage-img{
    width: 100%;
    height: 100%;
  }
</style>
