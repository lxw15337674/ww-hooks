import { useState, useLayoutEffect } from 'react';
import usePrevious from '../usePrevious';
import { EffectCallback } from '../useUpdateEffect';

export function useUpdateLayoutEffect<T extends any[]>(
  effect: EffectCallback<T>,
  deps: T,
) {
  const [isMount, setIsMount] = useState<boolean>(false);
  const prev = usePrevious<T>(deps);
  useLayoutEffect(() => {
    if (isMount) {
      effect(deps, prev);
    } else {
      setIsMount(true);
    }
  }, deps);
}

export default useUpdateLayoutEffect;