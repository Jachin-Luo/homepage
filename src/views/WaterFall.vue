<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-04 13:47:11
 * @LastEditTime: 2023-09-04 13:59:03
 * @FilePath: \05-waterfall-vue2\src\views\Waterfall.vue
-->
<template>
	<div>
		<nav>
			<router-link to="/waterfall/equalWidth">等宽瀑布流</router-link>|
			<router-link to="/waterfall/equalHeight">等高瀑布流</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'WaterFall',

	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="less" scoped></style>
