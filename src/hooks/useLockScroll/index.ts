import { numToPx, pxToNum } from '@/common/utils';
import React, { useEffect, useState } from 'react';
import useBoolean from '../useBoolean';

const lockScrollStyle = {
  // width: `calc(100% - 17px)`,
  overflowY: `hidden`,
  boxSizing: `border-box`,
};
export function useLockScroll(container?: HTMLElement) {
  const [lock, { toggle }] = useBoolean(false);

  useEffect(() => {
    container = container || document.body;
    const {
      paddingRight: originalPaddingRight,
      overflow: originalOverflow,
      boxSizing: originalBoxSizing,
    } = container.style;

    const { width } = container.getBoundingClientRect();

    if (lock) {
      container.style.width = `${width}px`;
      container.style.overflowY = lockScrollStyle.overflowY;
      container.style.boxSizing = lockScrollStyle.boxSizing;
    }

    return () => {
      container.style.overflow = originalOverflow;
      container.style.width = originalPaddingRight;
      container.style.boxSizing = originalBoxSizing;
    };
  }, [lock, container]);
  return [lock, toggle];
}

export default useLockScroll;
