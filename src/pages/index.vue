<!--
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-05 16:58:44
 * @LastEditTime: 2023-09-07 11:50:01
 * @FilePath: \00-PersonalHomePage\src\pages\index.vue
-->
<template>
  <div id="aa">home</div>
  <button>++++</button>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
console.log('route', route)
console.log('router', router.getRoutes())
</script>

<style lang="scss" scoped>
#aa{
  --text-size:16px
}
#aa .big-size{
  --text-size:32px
}

#aa{
  font-size: var(--text-size);
}

</style>
