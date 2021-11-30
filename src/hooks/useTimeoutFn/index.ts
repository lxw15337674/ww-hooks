import { useBoolean } from '../../';
import { useCallback, useEffect, useRef } from 'react';

function useTimeoutFn<T extends any[] = never>(
  fn: (...args: T) => void,
  delay: number = 0,
) {
  const timer = useRef(null);
  const [waiting, setWaiting] = useBoolean(false);
  const run = useCallback(
    (...args: T) => {
      clearTimeout(timer.current);
      if (delay === undefined || delay === null) return;
      setWaiting(true);
      timer.current = setTimeout(() => {
        fn(...args);
        setWaiting(false);
      }, delay);
    },
    [fn, delay],
  );

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const cancel = useCallback(() => {
    clearTimeout(timer.current);
    setWaiting(false);
  }, []);

  return { waiting, run, cancel };
}

export default useTimeoutFn;
