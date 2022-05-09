---
group:
  title: State
  path: /State
---

# useClipboardText

简化粘贴板操作。

## demo

### 基本用法

<code src="./Demo/index.tsx"/>

## API

```javascript
const [clipboardText,setClipboardText] = useClipboardText();
```



### Result

| 参数             | 说明           | 类型                                                        |
| ---------------- | -------------- | ----------------------------------------------------------- |
| clipboardText    | 剪切板文本     | `string`                                                    |
| setClipboardText | 设置剪切板文本 | `(clipboardText: string|(prevText:string)=>string) => void` |


