---
group:
  title: dom
  path: /dom
---

# useWhyDidYouUpdate

排查组件哪个属性改变导致了组件的 rerender。

## 代码演示

### 基础用法

<code src="./Demo/demo1.tsx" ></code>

## API

```typescript
type IProps = Record<string, any>;

useWhyDidYouUpdate(componentName: string, props: IProps): void;
```

### 参数

| 参数          | 说明                                                                                   | 类型     | 默认值 |
| ------------- | -------------------------------------------------------------------------------------- | -------- | ------ |
| componentName | 必填，观测组件的名称                                                                   | `string` | -      |
| props         | 必填，需要观测的数据（当前组件 `state` 或者传入的 `props` 等可能导致 rerender 的数据） | `object` | -      |

### 结果

控制台输出
