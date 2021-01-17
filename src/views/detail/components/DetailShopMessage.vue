<template>
  <div class="shop-layout">
    <div class="shop-logoBox">
      <div class="shop-logoBox-imgBox">
        <img :src="shopMessage.logo" class="shop-logoBox-img">
      </div>
      <div class="shop-logoBox-name">{{shopMessage.name}}</div>
    </div>
    <div class="shop-des">
      <div class="shop-des-left">
        <div class="shop-des-box">
          <div class="shop-des-count">{{shopMessage.cSells}}</div>
          <div class="shop-des-title">总销量</div>
        </div>
        <div class="shop-des-box">
          <div class="shop-des-count">{{shopMessage.GoodsCount}}</div>
          <div class="shop-des-title">全部宝贝</div>
        </div>
      </div>
      <div class="shop-score">
        <div class="shop-score-item" v-for="item in shopMessage.score">
          <span class="score-item-name">{{item.name}}</span>
          <span class="score-item-score" :style="{color:!item.isBetter?'green':'red'}">{{item.score.toFixed(2)}}</span>
          <span v-if="item.isBetter" class="score-item-topName" :style="{background:'red'}">高</span>
          <span v-else class="score-item-lowName" :style="{background:'green'}">低</span>
        </div>
      </div>
    </div>
    <div class="shop-btnBox">
      <button class="shop-btn">进店逛逛</button>
    </div>
   </div>
</template>

<script>
  export default{
    name:"DetailShopMessage",
    props:{
      shopMessage:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .shop-layout{
    padding: 5px 10px 20px 10px;
    border-bottom: 3px solid #f3f3f3;
  }
  .shop-logoBox{
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 25px;
  }
  .shop-logoBox-imgBox{
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
  .shop-logoBox-img{
    width: 100%;
    height: 100%;
  }
  .shop-logoBox-name{
    font-size: 14px;
  }
  .shop-des{
    display: flex;
  }
  .shop-des-left,.shop-score{
    flex: 1;
  }
  .shop-des-left{
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 3px solid #f3f3f3;
    text-align: center;
  }
  .shop-des-box{
    margin-right: 15px;
  }
  .shop-des-count{
    font-size: 16px;
    margin-bottom: 4px;
  }
  .shop-des-title{
    font-size: 14px;
  }
  .shop-score{
  }
  .shop-score-item{
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
    font-size: 14px;
  }
  ..shop-score-item:last-child{
    margin-bottom: 0px;
  }
  .score-item-score{
    margin-right: 8px;
    margin-left: 8px;
  }
  .font-gcolor{
    color: green;
  }
  .font-rcolor{
    color: red;
  }
  .score-item-topName,.score-item-lowName{
    color: white;
  }
  .shop-btnBox{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  .shop-btn{
    width: 150px;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 30px;
    background-color: #F1F5FB;
    color: #737579;
  }
</style>
