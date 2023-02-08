import { getTargetElement } from '../../common/dom';
import { useEffect } from 'react';
import { BasicTarget } from '../../common/interface';

export function useIntersectionObserver<T extends Element = Element>(
  target: BasicTarget<T>,
  callback: (info: IntersectionObserverEntry) => void,
  config?: IntersectionObserverInit,
) {
  useEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        callback(entry);
      }
    }, config);
    observer.observe(el as Element);
    return () => {
      observer.disconnect();
    };
  }, [target]);
}

export default useIntersectionObserver;
