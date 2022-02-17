import { Index, UpdateOffset } from '../interface';

export default ({ start, end }: Index, offsetList: number[]): UpdateOffset => {
  let upOffset = 0;
  let downOffset = 0;
  if (start - 1 > 0) {
    upOffset = offsetList[start - 1];
  }
  if (end + 1 < offsetList.length) {
    downOffset = offsetList[end];
  } else {
    downOffset = offsetList[offsetList.length - 1];
  }
  return { upOffset, downOffset };
};
