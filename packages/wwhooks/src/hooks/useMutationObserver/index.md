---
group:
  title: Sensor

---

# useMutationObserver

使用[MutationObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)监听 dom 节点变化的hook。

## demo

<code src="./Demo/index.tsx"></code>
<code src="./Demo/test.tsx"></code>


### Result

| **参数** | **说明**       | **类型**  |
| -------- | -------------- | --------- |
| isObserving   |    是否处于观察状态        | `boolean`    |
| setIsObserving  | 切换观察状态 | `React.Dispatch<React.SetStateAction<boolean>>` |

### Params

| 参数    | 说明                                         | 类型                   | 默认值 | 必填 |
|---------|----------------------------------------------|------------------------|--------|--------|
| target | 需要监听的DOM 节点或者 Refs | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      | 是     |
| callback | 回调函数                    | `(entry: MutationCallback) => void` | - | 是 |
| config | 观察器配置 | [属性配置](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/API/MutationObserver/observe_2f2addbfa1019c23a6255648d6526387) | - | 否 |





