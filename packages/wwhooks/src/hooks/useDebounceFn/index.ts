import { Fn } from '../../common/interface';
import { useMemo } from 'react';
import useUnmount from '../useUnmount';
import { debounce } from 'lodash';
import usePersistFn from '../usePersistFn';
interface DebounceSettings {
  leading?: boolean | undefined;
  maxWait?: number | undefined;
  trailing?: boolean | undefined;
}

export function useDebounceFn<T extends Fn = Fn>(
  fn: T,
  wait = 1000,
  options?: DebounceSettings,
) {
  const fnRef = usePersistFn(fn);
  const debouncedFn = useMemo(() => {
    return debounce<T>(fnRef, wait, options);
  }, [wait, options]);

  useUnmount(() => {
    debouncedFn.cancel();
  });
  const funcs = {
    cancel: debouncedFn.cancel,
    flush: debouncedFn.flush,
  };
  return [debouncedFn, funcs] as const;
}

export default useDebounceFn;
