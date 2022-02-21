---
group:
  title: Sensor
  path: /Sensor
---

# useIntersectionObserver

使用[IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)的 Hook。

## demo

<code src="./Demo/index.tsx"/>

<code src="./Demo/demo2.tsx"/>

### Params

| 参数    | 说明                                         | 类型                   | 默认值 | 必填 |
|---------|----------------------------------------------|------------------------|--------|--------|
| target | 需要监听的DOM 节点或者 Refs | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      | 是     |
| callback | 触发事件 | `(*entry*: IntersectionObserverEntry) => void` | - | 是 |
| *config* | 配置 | ` IntersectionObserverInit` | - | 否 |

