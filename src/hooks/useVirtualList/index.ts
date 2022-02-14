import { MutableRefObject, useLayoutEffect, useMemo, useState } from 'react';
import findVisibleIndex from './utils/scroll';
import { Options, UpdateOffset } from './interface';
import getUpdateDistance from './utils/getUpdateDistance';
import useScroll from '../useScroll';
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
  const heightList = useMemo(() => {
    return (originalList ?? []).map((item, index) => {
      if (typeof itemHeight === 'number') {
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
  const marginTop = useMemo(() => {
    return rowTopOffsetList[rowIndex.start];
  }, [rowTopOffsetList, rowIndex.start]);

  const calculateRowRange = usePersistFn(() => {
    if (
      top > Math.max(rowUpdateOffset.downOffset - containerHeight, 0) ||
      top <= rowUpdateOffset.upOffset
    ) {
      const index = findVisibleIndex(
        top,
        containerHeight,
        rowTopOffsetList,
        overscan,
      );
      setRowIndex(index);
      setRowUpdateOffset(getUpdateDistance(index, rowTopOffsetList));
    }
  });

  useLayoutEffect(() => {
    calculateRowRange();
  }, [top, containerHeight]);

  const list = useMemo(() => {
    return originalList
      .slice(rowIndex.start, rowIndex.end)
      .map((ele, index) => ({
        data: ele,
        index: index + rowIndex.start,
      }));
  }, [originalList, rowIndex]);

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
