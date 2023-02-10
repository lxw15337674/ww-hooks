---
group:
  title: State
  path: /State
---

# useNumber

管理 number 类型操作

## demo

<code src="./Demo/index.tsx"></code>

### Result

| **参数** | **说明**       | **类型**  |
| -------- | -------------- | --------- |
| number   | 数据           | `number`  |
| actions  | 状态及操作集合 | `Actions` |

### Actions

| **参数** | **说明**     | **类型**              |
| -------- | ------------ | --------------------- |
| plus     | 加，默认加 1 | `(v?:number) => void` |
| minus    | 减，默认减 1 | `(v?:number) => void` |
| set      | 设置数字     | `(value: number`      |
| reset    | 重置为默认值 | `() => void`          |

### Params

| **参数**     | **说明** | **类型** | **默认值** | 必填  |
| ------------ | -------- | -------- | ---------- | ----- |
| defaultValue | 默认数据 | `number` | 0          | false |
| min          | 最小值   | `number` | -          |       |
| max          | 最大值   | `number` | -          |       |
