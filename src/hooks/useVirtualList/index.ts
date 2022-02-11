import {
  MutableRefObject,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import findVisibleIndex from './utils/scroll';
import { Options, UpdateOffset } from './interface';
import getUpdateDistance from './utils/getUpdateDistance';
import useScroll from '../useScroll';
import { dataType } from '../../common/utils';
import useSize from '../useSize';
import usePersistFn from '../usePersistFn';

const defaultOverscan = 5;

export default <T = any>(
  originalList: T[],
  { containerRef, itemHeight, overscan = defaultOverscan }: Options<T>,
) => {
  const { height: containerHeight } = useSize(
    containerRef as MutableRefObject<HTMLElement>,
  );
  const { top } = useScroll(containerRef);
  const [rowIndex, setRowIndex] = useState({ start: 0, end: 0 });
  const [rowUpdateOffset, setRowUpdateOffset] = useState<UpdateOffset>({
    upOffset: 0,
    downOffset: 0,
  });

  const calculateRowRange = usePersistFn(() => {
    if (
      top > rowUpdateOffset.downOffset ||
      top < rowUpdateOffset.upOffset ||
      top === 0 ||
      containerHeight !== undefined
    ) {
      console.log('repeat', top, rowUpdateOffset);
      // 待优化
      const index = findVisibleIndex(
        top,
        containerHeight,
        rowTopOffsetList,
        overscan,
      );
      setRowIndex(index);
      setRowUpdateOffset(getUpdateDistance(index, heightList));
    }
  });

  useLayoutEffect(() => {
    calculateRowRange();
  }, [top, containerHeight]);

  const heightList = useMemo(() => {
    return (originalList ?? []).map((item, index) => {
      if (dataType(itemHeight) === 'number') {
        return itemHeight as number;
      }
      return (itemHeight as (item: T, index: number) => number)(item, index);
    });
  }, [itemHeight, originalList]);

  const rowTopOffsetList = useMemo(() => {
    return heightList.reduce(
      (pre, cur) => {
        pre.push(pre[pre.length - 1] + cur);
        return pre;
      },
      [0],
    );
  }, [heightList]);

  const list = useMemo(() => {
    return originalList.slice(rowIndex.start, rowIndex.end);
  }, [originalList, rowIndex]);

  const marginTop = useMemo(() => {
    return rowTopOffsetList[rowIndex.start];
  }, [rowTopOffsetList, rowIndex.start]);

  const totalHeight = useMemo(() => {
    return heightList.reduce((sum, item) => sum + item, 0) - marginTop;
  }, [heightList, marginTop]);

  return {
    list,
    wrapperStyle: {
      marginTop,
      height: totalHeight,
    },
  };
};
