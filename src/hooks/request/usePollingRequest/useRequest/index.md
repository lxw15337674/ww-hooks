---
group:
  title: request
  path: /request
---

# useRequest

特性：

- [x] 具备基础的状态管理
- [x] 可以设置手动/自动请求
- [ ] 轮询请求

## demo

<code src="./Demo/index.tsx"/>

## API

```typescript
```

### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| D    | 返回数据泛型 | any    |



### Result

| 参数    | 说明                                                         | 类型                                      |
| ------- | ------------------------------------------------------------ | ----------------------------------------- |
| data    | service 返回的数据，默认为 `undefined`。如果有 `formatResult`, 则该数据为被格式化后的数据。 | `D`                                       |
| error   | service 抛出的异常，默认为 `undefined`                       | `string`                                  |
| loading | service 是否正在执行                                         | `boolean`                                 |
| run     | 手动触发 service 执行，如果 options 存在 debounce，则 run  会返回空 Promise。 | `() =>  Promise<Error\|AxiosResponse<D>>` |
| mutate  | 直接修改 data                                                | `React.Dispatch<React.SetStateAction<D>>` |
|         |                                                              |                                           |

### Params

| 参数          | 说明                                                         | 类型                 | 默认值 | 必填 |
| ------------- | ------------------------------------------------------------ | -------------------- | ------ | ---- |
| *config*      | hook配置项                                                   | `Config<D>`          | -      | 否   |
| *axiosConfig* | axios配置项                                                  | `AxiosRequestConfig` | -      | 否   |
| interceptors  | useAxios拦截器，[详情](/hooks/request/use-Axios#interceptors) | `Interceptors`       | -      | 否   |

### config

| 参数        | 说明                                                         | 类型                               | 默认值 | 必填 |
| ----------- | ------------------------------------------------------------ | ---------------------------------- | ------ | ---- |
| manual      | 默认 `false`。 即在初始化时自动执行 service。如果设置为 `true`，则需要手动调用 `run` 触发执行。 | `boolean`                          | false  | 否   |
| initialData | 默认的 data。                                                | `D`                                | null   | 否   |
| onSuccess   | service resolve时触发 。                                     | `(data: AxiosResponse<D>) => void` | -      | 否   |
| onError     | service reject时触发。                                       | `(error: string) => void`          | -      | 否   |
|             |                                                              |                                    |        |      |

