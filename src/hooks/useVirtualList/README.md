---
group:
  title: dom
  path: /dom
---
# useVirtualList

提供虚拟滚动的列表，支持横纵向滚动，用于解决海量数据渲染时卡顿问题。

性能最优

限制：

1. 只支持固定高度。

<code src="./Demo/index.tsx" />

<code src="./Demo/test.tsx" />

<code src="./Demo/table.tsx" />

### Params

| 参数         | 说明               | 类型                        | 必填 | 默认值 |
| ------------ | ------------------ | --------------------------- | ---- | ------ |
| originalList | 包含大量数据的列表 | `T[]`                       | 是   | -      |
| containerRef | 容器ref            | `MutableRefObject<Element>` | 是   | -      |
| itemHeight   | 行高度             | `number`                    | 是   | -      |



### Result

| 参数         | 说明                    | 类型                         |
| ------------ | ----------------------- | ---------------------------- |
| list         | 当前需要展示的列表内容  | `{data: T, index: number}[]` |
| wrapperStyle | children 外层包裹的样式 | `object`                     |
