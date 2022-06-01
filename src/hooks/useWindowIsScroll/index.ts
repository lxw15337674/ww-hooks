import { useState } from 'react';
import useEventListener from '../useEventListener';

export interface ScrollState {
  x: boolean;
  y: boolean;
}
const useWindowIsScroll = () => {
  const [state, setState] = useState<ScrollState>({
    x: false,
    y: false,
  });
  useEventListener(window, 'resize', () => {
    setState({
      x: document.body.scrollHeight > window.innerHeight,
      y: document.body.scrollWidth > window.innerWidth,
    });
  });
  return state;
};
export default useWindowIsScroll;
