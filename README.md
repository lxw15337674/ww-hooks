# wwhooks

# todo

1. useClass
2. useReactive
3. usestorage
4. useIndexedDB
5. useDialog

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
