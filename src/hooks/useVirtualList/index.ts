import { MutableRefObject, useLayoutEffect, useMemo, useState } from 'react';
import { Options } from './interface';
import useScroll from '../useScroll';
import useSize from '../useSize';
import usePersistFn from '../usePersistFn';

export default <T = any>(
  originalList: T[],
  { containerRef, itemHeight }: Options,
) => {
  const { height: containerHeight } = useSize(
    containerRef as MutableRefObject<HTMLElement>,
  );
  const { top } = useScroll(containerRef);
  const [rowIndex, setRowIndex] = useState({ start: 0, end: 0 });
  const marginTop = useMemo(() => {
    return itemHeight * rowIndex.start;
  }, [itemHeight, rowIndex.start]);

  const calculateRowRange = usePersistFn(() => {
    if (
      top > Math.max(itemHeight * rowIndex.start - containerHeight, 0) ||
      top <= rowIndex.end * itemHeight
    ) {
      const start = Math.max(0, Math.floor(top / itemHeight));
      const end = Math.min(
        originalList.length,
        start + Math.ceil(containerHeight / itemHeight),
      );
      setRowIndex({
        start,
        end,
      });
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
  }, [originalList, rowIndex.end, rowIndex.start]);

  const totalHeight = useMemo(() => {
    return itemHeight * originalList.length - marginTop;
  }, [itemHeight, marginTop, originalList.length]);

  return {
    list,
    wrapperStyle: {
      marginTop,
      height: totalHeight,
    },
  };
};
