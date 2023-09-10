<template>
	<div>
		<div>
			思路1. JS计算缩放 首先给定一个基准高度 图片获取基准高度下的宽度，然后计算每一行能够放入多少张
			此时每一行图片肯定会小于容器宽度，然后这一行进行缩放到容器大小。在重新计算放大后的高度。
			优势：图片的内容得到全部展示，不会被隐藏。 劣势：需要反复计算以及缩放。
		</div>
		<div ref="waterfall">
			<div v-for="(row, index) in imgList" :key="index" style="display: flex; justify-content: space-between">
				<img
					:src="imgObj.url"
					alt=""
					v-for="(imgObj, idx) in row"
					:key="idx"
					:style="{ width: imgObj.width + 'px', height: imgObj.height + 'px' }"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			baseHeight: 200, //图片的基础计算高度
			imgList: [[]], //用二维数据保存每一行数据
			rowWidth: 0, //每行的图片宽度
			rowCount: 0, //每行的索引
			clientWidth: 0,
		}
	},
	mounted() {
		this.loadImage()
		window.addEventListener('resize', () => {
			this.imgList = [[]]
			this.loadImage()
		})
	},
	methods: {
		loadImage() {
			for (let i = 0; i < 10; i++) {
				let image = new Image()
				let url = require(`@/assets/images/${i + 1}.jpg`)
				image.src = url
				image.onload = () => {
					this.compare({
						url: url,
						width: this.baseHeight * (image.width / image.height),
						height: this.baseHeight,
					})
				}
			}
		},
		//缩放后的总图片宽度与屏幕宽度比较
		compare(image) {
			//容器宽度
			this.clientWidth = this.$refs.waterfall.clientWidth
			//计算每行宽度
			this.rowWidth += image.width
			//如果宽度大于容器宽度，去掉多余的宽度，整体进行缩放适应容器让右边对齐
			if (this.rowWidth > this.clientWidth) {
				//减去每个css padding边距
				this.clientWidth = this.clientWidth - this.imgList[this.rowCount].length * 10
				this.rowWidth = this.rowWidth - image.width
				//把高度调整为放大后的
				let growAfterHeight = (this.clientWidth * this.baseHeight) / this.rowWidth
				this.imgList[this.rowCount].forEach((item) => {
					item.height = growAfterHeight
				})
				//把多余图片放入到下一行
				this.rowWidth = image.width
				this.rowCount++
				this.$set(this.imgList, this.rowCount, [image])
			} else {
				this.imgList[this.rowCount].push(image)
			}
		},
	},
}
</script>

<style lang="scss" scoped></style>
