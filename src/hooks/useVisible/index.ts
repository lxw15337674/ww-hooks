import { BasicTarget, getTargetElement } from '../../utils/dom';
import { useEffect } from 'react';
import useBoolean from '../useBoolean';

function useVisible<T extends Element = Element>(target: BasicTarget<T>) {
  const [visible, setVisible] = useBoolean(false);

  useEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      console.log(entries);
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
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
