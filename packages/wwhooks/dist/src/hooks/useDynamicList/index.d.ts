import { CSSProperties } from 'react';
import { Options } from './interface';
interface PoolItem<T> {
  data: T;
  id: number;
  style: CSSProperties;
  index: number;
}
export declare const useDynamicList: <T = any>(
  originalList: T[],
  { containerRef, itemHeight, overscan }: Options<T>,
) => {
  list: PoolItem<T>[];
  wrapperStyle: {
    marginTop: number;
    height: number;
  };
  scrollTo: (index: number) => void;
};
export default useDynamicList;
