<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-04 15:32:24
 * @LastEditTime: 2023-09-05 15:32:30
 * @FilePath: \myproject\src\views\HomeView.vue
-->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const audio = ref()

onMounted(() => {
  console.log('onMounted')
  console.dir(audio)
  // audio.value.play()
})
</script>

<template>
  <div>abc</div>
 
</template>
