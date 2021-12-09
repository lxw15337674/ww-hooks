---
group:
  title: utils
  path: /utils
---

# sortBy

排序，类似于[`_.sortBy`](https://www.lodashjs.com/docs/lodash.orderBy#sortBy)，返回值额外增加一个 spanObject，用于列合并。

## demo

<code src="./Demo/index.tsx"/>

### Generics

| **参数** | **说明** | **继承** | **默认值** |
| -------- | -------- | -------- | ---------- |
| F        | 数据泛型 | `{}`     | -          |

### Result

| **参数**   | **说明**       | **类型**                        |
| ---------- | -------------- | ------------------------------- |
| list       | 排序后的数据   | `T[]`                           |
| spanObject | key 列的合并值 | `[index in keyof T]?: number[]` |

### Params

| **参数**   | **说明**         | **类型**      | **默认值** | 必填 |
| ---------- | ---------------- | ------------- | ---------- | ---- |
| collection | 用来迭代的集合。 | `T[]`         | -          | 是   |
| keys       | 排序的 key       | `(keyof T)[]` | -          | 是   |
