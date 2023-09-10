/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-04 14:55:34
 * @LastEditTime: 2023-09-07 17:44:53
 * @FilePath: \00-PersonalHomePage\uno.config.ts
 */
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import { presetUno } from '@unocss/preset-uno'
export default defineConfig({
  // ...UnoCSS options
  //所有配置 https://unocss.dev/config/
  //快捷方式 合并多个
  shortcuts: [
    {
      'bg-base': 'bg-white dark:bg-black',
      'border-base': 'border-[#8884]'
    },
    [
      /^btn-(\w+)$/,
      ([_, color]) =>
        `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`
    ]
  ],
  rules: [[/^slide-enter-(\d+)$/, ([_, n]) => ({ '--enter-stage': n })]],
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        height: '1.2em',
        width: '1.2em',
        'vertical-align': 'text-bottom'
      }
    }),
    presetAttributify(),
    presetUno(),
    presetWebFonts({
      fonts: {
        sans: 'Inter:400,600,800',
        mono: 'DM Mono:400,600'
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // safelist: [
  //   'i-ri-menu-2-fill',
  // ],
  safelist: 'prose m-auto text-left'.split(' ')
})
