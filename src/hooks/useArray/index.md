---
title: useArray
group:
  title: state
  path: /state
---

# useArray

简化 Array 类型操作

## demo

<code src="./Demo/index.tsx"/>

## API

```typescript
const [array, { array, set, setAll, remove, reset, clear, push, reorder}] =useArray<string>([]);
```

### Generics

| **参数** | **说明**     | **默认值** |
| -------- | ------------ | ---------- |
| T        | 子项数据类型 | any        |

### Result

| **参数** | **说明**       | **类型**  |
| -------- | -------------- | --------- |
| array    | 数据           | `T[]`     |
| isEdited | 是否修改                     | `boolean`                                      |
| set      | 修改元素         | `(index:number, value: T) => void` |
| setAll   | 修改为新的数组   | `(value: T[]) => void`             |
| remove   | 删除元素         | `(index:number)=>void`       |
| reset    | 重置为默认值     | `()=>void`                      |
| clear    | 清空数组         | `()=>void`                   |
| push     | 数据末尾添加元素 | `(value:T)=>void`            |
| swap     | 两个元素交换位置   | `(dragIndex, dropIndex)=>void` |
| reorder  | 将指定元素重新排列到指定位置 | `(startIndex: number, endIndex: number)=>void` |
|  |  |  |

### Params

| **参数**       | **说明** | **类型**      | **默认值** | 必填 |
| -------------- | -------- | ------------- | ---------- | ---- |
| _defaultValue_ | 初始数据 | `T[]|()=>T[]` | `[]`       | 否   |
