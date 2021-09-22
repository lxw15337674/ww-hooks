import React, { useEffect, useState } from 'react';
import useBoolean from '../useBoolean';

const lockScrollStyle = {
  width: `calc(100% - 17px)`,
  overflowY: `hidden`,
  boxSizing: `border-box`,
};
export function useLockScroll(container?: HTMLElement) {
  const [lock, { toggle }] = useBoolean(false);
  useEffect(() => {
    container = container || document.body;
    const { paddingRight: originalPaddingRight, overflow: originalOverflow } =
      container.style;
    if (lock) {
      container.style.width = lockScrollStyle.width;
      container.style.overflowY = lockScrollStyle.overflowY;
      container.style.boxSizing = lockScrollStyle.boxSizing;
    }

    return () => {
      container.style.overflow = originalOverflow;
      container.style.width = originalPaddingRight;
    };
  }, [lock, container]);
  return [lock, toggle];
}

export default useLockScroll;
