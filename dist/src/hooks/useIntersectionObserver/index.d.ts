import { BasicTarget } from '../../common/interface';
declare function useIntersectionObserver<T extends Element = Element>(
  target: BasicTarget<T>,
  callback: (info: IntersectionObserverEntry) => void,
  config?: IntersectionObserverInit,
): void;
export default useIntersectionObserver;
