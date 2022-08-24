import { useResizeObserver } from '../..';
import { useState } from 'react';
import { BasicTarget } from '../../common/interface';

export type Size = { width: number; height: number };

function useSize(target: BasicTarget) {
  const [state, setState] = useState<Size>({
    width: 0,
    height: 0,
  });
  useResizeObserver(target, (entry) => {
    setState({
      width: (entry.target as HTMLElement).offsetWidth,
      height: (entry.target as HTMLElement).offsetHeight,
    });
  });
  return state;
}

export default useSize;
