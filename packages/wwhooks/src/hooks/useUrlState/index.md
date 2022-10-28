---
group:
  title: cache
  path: /cache
---

# useUrlState

简化url的query 参数操作

>主要利用URLSearchParams和history两个api。
>
>[URLSearchParams - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)
>
>[History API - Web API 接口参考 | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/API/History_API)
>
>

## demo

<code src="./Demo/index.tsx"/>

## API

```typescript

```

### Result

| **参数** | **说明**                | **类型**          |
| -------- | ----------------------- | ----------------- |
| urlState | URLSearchParams数据     | `URLSearchParams` |
| actions  | 操作集合，会同步到url上 | `Actions`         |

### Actions

| **参数** | **说明**   | **类型**                                          |
| -------- | ---------- | ------------------------------------------------- |
| set      | 设置数据。 | `(key: string, entry: SetState<string>) => void;` |
| clear    | 清空数据   | `()=>void`                                        |

### Params

| **参数**       | **说明**                                                     | **类型**                                                     | **默认值** | 必填 |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ---------- | ---- |
| *defaultValue* | 数据的默认值。即如果url的query参数为空时的缺省值，不会主动同步到urlState。 | `string \|string[][] \|Record<string, string> \|URLSearchParams` | -          | 否   |
| navigateMode   | 设置数据时切换 history 的方式                                | `'push' \|'replace'`                                         | `push`     | 否   |

