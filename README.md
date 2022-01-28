# wwhooks

[文档](https://lxw15337674.github.io/ww-hooks/)

# todo

- [x] useReactive
- [ ] usestorage
- [ ] useIndexedDB
- [x] ~~useDialog~~
- [ ] 单例模式的 useUrlstate
- [ ] useHover
- [ ] useScroll，封装对应的移动方法
- [ ] useisScroll，判断处于滚动状态
- [ ] useObject，增加与原始数据比较出差异的对象

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
