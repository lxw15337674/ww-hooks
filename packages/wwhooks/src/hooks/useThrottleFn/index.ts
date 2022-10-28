import { Fn } from '../../common/interface';
import { useMemo, useRef } from 'react';
import useUnmount from '../useUnmount';
import { throttle } from 'lodash';
export interface ThrottleSettings {
  leading?: boolean | undefined;
  trailing?: boolean | undefined;
}
export function useThrottleFn<T extends Fn = Fn>(
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
export default useThrottleFn;
