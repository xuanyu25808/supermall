<template>
  <div class="profile-property">
    <div class="property-item">
      <p class="item-top"><span class="item-red">0.00</span>元</p>
      <p class="item-title">我的余额</p>
    </div>
    <div class="property-item">
      <p class="item-top"><span class="item-red">0</span>个</p>
      <p class="item-title">我的优惠</p>
    </div>
    <div class="property-item">
      <p class="item-top"><span class="item-red">0</span>分</p>
      <p class="item-title">我的积分</p>
    </div>
  </div>
</template>

<script>
  export default {
    name:"ProfileProperty"
  }
</script>

<style scoped>
  .profile-property{
    width: 100%;
    display: flex;
    padding: 15px;
    border-bottom: 15px solid rgb(242, 242, 242);
  }
  .property-item{
    flex:1;
    text-align: center;
    line-height: 25px;
    font-size: 14px;
  }
  .item-red{
    color: var(--color-high-text);
    font-weight: bold;
    font-size: 20px;
    margin-right: 3px;
  }
</style>
