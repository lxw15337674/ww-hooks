import { useResizeObserver } from '@/';
import { useState } from 'react';

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
