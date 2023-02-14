---
group:
  title: Sensor

---

# useHover

判断元素的悬停状态

## demo

### 基本用法

<code src="./Demo/index.tsx"></code>

## API

```javascript
const isHovering = useHover(target, {onEnter,onLeave});
```



### Result

| 参数       | 说明         | 类型    |
| ---------- | ------------ | ------- |
| isHovering | 元素是否悬停 | boolean |




### Params

| **参数** | **说明**                    | **类型**                                                  | **默认值** | 必填 |
| -------- | --------------------------- | --------------------------------------------------------- | ---------- | ---- |
| target   | 需要监听的DOM 节点或者 Refs | `() => Element` | `Element` | `MutableRefObject<Element>` | -          | 是   |
| onEnter  | hover时回调                 | () => void                                                | -          |      |
| onLeave  | leave时回调                 | () => void                                                | -          |      |
