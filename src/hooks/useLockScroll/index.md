---
group:
  title: dom
  path: /dom
---

# useLockScroll

需要隐藏 body 或指定容器的滚动条的hook，例如用于dialog组件

## demo

<code src="./Demo/index.tsx"/>


## API

```typescript
const [toggle,lockState] = useLockScroll(container)
```

### Result

| **参数** | **说明**     | **类型**   |
| -------- | ------------ | ---------- |
| toggle   | 切换隐藏状态 | `()=>void` |
| state    | 隐藏状态     | `boolean`  |



### Params

| **参数**  | **说明**                 | **类型**      | **默认值** | 必填 |
| --------- | ------------------------ | ------------- | ---------- | ---- |
| container | 容器元素，为空则隐藏body | `HTMLElement` | -          | 否   |

