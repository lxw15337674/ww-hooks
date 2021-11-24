import { Fn } from '@/common/interface';
import { debounce, DebounceSettings } from 'lodash';
import { useMemo, useRef } from 'react';
import useUnmount from '../useUnmount';

export default function useDebounceFn<T extends Fn = Fn>(
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
