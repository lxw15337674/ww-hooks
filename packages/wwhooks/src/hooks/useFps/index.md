---
group:
  title: Sensor
---

# useFps

管理页面fps状态

## demo

<code src="./Demo/index.tsx"></code>

## API

```typescript
const fps = useFps(every);
```

### Result

| **参数** | **说明** | **类型** |
| -------- | -------- | -------- |
| fps      | 帧数     | `number` |
|          |          |          |
|          |          |          |

### Params

| **参数** | **说明** | **类型** | **默认值** | 必填 |
| -------- | -------- | -------- | ---------- | ---- |
| every    | 检测间隔 | `number` | 10         | 否   |
