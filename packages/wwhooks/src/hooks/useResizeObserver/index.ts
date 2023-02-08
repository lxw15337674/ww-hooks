import { useEffect } from 'react';
import { getTargetElement } from '../../common/dom';
import { BasicTarget } from '../../common/interface';

export function useResizeObserver(
  target: BasicTarget,
  onResize: (entry: ResizeObserverEntry) => void,
) {
  useEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        onResize(entry);
      });
    });

    resizeObserver.observe(el as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);
}

export default useResizeObserver;
