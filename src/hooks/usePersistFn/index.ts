import { Fn } from '@/common/interface';
import { useMemo, useRef } from 'react';

const usePersistFn = <T extends Fn = Fn>(fn: T) => {
  const fnRef = useRef<T>();
  fnRef.current = useMemo(() => fn, [fn]);
  const persistFn = useRef((...args) => {
    return fnRef.current(...args);
  });
  return persistFn.current as T;
};
export default usePersistFn;
