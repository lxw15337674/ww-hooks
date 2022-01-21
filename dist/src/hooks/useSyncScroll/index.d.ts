/// <reference types="react" />
export declare type Attribute = 'left' | 'both' | 'top';
declare function useSyncScroll(
  refList: React.MutableRefObject<HTMLElement>[],
  attribute?: Attribute,
): void;
export default useSyncScroll;
