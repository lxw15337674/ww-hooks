---
group:
  title: Sensor
  path: /Sensor
---

# useIntersectionObserver

使用[IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API)，监听元素当前是否可见的 Hook。

用处举例：

1. 懒加载
2. 预加载
3. 元素吸顶、吸顶
4. 加载更多
5. 元素埋点

## demo

<code src="./Demo/index.tsx"></code>

<code src="./Demo/demo2.tsx" ><code>

### Params

| 参数    | 说明                                         | 类型                   | 默认值 | 必填 |
|---------|----------------------------------------------|------------------------|--------|--------|
| target | 需要监听的DOM 节点或者 Refs | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      | 是     |
| callback | 触发事件 | `(*entry*: IntersectionObserverEntry) => void` | - | 是 |
| config | 配置 | ` IntersectionObserverInit` | - | 否 |

