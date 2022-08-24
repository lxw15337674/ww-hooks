import { MutableRefObject, useEffect, useMemo, useState } from 'react';
import findVisibleIndex from './utils/scroll';
import { Options, UpdateOffset } from './interface';
import getUpdateDistance from './utils/getUpdateDistance';
import useScroll from '../useScroll';
import { dataType } from 'packages/wwhooks/src/common/utils';
import useDebounceFn from '../useDebounceFn';
import useSize from '../useSize';

const overscan = 5;

export default <T = any>(
  originalList: T[][],
  containerRef: any,
  options: Options<T>,
) => {
  const { width, height } = useSize(
    containerRef as MutableRefObject<HTMLElement>,
  );
  const { left, top } = useScroll(containerRef);
  const { rowHeight, colWidth } = options;
  const [rowIndex, setRowIndex] = useState({ start: 0, end: 0 });
  const [colIndex, setColIndex] = useState({ start: 0, end: 0 });
  const [colUpdateOffset, setColUpdateOffset] = useState<UpdateOffset>({
    upOffset: 0,
    downOffset: 0,
  });
  const [rowUpdateOffset, setRowUpdateOffset] = useState<UpdateOffset>({
    upOffset: 0,
    downOffset: 0,
  });
  const { run: calculateRowRange } = useDebounceFn(
    () => {
      const index = findVisibleIndex(
        top,
        height || 0,
        rowTopOffsetList,
        overscan,
      );
      setRowIndex(index);
      setRowUpdateOffset(getUpdateDistance(index, rowHeightList));
    },
    10,
    {
      leading: false,
    },
  );
  const { run: calculateColRange } = useDebounceFn(
    () => {
      const index = findVisibleIndex(
        left,
        width || 0,
        colLeftOffsetList,
        overscan,
      );
      setColIndex(index);
      setColUpdateOffset(getUpdateDistance(index, colWidthList));
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
      top > rowUpdateOffset.downOffset + rowTopOffsetList[end] - height ||
      top < rowTopOffsetList[start] - rowUpdateOffset.upOffset
    ) {
      calculateRowRange();
    }
  }, [top]);
  useEffect(() => {
    const end = colIndex.end > overscan ? colIndex.end - overscan : overscan;
    const start = colIndex.start + overscan;
    if (
      left > colUpdateOffset.downOffset + colLeftOffsetList[end] - width ||
      left < colLeftOffsetList[start] - colUpdateOffset.upOffset
    ) {
      calculateColRange();
    }
  }, [left]);

  if (!rowHeight || !colWidth) {
    console.warn('please enter a valid itemHeight');
  }
  const rowHeightList = useMemo(() => {
    return (originalList ?? []).map((item, index) => {
      if (dataType(rowHeight) === 'number') {
        return rowHeight as number;
      }
      return (rowHeight as (index: number) => number)(index);
    });
  }, [originalList]);
  const colWidthList = useMemo(() => {
    return (originalList[0] ?? []).map((item, index) => {
      if (dataType(colWidth) === 'number') {
        return colWidth as number;
      }
      return (colWidth as (index: number) => number)(index);
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
    return totalList(rowHeightList);
  }, [rowHeightList]);
  const colLeftOffsetList = useMemo(() => {
    return totalList(colWidthList);
  }, [colWidthList]);
  const totalHeight = useMemo(() => {
    return rowHeightList.reduce((sum, item) => sum + item, 0);
  }, [rowHeightList]);
  const totalWidth = useMemo(() => {
    return colWidthList.reduce((sum, item) => sum + item, 0);
  }, [colWidthList]);
  // console.log(rowIndex.start, rowIndex.end, colIndex.start, colIndex.end);
  return {
    list: originalList
      .slice(rowIndex.start, rowIndex.end)
      .map((item) => item.slice(colIndex.start, colIndex.end)),
    wrapperProps: {
      style: {
        width: totalWidth,
        height: totalHeight,
      },
    },
  };
};
