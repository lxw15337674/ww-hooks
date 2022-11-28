---
group:
  title: useMouse
  path: /Sensor
---

# useMouse

获取鼠标位置

## demo

### 基本用法

<code src="./Demo/index.tsx"/>

### Result

| 参数    | 说明                   | 类型     |
| ------- | ---------------------- | -------- |
| clientX | 距离当前窗口左侧的距离 | `number` |
| clientY | 距离当前窗口顶部的距离 | `number` |
| pageX   | 距离完整页面左侧的距离 | `number` |
| pageY   | 距离完整页面顶部的距离 | `number` |
| screenX | 距离显示器左侧的距离   | `number` |
| screenY | 距离显示器顶部的距离   | `number` |

> [前端offset/scroll/client各类属性详解](https://juejin.cn/post/6940808773564891166)