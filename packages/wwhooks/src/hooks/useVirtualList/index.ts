import {
  CSSProperties,
  MutableRefObject,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import useScroll from '../useScroll';
import useSize from '../useSize';
import usePersistFn from '../usePersistFn';

export default <T = any>(
  originalList: T[],
  containerRef: MutableRefObject<Element>,
  itemHeight: number,
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
      top >= Math.max(itemHeight * rowIndex.start - containerHeight, 0) ||
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
  }, [top, containerHeight, originalList]);

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

  const scrollTo = usePersistFn((index: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTop = itemHeight * index;
    }
  });

  return {
    list,
    wrapperStyle: {
      marginTop,
      height: totalHeight,
    } as CSSProperties,
    scrollTo,
  } as const;
};
