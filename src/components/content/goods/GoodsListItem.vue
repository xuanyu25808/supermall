<template>
  <div class="goods-list-item" @click="itemClick">
      <div class="item-imgBox">
        <img class="item-img" :src="goodsItem.show.img" alt="" @load="imageLoad">
      </div>
      <div class="item-title">{{goodsItem.title}}</div>
      <div class="item-content">
        <span class="item-price">{{goodsItem.price}}</span>
        <span class="item-icon"></span>
        <span class="item-mark">{{goodsItem.sale}}</span>
      </div>

  </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        //使用bus总线向Home发射事件，每加载成功一张图片就传递一次事件
        this.$bus.$emit('goodsItemImgLoad')
      },
      itemClick(){
        this.$router.push('/detail/'+this.goodsItem.iid)
        console.log('---')
      }
    }
  }
</script>

<style>
  .goods-list-item{
    width: 50%;
    box-sizing: border-box;
    padding-left: 10px;
    padding-bottom: 10px;
  }
  .item-imgBox{
    width: 100%;
  }
  .item-img{
    width: 100%;
    height: 224px;
    border-radius: 5px;
  }
  .item-title{
    overflow: hidden;
    /* 文字溢出变省略号 */
    text-overflow: ellipsis;
    /* 不换行 */
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
  .item-content{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    line-height: 12px;
  }
  .item-price{
    color: var(--color-high-text);
    margin-right: 4px;
  }
  .item-mark{
    margin-left: 4px;
  }
  .item-icon{
    width: 14px;
    height: 14px;
    background:url(~assets/images/common/collect.svg)  0/15px 12px no-repeat;
    position: relative;
    top: -1px;
  }

</style>
