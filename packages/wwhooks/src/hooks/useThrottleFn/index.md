---
group:
  title: Function
  path: /Function
---

# useThrottleFn

封装防抖函数的 hook

## demo

<code src="./Demo/index.tsx"></code>

## API

```typescript
const [run,{
  cancel,
  flush
}] = useThrottleFn(
  fn: T,
  wait:number,
  options?: Options
);
```

### Generics

| **参数** | **说明** | **默认值**                |
| -------- | -------- | ------------------------- |
| T        | 函数泛型 | `(...args: any[]) => any` |

### Result

| **参数** | **说明**         | **类型**     |
| -------- | ---------------- | ------------ |
| run      | 触发函数         | T            |
| cancel   | 取消当前防抖     | `() => void` |
| flush    | 立即调用当前防抖 | `() => void` |

### Params

| **参数** | **说明**                                                                      | **类型**  | **默认值**                      | 必填 |
| -------- | ----------------------------------------------------------------------------- | --------- | ------------------------------- | ---- |
| fn       | 需要防抖执行的函数                                                            | `T`       | -                               | 是   |
| _wait_   | 需要延迟的毫秒数                                                              | `number`  | 1000                            | 否   |
| options  | 防抖配置,参考[lodash.throttle](https://www.lodashjs.com/docs/lodash.throttle) | `Options` | `{leading:false,trailing:true}` | 否   |

###
