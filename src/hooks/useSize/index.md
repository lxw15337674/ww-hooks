---
group:
  title: dom
  path: /dom
---

# useSize

一个用于监听 dom 节点尺寸变化的 Hook。

## demo

<code src="./Demo/index.tsx"/>

### Result

| **参数** | **说明**                    | **类型**                                 |
| -------- | --------------------------- | ---------------------------------------- |
| ref      | 用于绑定需要监听的 dom 节点 | `React.MutableRefObject<HTMLDivElement>` |
| size     | dom 节点的尺寸              | `{ width: number, height: number }`      |
