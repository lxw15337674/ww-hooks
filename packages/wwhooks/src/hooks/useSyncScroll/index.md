---
group:
  title: dom
  path: /dom
---
# useSyncScroll

同步元素之间的 scrollLeft 或 scrollTop

## Demo

<code src="./Demo/index.tsx" ><code>
 
### Params

| 参数      | 说明                    | 类型                                    | 是否必填 | 默认值 |
| --------- | ----------------------- | --------------------------------------- | -------- | ------ |
| refList   | 需要同步的元素 Ref 列表 | `React.MutableRefObject<HTMLElement>[]` | 是       |        |
| attribute | 需要同步的属性          | `left\|top\|both`                       | 否       | left   |

