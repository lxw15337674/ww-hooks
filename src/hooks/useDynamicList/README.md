---
group:
  title: dom
  path: /dom
---
# useDynamicList

提供虚拟滚动的列表，支持横纵向滚动，用于解决海量数据渲染时卡顿问题。

区别：

1. dom回收

文档：

https://github.com/dwqs/blog/issues/70

https://www.jianshu.com/p/4e16b4211d84



<code src="./Demo/index.tsx" />

<code src="./Demo/test.tsx" />

### Params

| 参数         | 说明                   | 类型  |     | 默认值 |
| ------------ | ---------------------- | ----- | --- | ------ |
| originalList | 包含大量数据的列表     | `T[]` |     |        |
| options      | 可选配置项，见 Options | -     |     |        |

### Options

| 参数       | 说明                                                   | 类型     | 默认值                   |
| ---------- | ------------------------------------------------------ | -------- | ------------------------ |
| cellHeight | 行高度，静态高度可以直接写入像素值，动态高度可传入函数 | `number` | `((item: T) => number))` |
| cellWidth  | 行宽度，静态高度可以直接写入像素值，动态高度可传入函数 | `number` | `((item: T) => number))` |
| overscan   | 视区上、下额外展示的 dom 节点数量                      | `number` | `5`                      |

### Result

| 参数         | 说明                   | 类型                                  |
| ------------ | ---------------------- | ------------------------------------- |
| list         | 当前需要展示的列表内容 | `{data: T, index: number}[]`          |
| wrapperStyle | 滚动容器的样式         | `{marginTop: number,height: number;}` |
|              |                        |                                       |
|              |                        |                                       |
