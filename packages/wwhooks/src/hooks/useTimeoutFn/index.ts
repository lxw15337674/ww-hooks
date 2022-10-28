import { usePersistFn } from '../..';
import { useEffect, useRef, useState } from 'react';

export function useTimeoutFn<T extends any[] = never>(
  fn: (...args: T) => void,
  delay: number = 0,
) {
  const timer = useRef(null);
  const [waiting, setWaiting] = useState<boolean>(false);
  const run = usePersistFn((...args: T) => {
    clearTimeout(timer.current);
    if (delay === undefined || delay === null) return;
    setWaiting(true);
    timer.current = setTimeout(() => {
      fn(...args);
      setWaiting(false);
    }, delay);
  });

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const cancel = usePersistFn(() => {
    clearTimeout(timer.current);
    setWaiting(false);
  });

  return { waiting, run, cancel };
}

export default useTimeoutFn;
