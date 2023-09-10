<template>
	<div>
		<div>
			<h1>思路3. CSS3 column 属性</h1>
			<ul>
				<li>优势：更加简单，不用额外计算，直接使用CSS渲染高效。</li>
				<li>劣势：图片的顺序是从上向下排列的，这个要看业务需求允不允许了。另外列数固定。</li>
			</ul>
			<button @click="addImage">添加图片</button>
		</div>
		<div class="waterfall" ref="waterfall" :style="{ columnCount: colNumbers, columnGap: columnGap + 'px' }">
			<div class="image-box" v-for="img in imgList" :key="img">
				<img :src="img" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
import exImage from '/public/images.js'
export default {
	data() {
		return {
			imgList: [
				require('@/assets/images/1.jpg'),
				require('@/assets/images/2.jpg'),
				require('@/assets/images/3.jpg'),
				require('@/assets/images/4.jpg'),
				require('@/assets/images/5.jpg'),
				require('@/assets/images/6.jpg'),
				require('@/assets/images/7.jpg'),
				require('@/assets/images/8.jpg'),
				require('@/assets/images/9.jpg'),
				require('@/assets/images/10.jpg'),
			],
			clientWidth: 1200,
			colNumbers: 4,
			colWidth: 200,
		}
	},

	mounted() {
		console.log('exImage', exImage)
		window.addEventListener('resize', () => {
			this.getColNumbers()
		})
	},
	computed: {
		columnGap() {
			return (this.clientWidth - this.colNumbers * this.colWidth) / (this.colNumbers - 1)
		},
	},
	methods: {
		addImage() {
			this.imgList = this.imgList.concat(exImage)
		},
		getColNumbers() {
			//获取容器宽度
			this.clientWidth = this.$refs.waterfall.clientWidth
			//计算列数
			this.colNumbers = Math.floor(this.clientWidth / this.colWidth)
		},
	},
}
</script>

<style lang="scss" scoped>
.waterfall {
	// column-count: 4;
	// column-gap: 20px;
	.image-box {
		img {
			display: block;
			width: 100%;
			margin-bottom: 20px;
		}
	}
}
</style>
