---
group:
  order: 0 
---

# 更新内容

# Todo

- [ ] 使用useIntersection 优化虚拟滚动的hook

## 待更新

#### Feature

- 增加useMutationObserver
- 文档重新梳理hook分类
- useInterval改为useIntervalFn

#### Fixed

- 修复debounce、throttle引用问题
- useIsScroll，如果内部dom变化，不会正确判断是否处于滚动装填


# 更新日志

## [1.0.22] 2022/02/17

#### Feature

- 增加useReactive、useSyncScroll、useVirtualList、usePrevious、useDynamicList、useIntervalFn
- 内部代码优化，用usePersistFn代替useCallback

#### Fixed

- 修复部分示例代码

## [1.0.21] 2022-01-21

#### Feature

- 增加usePersistFn

#### Fixed

- 修复debounce、throttle引用问题

## [1.0.20] - 2022-01-10

#### Feature

- `useArray`
  - 默认值增加函数类型
  - 增加`reorder`
- 重构`setDefaultArguments`

#### Added

- 代码增加eslint代码规范，并根据规范优化代码。
- 去除lodash，减少包大小
- 增加新的utils
  - `colSpan`

## [1.0.19] - 2021-12-17

#### Added

- 增加一些新的 hook
  - `useIntersectionObserver`

## [1.0.18-fix1] - 2021-12-13

#### Fixed

- 修复usePromise的空参数bug。

## [1.0.18] - 2021-12-10

#### Added

- 增加一些新的 hook
  - `useEventListener`
  - `useScroll`
  - `useIsScroll`
  - `useResizeObserver`
  <<<<<<< HEAD

=======
>>>>>>> origin/master