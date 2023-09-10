/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-04 14:32:20
 * @LastEditTime: 2023-09-08 17:50:04
 * @FilePath: \00-PersonalHomePage\vite.config.ts
 */

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
//nodejs
import fs from 'fs-extra'
import { fileURLToPath, URL } from 'node:url'
import { basename, dirname, resolve } from 'node:path'
import path from 'node:path'
//unoCss
import UnoCSS from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetAttributify from '@unocss/preset-attributify'
//自动import插件
import AutoImport from 'unplugin-auto-import/vite'
//自动注册导入组件插件
import Components from 'unplugin-vue-components/vite'
//elementplus自动导入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

//根据文件生成路由
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
// import { VueRouterAutoImports } from 'unplugin-vue-router'

//图标库icon
import Icons from 'unplugin-icons/vite'
//svg解析
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
//自定义图标-svg解析
import IconsResolver from 'unplugin-icons/resolver'

//md文档解析为vue组件
import Markdown from 'unplugin-vue-markdown/vite'
import LinkAttributes from 'markdown-it-link-attributes'
//Shiki是一个基于TextMate语法的漂亮语法突出显示器。
import Shiki from 'markdown-it-shiki'
//为标题自动生成锚点
import anchor from 'markdown-it-anchor'
//生成Markdown文档的目录
import TOC from 'markdown-it-table-of-contents'
import {slugify} from './src/utils/slugify'


//18n国际化
import VueI18n from '@intlify/unplugin-vue-i18n/vite'



//ssg配置
import generateSitemap from 'vite-ssg-sitemap'

//pwa
import { VitePWA } from 'vite-plugin-pwa'


export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~/': `${path.resolve(__dirname, 'src')}/`,
    }
  },

  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
      script: {
        defineModel: true
      }
    }),

    vueJsx(),
    UnoCSS({
      presets: [presetUno(), presetAttributify()]
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue', 'md'],
      importMode: 'async'
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts({
      layoutsDirs: 'src/layouts' // 布局文件存放目录 默认src/layouts
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      //语言库的位置
      include: [path.resolve(__dirname, 'locales/**')]
    }),

    //自动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
      
      imports: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head', 'vue-i18n'],
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
        //更改生成.eslintrc-auto-import.json的地址，默认在根路径
        filepath: 'src/types/.eslintrc-auto-import.json'
      },
      //更改生成auto-imports.d.ts的地址，默认在根路径
      dts: 'src/types/auto-imports.d.ts',
      //自动导入文件夹
      dirs: ['src/utils'],
      vueTemplate: true
    }),

    //自动导入注册组件
    Components({
      extensions: ['vue', 'md'],
      dts: 'src/types/components.d.ts',
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      //解析器
      resolvers: [
        //elementplus解析器
        ElementPlusResolver(),
        //自定义图标解析器
        IconsResolver({
          prefix: 'i',
          customCollections: ['custom']
        })
      ]
    }),

    // https://github.com/antfu/vite-plugin-vue-markdown
    Markdown({
      // wrapperComponent: (id) => (id.includes('/demo/') ? 'WrapperDemo' : 'WrapperPost'),
      wrapperComponent:'WrapperPost',
      wrapperClasses: 'prose prose-sm m-auto text-left',
      //要管理文档头和元，需要安装 @unhead/vue 并进行一些设置。
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        //配置主题
        md.use(Shiki, {
          theme: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
          }
        })
        //配置链接
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener'
          }
        })
        //标题加上锚点
        md.use(anchor, {
					slugify,
					permalink: anchor.permalink.linkInsideHeader({
						symbol: '#',
						renderAttrs: () => ({ 'aria-hidden': 'true' }),
					}),
				})
        //目录
        md.use(TOC, {
					includeLevel: [1, 2, 3, 4],
					slugify,
					containerHeaderHtml: '<div class="table-of-contents-anchor"><div class="i-ri-menu-2-fill" /></div>',
				})
      }
    }),

    //图标
    Icons({
      compiler: 'vue3',
      autoInstall: true,
      defaultClass: 'inline',
      defaultStyle: 'vertical-align: sub;',
      //自定义svg图标
      customCollections: {
        // 给svg文件设置fill="currentColor"属性，使图标的颜色具有适应性
        custom: FileSystemIconLoader('src/assets/svg/custom', (svg) =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
       // https://github.com/antfu/vite-plugin-pwa
       VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'Vitesse',
          short_name: 'Vitesse',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
      }),
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
      script: 'async',
      formatting: 'minify',
      crittersOptions: {
        reduceInlineStyles: false,
      },
      onFinished() {
        generateSitemap()
      },
  },
})
