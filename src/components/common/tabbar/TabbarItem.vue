<template>
		<div class="tabbar-item" @click="itemClick">
			<div v-if="!isActive">
				<slot name="item-icon"></slot>
			</div>
			<div v-else>
				<slot name="item-icon-active"></slot>
			</div>
			<div :style="activeStyle">
				<slot name="item-text"></slot>
			</div>
		</div>
</template>

<script>
	export default {
		name: 'TabbarItem',
		props: {
			path: String,
			activeColor:{
				type:String,
				default:'red'
			}
		},
		data() {
			return {
				// isActive: false
			}
		},
		computed:{
			isActive(){
				//判断当前route的路径是否和自带的路径一致
				return this.$route.path.includes(this.path)
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods: {
			itemClick() {
				this.$router.replace(this.path)
			}
		}
	}
</script>

<style scoped>
	.tabbar-item {
		height: 49px;
		flex: 1;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.item-img-box {
		width: 24px;
		height: 24px;
		margin-bottom: 2px;
	}

	.item-img {
		width: 24px;
		height: 24px;
	}

	.item-text {
		width: 100%;
		font-size: 14px;
	}
</style>
