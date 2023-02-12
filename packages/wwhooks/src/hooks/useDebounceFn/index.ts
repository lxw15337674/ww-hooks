import { Fn } from '../../common/interface';
import { useMemo, useRef } from 'react';
import useUnmount from '../useUnmount';
import { debounce } from 'lodash';
interface DebounceSettings {
  leading?: boolean | undefined;
  maxWait?: number | undefined;
  trailing?: boolean | undefined;
}

export function useDebounceFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  options?: DebounceSettings,
) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const debouncedFn = useMemo(() => {
    return debounce<T>(fnRef.current, wait ?? 1000, options);
  }, [wait, fnRef, options]);

  useUnmount(() => {
    debouncedFn.cancel();
  });
  return {
    run: debouncedFn,
    cancel: debouncedFn.cancel,
    flush: debouncedFn.flush,
  };
}

export default useDebounceFn;