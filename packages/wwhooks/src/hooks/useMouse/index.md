---
group:
  title: Sensor

---

# useMouse

一个跟踪鼠标位置的 Hook。

## demo


<code src="./Demo/Window.tsx"></code>

<code src="./Demo/Element.tsx"></code>

### Result

| **参数**    | **说明**                             | **类型** |
| ----------- | ------------------------------------ | -------- |
| screenX     | 距离显示器左侧的距离                 | `number` |
| screenY     | 距离显示器顶部的距离                 | `number` |
| clientX     | 距离当前视窗左侧的距离，与滚动条无关 | `number` |
| clientY     | 距离当前视窗顶部的距离，与滚动条无关 | `number` |
| pageX       | 距离完整页面左侧的距离，与滚动条有关 | `number` |
| pageY       | 距离完整页面顶部的距离，与滚动条有关 | `number` |
| offsetX     | 距离事件源元素左侧的距离             | `number` |
| offsetY     | 距离事件源元素顶部的距离             | `number` |
| elementX    | 距离指定元素左侧的距离               | `number` |
| elementY    | 距离指定元素顶部的距离               | `number` |
| elementH    | 指定元素的高                         | `number` |
| elementW    | 指定元素的宽                         | `number` |
| elementPosX | 指定元素距离完整页面左侧的距离       | `number` |
| elementPosY | 指定元素距离完整页面顶部的距离       | `number` |


> [前端offset/scroll/client各类属性详解](https://juejin.cn/post/6940808773564891166)