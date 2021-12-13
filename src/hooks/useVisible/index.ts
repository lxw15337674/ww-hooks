import useBoolean from '../useBoolean';
import { BasicTarget } from '../../common/interface';
import useIntersectionObserver from '../useIntersectionObserver';
import { getTargetElement, isInViewPort } from '../../common/dom';
import { useState } from 'react';

function useVisible<T extends HTMLElement = HTMLElement>(
  target: BasicTarget<T>,
) {
  const [visible, setVisible] = useState(() => {
    const el = getTargetElement(target);
    return isInViewPort(el as HTMLElement);
  });
  useIntersectionObserver(target, (entry) => {
    setVisible(entry.isIntersecting);
  });
  return visible;
}

export default useVisible;
