import { useResizeObserver } from '@/';
import React, { useLayoutEffect, useState } from 'react';
import { getTargetElement } from '../../common/dom';
import useSize from '../useSize';

export interface ScrollState {
  x: boolean;
  y: boolean;
}
const useIsScroll = (target) => {
  const [state, setState] = useState<ScrollState>({
    x: false,
    y: false,
  });
  useResizeObserver(target, (entry) => {
    const target = entry.target as HTMLElement;
    setState({
      x: target.scrollWidth !== target.clientWidth,
      y: target.scrollHeight !== target.clientHeight,
    });
  });
  return state;
};
export default useIsScroll;
