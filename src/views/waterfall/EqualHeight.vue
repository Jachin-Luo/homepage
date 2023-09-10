<template>
	<div>
		<nav>
			<router-link to="/waterfall/equalHeight/01">方式一</router-link> |
			<router-link to="/waterfall/equalHeight/02">方式二</router-link>|
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

<style lang="scss" scoped></style>
