<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-08-15 12:48:51
 * @LastEditTime: 2023-09-04 13:54:56
 * @FilePath: \05-waterfall-vue2\src\views\waterfall\EqualWidth.vue
-->
<template>
	<div>
		<nav>
			<router-link to="/waterfall/equalWidth/01">方式一</router-link> |
			<router-link to="/waterfall/equalWidth/02">方式二</router-link>|
			<router-link to="/waterfall/equalWidth/03">方式三</router-link>
		</nav>

		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {}
	},

	mounted() {},

	methods: {},
}
</script>

<style lang="sass" scoped></style>
