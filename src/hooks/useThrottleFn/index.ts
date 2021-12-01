import { Fn } from '@/common/interface';
import { DebouncedFunc, throttle, ThrottleSettings } from 'lodash';
import { useMemo, useRef } from 'react';
import useUnmount from '../useUnmount';

export default function useThrottleFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: ThrottleSettings,
) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const throttledFn = useMemo(() => {
    return throttle<T>(fnRef.current, wait ?? 1000, options);
  }, [wait, fnRef, options]);

  useUnmount(() => {
    throttledFn.cancel();
  });
  return {
    run: throttledFn,
    cancel: throttledFn.cancel,
    flush: throttledFn.flush,
  };
}