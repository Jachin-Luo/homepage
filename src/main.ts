/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-04 14:32:20
 * @LastEditTime: 2023-09-08 13:32:33
 * @FilePath: \00-PersonalHomePage\src\main.ts
 */
import 'virtual:uno.css'
import './assets/styles/main.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from './App.vue'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'


import { createHead } from '@unhead/vue'
import { ViteSSG } from 'vite-ssg'
import type { UserModule } from './types/types'


import ElementPlus from 'element-plus'


const routes = setupLayouts(generatedRoutes)
const head = createHead()


export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)

