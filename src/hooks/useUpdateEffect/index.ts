import { DependencyList, EffectCallback, useEffect, useState } from 'react';

const useUpdateEffect = (effect: EffectCallback, deps: DependencyList) => {
  const [isMount, setIsMount] = useState<boolean>(false);
  useEffect(() => {
    if (isMount) {
      effect();
    } else {
      setIsMount(true);
    }
  }, deps);
};

export default useUpdateEffect;
