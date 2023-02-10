/// <reference types="react" />
import { BasicTarget } from '../../common/interface';
export declare function useMutationObserver(
  target: BasicTarget,
  callback: MutationCallback,
  config?: MutationObserverInit,
): readonly [
  boolean,
  import('react').Dispatch<import('react').SetStateAction<boolean>>,
];
export default useMutationObserver;
