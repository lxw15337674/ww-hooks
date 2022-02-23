---
group:
  title: Sensor
  path: /Sensor
---

# useIsScroll

判断元素是否处于滚动状态。

使用场景：

1. 判断是否需要展开按钮。

## demo


<code src="./Demo/index.tsx"/>


<code src="./Demo/index2.tsx"/>

### Params

| 参数    | 说明                                         | 类型                   | 默认值 |
|---------|----------------------------------------------|------------------------|--------|
| target | 需要监听的DOM 节点或者 Refs | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |


### Result

| **参数** | **说明**            | **类型**  |
| -------- | ------------------- | --------- |
| x        | x轴是否处于滚动状态 | `boolean` |
| y        | y轴是否处于滚动状态 | `boolean` |

