import { useBoolean } from '@/';
import { BasicTarget, getTargetElement } from '@/utils/dom';
import { useLayoutEffect } from 'react';

function useVisible(target: BasicTarget) {
  const [visible, setVisible] = useBoolean(false);

  useLayoutEffect(() => {
    const el = getTargetElement(target);
    if (!el) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    });

    observer.observe(el as HTMLElement);

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return visible;
}

export default useVisible;
