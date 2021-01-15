<template>
  <div class="simpleDes" v-if="Object.keys(simpleDes).length !== 0">
    <div class="simpleDes-title-message">
      <h2 class="simpleDes-title">{{simpleDes.title}}</h2>
    </div>
    <div class="simpleDes-price-message">
      <div class="price-newPrice">￥{{simpleDes.realPrice}}</div>
      <div class="price-oldPrice">{{simpleDes.oldPrice}}</div>
      <div class="price-descount" :style="{background:simpleDes.discountBgColor}">{{simpleDes.discountDesc}}</div>
    </div>
    <div class="simpleDes-sale-message">
      <div class="sale-count" v-if="simpleDes.columns">{{simpleDes.columns[0]}}</div>
      <div class="sale-star" v-if="simpleDes.columns">{{simpleDes.columns[1]}}</div>
      <div class="sale-disSale" v-if="simpleDes.services[0]">{{simpleDes.services[0].name}}</div>
    </div>
    <div class="simpleDes-transport-message">
       <div class="noreason" v-if="simpleDes.services[2]">{{simpleDes.services[2].name}}</div>
      <div class="threeTime" v-if="simpleDes.services[3]">{{simpleDes.services[3].name}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SimpleDes",
    props: {
      simpleDes: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped="scoped">
  .simpleDes {
    width: 100%;
    padding: 10px 8px 20px 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .simpleDes-title-message {
    font-size: 13px;
    color: #494949;
    margin-bottom: 10px;
  }

  .simpleDes-price-message {
    display: flex;
    align-items: center;
  }

  .price-newPrice {
    font-size: 20px;
    color: #F29098;
  }

  .price-oldPrice {
    font-size: 12px;
    text-decoration: line-through;
    position: relative;
    top: 1px;
    margin-left: 8px;
    margin-right: 8px;
    color: #ABABAB;
  }

  .price-descount {
    color: white;
    font-size: 16px;
    padding: 4px;
    box-sizing: border-box;
    border-radius: 10px;
    position: relative;
    top: -5px;
    font-weight: bold;
  }
  .simpleDes-sale-message{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ABABAB;
    font-size: 12px;
    margin-top: 3px;
    padding-bottom: 8px;
    border-bottom: 2px solid #f3f3f3;
  }
  .simpleDes-transport-message{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #f3f3f3;
  }
</style>
