import { useEventListener, useMount } from '../../';
import { useRef, useState } from 'react';
import { BasicTarget } from '../../common/interface';

export const useFps = (every=10) => {
  const [fps, setFps] = useState(0)
  const last = useRef(performance.now());
  const ticks = useRef(0);
  const update = () => {
    ticks.current++;
    if (ticks.current > every) {
      const now = performance.now();
      setFps(Math.round(1000 / (now - last.current) * ticks.current));
      last.current = now;
      ticks.current = 0;
    }
    requestAnimationFrame(update);
  }
  useMount(() => {
    requestAnimationFrame(update);
  })
  return fps
};

export default useFps;
