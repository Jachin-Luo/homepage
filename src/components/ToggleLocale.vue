<template>
 <div @click="toggleLocales">
  切换
 </div>
</template>

<script lang='ts' setup>
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'
const { t, locale } = useI18n()


async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}


</script>

<style lang='scss' scoped>

</style>