import { getTargetElement } from '../../common/dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { BasicTarget } from '../../common/interface';

function useIntersectionObserver<T extends Element = Element>(
  target: BasicTarget<T>,
  callback: (info: IntersectionObserverEntry) => void,
  config?: IntersectionObserverInit,
) {
  const ref = useRef(
    new IntersectionObserver((entries) => {
      for (const entry of entries) {
        callback(entry);
      }
    }, config),
  );
  const observer = ref.current;
  useLayoutEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }
    observer.observe(el as Element);
    return () => {
      observer.disconnect();
    };
  }, [target]);
}

export default useIntersectionObserver;
