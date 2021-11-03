---
title: useMountedState
group:
  title: lifeCycle
  path: /lifeCycle
---

# useMountedState

获取当前组件是否加载的 hook,一般用于避免 useState 的内存泄漏。

> 组件卸载后更新状态导致内存泄漏,如下:
>
> Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.

## 代码演示

### 基础用法

<code src="./Demo/index.tsx" />

## API

```typescript
const state = useMountedState();
```

### Result

| 参数  | 说明                     | 类型    |
| ----- | ------------------------ | ------- |
| state | 当前组件是否处于加载状态 | boolean |
