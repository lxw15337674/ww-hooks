---
group:
  title: state
  path: /state
---

# usePromise

1. 特性：

   1. 状态管理
      1. 已处理 setState 的内存泄漏。
      2. loading 防闪烁
   2. 防抖
   3. 节流
   4. 手动自动触发

## demo

### 基本用法

<code src="./Demo/index.tsx"/>

### 加载状态延迟

延迟 loading 变为 true 的时间，防止接口返回过快导致闪烁。

<code src="./Demo/LoadingDelay.tsx"/>

### 防抖

<code src="./Demo/debounce.tsx"/>

### 节流

> 同时配置防抖，节流的情况下，节流优先级低于防抖

<code src="./Demo/throttle.tsx"/>

### Generics

| 参数 | 说明         | 继承    | 默认值    |
| ---- | ------------ | ------- | --------- |
| D    | 返回数据泛型 | -       | `unknown` |
| P    | 参数泛型     | `any[]` | `never`   |

### Result

| 参数      | 说明                                                         | 类型                                                         |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| data      | service 返回的数据，默认为 `undefined`                       | `D`                                                          |
| error     | service 抛出的异常，默认为 `undefined`                       | `string`                                                     |
| params    | 执行的 service 的参数。                                      | `P`                                                          |
| isLoading | request 是否处于请求状态。                                   | `boolean`                                                    |
| isError   | request 是否处于错误状态。                                   | `boolean`                                                    |
| isSuccess | request 是否处于成功状态。                                   | `boolean`                                                    |
| status    | 请求状态，初始为`success`                                    | `loading`                                                    |
| mutate    | 直接修改 data                                                | `React.Dispatch<React.SetStateAction<D>>`                    |
| run       | - 手动触发 service 执行，run 的 axios 参数优先级最高。<br />- debounce 模式与 throttle 模式返回值为 `Promise<null>` | ` (config?: AxiosRequestConfig) => Promise<Error \| AxiosResponse<D>>` |
| cancel    | 取消当前请求                                                 | `() => void`                                                 |
| flush     | 立即调用处于防抖或节流状态的函数                             | `() => Promise<Error                                                   | AxiosResponse<D>>` |

### Params

| **参数**         | **说明**                   | **类型**                           | **默认值** | 必填 |
| ---------------- | -------------------------- | ---------------------------------- | ---------- | ---- |
| service          | 执行的promise              | `(...args: P) => Promise<D>`       | -          | 是   |
| debounceInterval | 防抖                       | `number`                           | -          | 否   |
| throttleInterval | 节流                       | `number`                           | -          | 否   |
| manual           | 是否手动触发               | `boolean`                          | true       | 否   |
| initialData      | 默认的 data。              | `D`                                | null       | 否   |
| onSuccess        | service resolve 时触发 。  | `(data: AxiosResponse<D>) => void` | -          | 否   |
| onError          | service reject 时触发。    | `(error: string) => void`          | -          | 否   |
| loadingDelay     | loading 延迟为 true 的时间 | `number`                           | -          | 否   |

#### 
