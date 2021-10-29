---
group:
  title: request
  path: /request
---

# useQuery

特性：

- [ ] 请求
  - [x] 依赖请求
  - [x] 轮询
  - [x] 解决并发数据问题。
  - [ ] ~~并发请求~~
  - [ ] ~~预加载~~
  - [x] 是否允许并发请求
  - [ ] 重复请求处理
  - [ ] 加载状态延迟
- [ ] 数据
  - [ ] 数据的全局使用
  - [ ] 缓存数据
  - [ ] 解决并发数据问题
  - [ ] 支持 SSR
- [ ] 参数
  - [ ] 默认参数
  - [ ] 分页参数
  - [ ] 参数记录

## demo

### 依赖请求

<code src="./Demo/Deps.tsx"/>

### 轮询

<code src="./Demo/PollginInterval.tsx"/>

### 并发请求

解决并发数据问题。

> 例如在请求分页数据时，第一页的数据较多请求时间长，第二页数据较少请求时间短。先请求第一页数据，再请求第二页。
>
> 由于第二页的数据会先返回数据，而第一页的数据后返回，导致此时在第二页却显示第一页的数据。

<code src="./Demo/Concurrent.tsx"/>

###

### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| P    | 请求参数类型 | any    |
| D    | 返回数据泛型 | any    |

### Result

| 参数    | 说明                                                                                                                | 类型                                             |
| ------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------------------ |
| data    | service 返回的数据，默认为 `undefined`。如果有 `formatResult`, 则该数据为被格式化后的数据。                         | `D`                                              |
| error   | service 抛出的异常，默认为 `undefined`                                                                              | `string`                                         |
| loading | service 是否正在执行                                                                                                | `boolean`                                        |
| mutate  | 直接修改 data                                                                                                       | `React.Dispatch<React.SetStateAction<D>>`        |
| run     | - 手动触发 service 执行，run 的 axios 参数优先级最高。<br />- debounce 模式与 throttle 模式返回值为 `Promise<null>` | ` (config?: AxiosRequestConfig) => Promise<Error | AxiosResponse<D>>` |
| cancel  | 取消当前请求                                                                                                        | `() => void`                                     |
| flush   | 立即调用处于防抖或节流状态的函数                                                                                    | `() => Promise<Error                             | AxiosResponse<D>>` |
|         |                                                                                                                     |                                                  |

#### config

继承 useRequestConfig，额外参数如下：

| **参数**        | **说明**                                         | **类型**  | **默认值** | 必填  |
| :-------------- | ------------------------------------------------ | --------- | ---------- | ----- |
| deps            | `deps` 变化，会触发 `run`执行                    | `any[]`   | []         | false |
| pollingInterval | 轮询间隔，单位为毫秒。设置后，会定时触发 `run`。 | `number`  | -          | false |
| concurrent      | 是否允许并发请求。                               | `boolean` | false      | false |
|                 |                                                  |           |            |       |
|                 |                                                  |           |            |       |
|                 |                                                  |           |            |       |
|                 |                                                  |           |            |       |
