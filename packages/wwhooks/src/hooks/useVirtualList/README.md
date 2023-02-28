---
group:
  title: dom
  path: /dom
---
# useVirtualList

提供虚拟滚动的列表，解决大数据渲染卡顿问题。

特性：

1. 只支持固定高度，性能最优。

> 动态高度，请使用[useDynamicList](/hooks/use-dynamic-list)



<code src="./Demo/index.tsx" ></code>

<code src="./Demo/test.tsx" ><code>

<code src="./Demo/table.tsx" ><code>

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
| wrapperStyle | children 外层包裹的样式 | `CSSProperties`              |
| scrollTo     | 滚动到指定index         | `(index: number) => void`    |

