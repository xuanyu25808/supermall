<template>
  <div class="goods-list">
    <goods-list-item :goods-item="item" v-for="(item,index) in goods" :key='index' />
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default{
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .goods-list{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background-color: #f6f6f6;
    box-sizing: border-box;
    padding-top: 10px;
    padding-right: 10px;
  }
</style>
