---
group:
  title: State
  path: /State
---

# useLocalStorage

利用LocalStorage持久化state

## demo

### 基本用法

<code src="./Demo/useLocalStorage/index.tsx"/>

### 存储复杂类型数据

<code src="./Demo/useLocalStorage/Demo2.tsx"/>

## API

```typescript
const [state,setState] = useLocalStorage<T>(
  key: string,
  defaultValue?:T
  options?: Options<T>
);
```

### Generics

| **参数** | **说明** | **默认值** |
| -------- | -------- | ---------- |
| T        | 值类型   | `any`      |

### Params

| **参数**    | **说明**                     | **类型**              | **默认值** | 必填 |
| ----------- | ---------------------------- | --------------------- | ---------- | ---- |
| key      | 键值 | `string` | - | 是       |
| defaultValue | 默认值   | `T`      | `null`     | 否   |
| options | 配置项 | `Options` | - | 否 |

### Options

| **参数**         | **说明**           | **类型**               | **默认值**       | 必填 |
| ---------------- | ------------------ | ---------------------- | ---------------- | ---- |
| **serializer**   | 自定义序列方法     | `(value: T) => string` | `JSON.stringify` | 否   |
| **deserializer** | 自定义反序列化方法 | `(value: string) => T` | `JSON.parse`     | 否   |