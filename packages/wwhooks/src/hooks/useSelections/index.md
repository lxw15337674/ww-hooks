---
group:
  title: State
  path: /State
---

# useSelections

特性：

## demo

### 基本用法

<code src="./Demo/index.tsx"></code>

### 组件库集合

<code src="./Demo/CheckboxGroup.tsx"></code>

## API

```typescript
const result: Result = useSelections<T>(items: T[], defaultSelected?: T[]，key:string='id');
```

### Result

| 参数              | 说明                                                         | 类型                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| selected          | 已经选择的元素                                               | `T[]`                                                        |
| allSelected       | 是否全选                                                     | `boolean`                                                    |
| noneSelected      | 是否一个都没有选择                                           | `boolean`                                                    |
| partiallySelected | 是否半选                                                     | `boolean`                                                    |
| select            | 选择单个元素                                                 | `(value: T，checked:boolean) => void`                        |
| isSelected        | 元素是否被选择                                               | `(value: T) => boolean`                                      |
| setSelected       | 选择多个元素。多次执行时，后面的返回值会覆盖前面的，因此如果希望合并多次操作的结果，需要手动处理：`setSelected((oldArray) => oldArray.concat(newArray))` | `(value: T[]) => void | (value: (prevState: T[]) => T[]) => void` |
| selectGroupByKey  | 通过key，选择多个元素。                                      | `(keys: string[]) => void`                                   |
| selectByKey       | 通过key，选择单个元素。,第二个参数为反选，默认为false,如果为true，则已经选中的会取消选中，未选中的会选中。 | `(itemKey: string, toggle?: boolean) => void`                |
| selectedKeys      | 已经选择的元素的key                                          | `string|number[]`                                            |
| selectAll         | 选择或取消选择全部元素，如果不选择则为切换                   | `(isSelected?: boolean) => void`                             |
|                   |                                                              |                                                              |

#### 
