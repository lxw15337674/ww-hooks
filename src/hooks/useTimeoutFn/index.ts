import { useCallback, useEffect, useRef } from 'react';

// let timer = null
function useTimeoutFn(fn: () => void, delay: number) {
  const timer = useRef(null);
  useEffect(() => {
    if (delay === undefined || delay === null) return;
    timer.current = setTimeout(() => {
      fn();
    }, delay);
    return () => {
      clearTimeout(timer.current);
    };
  }, [delay]);

  const cancel = useCallback(() => {
    console.log(timer.current);
    clearTimeout(timer.current);
  }, []);

  return { cancel };
}

export default useTimeoutFn;
