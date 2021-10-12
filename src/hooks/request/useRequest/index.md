---
group:
  title: request
  path: /request
---

# useRequest

1. 具备状态管理

## demo

<code src="./Demo/index.tsx"/>

## API

```typescript
```

### Generics

| 参数 | 说明           | 默认值 |
| ---- | -------------- | ------ |
| D    | 返回数据泛型， | any    |



### Result<P,D>

| 参数    | 说明                                                         | 类型                                               | 默认值 |
| ------- | ------------------------------------------------------------ | -------------------------------------------------- | ------ |
| data    | service 返回的数据，默认为 `undefined`。如果有 `formatResult`, 则该数据为被格式化后的数据。 | `D`                                                |        |
| error   | service 抛出的异常，默认为 `undefined`                       | `string`                                           |        |
| loading | service 是否正在执行                                         | `boolean`                                          |        |
| run     | 手动触发 service 执行，如果 options 存在 debounce，则 run  会返回空 Promise。 | `() =>  Promise<string |AxiosResponse<D>>`         |        |
| mutate  | 直接修改 data                                                | `(newData) => void / ((oldData)=>newData) => void` |        |
|         |                                                              |                                                    |        |

### Params

所有的 Options 均是可选的。

| 参数        | 说明                                                         | 类型                      | 默认值 |
| ----------- | ------------------------------------------------------------ | ------------------------- | ------ |
| manual      | 默认 `false`。 即在初始化时自动执行 service。如果设置为 `true`，则需要手动调用 `run` 触发执行。 | `boolean`                 | false  |
| initialData | 默认的 data。                                                | `D`                       | null   |
| onSuccess   | service resolve 时触发，参数为 `data`  。                    | `(data: D) => void`       | -      |
| onError     | service 报错时触发，参数为 `error` 。                        | `(error: string) => void` | -      |
