---
group:
  title: dom
  path: /dom
---

# useClick

用于管理单击、双击事件。

## demo

### 基本用法

<code src="./Demo/index.tsx"></code>

### Result

| 参数 | 说明     | 类型                            |
| ---- | -------- | ------------------------------- |
| fn   | 触发函数 | `(e: React.MouseEvent) => void` |

### Params

| **参数**      | **说明**     | **类型**                      | **默认值** | 必填    |
| ------------- | ------------ | ----------------------------- | ---------- | ------- |
| simpleClickFn | 单击触发函数 | `(e: React.MouseEvent)=>void` | -          | `false` |
| doubleClickFn | 双击触发函数 | `(e: React.MouseEvent)=>void` | -          | `false` |
| config        | 关于双击配置 | `config`                      | -          | `false` |

### config

| **参数**  | **说明**                           | **类型**  | **默认值** | 必填    |
| --------- | ---------------------------------- | --------- | ---------- | ------- |
| delay     | 多少毫秒内再次点击，触发双击。     | `number`  | `250`      | `false` |
| exclusive | 是否互斥，即双击时是否触发单击函数 | `boolean` | `false`    | `false` |
