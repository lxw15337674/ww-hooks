---
group:
  title: Sensor

---

# useResizeObserver

一个用于监听 dom 节点尺寸变化的 Hook。

## demo

<code src="./Demo/index.tsx"></code>

### Params

| 参数    | 说明                                         | 类型                   | 默认值 | 必填 |
|---------|----------------------------------------------|------------------------|--------|--------|
| target | 需要监听的DOM 节点或者 Refs | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      | 是     |
| onResize | 改变触发事件 | `(*entry*: ResizeObserverEntry) => void` | - | 是 |

