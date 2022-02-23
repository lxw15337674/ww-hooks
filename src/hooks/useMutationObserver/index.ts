import { useEffect } from 'react';
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
  useEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }
    const observer = new MutationObserver(callback);
    observer.observe(el as HTMLElement, config);
    return () => {
      observer.disconnect();
    };
  }, [target]);
}
export default useMutationObserver;
