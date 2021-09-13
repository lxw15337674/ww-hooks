import { DependencyList, EffectCallback, useEffect, useState } from 'react';

const useUpdate = (effect: EffectCallback, deps: DependencyList) => {
  const [isMount, setIsMount] = useState<boolean>(false);
  useEffect(() => {
    if (isMount) {
      effect();
    } else {
      setIsMount(true);
    }
  }, deps);
};

export default useUpdate;
