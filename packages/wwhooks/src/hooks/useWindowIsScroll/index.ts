import { useState } from 'react';
import { ScrollState } from '../useElementIsScroll';
import useEventListener from '../useEventListener';

export const useWindowIsScroll = () => {
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
