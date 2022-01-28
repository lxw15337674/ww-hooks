import { MutableRefObject, useEffect, useMemo, useState } from 'react';
import findVisibleIndex from './utils/scroll';
import { Options, UpdateOffset } from './interface';
import getUpdateDistance from './utils/getUpdateDistance';
import useScroll from '../useScroll';
import { dataType } from '@/common/utils';
import useDebounceFn from '../useDebounceFn';
import useSize from '../useSize';

const defaultOverscan = 5;

export default <T = any>(
  originalList: T[],
  { containerRef, height, wrapperRef, overscan = defaultOverscan }: Options,
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

  const { run: calculateRowRange } = useDebounceFn(
    () => {
      const index = findVisibleIndex(
        top,
        containerHeight || 0,
        rowTopOffsetList,
        overscan,
      );
      setRowIndex(index);
      setRowUpdateOffset(getUpdateDistance(index, heightList));
    },
    10,
    {
      leading: false,
    },
  );

  useEffect((): void => {
    const end = rowIndex.end > overscan ? rowIndex.end - overscan : overscan;
    const start = rowIndex.start + overscan;
    if (
      top > rowUpdateOffset.downOffset + rowTopOffsetList[end] ||
      top < rowTopOffsetList[start] - rowUpdateOffset.upOffset
    ) {
      calculateRowRange();
    }
  }, [top]);

  const heightList = useMemo(() => {
    return (originalList ?? []).map((item, index) => {
      if (dataType(height) === 'number') {
        return height as number;
      }
      return (height as (index: number) => number)(index);
    });
  }, [originalList]);

  const totalList = (numList: number[]) => {
    let total = 0;
    return numList.map((item) => {
      total += item;
      return total;
    });
  };

  const rowTopOffsetList = useMemo(() => {
    return totalList(heightList);
  }, [heightList]);

  const totalHeight = useMemo(() => {
    return heightList.reduce((sum, item) => sum + item, 0);
  }, [heightList]);

  const list = useMemo(() => {
    return originalList.slice(rowIndex.start, rowIndex.end);
  }, [originalList, rowIndex]);

  return {
    list: list,
    wrapperStyle: {
      marginTop: top,
      height: totalHeight,
    },
  };
};
