<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-04 14:32:20
 * @LastEditTime: 2023-09-07 16:56:23
 * @FilePath: \00-PersonalHomePage\src\App.vue
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: () => (isDark.value ? '#00aba9' : '#ffffff')
    }
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: () => (preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg')
    }
  ]
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
