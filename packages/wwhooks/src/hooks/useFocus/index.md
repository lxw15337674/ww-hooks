---
group:
  title: Sensor
---

# useFocus

管理元素 focus 状态

## demo

<code src="./Demo/index.tsx"></code>

## API

```typescript
const isFocused = useFocus(ref);
```

### Result

| **参数**  | **说明**   | **类型**  |
| --------- | ---------- | --------- |
| isFocused | 是否 focus | `boolean` |
|           |            |           |
|           |            |           |

### Params

| **参数** | **说明**         | **类型** | **默认值** | 必填 |
| -------- | ---------------- | -------- | ---------- | ---- |
| target   | DOM 节点或者 Ref | `Target` | -          | 是   |
