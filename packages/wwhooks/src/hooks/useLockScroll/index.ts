import { useEffect } from 'react';
import useBoolean from '../useBoolean';

const lockScrollStyle = {
  overflowY: `hidden`,
};
export function useLockScroll(container?: HTMLElement) {
  const [lock, setLock] = useBoolean(false);

  useEffect(() => {
    container = container || document.body;
    const { paddingRight: originalPaddingRight, overflow: originalOverflow } =
      container.style;

    const { width } = container.getBoundingClientRect();

    if (lock) {
      container.style.width = `${width}px`;
      container.style.overflowY = lockScrollStyle.overflowY;
    }

    return () => {
      if (container) {
        container.style.overflow = originalOverflow;
        container.style.width = originalPaddingRight;
      }
    };
  }, [lock, container]);
  return [setLock, lock] as const;
}

export default useLockScroll;
