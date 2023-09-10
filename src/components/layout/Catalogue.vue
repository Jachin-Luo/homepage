<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-08 14:26:23
 * @LastEditTime: 2023-09-08 17:58:33
 * @FilePath: \00-PersonalHomePage\src\components\layout\Catalogue.vue
-->
<template>
   <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(projects)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
</template>

<script lang='ts' setup>
defineProps<{ projects: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\\/]+/g, '-')
}
</script>

<style lang='scss' scoped>
</style>