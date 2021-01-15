<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
      <main-tabbar class="main-tabbar"></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/mainTabbar/MainTabbar'
	export default {
		name:'App',
    components:{
      MainTabbar
    }
	}
</script>

<style>
	@import url("assets/styles/base.css");
  .main-tabbar{
    z-index: 999;
  }
</style>
