<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-05 17:33:12
 * @LastEditTime: 2023-09-05 18:06:05
 * @FilePath: \myproject\src\components\ToggleTheme.vue
-->
<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div i-ri-sun-line dark:i-ri-moon-line>1231231</div>
  </a>
</template>

<script lang="ts" setup>
import { toggleDark } from '@/utils/tools'
</script>

<style lang="scss" scoped></style>
