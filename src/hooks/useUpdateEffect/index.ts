import { useEffect, useState } from 'react';

type EffectCallback<T> = (newValues: T, oldValues: T) => void;
function useUpdateEffect<T extends any[]>(effect: EffectCallback<T>, deps: T) {
  const [isMount, setIsMount] = useState<boolean>(false);
  const [prevDeps, setPrevDeps] = useState<T>(deps);
  useEffect(() => {
    if (isMount) {
      effect(deps, prevDeps);
    } else {
      setIsMount(true);
    }
    setPrevDeps(deps);
  }, deps);
}

export default useUpdateEffect;
