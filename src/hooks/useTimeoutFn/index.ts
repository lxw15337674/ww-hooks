import { useBoolean } from '../../';
import { useCallback, useEffect, useRef, useState } from 'react';

// let timer = null
function useTimeoutFn(
  fn: () => void,
  delay: number = 0,
  mutate: boolean = true,
) {
  const timer = useRef(null);
  const [waiting, { setTrue, setFalse }] = useBoolean(false);
  const run = useCallback(() => {
    clearTimeout(timer.current);
    if (delay === undefined || delay === null) return;
    setTrue();
    timer.current = setTimeout(() => {
      fn();
      setFalse();
    }, delay);
  }, [fn, delay]);

  useEffect(() => {
    if (!mutate) {
      run();
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const cancel = useCallback(() => {
    clearTimeout(timer.current);
    setFalse();
  }, []);

  return { waiting, run, cancel };
}

export default useTimeoutFn;
