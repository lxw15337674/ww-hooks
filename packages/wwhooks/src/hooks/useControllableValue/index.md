---
group:
  title: State
  path: /State
---

# useControllableValue

用于既支持内部管理，又要支持外部组件控制的 state。

## demo

<code src="./Demo/index.tsx"></code>

<code src="./Demo/index2.tsx"></code>

### Generics

| **参数** | **说明**   | **默认值** |
| -------- | ---------- | ---------- |
| T        | state 类型 |            |

### Result

| **参数** | **说明**          | **类型**            |
| -------- | ----------------- | ------------------- |
| state    | 状态值            | T                   |
| setState | 修改 state 的函数 | ` (val: T) => void` |
|          |                   |                     |

### Params

| **参数**     | **说明**                     | **类型** | **默认值** | 必填 |
| ------------ | ---------------------------- | -------- | ---------- | ---- |
| defaultValue | 默认值，非受控模式           | `T`      | -          | 否   |
| value        | 值，受控模式                 | `T`      | -          | 否   |
| trigger      | 受控模式下，修改值触发的函数 | `T`      | -          | 否   |
