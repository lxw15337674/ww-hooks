import { BasicTarget } from '@/common/interface';
import { useState } from 'react';
import useEventListener from '../useEventListener';

const useHover = (target: BasicTarget) => {
  const [state, setState] = useState(false);
  useEventListener(target, 'mouseenter', () => {
    setState(true);
  });
  useEventListener(target, 'mouseleave', () => {
    setState(false);
  });

  return state;
};

export default useHover;
