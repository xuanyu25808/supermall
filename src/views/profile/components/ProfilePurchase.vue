<template>
  <div class="profile-purchase">
    <div class="profile-purchase-item">
      <img class="purchase-item-img" src="~assets/images/profile/message.svg" alt="">
      <span class="purchase-item-name">我的消息</span>
    </div>
    <div class="profile-purchase-item">
      <img class="purchase-item-img" src="~assets/images/profile/pointer.svg" alt="">
      <span class="purchase-item-name">积分商城</span>
    </div>
    <div class="profile-purchase-item">
      <img class="purchase-item-img" src="~assets/images/profile/vip.svg" alt="">
      <span class="purchase-item-name">会员卡</span>
    </div>
    <div class="profile-purchase-item">
      <img class="purchase-item-img" src="~assets/images/profile/cart.svg" alt="">
      <span class="purchase-item-name">我的购物车</span>
    </div>
    <div class="profile-purchase-item">
      <img class="purchase-item-img" src="~assets/images/profile/shopping.svg" alt="">
      <span class="purchase-item-name">下载购物APP</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ProfilePurchase"
  }
</script>

<style scoped>
  .profile-purchase{
  }
  .profile-purchase-item{
    width: 100%;
    height: 50px;
    border-bottom: 2px solid rgb(242, 242, 242);
    display: flex;
    align-items: center;
  }
  .profile-purchase-item:nth-child(3){
    height: 63px;
    border-bottom: 15px solid rgb(242, 242, 242);
  }
  .purchase-item-img{
    width: 20px;
    height: 20px;
    margin: 0 10px 0 20px;
  }
</style>
