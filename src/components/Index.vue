<template>
	<div :class="$style.index">
		<div v-if="isIndex" :class="$style.tabs">
			<div :class="$style.item">
				<router-link :class="[$style.active,$style.link]" to="/">首页</router-link>
			</div>
			<div :class="$style.item">
				<router-link :class="$style.link" to="/recommend">推荐课程</router-link>
			</div>
			<div :class="$style.item">
				<router-link :class="$style.link" to="/index">所有课程</router-link>
			</div>
		</div>
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			isIndex: true
		}
	},
	updated (){
		if (this.$router.currentRoute.name !== 'index' ) {
			this.isIndex = false
			console.log("Hello world!")
		} else {
			this.isIndex = true
			console.log("Hello")
		}
	}
}
</script>

<style lang='sass' module>
@import '../assets/reset.scss';
@import '../assets/value.scss';
.index {
	flex: 1;
}
.home {
	font-family: 'STHeiti';
	height: 100%;
}
.tabs {
	height: 48px;
	padding: 0 16px;
	font-size: 0;
	background: $shallow_silver;
}
.item {
	width: 80px;
	display: inline-block;
	font-size: 14px;
	text-align: center;
}
.link {
	display: inline-block;
	color: #666666;
	line-height: 44px;
}
.active {
	border-bottom: 4px solid currentColor;
	color: #EEAB5D;
}
</style>
