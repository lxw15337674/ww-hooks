---
group:
  title: cache
  path: /cache
---

# useHash

简化 url 上 hash 操作

## demo

<code src="./Demo/index.tsx"/>

## API

```typescript
const [state, setState, reset] = useHash(initialHash);

```

### Result

| **参数** | **说明**     | **类型**                  |
| -------- | ------------ | ------------------------- |
| hash     | hash 值      | `string`                  |
| setHash  | 设置 hash 值 | `(value: string) => void` |
| reset    | 重置 hash 值 | `()=>void`                |

### Params

| **参数**    | **说明**     | **类型** | **默认值** | 必填 |
| ----------- | ------------ | -------- | ---------- | ---- |
| initialHash | 默认 hash 值 | `string` | `null`     | 否   |
