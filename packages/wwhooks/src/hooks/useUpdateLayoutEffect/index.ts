import { useEffect, useState } from 'react';
import usePrevious from '../usePrevious';

type EffectCallback<T> = (newValues: T, oldValues: T) => void;
function useUpdateLayoutEffect<T extends any[]>(
  effect: EffectCallback<T>,
  deps: T,
) {
  const [isMount, setIsMount] = useState<boolean>(false);
  const prev = usePrevious<T>(deps);
  useUpdateLayoutEffect(() => {
    if (isMount) {
      effect(deps, prev);
    } else {
      setIsMount(true);
    }
  }, deps);
}

export default useUpdateLayoutEffect;
