---
group:
  title: request
  path: /request
---
# useAxios

封装axios的hooks。

### 特性：

1. 拦截器

## demo

### 基本请求

<code src="./Demo/Demo1.tsx"/>


### Generics

| 参数 | 说明         | 默认值 |
| ---- | ------------ | ------ |
| D    | 返回数据泛型 | any    |
|      |              |        |

### Result<P,D>

| 参数 | 说明                    | 类型                        |
| ---- | ----------------------- | --------------------------- |
| run  | 手动触发 service 执行。 | `(params: P) => Promise<D>` |


### Params

| 参数           | 说明                                                         | 类型                                     | 默认值     | 必填   |
| -------------- | ------------------------------------------------------------ | ---------------------------------------- | ---------- | ---------- |
| *axiosConfig* | axios配置项 | `AxiosRequestConfig` | -      | 否     |
| interceptors  | 拦截器      | `Interceptors`       | -      | 否     |
|               |             |                      |        |        |
|               |             |                      |        |        |

### Interceptors

| *axiosConfig* | axios配置项                             | 类型                                                         | 默认值 |
| ------------- | --------------------------------------- | ------------------------------------------------------------ | ------ |
| request       | 请求拦截器                              | `(axiosConfig: AxiosRequestConfig) => AxiosRequestConfig`    | -      |
| response      | 响应拦截器,P为返回数据，D为处理后的数据 | `<P = any, D = P> { (data: AxiosResponse<P>, err: Error): [AxiosResponse<D>, Error];}` | -      |

