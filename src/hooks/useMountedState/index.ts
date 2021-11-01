import { useCallback, useEffect, useRef } from 'react';

export default function useMountedState() {
  const mountedRef = useRef<boolean>(false);
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);
  const get = useCallback(() => mountedRef.current, []);
  return get;
}
