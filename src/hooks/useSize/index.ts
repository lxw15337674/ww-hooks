import { BasicTarget, getTargetElement } from '@/utils/dom';
import { useLayoutEffect, useState } from 'react';

export type Size = { width: number; height: number };

function useSize(target: BasicTarget) {
  const [state, setState] = useState<Size>({
    width: null,
    height: null,
  });
  useLayoutEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setState({
          width: entry.target.clientWidth,
          height: entry.target.clientHeight,
        });
      });
    });

    resizeObserver.observe(el as HTMLElement);
    return () => {
      resizeObserver.disconnect();
    };
  }, [target]);

  return { size: state } as const;
}

export default useSize;
