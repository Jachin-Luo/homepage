<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-04 15:34:22
 * @LastEditTime: 2023-09-08 13:51:58
 * @FilePath: \00-PersonalHomePage\src\components\layout\HeaderView.vue
-->
<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-04 15:34:22
 * @LastEditTime: 2023-09-08 13:50:55
 * @FilePath: \00-PersonalHomePage\src\components\layout\HeaderView.vue
-->
<template>
  <header class="header z-40">
    <RouterLink
      class="w-12 h-12 absolute xl:fixed m-5 select-none outline-none decoration-none color-inherit"
      to="/"
      focusable="false"
    >
      <Logo />
    </RouterLink>
    <button
      title="Scroll to top"
      fixed
      right-3
      bottom-3
      w-10
      h-10
      hover:op100
      rounded-full
      hover-bg-hex-8883
      transition
      duration-300
      z-100
      print:hidden
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/" title="Home">
          <span class="lt-md:hidden">Home</span>
          <div i-humbleicons-home class="md:hidden" />
        </RouterLink>
        <RouterLink to="/document" title="Doc">
          <span class="lt-md:hidden">Doc</span>
          <div i-ri-article-line class="md:hidden" />
        </RouterLink>
        <RouterLink to="/demos" title="Demos">
          <span class="lt-md:hidden">Demos</span>
          <div i-ri-lightbulb-line class="md:hidden" />
        </RouterLink>
        <a title="WeChat" @click="clipBoard">
          <div i-fa-wechat class="lt-md:hidden" />
        </a>
        <a href="https://space.bilibili.com/8266793" target="_blank" title="bilibili">
          <ICustomBilibili w-5 h-5 />
        </a>
        <a href="https://github.com/Jachin-Luo" target="_blank" title="GitHub" class="lt-md:hidden">
          <div i-uil-github-alt />
        </a>

        <ToggleTheme />
        <ToggleLocale/>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import { getClipboardData, setClipboardData } from '@/utils/handleClipBoard'


const { y: scroll } = useWindowScroll()
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
const weChart = 'lyk0398'
const clipBoard = async () => {
  try {
    const res = await getClipboardData()
    if (res == 'weChart') {
    } else {
      setClipboardData(weChart)
    }
    ElMessage({
      message: '已复制',
      type: 'success'
    })
  } catch (error) {
    console.log(error)
    ElMessage({
      message: '复制失败！',
      type: 'warning'
    })
  }
}





</script>

<style lang="scss" scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
