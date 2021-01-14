<template>
  <div class="back-top">
    <img class="back-top-img" src="~assets/images/common/top.png" alt="">
  </div>
</template>

<script>
  export default{
    name:'BackTop'
  }
</script>

<style scoped="scoped">
  .back-top{
    position: fixed;
    right: 5px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    opacity: 0.7;
    z-index: 999;
  }
  .back-top-img{
    width: 100%;
    height: 100%;
  }
</style>
