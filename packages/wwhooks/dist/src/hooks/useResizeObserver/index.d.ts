import { BasicTarget } from '../../common/interface';
export declare function useResizeObserver(
  target: BasicTarget,
  onResize: (entry: ResizeObserverEntry) => void,
): void;
export default useResizeObserver;
