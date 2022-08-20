---
group:
  title: request
  path: /request
---

# useQuery

基于 useAxios，用来处理请求数据接口的 hook。

请求接口特点：

1. 请求时机：
   1. 初始化请求
   2. 参数变化
2. 请求方法一般为 get。
3. 请求参数一般在 url 上。
4. 重视返回数据。
   1. 可能会对返回数据进行操作：
      1. 对返回数据的预处理。
      2. 修改返回数据。
   2. 返回数据可能会在不同层级组件中使用。
5. 一些不常见的需求
   1. 并发数据问题
   2. 轮询请求
   3. 依赖请求

特性：

- [x] 请求
  - [x] 依赖请求
  - [x] 轮询
  - [x] 解决并发数据问题。
  - [ ] ~~并发请求~~
  - [ ] ~~预加载~~
  - [x] 重复请求处理
- [x] 参数
  - [x] 默认参数
  - [ ] ~~分页参数~~
  - [x] 参数记录
- [ ] 数据
  - [ ] 数据的全局使用
  - [ ] 缓存数据
  - [ ] 支持 SSR

## demo

### 基本用法

<code src="./Demo/ParamsRequest.tsx"/>

### 依赖请求

<code src="./Demo/Deps.tsx"/>

### 轮询

<code src="./Demo/PollginInterval.tsx"/>

### 并发请求

<code src="./Demo/Concurrent.tsx"/>

### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| P    | 请求参数泛型 | any    |
| D    | 数据泛型     | any    |
|      |              |        |

### Result

| 参数      | 说明                                                         | 类型                                                         |
| --------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| data      | service 返回的数据，默认为 `undefined`。如果有 `transformResponse`, 则该数据为被格式化后的数据。 | `D`                                                          |
| error     | service 抛出的异常，默认为 `undefined`                       | `string`                                                     |
| isError   | request 是否处于错误状态。                                   | `boolean`                                                    |
| isSuccess | request 是否处于成功状态。                                   | `boolean`                                                    |
| status    | 请求状态，初始为'success'                                    | `loading`                                                    |
| mutate    | 直接修改 data                                                | `React.Dispatch<React.SetStateAction<D>>`                    |
| run       | - 手动触发 service 执行，run 的 axios 参数优先级最高，会与 params 参数进行浅合并。<br />- debounce 模式与 throttle 模式返回值为 `Promise<null>` | ` (value?: React.SetStateAction<P>) => Promise<Error \|AxiosResponse<D>>` |
| cancel    | 取消当前请求                                                 | `() => void`                                                 |
| flush     | 立即调用处于防抖或节流状态的函数                             | `() => Promise<Error\| AxiosResponse<D>>`                    |
| params    | service 的请求参数，放在 url 上                              | `P`                                                          |

#### config

继承 useAxiosConfig，额外参数如下：

| **参数**        | **说明**                                                     | **类型**  | **默认值** | 必填  |
| :-------------- | ------------------------------------------------------------ | --------- | ---------- | ----- |
| deps            | `deps` 变化，会触发 `run`执行                                | `any[]`   | []         | false |
| pollingInterval | 轮询间隔，单位为毫秒。设置后，会定时触发 `run`。             | `number`  | -          | false |
| concurrent      | 是否允许并发请求，开启后新的请求会取消请求中的请求（利用 request 的 cancelToken），解决[竞态问题](https://juejin.cn/post/7127953386514677790#heading-7)。 | `boolean` | false      | false |
| params          | params 的默认值                                              | `P`       | null       | false |
