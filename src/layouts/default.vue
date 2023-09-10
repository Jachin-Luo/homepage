<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-07 18:06:36
 * @LastEditTime: 2023-09-07 18:10:58
 * @FilePath: \00-PersonalHomePage\src\layouts\default.vue
-->
<template>
  <HeaderView></HeaderView>
  <main px-4 py-10 text="center gray-700 dark:gray-200">
    <RouterView />
    <div mx-auto mt-5 text-center text-sm opacity-50>123123[Default Layout]</div>
    <div>{{ t('button.back') }}</div>
  </main>
  <FooterView />
</template>
<script lang="ts" setup>
const { t } = useI18n()
</script>
