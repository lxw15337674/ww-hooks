---
group:
  title: request
  path: /request
---

# useRequest

基于 useAxios 的扩展 hook

特性：

1. 防抖
2. 节流
3. 手动自动触发

## demo

### 防抖

<code src="./Demo/debounce.tsx"/>

### 节流

> 同时配置防抖，节流的情况下，节流优先级低于防抖

<code src="./Demo/throttle.tsx"/>

### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| D    | 返回数据泛型 | any    |

### Result

| 参数         | 说明                                                                                                                | 类型                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------ |
| data         | service 返回的数据，默认为 `undefined`。如果有 `formatResult`, 则该数据为被格式化后的数据。                         | `D`                                              |
| error        | service 抛出的异常，默认为 `undefined`                                                                              | `string`                                         |
| isLoading    | request 是否处于请求状态。                                                                                          | `boolean`                                        |
| isError      | request 是否处于错误状态。                                                                                          | `boolean`                                        |
| isSuccess    | request 是否处于成功状态。                                                                                          | `boolean`                                        |
| status       | 请求状态，初始为'success'                                                                                           | `loading`                                        |
| mutate       | 直接修改 data                                                                                                       | `React.Dispatch<React.SetStateAction<D>>`        |
| run          | - 手动触发 service 执行，run 的 axios 参数优先级最高。<br />- debounce 模式与 throttle 模式返回值为 `Promise<null>` | ` (config?: AxiosRequestConfig) => Promise<Error | AxiosResponse<D>>` |
| cancel       | 取消当前请求                                                                                                        | `() => void`                                     |
| flush        | 立即调用处于防抖或节流状态的函数                                                                                    | `() => Promise<Error                             | AxiosResponse<D>>` |
| interceptors | axios 拦截器,[详细用法](https://github.com/axios/axios#interceptors)                                                | -                                                |

### Params

| 参数     | 说明                           | 类型                           | 默认值 | 必填 |
| -------- | ------------------------------ | ------------------------------ | ------ | ---- |
| _config_ | hook 配置项，继承 axios 配置项 | `Config<D>&AxiosRequestConfig` | -      | 是   |
|          |                                |                                |        |      |

#### config

| **参数**     | **说明**                           | **类型**                           | **默认值**         | 必填 |
| ------------ | ---------------------------------- | ---------------------------------- | ------------------ | ---- |
| debounce     | 防抖，如果为 true 则使用默认参数。 | `boolean`                          | `DebouenceOptions` | 否   |
| throttle     | 节流，如果为 true 则使用默认参数。 | `boolean`\|`ThrottleOptions`       | false              | 否   |
| manual       | 是否手动触发                       | `boolean`                          | true               | 否   |
| initialData  | 默认的 data。                      | `D`                                | null               | 否   |
| onSuccess    | service resolve 时触发 。          | `(data: AxiosResponse<D>) => void` | -                  | 否   |
| onError      | service reject 时触发。            | `(error: string) => void`          | -                  | 否   |
| loadingDelay | loading 延迟为 true 的时间         | number                             | -                  | 否   |

#### DebouenceOptions

防抖参数，参考[lodash.debounce | Lodash 中文文档 | Lodash 中文网 (lodashjs.com)](https://www.lodashjs.com/docs/lodash.debounce)

| 参数     | 说明                             | 类型    | 默认值 |
| -------- | -------------------------------- | ------- | ------ |
| wait     | 需要延迟的毫秒数                 | number  | 500    |
| leading  | 指定在延迟开始前调用。           | boolean | false  |
| maxWait  | 设置 `func` 允许被延迟的最大值。 | number  |        |
| trailing | 指定在延迟结束后调用。           | boolean | true   |

#### ThrottleOptions

节流参数，参考[lodash.throttle | Lodash 中文文档 | Lodash 中文网 (lodashjs.com)](https://www.lodashjs.com/docs/lodash.throttle)

| 参数     | 说明                   | 类型    | 默认值 |
| -------- | ---------------------- | ------- | ------ |
| wait     | 需要延迟的毫秒数       | number  | 500    |
| leading  | 指定在延迟开始前调用。 | boolean | false  |
| trailing | 指定在延迟结束后调用。 | boolean | true   |
