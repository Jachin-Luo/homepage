---
date: 2023-9-8 17:49:40
title: My Cool App
duration: 5min
subtitle: 一次伟大的尝试
meta:
  - name: description
  - content: Hello World

---


## window.scrollTo 

[Window.scrollTo() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/scrollTo)

滚动到文档中的某个坐标。

## Window.matchMedia() 

[Window.matchMedia() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/matchMedia)

[`Window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window) 的 **`matchMedia()`** 方法返回一个新的 [`MediaQueryList`](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaQueryList) 对象，表示指定的[媒体查询 (en-US)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)字符串解析后的结果。返回的 `MediaQueryList` 可被用于判定 [`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 是否匹配媒体查询，或者监控一个 `document` 来判定它匹配了或者停止匹配了此媒体查询。

## unplugin-auto-import 插件

[告别手动引入依赖：unplugin-auto-import 插件助你提升编码体验（内附实现原理） - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/612397686)

## e.composedPath() Event方法

[Event.composedPath() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Event/composedPath)

**`composedPath()`** 是 [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 接口的一个方法，当对象数组调用该侦听器时返回事件路径

## Element.getBoundingClientRect()

[Element.getBoundingClientRect() - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect)

**`Element.getBoundingClientRect()`** 方法返回一个 [`DOMRect`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect) 对象，其提供了元素的大小及其相对于[视口](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)的位置

## gray-matter 

[gray-matter](https://github.com/jonschlinkert/gray-matter)

从字符串或文件中解析前言。

## vite-plugin-pages插件

[hannoeru/vite-plugin-pages: File system based route generator for ⚡️Vite (github.com)](https://github.com/hannoeru/vite-plugin-pages)

根据文件生成路由

## unplugin-vue-markdown插件

[unplugin/unplugin-vue-markdown: Compile Markdown to Vue component (github.com)](https://github.com/unplugin/unplugin-vue-markdown)

编译md文件为vue组件

## unplugin-vue-components插件

[unplugin/unplugin-vue-components: 📲 On-demand components auto importing for Vue (github.com)](https://github.com/unplugin/unplugin-vue-components)

vue自动import和registr组件

## 空值合并操作符 ??

这是一个逻辑操作符，与 || 操作符十分相似，但是它们并不是等价的，具体的区别如下

```js
let a = 0
let b = ''
let c = null
let d = undefined

let x = 0 ?? 100 // x 等于 0
let y = '' ?? 100 // y 等于 ''
let z = null ?? 100 // z 等于 100
let k = undefined ?? 100 // k 等于 100

let o = 0 || 100  // o 等于 100
let p = '' || 100  // p 等于 100
let q = null || 100  // q 等于 100
let r = undefined || 100  // r 等于 100
```

?? 只有当操作符左侧表达式的值为 undefined 或者 null 时，才会返回右侧的值。

|| 只要操作符左侧表达式的值为 false 时，那么就会返回右侧的值。左侧的表达式会自动做布尔运算，因为 0 和 空字符串 '' 做布尔运算，其值为 false，所以 o 和 p 的值等于 100。

通过上面的比较可以发现，?? 操作符的出现，是为了更准确的做空值判断，只有 null 和 undefined 才会被判定为空值， 0 和 '' 不会被判定为空值。

## 空值赋值操作符 ??=

只有当 ??= 左侧的值为 null 或者 undefined 的时候，才会将右侧变量的值赋值给左侧变量，其他所有值都不会进行赋值，在某些场景下可以省略很多代码。

```js
let a = null
let b = undefined
let c = 100
let d = 200

// 因为 a 的值为 null，所以会将 c 的值赋值给 a , 所以最终 a = 100
a ??= c

// 因为 b 的值为 undefined，所以会将 d 的值赋值给 b , 所以最终 b = 200
b ??= d
```

## video标签解决不能自动播放的问题

添加muted属性


<!-- <Catalogue :projects="frontmatter.projects"></Catalogue> -->
