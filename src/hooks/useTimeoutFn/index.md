---
group:
  title: sideEffect
  path: /sideEffect
---

# useTimeoutFn

封装 setTimeout 的 Hook。

## Demo

<code src="./demo/index.tsx" />

### Params

| 参数   | 说明                                                                  | 类型                              | 默认值 | 必填 |
| ------ | --------------------------------------------------------------------- | --------------------------------- | ------ | ---- |
| fn     | 需要延迟执行的函数                                                    | `() => void`                      | -      | 是   |
| delay  | 延迟时间（单位为毫秒），当取值为 `null` 或 `undefined` 时会停止计时器 | `number` \| `undefined` \| `null` | -      | 是   |
| mutate | 是否手动触发                                                          | `boolean`                         | true   | 否   |

| 参数    | 说明                  | 类型         |
| ------- | --------------------- | ------------ |
| run     | 手动触发 service 执行 | `()=>void`   |
| waiting | service 是否在延迟中  | `boolean`    |
| cancel  | 清除处于延迟的函数    | `() => void` |
