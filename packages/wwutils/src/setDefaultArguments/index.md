---
group:
  title: utils
---

# setDefaultArguments

设置函数的默认参数

## demo

<code src="./Demo/index.tsx"></code>

## API

```typescript
const wrapperFn = setDefaultArguments<F, P>(fn, ...params);
```

### Generics

| **参数** | **说明**         | **继承**                  | **默认值**                |
| -------- | ---------------- | ------------------------- | ------------------------- |
| F        | 函数泛型         | `(...args: any[]) => any` | `(...args: any[]) => any` |
| P        | 新函数的参数泛型 | `any[]`                   | `Parameters<F>`           |

### Result

| **参数** | **说明** | **类型**                        |
| -------- | -------- | ------------------------------- |
| fn       | 新的参数 | `(...args: P) => ReturnType<F>` |
|          |          |                                 |

### Params

| **参数**              | **说明**               | **类型**        | **默认值** | 必填 |
| --------------------- | ---------------------- | --------------- | ---------- | ---- |
| fn                    | 需要设置默认参数的函数 | `F`             | -          | 是   |
| `...defaultArguments` | 默认参数               | `Parameters<F>` | -          | 是   |
