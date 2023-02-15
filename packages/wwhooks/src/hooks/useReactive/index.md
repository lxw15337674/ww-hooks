---
group:
  title: State
---

# useReactive

通过Proxy实现响应式State，可以直接修改state。

> 注意：如果需要用useEffect,需要用JSON.stringify包裹

## demo

### 基本用法

<code src="./Demo/test1.tsx"></code>
<code src="./Demo/test2.tsx"></code>
<code src="./Demo/test3.tsx"></code>
<code src="./Demo/dev1.tsx"></code> 

### Generics

| **参数** | **说明** | extends               |
| ------ | ------ | --------------------- |
| T      | 函数泛型   | `Record<string, any>` |

### Params

| **参数**       | **说明** | **类型** | **默认值** | **必填** |
| ------------ | ------ | ------ | ------- | ------ |
| InitialState | 初始数据   | `T`    | -       | false  |
