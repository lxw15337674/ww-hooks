---
group:
  title: Sensor
  path: /Sensor
---
# useSize

一个用于监听 dom 节点尺寸变化的 Hook。

## demo

<code src="./Demo/index.tsx"></code>
<code src="./Demo/Demo2.tsx"/>

### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| target | 需要监听的DOM 节点或者 Refs | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |


### Result

| **参数** | **说明**       | **类型** |
| -------- | -------------- | -------- |
| wdith    | dom 节点的宽度 | `number` |
| height   | dom 节点的高度 | `number` |

