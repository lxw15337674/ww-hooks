---
group:
  title: dom
  path: /dom
---

# useTitle

用于设置页面标题。

## 代码演示 

### 基础用法

<code src="./Demo/index.tsx" /> 


<code src="./Demo/Demo2.tsx" /> 


## API

```typescript
const [title,setTitle] = useTitle(initialTitle?: string, restoreOnUnmount?: boolean);
```

### Result

| **参数** | **说明**     | **类型**                                    |
| -------- | ------------ | ------------------------------------------- |
| title    | 页面标题     | `string`                                    |
| setTitle | 设置页面标题 | `string \| ((prevState: string) => string)` |

### Params

| 参数  | 说明     | 类型     | 默认值 | 必填 |
|-------|----------|----------|--------|--------|
| initialTitle     | 初始页面标题，挂载时会同步到document.title | `string` | `document.title` | 否   |
| restoreOnUnmount | 组件卸载时，是否恢复上一个页面标题 | `boolean` | `false` | 否 |



