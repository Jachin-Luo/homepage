<template>
	<div>
		<div>
			<h1>思路2. 利用绝对定位 关键思路：</h1>
			<ul>
				<li>首先设置列宽度，然后计算能够展示的列数。</li>
				<li>
					把图片设置为绝对定位，然后计算出每个图片的top，left值。 先把第一行图片排好，top 为 0，left
					为列的索引*列宽。
				</li>
				<li>
					从第二行开始，每张图片都放到最短的一列下面。然后增加此列高度，此时列的高度发生变化，下张图片又会寻找其他最短的列。以此持续计算下去。
				</li>
			</ul>
		</div>
		<div>
			<ul>
				<li>优势：因为每次追加的图片都是最短列，所以末尾的展示会比思路 1 中要友好很多。</li>
				<li>劣势：没渲染一张都会计算一次 top，left 值。而且图片的顺序是打乱的。</li>
			</ul>
		</div>
		<div ref="waterfall" style="position: relative; border: 1px solid black; width: 1200px">
			<img
				:src="image.url"
				alt=""
				v-for="(image, idx) in imgList"
				:style="{
					position: 'absolute',
					top: image.top + 'px',
					left: image.left + 'px',
					width: colWidth + 'px',
				}"
				:key="idx"
			/>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		//每一列的宽度
		colWidth: {
			type: Number,
			default: 260,
		},
		//图片与图片之间的间距 [上下，左右]
		paddingList: {
			type: Array,
			default: () => {
				return [20, 10]
			},
		},
	},
	data() {
		return {
			imgList: [],
			colNumbers: 0,
			colHeight: [],
			clientWidth: 0,
		}
	},

	mounted() {
		this.loadImage()
		window.addEventListener('resize', () => {
			this.imgList = []
			this.loadImage()
		})
	},
	computed: {
		colSpace() {
			return (this.clientWidth - this.colNumbers * this.colWidth) / (this.colNumbers - 1)
		},
	},
	methods: {
		//计算图片列数
		getColNumbers() {
			//获取容器宽度
			this.clientWidth = this.$refs.waterfall.clientWidth
			//计算列数
			this.colNumbers = Math.floor(this.clientWidth / this.colWidth)
		},
		//读取图片
		loadImage() {
			//调用 getColNumbers 方法计算列数
			this.getColNumbers()
			//循环 11 个图片
			for (let i = 0; i < 11; i++) {
				//创建一个图片实例
				let image = new Image()
				//获取图片的路径
				let url = require(`@/assets/images/${i + 1}.jpg`)
				//设置图片的路径
				image.src = url
				//图片加载完成后调用 onload 事件
				image.onload = () => {
					//调用 render 方法渲染图片
					this.render({
						index: i,
						url: url,
						ratio: image.width / image.height,
					})
				}
			}
		},
		//渲染图片
		render(imgInfo) {
			//获取图片的索引
			let colIndex = imgInfo.index % this.colNumbers
			//设置图片的左边距

			if (colIndex != 0) {
				imgInfo.left = colIndex * (this.colWidth + this.colSpace)
			} else {
				imgInfo.left = colIndex * this.colWidth
			}
			//首行 top为 0，记录每列的高度
			//如果索引小于列数，top 为 0，记录每列的高度
			if (imgInfo.index < this.colNumbers) {
				imgInfo.top = 0
				this.colHeight[colIndex] = this.colWidth / imgInfo.ratio + this.paddingList[0]
			} else {
				//获取高度的最小值
				let minHeight = Math.min.apply(null, this.colHeight)
				//获取最小值的索引
				let minIndex = this.colHeight.indexOf(minHeight)
				//此图片的 top 为上面图片的高度，left 相等
				imgInfo.top = minHeight
				imgInfo.left = minIndex * (this.colWidth + this.colSpace)

				// imgInfo.left = minIndex * this.colWidth + this.colSpace

				//把高度加上去
				this.colHeight[minIndex] += this.colWidth / imgInfo.ratio + this.paddingList[0]
			}
			//把图片添加到 imgList 中
			this.imgList.push(imgInfo)
			console.log(this.imgList)
		},
	},
}
</script>

<style lang="scss" scoped></style>
