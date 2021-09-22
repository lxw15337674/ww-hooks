import { Fn } from '@/common/interface';
import { debounce } from 'lodash';
import { useCallback, useMemo, useRef } from 'react';
import useUnmount from '../useUnmount';

export default function useDebounceFn<T extends Fn = Fn>(
  fn: T,
  wait?: number,
  leading?: boolean,
) {
  const debouncedFn = useMemo(() => {
    wait = wait ?? 1000;
    leading = leading ?? false;
    console.log(leading);
    return debounce<T>(fn, wait, { leading, trailing: !leading });
  }, [fn, wait, leading]);

  useUnmount(() => {
    debouncedFn.cancel();
  });

  return {
    run: debouncedFn,
    cancel: debouncedFn.cancel,
    flush: debouncedFn.flush,
  };
}
