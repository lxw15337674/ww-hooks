import { useState } from 'react';
import { BasicTarget } from '../../common/interface';
import useEventListener from '../useEventListener';

interface Position {
  left: number;
  top: number;
}

export default function useScroll(target: BasicTarget) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    top: 0,
  });

  useEventListener(target, 'scroll', (e) => {
    let target = e.target as HTMLElement;
    const newPosition = {
      left: target.scrollLeft,
      top: target.scrollTop,
    };
    setPosition(newPosition);
  });
  return position;
}
