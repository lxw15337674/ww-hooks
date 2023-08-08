import { useBoolean, usePersistFn } from '../..';
import { useEffect, useRef } from 'react';

export function useTimeoutFn<T extends any[] = never>(
  fn: (...args: T) => void,
  delay: number = 0,
) {
  const timer = useRef<any>();
  const [waiting, setWaiting] = useBoolean(false);
  const fnRef = usePersistFn(fn);
  const run = usePersistFn((...args: T) => {
    clearTimeout(timer.current);
    if (delay === undefined || delay === null) return;
    setWaiting(true);
    timer.current = setTimeout(() => {
      fnRef(...args);
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
  }, []);

  return [run, { waiting, cancel }] as const;
}


export default useTimeoutFn;
