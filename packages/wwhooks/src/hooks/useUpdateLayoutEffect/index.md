---
title: useUpdateLayoutEffect
group:
  title: lifeCycle
  path: /lifeCycle
---

# useUpdateLayoutEffect

只有在依赖更新时执行。

> 与 useEffect 区别：
>
> 1. 不会在首次渲染时执行。
> 2. 依赖对象为必填项。

## demo

<code src="./Demo/index.tsx"></code>

## API

```typescript
useUpdateLayoutEffect(
  effect: () => (void | (() => void | undefined)),
  deps: deps,
)
```

### Params

| **参数** | **说明**           | **类型**       | **默认值** | 必填 |
| -------- | ------------------ | -------------- | ---------- | ---- |
| effect   | 可执行函数         | `() => (void)` | -          | 是   |
| deps     | 传入依赖变化的对象 | `array`        | -          | 是   |
