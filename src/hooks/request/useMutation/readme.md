---
group:
  title: request
  path: /request
---

# useMutation

基于 useRequest，用来处理修改接口的 hook。

请求接口特点：

- 请求时机：
  - 参数变化
- 请求方法一般为 post。
- 重视请求参数。
-

| 需求                     | 对应特性                         |
| ------------------------ | -------------------------------- |
| 请求时机：参数变化       | 参数变化则发起请求               |
| 请求方法一般为 post      | 请求方法默认为`post`             |
| 请求参数一般在 body 上。 | 参数会在 body 上                 |
| 重视请求参数             | 参数泛型没有默认值，必须手动声明 |
|                          |                                  |

## demo

### 基本用法

<code src="./Demo/Base.tsx"/>

### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| P    | 请求参数泛型 | -      |
| D    | 数据泛型     | any    |
|      |              |        |

### Result

| 参数        | 说明                                                                                                                                            | 类型                                        |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- |
| data        | service 返回的数据，默认为 `undefined`。如果有 `formatResult`, 则该数据为被格式化后的数据。                                                     | `D`                                         |
| error       | service 抛出的异常，默认为 `undefined`                                                                                                          | `string`                                    |
| isError     | request 是否处于错误状态。                                                                                                                      | `boolean`                                   |
| isSuccess   | request 是否处于成功状态。                                                                                                                      | `boolean`                                   |
| status      | 请求状态，初始为'success'                                                                                                                       | `loading`                                   |
| mutate      | 直接修改 data                                                                                                                                   | `React.Dispatch<React.SetStateAction<D>>`   |
| run         | - 手动触发 service 执行，run 的 axios 参数优先级最高，会与 params 参数进行浅合并。<br />- debounce 模式与 throttle 模式返回值为 `Promise<null>` | ` () => Promise<Error \| AxiosResponse<D>>` |
| cancel      | 取消当前请求                                                                                                                                    | `() => void`                                |
| flush       | 立即调用处于防抖或节流状态的函数                                                                                                                | `() => Promise<Error\| AxiosResponse<D>>`   |
| params      | service 的请求参数                                                                                                                              | `P`                                         |
| setParams   | 修改请求参数                                                                                                                                    | `React.Dispatch<React.SetStateAction<P>>`   |
| nterceptors | axios 拦截器,[详细用法](https://github.com/axios/axios#interceptors)                                                                            | -                                           |

#### config

继承 useRequestConfig，额外参数如下：

| **参数**      | **说明**        | **类型** | **默认值** | 必填  |
| :------------ | --------------- | -------- | ---------- | ----- |
| defaultParams | params 的默认值 | `P`      | null       | false |
|               |                 |          |            |       |
|               |                 |          |            |       |
|               |                 |          |            |       |
