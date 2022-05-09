---
group:
  path: /State
---

# useReactive

通过Proxy实现响应式State，可以直接修改state。

> 注意：代理对象作为依赖，不会触发重新执行。

## demo

### 基本用法

<code src="./Demo/index.tsx"/>
<code src="./Demo/Demo2.tsx"/>
<code src="./Demo/test2.tsx"/>
<code src="./Demo/test.tsx"/>

### Generics

| **参数** | **说明** | extends               |
| ------ | ------ | --------------------- |
| T      | 函数泛型   | `Record<string, any>` |

### Params

| **参数**       | **说明** | **类型** | **默认值** | **必填** |
| ------------ | ------ | ------ | ------- | ------ |
| InitialState | 初始数据   | `T`    | -       | false  |
