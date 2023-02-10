import { MutableRefObject } from 'react';
export declare function useSyncScroll(
  refList: MutableRefObject<HTMLElement>[],
  attribute?: 'left' | 'both' | 'top',
): void;
export default useSyncScroll;
