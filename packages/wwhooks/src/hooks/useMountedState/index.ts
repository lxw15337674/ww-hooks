import { useEffect, useRef } from 'react';
import usePersistFn from '../usePersistFn';

export function useMountedState() {
  const mountedRef = useRef<boolean>(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const get = usePersistFn(() => mountedRef.current);
  return get;
}

export default useMountedState;
