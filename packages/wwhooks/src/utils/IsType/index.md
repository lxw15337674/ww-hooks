---
# group:
#   title: utils
---

# IsType

判断数据类型。

## demo

<code src="./Demo/index.tsx"></code>

### Generics

| **参数** | **说明** | **继承** | **默认值** |
| -------- | -------- | -------- | ---------- |
| F        | 数据泛型 | `any`    | -          |

### Result

| **参数** | **说明**     | **类型**  |
| -------- | ------------ | --------- |
| boolean  | 类型是否匹配 | `boolean` |
|          |              |           |

### Params

| **参数** | **说明**   | **类型** | **默认值** | 必填 |
| -------- | ---------- | -------- | ---------- | ---- |
| data     | 要检查的值 | `any`    | -          | true |
| type     | 类型       | `string` | -          | true |
