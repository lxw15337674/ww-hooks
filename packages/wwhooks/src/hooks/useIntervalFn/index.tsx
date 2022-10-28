import { useRef, useState } from 'react';
import usePersistFn from '../usePersistFn';
import useUnmount from '../useUnmount';

export function useIntervalFn(fn: () => void, delay: number) {
  const timerId = useRef<any>(null);
  const [looping, setLooping] = useState(false);
  const callback = usePersistFn(() => {
    fn();
    timerId.current = setTimeout(callback, delay);
  });
  const clear = usePersistFn(() => {
    clearTimeout(timerId.current);
    setLooping(false);
  });

  const start = usePersistFn(() => {
    if (looping) {
      return;
    }
    setTimeout(callback, delay);
    setLooping(true);
  });
  useUnmount(() => {
    clear();
  });

  return {
    start,
    clear,
    looping,
  };
}

export default useIntervalFn;
