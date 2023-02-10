---
group:
  title: State
  path: /State
---

# useToggle

简化数据选择的操作

## demo

<code src="./Demo/index.tsx"></code>

## API

```typescript
const [state,toggleState] = useToggle<T, U>(defaultValue: T, reverseValue: U);
```

### Generics

| **参数** | **说明**           | **默认值** |
| -------- | ------------------ | ---------- |
| T        | 默认状态值类型     | `string`   |
| U        | 另一个的状态值类型 |            |



### Result

| **参数**    | **说明**  | **类型**                  |
| ----------- | --------- | ------------------------- |
| state       | 状态值    | `T`|
| toggleState | 切换state | `(state?: T \| U) => void` |

### Params

| **参数**     | **说明**                 | **类型** | **默认值** | 必填 |
| ------------ | ------------------------ | -------- | ---------- | ---- |
| defaultValue | 可选项，传入默认的状态值 | `T`      | -          | 是   |
| reverseValue | 可选项，传入取反的状态值 | `U`      | -          | 是   |

