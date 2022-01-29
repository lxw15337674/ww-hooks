import { MutableRefObject, useEffect, useMemo, useState } from 'react';
import findVisibleIndex from './utils/scroll';
import { Options, UpdateOffset } from './interface';
import getUpdateDistance from './utils/getUpdateDistance';
import useScroll from '../useScroll';
import { dataType } from '../../common/utils';
import useDebounceFn from '../useDebounceFn';
import useSize from '../useSize';

const defaultOverscan = 5;

export default <T = any>(
  originalList: T[],
  { containerRef, itemHeight, overscan = defaultOverscan }: Options,
) => {
  const { height: containerHeight } = useSize(
    containerRef as MutableRefObject<HTMLElement>,
  );
  // TODO: 待优化
  const { top } = useScroll(containerRef);
  const [rowIndex, setRowIndex] = useState({ start: 0, end: 0 });
  const [rowUpdateOffset, setRowUpdateOffset] = useState<UpdateOffset>({
    upOffset: 0,
    downOffset: 0,
  });

  const { run: calculateRowRange } = useDebounceFn(
    () => {
      console.log(top, containerHeight, overscan);
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
    if (top > rowUpdateOffset.downOffset || top < rowUpdateOffset.upOffset) {
      calculateRowRange();
    }
  }, [top]);

  const heightList = useMemo(() => {
    return (originalList ?? []).map((item, index) => {
      if (dataType(itemHeight) === 'number') {
        return itemHeight as number;
      }
      return (itemHeight as (index: number) => number)(index);
    });
  }, [itemHeight, originalList]);

  const rowTopOffsetList = useMemo(() => {
    let total = 0;
    return heightList.map((item) => {
      total += item;
      return total;
    });
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

  console.log('repaint', marginTop);

  return {
    list: list,
    wrapperStyle: {
      marginTop,
      height: totalHeight,
    },
  };
};
