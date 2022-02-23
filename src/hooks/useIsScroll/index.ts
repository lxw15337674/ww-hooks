import { useState } from 'react';
import useMutationObserver from '../useMutationObserver';

export interface ScrollState {
  x: boolean;
  y: boolean;
}
const useIsScroll = (target) => {
  const [state, setState] = useState<ScrollState>({
    x: false,
    y: false,
  });
  useMutationObserver(target, () => {
    if (!target.current) {
      return;
    }
    setState({
      x: target.current.scrollWidth !== target.current.clientWidth,
      y: target.current.scrollHeight !== target.current.clientHeight,
    });
  });
  return state;
};
export default useIsScroll;
