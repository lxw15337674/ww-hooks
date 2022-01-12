---
title: useBoolean
group:
  title: state
  path: /state
---

# useBoolean

简化 boolean 类型操作

## demo

<code src="./Demo/index.tsx"/>

## API

```typescript
const [ state, { toggle, setTrue, setFalse }] = useBoolean(
  defaultValue?: boolean,
);

```

### Result

| **参数**    | **说明**                           | **类型**                    |
| ----------- | ---------------------------------- | --------------------------- |
| state       | 状态值                             | `boolean`                   |
| toggleState | 切换状态，可以接受参数修改状态值。 | `(value?: boolean) => void` |

### Params

| **参数**     | **说明**                 | **类型**  | **默认值** | 必填 |
| ------------ | ------------------------ | --------- | ---------- | ---- |
| defaultValue | 可选项，传入默认的状态值 | `boolean` | `false`    | 否   |
