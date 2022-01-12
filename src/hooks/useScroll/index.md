---
group:
  title: dom
  path: /dom
---

# useScroll

用于管理滚动。

## demo

### 基本用法

<code src="./Demo/index.tsx"/>

### Result

| 参数 | 说明     | 类型                            |
| ---- | -------- | ------------------------------- |
| size | 滚动位置 | `{ left: number, top: number }` |


#### config

| **参数** | **说明**              | **类型**                                                     | **默认值** | 必填 |
| :------- | --------------------- | ------------------------------------------------------------ | ---------- | ---- |
| target   | DOM 节点或者 Ref 对象 | `(() => HTMLElement)` \| `HTMLElement` \| `React.MutableRefObject` \| `Window` \| `Document` | `window`   | 否   |
|          |                       |                                                              |            |      |
|          |                       |                                                              |            |      |
|          |                       |                                                              |            |      |
