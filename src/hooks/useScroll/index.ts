import { BasicTarget } from '@/utils/dom';
import { useState } from 'react';

export type Target = BasicTarget<HTMLElement | Element | Window | Document>;
interface Position {
  left: number;
  top: number;
}

export default function useScroll(target: Target) {
  const [position, setPosition] = useState<Position>({
    left: 0,
    top: 0,
  });
  useEventListener(
    'scroll',
    ({ target }) => {
      const newPosition = {
        left: (target as HTMLElement).scrollLeft,
        top: (target as HTMLElement).scrollTop,
      };
      setPosition(newPosition);
    },
    { target: target },
  );
  return position;
}
