---
group:
  title: dom
  path: /dom
---

# useSize

一个用于监听 dom 节点尺寸变化的 Hook。

## demo

<code src="./Demo/index.tsx"/>

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| target | 需要监听的DOM 节点或者 Refs | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |
### Result

| **参数** | **说明**       | **类型**                            |
| -------- | -------------- | ----------------------------------- |
| size     | dom 节点的尺寸 | `{ width: number, height: number }` |

