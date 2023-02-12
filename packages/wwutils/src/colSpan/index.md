---
---

# colSpan

表格的列合并。

## demo

<code src="./Demo/index.tsx"></code>


<API id="colSpan"></API>


### Generics

| **参数** | **说明** | **继承** | **默认值** |
| -------- | -------- | -------- | ---------- |
| F        | 数据泛型 | `{}`     | -          |

### Result

| **参数** | **说明**       | **类型**                        |
| -------- | -------------- | ------------------------------- |
| span     | key 列的合并值 | `[index in keyof T]?: number[]` |

### Params

| **参数**   | **说明**         | **类型**      | **默认值** | 必填 |
| ---------- | ---------------- | ------------- | ---------- | ---- |
| collection | 用来迭代的集合。 | `T[]`         | -          | 是   |
| keys       | 排序的 key       | `(keyof T)[]` | -          | 是   |