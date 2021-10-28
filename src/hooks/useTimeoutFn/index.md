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

| 参数  | 说明                                                                  | 类型                              |
| ----- | --------------------------------------------------------------------- | --------------------------------- |
| fn    | 是你想要在到期时间(delay 毫秒)之后执行的函数                          | `() => void`                      |
| delay | 到期时间（单位为毫秒），当取值为 `null` 或 `undefined` 时会停止计时器 | `number` \| `undefined` \| `null` |
|       |                                                                       |                                   |
