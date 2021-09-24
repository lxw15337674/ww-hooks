---
group:
  title: request
  path: /request
---
# useRequest

用于管理异步数据请求的 Hook.

如果出错，都会返回默认数据。

### 特性：

1. 默认值设置
2. 防抖
3. 轮询
4. 拦截器

### todo：

1. useFileUpload
2. 

## demo

<code src="./Demo/Demo1.tsx"/>

### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| P    | 请求参数泛型 | void   |
| D    | 返回数据泛型 | any    |
| R    | 返回数据泛型 | void   |



### Result<P,D>

| 参数    | 说明                                                         | 类型                                               | 默认值 |
| ------- | ------------------------------------------------------------ | -------------------------------------------------- | ------ |
| data    | service 返回的数据，默认为 `undefined`。如果有 `formatResult`, 则该数据为被格式化后的数据。 | `D`                                                |        |
| error   | service 抛出的异常，默认为 `undefined`                       | `string`                                           |        |
| loading | service 是否正在执行                                         | `boolean`                                          |        |
| run     | 手动触发 service 执行，如果 options 存在 debounce，则 run  会返回空 Promise。 | `(params: P) => Promise<D | void>`                 |        |
| mutate  | 直接修改 data                                                | `(newData) => void / ((oldData)=>newData) => void` |        |
|         |                                                              |                                                    |        |

### Params

所有的 Options 均是可选的。

| 参数           | 说明                                                         | 类型                                     | 默认值     |
| -------------- | ------------------------------------------------------------ | ---------------------------------------- | ---------- |
| manual         | 默认 `false`。 即在初始化时自动执行 service。如果设置为 `true`，则需要手动调用 `run` 触发执行。 | `boolean`                                | false      |
| transformParams | 将传递的参数进行转换 | (*data*: P) => any | - |
| initialData    | 默认的 data                                                  | `D`                                      | null       |
| onSuccess      | service resolve 时触发，参数为 `data` 和 `params`            | `(data: any, params: any[]) => void`     | -          |
| defaultParams | 默认参数，会与 |  |  |
| onError        | service 报错时触发，参数为 `error` 和 `params`。             | `(error: string, params: any[]) => void` | -          |
| concurrentData | 解决并发数据问题，在切换分类时，若之前切换的分类内容较多，加载时间长，在加载过程中切换类目，那么当前类目显示的内容其实是上一个类目的内容。 | boolean                                  | false      |
| successMessage | service resolve时toast提示信息,false则不显示提示。           | string \| false                          | false      |
| errorMessage   | service reject时toast提示信息,false则不显示提示。            | string \| false                          | '操作失败' |
| debounce       | 防抖，如果为true则使用默认参数。                             | `boolean`|`DebouenceOptions`             |
| transformData   | 对responseData进行数据转换 | (*data*: any) => D |- |





## DebouenceOptions

防抖参数，参考[lodash.debounce](https://www.lodashjs.com/docs/lodash.debounce)

| 参数     | 说明                             | 类型    | 默认值 |
| -------- | -------------------------------- | ------- | ------ |
| wait     | 需要延迟的毫秒数                 | number  | 500    |
| leading  | 指定在延迟开始前调用。           | boolean | false  |
| maxWait  | 设置 `func` 允许被延迟的最大值。 | number  |        |
| trailing | 指定在延迟结束后调用。           | boolean | true   |

