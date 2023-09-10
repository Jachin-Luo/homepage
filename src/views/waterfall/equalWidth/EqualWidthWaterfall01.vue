<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-08-15 11:42:51
 * @LastEditTime: 2023-09-04 13:43:54
 * @FilePath: \05-waterfall-vue2\src\views\equalWidth\EqualWidthWaterfall01.vue
-->
<template>
	<div>
		<div>
			<h1>关键思路： 首先设置列宽度，然后计算能够展示的列数。 向每一列中添加图片。</h1>
			优势：思路清晰简单，不需要做过多的计算，只要计算需要显示的列数然后添加图片即可。
			劣势：每列的末尾可能不够友好，可能出现有些列会很长，有些又会很短。
		</div>
		<div ref="waterfall" style="display: flex; justify-content: space-around">
			<div v-for="(col, idx) in imgList.length" :key="idx" style="width: 500px" :ref="'col' + idx">
				<img
					:src="url"
					alt=""
					v-for="(url, index) in imgList[idx]"
					:key="index"
					style="width: 500px; padding: 10px"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			imgList: [],
			colWidth: 500,
			colNumbers: 0,
			colHeight: [],
		}
	},

	mounted() {
		this.loadImage()
	},
	methods: {
		//计算图片列数
		getColNumbers() {
			//获取客户端宽度
			let clientWidth = this.$refs.waterfall.clientWidth
			//计算图片列数
			this.colNumbers = Math.floor(clientWidth / this.colWidth)
		},
		//读取图片
		loadImage() {
			//获取图片列数
			this.getColNumbers()
			//循环17次
			for (let i = 0; i < 11; i++) {
				//获取当前图片列索引
				let colIndex = i % this.colNumbers
				//读取图片
				let url = require(`@/assets/images/${i + 1}.jpg`)
				console.log('url', url)

				//如果图片列表中已经存在该图片，则把该图片添加到该列
				if (this.imgList[colIndex]) {
					this.imgList[colIndex].push(url)
				} else {
					//如果图片列表中不存在该图片，则创建一个新的数组，并把该图片添加到该数组中
					this.$set(this.imgList, colIndex, [url])
				}
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
