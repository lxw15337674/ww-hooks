---
group:
  title: request
  path: /request
---

# useAxios

特性：

1. 状态管理
   1. 已处理 setState 的内存泄漏。
   2. loading 防闪烁
2. 初始数据。
3. 暴露 axios 实例的拦截器和 default 设置

   > 可以对 hook 进行再一层的封装，例如实现统一的错误处理，统一的数据格式化。

## demo

### 基本用法

<code src="./Demo/index.tsx"/>

### 加载状态延迟

延迟 loading 变为 true 的时间，防止接口返回过快导致闪烁。

<code src="./Demo/LoadingDelay.tsx"/>

### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| D    | 返回数据泛型 | any    |

### Result

| 参数      | 说明                                                                                                      | 类型                                                                |
| --------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| data      | request 返回的数据，默认为 `undefined`。如果有 `formatResult`, 则该数据为被格式化后的数据。               | `D`                                                                 |
| error     | request 抛出的异常，默认为 `undefined`                                                                    | `string`                                                            |
| isLoading | request 是否处于请求状态。                                                                                | `boolean`                                                           |
| isError   | request 是否处于错误状态。                                                                                | `boolean`                                                           |
| isSuccess | request 是否处于成功状态。                                                                                | `loading`                                                           |
| status    | 请求状态，初始为'success'                                                                                 | `loading`                                                           |
| run       | 手动触发 service 执行，如果 options 存在 debounce，则 run 会返回空 Promise。run 的 axios 参数优先级最高。 | `(config?: AxiosRequestConfig) => Promise<Error\|AxiosResponse<D>>` |
| mutate    | 直接修改 data                                                                                             | `React.Dispatch<React.SetStateAction<D>>`                           |
| cancel    | 利用 axios 的 CancelToken 取消请求                                                                        | `()=>void`                                                          |

### Params

| 参数          | 说明         | 类型                 | 默认值 | 必填 |
| ------------- | ------------ | -------------------- | ------ | ---- |
| _config_      | hook 配置项  | `Config<D>`          | -      | 否   |
| _axiosConfig_ | axios 配置项 | `AxiosRequestConfig` | -      | 否   |
|               |              |                      |        |      |

### config

| 参数         | 说明                       | 类型                               | 默认值 | 必填 |
| ------------ | -------------------------- | ---------------------------------- | ------ | ---- |
| initialData  | 默认的 data。              | `D`                                | null   | 否   |
| onSuccess    | service resolve 时触发 。  | `(data: AxiosResponse<D>) => void` | -      | 否   |
| onError      | service reject 时触发。    | `(error: string) => void`          | -      | 否   |
| loadingDelay | loading 延迟为 true 的时间 | number                             | 300    | 否   |
