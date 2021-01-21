<template>
  <div class="recomment">
    <div class="recomment-item" v-for="(item,index) in recommends" :key="index">
      <a class="recomment-link" href="javascript:;">
        <div class="recomment-imgBox">
          <img class="recomment-img" :src="item.image" alt="">
        </div>
        <div class="recomment-title">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'HomeRecommend',
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recomment{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    padding-bottom: 20px;
    border-bottom: 10px solid #eee;
  }
  .recomment-item{
    flex:1;
  }

  .recomment-link{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .recomment-imgBox{
    width: 65px;
    height: 65px;
    margin-bottom: 8px;
  }
  .recomment-img{
    width: 100%;
    height: 100%;
  }
  .recomment-title{
    font-size: 12px;
  }
</style>
