---
group:
  title: dom
  path: /dom
---
# useDynamicList

提供虚拟滚动的列表，解决大数据渲染卡顿问题。

特性：

1. 支持动态高度，性能稍差。

> 固定高度，请使用[useVirtualList](use-virtual-list)
>
> 区别：
>
> 1. 增加dom回收机制
> 2. 使用二分查找位置
>
> 原理：
>
> https://juejin.cn/post/6993899069932306446



<code src="./Demo/index.tsx" />

<code src="./Demo/test.tsx" />

### Params

| 参数         | 说明                              | 类型                               | 必填 | 默认值 |
| ------------ | --------------------------------- | ---------------------------------- | ---- | ------ |
| originalList | 包含大量数据的列表                | `T[]`                              | 是   | -      |
| containerRef | 容器ref                           | `MutableRefObject<Element>`        | 是   | -      |
| overscan     | 视区上、下额外展示的 dom 节点数量 | `number`                           | 否   | 3      |
| itemHeight   | 行高度                            | `(item: T.index:number) => number` | 是   | -      |

### Result

| 参数         | 说明                    | 类型                         |
| ------------ | ----------------------- | ---------------------------- |
| list         | 当前需要展示的列表内容  | `{data: T, index: number}[]` |
| wrapperStyle | children 外层包裹的样式 | `CSSProperties`              |
| scrollTo     | 滚动到指定index         | `(index: number) => void`    |
|              |                         |                              |
