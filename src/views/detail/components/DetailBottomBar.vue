<template>
  <div class="bottom-bar">
    <div class="detail-bottom-icon">
      <ul class="detail-bottom-nav">
      	<li class="detail-bottom-nav-item">
          <div class="detail-bottom-nav-item-icon icon1"></div>
          <div class="detail-bottom-nav-item-name">客服</div>
        </li>
        <li class="detail-bottom-nav-item">
          <div class="detail-bottom-nav-item-icon icon2">
          </div>
          <div class="detail-bottom-nav-item-name"icon>店铺</div>
        </li>
        <li class="detail-bottom-nav-item" @click="collectionClick">
          <div ref="collection" class="detail-bottom-nav-item-icon icon3">
          </div>
          <div class="detail-bottom-nav-item-name">收藏</div>
        </li>
      </ul>
    </div>
    <div class="detail-bottom-btn">
      <div class="detail-bottom-btn-join" @click="addProduct">加入购物车</div>
      <div class="detail-bottom-btn-sale">购买</div>
    </div>
  </div>
</template>

<script>
  export default{
    name:"DetailBottomBar",
    methods:{
      // 收藏按钮
      collectionClick(){
        if (this.$refs.collection.classList.contains('icon4')) {
          this.$refs.collection.classList.remove('icon4')
        }else{
          this.$refs.collection.classList.add('icon4')
        }
      },
      addProduct(){
        this.$emit('addProduct')
      }

    }
  }
</script>

<style scoped="scoped">
  .bottom-bar{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-bottom-icon,.detail-bottom-btn{
    flex:1
  }
  .detail-bottom-icon{
    width: 100%;
    height: 100%;
  }
  .detail-bottom-nav{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .detail-bottom-nav-item{
    flex: 1;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .detail-bottom-nav-item-icon{
    width: 16px;
    height: 16px;
    background: url(~assets/images/detail/detail_bottom.png) no-repeat;
    box-sizing: 50% 50%;
    margin-bottom: 5px;
  }
  .icon1{
    background-position: -1px -38px;
  }
  .icon2{
    background-position: -1px -57px;
  }
  .icon3{
    background-position: -1px -1px;
  }
  .icon4{
    background-position: -1px -19px;
  }
  .detail-bottom-nav-item-name{
    font-size: 14px;
  }
  .detail-bottom-btn{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .detail-bottom-btn-join,.detail-bottom-btn-sale{
    flex:1;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .detail-bottom-btn-join{
    background-color: gold;
    color: black;
  }
  .detail-bottom-btn-sale{
    background-color: hotpink;
    color: white;
  }
</style>
