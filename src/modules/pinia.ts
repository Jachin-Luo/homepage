/*
 * @Descripttion: 
 * @Author: 
 * @Date: 2023-09-08 10:02:01
 * @LastEditTime: 2023-09-08 13:07:05
 * @FilePath: \00-PersonalHomePage\src\modules\pinia.ts
 */
import { createPinia } from 'pinia'
import { type UserModule } from '~/types/types'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ isClient, initialState, app }) => {
  const pinia = createPinia()
  app.use(pinia)
  // Refer to
  // https://github.com/antfu/vite-ssg/blob/main/README.md#state-serialization
  // for other serialization strategies.
  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value
}
