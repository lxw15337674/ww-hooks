---
group:
  title: dom
  path: /dom
---

# useHover

监听元素的悬停状态

## demo

### 基本用法

<code src="./Demo/index.tsx"/>

## API

```javascript
const isHovering = useHover(target);
```

### Result

| 参数       | 说明                   | 类型      |
| ---------- | ---------------------- | --------- |
| isHovering | 鼠标元素是否处于 hover | `boolean` |


### config

| **参数** | **说明**              | **类型**                                                  | **默认值** | 必填 |
| :------- | --------------------- | --------------------------------------------------------- | ---------- | ---- |
| target   | DOM 节点或者 Ref 对象 | `() => Element` | `Element` | `MutableRefObject<Element>` | -          | 是   |
