/*
 * @Descripttion:
 * @Author:
 * @Date: 2023-09-05 17:39:59
 * @LastEditTime: 2023-09-07 17:23:52
 * @FilePath: \00-PersonalHomePage\src\utils\tools.ts
 */
import dayjs from 'dayjs'

export const isDark = useDark()

/**
 * Credit to [@hooray](https://github.com/hooray)
 * @see https://github.com/vuejs/vitepress/pull/2347
 */
export function toggleDark(event: MouseEvent) {
  // @ts-expect-error experimental API
  // debugger
  /* 
  是否开启过渡动画
  document.startViewTransition 实验性属性，暂时不深入研究
  window.matchMedia('(prefers-reduced-motion: reduce)') 查看用户是否开起了减少动画选项（windows中的设置）
*/
  const isAppearanceTransition =
    document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!isAppearanceTransition) {
    isDark.value = !isDark.value
    return
  }

  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  // @ts-expect-error: Transition API
  /* 
  伪元素树构建，过渡动画
  https://www.jianshu.com/p/ae4a2c41dc96
  */
  const transition = document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
    // ['circle(0px at 1810px 52px)', 'circle(1866.0696664379925px at 1810px 52px)']
    document.documentElement.animate(
      //https://developer.mozilla.org/zh-CN/docs/Web/CSS/clip-path
      {
        clipPath: isDark.value ? [...clipPath].reverse() : clipPath
      },
      {
        duration: 400,
        easing: 'ease-out',
        pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)'
      }
    )
  })
}

export function formatDate(d: string | Date, onlyDate = true) {
  const date = dayjs(d)
  if (onlyDate || date.year() === dayjs().year()) return date.format('MMM D')
  return date.format('MMM D, YYYY')
}
