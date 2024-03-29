---
title: useObject
group:
  title: State
--- 

# useObject

简化对象类型操作

## demo

<code src="./Demo/index.tsx"></code>

### Generics

| 参数 | 说明     | 默认值   | 继承     |
| ---- | -------- | -------- | -------- |
| T    | 数据泛型 | `object` | `object` |

### Result

| **参数** | **说明**                                                     | **类型**                                       |
| -------- | ------------------------------------------------------------ | ---------------------------------------------- |
| object   | 数据                                                         | `T`                                            |
| set      | 设置数据。只需要传入需修改的属性即可，会自动与 prevState 进行合并。 | `Partial<T> \| ((prevState: T) => Partial<T>)` |
| actions  | 状态及操作集合                                               | `Actions`                                      |

### Actions

| **参数** | **说明**     | **类型**                     |
| -------- | ------------ | ---------------------------- |
| setAll   | 设置数据，   | `T \| ((prevState: T) => T)` |
| reset    | 重置为默认值 | `() => void`                 |
| isEdited | 数据是否修改 | `boolean`                    |

### Params

| 参数           | 说明     | 类型 | 默认值 | 必填 |
| -------------- | -------- | ---- | ------ | ---- |
| _defaultValue_ | 初始数据 | `T`  | `null` | 否   |
