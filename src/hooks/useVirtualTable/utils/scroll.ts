import { Index } from '../interface';
// 二分查找法
function binarySearch(offset: number, list: number[]): number {
  if (isNaN(offset)) {
    offset = 0;
  }
  if (list.length === 0) {
    // console.error('数组为空');
    return 0;
  }
  let startIndex = 0,
    endIndex = list.length - 1,
    midIndex,
    startOffset,
    endOffset;
  while (startIndex <= endIndex) {
    midIndex = Math.floor((startIndex + endIndex) / 2);
    startOffset = list[midIndex - 1] || 0;
    endOffset = list[midIndex];
    //处理索引为0的情况
    if (midIndex === 0 && offset <= list[0]) {
      return 0;
    }
    if (startOffset > offset) {
      endIndex = midIndex - 1;
    } else if (startOffset === offset) {
      return midIndex - 1;
    } else if (startOffset <= offset && offset <= endOffset) {
      return midIndex;
    } else if (endOffset < offset) {
      startIndex = midIndex + 1;
    }
  }
  return list.length;
}

// 获取当前表格的索引值，例如{start:0,end:10}
export default function findVisibleIndex(
  offset: number,
  visibleOffset: number,
  list: number[],
  overscan = 5,
): Index {
  let start = binarySearch(offset, list) - overscan;
  let end = binarySearch(visibleOffset + offset, list) + overscan;
  start = start < 0 ? 0 : start;
  end = end > list.length ? list.length : end;
  return {
    start,
    end,
  };
}
