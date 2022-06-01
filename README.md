# wwhooks

[文档](https://lxw15337674.github.io/ww-hooks/)

当前版本:1.1.0

# todo

- [ ] useIndexedDB
- [x] 单例模式的 useUrlstate
- [ ] useHover
- [ ] useComputed，原理vue的计算属性，需要配合useReactive使用
- [ ] useStore，基于useComputed 的状态管理
  - [ ] 支持存到sessionStorage




## list

useRequest

根据不同封装程度的 hooks

- useAxios
  
  最基本的 hook，封装 axios，内置状态管理
- useRequest
  
  基于 useAxios，封装共用特性：防抖、节流
- useQuery
  
  基于 useRequest，增加针对查询请求的特性

## Getting Started

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```
