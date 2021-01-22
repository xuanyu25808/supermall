<template>
  <div class="profile-header">
    <div class="header-head-imgBox">
      <img class="header-head-img" src="~assets/images/profile/avatar.svg">
    </div>
    <div class="header-center">
      <span class="header-login">登录/注册</span>
      <p class="header-phone">
        <img class="header-phone-img" src="~assets/images/profile/phone.svg" alt="">
        暂无绑定手机
      </p>
    </div>
    <div class="header-right">
      <img class="header-right-img" src="~assets/images/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileHeader"
  }
</script>

<style scoped>
  .profile-header {
    background-color: var(--color-tint);
    width: 100%;
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    font-size: 14px;
    position: relative;
    top: -1px;
    color: #fff;
  }

  .header-head-imgBox {
    width: 50px;
    height: 50px;
    margin: 5px 20px;
  }

  .header-head-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .header-center {
    flex: 1;
  }

  .header-login {}

  .header-phone {
    margin-top: 8px;
    display: flex;
    align-items: center;
    margin-left: -10px;
  }

  .header-phone-img {
    width: 20px;
    height: 20px;
  }

  .header-right {
    width: 25px;
    height: 25px;
    margin-right: 30px;
  }

  .header-right-img {
    width: 100%;
    height: 100%;
  }
</style>
