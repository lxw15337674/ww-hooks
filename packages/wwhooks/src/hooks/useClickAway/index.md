---
group:
  title: dom
  path: /dom
---

# useClickAway

监听目标元素外的点击事件。

>demo

### 基本用法

<code src="./Demo/index.tsx"></code>

### 改变ref

<code src="./Demo/Demo2.tsx"/>

### 关于滚动条

<code src="./Demo/Demo3.tsx"/>

### Params

| **参数**    | **说明**                     | **类型**              | **默认值** | 必填 |
| ----------- | ---------------------------- | --------------------- | ---------- | ---- |
| target      | DOM 节点或者 Ref，支持数组   | `Target` | `Target[]` | -          | 是   |
| onClickAway | 触发函数                     | `(event: T) => void`  | -          | 是   |
| eventName   | 指定需要监听的事件，支持数组 | `string` | `string[]` | `click`    | 否   |

