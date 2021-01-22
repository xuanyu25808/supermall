<template>
	<div class="profile-layout">
    <top-bar class="profile-topbar">
      <div slot="center">我的档案</div>
    </top-bar>
    <profile-header />
    <profile-property />
    <profile-purchase />
  </div>
</template>

<script>
  import TopBar from 'components/common/topbar/TopBar'

  import ProfileHeader from './components/ProfileHeader'
  import ProfileProperty from './components/ProfileProperty'
  import ProfilePurchase from './components/ProfilePurchase'
	export default{
		name:'Profile',
    components:{
      TopBar,
      ProfileHeader,
      ProfileProperty,
      ProfilePurchase
    }
	}
</script>

<style scoped>
  .profile-topbar{
    background-color: var(--color-tint);
    color: #fff;
  }

</style>
