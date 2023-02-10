import { CSSProperties, MutableRefObject } from 'react';
export declare const useVirtualList: <T = any>(
  originalList: T[],
  containerRef: MutableRefObject<Element>,
  itemHeight: number,
) => {
  readonly list: {
    data: T;
    index: number;
  }[];
  readonly wrapperStyle: CSSProperties;
  readonly scrollTo: (index: number) => void;
};
export default useVirtualList;
