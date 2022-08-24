import { useEffect, useRef, useState } from 'react';
import { getTargetElement } from '../../common/dom';
import { BasicTarget } from '../../common/interface';

function useMutationObserver(
  target: BasicTarget,
  callback: MutationCallback,
  config: MutationObserverInit = {
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true,
    attributeOldValue: true,
  },
) {
  const [isObserving, setIsObserving] = useState<boolean>(true);
  const observer = useRef<MutationObserver>();
  useEffect(() => {
    if (isObserving) {
      const el = getTargetElement(target);
      if (!el) {
        return;
      }
      observer.current = new MutationObserver(callback);
      observer.current.observe(el, config);
    } else {
      observer.current?.disconnect();
      observer.current = undefined;
    }
    return () => {
      observer.current?.disconnect();
      observer.current = undefined;
    };
  }, [isObserving]);

  return [isObserving, setIsObserving] as const;
}
export default useMutationObserver;
