import { useLayoutEffect, useState, CSSProperties } from 'react';
import useVirtualList from '../useVirtualList';
import { Options } from '../useVirtualList/interface';

interface PoolItem<T> {
  data: T;
  id: number;
  style: CSSProperties;
  index: number;
}

export default <T = any>(originalList: T[], options: Options<T>) => {
  type Item = PoolItem<T>;
  const { list, wrapperStyle } = useVirtualList<T>(originalList, options);
  const [pool, setPool] = useState<Item[]>([]);
  useLayoutEffect(() => {
    const length = pool?.length ?? 0 - list?.length;
    const views: Item[] = list.map((item, index) => ({
      data: item.data,
      index: item.index,
      id: index,
      style: {},
    }));
    let unusedViews: Item[] = [];
    if (length > 0) {
      unusedViews = pool.slice(list.length, pool.length).map((item, index) => {
        return {
          data: item.data,
          id: index + list.length,
          index: -1,
          style: {
            transform: `translateY(-99999px)`,
          },
        };
      });
    }
    setPool([...views, ...unusedViews]);
  }, [list]);
  return { list: pool, wrapperStyle };
};
