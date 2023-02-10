---
group:
  title: Function
  path: /Function
---

# useIntervalFn

循环执行函数的hook

特性：

1. 只会保持一个循环，多次start不用多次循环。
2. 卸载后会暂停循环。

> 为什么用setTimeout替代setInterval:
>
> https://juejin.cn/post/7045113363625410590

## demo

<code src="./Demo/test.tsx"></code>

## API

```typescript
const {
  start,
  clear,
  looping
} = useIntervalFn(
  fn: ()=>void,
  delay:number,
);
```

### Result

| **参数**    | **说明**       | **类型**     |
| ----------- | -------------- | ------------ |
| **start**   | 触发函数       | `() => void` |
| **clear**   | 取消当前防抖   | `() => void` |
| **looping** | 是否处于循环中 | boolean      |

### Params

| **参数** | **说明**           | **类型**     | **默认值** | 必填 |
| -------- | ------------------ | ------------ | ---------- | ---- |
| fn       | 需要循环执行的函数 | `() => void` | -          | 是   |
| _delay_  | 循环间隔的毫秒数   | `number`     | -          | 是   |
|          |                    |              |            |      |
