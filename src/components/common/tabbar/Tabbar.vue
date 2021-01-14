<template>
	<div class="tabbar">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'Tabbar',
	}
</script>

<style>
	.tabbar{
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f6f6f6;
		box-shadow: 0 -1px 2px rgba(100,100,100,.2);
	}
</style>
