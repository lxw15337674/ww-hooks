---
group:
  title: Function
  path: /Function
---

# useTimeoutFn

处理延迟执行函数。

## Demo

<code src="./Demo/index.tsx" ></code>

## API

```typescript
const [run,{
  waiting,
  cancel
}] = useTimeoutFn(
  fn: T,
  delay
);
```
### Generics

| **参数** | **说明**     | 继承    | 默认值  |
| -------- | ------------ | ------- | ------- |
| T        | 函数参数泛型 | `any[]` | `never` |

### Params

| 参数  | 说明                                                                  | 类型                              | 默认值 | 必填 |
| ----- | --------------------------------------------------------------------- | --------------------------------- | ------ | ---- |
| fn    | 需要延迟执行的函数                                                    | `(...args: T) => void`            | -      | 是   |
| delay | 延迟时间（单位为毫秒），当取值为 `null` 或 `undefined` 时会停止计时器 | `number` \| `undefined` \| `null` | 0      | 否   |

| 参数    | 说明                  | 类型                   |
| ------- | --------------------- | ---------------------- |
| run     | 手动触发 service 执行 | `(...args: T) => void` |
| waiting | service 是否在延迟中  | `boolean`              |
| cancel  | 清除处于延迟的函数    | `() => void`           |
