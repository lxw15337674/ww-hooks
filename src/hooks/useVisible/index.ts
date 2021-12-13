import { getTargetElement } from '../../common/dom';
import { useEffect, useRef } from 'react';
import useBoolean from '../useBoolean';
import { BasicTarget } from '../../common/interface';

function useVisible<T extends Element = Element>(target: BasicTarget<T>) {
  const [visible, setVisible] = useBoolean(false);
  useEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        setVisible(entry.isIntersecting);
      }
    });
    observer.observe(el as Element);
    return () => {
      observer.disconnect();
    };
  }, [target]);

  return visible;
}

export default useVisible;
